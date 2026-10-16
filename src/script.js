import { getStudents } from "./api/fetchStudents";
import { renderStudents } from "./render/renderStudents";
import { addStudent } from "./js/addStudent";
import { updateStudent } from "./js/updateStudent";
import { deleteStudent } from "./js/deleteStudent";

const tbodyRef = document.querySelector("tbody");
const formRef = document.querySelector("#add-student-form");
const btnRef = document.querySelector("#get-students-btn");

let currentId = null;

btnRef.addEventListener("click", (evt) => {
  renderList();
});

formRef.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const element = evt.currentTarget.elements;

  const studentsData = {
    name: element.name.value,
    age: element.age.value,
    course: element.course.value,
    skills: element.skills.value,
    email: element.email.value,
    isEnrolled: element.isEnrolled.checked,
  };
  if (currentId === null) {
      addStudent(studentsData).then((res) => renderList());
    return
  }
  updateStudent(studentsData, currentId).then((res) => renderList());
formRef.reset();
});
function renderList() {
  getStudents().then((res) => (tbodyRef.innerHTML = renderStudents(res)));
}

tbodyRef.addEventListener("click", (evt) => {
  if (evt.target.nodeName !== 'BUTTON') {
    return
  }
  const action = evt.target.dataset.action;
  const tr = evt.target.closest("tr");
  const id = tr.id
  if (action === "delete") {
    deleteStudent(id).then((res) => renderList());
    return
  }
  if (action === "edit") {
    currentId = id
    formRef.elements[0].value = tr.querySelector(".name").textContent;
    formRef.elements[1].value = tr.querySelector(".age").textContent;
    formRef.elements[2].value = tr.querySelector(".course").textContent;
    formRef.elements[3].value = tr.querySelector(".skills").textContent;
    formRef.elements[4].value = tr.querySelector(".email").textContent;
    formRef.elements[5].checked = tr.querySelector(".is-enrolled").textContent.trim() === "Student";




    
  }
});