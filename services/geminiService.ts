import { GoogleGenAI } from "@google/genai";
import { ACHIEVEMENTS, POLICIES, CANDIDATE_NAME } from '../constants';

// Initialize Gemini Client lazily or handle missing key
const getAiClient = () => {
  const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY || '';
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not set");
  }
  return new GoogleGenAI({ apiKey });
};

const SYSTEM_INSTRUCTION = `
You are the AI Campaign Spokesperson for ${CANDIDATE_NAME}.
Your goal is to inform voters, engage volunteers, and explain the candidate's vision.

Knowledge Base:
Achievements: ${JSON.stringify(ACHIEVEMENTS)}
Policies: ${JSON.stringify(POLICIES)}

Tone: Professional, inspiring, empathetic, and strictly non-partisan in terms of attacking others. Focus on David Mwana's results.
If asked about donation, direct them to the Donate page.
If asked about volunteering, direct them to the Get Involved page.
Keep answers concise (under 100 words) unless asked for a detailed policy breakdown.
`;

export const getChatResponse = async (userMessage: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return "I'm currently offline (API Key missing). Please check back later.";
    }

    const ai = getAiClient();
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "I apologize, I couldn't formulate a response at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am having trouble connecting to the campaign servers right now.";
  }
};