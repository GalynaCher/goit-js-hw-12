//  Main import of iziToast
import iziToast from "izitoast";
// Additional import of iziToast style
import "izitoast/dist/css/iziToast.min.css";

import { fetchImages } from "./js/pixabay-api.js";
import { renderImagesByPages } from "./js/render-functions.js";

// Strict mode
'use strict'

// Query selectors
const searchFld = document.querySelector(".search-block-field");
const searchBtn = document.querySelector(".search-block-button"); 
const loadMoreBtn = document.querySelector(".load-more-button");
const loader = document.querySelector(".loader");
const loaderMore = document.querySelector(".load-more-loader");
let gallery = document.querySelector("ul.gallery-ul");

// Define global variables
let searchCriteria = '';
let searchCriteriaLoad = '';
let perPage = 16;
let pageNum;
let totalPages;
let scrollHeight; 

hideElement(loadMoreBtn);                               // Hide Load More button

// Add listeners
searchFld.addEventListener("input", () => { 
    searchCriteria = searchFld.value;
});
searchBtn.addEventListener("click", searchImages);
loadMoreBtn.addEventListener("click", loadImagesMore);

async function searchImages() { 
    pageNum = 1;
    gallery.innerHTML = "";                             // Clear gallery content to avoid mixing query results
    showElement(loader);                                // Display progress bar
    hideElement(loadMoreBtn);                           // Hide Load More button

    await performSearch();
};

async function loadImagesMore() { 
    pageNum += 1;
    showElement(loaderMore);                            // Display progress bar
    hideElement(loadMoreBtn);                           // Hide Load More button

    await loadNextPage();
};

//========================== performSearch() ===========================//
async function performSearch() { 

    if (!searchCriteria.trim()) {                       // Search field cannot be empty
        iziToastError('Search field cannot be empty');
        hideElement(loader);                            // Hide progress bar
        return;   
    }
    
    searchCriteriaLoad = searchCriteria;

    try {
        const data = await fetchAndRenderImages(searchCriteria, pageNum);
        handleSearchResults(data);
    } catch (error) { 
        console.log(error);
    };

    hideElement(loader);                            // Hide progress bar
    searchFld.value = '';                           // Clear Search field

    // Define height of a <li> element for scrollDown();
    const liItem = document.querySelector("li.gallery-item:first-child");
    scrollHeight = Math.ceil(liItem.getBoundingClientRect().height * 2);
};

//========================== loadNextPage() ===========================//
async function loadNextPage() {

    try {
        const data = await fetchAndRenderImages(searchCriteriaLoad, pageNum);
        handleSearchResults(data);

    } catch(error) { 
        console.log(error);
    };

    hideElement(loaderMore);                        // Hide progress bar
  };

async function fetchAndRenderImages(criteria, page) { 
    const response = await fetchImages(criteria, page, perPage);
    const data = await response.data;
    return data;
};

//========================== handleSearchResults() ===========================//
function handleSearchResults(data) {

    if (data.total === 0) {                         // Check if the total number of items is 0
        iziToastError('Sorry, there are no images matching your search query. Please try again!');
        hideElement(loader);                        // Hide progress bar
        searchCriteria = '';
        return;
    }

    renderImagesByPages(data.hits.flat());          // Return data.hits;
                    
    hideElement(loader);                            // Hide progress bar
    searchCriteria = '';    

    totalPages = Math.ceil(data.total / perPage);
    console.log("handleSearchResults() - pageNum: ", pageNum, "totalPages: ", totalPages);
    
    scrollDown();                                   // Smooth scroll down 

    if (pageNum < totalPages) {
        showElement(loadMoreBtn);                   // Show Load More button
    };
 };

function hideElement(element) { 
    element.style.display = 'none';
};

function showElement(element) { 
    element.style.display = 'block';
};

function iziToastError(msg) { 
    iziToast.error({
        title: 'Error',
        message: msg
    });
};

function scrollDown() { 
    window.scrollBy({
        top: scrollHeight, 
        left: 0,  
        behavior: 'smooth' 
    });
};
