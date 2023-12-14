
// let numOfButtons = document.querySelectorAll(".drum").length;

// for (let i = 0; i < numOfButtons; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//         let innerValue = this.innerHTML;
//         playSound(innerValue);
//         buttonAnimation(innerValue);
//     });
// }

// document.addEventListener("keypress",function(e){
//     playSound(e.key);
//     buttonAnimation(e.key);
// })

// function playSound(gotInnerValue) {
//     switch (gotInnerValue) {
//         case "a":
//             let aSound = new Audio("paradox.m4a");
//             aSound.play();
//             break;
//         case "s":
//             let sSound = new Audio("paradox.m4a");
//             sSound.play();
//             break;
//         case "d":
//             let dSound = new Audio("paradox.m4a");
//             dSound.play();
//             break;
//         case "f":
//             let fSound = new Audio("paradox.m4a");
//             fSound.play();
//             break;
//         case "g":
//             let gSound = new Audio("paradox.m4a");
//             gSound.play();
//             break;
//         case "h":
//             let hSound = new Audio("paradox.m4a");
//             hSound.play();
//             break;
//         case "j":
//             let jSound = new Audio("paradox.m4a");
//             jSound.play();
//             break;
//         default:
//             console.log(gotInnerValue);

//             break;
//     }
// }

// function buttonAnimation(currentKey){
//     let currentButton = document.querySelector("."+ currentKey);
//     currentButton.classList.add("pressed");

//     setTimeout(() => {
//         currentButton.classList.remove("pressed");
//     }, 100);
// }

let allDrumButtons = document.querySelectorAll('.drum').length;

for (let i = 0; i < allDrumButtons; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
        let innerKey = this.innerHTML;
        playSound(innerKey)
        addAnimation(innerKey);
    })
}

document.addEventListener('keypress',function(e){
    playSound(e.key);
    addAnimation(e.key);
})

function playSound(innerValue) {
    switch (innerValue) {
        case "a":
            let aSound = new Audio("paradox.m4a");
            aSound.play();
            break;
        case "s":
            let sSound = new Audio("paradox.m4a");
            sSound.play();
            break;
        case "d":
            let dSound = new Audio("paradox.m4a");
            dSound.play();
            break;
        case "f":
            let fSound = new Audio("paradox.m4a");
            fSound.play();
            break;
        case "g":
            let gSound = new Audio("paradox.m4a");
            gSound.play();
            break;
        case "h":
            let hSound = new Audio("paradox.m4a");
            hSound.play();
            break;
        case "j":
            let jSound = new Audio("paradox.m4a");
            jSound.play();
            break;
        default:
            console.log(gotInnerValue);
            break;
    }
}

function addAnimation(currentButton){
    let currentButtonValue = document.querySelector("." + currentButton);
    currentButtonValue.classList.add("pressed");

    setTimeout(() => {
        currentButtonValue.classList.remove("pressed");
    }, 100);
}