const DOMSelectors = {
    searchBar: document.querySelector(".search-bar"),
    favBtn: document.querySelector(".favorite-btn"),
    container: document.querySelector(".container")
};

let contacts = [];

// need a function to display certain results based on search data
DOMSelectors.searchBar.addEventListener('keyup', function(e){

const searchValue = e.target.value.toLowerCase(); // lowercase makes it easier to filter without being specific
const filteredResults = contacts.filter((contact) => {
    return (
    contact.name.toLowerCase().includes(searchValue) //||
    //contact.email.toLowerCase().includes(searchValue)
    );
}); 
displayContacts(filteredResults);
});

// need to access JSON data

const loadContacts = async () => {
    const response = await fetch('../data/contacts.json');
    contacts = await response.json();
    displayContacts(contacts)

    //console.log(Array.isArray(contacts));
    //console.log(contacts[1].name);
    };

    const displayContacts = () => contacts.forEach(contact => {
        let outputHtml = `<div class="contact-info">
                    <h1 id="name">${contact.name}</h1>
                    <h2 id="last-name">${contact.lastName}</h2>
                    <div class="favorite"></div>
                    <div class="info">
                        <h3 class="phone-num">${contact.phoneNum}</h3>
                        <h3 class="email">${contact.email}</h3>
                    </div>`;
        
    DOMSelectors.container.innerHTML += outputHtml
       });


// need a function to display everything

 /* if (searchValue.length === 0) {
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


loadContacts();


// need a function to distinguish favorites

DOMSelectors.favBtn.addEventListener('click', () => {
    console.log('linked');
});

// POSSIBLE* Toggle favorite function



// POSSIBLE* Alphabetize contacts