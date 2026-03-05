# Luminus Sun

> Intelligent Energy Management and Optimization System through AI-Powered Predictive Analysis

[![Hackathon InovaUni 2025](https://img.shields.io/badge/Hackathon-InovaUni%202025-7C3AED?style=for-the-badge)](https://github.com/arthurpestana)
[![SDG 7](https://img.shields.io/badge/SDG-7%20Clean%20Energy-F59E0B?style=for-the-badge)](https://sdgs.un.org/goals/goal7)
[![License: MIT](https://img.shields.io/badge/License-MIT-22C55E?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Status](https://img.shields.io/badge/Status-Active-22C55E?style=for-the-badge)]()

---

### Stack

![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript_5.0-007ACC?style=flat-square&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React_18-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=flat-square&logo=sass&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled--Components-DB7093?style=flat-square&logo=styled-components&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB_7.0-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat-square&logo=mongoose&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1?style=flat-square&logo=zod&logoColor=white)

### Automation & AI

![n8n](https://img.shields.io/badge/n8n-EA4B71?style=flat-square&logo=n8n&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Gemini_Flash_2.5-8E75B2?style=flat-square&logo=google&logoColor=white)
![OpenWeather](https://img.shields.io/badge/OpenWeather_API-EB6E4B?style=flat-square&logo=openweathermap&logoColor=white)
![SendGrid](https://img.shields.io/badge/SendGrid-3994FF?style=flat-square&logo=sendgrid&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-FF6F61?style=flat-square)

### Data Sources

![INMET](https://img.shields.io/badge/INMET-009B3A?style=flat-square)
![ONS](https://img.shields.io/badge/ONS-003087?style=flat-square)

---

## About

**Luminus Sun** is a full-stack web platform developed for the **4th InovaUni Hackathon 2025**, focused on the theme of **Clean and Sustainable Energy**. The platform integrates Brazilian meteorological data (INMET/ONS), generative AI, and automated workflow orchestration via n8n to optimize residential energy consumption based on hourly weather forecasting.

### Repositories

| Module | Repository |
|---|---|
| Frontend | [hackathon-2025-frontend](https://github.com/arthurpestana/hackathon-2025-frontend) |
| Backend | [hackathon-2025-backend](https://github.com/arthurpestana/hackathon-2025-backend) |

---

## Architecture

```
luminus-sun/
├── frontend/          # Web interface — Next.js + React + SCSS
│   ├── app/           # App Router (Next.js 14)
│   ├── components/    # Reusable components
│   ├── lib/           # Utilities and configurations
│   └── styles/        # SCSS and Styled Components
│
└── backend/           # API + Automation + AI
    ├── app/api/       # REST endpoints (Next.js API Routes)
    ├── models/        # Mongoose schemas
    ├── lib/           # External integrations
    └── workflows/     # n8n configurations (JSON)
```

### n8n Workflows

**Workflow 1 — Scheduled Daily Report**
```
Schedule Trigger → HTTP Request (OpenWeather API) → Edit Fields → AI Agent → Send Email (SendGrid)
                                                                     |
                                                         ┌───────────┴───────────┐
                                                  Google Gemini         MongoDB Chat Memory
```

**Workflow 2 — Conversational Agent via Webhook**
```
Webhook (POST) → AI Agent → Respond to Webhook
                    |
        ┌───────────┴───────────┐
 Google Gemini        MongoDB Chat Memory
```

---

## Data Models

### User
```ts
{
  _id: ObjectId,
  name: string,
  email: string,
  password: string,        // bcrypt hash
  city: string,
  state: string,
  latitude: number,
  longitude: number,
  inmetStation: string,
  createdAt: Date
}
```

### AutomationIntegration
```ts
{
  _id: ObjectId,
  userId: ObjectId,
  type: "RELAY" | "SENSOR" | "BATTERY",
  status: string,
  metadata: Record<string, unknown>,
  createdAt: Date
}
```

### ChatMemory
```ts
{
  _id: ObjectId,
  userId: ObjectId,
  sessionId: string,
  messages: Array<{ role: string; content: string; timestamp: Date }>,
  updatedAt: Date
}
```

---

## Variables Processed by the AI

| Variable | Source | Description |
|---|---|---|
| `latitude` / `longitude` | INMET | Nearest weather station coordinates |
| `temp_min` / `temp_max` | OpenWeather | Daily temperature range |
| `clouds` | OpenWeather | Cloud cover (%) |
| `humidity` | OpenWeather | Relative humidity (%) |
| `rain` | OpenWeather | Precipitation volume (mm) |
| `wind_speed` | OpenWeather | Wind speed (m/s) |
| `pressure` | OpenWeather | Atmospheric pressure (hPa) |
| `visibility` | OpenWeather | Visibility (m) |

---

## Operational Flow

```
1. Registration     → User provides name, email, city, and state
2. Geocoding        → API identifies coordinates and nearest INMET station
3. Data Fetching    → OpenWeather request: hourly forecast (24h)
4. Processing       → AI Agent analyzes variables with current temporal context
5. Calculation      → Estimated solar irradiation for 10m² of solar panels
6. Report           → Responsive HTML generation with top 3 time slots + daily tips
7. Delivery         → Email sent to user via SendGrid
8. Persistence      → History stored in MongoDB (conversational memory)
```

---

## Installation

### Prerequisites

- Node.js 18+ or Bun 1.3.1+
- MongoDB 7.0+ (local or Atlas)
- Configured n8n instance
- API keys: OpenWeather, Google Gemini, SendGrid

### Setup

```bash
# Clone the repository
git clone https://github.com/arthurpestana/hackathon-2025-frontend.git
cd hackathon-2025-frontend

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env.local

# Start the development server
npm run dev
```

### Documentation external API and AI


| Service | Documentation |
|---|---|
| OpenWeather | [openweathermap.org/api](https://openweathermap.org/api) |
| Google Gemini | [ai.google.dev](https://ai.google.dev) |
| SendGrid | [docs.sendgrid.com](https://docs.sendgrid.com) |
| MongoDB Atlas | [mongodb.com/docs/atlas](https://www.mongodb.com/docs/atlas) |
| n8n | [docs.n8n.io](https://docs.n8n.io) |

---

## Requirements

### Functional

| ID | Description |
|---|---|
| FR01 | Automatically trigger n8n workflow after user registration |
| FR02 | Persist AI analysis linked to the user ID |
| FR03 | Retrieve hourly weather forecast via OpenWeather API |
| FR04 | Feed AI Agent with current date and meteorological variables |
| FR05 | Generate HTML report with the top 3 optimal time slots and daily tips |
| FR06 | Geocode user location to identify the nearest INMET station |
| FR07 | Send HTML report to user's email via SendGrid |
| FR08 | Register integrated devices by type (RELAY, SENSOR, BATTERY) |

### Non-Functional

| ID | Category | Description |
|---|---|---|
| NFR01 | Performance | Response time < 10 seconds |
| NFR02 | Reliability | Fault handling for external API failures |
| NFR03 | Security | Passwords stored with bcrypt hashing |
| NFR04 | Usability | Responsive HTML reports (Gmail, Outlook compatible) |
| NFR05 | Maintainability | Modular code with single responsibility per module |
| NFR06 | Traceability | User ID traceable throughout the entire pipeline |

---

## Team

**Information Systems — UNITINS**

| Name | GitHub |
|---|---|
| Arthur Henrique Pestana | [@arthurpestana](https://github.com/arthurpestana) |
| Bruno Sales Noleto | [@Brunosno](https://github.com/Brunosno)|
| Juliana Chaves | — |
| Marcos Ribeiro | [@marcosguida](https://github.com/marcosguida) |

<br>

**Agricultural Engineering — UNITINS**

| Name |
|---|
| Graciliano Henrique |

---

## License

Distributed under the MIT License. See the [LICENSE](LICENSE) file for more details.