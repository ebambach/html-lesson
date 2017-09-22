$().ready(function() {

	var Students = [
		{FirstName:"Greg", LastName:"Olsen", SAT:1200, GPA: 3.2},
		{FirstName:"Bob", LastName:"Evans", SAT:1200, GPA: 3.2},
		{FirstName:"Sue Ann", LastName:"Prewitt", SAT:1200, GPA: 3.2},	
		{FirstName:"Eric", LastName:"Smith", SAT:1200, GPA: 3.2},
		{FirstName:"Eric", LastName:"Bambach", SAT:1200, GPA: 3.2}
	]

//jquery version of getStudents, done by identifying the button as "getStudents," calling that Id,
//executing the function, which empties the tbody with the Id of "Students," and then adds in the
//list of students
	$("#getStudents").click(function(){
		$("#Students").empty();
	for (var student of Students){
 		var aStudent = "<tr>";

 		aStudent += "<td>" + student.FirstName + " " + student.LastName + "</td>";
 		aStudent += "<td>" + student.SAT + "</td>";
 		aStudent += "<td>" + student.GPA + "</td>";

 		aStudent += "</tr>";

 		//console.log(aStudent);
 		$("#Students").append(aStudent);
 	}
	});

	$("#add").click(function(){
		var firstName = $("#FirstName").val();
		var lastName = $("#LastName").val();
		var sat = $("#SAT").val();
		var gpa = $("#GPA").val();
		var student = {FirstName: firstName, LastName: lastName, SAT: sat, GPA: gpa};
		Students.push(student);
	});

//javascript version of getStudents() function
// function getStudents(){
// 	Ctrl = document.getElementById("Students");
// 	Ctrl.innerHTML = "";

// 	for (var student of Students){
// 		var aStudent = "<tr>";

// 		aStudent += "<td>" + student.FirstName + " " + student.LastName + "</td>";
// 		aStudent += "<td>" + student.SAT + "</td>";
// 		aStudent += "<td>" + student.GPA + "</td>";

// 		aStudent += "</tr>";

// 		Ctrl.innerHTML += aStudent;
// 		// console.log(aStudent);
// 	}
// }
});