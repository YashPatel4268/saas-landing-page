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
![Landing Page](https://github.com/user-attachments/assets/316b2b2f-4bce-447d-9ae8-842bf20293f4)

> Verification Email  
![Email Screenshot](https://github.com/user-attachments/assets/8d0f4393-e02f-42b6-8ed5-7a73ff3c01f5)

> Success Page  
![Success Page](https://github.com/user-attachments/assets/ab636ca6-dc5e-4025-910c-b14307b86a3b)



## 🧑‍💻 Developed By

**Patel Yash Manubhai**  
Tech Stack: Node.js, MongoDB, HTML, Tailwind CSS
