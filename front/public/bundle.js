(()=>{var e={989:e=>{const t=document.querySelector("#cardContainer");e.exports=e=>{e.forEach((e=>{const n=document.createElement("img");n.classList.add("poster"),n.src=e.poster;const s=document.createElement("a");s.classList.add("title"),s.href="",s.innerHTML=e.title;const r=document.createElement("p");r.classList.add("year"),r.innerHTML=e.year;const a=document.createElement("p");a.classList.add("duration"),a.innerHTML=e.duration;const c=document.createElement("div");c.classList.add("card"),c.append(n,s,a,r),t.appendChild(c)}))}}},t={};function n(s){var r=t[s];if(void 0!==r)return r.exports;var a=t[s]={exports:{}};return e[s](a,a.exports,n),a.exports}(()=>{const e=n(989);$.get("https://students-api.2.us-1.fl0.io/movies",(t=>{e(t)}))})()})();