for (let i = 0; i < document.querySelectorAll(".panel").length; i++) {
  document.querySelectorAll(".panel")[i].addEventListener("click", function(){
    this.classList.toggle("open");
  })
  document.querySelectorAll(".panel")[i].addEventListener("transitionend", function(e){
    if(e.propertyName.includes("flex")) {
      this.classList.toggle("open-active");
    };
  })
}
