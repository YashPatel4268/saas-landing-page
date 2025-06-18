# SaaS Landing Page + Sign-Up Workflow

This project is a fully functional SaaS-style landing page with user registration and email verification functionality. It demonstrates full-stack web development using HTML, Tailwind CSS, Node.js, MongoDB, and Nodemailer.

---

## 🚀 Features

- Responsive landing page with modern UI (Tailwind CSS)
- Sign-up form with name, email, and password
- Backend API using Node.js and Express
- Stores user data securely in MongoDB
- Sends verification emails using Nodemailer (Gmail SMTP)
- Email token-based verification with secure redirect
- Thank-you success page after verification
- Input validation and clean UX

---

## 🛠️ Tech Stack

- **Frontend:** HTML, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Email Service:** Nodemailer (Gmail App Password)
- **Other Tools:** Live Server, VS Code, dotenv


## ⚙️ Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/YashPatel4268/saas-landing-page.git
cd saas-landing-page
```

### 2. Install Backend Dependencies

```bash
cd server
npm install
```

### 3. Create `.env` File

> ⚠️ Create a `.env` file in the `/server` folder using the provided `.env.example` format and add your own credentials before running.

Inside `server/`, create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_gmail_address
EMAIL_PASS=your_16_character_gmail_app_password
```

### 4. Start Backend Server

```bash
node index.js
```

Should show:
```
✅ MongoDB connected
🚀 Server running on http://localhost:5000
```

### 5. Run Frontend 

Open a second terminal:

```bash
cd ../client
npm install -g serve
serve .
```

This will launch the app at:  
📍 `http://localhost:3000`

---

## ✅ How to Use

1. Fill out the sign-up form with your name, email, and password.
2. Check your Gmail inbox for a verification email.
3. Click the verification link.
4. You'll be redirected to a success page (`success.html`) once verified.


## 🖼️ Screenshots

> Landing Page  
(C:\saas-landing-page\images\Screenshot 2025-06-17 121438.png)

> Verification Email  
![Email Screenshot](C:\saas-landing-page\images\Screenshot 2025-06-17 121549.png)

> Success Page  
![Success Page](C:\saas-landing-page\images\Screenshot 2025-06-17 121611.png)


## 🧑‍💻 Developed By

**Patel Yash Manubhai**  
Tech Stack: Node.js, MongoDB, HTML, Tailwind CSS
