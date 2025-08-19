**AI University Counseling Web Application**
---

## 1. Project Overview

**Problem Statement**
Students who have just completed 12th grade struggle to choose suitable universities based on budget, interests, and career goals.

**Solution Approach**
A conversational AI platform that guides students through university selection using chat-based interaction, providing personalized recommendations with clear explanations.

**Key Features**

* AI-powered chat counselor
* University recommendation engine
* Interactive university exploration
* Save and compare functionality

---

## 2. System Architecture

**Tech Stack**

* Frontend: React + Vite + TailwindCSS + shadcn/ui
* Backend: Node.js + Express
* Database: Firebase Firestore
* AI Service: Google Gemini Pro (Free)
* Deployment: Vercel (Frontend) + Railway (Backend)

**Architecture Flow**

```
React App ⇆ Express API ⇆ Firestore Database
              ↓
          Gemini Pro API
```

---

## 3. Core Components

### 3.1 Frontend Components

**Pages**

* **LandingPage** – Welcome and call-to-action
* **ProfileSetup** – Basic student information collection
* **ChatInterface** – Main AI counseling interaction
* **UniversityDetail** – Detailed university information
* **SavedUniversities** – Student’s saved university list

**Key Components**

* **ChatMessage** – Individual chat bubbles (AI/User)
* **UniversityCard** – University display with match score + save button
* **ProfileForm** – Student information input

---

### 3.2 Backend Structure

**API Endpoints**

* `POST /api/chat` – AI conversation handling
* `GET /api/universities` – Fetch university data
* `POST /api/save` – Save/unsave universities
* `GET /api/saved/:id` – Get saved universities

**Controllers**

* `chatController` – Manages AI interactions
* `universityController` – University data operations

---

## 4. Database Design

**Universities Collection**

```json
{
  "id": "iit_madras",
  "name": "IIT Madras",
  "location": "Chennai, Tamil Nadu",
  "programs": ["Computer Science", "Mechanical", "AI/ML"],
  "fees": { "total": 850000, "category": "5-15L" },
  "ranking": 1,
  "type": "Government",
  "tags": ["Engineering", "Research"]
}
```

**Students Collection**

```json
{
  "id": "student_001",
  "name": "Rahul",
  "stream": "Science",
  "state": "Karnataka",
  "budget": "5-15L",
  "interests": ["Computer Science"],
  "savedUniversities": ["iit_madras", "bits_pilani"]
}
```

---

## 5. AI Integration

**Chat Flow**

1. Student sends message
2. Backend constructs prompt with profile + filtered universities
3. Gemini Pro returns structured recommendations
4. Frontend displays results as chat + university cards

**Prompt Strategy**

```
You are a university counselor.
Student: {name}, {stream}, budget: {budget}
Available universities: {filtered_list}
Recommend 3 best matches with reasons.
Respond ONLY in valid JSON:
{
  "message": "...",
  "universities": [
    { "name": "...", "match": "92%", "reason": "..." }
  ]
}
```

**AI Response Handling**

* Parse JSON into chat + university cards
* Fallback: if AI returns invalid JSON, display friendly error message

---

## 6. User Experience Flow

**Step-by-Step Journey**

1. **Landing** → Student sees value proposition
2. **Profile** → Quick setup (name, stream, state, budget)
3. **Chat** → AI asks questions, provides recommendations
4. **Explore** → Click cards for more details
5. **Save** → Build shortlist of universities

**Key Interactions**

* Chat interface: WhatsApp-style
* University cards embedded in chat with save buttons
* Detail view for more info

---

## 7. Implementation Plan

**Phase 1: Setup (2 hours)**

* Create React app with Vite
* Setup Express server
* Initialize Firestore
* Seed \~10–15 universities

**Phase 2: Core Features (8 hours)**

* Build chat interface
* Implement AI integration
* Create university cards
* Save/unsave functionality
* SavedUniversities page

**Phase 3: Polish (4 hours)**

* Add university detail page
* Style with TailwindCSS + shadcn/ui

**Phase 4: Stretch (time permitting)**

* Swipe functionality
* Additional universities
* Advanced UI polish

**Phase 5: Final (1 hour)**

* Deploy to Vercel + Railway
* Testing + prepare demo

---

## 8. Technical Specifications

**Frontend State Management**

* `useState` for most components
* Context only for global profile
* localStorage for session persistence

**Backend Security**

* API keys in environment variables
* Input validation on all endpoints
* Basic CORS setup for frontend

**Database Operations**

* CRUD operations on Firestore
* Simple filtering by budget/stream

**Performance Considerations**

* Optimized prompts to reduce API cost/latency
* Lazy loading for images
* Pagination if needed

---

## 9. Unique Features

**What Makes Us Different**

* Conversational AI → feels natural
* Explainable AI → shows *why* each recommendation is given
* Budget-aware → realistic suggestions
* Demo-friendly → save + shortlist universities

**Engagement Elements**

* Match percentage scores
* Visual university cards
* Personalized reasoning in AI replies

---

## 10. Testing & Quality Assurance

**Testing Strategy**

* Component testing for React components
* API endpoint testing
* Validate AI JSON response parsing
* End-to-end user journey test

**Quality Metrics**

* AI responses handled reliably (with fallback)
* University search fast (<1s DB fetch)
* Mobile-first responsive UI
* Accessible components

---