let e=document.querySelector("tbody"),t=document.querySelector("#add-student-form"),n=document.querySelector("#get-students-btn"),l=0;n.addEventListener("click",e=>{a()});let s=6;function a(){fetch("http://localhost:3000/students").then(e=>e.json()).then(t=>e.innerHTML=t.map(({id:e,name:t,age:n,course:l,skills:s,email:a,isEnrolled:o})=>`<tr id="${e}">
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
              </tr>`).join(""))}t.addEventListener("submit",e=>{var n;e.preventDefault();let o=e.currentTarget.elements,r={id:s++,name:o.name.value,age:o.age.value,course:o.course.value,skills:o.skills.value,email:o.email.value,isEnrolled:o.isEnrolled.checked};null===l?fetch("http://localhost:3000/students",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(e=>e.json()).then(e=>a()):((n=l,fetch(`http://localhost:3000/students/${n}`,{method:"PUT",body:JSON.stringify(r),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(e=>e.json())).then(e=>a()),t.reset())}),e.addEventListener("click",e=>{if("BUTTON"!==e.target.nodeName)return;let n=e.target.dataset.action,s=e.target.closest("tr"),o=s.id;if("delete"===n)return void fetch(`http://localhost:3000/students/${o}`,{method:"DELETE"}).then(e=>e.json()).then(e=>a());"edit"===n&&(l=o,t.elements[0].value=s.querySelector(".name").textContent,t.elements[1].value=s.querySelector(".age").textContent,t.elements[2].value=s.querySelector(".course").textContent,t.elements[3].value=s.querySelector(".skills").textContent,t.elements[4].value=s.querySelector(".email").textContent,t.elements[5].checked="Student"===s.querySelector(".is-enrolled").textContent.trim())});
//# sourceMappingURL=js-38.531e37e7.js.map
