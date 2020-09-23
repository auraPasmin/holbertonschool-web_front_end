/*
 "Welcome <fullname>!"
*/

function welcome(firstname, lastname) {
	let fullName = firstName + " " + lastName;

	function displayFullName() {
		alert("Welcome " + fullName + "!");
	}

	displayFullName();
}
