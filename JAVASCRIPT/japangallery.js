var imagesArray=['0','1','2','3','4','5','6','7','8']
var i=0;
function header()
{
    console.log(i)
    if(i>imagesArray.length-1)
    {
        i=0;
        document.getElementById("header").style.backgroundImage=`url(../ASSET/Images/japan/${imagesArray[i]}.jpg)`
    }
    else
    {
        document.getElementById("header").style.backgroundImage=`url(../ASSET/Images/japan/${imagesArray[i]}.jpg)`
    }
    i++;
    var time=setTimeout(header,2000);
}
function right()
{
    i++
    if(i>imagesArray.length-1)
    {
        i=0;
        document.getElementById("header").style.backgroundImage=`url(../ASSET/Images/japan/${imagesArray[i]}.jpg)`
    }
    else{
        document.getElementById("header").style.backgroundImage=`url(../ASSET/Images/japan/${imagesArray[i]}.jpg)`
    }
}
function left()
{
    i--
    if(i<0)
    {
        i=imagesArray.length-1;
        document.getElementById("header").style.backgroundImage=`url(../ASSET/Images/japan/${imagesArray[i]}.jpg)`
    }
    else{
        document.getElementById("header").style.backgroundImage=`url(../ASSET/Images/japan/${imagesArray[i]}.jpg)`
    }
}
// thisIsGalleryCode
var img=document.getElementsByClassName("images")
console.log(img)
for(i=0;i<img.length;i++)
{
    img[i].src=`../ASSET/Images/japan/${i}.jpg`
    img[i].style.width="400px"
    img[i].style.height="300px"
}
function closeTheImage()
{
    document.getElementById("Bigimage").setAttribute("style","display:none") 
}
function openTheImg(img,title,content)
{
    console.log(img)
    document.getElementById("bigimg").setAttribute("src",`../ASSET/Images/japan/${img}.jpg`)
    document.getElementById("imageTitle").innerHTML=title
    document.getElementById("imgContent").innerHTML=content
    document.getElementById("Bigimage").removeAttribute("style")
}