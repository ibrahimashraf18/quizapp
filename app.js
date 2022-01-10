var questionArray = [
    {
        question: "Full form of HTML?",
        answer: "Heyper Text Markup Language",
        options: [
            "1) Hello To My Land",
            "2) Hey Text Markup Language",
            "3)HeyperTest Markup Language",
            "4) Heyper Text Markup Language",
        ]
    },
    {
        question: "What is the full form of CSS?",
        answer: "Cascading Super Sheets",
        options: [
            "1) Cascading Style Sheets",
            "2) Cascading Style Sheep",
            "3) Cartoon Style Sheets",
            "4) Cascading Super Sheets",
        ]

    },
    {
        question: "What is the full form of HTTP?",
        answer: "Hyper Transfer Protocal",
        options: [
            "1) Hyper Transfer Product",
            "2) Hyper Text Protocal",
            "3) Hyper Test Protocal",
            "4) Hyper Transfer Protocal",
        ]
    },

    {
        question: "What is the full form of JS?",
        answer: "JavaScript",
        options: [
            "1) JavaScript",
            "2) JavaSuper",
            "3) JustScript",
            "4) JordonShoes",
        ]
    },

    {
        question: "What is the full form of RAM?",
        answer: "Random Access Memory",
        options: [
            "Random Access Memory",
            "Random All Memory",
            "Random Access Muscell",
            "Ranbow Access Memory",
        ]

    },
] 


function showquestion(e){
    var questionElement = document .getElementById('questionElemnt');
    questionElement.innerHTML =questionArray[e].question; 

    var optionElement = document.getElementsByClassName('optionElement');
    for (var i = 0; i< optionElement.length; i++){
        optionElement[i].innerHTML = questionArray[e].options[i]
    }
}
var questionCount = 0;
var score = 0


function nextQuestion(){
    questionCount++;
    score ++;
    var final = questionCount + score;
    console.log(final)

    showquestion(questionCount);
  
}









