window.onload = function () {
  
  var questionArea = document.getElementsByClassName('questions')[0],
      answerArea   = document.getElementsByClassName('answers')[0],
      checker      = document.getElementsByClassName('checker')[0],
      current      = 0,
  
     // An object that holds all the questions + possible answers.
     // In the array --> last digit gives the right answer position
      allQuestions = {
        '1. What does CSS stand for?' : ['Creative Style Sheets', 'Colorful Style Sheets', 'Cascading Style Sheets', 2],
        
        '2. What is the correct HTML for referring to an external style sheet?' : ['<link rel="stylesheet" type="text/css" href="style.css">' , '<style src="style.css">', '<style src="style.css">' , 0],
        
        '3. Where in an HTML document is the correct place to refer to an external style sheet?' : ['In the <body> section', 'In the <head> section', 'At the end of the document', 1],
 '4. Which HTML tag is used to define an internal style sheet?' : ['<style>','<css>','<script>', 0],

  '5. Which HTML attribute is used to define inline styles? ' : ['id','class', 'style' , 2],

 '6. Which is the correct CSS syntax?' : ['body {color: black;}','{body:color=black;}','{body;color:black;}', 0],

 '7. How do you insert a comment in a CSS file?' : [' /this is a comment/ ','// this is a comment //','/* this is a comment */', 2],

 '8. Which property is used to change the background color?' : ['color','background-color','bgcolor', 1],

'9. How do you add a background color for all h1 elements? ' : ['all.h1 {background-color:#FFFFFF;}','h1 {background-color:#FFFFFF;}',' h1.all {background-color:#FFFFFF;}', 1],

'10. Which CSS property is used to change the text color of an element?' : ['color','fgcolor','text-color' ,0],


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