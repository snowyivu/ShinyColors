// beforescriptexecute polyfill
if(!("onbeforescriptexecute" in document)) { // Already natively supported
  let scriptWatcher = new MutationObserver(mutations => {
    for(let mutation of mutations){
      for(let node of mutation.addedNodes){
        if(node.tagName === "SCRIPT"){
          let syntheticEvent = new CustomEvent("beforescriptexecute", {
            detail: node,
            cancelable: true
          })
          // .dispatchEvent will execute the event synchrously,
          // and return false if .preventDefault() is called
          if(!document.dispatchEvent(syntheticEvent)){
            node.remove();
          }
        }
      }
    }
  })
  scriptWatcher.observe(document, {
    childList: true,
    subtree: true
  });
}


const fixModule = (text) => {
  let source = ["var n=window.zqlboqzlz4iqbl;", "Object.freeze({addHeader:"]
  let result = ["var n=window.zqlboqzlz4iqbl;window._require=t;", "({addHeader:"]

  for (let i = 0; i < source.length; i++) {
    if (text && text.includes(source[i])) {
      console.log("Match found: "+source[i]);
      text = text.replace(source[i], result[i])
    }
  }
  return text;
}

const injectModule = (text) => {
  text = fixModule(text);
  var newScript = document.createElement('script');
  newScript.type = "text/javascript";
  newScript.textContent = text;
  var head = document.getElementsByTagName('body')[0];
  head.appendChild(newScript);

}

const scriptHandler = (target, e) => {
  if(target.src.includes("shinycolors.enza.fun/app")) {
    e.preventDefault();
    e.stopPropagation();
    GM_xmlhttpRequest({
      method: "GET",
      url: target.src,
      onload: function(response) {
        injectModule(response.responseText);
      }
    });
  }
}

document.addEventListener("beforescriptexecute", function(e) {
  let script = e.detail || e.target;
  scriptHandler(script,e);
});
