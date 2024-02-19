//selecting side navbar,Menuicon
var sidenav =document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var closenav=document.getElementById("closenav")
menuicon.addEventListener("click",function(){
    sidenav.style.left=0

})
closenav.addEventListener("click",function(){
    sidenav.style.left="-50%"

})
//slider
currentslideID=1;
slider=document.getElementById("slider")
totalslides =slider.childElement.Count;
console.log(totalslides)
function next(){
if(currentslideID<totalslides)
{
currentslideID=currentslideID+1;
showslide()
}
}
function prev()
{
    if(currentslideID>1)
    currentslideID=currentslideID-1;

}
function showslide(){
    slides=document.getElementById('slider').getElementsByTagName('li')
    for( let index=0;index<totalslides; index++){
        const element =slides[index];
        if(currentslideID===index+1){
            element.classList.remove('hidden')
        }
        else{
            element.classList.add('hidden')
        }
    }
}
