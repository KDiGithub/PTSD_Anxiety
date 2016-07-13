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
	
function outcanvas(){
	var tr = document.getElementById("cantrig");
	var ctx = tr.getContext("2d");
	/*ctx.clearRect(0, 0, tr.width, tr.height);*/
	
	var x0=0, y0=200;
	var p=0,s=0,i=0,sm=0,t=0,h=0,d=0;
	
	getStorage(storeT, function(res){
			for(var field in res){
				if(res[field].place==true) p+=10;
				if(res[field].sound==true) s+=10;
				if(res[field].image==true) i+=10;
				if(res[field].smell==true) sm+=10;
				if(res[field].touch==true) t+=10;
				if(res[field].human==true) h+=10;
				d++;
			}
	});
	
	x=x0;
	ctx.fillStyle = "#2222222";
	ctx.fillRect(x0,y0,d,-p);
	x+=d
	ctx.fillStyle = "#333333";
	ctx.fillRect(x0,y0,d,-s);
	x+=d
	ctx.fillStyle = "#444444";
	ctx.fillRect(x0,y0,d,-i);
	x+=d
	ctx.fillStyle = "#555555";
	ctx.fillRect(x0,y0,d,-sm);
	x+=d
	ctx.fillStyle = "#666666";
	ctx.fillRect(x0,y0,d,-t);
	x+=d
	ctx.fillStyle = "#777777";
	ctx.fillRect(x0,y0,d,-h);

}

function Registr(){
	
}

function logIn(){
	
}



var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB,
IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction,
baseName="ptsdBase2",
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

