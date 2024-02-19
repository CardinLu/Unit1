var num = prompt("How many times do you want to loop?")
const name = prompt("What is your name?")
for (let i = 1; i <= num; i++){
    console.log(i)
}

function bob(){
    var paragraph = document.createElement("p");
    paragraph.textContent = "Hi";

    document.getElementById("ok").appendChild(paragraph);
}