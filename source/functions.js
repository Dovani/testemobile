function clickMenu() {
    var menu = document.getElementById("menu"); // Obtém o elemento do menu
    if (menu.style.display === "block") {
      menu.style.display = "none"; // Se estiver visível, oculta o menu
    } else {
      menu.style.display = "block"; // Caso contrário, exibe o menu
    }
  }