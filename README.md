# MERN Food Delivery Website

A full-stack food delivery web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This project includes:

- Customer-facing Frontend
- Backend API with Express and Node.js
- Admin Panel to manage food items and orders
- MongoDB database for storage

## Features

### Customer Side
- Browse food items by category
- Add items to cart
- Place and track orders
- User login and registration

### Admin Panel
- Admin authentication
- Manage food menu (Add/Edit/Delete)
- View and manage orders
- Dashboard with order statistics

### Backend API
- RESTful API with Express.js
- JWT-based authentication for users and admin
- Secure routes for protected operations
- Input validation and error handling

## Tech Stack

- **Frontend**: React, React Router, Redux (optional), Tailwind CSS / Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose)
- **Authentication**: JSON Web Tokens (JWT)
- **File Uploads**: Multer (optional for images)
- **Deployment**: Render / Vercel / Netlify (Frontend), Railway / Render (Backend)

## Folder Structure

```
mern-food-delivery/
│
├── client/               # React frontend
│   └── ...
│
├── admin/                # Admin panel (React or separate frontend)
│   └── ...
│
├── server/               # Express backend
│   └── controllers/
│   └── routes/
│   └── models/
│   └── config/
│   └── ...
│
├── .env
├── README.md
```

## Environment Variables

Create a `.env` file in the root of the `server/` folder:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/mern-food-delivery.git
cd mern-food-delivery

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install

# Install admin panel dependencies
cd ../admin
npm install
```

## Running the Project

```bash
# Run the backend
cd server
npm run dev

# Run the frontend
cd ../client
npm start

# Run the admin panel
cd ../admin
npm start
```

Make sure MongoDB is running locally or use a hosted database like MongoDB Atlas.

## Database Seed (Optional)

You can include a seed script (`seed.js`) in the backend to populate the database with sample food items.

## License

This project is licensed under the MIT License.
