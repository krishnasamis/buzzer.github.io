window.onload = function () {
  
  var questionArea = document.getElementsByClassName('questions')[0],
      answerArea   = document.getElementsByClassName('answers')[0],
      checker      = document.getElementsByClassName('checker')[0],
      current      = 0,
  
     // An object that holds all the questions + possible answers.
     // In the array --> last digit gives the right answer position
      allQuestions = {
        '1.What does HTML stand for?' : ['Hyper Text Markup Language', 'Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 0],
        
        '2.Choose the correct HTML element for the largest heading:' : ['<head>' , '<h6>', '<h1>' , 2],
        
        '3.What is the correct HTML for creating a hyperlink? ' : ['<a name="http://www.google.com">click</a>', '<a href="http://www.google.com">click</a>', '<a url="http://www.google.com">click</a>', 1],
 '4.Which character is used to indicate an end tag?' : ['*','<','/', 2],

  '5.Which of these elements are all table elements?' : ['<thead> <body> <tr>','<table> <head> <tfoot>', '<table> <tr> <td>' , 2],

 '6.How can you make a numbered list?' : ['<ol>','<list>','<ul>', 0],

 '7.How can you make a bulleted list?' : ['<ol>','<list>','<ul>', 2],

 '8.What is the correct HTML for making a checkbox?' : ['<input type="checkbox">','input type="check">','<checkbox>', 0],

'9.What is the correct HTML for making a dropdown?' : ['<input type="list">','<input type="dropdown">','<list>', 1],

'10.What is the correct HTML for inserting an image?' : ['<image src="image.gif" alt="MyImage">','<img src="image.gif" alt="MyImage">','<img href="image.gif" alt="MyImage"' ,1],


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