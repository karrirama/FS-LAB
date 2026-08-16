// Student class
class Student {

    constructor(name, rollNo, department, cgpa) {
        this.name = name;
        this.rollNo = rollNo;
        this.department = department;
        this.cgpa = cgpa;
    }
}


// Select HTML elements using DOM
const nameInput = document.getElementById("name");
const rollNoInput = document.getElementById("rollNo");
const departmentInput = document.getElementById("department");
const cgpaInput = document.getElementById("cgpa");

const displayBtn = document.getElementById("displayBtn");
const profileContainer = document.getElementById("profileContainer");


// Add click event to button
displayBtn.addEventListener("click", function () {

    // Get values entered by the user
    const name = nameInput.value.trim();
    const rollNo = rollNoInput.value.trim();
    const department = departmentInput.value.trim();
    const cgpa = cgpaInput.value.trim();


    // Check whether all fields are filled
    if (name === "" || rollNo === "" || department === "" || cgpa === "") {
        alert("Please fill all the fields.");
        return;
    }


    // Create Student object
    const student = new Student(
        name,
        rollNo,
        department,
        cgpa
    );


    // Clear previous profile
    profileContainer.innerHTML = "";


    // Create profile card dynamically
    const profileCard = document.createElement("div");
    profileCard.className = "profile-card";


    // Create heading
    const heading = document.createElement("h2");
    heading.textContent = "Student Profile";


    // Create student details
    const namePara = document.createElement("p");
    namePara.textContent = "Name : " + student.name;

    const rollPara = document.createElement("p");
    rollPara.textContent = "Roll No : " + student.rollNo;

    const departmentPara = document.createElement("p");
    departmentPara.textContent = "Department : " + student.department;

    const cgpaPara = document.createElement("p");
    cgpaPara.textContent = "CGPA : " + student.cgpa;


    // Add elements to profile card
    profileCard.appendChild(heading);
    profileCard.appendChild(namePara);
    profileCard.appendChild(rollPara);
    profileCard.appendChild(departmentPara);
    profileCard.appendChild(cgpaPara);


    // Add profile card to webpage
    profileContainer.appendChild(profileCard);
});