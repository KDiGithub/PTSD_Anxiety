function code(id){
	document.write (
		'<div id="menu_'+id+'" data-role="navbar">'+
			'<button onclick="Menu('+id+')">Меню</button>'+
			'<ul id="menu'+id+'" style="display:none;">'+
				'<li><a href="#main">Главная страница</a></li>'+
				'<li><a href="#info">Общая информация</a></li>'+
				'<!-- <li>___</li> -->'+
				'<li><a href="#out">Вывод данных</a></li>'+
				'<li><a href="#contact-in">Ввод контакта</a></li>'+
				'<li><a href="#trigger-in">Ввод триггеров</a></li>'+
				'<!-- <li>___</li> -->'+
				'<li><a href="#contacts" onClick="contactList()">Экстренные контакты</a></li>'+
				'<li><a href="#chat">Чат</a></li>'+
				'<li><a href="#anxiety">Дыхание</a></li>'+
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