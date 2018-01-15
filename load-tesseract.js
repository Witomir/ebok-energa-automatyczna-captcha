var tesseractScript = "https://cdn.rawgit.com/naptha/tesseract.js/1.0.10/dist/tesseract.js";
var captchaSolverPgnigScriptUrl = chrome.extension.getURL("captcha-solver-pgnig.js");
var captchaSolverEnergaScriptUrl = chrome.extension.getURL("captcha-solver-load-tesseract.js");

function injectScript(src, callback){
  var script = document.createElement('script');
  script.src = src;
  script.onload = function() {
      if(callback !== undefined){
          callback();
      }
  };
  (document.head || document.documentElement).appendChild(script);
}

injectScript(tesseractScript, function () {
    window.location.host.startsWith("ebok.poog")
        ? injectScript(captchaSolverPgnigScriptUrl)
        : injectScript(captchaSolverEnergaScriptUrl);
});
