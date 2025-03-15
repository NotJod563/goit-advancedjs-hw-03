import{a as m,S as h,i as c}from"./assets/vendor-Sa4a0LJu.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const y="https://pixabay.com/api/",g="49358142-402c973293bc6ed019a77a93c";async function b(o){const r={key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"};return(await m.get(y,{params:r})).data.hits}let a;function L(o,r){const n=o.map(({webformatURL:s,largeImageURL:e,tags:t,likes:i,views:d,comments:f,downloads:p})=>`
    <li class="gallery-item">
      <a href="${e}">
        <img src="${s}" alt="${t}" />
      </a>
      <div class="info">
        <p><b>Likes</b> ${i}</p>
        <p><b>Views</b> ${d}</p>
        <p><b>Comments</b> ${f}</p>
        <p><b>Downloads</b> ${p}</p>
      </div>
    </li>`).join("");r.insertAdjacentHTML("beforeend",n),a?a.refresh():a=new h(".gallery a",{captionsData:"alt",captionDelay:250})}function S(o){o.innerHTML=""}const q=document.querySelector(".search-form"),v=document.querySelector("#search-input"),l=document.querySelector(".gallery"),u=document.querySelector(".loader");q.addEventListener("submit",w);function w(o){o.preventDefault();const r=v.value.trim();r&&(S(l),P(),b(r).then(n=>{if(n.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(n,l)}).catch(()=>{c.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally($))}function P(){u.classList.remove("hidden")}function $(){u.classList.add("hidden")}
//# sourceMappingURL=index.js.map
