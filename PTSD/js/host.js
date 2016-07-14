/**
 * 
 */

//РЕГИСТРАЦИЯ
function Registr(){
	
}


function LOGIN(){
	$('#loginResult').style="display:none;";
	    var username = $('#userin').val();//('value'); // получить username
	    var password = $('#passin').val();//attr('value'); // получить password
	    
	    console.log(username + ' ' + password);
	    if (username!='' && password!='') { // значения не пусты
	      $.ajax({
	        type: "GET",
	        url: "http://cs39316.tmweb.ru/login.php", // URL-адрес сценария
	        //contentType: "json",
	        //dataType: "json",
	        // отправка username и password в качестве параметров в сценарий
	        data: {username:username, password:password},
	        // вызов сценария был *не* успешным
	        error: function(){alert("error1");}, // ошибка  
	        // вызов сценария был успешным 
	        success: function(data){
	          if (data.error) { // сценарий возвратил ошибку
	            $('#loginResult').text("data.error: " + data.error);
	          } // если
	          else { // вход в систему был успешным
	            $('#loginForm').hide();
	            $('#loginResult').text("data.success, data.id_user: " + data.id_user);
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
