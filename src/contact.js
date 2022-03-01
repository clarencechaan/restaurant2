function populateContact() {
    const main = document.querySelector('.main');
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const title = document.createElement('div');
    title.innerText = 'Contact Us';
    title.classList.add('big-logo-1');

    const description = document.createElement('div');
    description.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    description.classList.add('contact-description')

    const address = document.createElement('div');
    address.classList.add('address');
    address.innerText = "1980 Avenue Rd, Toronto, Ontario, M5M 4A4"

    const phone = document.createElement('div');
    phone.classList.add('phone');
    phone.innerText = "(647) 347-9474";

    contact.appendChild(description);
    contact.appendChild(address);
    contact.appendChild(phone);
    main.appendChild(title);
    main.appendChild(contact);
}

export default populateContact;