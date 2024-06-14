let basket = [];
let amount = 0;
let deliverCost = 2.50;
const payFee = 0.29;
let sum = 0;

async function includeHTML() {
  let includeElements = document.querySelectorAll('[w3-include-html]');
  for (let i = 0; i < includeElements.length; i++) {
    const element = includeElements[i];
    file = element.getAttribute("w3-include-html"); // "includes/header.html"
    let resp = await fetch(file);
    if (resp.ok) {
      element.innerHTML = await resp.text();
    } else {
      element.innerHTML = 'Page not found';
    }
  }
}

function render() {
  includeHTML();
  renderDeliverInfo();
  renderCategoriesSlider();
  renderMenu();
  renderBasket();
}

function renderBasket() {
  if (basket == '') {
    document.getElementById('basketEmpty').classList.remove('d-none');
    document.getElementById('basketFilled').classList.add('d-none');
  } else {
    document.getElementById('basketEmpty').classList.add('d-none');
    document.getElementById('basketFilled').classList.remove('d-none');
    renderBasketFilled();
  }
}

function renderBasketFilled() {
  let order = document.getElementById('basketFilled');
  order.innerHTML = '';

  for (let i = 0; i < basket.length; i++) {
    order.innerHTML += htmlMealinBasket(i);
    document.getElementById(`meal${basket[i]['menuIndex']}-${basket[i]['mealIndex']}`).innerHTML =
      basket[i]['portion'];
  }
  order.innerHTML += renderDeliverFailure();
  order.innerHTML += renderSummary();
  renderOrderButton();
}

function renderCategoriesMenu() {
  let categories = document.getElementById('categoriesMenu');
  categories.innerHTML = '';

  for (let i = 0; i < restaurant['menu'].length; i++) {
    categories.innerHTML += htmlCategoriesMenu(i);
  }
  categories.classList.remove('d-none');
}

function renderCategoriesSlider() {
  let categories = document.getElementById('categories');
  categories.innerHTML = '';

  for (let i = 0; i < restaurant['menu'].length; i++) {
    categories.innerHTML += htmlCategoriesSlider(i);
  }
}

function renderDeliverFailure() {
  if (amount < restaurant['minOrderVolume']) {
    return htmlDeliverFailure();
  } else return '';
}

function renderDeliverInfo() {
  let active = document.querySelector('.deliverChoice.activate');
  if (active == document.getElementById('delivery')) {
    htmlDelivery();
    deliverCost = restaurant['deliverCost'];
  } else if (active == document.getElementById('pickup')) {
    htmlPickup();
    deliverCost = 0;
  }
  renderBasket();
}

function renderInfo() {
  let info = document.getElementById('containerInfo');
  info.innerHTML = '';
  info.innerHTML = htmlInfo();
  info.classList.remove('d-none');
}

function renderMenu() {
  let menu = document.getElementById('menuChoice');
  menu.innerHTML = '';

  for (let i = 0; i < restaurant['menu'].length; i++) {
    menu.innerHTML += htmlMenuTop(i);
    for (let j = 0; j < restaurant['menu'][i]['meals'].length; j++) {
      menu.innerHTML += htmlMenuBottom(i, j);
    }
  }
}

function renderOrder() {
  let order = document.getElementById('orderLoading');
  order.innerHTML = htmlOrderLoading();
  order.classList.remove('d-none');
  setTimeout(renderOrderFinished, 5000);
}

function renderOrderButton() {
  let orderButton = document.getElementById('btnSum');
  orderButton.disabled = amount < restaurant['minOrderVolume'];
}

function renderOrderFinished() {
  let order = document.getElementById('orderLoading');
  order.innerHTML = htmlOrderFinished();
  basket.splice(0, basket.length);
  amount = 0;
  sum = 0;
}

function renderSearch() {
  document.getElementById('containerSearchBar').classList.remove('d-none');
}

function renderSummary() {
  sum = amount + payFee + deliverCost;
  return htmlSummary();
}