
const allRightCard = document.querySelectorAll(".p4-right-card")
const changeImg = document.querySelector(".p4-left img")
const contactUs = document.querySelector(".left button")
const contactFrom = document.querySelector("#contackFrom")
const cross = document.querySelector(".cross")
const allInput = document.querySelectorAll("#contackFrom form input")

contactUs.addEventListener("click",(e)=>{
  contactFrom.style.display = "flex"
})
cross.addEventListener("click",(e)=>{
  contactFrom.style.display = "none"
  allInput.forEach((input)=>{
    input.value = ""
  })
})



function removeActiveClass(){
  allRightCard.forEach((elem)=>{
    elem.classList.remove("active")
  })
}


document.querySelectorAll(".p4-right-card").forEach((elem,ind)=>{
  elem.addEventListener("click",(e)=>{
    removeActiveClass()
    elem.classList.add("active")
  
    if(ind==0){
      changeImg.src = `img/image.png`
    }else{
      
      changeImg.src = `img/0${ind}.avif`
    }

  })
})

document.querySelectorAll('label input').forEach(input => {
  input.addEventListener('input', (e) => {
    const label = e.target.closest('label');
    const p = label.querySelector('p');
    if (e.target.value) {
      p.style.top = "7%";
    } else {
      p.style.top = "50%";
    }
  });
});

