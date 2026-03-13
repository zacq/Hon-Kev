import { GoogleGenerativeAI } from "@google/generative-ai";
import { ACHIEVEMENTS, POLICIES, CANDIDATE_NAME } from '../constants';

// Initialize Gemini Client
const getAiClient = () => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';
  if (!apiKey) {
    throw new Error("VITE_GEMINI_API_KEY is not set");
  }
  return new GoogleGenerativeAI(apiKey);
};

const SYSTEM_INSTRUCTION = `
You are the AI Campaign Spokesperson for ${CANDIDATE_NAME}.
Your goal is to inform voters, engage volunteers, and explain the candidate's vision.

Knowledge Base:
Candidate: ${CANDIDATE_NAME}
Constituency: Bahati
Achievements: ${JSON.stringify(ACHIEVEMENTS)}
Policies: ${JSON.stringify(POLICIES)}

Tone: Professional, inspiring, empathetic, and optimistic. 
Focus strictly on ${CANDIDATE_NAME}'s results and future plans.
If asked about donation, direct them to the Donate page.
If asked about volunteering, direct them to the Get Involved page.
Keep answers concise (under 100 words) unless asked for a detailed policy breakdown.
Respond in a friendly, conversational manner.
`;

export const getChatResponse = async (userMessage: string): Promise<string> => {
  try {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      return "I'm currently offline (API Key missing). Please check back later.";
    }

    const genAI = getAiClient();
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: SYSTEM_INSTRUCTION
    });

    const result = await model.generateContent(userMessage);
    const response = await result.response;
    const text = response.text();

    return text || "I apologize, I couldn't formulate a response at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am having trouble connecting to the campaign servers right now.";
  }
};