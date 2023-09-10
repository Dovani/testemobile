
function clickMenu() {
  var menu = document.getElementById("menu"); // Obtém o elemento do menu
  if (menu.style.display === "block") {
    menu.style.display = "none"; // Se estiver visível, oculta o menu
  } else {
    menu.style.display = "block"; // Caso contrário, exibe o menu
  }
}

function clickBackCard(){
  largura = window.innerWidth;
  if(largura < 768){
    var back = document.getElementById("back");
    var front = document.getElementById("front")
    if(back.style.transform = 'rotateY(0)'){
      back.style.transform = 'rotateY(180deg)';
      front.style.transform = 'rotateY(0)';
    }
  }
}

function clickFrontCard(){
  largura = window.innerWidth;
  if(largura < 768){
    var back = document.getElementById("back");
    var front = document.getElementById("front")
    if(front.style.transform = 'rotateY(0)'){
      front.style.transform = 'rotateY(180deg)';
      back.style.transform = 'rotateY(0)';
    }
  }
}

let previewContainer = document.querySelector('.item-view');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.items .projeto').forEach(projeto =>{
  projeto.onclick = () =>{
    previewContainer.style.display = 'flex';
    let name = projeto.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    previewContainer.style.display = 'none';
  };
});