let app = document.getElementsByClassName("app-box")[0];
let input = document.getElementById("input");
let falseImage = document.getElementById("not-palindrome");
let trueImage = document.getElementById("is-palindrome");
let textFeedback = document.getElementsByClassName("text-feedback")[0];
let moreInfo = document.getElementsByClassName("more-info")[0];
let infoButton = document.getElementsByClassName("info")[0];

//Handling visibility and transition of info box
function showMoreInfo(){
    moreInfo.style.opacity = 1;
    moreInfo.style.visibility = "visible";
}
function hideMoreInfo(){
    moreInfo.style.opacity = 0;
    moreInfo.style.visibility = "hidden";
}
infoButton.addEventListener("mouseenter", showMoreInfo);
infoButton.addEventListener("mouseleave", hideMoreInfo);
moreInfo.addEventListener("mouseenter", showMoreInfo);
moreInfo.addEventListener("mouseleave", hideMoreInfo);

//It resets collor of the ap on click wherever in app if there is no input text
function appReset(){
    let strVal = input.value;
    if(strVal.length === 0) {
        app.classList.remove("true");
        app.classList.remove("false");
        trueImage.classList.add("hidden");
        falseImage.classList.add("hidden");
        textFeedback.innerHTML = " "
    }
}
input.addEventListener('click', appReset);

function palindrome() {
    app.classList.remove("true");
    app.classList.remove("false");
    trueImage.classList.add("hidden");
    falseImage.classList.add("hidden");
    textFeedback.innerHTML = " "
    let str = "";
    str = input.value;
    if(str.length > 0){
        let regex = /[a-zA-Z0-9]/g;
        let arr01 = str.toLowerCase().match(regex);
        let arr02 = [...arr01];
        arr02.reverse();
        for(let i = 0; i < arr01.length; i++){
            if(arr01[i] === arr02[i]){
                if(i + 1 === arr01.length){
                    app.classList.add("true");
                    trueImage.classList.remove("hidden");
                    textFeedback.innerHTML = "a true palindrome"
                    return true
                }
            } else {
                app.classList.add("false");
                falseImage.classList.remove("hidden");
                textFeedback.innerHTML = "not a palindrome"
                return false
            }
        }
    }
}