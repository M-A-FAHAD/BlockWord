//index page code strart heare
//side bar code
function sidebarbtn(){
  //this code for side bar button one
  document.getElementById("side-bar-go").classList.add("side-bar-go")
  let myid = document.getElementById("sidebar-btn-one-id");
  myid.addEventListener("click", () => {
    document.getElementById("side-bar-go").classList.toggle("side-bar-go")
    document.getElementById("sidebar-btn-two-id").classList.toggle("sidebar-icon-one-go")
  });
  //this code for sidebar button two
  let myid2 = document.getElementById("sidebar-btn-two-id");
  myid2.addEventListener("click", () => {
  document.getElementById("side-bar-go").classList.toggle("side-bar-go")
  document.getElementById("sidebar-btn-two-id").classList.toggle("sidebar-icon-one-go")
});
}
sidebarbtn()

//dark mode code

let darkmode = document.getElementById("darkmode-id")
darkmode.addEventListener("click",()=>{
   document.getElementById("darkmode-id").classList.toggle("darkmode-color")
   document.getElementById("body-id").classList.toggle("body-color")
   document.getElementById("fahadvai").classList.toggle("fahadvai")
   document.getElementById("lifeisfun").classList.toggle("fahadvai")
   document.getElementById("welcome").classList.toggle("dark-mode-color")
   document.getElementById("learncode").classList.toggle("dark-mode-color")
   document.getElementById("learncodepera").classList.toggle("dark-mode-color")
   document.getElementById("sidebar-btn-two-id").classList.toggle("dark-mode-background-color")
   document.getElementsByClassName('project-box')[0].classList.toggle("darkmode-color")
   document.getElementsByClassName('project-box')[1].classList.toggle("darkmode-color")
   document.getElementsByClassName('project-box')[2].classList.toggle("darkmode-color")
})
//index page end strart heare
//about us page code start heare


//baout us page code end heare
