chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.action == "getSource") {
    message.innerText = request.source;
  }
});

function onWindowLoad() {

  var message = document.querySelector('#message');

  chrome.tabs.executeScript(
    { 
      code: "document.getElementsByClassName('differential-diff remarkup-code PhabricatorMonospaced diff-2up')[0];"
    }, 
    function (ps1) {
      window.alert(ps1);
    }
  );
}

window.onload = onWindowLoad;

