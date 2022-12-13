import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
dotenv.config();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function generator(req, res) {
  const { prompt } = req.body;
  const imageSize = "512x512";
  try {
    const response = await openai.createImage({
      //   prompt: " a tree with golden leaves in a sci-fi fiction movie",
      prompt,
      n: 1,
      size: imageSize,
    });
    const imageUrl = response.data.data[0].url;
    res.status(200).json({
      success: true,
      data: imageUrl,
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }

    res.status(400).json({
      success: false,
      error: "try again sometime",
    });
  }
}
