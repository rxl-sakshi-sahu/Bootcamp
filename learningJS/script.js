
const questions = [
    {
        que: "What's your name?",
        ans:
        [
            {text: "Sakku", correct:true},
            {text: "Sakshi", correct:false},
            {text: "Bargaining Queen", correct:false},
            {text: "Idiot", correct:false},
        ]
    },
    {
        que: "What's your hobby?",
        ans:
        [
            {text: "Writing", correct:false},
            {text: "Chanting", correct:true},
            {text: "Reading", correct:false},
            {text: "Coding", correct:false},
        ]
    },
    {
        que: "Your fav book?",
        ans:
        [
            {text: "Alchemist", correct:false},
            {text: "5 AM Club", correct:true},
            {text: "The girl in the room 105", correct:false},
            {text: "Ikigai", correct:false},
        ]
    },
]

const questionElement = document.getElementById("que");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currQueIndex = 0; // Starting the quiz
let score  = 0;

function startQuiz(){
    currQueIndex =0 ;
    score=0;
    nextButton.innerHTML = "Next";
    showQue();
}

function showQue(){
    resetState();
    let currQue = questions[currQueIndex];
    let queNo = currQueIndex + 1;
    questionElement.innerHTML = queNo + "." + currQue.que;
    
    currQue.ans.forEach(ans =>{
        const button = document.createElement("button");
        button.innerHTML = ans.text
        button.classList.add("btn");
        answerButtons.appendChild(button);
        // preventdefault();
        if(ans.correct){
            button.dataset.correct = ans.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn =  e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
nextButton.style.display = "block";
}

function showScore(){
    resetState();
    if(score===0){
        questionElement.innerHTML = `Oops! You scored ${score} out of ${questions.length}!`; 
    }
     else if(score===3){
        questionElement.innerHTML = `Hurray! You scored ${score} out of ${questions.length}!`; 
            // note - in above line we use backtick to display GString
    }
    else{
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`; 
    }
    
    nextButton.innerHTML = "Play again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currQueIndex++;
    if(currQueIndex < questions.length){
        showQue();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currQueIndex < questions.length){
            handleNextButton();
    }
    else{
        startQuiz();
    }
})
startQuiz();