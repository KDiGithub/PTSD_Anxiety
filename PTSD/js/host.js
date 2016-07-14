/**
 * 
 */

//РЕГИСТРАЦИЯ
function Registr(){
	
}

//АВТОРИЗАЦИЯ
//function logIn(){}
/*function init_form_validate(){
	console.log("in");
	$("#auth_box_form").validate({
		submitHandler: function(form) {
			$.ajax({
				type: "GET",
				error:function (){alert("Ошибка");},
				url: "http://cs39316.tmweb.ru/login.php",
				data: "user_login="+$("#user_login").val()+"&user_password="+$("#user_password").val(),
				success: function (data){
					if (data!=error)
					{
						$("#sessid").val(data);
						alert("Авторизация прошла успешно");
					}
					else
					{
						alert("Ошибка авторизации");
					}
				}
			});
		},
		focusInvalid: false,
		focusCleanup: true,
		rules: {
			user_login:{
				required: true,
				email: true
			},
			user_password: {required:true}
		},
		messages: {
			user_login:{
				required: "Нужно ввести имя пользователя",
				email: "Нужно ввести корректный пароль"
			},
			auth_box_password: {
				required:"Требуется пароль"
			}
		},
		errorPlacement: function(error, element) {
			var er = element.attr("id");
			error.appendTo( element.parent().find("label[@for=" + er + "]"));
		}
	});
}*/

function LOGIN(){
	$('#loginResult').style="display:none;";
	    var username = $('#username').attr('value'); // получить username
	    var password = $('#password').attr('value'); // получить password

	    if (username!='' && password!='') { // значения не пусты
	    	//var log={username: username, password: password};
	      $.ajax({
	        type: "GET",
	        url: "http://cs39316.tmweb.ru/login.php", // URL-адрес сценария
	        //contentType: "json",
	        //dataType: "json",
	        // отправка username и password в качестве параметров в сценарий
	        //data: JSON.stringify(log),
	        data: "username=" + username + "&password=" + password,
	        // вызов сценария был *не* успешным
	        error: function(){alert("error1");}, // ошибка  
	        // вызов сценария был успешным 
	        success: function(data){
	          if (data.error) { // сценарий возвратил ошибку
	            $('#loginResult').text("data.error: " + data.error);
	          } // если
	          else { // вход в систему был успешным
	            $('#loginForm').hide();
	            $('#loginResult').text("data.success: " + data.success 
	              + ", data.userid: " + data.userid);
	          } //иначе
	         } // успех
	      }); // ajax
	    } // если
	    else {
	      $('#loginResult').text("enter username and password");
	      
	    } // иначе
	    $('#loginResult').fadeIn();
	    return false;
	}



//ВЫГРУЗКА
function outhost(){
	
}
