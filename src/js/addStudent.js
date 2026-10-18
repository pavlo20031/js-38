export async function addStudent(e) {
  const options = {
    method: "POST",
    body: JSON.stringify(e),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  try {
    const res = await fetch("http://localhost:3000/students", options);
    if (!res.ok) {
      throw new Error("Error");
    }
    const data = await res.json();
    return data
  } catch (error) {
    console.log(error);
    
  }

}
