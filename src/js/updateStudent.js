export async function updateStudent(e, id) {
   const options = {
    method: "PUT",
    body: JSON.stringify(e),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };

    try {
    const res = await fetch(`http://localhost:3000/students/${id}`, options)
    if (!res.ok) {
      throw new Error("Error");
    }
    const data = await res.json();
    return data
  } catch (error) {
    console.log(error);
  }
}
