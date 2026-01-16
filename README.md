# Simple Item Store (Next.js + Express + MongoDB)

A simple item store application built with Next.js (App Router) that consumes an Express + MongoDB REST API. Includes public pages, cookie-based mock authentication, and a protected item creation page.

## Tech Stack
- Next.js 15/16 (App Router)
- Tailwind CSS + daisyUI
- Express.js + MongoDB (backend API)

## Setup & Installation

### 1) Backend
Run your backend server (port 5000 recommended).

### 2) Frontend
Create `.env.local`:
- NEXT_PUBLIC_API_URL=http://localhost:5000
- MOCK_EMAIL=admin@example.com
- MOCK_PASSWORD=123456

Install and run:
```bash
npm install
npm run dev
