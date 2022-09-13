const DOMSelectors = {
    searchBar: document.querySelector(".search-bar"),
    favBtn: document.querySelector(".favorite-btn"),
    container: document.querySelectorAll(".container")
};

// need to access JSON data

const searchStates = async searchText => {
    const response = await fetch('../data/contacts.json');
    const contacts = await response.json();


      let content = DOMSelectors.container.innerHTML = `<div class="contact-info">
    <h1 id="name">${contacts[0].name}</h1>
    <h2 id="last-name">${contacts[0].name}</h2>
    <div class="favorite"></div>
    <div class="info">
        <h3 class="phone-num">7949748765386</h3>
        <h3 class="email">filler1@gmail</h3>
    </div>`;
 
    
    //console.log(Array.isArray(contacts));
 
    console.log(contacts[0].name)

};

searchStates();

// need a function to display everything



// need a function to display certain results based on search data



// need a function to distinguish favorites

DOMSelectors.favBtn.addEventListener('click', () => {
    console.log('wack');
});

// POSSIBLE* Toggle favorite function