const KEY_USERS = "users";

function saveUser(user) {
	//load the old data
	let data = readUsers();
	//merge
	data.push(user);
	//save the user in local storage
	let val = JSON.stringify(data);
	localStorage.setItem(KEY_USERS, val);
}

//load the old data
function readUsers() {
	let previousUsers = localStorage.getItem(KEY_USERS);
	if (!previousUsers) {
		//no data
		return []; //create an emoty array
	} else {
		let list = JSON.parse(previousUsers); //parse the string to string back into object
		return list; //this is an object
	}
}
function clearUsers() {
	localStorage.removeItem(KEY_USERS);
}
