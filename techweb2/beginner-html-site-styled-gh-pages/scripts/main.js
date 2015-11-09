// http://cours.crydee.eu/webdev
// https://developer.mozilla.org/fr/Apprendre/Commencer_avec_le_web/Les_bases_JavaScript
var monTitre = document.querySelector('h1');
monTitre.innerHTML = 'Hello world!';

var monImage = document.querySelector('img');

monImage.onclick = function() {
    var maSrc = monImage.getAttribute('src');
    if(maSrc === 'images/firefox-icon.png') {
      monImage.setAttribute ('src','images/chrome.png');
    } else {
      monImage.setAttribute ('src','images/firefox-icon.png');
    }
}