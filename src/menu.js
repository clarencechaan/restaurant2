function populateMenu() {
    const main = document.querySelector('.main');
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const title = document.createElement('div');
    title.innerText = 'Menu';
    title.classList.add('big-logo-1');
    main.appendChild(title);

    let menuItem = []
    let menuItemName = []
    let menuItemPrice = []
    let menuItemTopRow = []
    let menuItemDescription = []

    for (let i = 0; i < 10; i++) {
        menuItem[i] = document.createElement('div');
        menuItem[i].classList.add('menu-item');
        menuItemName[i] = document.createElement('div');
        menuItemPrice[i] = document.createElement('div');
        menuItemTopRow[i] = document.createElement('div');
        menuItemTopRow[i].classList.add('menu-item-top-row')
        menuItemDescription[i] = document.createElement('div')
    }

    menuItemName[0].innerText = 'Chicago-Style Deep Dish';
    menuItemPrice[0].innerText = '. . . $20';
    menuItemDescription[0].innerText = 'pepperoni, sausage, onions, mushrooms, bell peppers'
    menuItemName[1].innerText = 'Hawaiian';
    menuItemPrice[1].innerText = '. . . $20';
    menuItemDescription[1].innerText = 'cooked ham, pineapple'
    menuItemName[2].innerText = 'Ai Funghi';
    menuItemPrice[2].innerText = '. . . $20';
    menuItemDescription[2].innerText = 'porcini, cremini, portobello'
    menuItemName[3].innerText = 'Napoletana';
    menuItemPrice[3].innerText = '. . . $20';
    menuItemDescription[3].innerText = 'mozzarella, basil, olive oil'
    menuItemName[4].innerText = 'Margherita';
    menuItemPrice[4].innerText = '. . . $20';
    menuItemDescription[4].innerText = 'mozzarella, parmigiano-reggiano, basil'
    menuItemName[5].innerText = 'Calzone';
    menuItemPrice[5].innerText = '. . . $20';
    menuItemDescription[5].innerText = 'ham, pepperoni, sausage'
    menuItemName[6].innerText = 'Marinara';
    menuItemPrice[6].innerText = '. . . $20';
    menuItemDescription[6].innerText = 'tomato sauce, olive oil'
    menuItemName[7].innerText = 'New York-Style';
    menuItemPrice[7].innerText = '. . . $20';
    menuItemDescription[7].innerText = 'tomato sauce, mozzarella, pepperoni'
    menuItemName[8].innerText = 'Pepperoni';
    menuItemPrice[8].innerText = '. . . $20';
    menuItemDescription[8].innerText = 'tomato sauce, mozzarella, pepperoni'
    menuItemName[9].innerText = 'Caprese';
    menuItemPrice[9].innerText = '. . . $20';
    menuItemDescription[9].innerText = 'balsamic vinegar glaze, tomatoes, olive oil'

    for (let i = 0; i < 10; i++) {
        menuItemTopRow[i].appendChild(menuItemName[i]);
        menuItemTopRow[i].appendChild(menuItemPrice[i]);
        menuItem[i].appendChild(menuItemTopRow[i]);
        menuItem[i].appendChild(menuItemDescription[i]);
        menu.appendChild(menuItem[i]);
    }

    main.appendChild(menu);
}

export default populateMenu;