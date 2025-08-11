const takeQuizBtn = document.getElementById('take');
const quizSection = document.getElementById('quizSection');
const quizForm = document.getElementById('quizForm');
const feedBack = document.getElementById('quizFeedback');

takeQuizBtn.addEventListener('click', () =>{
    quizSection.classList.remove('hidden');
    window.scrollTo({top: quizSection.offsetTop,
        behavior: 'smooth'
    });
});
quizForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const selected = quizForm.answer.value;

    if(selected === 'correct'){
        feedBack.textContent = 'correct! "wrinkle" means  a small fold'
        feedBack.classList.add('text-green-600');
    }else{
        feedBack.textContent = 'Incorrect. Try again!';
        feedBack.classList.add('text-red-600');
    }
});
const wordBank = [
        {word: "wrinkle" , meaning: ""},
        {word: "lavish" , meaning: ""},
        {word: "lint" , meaning: ""},
        {word: "soak" , meaning: ""},
        {word: "spin" , meaning: ""},
        {word: "fold" , meaning: ""},
        {word: "iron" , meaning: ""},
        {word: "innovate" , meaning: ""},
        {word: "bleach" , meaning: ""},
        {word: "" , meaning: ""},
]
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
    flashcardMeaning.textContent = wordBank[currentIndex].meaning;
});
nextCardBtn.addEventListener('click',()=>{
    currentIndex = Math.floor(Math.random()* wordBank.length);
    showFlashcard(currentIndex);
})
showFlashcard(currentIndex)