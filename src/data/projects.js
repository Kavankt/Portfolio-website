// src/data/projects.js

export const projects = [
  {
    id: "1PF",
    Title: "Personal Portfolio Website",
    Description:
      "A sleek, responsive, and developer-focused personal portfolio built using modern web technologies like Next.js and Vite. This website showcases personal projects, certifications, skills, and professional background — serving as a digital resume and an online identity hub.",
    Img: "/images/portfolio.png",
    ProjectLink: "https://github.com/Kavankt/Portfolio-website.git",
    KeyFeatures: [
      "Tech Stack Section: Detailed display of technologies and tools used with attractive design components.",
      "Certification Showcase: Organized layout to highlight professional certifications with badges and descriptions.",
      "Responsive & Optimized: Mobile-first design ensuring smooth performance across devices.",
      "Modern Development Workflow: Built using Vite for faster build times and improved developer experience.",
      "Clean Project Structure: Well-organized folder and file system for maintainability and scalability.",
      "Future-Ready Architecture: Designed to easily extend into adding blogs, experiences, or contact forms."
    ],
    TechStack: [
      "Next.js",
      "Vite",
      "React.js",
      "Tailwind CSS",
      "PostCSS",
      "ESLint",
      "Git/GitHub"
    ],
    Overview: {
      TotalTechStacks: 7,
      TotalFeatures: 6
    }
  },
  {
    id: "2ERP",
    Title: "Ukshati ERP System – Smart Irrigation Management",
    Description:
      "An enterprise-grade ERP system developed for Ukshati Technologies Pvt. Ltd. to manage operations related to smart irrigation devices. This platform centralizes processes like inventory, employee management, scheduling, and reporting. It plays a vital role in helping the company automate and scale its smart agriculture solutions.",
    Img: "/images/ukshati.PNG",
    ProjectLink: "https://github.com/Kavankt/Ukshati_Kavan.git",
    KeyFeatures: [
      "Smart Device Inventory Management: Custom-built module to manage devices, stock levels, and hardware logistics.",
      "User & Role Management: Admin panel to manage users, roles, and access levels across modules.",
      "Schedule & Task Assignment: System to assign and manage schedules for field technicians and IoT device maintenance.",
      "REST API Architecture: Modular backend API routes to power all features via clean, reusable endpoints.",
      "Dockerized Deployment: Fully containerized setup using Docker & Docker Compose for consistent environments.",
      "End-to-End Testing: Thoroughly tested using tools like Zest, Postman, and Thunder Client."
    ],
    TechStack: [
      "Next.js",
      "React",
      "Node.js API Routes",
      "MySQL",
      "Docker",
      "Docker Compose",
      "Postman",
      "Thunder Client",
      "Zest",
      "Visual Studio Code",
      "Git"
    ],
    Internship: {
      Role: "Full-Stack Developer",
      Responsibilities: {
        Frontend: "Developed responsive UI with Next.js + React",
        Backend: "Built REST APIs using Node.js API Routes in Next.js",
        Database: "Designed relational schemas in MySQL for users, devices, and schedules",
        DevOps: "Containerized the entire application using Docker and Docker Compose",
        Testing: "Validated features using Zest, Postman, and Thunder Client"
      },
      Highlight:
        "During my internship at Ukshati Technologies, I helped develop and deploy an ERP system for managing smart irrigation devices. My major contribution was building the Inventory Management module from scratch, enabling streamlined tracking and control of IoT devices across locations."
    }
  },
  {
    id: "3blockchain",
    Title: "Blockchain-Based Examination Management System",
    Description:
      "A secure and transparent examination management platform that leverages blockchain technology to ensure integrity, immutability, and fairness in conducting academic exams. This system provides an end-to-end solution for setting question papers, conducting online exams, recording results, and preventing tampering or unauthorized access.",
    Img: "/images/blockchain.webp",
    ProjectLink: "https://github.com/yourusername/blockchain-exam-system",
    KeyFeatures: [
      "Immutable Exam Records: Uses blockchain to store exam results and transactions securely and transparently.",
      "Secure Question Paper Generation: Encrypts and distributes question papers with access controls to prevent leaks.",
      "Candidate Authentication: Verifies student identity before allowing participation in an exam.",
      "Smart Contract Integration: Automates result publishing, grading logic, and data verification.",
      "Real-Time Monitoring: Tracks ongoing exams and logs events on-chain for auditability.",
      "Tamper-Proof Certification: Issues digitally signed, blockchain-verified certificates for candidates."
    ],
    TechStack: [
      "Solidity",
      "Ethereum / Ganache",
      "React.js",
      "Next.js",
      "Web3.js / Ethers.js",
      "Node.js",
      "Metamask"
    ],
    Overview: {
      TotalTechStacks: 7,
      TotalFeatures: 6
    }
  },
  {
    id: "4petrolpump",
    Title: "PetrolPump Management System",
    Description:
      "A database management system developed to efficiently handle day-to-day operations at a petrol pump. This system manages fuel inventory, sales transactions, employee records, customer billing, and generates useful operational reports to ensure smooth and transparent functioning of the petrol pump.",
    Img: "/images/petrolpump.jpg",
    ProjectLink: "https://github.com/Kavankt/DBMS-MiniProject.git",
    KeyFeatures: [
      "Fuel Inventory Management: Track real-time stock levels of petrol, diesel, and other fuels.",
      "Sales & Billing Management: Record sales transactions, generate customer bills, and maintain payment records.",
      "Employee Management: Maintain employee details, their roles, shifts, and salary records.",
      "Customer Records: Store and manage customer details, including frequent buyers for loyalty or credit purposes.",
      "Daily Report Generation: Automatic generation of daily sales and stock reports to monitor business performance.",
      "Admin Panel: Secure administrative access to manage inventory, employees, sales data, and settings."
    ],
    TechStack: [
      "MySQL",
      "HTML/CSS",
      "PHP",
      "XAMPP",
      "SQL"
    ],
    Overview: {
      TotalTechStacks: 5,
      TotalFeatures: 6
    }
  },
  {
    id: "5stockpredict",
    Title: "Stock Market Prediction & Visualization System",
    Description:
      "An intelligent machine learning project designed to visualize stock market data trends and predict future stock prices. This system assists investors, traders, and analysts in making informed decisions by leveraging data science and predictive algorithms.",
    Img: "/images/stockprediction.webp",
    ProjectLink: "https://github.com/Kavankt/StockMarketPrediction-MLproject.git",
    KeyFeatures: [
      "Stock Data Visualization: Interactive graphs and charts to visualize historical stock price trends for better insights.",
      "Predictive Analysis: Implements machine learning models to predict future stock prices based on past data patterns.",
      "Real-time Data Fetching: Integrates APIs to fetch updated stock market data for live analysis and predictions.",
      "User-friendly Interface: Simple and intuitive frontend for users to select stocks, view visualizations, and get predictions.",
      "Customizable Timeframes: Allow users to filter and analyze stock data over different periods (daily, weekly, monthly).",
      "Model Evaluation & Accuracy Metrics: Displays model performance through metrics like RMSE, R² Score to validate prediction reliability."
    ],
    TechStack: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "Streamlit",
      "yFinance API"
    ],
    Overview: {
      TotalTechStacks: 6,
      TotalFeatures: 6
    }
  },
  {
    id: "6medicare",
    Title: "MediCare - Disease Prediction System",
    Description:
      "A healthcare-focused machine learning project aimed at predicting potential diseases based on user-input symptoms. This system assists users and healthcare professionals in early diagnosis, making healthcare more proactive, accessible, and data-driven.",
    Img: "/images/HealthcareApp.jpg",
    ProjectLink: "https://github.com/Kavankt/MediCare-MLproject.git",
    KeyFeatures: [
      "Symptom-based Prediction: Users can input symptoms to receive possible disease predictions.",
      "Multiple Disease Classification: Supports prediction across a wide range of diseases based on dataset training.",
      "Interactive User Interface: Easy-to-use web interface for smooth user interaction and result viewing.",
      "Machine Learning Algorithms: Employs classification algorithms to ensure high accuracy and reliable predictions.",
      "Data Visualization: Displays important insights like symptom frequency and disease occurrence patterns.",
      "Model Accuracy Metrics: Provides evaluation metrics (accuracy score, confusion matrix) to assess model performance."
    ],
    TechStack: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Streamlit",
      "Matplotlib",
      "Seaborn"
    ],
    Overview: {
      TotalTechStacks: 6,
      TotalFeatures: 6
    }
  }
];
