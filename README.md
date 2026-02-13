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

## 📂 Project Structure
```text
student-task-manager/
├── index.html    # Main entry point
├── styles.css    # Custom UI styling
├── script.js     # Task logic & DOM manipulation
└── README.md     # Project documentation
🌱 Feature RoadmapVersionFeature FocusStatusv1.1Due Date Support📅 Plannedv1.2Priority Levels (Low/Med/High)⚡ Plannedv1.3Task Filtering (All / Completed / Pending)🔍 Plannedv2.0Persistent Storage (LocalStorage)💾 Plannedv2.1Dark Mode Toggle🌙 Plannedv3.0Drag & Drop Reordering🖱️ Planned👥 Collaboration Workflow1️⃣ Initial Setup (Repository Owner)Bashgit init
git add .
git commit -m "Initial commit: v1.0 Student Task Manager"
git remote add origin [https://github.com/yourusername/student-task-manager.git](https://github.com/yourusername/student-task-manager.git)
git branch -M main
git push -u origin main
2️⃣ Team Member SetupBashgit clone [https://github.com/yourusername/student-task-manager.git](https://github.com/yourusername/student-task-manager.git)
cd student-task-manager
3️⃣ Creating a Feature BranchNever work directly on the main branch.Bashgit checkout -b feature/your-feature-name
# Example: git checkout -b feature/due-dates
4️⃣ Pushing ChangesAfter implementing your feature:Bashgit add .
git commit -m "Add due date feature"
git push origin feature/your-feature-name
Note: Once pushed, open a Pull Request on GitHub for review.5️⃣ Keeping Your Branch UpdatedBefore starting any new work, sync with the main repository:Bashgit pull origin main
⚠️ Contribution RulesNo Direct Pushes: Do NOT push directly to the main branch.Branch Per Feature: Always create a dedicated feature/ branch.Clean History: Write clear, descriptive commit messages.Stay Updated: Pull the latest changes from main before starting new tasks.🏷 Version Tagsv1.0 — Initial release (Basic Task Manager functionality).More versions coming soon 🚀