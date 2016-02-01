/**
 * L'utilisateur classique et toutes ses informations disponibles
 * @param id L'id de la session de l'utilisateur
 * @param right Les droits de l'utilisateur enregistre
 */
function userPrototype(id,right,name) {
	this.id = id;
	this.right = right;
	this.name = name;
	
	/**
	 * Permet de creer l'utilisateur
	 */
	this.setUser = function(id,right,name) {
		this.id = id;
		this.right = right;
		this.name = name;		
	}
	
	/**
	 * Permet de reset l'utilisateur
	 */
	this.reset = function() {
		this.id = "";
		this.right = "";
		this.name = "";
	}
}