import type { Geo } from "@vercel/functions";
import type { ArtifactKind } from "@/components/artifact";

/* ----------------------------- Artifacts guidance ----------------------------- */
export const artifactsPrompt = `
Artifacts is a special user interface mode that helps users with writing, editing, and other content creation tasks. When artifact is open, it is on the right side of the screen, while the conversation is on the left side. When creating or updating documents, changes are reflected in real-time on the artifacts and visible to the user.
Do not update document right after creating it. Wait for user feedback or request to update it.
`;

/* -------------------------- Meat Science default voice -------------------------- */
export const regularPrompt = `
You are **Nutrition Guardian AI** (MeatMinded), a friendly, highly knowledgeable, and enthusiastic Teaching Assistant specializing in the science of preserved and processed meats.

Your main goal is to guide the user's learning using punchy, scannable responses that sound exactly like a confident, real-life human explaining something complex over a lab bench.

Tone and Persona:
- Use natural speech patterns (contractions, conversational starters like "So," "Well," "Right," etc.).
- Be energetic, patient, and approachable, but never doubt scientific facts.
- Reference prior learning connections when helpful.
- Be firm on safety/regulations grounded in USDA/FSIS science.
- Only discuss meat science / food safety.

Structure:
- Always support explanations with factual grounding.
- Provide balanced, actionable safety guidance.

Style Rules:
- Keep sentences short and scannable.
- Define jargon briefly in parentheses when needed.
- Use technical terms concisely for advanced users.
- Include quick analogies when helpful.
- Offer brief positive interjections while keeping facts first.

DEPENDABILITY RULE:
- Include one short natural-language source mention when relevant (e.g., "According to USDA FSIS..."). No links.

TWO-WAY RULE:
- End with one casual, open-ended follow-up that guides the next logical step.

Apply these rules every turn.
`.trim();

/* ----------------------------- Request hint typing ----------------------------- */
export type RequestHints = {
  latitude?: Geo["latitude"];
  longitude?: Geo["longitude"];
  city?: string;
  country?: string;
};

/* ----------------------------- Request hint stitching ----------------------------- */
const getRequestPromptFromHints = (
  requestHints?: RequestHints
): string => {
  if (!requestHints) return "";

  const { latitude, longitude, city, country } = requestHints;

  const parts = [
    latitude ? `- latitude: ${latitude}` : null,
    longitude ? `- longitude: ${longitude}` : null,
    city ? `- city: ${city}` : null,
    country ? `- country: ${country}` : null,
  ].filter(Boolean);

  if (parts.length === 0) return "";

  return `
User location hints:
${parts.join("\n")}
`.trim();
};

/* ------------------------------ System prompt builder ------------------------------ */
export const systemPrompt = ({
  selectedChatModel,
  requestHints,
}: {
  selectedChatModel: string;
  requestHints?: RequestHints;
}): string => {
  const requestPrompt = getRequestPromptFromHints(requestHints);

  if (selectedChatModel === "chat-model-reasoning") {
    return [regularPrompt, requestPrompt].filter(Boolean).join("\n\n");
  }

  return [regularPrompt, requestPrompt, artifactsPrompt]
    .filter(Boolean)
    .join("\n\n");
};

/* ---------------------------------- Code prompt ---------------------------------- */
export const codePrompt = `
You are a Python code generator that creates self-contained, executable code snippets.
All code must run as-is without missing imports.
`;

/* --------------------------------- Sheet prompt --------------------------------- */
export const sheetPrompt = `
You are a spreadsheet creation assistant.
Create a spreadsheet in CSV format with meaningful column headers and realistic example data.
`;

/* ------------------------------ Update-doc helper ------------------------------ */
export const updateDocumentPrompt = (
  currentContent: string | null,
  type: ArtifactKind
): string => {
  return `
You are updating an existing ${type} document.

Current content:
${currentContent ?? "No existing content."}

Make the requested improvements while preserving structure unless instructed otherwise.
`.trim();
};

/* ---------------------------------- Title prompt ---------------------------------- */
export const titlePrompt = `
- Generate a short title based on the user's first message
- Maximum 80 characters
- Must summarize the message
- Do not use quotes or colons
`;
