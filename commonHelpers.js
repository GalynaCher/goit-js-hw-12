import{a as $,S as E,i as M}from"./assets/vendor-06b1bbdf.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();async function I(e,r,s){const t=`https://pixabay.com/api/?${new URLSearchParams({key:"43557588-360f3c0dbe3221038cf66573a",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:s})}`;return await $.get(t)}const N=new E(".gallery a",{captions:!0,captionSelector:"img",captionsData:"alt",captionPosition:"bottom",captionDelay:250,captionType:"attr"});function O(e){let r=document.querySelector("ul.gallery-ul");const s=e.map(({webformatURL:l,largeImageURL:t,tags:o,likes:c,views:P,comments:L,downloads:q})=>`    <li class="gallery-item">
                        <div class="gallery">
                            <a class="gallery-link" href="${t}" >
                                <img class="gallery-image" src="${l}" data-source="${t}" alt="${o}" />
                            </a>
                        </div>    
                        <div class="gallery-props">
                            <div class="gallery-props-item">
                                Likes
                                    <div class="gallery-props-number">${c}</div>
                            </div>
                            <div class="gallery-props-item">
                                Views
                                    <div class="gallery-props-number">${P}</div>
                            </div>
                            <div class="gallery-props-item">
                                Comments
                                    <div class="gallery-props-number">${L}</div>
                            </div>
                            <div class="gallery-props-item">
                                Downloads
                                    <div class="gallery-props-number">${q}</div>
                            </div>
                        </div>
                    </li>`).join("");r.insertAdjacentHTML("beforeend",s),N.refresh()}const p=document.querySelector(".search-block-field"),x=document.querySelector(".search-block-button"),u=document.querySelector(".load-more-button"),d=document.querySelector(".loader"),g=document.querySelector(".load-more-loader");let B=document.querySelector("ul.gallery-ul"),i="",f="",h=16,n,m,v;a(u);p.addEventListener("input",()=>{i=p.value});x.addEventListener("click",T);u.addEventListener("click",k);async function T(){n=1,B.innerHTML="",y(d),a(u),await C()}async function k(){n+=1,y(g),a(u),await D()}async function C(){if(!i.trim()){w("Search field cannot be empty"),a(d);return}f=i;try{const r=await b(i,n);S(r)}catch(r){console.log(r)}a(d),p.value="";const e=document.querySelector("li.gallery-item:first-child");e&&(v=Math.ceil(e.getBoundingClientRect().height*2))}async function D(){try{const e=await b(f,n);S(e)}catch(e){console.log(e)}a(g)}async function b(e,r){return await(await I(e,r,h)).data}function S(e){if(e.total===0){w("Sorry, there are no images matching your search query. Please try again!"),a(d),i="";return}O(e.hits.flat()),a(d),i="",m=Math.ceil(e.total/h),console.log("handleSearchResults() >> pageNum: ",n,"totalPages: ",m),R(),n<m&&y(u)}function a(e){e.style.display="none"}function y(e){e.style.display="block"}function w(e){M.error({title:"Error",message:e})}function R(){window.scrollBy({top:v,left:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
