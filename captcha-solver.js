var helpLink = document.querySelector(".token-line .help");
helpLink.innerHTML = '<img src="https://i.imgur.com/0h56Cr2.gif">'

var hideLoader = function () {
    helpLink.style.visibility = "hidden"
};

Tesseract.recognize(
    document.querySelector("div.token img"), {
    "classify_bln_numeric_mode": 1,
    "classify_font_name" : "Optima Bold"
})
.then(function (result) {
    hideLoader();
    console.log(result.text);
    document.getElementById("obraz_kod").value = result.text.trim().replace(/\s/g,'');;
})