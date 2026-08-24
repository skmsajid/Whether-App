# 🌍 FixMyVillage

> **A Smart, Transparent, and Efficient Platform for Reporting and Resolving Village Issues**

---

## 🚀 Overview

**FixMyVillage** is a full-stack **MERN application** that digitizes and streamlines the reporting and resolution of village-level issues. The platform connects **villagers**, **workers**, and **administrators** through a centralized system built to improve transparency, accountability, and operational efficiency.

From initial submission to final resolution, each complaint follows a structured, trackable workflow. Villagers can report issues, monitor progress, and provide feedback. Administrators can review complaints, manage categories, and assign tasks. Workers can access their assignments, update progress, and mark completed issues for verification.

---

## ✨ Key Features

```text
👨‍🌾 Villager
• Create an account and log in securely
• Submit complaints with categories, descriptions, and images
• Track complaint status and resolution progress
• View complete complaint history
• Receive email notifications about status updates
• Submit feedback after an issue is resolved

🛠️ Administrator
• Manage villagers and workers
• Review and verify submitted complaints
• Assign complaints to appropriate workers
• Monitor task progress and resolution status
• Create and manage complaint categories
• Review feedback, reports, and platform activity

👷 Worker
• View assigned complaints
• Review complaint details and supporting images
• Update task progress
• Mark assigned complaints as completed
```

---

## 🔄 System Workflow

```text
              👤 User Login
                    │
                    ▼
           📝 Submit Complaint
       (Category • Description • Image)
                    │
                    ▼
          📥 Complaint Registered
                    │
                    ▼
           🛠️ Administrator Review
          ┌─────────┴─────────┐
          ▼                   ▼
      ❌ Rejected       ✅ Assigned to Worker
                              │
                              ▼
                    👷 Work in Progress
                              │
                              ▼
                     ✅ Mark as Completed
                              │
                              ▼
                  📧 Email Notification
                              │
                              ▼
                      ⭐ User Feedback
```

---

## 📊 Complaint Lifecycle

```text
📝 Pending
      │
      ▼
👷 Assigned
      │
      ▼
🚧 In Progress
      │
      ▼
✅ Completed
      │
      ▼
⭐ Feedback
```

---

## 🛠️ Tech Stack

| Layer              | Technologies           |
| ------------------ | ---------------------- |
| **Frontend**       | React.js, Tailwind CSS |
| **Backend**        | Node.js, Express.js    |
| **Database**       | MongoDB                |
| **Authentication** | JSON Web Tokens (JWT)  |
| **Services**       | Nodemailer, Cloudinary |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/skmsajid/fixmyvillage.git
cd fixmyvillage
```

---

### 2. Install Dependencies

Install the frontend dependencies:

```bash
cd client
npm install
```

Install the backend dependencies:

```bash
cd ../server
npm install
```

---

### 3. Configure Environment Variables

Create a `.env` file in the `server` directory and add the following configuration:

```env
PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Replace each placeholder with the appropriate value for your environment. Never commit sensitive credentials to version control.

---

### 4. Run the Application

Start the backend server:

```bash
cd server
npm start
```

In a separate terminal, start the frontend development server:

```bash
cd client
npm run dev
```

The application will be available at the local URL displayed in the frontend development server output.

---

## 📂 Project Structure

```text
FixMyVillage/
├── client/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── assets/
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   └── routes/
│
├── package.json
└── README.md
```

---

## 🚀 Future Enhancements

```text
🤖 AI-powered complaint classification
📍 GPS-based issue location tracking
📱 Dedicated Android and iOS applications
🌍 Multi-language support
💬 Real-time communication between villagers and workers
📊 Advanced analytics and reporting dashboards
```

---

## 📜 License

**MIT License**
