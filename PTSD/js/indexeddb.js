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
	i++;
	
	$("#contactname").val('');
	$("#phonenum").val('');

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
	db = e.target.result;
	
	var storeGBs= db.createObjectStore(storeGB, { autoIncrement: true });
	var storeTs= db.createObjectStore(storeT, { autoIncrement: true });
	var storeCs= db.createObjectStore(storeC, { autoIncrement: true });
	
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
connectDB(function(db){
	var request = db.transaction([store], "readwrite").objectStore(store).add(obj);
	request.onerror = logerr;
	request.onsuccess = function(){
		return request.result;
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

