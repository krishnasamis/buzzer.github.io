window.onload = function () {
  
  var questionArea = document.getElementsByClassName('questions')[0],
      answerArea   = document.getElementsByClassName('answers')[0],
      checker      = document.getElementsByClassName('checker')[0],
      current      = 0,
  
     // An object that holds all the questions + possible answers.
     // In the array --> last digit gives the right answer position
      allQuestions = {
        '1. What does PHP stand for?' : ['Personal Hypertext Processor', 'Private Home Page', 'PHP: Hypertext Preprocessor', 2],
        
        '2. PHP server scripts are surrounded by delimiters, which?' : ['<?php>...</?>' , ' <&>...</&>', '<?php...?>' , 0],
        
        '3.How do you write "Hello World" in PHP?' : ['echo "Hello World";', 'Document.Write("Hello World");', '"Hello World";',0],
 '4.  All variables in PHP start with which symbol?' : ['!','$','&', 1],

  '5.  The PHP syntax is most similar to:' : ['JavaScript','VBscript', 'Perl and C' , 2],

 '6. How do you get information from a form that is submitted using the "get" method?' : ['Request.QueryString;','Request.Form;','$_GET[];', 2],

 '7.In PHP you can use both single quotes and double quotes ( " " ) for strings:' : [' true ','false','dont know' ,0],

 '8.What is the correct way to include the file "time.inc" ?' : ['<?php include file="time.inc"; ?>','<?php include "time.inc"; ?>','<?php include:"time.inc"; ?>', 1],

 '9.What is the correct way to create a function in PHP? ' : ['create myFunction()','function myFunction()',' new_function myFunction()', 1],

'10.What is the correct way to open the file "time.txt" as readable?' : ['open("time.txt","read");',' open("time.txt");','fopen("time.txt","r");' ,2],


      };
      
  function loadQuestion(curr) {
  // This function loads all the question into the questionArea
  // It grabs the current question based on the 'current'-variable
  
    var question = Object.keys(allQuestions)[curr];
    
    questionArea.innerHTML = '';
    questionArea.innerHTML = question;    
  }
  
  function loadAnswers(curr) {
  // This function loads all the possible answers of the given question
  // It grabs the needed answer-array with the help of the current-variable
  // Every answer is added with an 'onclick'-function
  
    var answers = allQuestions[Object.keys(allQuestions)[curr]];
    
    answerArea.innerHTML = '';
    
    for (var i = 0; i < answers.length -1; i += 1) {
      var createDiv = document.createElement('div'),
          text = document.createTextNode(answers[i]);
      
      createDiv.appendChild(text);      
      createDiv.addEventListener("click", checkAnswer(i, answers));
      
      
      answerArea.appendChild(createDiv);
    }
  }
  
  function checkAnswer(i, arr) {
    // This is the function that will run, when clicked on one of the answers
    // Check if givenAnswer is sams as the correct one
    // After this, check if it's the last question:
    // If it is: empty the answerArea and let them know it's done.
    
    return function () {
      var givenAnswer = i,
          correctAnswer = arr[arr.length-1];
      
      if (givenAnswer === correctAnswer) {
        addChecker(true);             
      } else {
        addChecker(false);                        
      }
      
      if (current < Object.keys(allQuestions).length -1) {
        current += 1;
        
        loadQuestion(current);
        loadAnswers(current);
      } else {
        questionArea.innerHTML = 'Done';
        answerArea.innerHTML = '';
      }
                              
    };
  }
  
  function addChecker(bool) {
  // This function adds a div element to the page
  // Used to see if it was correct or false
  
    var createDiv = document.createElement('div'),
        txt       = document.createTextNode(current + 1);
    
    createDiv.appendChild(txt);
    
    if (bool) {
      
      createDiv.className += 'correct';
      checker.appendChild(createDiv);
    } else {
      createDiv.className += 'false';
      checker.appendChild(createDiv);
    }
  }
  
  
  // Start the quiz right away
  loadQuestion(current);
  loadAnswers(current);
  
};