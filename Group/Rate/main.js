const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if(queryString.length > 0){//data submitted
  let myOutput = `<div id="container">`;

  urlParams.forEach(function(value,key){

    key = key.split("_").join(" ");
    myOutput += `<p>${key}: ${value}</p>`;
  });
  myOutput += `<p><a href="index.html">CLEAR</a></p>`; 
  myOutput += `</div>`;
  document.querySelector("#output").innerHTML = myOutput;
}