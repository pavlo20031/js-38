async function t(){try{let t=await fetch("http://localhost:3000/students");if(200!==t.status)throw Error("Error");return await t.json()}catch(t){console.log(t)}}async function e(t){let e={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=UTF-8"}};try{let t=await fetch("http://localhost:3000/students",e);if(!t.ok)throw Error("Error");return await t.json()}catch(t){console.log(t)}}async function r(t,e){let r={method:"PUT",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=UTF-8"}};try{let t=await fetch(`http://localhost:3000/students/${e}`,r);if(!t.ok)throw Error("Error");return await t.json()}catch(t){console.log(t)}}async function n(t){try{let e=await fetch(`http://localhost:3000/students/${t}`,{method:"DELETE"});if(!e.ok)throw Error("Error");return await e.json()}catch(t){console.log(t)}}let o=document.querySelector("tbody"),a=document.querySelector("#add-student-form"),l=document.querySelector("#get-students-btn"),s=null;async function c(){try{o.innerHTML=(await t()).map(({id:t,name:e,age:r,course:n,skills:o,email:a,isEnrolled:l})=>`<tr id="${t}">
                <th>${t}</th>
                <th class="name">${e}</th>
                <th class="age">${r}</th>
                <th class="course">${n}</th>
                <th class="skills">${o}</th>
                <th class="email">${a}</th>
                <th class="is-enrolled">${l?"Student":"Isn't student"}</th>
                <th>
                <button data-action="delete" class="delete" type="button">delete</button>
                <button data-action="edit" class="update" type="button">update</button>
                </th>
              </tr>`).join("")}catch(t){console.log(t)}}function i(){c(),a.reset()}l.addEventListener("click",t=>{c()}),a.addEventListener("submit",async t=>{t.preventDefault();let n=t.currentTarget.elements,o={name:n.name.value,age:n.age.value,course:n.course.value,skills:n.skills.value,email:n.email.value,isEnrolled:n.isEnrolled.checked};if(null===s){await e(o),i();return}await r(o,s),i(),s=null}),o.addEventListener("click",async t=>{if("BUTTON"!==t.target.nodeName)return;let e=t.target.dataset.action,r=t.target.closest("tr"),o=r.id;if("delete"===e){await n(o),c();return}"edit"===e&&(s=o,a.elements[0].value=r.querySelector(".name").textContent,a.elements[1].value=r.querySelector(".age").textContent,a.elements[2].value=r.querySelector(".course").textContent,a.elements[3].value=r.querySelector(".skills").textContent,a.elements[4].value=r.querySelector(".email").textContent,a.elements[5].checked="Student"===r.querySelector(".is-enrolled").textContent.trim())});
//# sourceMappingURL=js-38.8b88ac42.js.map
