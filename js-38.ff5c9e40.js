let e=document.querySelector("tbody"),t=document.querySelector("#add-student-form"),n=document.querySelector("#get-students-btn"),l=null;function s(){fetch("http://localhost:3000/students").then(e=>e.json()).then(t=>e.innerHTML=t.map(({id:e,name:t,age:n,course:l,skills:s,email:a,isEnrolled:o})=>`<tr id="${e}">
                <th>${e}</th>
                <th class="name">${t}</th>
                <th class="age">${n}</th>
                <th class="course">${l}</th>
                <th class="skills">${s}</th>
                <th class="email">${a}</th>
                <th class="is-enrolled">${o?"Student":"Isn't student"}</th>
                <th>
                <button data-action="delete" class="delete" type="button">delete</button>
                <button data-action="edit" class="update" type="button">update</button>
                </th>
              </tr>`).join(""))}n.addEventListener("click",e=>{s()}),t.addEventListener("submit",e=>{var n;e.preventDefault();let a=e.currentTarget.elements,o={name:a.name.value,age:a.age.value,course:a.course.value,skills:a.skills.value,email:a.email.value,isEnrolled:a.isEnrolled.checked};if(null===l){fetch("http://localhost:3000/students",{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(e=>e.json()).then(e=>s()),t.reset();return}(n=l,fetch(`http://localhost:3000/students/${n}`,{method:"PUT",body:JSON.stringify(o),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(e=>e.json())).then(e=>s()),t.reset(),l=null}),e.addEventListener("click",e=>{if("BUTTON"!==e.target.nodeName)return;let n=e.target.dataset.action,a=e.target.closest("tr"),o=a.id;if("delete"===n)return void fetch(`http://localhost:3000/students/${o}`,{method:"DELETE"}).then(e=>e.json()).then(e=>s());"edit"===n&&(l=o,t.elements[0].value=a.querySelector(".name").textContent,t.elements[1].value=a.querySelector(".age").textContent,t.elements[2].value=a.querySelector(".course").textContent,t.elements[3].value=a.querySelector(".skills").textContent,t.elements[4].value=a.querySelector(".email").textContent,t.elements[5].checked="Student"===a.querySelector(".is-enrolled").textContent.trim())});
//# sourceMappingURL=js-38.ff5c9e40.js.map
