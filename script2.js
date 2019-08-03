

var users = document.getElementById('users');

var output = document.getElementById('generate');

generate.addEventListener('click', function(){

    var no = document.getElementById('no').Value;
    var url= `https://randomuser.me/api/?results=${no}`;
    
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){

        if (xhr.readyState == 4 && xhr.status == 200){
            var data = JSON.parse(xhr.response).results;

             for(var x=0; x<data.length;x++){

                 var p = document.createElement("p");
                 p.innerText = x + " - " + data[x].name.title + " " + data[x].name.first + " " + data[x].name.last  
                 p.id="p"+x;
                 
                 var imahe = document.createElement("img");

                 imahe.src = data[x].picture.thumbnail;

                 
                 document.querySelector("#generate").appendChild(p);
                // var imahe = document.createElement("img");
                // imahe.src = data[x].picture.thumbnail;
                 document.querySelector("#"+p.id).append(imahe);      

              
             } 

            }      

        }
    xhr.open('GET',url);
    xhr.send();
})