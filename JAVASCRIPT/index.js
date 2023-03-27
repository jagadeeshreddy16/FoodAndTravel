var email="jagadeeshreddy@gmail.com"
var pass="12345"
function autho()
{
    var usergivenUSID=document.getElementById("Email").value
    var usergivenPass=document.getElementById("pass").value
    if(email==usergivenUSID && pass==usergivenPass)
    {
        document.getElementById("fom").setAttribute("action","./HTML/Food and Travel.html")
        document.getElementById("but").setAttribute("type","submit")
    }
    else if(email!=usergivenUSID && pass==usergivenPass)
    {
        document.getElementById("emailDiv").style.borderColor="red"
        document.getElementById("passDiv").style.borderColor="royalblue"
        document.getElementById("container").style.backgroundImage="linear-gradient(70deg,red,rgb(146, 3, 146))"
        document.getElementById("result").innerHTML="Invalid Email"
    }
    else if(email==usergivenUSID && pass!=usergivenPass)
    {
        document.getElementById("passDiv").style.borderColor="red"
        document.getElementById("emailDiv").style.borderColor="royalblue"
        document.getElementById("container").style.backgroundImage="linear-gradient(70deg,rgb(250, 76, 105),red)"
        document.getElementById("result").innerHTML="Invalid Password"
    }
    else
    {
        document.getElementById("emailDiv").style.borderColor="red"
        document.getElementById("passDiv").style.borderColor="red"
        document.getElementById("container").style.backgroundImage="linear-gradient(70deg,red,red)"
        document.getElementById("result").innerHTML="Invalid Email and Password"
    }
}
function visiblePassword()
{
    document.getElementById("pass").removeAttribute("type")
    document.getElementById("visible").setAttribute("src","./ASSET/logos/openeyes.png")
    document.getElementById("visible").style.transform="rotateY(360deg)"
}
function hidePassword()
{
    document.getElementById("pass").setAttribute("type","password")
    document.getElementById("visible").setAttribute("src","./ASSET/logos/closeeyes.png")
    document.getElementById("visible").style.transform="rotateY(-360deg)"
}