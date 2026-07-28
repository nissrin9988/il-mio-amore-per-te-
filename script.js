(function(){

function createStars(count = 35){

const bg=document.querySelector(".stars-bg");

if(!bg) return;

bg.innerHTML="";

for(let i=0;i<count;i++){

const star=document.createElement("span");

star.className="star";
star.textContent="🌟";

star.style.left=Math.random()*100+"%";
star.style.top=Math.random()*100+"%";
star.style.fontSize=(10+Math.random()*25)+"px";
star.style.animationDuration=(8+Math.random()*12)+"s";

bg.appendChild(star);

}

}




function showSection(id){

document.querySelectorAll(".section").forEach(section=>{

section.classList.remove("active");

});


const target=document.getElementById(id);

if(target){

target.classList.add("active");

window.scrollTo({

top:0,

behavior:"smooth"

});

}

}




document.addEventListener("DOMContentLoaded",()=>{


createStars();



/* apertura viaggio */

const start=document.getElementById("startJourneyBtn");


if(start){

start.addEventListener("click",()=>{

showSection("quiz-section");

});

}



/* frecce */

document.querySelectorAll(".next-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

showSection(btn.dataset.next);

});

});



document.querySelectorAll(".prev-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

showSection(btn.dataset.prev);

});

});




/* QUIZ */

const answers=[0,3,2,2];

let completed=0;


document.querySelectorAll(".choice").forEach(button=>{


button.addEventListener("click",()=>{


const q=Number(button.dataset.q);

const a=Number(button.dataset.a);


const parent=button.closest(".q");


if(parent.dataset.answered==="true") return;


parent.dataset.answered="true";


parent.querySelectorAll(".choice").forEach(b=>{

b.disabled=true;

});



if(a===answers[q]){

button.classList.add("correct");

}

else{

button.classList.add("wrong");

}



completed++;



if(completed===4){


const box=document.getElementById("after-quiz");


box.innerHTML=
`
<button class="btn next-btn" data-next="photo-section">
e non abbiamo ancora finito 🌟
</button>
`;



box.querySelector("button").addEventListener("click",()=>{

showSection("photo-section");

});


}


});


});






/* FOTO */

const photo=document.getElementById("seenPhotoBtn");


if(photo){

photo.addEventListener("click",()=>{

showSection("stars-section");

});

}






/* STELLE */


const reasons=[

"Mi fai sentire sicura e capita ❤️",

"Mi fai ridere anche nei momenti difficili 🌙",

"Sei presente senza che io debba chiedertelo ✨",

"Con te anche le cose semplici diventano speciali 💚"

];


let clicked=new Set();


document.querySelectorAll(".star-btn").forEach(btn=>{


btn.addEventListener("click",()=>{


let i=Number(btn.dataset.star);


clicked.add(i);



document.getElementById("star-content").innerHTML=

`
<div class="reason">
${reasons[i]}
</div>
`;



if(clicked.size===4){


setTimeout(()=>{

showSection("letter-section");

},500);


}


});


});






/* LETTERA */


const letterBtn=document.getElementById("openLetterBtn");


if(letterBtn){


letterBtn.addEventListener("click",()=>{


const letter=document.getElementById("letter");


if(letter){

letter.style.display="block";

}

});


}





/* mostra prima slide */

showSection("intro-section");



});


})();
