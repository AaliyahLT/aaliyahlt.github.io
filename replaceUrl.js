var initHostname = location.hostname;
if (initHostname = 'bigl.ua') {
	reloadPageFromBiglToProm();
}
else { 
	if (initHostname = 'prom.ua') {
		reloadPageFromPromToBigl(); 
	}
	else {
		reloadPageFromWebToProm();
	}
}


function reloadPageFromBiglToProm() {	
	var initPath = location.pathname;
	if (initPath.substr(1,2) != 'p') {	
		location.replace('http://prom.ua/c' + initPath.substr(2) + '.html');		
	}
	else {
		location.replace('http://prom.ua/c' + initPath.substr(1) + '.html');		
	}	
}

function reloadPageFromPromToBigl() {
	var initPath = location.pathname;
	if (initPath.substr(1,2) != 'p') { 		
		location.replace('http://bigl.ua/s' + initialPath.substr(2,initPath.search(".html")-1));		
	}
	else {	
		location.replace('http://bigl.ua/' + initialPath.substr(1,initPath.search(".html")-1));		
	}
	
}

function reloadPageFromWebToProm() {
	var initPath = location.pathname;
	if (initPath.substr(1,2) != 'p') {	
		location.replace('http://prom.ua/c' + initPath.substr(2) + '.html');		
	}
	else {
		location.replace('http://prom.ua/c' + initPath.substr(1) + '.html');		
	}
}
