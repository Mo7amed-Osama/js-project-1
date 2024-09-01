////////////////////////////////palet of colors//////////////////////////

// make the links visible in max width 530px
let headerBar  = document.querySelector("header .links i");
let headerLinks = document.querySelector(" header .links ul")

headerBar.addEventListener("click" , function(event) {


    event.stopPropagation(); // Prevent the event from bubbling up to the document

    if (headerLinks.style.display === "none" || headerLinks.style.display === "") {
        headerLinks.style.display = "flex"; 
    } else {
        headerLinks.style.display = "none"; 
    }
})

document.onclick = function(event){

    if(!headerLinks.contains(event.target))
    {
        if(headerLinks.style.display === "flex")
        {
                    headerLinks.style.display = "none";

        }
    }
}
/////////////////////////////////////////////////////////////////////
// make the settings appear and disappear 
let gear = document.querySelector(".landing .settings i");
let settings = document.querySelector(".landing .settings .setters");

gear.onclick = function(){
    if(settings.style.display === "none"||settings.style.display === "")
    {
        settings.style.display = "block"; 
        gear.style.left = "99px"; 
    }
    else
    {
        settings.style.display = "none"; 
        gear.style.left = "0px";   
    }
    
}
//////////////////////////////////////////////////////////////////
// change the color of items when click on li 
let green = document.querySelector(".landing .setters .colors ul li:nth-child(5)");
let blue = document.querySelector(".landing .setters .colors ul li:nth-child(4)")
let DarkGreen = document.querySelector(".landing .setters .colors ul li:nth-child(3)")
let red = document.querySelector(".landing .setters .colors ul li:nth-child(2)")
let orange = document.querySelector(".landing .setters .colors ul li:nth-child(1)")
let root = document.documentElement;

green.onclick = function(){
    root.style.setProperty("--MainColor--" , "#44ab4e");
}
blue.onclick = function(){
    root.style.setProperty("--MainColor--" , "#03a4f0");
}
DarkGreen.onclick = function(){
    root.style.setProperty("--MainColor--" , "#009487");
}
red.onclick = function(){
    root.style.setProperty("--MainColor--" , "#e71c61");
}
orange.onclick = function(){
    root.style.setProperty("--MainColor--" , "#fa9500");
}
////////////////////////////////////////////////////////////////
// make the background of landing change 
let landingBg = ["/images/landingBG1.jpg" , "/images/landingBG2.jpg" , "/images/landingBG3.jpg", "/images/landingBG4.jpg" , "/images/landingBG5.jpg"];
let LandingDiv = document.querySelector(".landing");
let i =0;

setInterval(function() {
    // Set the background image of the div
    LandingDiv.style.cssText = `background-image : url(${landingBg[i]});`;
    i++;

    if (i >= landingBg.length) {
        i = 0;
    }
}, 5000);
////////////////////////////////////////////////////////////
// make the photos of gallary to  pop up 
let img = document.querySelector(".gallary .images");

img.onclick = function(ele){
    if(ele.target.alt === "Photo")
    {
        let photodiv = document.createElement("div");
        let popimg = document.createElement("img");
        let src  = ele.target.src;
        let del = document.createElement("span");
        del.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
        popimg.src = src;
        photodiv.append(popimg);
        photodiv.append(del);
        document.body,this.appendChild(photodiv);
        photodiv.style.cssText = "width: fit-content;position: absolute;left: 50%;transform: translate(-50%, -50%); top: 50%; padding: 20px 10px 10px 10px;background-color: white; z-index : 5; box-shadow : rgb(45 45 45 / 60%) 1px 1px 1px 1000px; margin-top : -55px ";
        popimg.style.cssText = "width : 350px ; height : 250px ; border-radius : unset;";
        del.style.cssText = "position: absolute;   top: -5px;   right: -7px;   color: var(--MainColor--);font-size: 20px; cursor : pointer; "

        document.body.style.pointerEvents = "none"; // Disable all clicks
        photodiv.style.pointerEvents = "auto"; 

        del.onclick = function (event) {
            event.stopPropagation(); // Prevent event bubbling
            photodiv.style.display = "none"; // Hide the popup
            document.body.style.pointerEvents = "auto"; // Re-enable clicks
        };
        photodiv.onclick = function (event) {
            event.stopPropagation();
        };
    }
}
///////////////////////////////////////////////////////
