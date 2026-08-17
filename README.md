#Dhanvantari Health Bot

Dhanvantari is a conversational healthcare assistance platform designed to provide accessible health-related information and useful wellness utilities through a Telegram-based interface.

The project combines Python, Telegram Bot API, Firebase Firestore, Node.js, and Express.js to provide multiple healthcare and wellness features in a single conversational application.

⚠️ Disclaimer: Dhanvantari is an educational/software prototype and does not replace professional medical diagnosis, treatment, or emergency medical care.

🚀 Features

Dhanvantari provides 13+ healthcare and wellness features, including:

🩺 Symptom Checker – Rule-based matching of user symptoms against a structured disease-symptom knowledge base.
💊 Treatment Information – Provides predefined healthcare information for supported conditions.
🆘 First Aid Guide – Step-by-step first-aid information for common emergencies and injuries.
💡 Health Tips – General health and wellness recommendations.
🚨 Emergency Contacts – Access to emergency-related contact information.
👨‍⚕️ Ask a Doctor – Prototype conversational healthcare assistance.
🧘 Mini Meditation – Simple guided relaxation and meditation content.
📝 My Health Journal – Allows users to save and retrieve personal journal entries using Firebase Firestore.
📊 BMI Calculator – Calculates BMI and provides basic BMI classification.
🧠 Health Fact of the Day – Provides health-related facts.
🧴 Skincare & Haircare Tips – General skincare and haircare guidance.
🏥 Nearby Hospitals – Provides hospital directory information.
🏪 Nearby Pharmacy – Provides pharmacy-related information.
🏗️ Technology Stack
Backend
Python
Python Telegram Bot
Node.js
Express.js
Database
Firebase Firestore
APIs & Integration
Telegram Bot API
Firebase Admin SDK
Express.js
Development Tools
Git
GitHub
VS Code
🧠 How the Application Works

The application follows a conversational workflow:

User
  │
  ▼
Telegram Interface
  │
  ▼
Dhanvantari Bot
  │
  ├── Symptom Checker
  ├── First Aid
  ├── Health Information
  ├── BMI Calculator
  ├── Wellness Features
  └── Health Journal
          │
          ▼
    Firebase Firestore

Users interact with the bot through Telegram buttons and messages. The application processes the selected feature and returns the corresponding healthcare information or calculation.

🩺 Symptom Checker

The symptom checker uses a rule-based matching approach.

A structured knowledge base contains diseases, associated symptoms, and descriptions. User-provided symptoms are compared against this knowledge base to identify possible matching conditions.

This project currently uses rule-based logic rather than a trained machine-learning disease prediction model.

📝 Health Journal

The Health Journal uses Firebase Firestore for persistent user-specific data.

Journal entries can be stored with user information and timestamps and retrieved later through the bot.

This demonstrates:

Cloud database integration
User-specific data persistence
Firestore queries
Backend data handling
🆘 First Aid Module

The bot contains a structured first-aid knowledge base covering multiple emergency and injury scenarios such as:

Emergency bleeding
Burns
Nosebleed
Choking
Fainting
Fractures
Seizures
Poisoning
Heat stroke
Hypothermia
Electric shock
CPR
Allergic reactions
Animal bites
Head injuries

The information is presented through interactive Telegram workflows.

📊 BMI Calculator

Users can provide their height and weight, and the bot calculates:

BMI = Weight (kg) / Height² (m²)

The result is then categorized using basic BMI ranges.

📂 Project Structure
dhanvantari-bot/
│
├── main.py
├── firebase_config.py
├── index.js
├── package.json
├── package-lock.json
├── requirements.txt
├── README.md
└── .gitignore
main.py

Contains the primary Telegram bot implementation, healthcare knowledge bases, feature handlers, calculations, and Firestore interactions.

firebase_config.py

Contains Firebase Admin SDK initialization and Firestore configuration.

index.js

Provides a Node.js/Express service and Telegram bot integration.

package.json

Defines the Node.js dependencies and project configuration.

🔐 Environment & Security

Sensitive credentials are intentionally excluded from this repository.

Do not commit:

serviceAccountKey.json
.env
API keys
Telegram bot tokens
Firebase private keys

Use environment variables or secure deployment secrets for production credentials.

🛠️ Local Setup
1. Clone the repository
git clone https://github.com/YOUR-USERNAME/dhanvantari-bot.git
cd dhanvantari-bot
2. Install Python dependencies
pip install -r requirements.txt
3. Configure Telegram credentials

Set your Telegram bot token as an environment variable:

TELEGRAM_BOT_TOKEN=your_token_here
4. Configure Firebase

Create your Firebase service account configuration locally.

Do not commit the Firebase service-account JSON file to GitHub.

5. Run the Python bot
python main.py
6. Install Node.js dependencies
npm install
7. Run the Node.js service
node index.js
🔮 Future Improvements
Integrate trained machine-learning models for symptom classification.
Add NLP-based natural-language symptom extraction.
Integrate verified healthcare APIs.
Add real-time hospital and pharmacy location services.
Add multilingual healthcare assistance.
Improve authentication and user privacy.
Add healthcare data validation and source attribution.
Develop a web-based interface.
Add monitoring, logging, testing, and production deployment.
⚠️ Disclaimer

Dhanvantari is an educational and software-development prototype intended for informational purposes.

It should not be used as a substitute for professional medical diagnosis, treatment, or emergency medical services.