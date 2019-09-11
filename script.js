function onLoad() 
{
    
if(localStorage.getItem("cur") == null)
{
    localStorage.setItem("cur", "1")
}

    if(localStorage.getItem("cur") == "0")
    {
        document.getElementById("flag").src ="pics/dk.png";
        danish();
        
    }
    else
    {
        document.getElementById("flag").src ="pics/uk.png";
        english();
        
    }
}

function flagClick()
{

    if(localStorage.getItem("cur") == "1")
    {
        document.getElementById("flag").src ="pics/dk.png";
        localStorage.setItem("cur", "0");
        danish();
       
    }
    else
    {
        document.getElementById("flag").src ="pics/uk.png";
        localStorage.setItem("cur", "1");
        english();
       
    }    

}

function  danish ()
{     

    document.getElementById("top").innerHTML = "Hjem";
    document.getElementById("about").innerHTML = "Om us";
    document.getElementById("contact").innerHTML = "Kontakt";
    document.getElementById("trans1").innerHTML = "Oversættelse";
    document.getElementById("trans2").innerHTML = "Oversættelse";
    document.getElementById("webdev1").innerHTML = "Web udvikling";
    document.getElementById("webdev2").innerHTML = "Web udvikling";
    document.getElementById("webdev3").innerHTML = "Web udvikling";
    document.getElementById("translation").innerHTML = "Oversættelse";
    document.getElementById("P1").innerHTML = "Vi garantere en hurtig levering af dine næste personlige hjemmeside";
    document.getElementById("p2").innerHTML = "Vi tilbyder følgende";
    document.getElementById("li1").innerHTML = "Portfolio fremvisning";
    document.getElementById("li2").innerHTML = "Dine kompetencer";
    document.getElementById("li3").innerHTML = "Tidligere erhvervserfaring";
    document.getElementById("li4").innerHTML = "Blog";
    document.getElementById("li5").innerHTML = "Kontakt side med dine sociale medier";
    document.getElementById("li6").innerHTML = "Andre skræddersyet funktioner efter dit ønske";
    document.getElementById("p3").innerHTML = "Starter ved 335 ,-";
    document.getElementById("persweb").innerHTML = "Personlig hjemmeside";
    document.getElementById("ordernow1").innerHTML = "Bestil nu";
    document.getElementById("ordernow2").innerHTML = "Bestil nu";

    document.getElementById("translation").innerHTML = "Oversættelse";
    document.getElementById("p1_2").innerHTML = "Vi garantere dig en hurtig levering af din Dansk-Engelsk oversættelse";
    document.getElementById("p2_2").innerHTML = "Vælg mellem følgende";
    document.getElementById("l1_2").innerHTML = "500+ ords oversættelse";
    document.getElementById("l2_2").innerHTML = "korrekturlæsning";
    document.getElementById("l3_2").innerHTML = "Starter ved 35 ,-";
    document.getElementById("feelfree").innerHTML = "Har du et særlig ønske, så er du velkommen til at kontakte os";
    document.getElementById("persweb2").innerHTML = "Top kvalitets Dansk-Engelsk ovesættelse";

    
//konakt siden:




}


function cdanish (){
    document.getElementById("contactus").innerHTML = "Konakt os";
    document.getElementById("fname").innerHTML = "Fornavn";
    document.getElementById("lname").innerHTML = "Efternavn";
    document.getElementById("country").innerHTML = "Land";
    document.getElementById("sc").innerHTML = "Vælg land...";


}

function english ()
{
    document.getElementById("top").innerHTML = "Home";
    document.getElementById("about").innerHTML = "About us";
    document.getElementById("contact").innerHTML = "Contact";
    document.getElementById("trans1").innerHTML = "Translation";
    document.getElementById("trans2").innerHTML = "Translation";
    document.getElementById("webdev1").innerHTML = "Web Development";
    document.getElementById("webdev2").innerHTML = "Web Development";
    document.getElementById("webdev3").innerHTML = "Web Development";
    document.getElementById("translation").innerHTML = "Translation";
    document.getElementById("P1").innerHTML = "We offer a guranteed fast delivery of your next personal website";
    document.getElementById("p2").innerHTML = "We offer the follwing features";
    document.getElementById("li1").innerHTML = "Portfolio Display";
    document.getElementById("li2").innerHTML = "Your skills";
    document.getElementById("li3").innerHTML = "Previous work experience";
    document.getElementById("li4").innerHTML = "Blog";
    document.getElementById("li5").innerHTML = "Contact page with your social media";
    document.getElementById("li6").innerHTML = "Other costume requirements as requested by the client";
    document.getElementById("p3").innerHTML = "Starting at $50.";
    document.getElementById("persweb").innerHTML = "Personal Website";
    document.getElementById("ordernow1").innerHTML = "Order now";
    document.getElementById("ordernow2").innerHTML = "Order now";

    document.getElementById("translation").innerHTML = "Translation";
    document.getElementById("p1_2").innerHTML = "We offer a guranteed fast delivery of your next Danish-English translation";
    document.getElementById("p2_2").innerHTML = "Choose from the following:";
    document.getElementById("l1_2").innerHTML = "500+ word translation";
    document.getElementById("l2_2").innerHTML = "Proofreading";
    document.getElementById("l3_2").innerHTML = "Starting at $5";
    document.getElementById("feelfree").innerHTML = "Do you have a special offer? Feel Free to contact us";
    document.getElementById("persweb2").innerHTML = "Top quality Danish-English translation";



}


function cenglish (){

    document.getElementById("contactus").innerHTML = "Contact us";
    document.getElementById("fname").innerHTML = "Firstname";
    document.getElementById("lname").innerHTML = "Lastame";
    document.getElementById("country").innerHTML = "Country";
    document.getElementById("sc").innerHTML = "Select country...";

}
    

function rm1 ()
{
    window.location.hash = "#webdev3";    
}

function trans1 ()
{
    window.location.hash = "#translation";    
}

function la ()
{
    window.open('https://www.linkedin.com/in/august-schnell-4a0641170/','_blank');
}

function ma ()
{
   document.getElementById("ma").style.visibility ="visible";
   document.getElementById("ma").style.opacity ="1";   
}

function ma1 ()
{

   document.getElementById("ma1").style.visibility ="visible";
}

function fa ()
{
    window.open('https://www.facebook.com/nick.gade.58');
}

function la1 ()
{
    window.open('https://www.linkedin.com/in/nick-gade-56323a176/');
}


