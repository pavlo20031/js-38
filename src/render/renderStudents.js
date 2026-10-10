export function renderStudents(students) {
  const createMarkup = students
    .map(({ id, name, age, course, skills, email, isEnrolled }) => {
      return `<tr id="${id}">
                <th>${id}</th>
                <th>${name}</th>
                <th>${age}</th>
                <th>${course}</th>
                <th>${skills}</th>
                <th>${email}</th>
                <th>${isEnrolled ? "Так" : "Ні"}</th>
                <th>Немає</th>
              </tr>`;
    })
    .join("");

  return createMarkup;
}
