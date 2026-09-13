export const projects = [
  {
  slug: "ehealth",
  number: "01",
  title: "Secure e-Health Record Management",
  category: "Full Stack · Security · Cloud",
  description:
    "A secure web platform for managing electronic health records with authentication, role-based access control, encryption and AWS infrastructure.",
  technologies: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "JWT",
    "AWS",
  ],
  metric: "AES-256",

  details: {
    overview:
      "A full-stack web application focused on secure electronic health record management, combining frontend development, backend APIs, authentication, access control, databases and cloud infrastructure.",

    architecture: [
      "User",
      "React",
      "Node.js / Express",
      "JWT + RBAC",
      "MongoDB",
      "AWS EC2 / S3",
    ],

    security: [
      {
        title: "JWT",
        label: "AUTHENTICATION",
        description:
          "Token-based authentication for protected application access.",
      },
      {
        title: "RBAC",
        label: "ACCESS CONTROL",
        description:
          "Role-based access control for managing permissions.",
      },
      {
        title: "AES-256",
        label: "ENCRYPTION",
        description:
          "Encryption used for protecting patient records.",
      },
    ],
  },
},

  {
  slug: "phishing-detection",
  number: "02",
  title: "Hybrid ML-Based Phishing URL Detection",
  category: "Machine Learning · Cybersecurity",
  description:
    "A hybrid machine learning system combining URL lexical and structural features with DNS and SSL reputation analysis for real-time phishing URL classification.",
  technologies: [
    "Python",
    "XGBoost",
    "DNS",
    "SSL",
  ],
  metric: "99% Accuracy",

  details: {
    overview:
      "A hybrid phishing detection system designed to classify URLs by combining machine learning with domain reputation signals. The approach uses URL lexical and structural features together with DNS and SSL reputation analysis.",

    architecture: [
      "URL",
      "Lexical / Structural Features",
      "DNS Reputation",
      "SSL Reputation",
      "XGBoost",
      "Classification",
    ],

    security: [
      {
        title: "XGBoost",
        label: "ML CLASSIFIER",
        description:
          "Used as the machine learning model for phishing URL classification.",
      },
      {
        title: "DNS",
        label: "DOMAIN REPUTATION",
        description:
          "DNS reputation signals are incorporated into the hybrid detection approach.",
      },
      {
        title: "SSL",
        label: "DOMAIN REPUTATION",
        description:
          "SSL reputation signals provide an additional domain-level signal.",
      },
    ],

    metrics: [
      {
        value: "99%",
        label: "Accuracy",
      },
      {
        value: "0.99",
        label: "Precision",
      },
      {
        value: "0.99",
        label: "Recall",
      },
      {
        value: "0.99",
        label: "F1 Score",
      },
      {
        value: "1.00",
        label: "ROC-AUC",
      },
      {
        value: "<1%",
        label: "False Positive",
      },
    ],
  },
},
  {
  slug: "ocular-disease",
  number: "03",
  title: "AI-Powered Ocular Disease Detection",
  category: "AI / ML · Computer Vision",
  description:
    "A CNN-based image classification system for detecting ocular diseases using image preprocessing and data augmentation.",
  technologies: [
    "Python",
    "TensorFlow",
    "OpenCV",
    "NumPy",
    "CNN",
  ],
  metric: "94% Accuracy",

  details: {
    overview:
      "A deep learning-based computer vision project focused on detecting multiple ocular diseases from medical images. The system uses image preprocessing, data augmentation and a convolutional neural network for classification.",

    architecture: [
      "Medical Image",
      "Preprocessing",
      "Data Augmentation",
      "CNN",
      "Classification",
    ],

    security: [
      {
        title: "94%",
        label: "ACCURACY",
        description:
          "Overall classification accuracy achieved by the CNN model.",
      },
      {
        title: "92%",
        label: "SENSITIVITY",
        description:
          "Sensitivity achieved during model evaluation.",
      },
      {
        title: "93%",
        label: "SPECIFICITY",
        description:
          "Specificity achieved during model evaluation.",
      },
    ],

    metrics: [
      {
        value: "94%",
        label: "Accuracy",
      },
      {
        value: "92%",
        label: "Sensitivity",
      },
      {
        value: "93%",
        label: "Specificity",
      },
    ],
  },
},

{
  slug: "speed-breaker",
  number: "04",
  title: "Automated Speed Breaker",
  category: "Embedded Systems · Arduino",
  description:
    "An Arduino-based automated speed breaker designed to activate when a vehicle exceeds a predefined speed.",
  technologies: ["Arduino"],
  metric: "Hardware",
  details: {
    overview:
      "An embedded systems project that uses Arduino-based control logic to detect when a vehicle exceeds a predefined speed and activate the speed breaker mechanism.",
    architecture: [
      "Vehicle",
      "Speed Detection",
      "Arduino",
      "Control Logic",
      "Actuation",
    ],
    security: [
      {
        title: "Arduino",
        label: "CONTROLLER",
        description:
          "Used as the core controller for processing the speed condition and controlling the mechanism.",
      },
      {
        title: "Threshold",
        label: "SPEED CONDITION",
        description:
          "The system responds when the detected vehicle speed crosses the predefined threshold.",
      },
      {
        title: "Actuation",
        label: "MECHANISM",
        description:
          "The control system activates the speed breaker mechanism when the condition is met.",
      },
    ],
  },
},
{
  slug: "online-bookstore",
  number: "05",
  title: "Online Bookstore Website",
  category: "Web Development",
  description:
    "A responsive e-commerce bookstore website with real-time search, categorization and shopping cart functionality.",
  technologies: ["HTML", "CSS", "JavaScript"],
  metric: "Responsive",
  details: {
    overview:
      "A responsive bookstore website focused on providing a simple e-commerce experience with book discovery, categorization, search and shopping cart functionality.",
    architecture: [
      "User",
      "Web Interface",
      "JavaScript",
      "Book Search",
      "Categories",
      "Shopping Cart",
    ],
    security: [
      {
        title: "Search",
        label: "DISCOVERY",
        description:
          "Real-time search functionality helps users quickly find books.",
      },
      {
        title: "Categories",
        label: "ORGANIZATION",
        description:
          "Books are organized into categories for easier browsing.",
      },
      {
        title: "Cart",
        label: "SHOPPING",
        description:
          "Shopping cart functionality allows users to manage selected books.",
      },
    ],
  },
},
];