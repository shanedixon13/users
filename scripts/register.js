//create user object(constructor)
class User {
	constructor(
		email,
		password,
		first,
		last,
		age,
		address,
		phone,
		payment,
		color
	) {
		this.email = email;
		this.password = password;
		this.firstName = first;
		this.lastName = last;
		this.age = age;
		this.address = address;
		this.phone = phone;
		this.payment = payment;
		this.color = color;
	}
}
//create the register function
function registerUser() {
	let email = $("#txtEmail").val();
	let password = $("#txtPassword").val();
	let firstName = $("#txtFirst").val();
	let lastName = $("#txtLast").val();
	let age = $("#txtAge").val();
	let address = $("#txtAddress").val();
	let phone = $("#txtPhone").val();
	let payment = $("#txtPayment").val();
	let color = $("#txtColor").val();
	let user = new User(
		email,
		password,
		firstName,
		lastName,
		age,
		address,
		phone,
		payment,
		color
	);
	console.log(user);
	saveUser(user); //this function is on the storeManager
	clear(); 
}

function clear() {
	$("#txtEmail").val("");
	$("#txtPassword").val("");
	$("#txtFirst").val("");
	$("#txtLast").val("");
	$("#txtAge").val("");
	$("#txtAddress").val("");
	$("#txtPhone").val("");
	$("#txtPayment").val("");
	$("#txtColor").val("");
}
//console log the user
function init() {
	console.log("init function");
	$("#btn-save").click(registerUser);
}
window.onload = init;

//$('txtEmail').val(" ")
