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
    document.getElementById("contactus1").innerHTML = "Konakt os";
    document.getElementById("fname").innerHTML = "Fornavn"; 
    document.getElementById("lname").innerHTML = "Efternavn";
    document.getElementById("country").innerHTML = "Land";
    document.getElementById("sc").innerHTML = "Vælg land...";
    document.getElementById("subject").innerHTML = "Emne";

  
}

function english ()
{
    document.getElementById("top").innerHTML = "Home";
    document.getElementById("about").innerHTML = "About us";
    document.getElementById("contact").innerHTML = "Contact";
    document.getElementById("contactus1").innerHTML = "Contact us";
    document.getElementById("fname").innerHTML = "First name";
    document.getElementById("lname").innerHTML = "Last name";
    document.getElementById("country").innerHTML = "Country";
    document.getElementById("sc").innerHTML = "Select country...";
    document.getElementById("subject").innerHTML = "Subject";


}
    
