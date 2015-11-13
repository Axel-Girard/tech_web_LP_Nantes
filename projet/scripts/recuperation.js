window.onload = function load(){
	populaire();
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