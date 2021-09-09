function funTrainNow()
{
        alert("Acces Not Ready Right Now ^_^");
        repeat();
}

/*-----------------------------------------*/

function send()
{
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
            if((name !== "") && (phone !== "") && (email !== "") && (message !== "")){
              alert(" Congratulation, check the confirmation in your email !   \n\n   تهانينا ، تحقق من التأكيد في بريدك الإلكتروني !");//Validation Message
            }
            else{
                alert("Fill the form !") ;//Refus Message  
            }
}

   
/////////////////// BUTTON GO TO TOP /////////////////////:

var toTop = document.querySelector(".gotopbtn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 80) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})

/////////////////// GOOGLE TRANSLATE /////////////////////:
var trans = document.querySelector("#google_translate_element");
function translation()
{
        trans.classList.add("active");
}

// Custom Scripts

function googleTranslateElementInit() {
      new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE,includedLanguages: "en,fr"
    }, 'google_translate_element');
    }
// Minified Scripts
(function(){var gtConstEvalStartTime = new Date();/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
function d(b){var a=document.getElementsByTagName("head")[0];a||(a=document.body.parentNode.appendChild(document.createElement("head")));a.appendChild(b)}function _loadJs(b){var a=document.createElement("script");a.type="text/javascript";a.charset="UTF-8";a.src=b;d(a)}function _loadCss(b){var a=document.createElement("link");a.type="text/css";a.rel="stylesheet";a.charset="UTF-8";a.href=b;d(a)}function _isNS(b){b=b.split(".");for(var a=window,c=0;c<b.length;++c)if(!(a=a[b[c]]))return!1;return!0}
function _setupNS(b){b=b.split(".");for(var a=window,c=0;c<b.length;++c)a.hasOwnProperty?a.hasOwnProperty(b[c])?a=a[b[c]]:a=a[b[c]]={}:a=a[b[c]]||(a[b[c]]={});return a}window.addEventListener&&"undefined"==typeof document.readyState&&window.addEventListener("DOMContentLoaded",function(){document.readyState="complete"},!1);
if (_isNS('google.translate.Element')){return}(function(){var c=_setupNS('google.translate._const');c._cest = gtConstEvalStartTime;gtConstEvalStartTime = undefined;c._cl='en';c._cuc='googleTranslateElementInit';c._cac='';c._cam='';c._ctkk='440335.1449305758';var h='translate.googleapis.com';var s=(true?'https':window.location.protocol=='https:'?'https':'http')+'://';var b=s+h;c._pah=h;c._pas=s;c._pbi=b+'/translate_static/img/te_bk.gif';c._pci=b+'/translate_static/img/te_ctrl3.gif';c._pli=b+'/translate_static/img/loading.gif';c._plla=h+'/translate_a/l';c._pmi=b+'/translate_static/img/mini_google.png';c._ps=b+'/translate_static/css/translateelement.css';c._puh='translate.google.com';_loadCss(c._ps);_loadJs(b+'/translate_static/js/element/main.js');})();})();