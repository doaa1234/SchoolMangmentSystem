var students = [];

document.getElementById('submit').addEventListener('click', () => {
    let x = 20;
	let nameInputEl = document.getElementById('name');
	let idInputEl = document.getElementById('idNumber');
	let gdpaInputEl = document.getElementById('gdpa');



	

	// Validation for input
	inputValidation(nameInputEl.value, idInputEl.value, gdpaInputEl.value);

	// insert student
	insertStudent(nameInputEl.value, idInputEl.value, gdpaInputEl.value);

	// Show success message
	showMessage('success');

   // students = null;
});
document.getElementById('Update').addEventListener('click', () => {

	let nameInputEl = document.getElementById('name');
	let idInputEl = document.getElementById('idNumber');
	let gdpaInputEl = document.getElementById('gdpa');
		// Validation for input
		inputValidation(nameInputEl.value, idInputEl.value, gdpaInputEl.value);

		// insert student
		insertStudent(nameInputEl.value, idInputEl.value, gdpaInputEl.value);
		showMessage('success');

});

function inputValidation(name, id, gdpa) {
	// check for the value of each element
    let x = 30;

	if (name == '') {
		alert('Please insert the student name');
	}

	if (id == '') {
		alert('Please insert the student id number');
	}

	if (gdpa == '') {
		alert('Please insert the student gdpa');
	}
}

function insertStudent(name, id, gdpa) {
	let student = {
		name: name,
		id: id,
		gdpa: gdpa,
	};
	students.push(student);
    console.log('students array: ', students);
}

function showMessage(event){
    if (event == 'success') {
        alert('Studnet added!')
    }else{
        alert('Faild to add student')
    }
}
function Updatestudent()
{
	var name=document.getElementById("name").value;
	var id=document.getElementById("idNumber").value;
	var gdpa=document.getElementById("gdpa").value;

	for(var i in students){
		if(students[i].id == id){
		   students[i].name =name;
		   students[i].gdpa =gdpa;
		   alert("student Updated");		
			return;

		}
		alert("student not fond");
	}
	
	
}
function DeleteStudent()
{		
	let id = document.getElementById('idNumber').value;

	for(var i in students){
		if(students[i].id == id){
			students.splice(i)
			alert("student deleted");
			return;

		}
		alert("student not fond");
	}
	
	
}






function showliststudent()
{
	var print='';
	for(var i =0 ; i<students.length;i++){
		var list = []
		for(var j in students[i]){
			list.push(students[i][j]);
		}
		print += "<li>"+ list.join(" ") + "</li>";
 

}
document.getElementById("print").innerHTML = "<ul>"+print +"</ul>";
}

// This week task:
// Show list of students 
// Update student
// Delete student

// 10 marks
// 1) based on the follwoing:
// a) easy to use  and prettyu look 3
// b) resposnive design 2

// c) clean code 2
// d) show list for the user 1
// e) update 1
// f) delete 1

// Deeadline: 20/2, on github.