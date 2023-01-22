
var n = document.querySelectorAll("button").length, sounds; 

var sit = new Array("sounds/crash.mp3","sounds/kick-bass.mp3","sounds/snare.mp3","sounds/tom-1.mp3","sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3");

for(i=0;i<n;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
        playSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keypress",function (event){
    playSound(event.key);
    buttonAnimation(event.key);
});




//function definition;

function buttonAnimation(word){
    document.querySelector("."+word).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+word).classList.remove("pressed");
    },100);

}



function playSound(word){
    switch(word){
        case 'w':
            sounds = new Audio(sit[0]);
            sounds.play();
        break;
        case 'a':
            sounds = new Audio(sit[1]);
            sounds.play();
        break;
        case 's':
            sounds = new Audio(sit[2]);
            sounds.play();
        break;
        case 'd':
            sounds = new Audio(sit[3]);
            sounds.play();
        break;
        case 'j':
            sounds = new Audio(sit[4]);
            sounds.play();
        break;
        case 'k':
            sounds = new Audio(sit[5]);
            sounds.play();
        break;
        case 'l':
            sounds = new Audio(sit[6]);
            sounds.play();
        break;
        default:
            console.log("Not button");
        break;
    }
}