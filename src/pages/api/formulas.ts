const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

async function run(chapterName:string) {
    try {
        const chatSession = model.startChat({
            generationConfig,
            history: [],
        });

        const result = await model.generateContent(
            `Generate some Test cards for IIT JEE chapter All Mathematical formulas and Descriptive and write four formulas as options as A,B,C,D in latex from the chapter ${chapterName} in JSON format so it is useful for JEE Advance even cover all ADVANCED formulas. Include "level", "title", "Options","answer" Only return json nothing else`
        );

        const responseText = await result.response.text();
        return extractAndJsonify(responseText); // Call to extract JSON
    } catch (error) {
        console.error("Error generating content:", error);
        throw new Error("Failed to generate content");
    }
}

export default async function handler(req:any, res:any) {
    if (req.method === 'POST') {
        const { chapterName } = req.body;

        // console.log('Chapter Name:', chapterName);

        try {
            const formulas = await run(chapterName);
            return res.status(200).json({ formulas });
        } catch (error:any) {
            console.error("API Error:", error.message);
            return res.status(500).json({ error: error.message });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

function extractAndJsonify(inputString: string) {
    const start = inputString.indexOf('[');
    const end = inputString.lastIndexOf(']');
    if (start !== -1 && end !== -1) {
        const extractedString = inputString.slice(start, end + 1);
        // console.log("Extracted String:", extractedString);

        try {
            const formattedString = extractedString
                .replace(/"Options":\s*{([^}]*)}/g, (_, p1) => {
                    const optionsArray = p1
                        .split(',')
                        .map((option: string) => `"${option.trim().replace(/.*?:\s*/, '').trim()}"`);
                    return `"Options": [${optionsArray.join(', ')}]`;
                });

            const jsonData = JSON.parse(formattedString);

            if (!Array.isArray(jsonData)) {
                throw new Error("Parsed data is not an array");
            }

            jsonData.forEach((item: any, index: number) => {
                if (!item.level || !item.title || !item.Options || !item.answer) {
                    throw new Error(`Item at index ${index} is missing required fields`);
                }
            });
            return jsonData;
        } catch (error: any) {
            console.error("JSON Parsing Error:", error.message);
            return { error: `Error decoding JSON: ${error.message}` };
        }
    } else {
        return { error: "Brackets not found" };
    }
}
