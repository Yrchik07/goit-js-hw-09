import"./assets/modulepreload-polyfill-3cfb730f.js";const r=document.querySelector(".feedback-form"),t=r.querySelector("input"),a=r.querySelector("textarea");t.addEventListener("input",n);a.addEventListener("input",n);r.addEventListener("submit",m);function n(){const e={email:t.value.trim(),message:a.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(e))}window.addEventListener("DOMContentLoaded",()=>{const e=localStorage.getItem("feedback-form-state");if(e){const o=JSON.parse(e);t.value=o.email,a.value=o.message}});function m(e){e.preventDefault();const o={email:t.value.trim(),message:a.value.trim()};localStorage.removeItem("feedback-form-state"),t.value="",a.value="",console.log(o)}
//# sourceMappingURL=commonHelpers2.js.map