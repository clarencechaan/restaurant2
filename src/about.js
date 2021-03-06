function populateAbout() {
    const main = document.querySelector('.main');
    const about = document.createElement('div');
    about.classList.add('about');

    const title = document.createElement('div');
    title.innerText = 'About Alfredo\'s';
    title.classList.add('big-logo-1');

    const description = document.createElement('div');
    description.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    description.classList.add('about-description')

    main.appendChild(title);
    about.appendChild(description);
    main.appendChild(about);

}

export default populateAbout;