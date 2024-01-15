//let names = ["Julie", "Katie", "Sarah", "Jereck"];

/* This code outputs our names into the console using a string array.
for (let x = 0; x < names.length; x++) {
  console.log(names[x]);
}
*/ 

//https://tinyurl.com/dynamic-html-checker
document.getElementById("html-checker").setAttribute("href","https://validator.w3.org/nu/?doc=" + location.href);
    
document.getElementById("css-checker").setAttribute("href","https://jigsaw.w3.org/css-validator/validator?uri=" + location.href); 
    
    //This sets current year in span with id of previous year.
    let d = new Date(); let thisYear = d.getFullYear();
    document.getElementById("this-year").innerHTML = thisYear;

//manages mobile nav and adjust the page accordingly
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
} 