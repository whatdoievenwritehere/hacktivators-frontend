document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    
    menuToggle.addEventListener('click', function () {
        menuToggle.classList.toggle('menu-open');
        menu.classList.toggle('menu-open');
    });
});




document.getElementById('toggleButton').addEventListener('click', function() {
    const infoBlock = document.getElementById('infoBlock');
    if (infoBlock.classList.contains('hidden')) {
      infoBlock.classList.remove('hidden');
    } else {
      infoBlock.classList.add('hidden');
    }
  });


  window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 0) {
      header.classList.add('red');
    } else {
      header.classList.remove('red');
    }
  });