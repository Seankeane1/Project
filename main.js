const DOMSelectors = {
    searchBar: document.querySelector(".search-bar"),
    favBtn: document.querySelector(".favorite-btn"),
    container: document.querySelectorAll(".container")
};

let contacts = [];

DOMSelectors.searchBar.addEventListener('input', function(e){

const searchValue = e.target.value.toLowerCase(); // lowercase makes it easier to fiter without being specific
const filteredResult = contacts.filter(() => {

}); // filter output

})

// need to access JSON data

const searchContacts = async searchText => {
    const response = await fetch('../data/contacts.json');
    contacts = await response.json();

    console.log(Array.isArray(contacts));
    console.log(contacts[0].name)

    // need a function to display everything

const displayContacts = (people) => {

}

/* let content = DOMSelectors.container.innerHTML = `<div class="contact-info">
    <h1 id="name">${contacts.name}</h1>
    <h2 id="last-name">${contacts.name}</h2>
    <div class="favorite"></div>
    <div class="info">
        <h3 class="phone-num">7949748765</h3>
        <h3 class="email">filler1@gmail</h3>
    </div>`;
 
     */

// need a function to display certain results based on search data

};

searchContacts();



// need a function to distinguish favorites

DOMSelectors.favBtn.addEventListener('click', () => {
    console.log('wack');
});

// POSSIBLE* Toggle favorite function

// POSSIBLE* Alphabetize contacts