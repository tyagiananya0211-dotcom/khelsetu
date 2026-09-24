# KhelSetu - Complete Build

## Project Overview
KhelSetu connects students, institutions and sports opportunities through data-driven insights and AI-assisted recommendations. This project features a React/Vite frontend and a PHP/MySQL backend.

## Technology Stack
- **Frontend**: React + Vite, Tailwind CSS, Recharts, Lucide Icons, Axios.
- **Backend**: PHP REST API (Raw PHP using PDO).
- **Database**: MySQL (running on port 3308 via XAMPP).
- **AI**: Rule-based logic with an extensible AI Provider class for LLM integration.

## Folder Structure
- `frontend/` - React Vite app.
- `khelsetu-api/` (in XAMPP htdocs) - PHP Backend API.

## Setup Instructions

### XAMPP Setup
1. Start **Apache**.
2. Start **MySQL**. Ensure MySQL is running on port **3308** (check `my.ini` config if necessary).

### Database Setup
The database schema and demo data are located in `khelsetu-api/database.sql`.
To import the database, run:
```sh
C:\xampp\mysql\bin\mysql.exe -h 127.0.0.1 -P 3308 -u root -e "source C:\xampp\htdocs\khelsetu-api\database.sql"
```

### PHP Setup
Place the `khelsetu-api` directory in `C:\xampp\htdocs\khelsetu-api`.
Access `http://localhost/khelsetu-api/` to verify health status.

### React Setup
In the `frontend` directory, install dependencies and start the dev server:
```sh
cd frontend
npm install
npm run dev
```

### AI API Setup and Environment Variables
Copy `.env.example` to `.env` in the backend API directory and fill in your API keys (e.g. OpenAI). If an API key is not provided, the `AIProvider` automatically gracefully falls back to a rule-based/demo explanation mode.

### Demo Accounts
- **Student**: student@khelsetu.demo
- **Institution**: institution@khelsetu.demo
- **Authority**: authority@khelsetu.demo
*(Password for all accounts is 'password')*

## API Structure
- `/api/auth/` - login/register endpoints
- `/api/students/` - profile, applications
- `/api/institutions/` - dashboard, infrastructure, participation
- `/api/opportunities/` - lists and application handling
- `/api/analytics/` - gaps, scores
- `/api/ai/` - insights, recommendations

## Security Notes
- Passwords hashed via `password_hash()` (bcrypt).
- API configured with permissive CORS for the frontend origin.

## Future Improvements
- Token-based authentication (JWT).
- Integrating external pretrained LLM APIs (e.g. GPT-4).
