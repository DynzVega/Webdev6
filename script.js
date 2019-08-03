var btn = document.getElementById('btn');

// var output = document.getElementById('output');



    var xhr = new XMLHttpRequest();

    var url = 'https://restcountries.eu/rest/v2/all';

    xhr.onreadystatechange = function(){
	   
		if (xhr.readyState == 4 && xhr.status == 200){
		var data = JSON.parse(xhr.responseText);
		for (var x = 0;x<data.length;x++){
        	var opt = document.createElement("options");
			opt.innerText = data[x].name;
			document.querySelector("#clist").appendChild(opt);
        }

	}
}

    xhr.open('GET',url);
    xhr.send();

