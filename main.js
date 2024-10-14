//AIzaSyAmIxGbJrT-qN_dUCdhR0zYbthaH3l8MN4


const {
    GoogleGenerativeAI,
    
  } = require("@google/generative-ai");
  
  // const apiKey = process.env.API_KEY;
  const genAI = new GoogleGenerativeAI("key");
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    propmt : "You are a app Brieffly which make complex formulas in less than 60words in a card for IIT JEE, there will be multiple cards If I send the chapter name it should return a json with level,title,description,image link use gemini api for generating.Only return json nothing else",
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run() {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
    const chaptername = "Trigonometry"
    const result = await model.generateContent("Generate some cards for IIT JEE chapter All Mathematical formulas and write formulas part in latex of \"TrigonoMetry\" in JSON format so it is useful for JEE Advance even cover all ADVANCED formulas. Include \"level\", \"title\", \"Formulas\" ");
    console.log(result.response.text());
  }
  
  run();
