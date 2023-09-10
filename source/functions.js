
function clickMenu() {
  var menu = document.getElementById("menu"); // Obtém o elemento do menu
  if (menu.style.display === "block") {
    menu.style.display = "none"; // Se estiver visível, oculta o menu
  } else {
    menu.style.display = "block"; // Caso contrário, exibe o menu
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