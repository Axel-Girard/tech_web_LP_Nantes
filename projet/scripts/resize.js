function smallPreview(){
	var doc = document.getElementsByTagName('td');
	for(var i = 0; i < doc.length; i++) {
		doc[i].style.margin = '0 200px 220px 20px';
	}

	var image = document.getElementsByTagName('img');
	for(var i = 0; i < image.length; i++) {
		image[i].style.maxWidth = "180px";
		image[i].style.maxHeight = "180px";
		image[i].style.padding = "5px";
	}
}

function normalPreview(){
	var doc = document.getElementsByTagName('td');
	for(var i = 0; i < doc.length; i++) {
		doc[i].style.margin = '0 300px 340px 20px';
	}

	var image = document.getElementsByTagName('img');
	for(var i = 0; i < image.length; i++) {
		image[i].style.maxWidth = "250px";
		image[i].style.maxHeight = "250px";
		image[i].style.padding = "10px";
	}
}

function largPreview(){
	var doc = document.getElementsByTagName('td');
	for(var i = 0; i < doc.length; i++) {
		doc[i].style.margin = '0 600px 680px 20px';
	}

	var image = document.getElementsByTagName('img');
	for(var i = 0; i < image.length; i++) {
		image[i].style.maxWidth = "550px";
		image[i].style.maxHeight = "550px";
		image[i].style.padding = "20px";
	}
}