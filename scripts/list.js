function displayUsers() {
	for (var i = 0; i < users.length; i++) {
		//get each user
		let user = users[i];
		//display the user
		let syntax = `
<tr>
<td>${user.email}</td>
</tr>
        `;
		//append the user to the DOM
		$("#tableUsers").append(syntax);
	}
}

function init() {
	console.log("Listing users");
	var users = readUsers; //on store manager
	displayUsers(users);
}
window.onload = init;
