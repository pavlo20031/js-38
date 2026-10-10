export function addStudent(e) {
  const options = {
    method: "POST",
    body: JSON.stringify(e),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  return fetch("http://localhost:3000/students", options).then((res)=>res.json());
}
