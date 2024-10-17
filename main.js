import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "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", // Store your API key securely in an environment variable
});

const openai = new OpenAIApi(configuration);

async function main() {
  const completion = await openai.createCompletion({
    model: "text-davinci-003", // Choose the model you want to use
    prompt: "Say this is a test",
  });
  console.log(completion.data.choices[0].text);
}

main();