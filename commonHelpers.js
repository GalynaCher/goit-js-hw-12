import{a as E,S as I,i as g}from"./assets/vendor-06b1bbdf.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();async function M(e,r,s){const t=`https://pixabay.com/api/?${new URLSearchParams({key:"43557588-360f3c0dbe3221038cf66573a",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:s})}`;return await E.get(t)}const k=new I(".gallery a",{captions:!0,captionSelector:"img",captionsData:"alt",captionPosition:"bottom",captionDelay:250,captionType:"attr"});function N(e){let r=document.querySelector("ul.gallery-ul");const s=e.map(({webformatURL:l,largeImageURL:t,tags:o,likes:i,views:L,comments:q,downloads:$})=>`    <li class="gallery-item">
                        <div class="gallery">
                            <a class="gallery-link" href="${t}" >
                                <img class="gallery-image" src="${l}" data-source="${t}" alt="${o}" />
                            </a>
                        </div>    
                        <div class="gallery-props">
                            <div class="gallery-props-item">
                                Likes
                                    <div class="gallery-props-number">${i}</div>
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
                                    <div class="gallery-props-number">${$}</div>
                            </div>
                        </div>
                    </li>`).join("");r.insertAdjacentHTML("beforeend",s),k.refresh()}const p=document.querySelector(".search-block-field"),O=document.querySelector(".search-block-button"),u=document.querySelector(".load-more-button"),d=document.querySelector(".loader"),h=document.querySelector(".load-more-loader");let T=document.querySelector("ul.gallery-ul"),n="",v="",b=15,c,m,S;a(u);p.addEventListener("input",()=>{n=p.value});O.addEventListener("click",x);u.addEventListener("click",B);async function x(){c=1,T.innerHTML="",f(d),a(u),await z()}async function B(){c+=1,f(h),a(u),await C()}async function z(){if(!n.trim()){y("Search field cannot be empty"),a(d);return}v=n;try{const r=await w(n,c);P(r)}catch(r){console.log(r),y("Sorry, an error occurred. Please, check your connection or try again later.")}a(d),p.value="";const e=document.querySelector("li.gallery-item:first-child");e&&(S=Math.ceil(e.getBoundingClientRect().height*2))}async function C(){try{const e=await w(v,c);P(e)}catch(e){console.log(e),y("Sorry, an error occurred. Please, check your connection or try again later.")}a(h)}async function w(e,r){return await(await M(e,r,b)).data}function P(e){if(e.total===0){y("Sorry, there are no images matching your search query. Please try again!"),a(d),n="";return}N(e.hits.flat()),a(d),n="",m=Math.ceil(e.total/b),console.log("handleSearchResults() >> pageNum: ",c,"totalPages: ",m),R(),c<m?f(u):D("We're sorry, but you've reached the end of search results.")}function a(e){e.style.display="none"}function f(e){e.style.display="block"}function y(e){g.error({title:"Error",message:e})}function D(e){g.info({title:"Info",message:e})}function R(){window.scrollBy({top:S,left:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
