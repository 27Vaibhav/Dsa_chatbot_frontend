# 💡 DSA-GPT: Your Algorithmic Coach

**DSA-GPT** is an interactive web application designed to help users master **Data Structures and Algorithms (DSA)** through guided problem-solving. Unlike traditional resources that simply provide solutions, DSA-GPT acts as a **personalized mentor**, guiding users step-by-step and fostering algorithmic thinking.

---

## 🚀 Features

- 🤖 **Interactive Chat Interface**: Learn DSA interactively with the DSA-GPT bot  
- 🧠 **Step-by-Step Guidance**: Get hints and strategies without complete solutions  
- 🔁 **Algorithmic Pattern Recognition**: Master problem-solving templates  
- 📊 **Time Complexity Analysis**: Understand the efficiency of your solutions  
- 🎙️ **Voice Input Support**: Ask DSA questions using your voice  
- 🔐 **User Authentication**: Secure login and registration system  
- 💬 **Chat History**: Track your learning with saved conversations  

---

## 🛠️ Tech Stack

### Frontend

- **React** – JavaScript library for building UI  
- **Tailwind CSS** – Utility-first CSS framework  
- **Framer Motion** – React animation library  
- **React Router** – Routing and navigation  
- **Axios** – HTTP client for API requests  
- **React Icons** – Icon library  
- **React Speech Recognition** – Voice-to-text input  
- **React Typed** – Typing animation effects  

### Backend

- **Node.js** – JavaScript runtime  
- **Express.js** – Backend framework  
- **MongoDB** – NoSQL database  
- **Mongoose** – MongoDB object modeling  
- **bcryptjs** – Password hashing  
- **jsonwebtoken** – JWT authentication  
- **cookie-parser** – Middleware for cookies  

### Development & Deployment

- **Concurrently** – Run multiple commands together  
- **Nodemon** – Auto-restarts server on changes  

---

## 📂 Project Structure
```
dsa-gpt/
├── public/
│   └── page-photos/      # Application images and assets
├── src/
│   ├── components/       # React components
│   ├── pages/            # Application pages
│   │   ├── Home.js       # Landing page
│   │   ├── Signup.js     # User registration page
│   │   ├── Login.js      # Authentication page
│   │   └── Chat.js       # Main chat interface
│   ├── App.js            # Main application component
│   └── index.js          # Application entry point
├── server/
│   ├── model/
│   │   ├── User.js       # User model schema
│   │   └── Chat.js       # Chat history model schema
│   └── index.js          # Express server setup
├── .gitignore            # Git ignore file
├── package.json          # Project dependencies
└── README.md             # Project documentation
```


---
## 🔍 Code Breakdown

### Frontend Components

#### `Home.js`
The landing page showcases the application's core features with a modern, animated interface:
- Animated gradient backgrounds and floating algorithmic symbols  
- Interactive typing effects highlighting the app's purpose  
- Feature list with animated elements  
- Responsive layout for both desktop and mobile  
- Navigation links to signup and login pages  

#### `Signup.js`
User registration page with:
- Form validation  
- Animated backgrounds and UI elements  
- Real-time feedback during registration process  
- Secure handling of user credentials  

#### `Chat.js`
The heart of the application:
- Real-time chat interface with the DSA-GPT bot  
- Voice input capabilities  
- Typing indicators  
- Suggestion chips for common DSA questions  
- Animated message bubbles  
- API integration with the backend  
- Responsive design for all screen sizes  

---

### Backend Architecture

#### Server Setup (`index.js`)
- Express application configuration  
- MongoDB connection via Mongoose  
- CORS configuration for frontend-backend communication  
- Authentication middleware  
- API routes for user management and chat functionality  

#### User Model (`User.js`)
MongoDB schema for user data:
- Name, gender, email (unique), and securely hashed password  
- Schema validation for required fields  

#### Chat Model (`Chat.js`)
MongoDB schema for saving chat history:
- User message content  
- Bot response content  
- Reference to user ID (relationship with User model)  
- Timestamp for sorting and filtering  

---

### Authentication Flow

- User registers with name, email, and password  
- Password is hashed using bcrypt before storage  
- On login, credentials are verified against the database  
- JWT token is generated and stored as an HTTP-only cookie  
- Protected routes verify token before allowing access  

---


## 🔌 API Endpoints

| Endpoint        | Method | Description                        | Auth Required |
|----------------|--------|------------------------------------|---------------|
| `/api/register`| POST   | Create a new user account          | ❌            |
| `/api/login`   | POST   | Authenticate user and start session| ❌            |
| `/api/logout`  | POST   | End user session                   | ✅            |
| `/api/me`      | GET    | Get current user details           | ✅            |
| `/api/chat`    | POST   | Save chat message                  | ✅            |

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/dsa-gpt.git
cd dsa-gpt

# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
cd ..

# Create .env in server/
touch server/.env

```
## Run development

```
#open two terminal
cd client
npm start         # Frontend

cd server
npm run dev       # Backend


```

# DSA-GPT Application

## Access the Application
Open your browser and navigate to `http://localhost:3000`

## 🔌 Integration with Flask Server
The application is designed to communicate with a Flask server for processing DSA-related queries. The Flask server should implement the following endpoint:

```
Endpoint: /get_response
Method: POST
Request Body: { "message": "user query here" }
Expected Response: { "response": "bot response here" }

```


## 🔄 Application Flow
1. User registers or logs in to access the chat interface
2. User inputs DSA-related queries via text or voice
3. Queries are sent to the Flask server for processing
4. The server responds with relevant DSA guidance
5. Conversations are saved to the user's profile for future reference

## 🎨 UI Features
- **Dark Theme**: Easy on the eyes for long coding sessions
- **Responsive Design**: Works on desktops, tablets, and mobile devices
- **Animations**: Smooth transitions and micro-interactions for better UX
- **Floating Algorithm Symbols**: Visual reinforcement of DSA concepts
- **Typing Indicators**: Realistic chat experience

## 🧠 DSA-GPT Bot Capabilities
The DSA-GPT bot is designed to:
- Explain core DSA concepts (arrays, linked lists, trees, graphs, etc.)
- Guide users through problem-solving approaches
- Provide hints rather than complete solutions
- Analyze time and space complexity of algorithms
- Recommend practice problems based on skill level
- Offer pattern recognition tips for solving similar problems
