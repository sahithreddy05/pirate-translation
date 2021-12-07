var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var url = "https://api.funtranslations.com/translate/pirate.json"

function translationerror(error) {
    console.log(error);
    alert("something's wrong");
}

function clickHandler() {
    var inputText = txtInput.value; // input from text area

    // hitting the api
    fetch(url + "?" + "text=" + inputText)
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; // output 
        }).catch(translationerror);
};



btnTranslate.addEventListener("click", clickHandler);