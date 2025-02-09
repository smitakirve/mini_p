# mini_p

🚀 Overview
The Student Study Planner is a web-based tool that helps students plan study sessions, assign tasks, and set deadlines. It features a simple, interactive UI with an optional backend using Node.js and MongoDB for storing session data.

🌟 Features
✅ Create Study Sessions – Define sessions with titles and deadlines.
✅ Assign Tasks – Add tasks under each session for better tracking.
✅ Real-Time Updates – Automatically updates UI when sessions are added.
✅ MongoDB Storage – Saves study sessions in a local database.

 Technologies Used
Frontend
HTML – Structure of the web application
CSS – Styling and layout
JavaScript – Interactive features and dynamic UI

Backend
Node.js + Express.js – Handles API requests
MongoDB (Local Database) – Stores study sessions and tasks

Installation Guide
for frontend
cd mini_project

Start the Backend
npm init -y
npm install express mongoose cors body-parser dotenv nodemon
npx nodemon server.js

For mongo shell
mongosh
Then, create the database manually:
use study-planner
show collection
db.studysession.find().pretty()
