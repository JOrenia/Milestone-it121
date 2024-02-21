// Updated JavaScript function to match the ID in HTML
function myFunction() {
    var nav = document.getElementById('navMenu'); // Update ID to match the one in HTML
    if (x.classList.contains("responsive")) {
        x.classList.remove("responsive");
    } else {
        x.classList.add("responsive");
    }
}


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