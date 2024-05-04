// Import the SimpleLightbox library
import SimpleLightbox from "simplelightbox";
// Additional import of SimpleLightbox style
import "simplelightbox/dist/simple-lightbox.min.css";

// Strict mode
'use strict'

const lightbox = new SimpleLightbox(".gallery a", {                // the simpleLightbox pattern
        captions: true,                                            // show captions if availabled or not
        captionSelector: 'img',                                    // set the element where the caption is
        captionsData: 'alt',                                       // get the caption from given attribute
        captionPosition: 'bottom',                                        
        captionDelay: 250,                                         // delay before the caption shows (in ms)
        captionType: 'attr'                                        // how to get the caption.                                                                  // You can choose between attr, data or text
    });

export function renderImagesByPages(dataHit) { 
    
    let gallery = document.querySelector("ul.gallery-ul");

    const markup = dataHit
            .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
                `    <li class="gallery-item">
                        <div class="gallery">
                            <a class="gallery-link" href="${largeImageURL}" >
                                <img class="gallery-image" src="${webformatURL}" data-source="${largeImageURL}" alt="${tags}" />
                            </a>
                        </div>    
                        <div class="gallery-props">
                            <div class="gallery-props-item">
                                Likes
                                    <div class="gallery-props-number">${likes}</div>
                            </div>
                            <div class="gallery-props-item">
                                Views
                                    <div class="gallery-props-number">${views}</div>
                            </div>
                            <div class="gallery-props-item">
                                Comments
                                    <div class="gallery-props-number">${comments}</div>
                            </div>
                            <div class="gallery-props-item">
                                Downloads
                                    <div class="gallery-props-number">${downloads}</div>
                            </div>
                        </div>
                    </li>`
            )
            .join("");
    // Display the gallery    
    gallery.insertAdjacentHTML("beforeend", markup); 
    lightbox.refresh();
}