const takeQuizBtn = document.getElementById('take');
const quizSection = document.getElementById('quizSection');
const quizForm = document.getElementById('quizForm');
const feedBack = document.getElementById('quizFeedback');

const quizModal = document.getElementById('quizModal');
const closeQuizBtn = document.getElementById('closeQuizBtn');
const quizform = document.getElementById('quizform');
const quizWordClickable = document.getElementById('quizWordClickable');
const wordMeaningReveal = document.getElementById('wordMeaningRevel');
const quizOption = document.getElementById('quizOption');
const feedback = document.getElementById('quizfeedBack');
const wordBank = [
    {
        word:"Lavish",
        correct:"luxurious",
        options:["cheap","poor","luxurious"]
    },
    {
        word:"Cranky",
        correct:"irritated ",
        options:["happy","irritated","relax"]
    },
    {
        word:"Charming",
        correct:"attractive",
        options:["attractive","dull","unpleasant"]
    },
    {
        word:"Reliable",
        correct:"depend on",
        options:["necessary","depend on","better"]
    },
    {
        word:"Captivating",
        correct:"holds attention completely",
        options:["strong appeal","hard to ignore","holds attention completely"]
    },
    {
        word:"Radiant",
        correct:"glows with positivity",
        options:["ugly","glows with positivity","uplifting energy"]
    },
    {
        word:"Influential",
        correct:"power to shape opinions",
        options:["power to shape opinions","thoughtfull","chatterbox"]
    },
];
        
let quizIndex = Math.floor(Math.random() * wordBank.length);
let currentQuiz = wordBank[quizIndex];

takeQuizBtn.addEventListener('click',()=>{
    quizModal.classList.remove('hidden')
    loadQuiz();
});

closeQuizBtn.addEventListener('click',()=>{
    quizModal.classList.add('hidden');
    feedback.textContent = '';
});

function loadQuiz(){
    quizWordClickable.textContent = `"${currentQuiz.word}"`;
    wordMeaningReveal.classList.add('hidden');
    wordMeaningReveal.textContent = currentQuiz.correct;
    quizOption.innerHTML = '';
    feedback.textContent = '';
    

    currentQuiz.options.forEach((option,index)=>{
        const id = `option${index}`;
        const label = document.createElement('label');
        label.className = 'block';
        label.innerHTML = `
        <input type = "radio" name="answer" value="${option}" class="mr-2 id="${id}" /> ${option}`;
        quizOption.appendChild(label);
    });
}

quizWordClickable.addEventListener('click',()=>{
    wordMeaningReveal.classList.remove('hidden');
});

quizForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const selected = quizForm.answer.value;

    if (selected === currentQuiz.correct) {
        feedback.textContent = `correct! "${currentQuiz.word}" means "${currentQuiz.correct}".`;
        feedback.className = 'mt-4 text-lg font-semibold text-green-600';
    }else{
        feedback.textContent = `Incorrect! Try again`;
        feedback.className = 'mt-4 text-lg font-semibold text-red-600';
    }
})
const nextWordbtn = document.getElementById('nextWordbtn');
nextWordbtn.addEventListener('click',()=>{
    quizIndex = Math.floor(Math.random()*wordBank.length);
    currentQuiz = wordBank[quizIndex];
    loadQuiz();
    updateProgressbar()
})
const flashcardWord = document.getElementById('flashcardWord');
const flashcardMeaning = document.getElementById('flashcardMeaning');
const revealBtn = document.getElementById('revealBtn');
const nextCardBtn = document.getElementById('nextCardBtn');

let currentIndex = 0;

function showFlashcard(index){
    flashcardWord.textContent = wordBank[index].word;
    flashcardMeaning.textContent = '';
}
revealBtn.addEventListener('click',()=>{
    flashcardMeaning.textContent = wordBank[currentIndex].correct;
});
nextCardBtn.addEventListener('click',()=>{
    currentIndex = Math.floor(Math.random()* wordBank.length);
    showFlashcard(currentIndex);
})
showFlashcard(currentIndex)
