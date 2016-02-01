/**
 * Script qui s'execute lorsque l'on appuie sur login
 */
$("#login").click(function() {
	writeCookie('sessionID', "azeazeaze", 3);
	user.setUser("azeazeaze","",$("#usr").val());
	switchBetweenConnectedAndDisconnected();
});