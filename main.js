const DOMSelectors = {
    searchBar: document.querySelector(".search-bar"),
    favBtn: document.querySelector(".favorite-btn"),
    container: document.querySelectorAll(".container")
};

// need to access JSON data

const searchStates = async searchText => {
    const response = await fetch('../data/contacts.json');
    const contacts = await response.json();


    //console.log(Array.isArray(contacts));


}

searchStates();

// need a function to display everything



// need a function to display certain results based on search data



// need a function to distinguish favorites

DOMSelectors.favBtn.addEventListener('click', () => {
    console.log('wack');
});