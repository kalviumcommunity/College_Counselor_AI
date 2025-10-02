# 🎓 College Counselor AI

  

> An intelligent, AI-powered college counseling platform that provides personalized academic guidance 24/7.

  

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://collegecounselorai.vercel.app)

[![Backend API](https://img.shields.io/badge/API-active-blue)](https://college-counselor-ai.onrender.com)
  

---

  

## 🌟 Features

  

- **💬 Real-time AI Chat**: Instant, personalized college counseling powered by Google Gemini 2.5 Flash

- **🎯 Smart Guidance**: Context-aware responses that understand your unique academic situation

- **📱 Responsive Design**: Beautiful, modern UI that works seamlessly across all devices

- **🔒 Secure & Private**: Enterprise-grade security with Firebase authentication

- **⚡ Lightning Fast**: Optimized performance with Vite and modern React practices

  

---

  

## 🚀 Live Deployment

  

| Service | URL | Status |

|---------|-----|--------|

| **Frontend** | [collegecounselorai.vercel.app](https://collegecounselorai.vercel.app) | ✅ Live |

| **Backend API** | [college-counselor-ai.onrender.com](https://college-counselor-ai.onrender.com) | ✅ Active |

  

---

  

## 🛠️ Tech Stack

  

### Frontend

- **Framework**: React 18

- **Build Tool**: Vite

- **Styling**: Tailwind CSS + shadcn/ui

- **Routing**: React Router v6

- **Animations**: Framer Motion

- **Icons**: Lucide React

  

### Backend

- **Runtime**: Node.js

- **Framework**: Express.js

- **Database**: Firebase Firestore

- **AI Model**: Google Gemini 2.5 Flash

- **Authentication**: Firebase Admin SDK

  

### DevOps

- **Frontend Hosting**: Vercel

- **Backend Hosting**: Render

- **Version Control**: Git & GitHub

  

---

  

## 📦 Local Development Setup

  

### Prerequisites

- Node.js 18+ and npm

- Firebase account

- Google AI Studio API key

  

### Backend Setup

  

1. **Clone the repository**

   ```bash

   git clone https://github.com/your-org/college_counselor_ai.git

   cd college_counselor_ai/backend

   ```

  

2. **Install dependencies**

   ```bash

   npm install

   ```

  

3. **Create environment file**

   Create `backend/.env`:

   ```env

   # Gemini AI

   GEMINI_API_KEY=your_gemini_api_key

   # Firebase Configuration

   FIREBASE_PROJECT_ID=your_project_id

   FIREBASE_PRIVATE_KEY_ID=your_key_id

   FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"

   FIREBASE_CLIENT_EMAIL=your_service_account@project.iam.gserviceaccount.com

   FIREBASE_CLIENT_ID=your_client_id

   FIREBASE_CERT_URL=your_cert_url

   # Server Config

   PORT=5000

   NODE_ENV=development

   ```

  

4. **Start development server**

   ```bash

   npm run dev

   ```

   Backend will run at `http://localhost:5000`

  

### Frontend Setup

  

1. **Navigate to frontend**

   ```bash

   cd ../frontend/vite-project

   ```

  

2. **Install dependencies**

   ```bash

   npm install

   ```

  

3. **Create environment file**

   Create `frontend/vite-project/.env`:

   ```env

   VITE_API_BASE_URL=http://localhost:5000

   ```

  

4. **Start development server**

   ```bash

   npm run dev

   ```

   Frontend will run at `http://localhost:5173`

  

---

  

## 🔐 Environment Variables

  

### Backend Variables

  

| Variable | Description | Required |

|----------|-------------|----------|

| `GEMINI_API_KEY` | Google AI Studio API key | ✅ Yes |

| `FIREBASE_PROJECT_ID` | Firebase project identifier | ✅ Yes |

| `FIREBASE_PRIVATE_KEY` | Firebase service account private key | ✅ Yes |

| `FIREBASE_CLIENT_EMAIL` | Firebase service account email | ✅ Yes |

| `NODE_ENV` | Environment mode (development/production) | ✅ Yes |

  

### Frontend Variables

  

| Variable | Description | Required |

|----------|-------------|----------|

| `VITE_API_BASE_URL` | Backend API base URL | ✅ Yes |

  

---

  

## 📁 Project Structure

  

```

college_counselor_ai/

├── backend/

│   ├── config/

│   │   └── firebase.js          # Firebase configuration

│   ├── routes/

│   │   ├── chatRoutes.js        # Chat endpoints

│   │   └── universityRoutes.js  # University data endpoints

│   ├── services/

│   │   └── geminiService.js     # Gemini AI integration

│   ├── index.js                 # Express server entry point

│   └── package.json

│

├── frontend/

│   └── vite-project/

│       ├── src/

│       │   ├── components/      # Reusable UI components

│       │   ├── pages/

│       │   │   ├── Home.jsx     # Landing page

│       │   │   └── Chat.jsx     # Chat interface

│       │   ├── App.jsx          # Main app component

│       │   └── main.jsx         # Entry point

│       ├── public/

│       └── package.json

│

└── README.md

```

  

---


## 🔒 Security Best Practices

  

- ✅ All sensitive credentials stored as environment variables

- ✅ Firebase private keys never committed to repository

- ✅ CORS configured to allow only trusted origins

- ✅ API keys restricted to specific services

- ✅ Environment-specific configurations

  

---

  

## 🤝 Contributing

  

Contributions are welcome! Please feel free to submit a Pull Request.

  

1. Fork the repository

2. Create your feature branch (`git checkout -b feature/AmazingFeature`)

3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)

4. Push to the branch (`git push origin feature/AmazingFeature`)

5. Open a Pull Request

  

---

  

## 📝 License

  

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

  

---

  

## 👨‍💻 Author

  

**Your Name**

- GitHub: [@jk-06](https://github.com/jk-06)

- LinkedIn: [Jebakumar](https://www.linkedin.com/in/jebakumar-b447ab361/)

  

---

  

## 🙏 Acknowledgments

  

- Google Gemini for AI capabilities

- Firebase for backend infrastructure

- Vercel and Render for hosting services

- The open-source community

  

---

  

<div align="center">

  <p>Made with ❤️ for students navigating their college journey</p>

  <p>⭐ Star this repo if you find it helpful!</p>

</div>