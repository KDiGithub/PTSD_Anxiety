/**
 * 
 */

function removeChildren(elem) {
  try {
    elem.innerHTML = '';
  } catch (e) {
    while (elem.firstChild) {
      elem.removeChild(elem.firstChild);
    }
  }
}

function newContact(){	
	var i=0, arr=[];

	arr[i]= {name: $("#contactname").val(), phone: $("#phonenum").val()};
	setFile(storeC, arr[i]);	
	
	$("#contactname").val('');
	$("#phonenum").val('');
	
	i++;

}

function contactList()
{
	removeChildren(contactContent);
	var mess='<ul data-role="listview" id="contactContent" data-inset="true">'
			getStorage(storeC, function(res){
					for(var field in res){
							/*for(var fieldValue in (value=res[field]))
								{*/
									/*switch(fieldValue)
										{
											case 'name':*/
												var name=res[field].name;/*value[fieldValue].name;*/
											/*case 'phone':*/
												var phone=res[field].phone;/*value[fieldValue].phone;*/
										/*}*/
								/*}*/
		
							$('#contactContent').append( /*mess+=*/'<p><a href="tel:'+phone+'" data-role="button">'+name+'</a></p>');
					}
			});
	/*mess+='</ul>'
	document.write(mess);*/
}

function newTriggers(){
	var i=0, arr=[];
	var d=new Date(), day=d.getDate(), month=d.getMonth() + 1, year=d.getFullYear();
	console.log(d);

	arr[i]= {place: $("#place").prop("checked"), sound: $("#sound").prop("checked"),
				image: $("#image").prop("checked"), smell: $("#smell").prop("checked"),
				touch: $("#touch").prop("checked"), human: $("#human").prop("checked"),
				date: {year:year, month:month, day:day}};  
	setFile(storeT, arr[i]);	
	i++;
		
}

function newHelp(id){
	var i=0, arr=[], g=false, nh=false;
	var d=new Date(), day=d.getDate(), month=d.getMonth() + 1, year=d.getFullYear();
	console.log(d);
	
	if (id=="good") g=true;
	if (id=="need_help") nh=true;
	
	arr[0]= {good: g, need_help: nh,
				date: {year:year, month:month, day:day}};  
	setFile(storeGB, arr[i]);	
	i++;
}

function outGB(){
	var mess='<ul data-role="listview" id="contactContent" data-inset="true">'
		getStorage(storeGB, function(res){
				for(var field in res){
						/*for(var fieldValue in (value=res[field]))
							{*/
								/*switch(fieldValue)
									{
										case 'name':*/
											var name=res[field].good;/*value[fieldValue].name;*/
										/*case 'phone':*/
											var phone=res[field].need_help;/*value[fieldValue].phone;*/
									/*}*/
							/*}*/
	
						alert(phone+''+name);
				}
		});
}
	
function outcanvastr(){	
	var p=0,s=0,i=0,sm=0,t=0,h=0,dp=0,ds=0,di=0,dsm=0,dt=0,dh=0;
	removeChildren(triggleg);
	
	/*alert('p'+p+' s'+s+' i'+i+' sm'+sm+' t'+t+' h'+h);
	alert('dp'+dp+' ds'+ds+' di'+di+' dsm'+dsm+' dt'+dt+' dh'+dh);*/
	
	getStorage(storeT, function(res){
			for(var field in res){
				if(res[field].place==true) {p+=5; dp+=1;}
				if(res[field].sound==true) {s+=5; ds+=1;}
				if(res[field].image==true) {i+=5; di+=1;}
				if(res[field].smell==true) {sm+=5; dsm+=1;}
				if(res[field].touch==true) {t+=5; dt+=1;}
				if(res[field].human==true) {h+=5; dh+=1;}
			}
			
			/*alert('p'+p+' s'+s+' i'+i+' sm'+sm+' t'+t+' h'+h);
			alert('dp'+dp+' ds'+ds+' di'+di+' dsm'+dsm+' dt'+dt+' dh'+dh);*/
			
			if(dp<17 && ds<17 && di<17 && dsm<17 && dt<17 && dh<17){
				dp=dp*3;
				ds=ds*3;
				di=di*3;
				dsm=dsm*3;
				dt=dt*3;
				dh=dh*3;
			}
			else if(dp<26 && ds<26 && di<26 && dsm<26 && dt<26 && dh<26){
				dp=dp*2;
				ds=ds*2;
				di=di*2;
				dsm=dsm*2;
				dt=dt*2;
				dh=dh*2;
			}
			
			
			/*alert('dp'+dp+' ds'+ds+' di'+di+' dsm'+dsm+' dt'+dt+' dh'+dh);*/
			
			var x=0, y=200;
			var tr = document.getElementById("cantrig");
			var ctx = tr.getContext("2d");
			
			ctx.clearRect(0, 0, tr.width, tr.height);
			
			ctx.fillStyle = "#129321";
			ctx.fillRect(x,y,dp,-p);
			x+=dp+2;
			ctx.fillStyle = "#438432";
			ctx.fillRect(x,y,ds,-s);
			x+=ds+2;
			ctx.fillStyle = "#347543";
			ctx.fillRect(x,y,di,-i);
			x+=di+2;
			ctx.fillStyle = "#656654";
			ctx.fillRect(x,y,dsm,-sm);
			x+=dsm+2;
			ctx.fillStyle = "#565765";
			ctx.fillRect(x,y,dt,-t);
			x+=dt+2;
			ctx.fillStyle = "#874876";
			ctx.fillRect(x,y,dh,-h);
			
					$('#triggleg').append(
					'<ul>'+
					'<li style="color:#129321">Место</li>'+
					'<li style="color:#438432">Звук</li>'+
					'<li style="color:#347543">Визуальный образ</li>'+
					'<li style="color:#656654>Запах</li>'+
					'<li style="color:#656654>Запах</li>'+
					'<li style="color:#565765">Прикосновение</li>'+
					'<li style="color:#874876">Человек</li>'+
					'</ul>');
			
	});
}

function outcanvasg(){	
	var g=0,b=0,dg=0,db=0;
	
	removeChildren(badleg);
	
	/*alert('g'+g+' b'+b);
	alert('dg'+dg+' db'+db);*/
	
	getStorage(storeGB, function(res){
			for(var field in res){
				if(res[field].good==true) {g+=15; dg+=5;}
				if(res[field].need_help==true) {b+=15; db+=5;}
			}
			
			/*alert('g'+g+' b'+b);
			alert('dg'+dg+' db'+db);*/
			
			if(g<30 && b<30){
				g=g*5;
				b=b*5;
			}
			else if(g<50 && b<50){
				g=g*3;
				b=b*3;
			}
			else if(g<75 && b<75){
				g=g*2;
				b=b*2;
			}
			
			/*alert('g'+g+' b'+b);*/
			
			var x=0, y=200;
			var tr = document.getElementById("canbad");
			var ctx = tr.getContext("2d");
			
			ctx.clearRect(0, 0, tr.width, tr.height);
			
			ctx.fillStyle = "#129321";
			ctx.fillRect(x,y,g,-dg);
			y-=dg+db+2;
			ctx.fillStyle = "#444432";
			ctx.fillRect(x,y,b,-db);
			
			
					$('#badleg').append(
					'<ul>'+
					'<li style="color:#129321">Все хорошо</li>'+
					'<li style="color:#444432">Запрашивал помощь</li>'+
					'</ul>');
			
	});
}
	

function Registr(){
	
}

function logIn(){
	
}



var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB,
IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction,
baseName="ptsdBase",
storeGB="GoodBadAns",
storeT="TriggersTypes",
storeC="ContactsList"
	

function logerr(err){
console.log(err);
}

var db;

function connectDB(f){
var request = indexedDB.open(baseName,1);
request.onerror = logerr;
request.onsuccess = function(){
	f(request.result);
	
}
request.onupgradeneeded = function(e){
	db = e.currentTarget.result;
	
	db.createObjectStore(storeC, { autoIncrement: true });
	db.createObjectStore(storeT, { autoIncrement: true });
	db.createObjectStore(storeGB, { autoIncrement: true });
		
	connectDB(f);
}
}

function getFile(store, obj, f){
connectDB(function(db){
	var request = db.transaction([store], "readonly").objectStore(store).get(obj);
	request.onerror = logerr;
	request.onsuccess = function(){
		f(request.result ? request.result : -1);
	}
});
}

function getStorage(store, f){
connectDB(function(db){
	var rows = [],
		objectStore = db.transaction([store], "readonly").objectStore(store);

	if(objectStore.mozGetAll)
		objectStore.mozGetAll().onsuccess = function(e){
			f(e.target.result);
		};
	else
		objectStore.openCursor().onsuccess = function(e) {
			var cursor = e.target.result;
			if(cursor){
				rows.push(cursor.value);
				cursor.continue();
			}
			else {
				f(rows);
			}
		};
});
}

function setFile(store, obj){
	i=0;
connectDB(function(db){
	if (i==0){ i++;
	var request = db.transaction([store], "readwrite").objectStore(store).add(obj);
	request.onerror = logerr;
	request.onsuccess = function(){
		return request.result;
	}
	}
});
}

function delFile(store, file){
connectDB(function(db){
	var request = db.transaction([store], "readwrite").objectStore(store).delete(file);
	request.onerror = logerr;
	request.onsuccess = function(){
		console.log("File delete from DB:", file);
	}
});
}

function clearStorage(store){ 
	connectDB(function(db){
		var request = db.transaction([store], "readwrite").objectStore(store).clear();;
		request.onerror = logerr;
		request.onsuccess = function(){
			console.log("Clear");
		}
	});
}

