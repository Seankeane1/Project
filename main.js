const DOMSelectors = {
    searchBar: document.querySelector(".search-bar"),
    favBtn: document.querySelector(".favorite-btn"),
    container: document.querySelector(".container")
};

//let contacts = [];

// need a function to display certain results based on search data

 const searchInput = (e) => {

     const searchValue = e.target.value.toLowerCase();
     const filteredResults = contacts.filter((contact) => {
         const regex = new RegExp(`^${searchValue}`, 'gi');
         return contact.name.match(regex); //|| contact.email.match(regex); 
     });

     if (searchValue === 0) {
         DOMSelectors.container.innerHTML = "";
     }
     else {
         displayContacts(filteredResults);
     };
 };

// need to access JSON data

const loadContacts = async () => {
    const response = await fetch('../data/contacts.json');
    contacts = await response.json();

// alphabetize names

 const alphabetize = (prop) =>
  (a, b) => a[prop].toLowerCase() == b[prop].toLowerCase() ? 0 : a[prop].toLowerCase() < b[prop].toLowerCase() ? -1 : 1

contacts.sort(alphabetize(`name`));

displayContacts(contacts);
//searchInput(); 

};

       const displayContacts = (e) => {
        const htmlString = e
            .map((contact) => {
                return `
                <div class="contact-info">
                    <h1 id="name">${contact.name}</h1>
                    <h2 id="last-name">${contact.lastName}</h2>
                    <div class="favorite"></div>
                    <div class="info">
                        <h3 class="phone-num">${contact.phoneNum}</h3>
                        <h3 class="email">${contact.email}</h3>
                    </div>
                    `;
            })
            .join('');
        DOMSelectors.container.innerHTML = htmlString;
    };


// Calling everything
    DOMSelectors.searchBar.addEventListener('keyup', searchInput);
loadContacts();


