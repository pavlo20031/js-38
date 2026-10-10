let e=document.querySelector("tbody"),t=document.querySelector("#add-student-form");document.querySelector("#get-students-btn").addEventListener("click",e=>{l()});let n=6;function l(){fetch("http://localhost:3000/students").then(e=>e.json()).then(t=>e.innerHTML=t.map(({id:e,name:t,age:n,course:l,skills:s,email:h,isEnrolled:o})=>`<tr id="${e}">
                <th>${e}</th>
                <th>${t}</th>
                <th>${n}</th>
                <th>${l}</th>
                <th>${s}</th>
                <th>${h}</th>
                <th>${o?"Так":"Ні"}</th>
                <th>Немає</th>
              </tr>`).join(""))}t.addEventListener("submit",e=>{e.preventDefault();let s=e.currentTarget.elements;fetch("http://localhost:3000/students",{method:"POST",body:JSON.stringify({id:n++,name:s.name.value,age:s.age.value,course:s.course.value,skills:s.skills.value,email:s.email.value,isEnrolled:s.isEnrolled.checked}),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(e=>e.json()).then(e=>l()),t.reset()});
//# sourceMappingURL=js-38.5f0a01f0.js.map
