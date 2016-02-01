var user = new userPrototype(readCookie('sessionID'),"azeaze","Latsuj");

/**
console.log(localStorage.getItem("lastname"));

if (typeof(Storage) !== "undefined") {
    // Store
    //localStorage.setItem("lastname", "Smith");
    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem("lastname");
    
    // Clear localStorage
    localStorage.clear();
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}
**/

function writeCookie(name,value,days) {
    var date, expires;
    if (days) {
        date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        expires = "; expires=" + date.toGMTString();
            }else{
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var i, c, ca, nameEQ = name + "=";
    ca = document.cookie.split(';');
    for(i=0;i < ca.length;i++) {
        c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length,c.length);
        }
    }
    return '';
}

function deleteCookie(name) {
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;";
};

/**
 * Execute le changement lorsque l'utilisateur est connecte ou deconnecte
 */
function switchBetweenConnectedAndDisconnected() {
	console.log("switch : "+" "+user.id);
	if(user.id!=null && user.id!="") {
		console.log(readCookie('sessionID'));
		$( "#connected-or-disconnected" ).load( "pages/connected.html",function() {
			$("#name").html(user.name);
		});
	} else {
		$( "#connected-or-disconnected" ).load( "pages/disconnected.html");
	}
}

switchBetweenConnectedAndDisconnected();