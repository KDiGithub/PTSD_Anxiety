//Initialize function
var init = function () {
	// Do your initialization job
	console.log("init() called");

	// add eventListener for tizenhwkey
	window.addEventListener( 'tizenhwkey', function( ev ) {
        if( ev.keyName === "back" ) {
            var activePopup = document.querySelector( '.ui-popup-active' ),
                page = document.getElementsByClassName( 'ui-page-active' )[0],
                pageid = page ? page.id : "";

            if( pageid === "one" ) {
                try {
                    tizen.application.getCurrentApplication().exit();
                } catch (ignore) {
                }
            } else {
                window.history.back();
            }
        }
	});
};
// window.onload can work without <body onload="">
window.onload = init;

//MENU
function code(id){
	document.write (
		'<div id="menu_'+id+'" data-role="navbar">'+
			'<button onclick="Menu('+id+')">Меню</button>'+
			'<ul id="menu'+id+'" style="display:none;">'+
				'<li><a href="#main" onClick="goinout()">Главная страница</a></li>'+
				'<li><a href="#info">Общая информация</a></li>'+
				'<!-- <li>___</li> -->'+
				'<li><a href="#trigger-in">Ввод триггеров</a></li>'+
				'<li><a href="#out">Вывод данных</a></li>'+
				'<li><a href="#contact-in">Ввод контакта</a></li>'+
				'<li><a href="#contacts" onClick="contactList()">Экстренные контакты</a></li>'+
				'<!-- <li>___</li> -->'+
				'<li><a href="#chat">Чат</a></li>'+
				'<li><a href="#anxiety">Дыхание</a></li>'+	
				'<!-- <li>___</li> -->'+
				/*'<li><a href="#user">Авторизация</a></li>'+	
				'<li><a href="#exit">Выход пользователя</a></li>'+	*/
			'</ul>'+
		'</div>'
	);
}


//Показать/скрыть меню
function Menu(id)
{
var menu = document.getElementById('menu'+id).style;
if (menu.display == 'none')
{
menu.display = 'block';
}
else
{
menu.display = 'none';
}
}