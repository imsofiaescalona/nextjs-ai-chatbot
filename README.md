🥩 Nutrition Guardian AI — Reliable Meat Science Chatbot
https://nextjs-ai-chatbot-blue-iota-28.vercel.app/

Nutrition Guardian AI is a web-based chatbot built for students and instructors in meat science. It answers questions accurately using large language models, helping users learn about meat safety, processing, storage, and nutrition with dependable responses and clear explanations.

This version is the reliable mode — focused on factual output, safety-aware responses, and sources when possible.

🚀 Tech Stack

Next.js App Router

Vercel AI SDK (chat generation + tool calls)

OpenAI model provider

shadcn/ui + Tailwind CSS for UI

React Server Components + Server Actions

Neon Postgres — chat history + user data

Auth.js — authentication management

Vercel Blob — file storage when needed

🔍 Key Features

Reliable, accuracy-focused responses for meat science topics

Clean chat UI with typing indicators and message history

Data stored in Postgres for future research analysis

Secure authentication for controlled access

Flexible model usage (OpenAI by default)

Easy to extend — perfect for comparison studies with an unreliable version

🛠 Local Setup

Clone this repository:

git clone https://github.com/your-username/nutrition-guardian-ai.git
cd nutrition-guardian-ai


Install dependencies:

npm install


Start development server:

npm run dev


The app should now be running at:

http://localhost:3000

🔑 Environment Variables (.env.local)

Create a .env.local file in the project root and add:

OPENAI_API_KEY=your_openai_key_here

DATABASE_URL=your_neon_postgres_url
AUTH_SECRET=your_auth_secret
AUTH_URL=http://localhost:3000/api/auth

BLOB_READ_WRITE_TOKEN=optional_if_using_blob


(Only include what your setup actually uses.)

📁 Project Structure
/
├── app/
│   ├── (chat)/
│   ├── api/
│   └── layout.tsx
├── components/
├── lib/
├── styles/
└── README.md

📦 Deployment

You can deploy directly to Vercel:

vercel deploy


Make sure your environment variables are added in Vercel → Project Settings → Environment Variables.

Future Add-Ons (if you plan it)

Connect unreliable-mode model for comparison studies

Add citations + evidence links

Quiz generator for students

Dashboard for data export + study analysis

Voice input or image recognition for meat cuts

If you'd like, I can also generate:

📌 A logo banner
📌 A more aesthetic version with badges
📌 Contributor/License section
📌 Research-study version with methodology + ethics notes

Just say what vibe you want — cute, academic, lab-style, or clean professional.

You said:
its for my thesis
ChatGPT said:

Got it — you need a README that fits an academic thesis project rather than just a GitHub repo. Something formal, clear, and research-oriented, explaining purpose, scope, reliability, and how it supports your study. Here's a version written like a project artifact that could be included in your appendix or repository.

Nutrition Guardian AI – Reliable Meat Science Chatbot

System Documentation / Thesis Project README

Nutrition Guardian AI is a reliable large-language-model-based chatbot developed for use in meat science education. The system is designed to provide factual, safe, and well-structured responses related to meat processing, safety, nutrition, storage practices, and related scientific concepts. This version intentionally prioritizes correctness and clarity, making it suitable as a reference assistant for learning and comparison against an intentionally unpredictable/unreliable chatbot in the research study.

This project supports the thesis investigation into AI reliability, trust, accuracy, and student interaction patterns within meat science topics.

1. Project Purpose

Provide a digital learning tool for meat science students.

Deliver accurate responses with educational value.

Serve as the reliable baseline model for experimental comparison.

Support research on how learners engage with trustworthy AI systems.

Enable collection of chat interactions for analysis under IRB-approved protocol.

2. System Overview

Nutrition Guardian AI is a web application that allows users to chat with an AI model in real time. The interface resembles a modern educational chatbot, with chat history tracking and user session support.

The system uses OpenAI models to generate reliable responses. Accuracy, tone, and output behavior are shaped through system prompts and guardrails to reduce hallucination and ensure safety in information related to food handling.

3. Technical Stack
Component	Role
Next.js (App Router)	Frontend framework
React Server Components + Server Actions	Rendering + backend logic
Vercel AI SDK	Chat generation + streaming responses
OpenAI API	Model provider for responses
TailwindCSS + shadcn/ui	Styling and UI components
Neon Postgres	Stores chat logs for research analysis
Auth.js	Secure user authentication
Vercel Blob (optional)	File/object storage
4. Key Features

Reliable and safety-conscious response generation

Domain-specific prompting for meat science topics

Simple, intuitive chat interface

Conversation persistence for research evaluation

Suitable for classroom or controlled study use

Extendable to quizzes, feedback systems, and multi-agent comparison

5. Running the System Locally
git clone <repository_link_here>
cd nutrition-guardian-ai
npm install
npm run dev


Runs at:

http://localhost:3000

6. Environment Configuration

Create a .env.local file with credentials:

OPENAI_API_KEY=your_key_here
DATABASE_URL=your_neon_postgres_url
AUTH_SECRET=your_auth_secret
AUTH_URL=http://localhost:3000/api/auth


(Variable list may be adjusted depending on final deployment setup.)

7. Deployment

The project can be deployed using Vercel, allowing easy access for participants during data collection.

vercel deploy


After deployment, environment variables must be configured in the project's settings.

8. Research Use

This application is intended for:

Data collection on student interaction with reliable AI

Analysis of accuracy, trust, clarity, and perceived usefulness

Comparison with an unreliable chatbot counterpart (same interface)

All collected data should comply with IRB and privacy guidelines.

9. Planned Extensions

Explanation-with-sources mode

Visual cut identification using vision models

Quiz or scenario-based learning modules

Instructor dashboard for reviewing responses and logs

If you want, I can also prepare:

🔹 A methods appendix page describing how the chatbot fits into your experiment
🔹 A system architecture diagram
🔹 A prompt design section for thesis methodology
🔹 A formal citation entry for referencing the tool in your paper

Just tell me what you want next.

You said:
give me a full copyable 
ChatGPT said:

Here’s a fully copy-paste ready README, formatted cleanly for your thesis or GitHub repository as the official documentation for your reliable Nutrition Guardian AI chatbot.

🥩 Nutrition Guardian AI — Reliable Meat Science Chatbot

Thesis Project Documentation / README

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

9. Future Improvements

Evidence-based citations in responses

Visual cut/quality recognition (LLM vision models)

Study quiz mode for classroom use

Instructor dashboard for data review

Integration with food safety regulatory sources
