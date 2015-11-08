var yourUrl = "https://www.reddit.com/r/pics/.json";
var Httpreq = new XMLHttpRequest();
Httpreq.open("GET", yourUrl, false);
Httpreq.send(null);
var data = Httpreq.responseText;

obj = JSON.parse(data);
for (cptImage = 0; cptImage < 20 ; cptImage++) {
  document.getElementById("api").innerHTML += "<td><a href=\"" +
    obj.data.children[cptImage].data.url + "\"><img src=" +
    obj.data.children[cptImage].data.preview.images[0].source.url +
    " alt=\"" + obj.data.children[cptImage].data.title + "\" /></a></td>";
}
