//создаем переменную, в которую положем кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
//создаем переменную, в которую кладем меню
let menu = document.querySelector('.sidebar')

//отслеживаем клик по кнопке меню и запускаем функцию
menuToggle.addEventListener('click', function(event) {
  //Отменяем стандартное поведение ссылки
  event.preventDefault();
  //Вешаем класс на меню, когда кликнули по кнопке меню
  menu.classList.toggle('visible');
})

/*
  margin-left: 0;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fa8c16;
    padding-top: 16px;
    padding-bottom: 16px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15); 
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 35px;
    padding-right: 35px;
*/