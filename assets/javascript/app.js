'use strict';

$(document).ready(function() {
  var timeLimit = 15;
  var timeLeft;
  var countdown;
  var timesUp;
  var delayBetweenQuestions = 5000;
  var factTimeout;
  var currentIndex = 0;
  var ansCorrect = 0;
  var ansIncorrect = 0;
  var ansNoAnswer = 0;

  var arrayQuestions = [
    {
      question:
        "According to the internet, what is the world's happiest animal?",
      choice1: 'wallaby',
      choice2: 'kangaroo',
      choice3: 'koala',
      choice4: 'quokka',
      answer: 4,
      fact:
        'These cute animals have a signature smile which led many to believe they are always happy.'
    },
    {
      question: 'You can find quokkas only in',
      choice1: 'The Galapagos Islands',
      choice2: 'Western Australia',
      choice3: 'The Amazon rainforest',
      choice4: 'Northern Ireland',
      answer: 2,
      fact:
        'Quokkas are found only in Western Australia, mostly in Rottnest Island.'
    },
    {
      question: 'The quokka is a ',
      choice1: 'marsupial',
      choice2: 'rodent',
      choice3: 'bear',
      choice4: 'cat',
      answer: 1,
      fact: 'The quokka is a marsupial and a species of wallaby.'
    },
    {
      question: 'The closest relative of the quokka is the ',
      choice1: 'wallaby',
      choice2: 'platypus',
      choice3: 'koala',
      choice4: 'rat',
      answer: 1,
      fact: 'The quokka is closely related to wallabies.'
    },
    {
      question: 'What do you call a baby quokka?',
      choice1: 'quokling',
      choice2: 'quoklet',
      choice3: 'juoquy',
      choice4: 'joey',
      answer: 4,
      fact: 'A baby quokka is called a joey'
    },
    {
      question: 'Which of the following is true? A quokka is ',
      choice1: 'nocturnal and a meat-eater',
      choice2: 'a herbivore and is active during the day',
      choice3: 'nocturnal and a plant-eater',
      choice4: 'active during the day and a carnivore',
      answer: 3,
      fact:
        'Quokkas are herbivores who primarily feed at night. They eat the leaves, stems, and bark of many plants in addition to grass.'
    },
    {
      question: 'Which of the following have pouches to carry their young?',
      choice1: 'kangaroo',
      choice2: 'wallaby',
      choice3: 'quokka',
      choice4: 'all of the above',
      answer: 4,
      fact:
        'Kangaroos, wallabies, and quokkas are marsupials, which means they have pouches in which they carry their young.'
    },
    {
      question: 'Which of the following is true?',
      choice1: 'The quokka is able to go for months without a drink',
      choice2: "The quokka's main diet consists of thin bamboo shoots",
      choice3: 'Male quokkas constantly fight over potential mates',
      choice4: 'Quokkas are very gentle',
      answer: 1,
      fact:
        'If necessary, quokkas can survive for long periods of time without food or water by living off the fat stored in their tails.'
    },
    {
      question: 'Which of the following is false?',
      choice1: 'Quokkas regurgitate their food and eat it again',
      choice2: "You can't own one",
      choice3: 'It is illegal to touch quokkas',
      choice4: 'Only kids are allowed to feed quokkas',
      answer: 4,
      fact:
        "Feeding quokkas is discouraged because 'human food' can cause dehydration and malnourishment, both of which are detrimental to the quokka's health."
    },
    {
      question:
        'How do female quokkas protect their young when pursued by a predator?',
      choice1: 'It carries it young in its pouch and runs like hell',
      choice2: 'it leaves the baby in a safe place and then fights',
      choice3: 'It fights fiercely with baby in pouch',
      choice4:
        "They don't. It ejects the baby from its pouch and sacrifices it in order to escape.",
      answer: 4,
      fact:
        'If a mama quokka is threatened by a predator she will often throw her baby on the ground to distract the predator and save her own life.'
    }
  ];

  function startClock() {
    clearInterval(countdown);
    timeLeft = timeLimit;
    clearTimeout(timesUp);
    countdown = setInterval(decrement, 1000);
    timesUp = setTimeout(function() {
      if (currentIndex < arrayQuestions.length - 1) {
        displayFact();
        ansNoAnswer++;
      } else {
        displayScore();
      }
    }, timeLimit * 1000);
  }

  function decrement() {
    if (timeLeft > 0) {
      timeLeft--;
      displayTime();
    } else {
      reset();
    }
  }
  function reset() {
    clearInterval(countdown);
    clearTimeout(timesUp);
    timeLeft = timeLimit;
  }

  function displayTime() {
    $('#clock').text(timeLeft);
  }

  function displayQuestion(i) {
    $('#question').text(arrayQuestions[i].question);
    $('#choice1').text(arrayQuestions[i].choice1);
    $('#choice2').text(arrayQuestions[i].choice2);
    $('#choice3').text(arrayQuestions[i].choice3);
    $('#choice4').text(arrayQuestions[i].choice4);
  }

  function displayFact() {
    $('.toggle').text('');
    $('#choice1').text(arrayQuestions[currentIndex].fact);
    factTimeout = setTimeout(function() {
      currentIndex++;
      displayQuestion(currentIndex);
    }, delayBetweenQuestions);
  }

  function displayScore() {}

  function checkAnswer(answer, correctAnswer) {
    if (answer === correctAnswer) {
      return 'Correct!';
    } else {
      return 'Duh...Nope';
    }
  }
  function displayResults(result, correctAnswer) {
    $('.toggle').text('');
    $('#result').text(result);
    $('#fact').text(arrayQuestions[currentIndex].fact);
  }

  $('.choice').hover(
    function() {
      $(this).css({ 'font-weight': 'bold', color: 'green' });
    },
    function() {
      $(this).css({ 'font-weight': 'normal', color: 'black' });
    }
  );

  $('#btnStart').on('click', function() {
    $('.toggle').text('');
    $('.toggle').show();
    $('#btnStart').hide();
    currentIndex = 0;
    displayQuestion(currentIndex);
  });

  $('.choice').on('click', function() {
    var userChoice = $(this)
      .attr('id')
      .slice(-1);
    var correctAnswer = arrayQuestions[currentIndex].answer.toString();
    var result = checkAnswer(userChoice, correctAnswer);
    displayResults(result, correctAnswer);
  });
});
