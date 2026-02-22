const questions=[...document.getElementsByClassName("question")]

for(let i=0;i<questions.length;i++){
    const btn=questions[i].querySelector("button")
    const text=questions[i].querySelector(".question-content")
    const arrow=questions[i].querySelector("img")
    btn.addEventListener('click', ()=>{
     for(let j=0;j<questions.length;j++){
        if(questions[i]!==questions[j]){
        questions[j].classList.remove("opened")
          }     }   



questions[i].classList.toggle("opened")

    })
}