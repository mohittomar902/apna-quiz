
const express= require('express');
const cors = require('cors');
const app=express();
const path =require('path');

const port=process.env.PORT || 3000;
app.use(cors());
app.get('/apnaquiz/:sub', function (req, res) {
   const js= [
    {
    "numb": 1,
    "question": "Which type of JavaScript language is?",
    "answer": "Object-Based",
    "options": [
      "Object-Oriented",
      "Object-Based",
      "Assembly-language",
      "High-level"
    ]
  },
    {
    "numb": 2,
    "question": " Which one of the following also known as Conditional Expression:",
    "answer": "immediate if",
    "options": [
      "Alternative to if-else",
      "Switch statement",
      "If-then-else statement",
      "immediate if"
    ]
  },
    {
    "numb": 3,
    "question": "In JavaScript, what is a block of statement?",
    "answer": "block that combines a number of statements into a single compound statement",
    "options": [
      "Conditional block",
      "block that combines a number of statements into a single compound statement",
      "both conditional block and a single statement",
      "block that contains a single statement"
    ]
  },
    {
    "numb": 4,
    "question": "When interpreter encounters an empty statements, what it will do:",
    "answer": "Ignores the statements",
    "options": [
      "Shows a warning",
      "Prompts to complete the statement",
      "Throws an error",
      "Ignores the statements"
    ]
  },
    {
    "numb": 5,
    "question": "The 'function' and 'var' are known as:",
    "answer": "Declaration statements",
    "options": [
      "Keywords",
      "Data types",
      "Declaration statements",
      "Prototypes"
    ]
  }
  ,
  {
  "numb": 6,
  "question": " Which of the following variables takes precedence over the others if the names are the same?",
  "answer": "The local element",
  "options": [
    "Global variable",
    "The local element",
    "The two of the above",
    "None of the above"
  ]
},
{
"numb": 7,
"question": "Which one of the following is the correct way for calling the JavaScript code?",
"answer": "Function/Method",
"options": [
  "Preprocessor",
  "Triggering Event",
  "RMI",
  "Function/Method"
]
},
{
"numb": 8,
"question": "Which of the following type of a variable is volatile?",
"answer": "Mutable variable",
"options": [
  "Mutable variable",
  "Dynamic variable",
  "Volatile variable",
  "Immutable variable"
]
},
{
"numb": 9,
"question": "Which of the following option is used as hexadecimal literal beginning?",
"answer": "Both 0x and 0X",
"options": [
  "00",
  "0x",
  "0X",
  "Both 0x and 0X"
]
},
{
"numb": 10,
"question": "In the JavaScript, which one of the following is not considered as an error:",
"answer": "Division by zero",
"options": [
  "Syntax error",
  "Missing of semicolons",
  "Division by zero",
  "Missing of Bracket"
]
}
  ];
    const react= [
      {
      "numb": 1,
      "question": "Everything in React is a ____",
      "answer": "Component",
      "options": [
        "Module",
        "Component",
        "Package",
        "Class"
      ]
    },
      {
      "numb": 2,
      "question": "In which directory React Components are saved?",
      "answer": "Inside js/components/",
      "options": [
        "Inside js/components/",
        "Inside vendor/components/",
        "Inside external/components/",
        "Inside vendor/"
      ]
    },
      {
      "numb": 3,
      "question": "How many elements does a react component return?",
      "answer": "Multiple Elements",
      "options": [
        "2 Elements",
        "1 Element",
        "Multiple Elements",
        "None of These"
      ]
    },
    {
      "numb": 4,
      "question": "What is state in React?",
      "answer": "An internal data store (object) of a component.",
      "options": [
        "A persistant storage.",
        "An internal data store (object) of a component.",
        
      ]
    }, {
      "numb": 5,
      "question": "What is Babel?",
      "answer": "Both Compiler and Transpilar",
      "options": [
        "A transpiler.",
        "An interpreter",
        "A Compiler",
        "Both Compiler and Transpilar"
      ]
    }, {
      "numb": 6,
      "question": "What does the 'webpack' command do?",
      "answer": "A module bundler",
      "options": [
        "Transpiles all the Javascript down into one file",
        " Runs react local development server",
        "A module bundler",
      ]
    }, {
      "numb": 7,
      "question": "What port is the default where the webpack-dev-server will run?",
      "answer": "8080",
      "options": [
        "3000",
        "8080",
        "3306",
        "9000"
      ]
    }, {
      "numb": 8,
      "question": "What is ReactJS?",
      "answer": "A Library for building interaction interfaces",
      "options": [
        "Server side Framework",
        "A Library for building interaction interfaces",
        "User-interface framework",
        "None of These"
      ]
    }, {
      "numb": 9,
      "question": "ReactJS uses _____ to increase performance",
      "answer": "Virtual DOM",
      "options": [
        "Original DOM",
        "Virtual DOM",
        "Both 1 & 2",
        "None of These"
      ]
    }, {
      "numb": 10,
      "question": "What is a react.js in MVC?",
      "answer": "Controller",
      "options": [
        "Middleware",
        "Controller",
        "Model",
        "Router"
      ]
    },
    ]
    if(req.params.sub==="javas"){
      res.json(js);
    }
    if(req.params.sub=="react"){
      res.json(react);
    }
    
    
  res.end;
  
  });
 
    app.use(express.static(path.join(__dirname,'build')))
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    });
  
  app.listen(port);