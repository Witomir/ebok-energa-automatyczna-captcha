var tesseractScript = "https://cdn.rawgit.com/naptha/tesseract.js/1.0.10/dist/tesseract.js";
var captchaSolverScriptUrl = chrome.extension.getURL("captcha-solver.js");

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
    injectScript(captchaSolverScriptUrl);
});
