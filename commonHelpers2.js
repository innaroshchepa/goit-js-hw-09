import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const l="feedback-form-state",a=document.querySelector(".feedback-form");let s={};function m(){const e={email:a.email.value.trim(),message:a.message.value.trim()};localStorage.setItem(l,JSON.stringify(e))}a.addEventListener("input",m);const r=localStorage.getItem(l);if(r){const e=JSON.parse(r);a.email.value=e.email,a.message.value=e.message}a.addEventListener("submit",e=>{const t=a.elements.email.value,o=a.elements.message.value;e.preventDefault(),t&&o?(console.log({email:t,message:o}),localStorage.removeItem("feedback-form-state"),a.reset()):alert("All fields must be filled in")});try{const e=localStorage.getItem(l);if(e){s=JSON.parse(e);for(let t in s)a.elements[t].value=s[t]}}catch{console.error("PARSE ERROR")}
//# sourceMappingURL=commonHelpers2.js.map
