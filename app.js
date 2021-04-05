
const myRandom = Math.floor(Math.random()*100+1);
const button = document.getElementById("btn");


console.log(myRandom);
console.log(typeof number);

button.addEventListener("click", function(){
    const number = document.getElementById("number").value;
    if (number == myRandom) {
        alert("won");
    }else if (number > myRandom){
        alert("down");
    }else {
        console.log(myRandom, number)
        alert("upper");
    }
        
});
