const quizDB = [
    {
        question: "Q1: what is the full form of HTML?",
        a: "A. Hey Text to my land",
        b: "B. Hey Text markup language",
        c: "C. Heyper Text markup language",
        
    },

    {
        question: "Q2: which of the following tag is a begining of paragraph ?",
        a: "A. TD",
        b: "B. br",
        c: "C. p",
        
    },
    {
        question: "Q3: Correct HTML tag for the largest heading is",
        a: "A. h1",
        b: "B. head",
        c: "C. h6",
        
    },
    {
        question: "Q4: The attribute of form tag",
        a: "A. Method",
        b: "B. Action",
        c: "C. Both (a)&(b)",
        
    },
    {
        question: "Q5: Markup tags tell the web browser",
        a: "A. How to organise the page",
        b: "B. How to display the page",
        c: "C. How to display message box on page",
    },
    {
        question: "Q6: www is based on which model?",
        a: "A. Local-server",
        b: "B. Client-server",
        c: "C. 3-tire",
        
    },

    {
        question: "Q7: Which of the following is not JavaScript Data Types?",
        a: "A. Undefined",
        b: "B. Number",
        c: "c. Float",
    },
    {
        question: "Q8: Inside which HTML element do we put the JavaScript?",
        a: "A. script",
        b: "B. head",
        c: "c. style",
        
    },
    {
        question: "Q9: Which of the following is the correct syntax to display Letsfindcourse in an alert box using JavaScript?",
        a: "A. alert-box.Letsfindcourse;",
        b: "B. confirm.Letsfindcourse;",
        c: "c. alert.Letsfindcourse;",
        
    },
    {
        question: "Q10: What is the correct syntax for referring to an external script called LFC.js?",
        a: "A. script src=LFC.js",
        b: "B. script source=LFC.js",
        c: "C. script ref=LFC.js",
        
    },
    
];

var coAns = 0;
var wrAns = 0;


const qusetion1 = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const ans1 = document.getElementById("ans1");
const ans2 = document.getElementById("ans2");
const ans3 = document.getElementById("ans3");

const quiz_wripper = document.querySelector('.quiz_wripper');

const visible = document.getElementById('visible');


const submit = document.querySelector('#submit');

var questioncount = 0;
const answerList = ["C. Heyper Text markup language", "C. p",
        "A. h1", "C. Both (a)&(b)", "B. How to display the page",
        "B. Client-server", "c. Float",
        "A. script", "c. alert.Letsfindcourse;", "A. script src=LFC.js"];
var answer = [];
var checkAns = [];
var en1, en11;


function nextQus(){

    var en1 = document.querySelector("#qusNum");
    en11 = parseInt(en1.value,10);
    console.log(en11);


    if(questioncount == en11-1){
        const qlist = quizDB[questioncount];


        if(ans1.checked == true){
            answer.push(quizDB[questioncount].a);
        }
        else if(ans2.checked == true){
            answer.push(quizDB[questioncount].b);
            
        }
        else if(ans3.checked == true){
            answer.push(quizDB[questioncount].c);
            
        }
        else{
            alert("Select Option please!!")
        }
        
        result();
        btnVisibile();
        

    }

    
    

    else{
        const qlist = quizDB[questioncount+1];
        qusetion1.innerHTML = qlist.question;
        option1.innerHTML = qlist.a;
        option2.innerHTML = qlist.b;
        option3.innerHTML = qlist.c;
        
        
    

        if(ans1.checked == true){
            answer.push(quizDB[questioncount].a);
        }
        else if(ans2.checked == true){
            answer.push(quizDB[questioncount].b);
            
        }
        else if(ans3.checked == true){
            answer.push(quizDB[questioncount].c);
            
        }
        else{
            alert("Select Option please!!")
        }
        
        questioncount ++;
        }
    
    
}

function btnVisibile(){
    document.querySelector('.quit').classList.remove("quit");
    document.querySelector('#quate-btn').classList.add("quate-btn.after");
}



const start = document.querySelector('.start')
const quiz = document.querySelector('.quiz-body')

function visible1(){
    start.classList.add("start-after");
    quiz.classList.remove("quiz-body");
}

function enable() {
    let ques = document.getElementById('qusNum').value;
    console.log(ques);
    
    if(ques == ""){
        var b = document.getElementById("quate-btn1");
        alert("Empty Input");
        b.disabled = true;
    }
    else{
        var b = document.getElementById("quate-btn1");
        b.disabled = false;
    }
}

function home(){
    location.reload();
}

function visible2(){
    
    start.classList.add("start-after");
    quiz.classList.add("quiz-body");
}

function result(){
    for(var i=0 ; i< answerList.length;i++){
        if(answerList[i]==answer[i]){
            checkAns.push("Correct");
        }
        else{
            checkAns.push("Wrong");
        }
    }
    let out = "";
    
    document.getElementById("resultTitle").innerHTML = "Result";
    
    var j = 1;
    for(var i=0 ; i< answerList.length;i++){
        if(i>en11-1){break;}
        out += `Qustion: ${j} <p>Your guess:  ${answer[i]} </p>`
        out += `<p>Answer: ${checkAns[i]} </p>`
        if(checkAns[i]=="Wrong"){
            out += `<p>Correct Answer: ${answerList[i]} </p> </br>`
            wrAns ++;
            console.log(wrAns);
        }
        else{
            out += `<p>  </p> </br>`
            coAns ++;
            
        }
        j++;
    }

    parsent = ((coAns/en11)*100).toFixed(2);
    out += "Correct Answer: "+ coAns +"</br>";
     out += "Parsentage: "+ parsent+"%";

     out += "<br>Click Quite to participate Quiz Again";
     document.getElementById("re").innerHTML = out;
    
    
     visible2();
    
}
