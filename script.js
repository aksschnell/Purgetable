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
    document.getElementById("about").innerHTML = "Om os";
    document.getElementById("contact").innerHTML = "Kontakt";
    document.getElementById("webdev1").innerHTML = "Web udvikling";
    document.getElementById("webdev2").innerHTML = "Web udvikling";
    document.getElementById("trans1").innerHTML = "Oversættelse";
    document.getElementById("trans2").innerHTML = "Oversættelse";
    document.getElementById("rm1").innerHTML = "Læs mere";
    document.getElementById("rm2").innerHTML = "Læs mere";
    document.getElementById("rm3").innerHTML = "Læs mere";
    document.getElementById("webdev").innerHTML = "Web udvikling";
    document.getElementById("translation").innerHTML = "Oversættelse";
    document.getElementById("feelfree").innerHTML = "Har du et særligt tilbud? Så kontakt os";

    document.getElementById("p1").innerHTML = "Vi garantere dig en hurtig levering for din personlige hjemmeside";
    document.getElementById("p2").innerHTML = "Vi tilbyder følgende ";
    document.getElementById("li1").innerHTML = "Fremvisning af dit portfolio";
    document.getElementById("li2").innerHTML = "Din kompetencer";
    document.getElementById("li3").innerHTML = "Tidligere erhvervserfaring";
    document.getElementById("li4").innerHTML = "Blog";
    document.getElementById("li5").innerHTML = "Kontakt side med dine sociale medier";
    document.getElementById("li6").innerHTML = "Andre skræddersyet funktioner efter dit ønske";
    document.getElementById("p3").innerHTML = "Starter ved 340,-";
    document.getElementById("persweb").innerHTML = "Personlig hjemmeside";
    document.getElementById("ordernow1").innerHTML = "Bestil";
    document.getElementById("ordernow2").innerHTML = "Bestil";

    document.getElementById("translation").innerHTML = "Oversættelse";
    document.getElementById("p1_2").innerHTML = "Vi garantere dig hurtig og tilfredsstillende Dansk-Engelsk oversættelse";
    document.getElementById("p2_2").innerHTML = "Vælg mellem følgende";
    document.getElementById("l1_2").innerHTML = "500+ ords oversættelse";
    document.getElementById("l2_2").innerHTML = "Korrekturlæsning";
    document.getElementById("l3_2").innerHTML = "Starter ved 30,-";
    document.getElementById("feelfree").innerHTML = "Har du et særligt tilbud, så er du velkommen til at kontakte os";
    document.getElementById("persweb2").innerHTML = "Top kvalitets dansk-engelsk oversættelse";

}

function english ()
{
    document.getElementById("top").innerHTML = "Home";
    document.getElementById("about").innerHTML = "About us";
    document.getElementById("contact").innerHTML = "Contact";
    document.getElementById("webdev1").innerHTML = "Website Development";
    document.getElementById("webdev2").innerHTML = "Website Development";
    document.getElementById("trans1").innerHTML = "Translation";
    document.getElementById("trans2").innerHTML = "Translation";
    document.getElementById("rm1").innerHTML = "Read more";
    document.getElementById("rm2").innerHTML = "Read more";
    document.getElementById("rm3").innerHTML = "Read more";
    document.getElementById("webdev").innerHTML = "Website Development";
    document.getElementById("translation").innerHTML = "Translation";
    document.getElementById("p1").innerHTML = "We offer a guranteed fast delivery of your next personal website";
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
    

function rm1 ()
{
    window.location.hash = "#webdev";    
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

/* Animations ting */
