function displayUsers(users) {
	for (var i = 0; i < users.length; i++) {
		//get each user
		let user = users[i];
		//display the user
		let syntax = `
<tr>
<td>${user.email}</td>
<td>${user.firstName}</td>
<td>${user.lastName}</td>
<td>${user.age}</td>
<td>${user.address}</td>
<td>${user.phone}</td>
<td>${user.payment}</td>
<td style="background-color:${user.color};width:50px;"></td>
</tr>
        `;
		//append the user to the DOM
		$("#tableUsers").append(syntax);
	}
}

function init() {
	console.log("Listing users");
	var users = readUsers(); //on store manager
	displayUsers(users);
	$("#btnClear").click(function () {
		clearUsers();
		location.reload();
	});
}
window.onload = init;
