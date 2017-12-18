function loadExtraScript(src){
  let extscript=document.createElement('script');
  extscript.setAttribute('src',src);
  document.body.appendChild(extscript);
}

function loadCSS(url){
  let css=document.createElement('link');
  css.setAttribute('rel','stylesheet');
  css.setAttribute('href',url);
  document.head.appendChild(css);
}

document.addEventListener('DOMContentLoaded', function() {
  loadExtraScript('scripts/extra.js');
  //loadCSS('assets/font-awesome/css/font-awesome.min.css');
  //loadCSS('https://fonts.googleapis.com/css?family=Copse');
}, false);



