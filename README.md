# full-stack-experiment-5
Folder Structure
unit2_experiments/
├── exp2_1_1_product_crud/        ← Experiment 2.1.1
│   ├── models/Product.js
│   ├── routes/productRoutes.js
│   ├── server.js
│   └── package.json
│
├── exp2_1_2_student_mvc/         ← Experiment 2.1.2
│   ├── models/Student.js
│   ├── routes/studentRoutes.js
│   ├── controllers/studentController.js
│   ├── views/index.ejs
│   ├── views/new.ejs
│   ├── views/edit.ejs
│   ├── views/error.ejs
│   ├── server.js
│   └── package.json
│
└── exp2_1_3_ecommerce/           ← Experiment 2.1.3
    ├── models/Catalog.js
    ├── routes/catalogRoutes.js
    ├── server.js
    └── package.json
Prerequisites
Install these before running any experiment:

Tool	Download	Purpose
Node.js 18+	https://nodejs.org	JavaScript runtime
MongoDB 6.0+	https://www.mongodb.com/try/download/community	Database
Postman	https://www.postman.com/downloads	API testing
How to Run Each Experiment
Experiment 2.1.1 — Product CRUD (Port 3000)
cd exp2_1_1_product_crud
npm install
node server.js
Test in Postman:

Operation	Method	URL	Body
Create	POST	http://localhost:3000/api/products	{"name":"Wireless Mouse","price":29.99,"category":"Electronics"}
Read All	GET	http://localhost:3000/api/products	—
Read One	GET	http://localhost:3000/api/products/:id	—
Update	PUT	http://localhost:3000/api/products/:id	{"price":24.99}
Delete	DELETE	http://localhost:3000/api/products/:id	—
Filter	GET	http://localhost:3000/api/products?category=Electronics	—
Experiment 2.1.2 — Student MVC (Port 3001)
cd exp2_1_2_student_mvc
npm install
node server.js
Open browser at http://localhost:3001/students

This experiment uses EJS views — open in a browser, not Postman.

Experiment 2.1.3 — E-commerce Catalog (Port 3002)
cd exp2_1_3_ecommerce
npm install
node server.js
Test in Postman:

Operation	Method	URL	Body
Create product	POST	http://localhost:3002/api/catalog	See sample below
Add review	POST	http://localhost:3002/api/catalog/:id/reviews	{"rating":5,"comment":"Great!"}
Update stock	PATCH	http://localhost:3002/api/catalog/:id/stock	{"sku":"HP-BL-001","delta":-1}
Low stock	GET	http://localhost:3002/api/catalog/agg/low-stock?threshold=5	—
Category ratings	GET	http://localhost:3002/api/catalog/agg/category-ratings	—
Sample POST body for Exp 2.1.3:

{
  "name": "Premium Headphones",
  "category": "Electronics",
  "description": "High quality wireless headphones",
  "variants": [
    { "sku": "HP-BL-001", "color": "Black", "price": 199.99, "stock": 15 },
    { "sku": "HP-WH-001", "color": "White", "price": 209.99, "stock": 3 }
  ]
}
GitHub Upload Guide
Step 1 — Install Git
Download from https://git-scm.com/downloads and install.

Step 2 — Create a GitHub account
Go to https://github.com and sign up (free).

Step 3 — Create a new repository
Click + (top right) → New repository
Name it: fullstack-unit2-experiments
Set to Public (or Private)
Do NOT check "Add README" (we already have one)
Click Create repository
Step 4 — Push from your computer
Open terminal inside the unit2_experiments folder:

git init
git add .
git commit -m "Add Unit 2 experiments - 2.1.1, 2.1.2, 2.1.3"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/fullstack-unit2-experiments.git
git push -u origin main
Replace YOUR_USERNAME with your GitHub username.

Netlify Note
These are backend (Node.js + MongoDB) projects — Netlify is for frontend only.

Netlify hosts static files (HTML, CSS, JS). It cannot run Node.js servers or connect to MongoDB.

To deploy backend projects use:

Platform	Free Tier	Notes
Render	Yes	Best free option for Node.js
Railway	Yes	Easy MongoDB + Node combo
Cyclic	Yes	Simple Node.js hosting
For lab/college purposes, running locally with node server.js is the standard approach.
