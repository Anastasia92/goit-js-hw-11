import{i as c,a as m,S as f}from"./assets/vendor-C0lvodrG.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();function n(o){c.error({...u,message:o,color:"#ef4040",icon:"icon-error"})}const u={position:"topRight",titleColor:"#fff",titleSize:"16px",titleWeight:"700",titleLineHeight:"1.5",messageColor:"#fff",messageSize:"16px",messageWeight:"400",messageLineHeight:"1.5",iconColor:"#fff",theme:"dark",maxWidth:"432px"},d="53619422-7962538bda78642c6c91a7cf7",g="https://pixabay.com/api/",h=9;function p(o){return m.get(g,y(o)).then(r=>{const e=r.data.hits;return!e||!e.length?(n("Sorry, there are no images matching your search query. Please try again!"),[]):e}).catch(r=>(n(r.message),[]))}function y(o){return{params:{key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:h}}}const i={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},L=new f(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){const r=o.map(e=>`<li class="gallery-item">
          <a class="gallery-link" href="${e.largeImageURL}">
            <img src="${e.webformatURL}" alt="${e.tags}" class="gallery-img">
          </a>
          <ul class="img-footer">
            <li class="img-footer-item">
              <h3 class="meta-header">Likes</h3>
              <p class="meta-info">${e.likes}</p>
            </li>
            <li class="img-footer-item">
              <h3 class="meta-header">Views</h3>
              <p class="meta-info">${e.views}</p>
            </li>
            <li class="img-footer-item">
              <h3 class="meta-header">Comments</h3>
              <p class="meta-info">${e.comments}</p>
            </li>
            <li class="img-footer-item">
              <h3 class="meta-header">Downloads</h3>
              <p class="meta-info">${e.downloads}</p>
            </li>
           </ul>
       </li>`).join("");i.gallery.innerHTML=r,L.refresh()}function S(){i.gallery.innerHTML=""}function v(){i.loader.classList.add("is-visible")}function w(){i.loader.classList.remove("is-visible")}i.form.addEventListener("submit",o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();r&&(S(),v(),p(r).then(e=>b(e)).finally(w))});
//# sourceMappingURL=index.js.map
