import{a as $,S as M,i as k}from"./assets/vendor-06b1bbdf.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function l(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=l(r);fetch(r.href,o)}})();async function I(e,t,l){const r=`https://pixabay.com/api/?${new URLSearchParams({key:"43557588-360f3c0dbe3221038cf66573a",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:l})}`;return await $.get(r)}const N=new M(".gallery a",{captions:!0,captionSelector:"img",captionsData:"alt",captionPosition:"bottom",captionDelay:250,captionType:"attr"});function O(e){let t=document.querySelector("ul.gallery-ul");const l=e.map(({webformatURL:s,largeImageURL:r,tags:o,likes:d,views:L,comments:q,downloads:E})=>`    <li class="gallery-item">
                        <div class="gallery">
                            <a class="gallery-link" href="${r}" >
                                <img class="gallery-image" src="${s}" data-source="${r}" alt="${o}" />
                            </a>
                        </div>    
                        <div class="gallery-props">
                            <div class="gallery-props-item">
                                Likes
                                    <div class="gallery-props-number">${d}</div>
                            </div>
                            <div class="gallery-props-item">
                                Views
                                    <div class="gallery-props-number">${L}</div>
                            </div>
                            <div class="gallery-props-item">
                                Comments
                                    <div class="gallery-props-number">${q}</div>
                            </div>
                            <div class="gallery-props-item">
                                Downloads
                                    <div class="gallery-props-number">${E}</div>
                            </div>
                        </div>
                    </li>`).join("");t.insertAdjacentHTML("beforeend",l),N.refresh()}const f=document.querySelector(".search-block-field"),x=document.querySelector(".search-block-button"),n=document.querySelector(".load-more-button"),u=document.querySelector(".loader"),h=document.querySelector(".load-more-loader");let B=document.querySelector("ul.gallery-ul"),y=document.querySelector(".load-more-search-end"),c="",v="",S=15,i,g,b;a(n);a(y);f.addEventListener("input",()=>{c=f.value});x.addEventListener("click",T);n.addEventListener("click",C);async function T(){i=1,B.innerHTML="",m(u),a(n),await D()}async function C(){i+=1,m(h),a(n),await R()}async function D(){if(!c.trim()){a(y),p("Search field cannot be empty"),a(u);return}v=c,a(y);try{const t=await w(c,i);P(t)}catch(t){console.log(t),p("Sorry, an error occurred. Please, check your connection or try again later.")}a(u),f.value="";const e=document.querySelector("li.gallery-item:first-child");e&&(b=Math.ceil(e.getBoundingClientRect().height*2))}async function R(){a(y);try{const e=await w(v,i);P(e)}catch(e){console.log(e),p("Sorry, an error occurred. Please, check your connection or try again later.")}a(h)}async function w(e,t){return await(await I(e,t,S)).data}function P(e){if(e.total===0){p("Sorry, there are no images matching your search query. Please try again!"),a(u),c="";return}O(e.hits.flat()),a(u),c="",g=Math.ceil(e.total/S),console.log("handleSearchResults() >> pageNum: ",i,"totalPages: ",g),z(),i<g?m(n):(a(n),m(y))}function a(e){e.style.display="none"}function m(e){e.style.display="block"}function p(e){k.error({title:"Error",message:e})}function z(){window.scrollBy({top:b,left:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
