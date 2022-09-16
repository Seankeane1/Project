const DOMSelectors = {
    searchBar: document.querySelector(".search-bar"),
    favBtn: document.querySelector(".favorite-btn"),
    container: document.querySelectorAll(".container")
};

let contacts = [];

// need a function to display certain results based on search data
DOMSelectors.searchBar.addEventListener('keyup', function(e){

const searchValue = e.target.value.toLowerCase(); // lowercase makes it easier to filter without being specific
const filteredResults = contacts.filter((contact) => {
    contact.name.toLowerCase().includes(searchValue) ||
    contact.email.toLowerCase().includes(searchValue)
}); 
displayContacts(filteredResults);
});

// need to access JSON data

const searchContacts = async searchText => {
    const response = await fetch('../data/contacts.json');
    contacts = await response.json();

    console.log(Array.isArray(contacts));
    console.log(contacts[0].name);

    if(searchText.length === 0) {
        matches = [];
    };

   for (let i = 0; i < contacts.length, i++;) {
    let displayContacts = `<div class="contact-info">
                <h1 id="name">${contacts[i].name}</h1>
                <h2 id="last-name">${contacts[i].name}</h2>
                <div class="favorite"></div>
                <div class="info">
                    <h3 class="phone-num">7949748765</h3>
                    <h3 class="email">filler1@gmail</h3>
                </div>`;
    
DOMSelectors.container.innerHTML += displayContacts
   };
   
        
    };


// need a function to display everything

/*  if (searchText.length === 0) {
        const displayContacts = (contacts) => {
            const outputHtml = contacts.map((contact) => {
                return `<div class="contact-info">
                <h1 id="name">${contact.name}</h1>
                <h2 id="last-name">${contact[0].name}</h2>
                <div class="favorite"></div>
                <div class="info">
                    <h3 class="phone-num">7949748765</h3>
                    <h3 class="email">filler1@gmail</h3>
                </div>`;
            }).join('');
        DOMSelectors.container.innerHTML = outputHtml;
        }
        
    };  */


searchContacts();


// need a function to distinguish favorites

DOMSelectors.favBtn.addEventListener('click', () => {
    console.log('linked');
});

searchText();

// POSSIBLE* Toggle favorite function



// POSSIBLE* Alphabetize contacts