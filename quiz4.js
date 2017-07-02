window.onload = function () {
  
  var questionArea = document.getElementsByClassName('questions')[0],
      answerArea   = document.getElementsByClassName('answers')[0],
      checker      = document.getElementsByClassName('checker')[0],
      current      = 0,
  
     // An object that holds all the questions + possible answers.
     // In the array --> last digit gives the right answer position
      allQuestions = {
 '1. What is the size of byte variable?' : ['8 bit', '16 bit', '32 bit', 0],
        
'2. What is the size of boolean variable?' : ['8 bit' , ' 16 bit', '32 bit' , 1],
        
 '3.What is the default value of long variable?' : ['0', '0L', 'not defined', 1],
 '4.Which of the following is true about private access modifier?' : [' Variables, methods and constructors which are declared private can be accessed by any class lying in same package.','Variables, methods and constructors which are declared private can be accessed only by the members of the same class.','none of above', 1],

  '5. What is local variable?' : ['Variables defined inside methods, constructors or blocks are called local variables.',' Variables defined outside methods, constructors or blocks are called local variables.', 'None of the above.' , 0],

 '6.  What is JRE?' : ['JRE is a java based GUI application.','JRE is an application development framework.','JRE is an implementation of the Java Virtual Machine which executes Java programs.', 2],

 '7.  What is function overriding?' : ['If a subclass uses a method that is already provided by its parent class, it is known as Method Overriding.','If a subclass provides a specific implementation of a method that is already provided by its parent class, it is known as Method Overriding.','both', 1],

 '8.What is Serialization?' : [' Serialization is the process of writing the state of an object to a byte stream.','Serialization is the process of writing the state of an object to another object.','both', 0],

 '9.under what condition is object finalize method invoked by garbage collector?' : [' When it detects that the object has become unreachable.','As soon as object is set as null.','none', 0],

'10. which operator is considered to be with highest precedence?' : ['?:','%','( ) , [ ]' ,2],




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