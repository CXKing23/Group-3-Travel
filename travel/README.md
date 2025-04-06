# Travel Project

This project is structured with separate **frontend** and **backend** directories. The frontend is a React application, and the backend is an Express.js server.

## **Setup Instructions**

### **1. Clone the Repository**
```sh
git clone https://github.com/CXKing23/Group-3-Travel
cd travel
```

### **2. Install Dependencies**
Ensure `concurrently` is installed in the root directory by running:
```sh
npm install concurrently
```

### **3. Setup the Backend**
Navigate to the `backend` folder and initialize the backend:
```sh
cd backend
npm init -y
npm install express cors dotenv
```

### **4. Setup the Frontend**
Navigate to the `frontend` folder and install dependencies:
```sh
cd ../frontend
npm install react-router-dom
```

### **5. Running the Project**
The project uses `concurrently` to run both frontend and backend simultaneously. To start both:
```sh
npm start
```
This will:
- Start the backend on **port 5000**
- Start the React frontend on **port 3000**

### **6. Alternative: Running Individually**
If you want to start them separately:
#### **Start Backend**
```sh
cd backend
node index.js
```
#### **Start Frontend**
```sh
cd frontend
npm start
```

## **Project Structure**
```sh
travel/
│── backend/    # Express.js backend
│── frontend/   # React frontend
│── package.json
│── README.md
```

### **7. Additional Notes**
- The backend uses `express`, `cors`, and `dotenv`.
- `nodemon` can be used in the backend for automatic restarts during development.
- `concurrently` is used to run both servers with a single command.
