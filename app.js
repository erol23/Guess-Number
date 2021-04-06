
const myRandom = Math.floor(Math.random()*100+1);
console.log(myRandom);
const button = document.getElementById("btn");
let count = 0;



button.addEventListener("click", function(){
    const number = document.getElementById("number").value;
    const li = document.createElement("li");
    li.className = 'guessingList';
    count += 1;
    if (number > 100 && count < 5){
        const text = document.createTextNode(`${count}. Guess. You should enter a number less than 100`)
        li.appendChild(text);
        document.querySelector("#list").appendChild(li);
        empty();
    }else if ( number < 0 && count < 5){
        const text = document.createTextNode(`${count}. Guess. You should enter a number greater than 0`)
        li.appendChild(text);
        document.querySelector("#list").appendChild(li);
        empty();
    }else if (number == myRandom) {
        alert("Congrats!! you know");
        newPage(); 
    }else if (number > myRandom && count < 5){
        const text = document.createTextNode(`${count}. Guess ${number} you should lower your guess`)
        li.appendChild(text);
        document.querySelector("#list").appendChild(li);
        empty();
    }else if (number < myRandom && count < 5){
        const text = document.createTextNode(`${count}. Guess ${number} you should upper your guess`)
        li.appendChild(text);
        document.querySelector("#list").appendChild(li);
        empty();
    }else{
        newPage();
    }
        
});
button.addEventListener('mouseover', () => (button.value = 'SURE !!'));
button.addEventListener('mouseout', () => (button.value = "Guess"))

function newPage() {
    window.location.assign("http://127.0.0.1:5500/index.html")
}

function empty() {
    document.getElementById("number").value = "";
}

