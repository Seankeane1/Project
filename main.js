const DOMSelectors = {
    searchBar: document.getElementsByClassName(".search-bar"),
    favBtn: document.getElementsByClassName(".favorite-btn"),
    container: document.getElementsByClassName(".container")
};

// need to access JSON data

const searchStates = async searchText => {
    const res = await fetch('../data/contacts.json');
    const cont = await res.json();

    console.log(cont)
}

searchStates();

// need a function to display everything



// need a function to display certain results based on search data



// need a function to distinguish favorites


