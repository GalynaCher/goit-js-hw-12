// Import Axios
import axios from "axios";

// Strict mode
'use strict'

export async function fetchImages(searchCriteria, pageNum, perPage) {
 
    const searchParams = new URLSearchParams({
        key: "43557588-360f3c0dbe3221038cf66573a",
        q: searchCriteria,
        image_type: "photo",
        orientation: "horizontal", 
        safesearch: true, 
        page: pageNum,
        per_page: perPage
    });
    
    const url = `https://pixabay.com/api/?${searchParams}`;

    // Return fetch(url);
    return await axios.get(url);
 };