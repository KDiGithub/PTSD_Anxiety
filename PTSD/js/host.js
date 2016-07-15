/**
 * 
 */
var exn='', exp='', datareg='';

function getdata(){ console.log('AAA'+datareg);}

//РЕГИСТРАЦИЯ
function REGISTR(){
	var userreg = $('#userreg').val(); // получить username
    var passreg = $('#passreg').val(); // получить password
    
    console.log(userreg + ' + ' + passreg);
    if (userreg!='' && passreg!='') { // значения не пусты
      $.ajax({
        type: "GET",
        url: "http://cs39316.tmweb.ru/reg.php", // URL-адрес сценария
        // отправка username и password в качестве параметров в сценарий
        data: {userreg:userreg, passreg:passreg},
        // вызов сценария был *не* успешным
        error: function(){alert("error reg");}, // ошибка  
        // вызов сценария был успешным 
        success: function(data){
          if (data=='no') { // сценарий возвратил ошибку
        	  exn='no';
            $('#regResult').text("data.error: you can't reg");
          } // если
          else{ // вход в систему был успешным
        	  	exn=userreg;
        	  	exp=passreg
        		LOGIN(exn, exp);
        	  	
        		
          } //иначе
         } // успех
      }); // ajax
    } // если
    else {
      $('#regResult').text("enter username and password");
      
    } // иначе
    $('#regResult').fadeIn();
    return false;
    
    
}


function LOGIN(username, password){
	if (exn!=username){
	    var username = $('#userin').val(); // получить username
	    var password = $('#passin').val(); // получить password
	}
	
	    console.log(username + ' + ' + password);
	    if (username!='' && password!='') { // значения не пусты
	      $.ajax({
	        type: "GET",
	        url: "http://cs39316.tmweb.ru/login.php", // URL-адрес сценария
	        // отправка username и password в качестве параметров в сценарий
	        data: {username:username, password:password},
	        // вызов сценария был *не* успешным
	        error: function(){alert("error log");}, // ошибка  
	        // вызов сценария был успешным 
	        success: function(data){
	          if (data=='no') { // сценарий возвратил ошибку
	        	  exn='no';
	            $('#loginResult').text("data.error: no user");
	          } // если
	          else { // вход в систему был успешным
	        	  	exn=username;
	        	  	datareg=data;
	        		$('#logindiv').hide();
	        		$('#loginResult').text("success, id_user: " + datareg);
	        		$('#regdiv').hide();
	        		$('#regResult').text("success, id_user: " + datareg);
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

function EXIT(){
	$('#userin').val('');
	$('#passin').val('');
	$('#logindiv').show();
	$('#regdiv').show();
	$('#loginResult').text('');
	$('#loginResult').style="display:none;";
	$('#userin').val('');
	$('#passin').val('');
	exn='no';
	$('#main').onClick=goinout();
	window.location.href="#main";
	
	console.log(datareg);
}

function goinout(){
	//var ex=$('#loginResult').text();
	//if (ex=='')
	console.log(exn);
	$("#inout").empty()
	if(exn!='no' && exn!=undefined && exn!='')
	{
		$("#inout").append('<a href="#exit">Выход пользователя</a><br>');
		if ($("#hello").text()==''){ $("#hello").append(' '+exn); }
	}
	else {
		$("#inout").append('<a href="#user">Войти</a>');
		if ($("#hello").text()!=''){ $("#hello").empty();} 
	}
	
}

//ВЫГРУЗКА
function outhost(){
	
}
