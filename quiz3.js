window.onload = function () {
  
  var questionArea = document.getElementsByClassName('questions')[0],
      answerArea   = document.getElementsByClassName('answers')[0],
      checker      = document.getElementsByClassName('checker')[0],
      current      = 0,
  
     // An object that holds all the questions + possible answers.
     // In the array --> last digit gives the right answer position
      allQuestions = {
        '1. Inside which HTML element do we put the JavaScript?' : ['<scripting>', '<javascript>', '<script>', 2],
        
        '2. Where is the correct place to insert a JavaScript?' : ['Both the <head> section and the <body> section are correct' , ' The <body> section', 'The <head> section' , 0],
        
        '3. What is the correct syntax for referring to an external script called "xxx.js"?' : ['<script href="xxx.js">', '<script src="xxx.js">', '<script name="xxx.js">', 1],
 '4. How do you write "Hello World" in an alert box?' : ['msg("Hello World");','alert("Hello World");','alertBox("Hello World");', 1],

  '5. How do you create a function in JavaScript?' : ['function:myFunction()','function myFunction()', 'function = myFunction()' , 1],

 '6. How do you call a function named "myFunction"?' : ['call function myFunction()','call myFunction()','myFunction()', 2],

 '7. How to write an IF statement in JavaScript?' : ['  if (i == 5) ','if i = 5 then','if i == 5 then', 0],

 '8. How does a WHILE loop start?' : ['while (i <= 10)',' while (i <= 10; i++)','while i = 1 to 10', 0],

 '9. How does a FOR loop start? ' : ['for (i <= 5; i++)','for (i = 0; i <= 5; i++)',' for i = 1 to 5', 1],

'10. How can you add a comment in a JavaScript?' : ['//This is a comment','"This is a comment"','<!--This is a comment-->' ,2],


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