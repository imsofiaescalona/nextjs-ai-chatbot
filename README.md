
🥩 Nutrition Guardian AI — Reliable Meat Science Chatbot
https://nextjs-ai-chatbot-blue-iota-28.vercel.app/

Thesis Project Documentation 

Nutrition Guardian AI is a reliable, accuracy-focused AI chatbot designed to support learners in meat science. It provides factual and educational responses about meat processing, food safety, nutrition, storage, spoilage, and related concepts. This version serves as the reliable baseline model used in the research study to evaluate how students interact with AI systems that aim for correctness and clarity.

The chatbot forms part of an academic thesis examining AI reliability, user trust, and learning outcomes in meat science education.

1. Purpose of the System

Provide meat science learners with a dependable AI study companion.

Reduce misinformation by prioritizing factual correctness.

Support teaching through clear explanations and science-grounded responses.

Serve as the control model for comparison with an unreliable chatbot version.

Enable collection of chat interactions for study analysis under IRB guidelines.

2. Summary of How It Works

Users interact with the chatbot through a web interface built with Next.js. Input is processed and sent to an OpenAI model through the Vercel AI SDK. The response is then returned, streamed, and displayed in real-time. Chat logs can be saved to a Postgres database for further research evaluation.

This version includes constraints in prompting to ensure safe, reliable, and non-hallucinatory output whenever possible.

3. Tech Stack
Technology	Use
Next.js (App Router)	Application framework & routing
React Server Components	Rendering & performance
Vercel AI SDK	Chat + LLM interface
OpenAI API	Model provider for responses
TailwindCSS + shadcn/ui	Styling & components
Neon Serverless Postgres	Chat history storage
Auth.js	Login & authentication
Vercel Blob (optional)	File/object storage
4. Key Features

Reliable, accuracy-driven responses

Designed specifically for meat science education

Clean chat UI with streaming text

Supports chat history retention for analysis

Configurable with environment variables

Expandable for quizzes, course material, or instructor dashboards

5. Installation & Running Locally
git clone <your_repository_link>
cd nutrition-guardian-ai
npm install
npm run dev


Visit:

http://localhost:3000

6. Environment Variables

Create a .env.local file and add:

OPENAI_API_KEY=your_openai_key

DATABASE_URL=your_neon_postgres_url
AUTH_SECRET=your_auth_secret
AUTH_URL=http://localhost:3000/api/auth

# Optional if using uploads:
BLOB_READ_WRITE_TOKEN=your_token_here


Adjust based on your configuration.

7. Deployment (Vercel)
vercel deploy


After deploy, add environment variables in:

Vercel → Project Settings → Environment Variables

8. Use in Thesis Research

This chatbot functions as the reliable AI agent for the study. It will be compared with an unreliable chatbot to analyze:

User trust and perception

Ability to detect inaccuracies

Learning outcomes and decision-making

Response evaluation based on accuracy and clarity

All user interaction follows IRB-approved data handling standards.



Study quiz mode for classroom use

Instructor dashboard for data review

Integration with food safety regulatory sources
