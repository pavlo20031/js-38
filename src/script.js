import { getStudents } from "./api/fetchStudents";
import { renderStudents } from "./render/renderStudents";
import { addStudent } from "./js/addStudent";
import { updateStudent } from "./js/updateStudent";
import { deleteStudent } from "./js/deleteStudent";

const tbodyRef = document.querySelector("tbody");
const formRef = document.querySelector("#add-student-form");
const btnRef = document.querySelector("#get-students-btn");

btnRef.addEventListener("click", (evt) => {
  renderList();
});

let lastId = 6;

formRef.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const element = evt.currentTarget.elements;

  const studentsData = {
    id: lastId++,
    name: element.name.value,
    age: element.age.value,
    course: element.course.value,
    skills: element.skills.value,
    email: element.email.value,
    isEnrolled: element.isEnrolled.checked,
  };

  addStudent(studentsData).then((res) => renderList());
  formRef.reset();
});
function renderList() {
  getStudents().then((res) => (tbodyRef.innerHTML = renderStudents(res)));
}
