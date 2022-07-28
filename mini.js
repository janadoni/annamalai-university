
/* searchbar section*/
var searchmani=document.querySelector("#searchmani");
var searchbar=document.querySelector(".searchinput");

searchmani.addEventListener('click',function(){
  if(searchbar.style.display==="none"){
    searchbar.style.display="block";
    searchbar.style.transitionDelay=' all 30s';
  } 
  else{
    searchbar.style.display="none";
    searchbar.style.transitionDelay='all 30s';

  }
});
/*searchbar section end*/

/*category section start*/
var category=document.querySelector(".cat");
var dropdown=document.querySelector(".dropdown");
var menubar=document.querySelector(".menubar");
var dropdownContent=document.querySelectorAll(".dropdown-content");
var a=document.querySelectorAll(".a");

category.addEventListener('click',function(){

  if(menubar.style.left==="-400px"){
    menubar.style.left="0";
    menubar.style.marginTop="20px";

  }
  else{
    menubar.style.left="-400px";
    
    menubar.style.marginTop="20px";


    
  }
});
/*category section end*/


/*dropmenu content open code*/
var x=document.getElementById('list1');
x.addEventListener('click',function(){
  document.getElementById('drop1').classList.toggle("show");
})
 var x=document.getElementById('list2');
 x.addEventListener('click',function(){
   document.getElementById('drop2').classList.toggle("show");
})
var x=document.getElementById('list3');
x.addEventListener('click',function(){
  document.getElementById('drop3').classList.toggle("show");
})
var x=document.getElementById('list4');
x.addEventListener('click',function(){
  document.getElementById('drop4').classList.toggle("show");
})
var x=document.getElementById('list5');
x.addEventListener('click',function(){
  document.getElementById('drop5').classList.toggle("show");
})
var x=document.getElementById('list6');
x.addEventListener('click',function(){
  document.getElementById('drop6').classList.toggle("show");
})
var x=document.getElementById('list7');
x.addEventListener('click',function(){
  document.getElementById('drop7').classList.toggle("show");
})
var x=document.getElementById('list8');
x.addEventListener('click',function(){
  document.getElementById('drop8').classList.toggle("show");
})
var x=document.getElementById('list9');
x.addEventListener('click',function(){
  document.getElementById('drop9').classList.toggle("show");
})
var x=document.getElementById('list10');
x.addEventListener('click',function(){
  document.getElementById('drop10').classList.toggle("show");
})
window.onclick=function(event) {
  if (!event.target.matches('.a')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
/*dropmenu content open end */
