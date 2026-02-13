# 📚 Student Task Manager

A simple, web-based task manager built to demonstrate modern web development workflows and collaborative version control.

---

## 📖 Project Overview
This project is a hands-on laboratory for mastering the following DevOps and development concepts:
* **Git Version Control:** Tracking history and changes.
* **Branching Strategies:** Managing feature-based development.
* **Collaborative Workflow:** Handling Pull Requests and Merge Conflicts.
* **Release Management:** Utilizing version tagging for milestones.

---

## 🚀 Version 1.0 Features
* ✅ **Add Tasks:** Quickly input new items to your list.
* ✅ **Task Completion:** Mark tasks as finished with a single click.
* ✅ **Delete Tasks:** Remove unwanted entries easily.
* ✅ **Responsive UI:** Clean design that works on various screen sizes.

---

## 🛠 Tech Stack
* **HTML5:** Semantic structure.
* **CSS3:** Custom styling and layout.
* **JavaScript:** Vanilla JS for logic (No frameworks).

---


It looks like some of the formatting got bunched together! Here is that content cleaned up and structured into a professional, easy-to-read Markdown format for your `README.md`.

---

## 📂 Project Structure

```text
student-task-manager/
├── index.html    # Main entry point
├── styles.css    # Custom UI styling
├── script.js     # Task logic & DOM manipulation
└── README.md     # Project documentation

```

---

## 🌱 Feature Roadmap

| Version | Feature Focus | Status |
| --- | --- | --- |
| **v1.1** | Due Date Support | 📅 Planned |
| **v1.2** | Priority Levels (Low/Med/High) | ⚡ Planned |
| **v1.3** | Task Filtering (All / Completed / Pending) | 🔍 Planned |
| **v2.0** | Persistent Storage (LocalStorage) | 💾 Planned |
| **v2.1** | Dark Mode Toggle | 🌙 Planned |
| **v3.0** | Drag & Drop Reordering | 🖱️ Planned |

---

## 👥 Collaboration Workflow

### 1️⃣ Initial Setup (Repository Owner)

```bash
git init
git add .
git commit -m "Initial commit: v1.0 Student Task Manager"
git remote add origin https://github.com/yourusername/student-task-manager.git
git branch -M main
git push -u origin main

```

### 2️⃣ Team Member Setup

```bash
git clone https://github.com/yourusername/student-task-manager.git
cd student-task-manager

```

### 3️⃣ Creating a Feature Branch

> **Note:** Never work directly on the `main` branch.

```bash
git checkout -b feature/your-feature-name
# Example: git checkout -b feature/due-dates

```

### 4️⃣ Pushing Changes

After implementing your feature:

```bash
git add .
git commit -m "Add due date feature"
git push origin feature/your-feature-name

```

*Once pushed, open a **Pull Request** on GitHub for review.*

### 5️⃣ Keeping Your Branch Updated

Before starting any new work, sync with the main repository:

```bash
git pull origin main

```

---

## ⚠️ Contribution Rules

* **No Direct Pushes:** Do NOT push directly to the `main` branch.
* **Branch Per Feature:** Always create a dedicated `feature/` branch.
* **Clean History:** Write clear, descriptive commit messages.
* **Stay Updated:** Pull the latest changes from `main` before starting work.

---

## 🏷 Version Tags

* `v1.0` — Initial release (Basic Task Manager functionality).
* *More versions coming soon* 🚀

