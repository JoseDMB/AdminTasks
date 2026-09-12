## Description

This project is a full-stack MERN web application for task management with user authentication. It allows users to register, log in, maintain active sessions through JWT tokens and cookies, and access a protected dashboard where they can create, view, edit, and delete their tasks. The application is designed to manage personal or work-related activities through a simple and modern interface, with protected routes ensuring that only authenticated users can access their information.

## Technologies Used

**Frontend:** React, Vite, React Router DOM, Axios
**Backend:** Node.js, Express
**Database:** MongoDB with Mongoose
**Authentication:** JWT, bcryptjs, cookies
**Validation:** Zod
**Styling:** Tailwind CSS
**Utilities:** dayjs, js-cookie, React Hook Form

## What Does the Application Do?

The application allows users to register and log in, then manage a list of tasks associated with their account. Each task contains information such as a title, description, and date, and users can create, update, or delete tasks as needed. Additionally, the application includes protected routes and a well-structured architecture using React Contexts to manage authentication and task state on the frontend.
