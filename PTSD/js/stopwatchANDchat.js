/**
 * 
 */

//STOPWATCH
var base = 60; 
var clocktimer,dateObj,dm,ds,ms; 
var readout=''; 
var h=1, m=1, tm=1,s=0,ts=0,ms=0,show=true, init=0, ii=0; 

//функция для очистки поля
function clearСlock() { 
	clearTimeout(clocktimer); 
	m=1;tm=1;s=0;ts=0;ms=0; 
	init=0;show=true;
	readout='00:00'; 
	document.getElementById('stopwatch').value=readout; 
	ii = 0; 
} 
//функция для старта секундомера
function startTIME() { 
	var cdateObj = new Date(); 
	var t = (cdateObj.getTime() - dateObj.getTime())-(s*1000); 
	if (t>999) { s++; } 
	if (s>=(m*base)) { 
		ts=0; 
		m++; 
	} else { 
		ts=parseInt((ms/100)+s); 
		if(ts>=base) { ts=ts-((m-1)*base); } 
	} 
	if (m>(h*base)) { 
		tm=1;  
	} else { 
		tm=parseInt((ms/100)+m); 
		if(tm>=base) { tm=tm-((h-1)*base); } 
	} 
	ms = Math.round(t/10); 
	if (ms>99) {ms=0;} 
	if (ms==0) {ms='00';} 
	if (ms>0&&ms<=9) { ms = '0'+ms; } 
	if (ts>0) { ds = ts; if (ts<10) { ds = '0'+ts; }} else { ds = '00'; } 
	dm=tm-1; 
	if (dm>0) { if (dm<10) { dm = '0'+dm; }} else { dm = '00'; }   
	readout = dm + ':' + ds; 
	if (show==true) { document.getElementById('stopwatch').value = readout; } 
	clocktimer = setTimeout("startTIME()",1); 
} 

//функция для паузы
function pause() { 
	if (init==0) { dateObj = new Date(); 
	startTIME(); 
	init=1; 
	} else { if(show==true) { 
	show=false; 
	} else { show=true; } } 
} 

//CHAT
function clearChat(){
	document.getElementById('chatarea').value="";
}

function addChat(){
	var strch=document.getElementById('chatin');
	document.getElementById('chatarea').value+=strch.value+'\n';
	strch.value="";
}

function changeCol(val){
	if (val=="one"){
		/*document.getElementById('chatarea').style.color="red";*/
		document.getElementById('chatarea').value+="\n";
		document.getElementById('chatarea').align="left";
	}
	else if(val=="two"){
		/*document.getElementById('chatarea').style.color="blue";*/
		document.getElementById('chatarea').value+="\n";
		document.getElementById('chatarea').align="right";
	}
}