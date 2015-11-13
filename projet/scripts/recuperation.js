<<<<<<< HEAD
var url = "https://www.reddit.com/r/pics/.json";
var Httpreq = new XMLHttpRequest();
Httpreq.open("GET", url, false);
Httpreq.send(null);
var data = Httpreq.responseText;

obj = JSON.parse(data);
for (cptImage = 0; cptImage < 20 ; cptImage++) {
  document.getElementById("api").innerHTML += "<td><a href=\"" +
    obj.data.children[cptImage].data.url + "\"><img src=" +
    obj.data.children[cptImage].data.preview.images[0].source.url +
    " alt=\"" + obj.data.children[cptImage].data.title + "\" /></a></td>";
=======
window.onload = function load(){
	populaire();
>>>>>>> 8e73f005e65809e4920c188fd7ecdd391e39da11
}

function populaire(){
	var yourUrl = "https://www.reddit.com/r/pics/.json?limit=50";
	var Httpreq = new XMLHttpRequest();
	Httpreq.open("GET", yourUrl, false);
	Httpreq.send(null);
	var data = Httpreq.responseText;

	miseEnForme(data);
}

function nouveau(){
	var yourUrl = "https://www.reddit.com/r/pics/new/.json?limit=50";
	var Httpreq = new XMLHttpRequest();
	Httpreq.open("GET", yourUrl, false);
	Httpreq.send(null);
	var data = Httpreq.responseText;

	miseEnForme(data);
}

function progression(){
	var yourUrl = "https://www.reddit.com/r/pics/rising/.json?limit=50";
	var Httpreq = new XMLHttpRequest();
	Httpreq.open("GET", yourUrl, false);
	Httpreq.send(null);
	var data = Httpreq.responseText;

	miseEnForme(data);
}

function controverse(){
	var yourUrl = "https://www.reddit.com/r/pics/controversial/.json?limit=50";
	var Httpreq = new XMLHttpRequest();
	Httpreq.open("GET", yourUrl, false);
	Httpreq.send(null);
	var data = Httpreq.responseText;

	miseEnForme(data);
}

function miseEnForme(data){
	obj = JSON.parse(data);
	document.getElementById("api").innerHTML = "";
	for (cptImage = 0; cptImage < 50 ; cptImage++) {
		if(obj.data.children[cptImage].data.preview !== undefined){
			document.getElementById("api").innerHTML += "<td><a href=\"" +
				obj.data.children[cptImage].data.url + "\"><img src=" +
				obj.data.children[cptImage].data.preview.images[0].source.url +
				" alt=\"" + obj.data.children[cptImage].data.title + "\" /></a></td>";
		}
	}
	if(document.getElementById("api").innerHTML === ""){
		document.getElementById("api").innerHTML = "<p>Il n'y a rien n'a afficher</p>"
	}
}
