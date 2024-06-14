function addComment(basketIndex) {
  document.getElementById(`comment${basketIndex}`).classList.remove('d-none');
}

function cancelComment(basketIndex) {
  document.getElementById(`input${basketIndex}`).value = '';
  hideMenu(`comment${basketIndex}`);
  renderBasket();
}

function closeSearch(id) {
  let search = document.getElementById('searchBar');
  search.value = '';
  hideMenu(id);
  renderMenu();
}

function deleteComment(basketIndex) {
  let comment = basket[basketIndex]['comments'];
  comment.splice(0, comment.length);
  cancelComment(basketIndex);
}

function deliverOptionsSlider(movment, activate, deactivate) {
  document.getElementById('bgEffect').style.transform = `translate(${movment}, 0)`;
  document.getElementById(activate).classList.add('activate');
  document.getElementById(deactivate).classList.remove('activate');
  renderDeliverInfo();
}

function finishOrder() {
  hideMenu('orderLoading');
  render();
}

function handleOrderButton() {
  renderOrder();
}

function hideBasket() {
  document.querySelector('.basket').style.zIndex = '1';
}

function hideMenu(id) {
  document.getElementById(id).classList.add('d-none');
}

function liked() {
  if (restaurant['liked']) {
    document.getElementById('likeIcon').src = 'assets/icons/heart-regular.svg';
    restaurant['liked'] = false;
  } else {
    document.getElementById('likeIcon').src = 'assets/icons/heart-solid.svg';
    restaurant['liked'] = true;
  }
}

function moveSlider(direction) {
  let categories = document.getElementById('categories');
  let currentScrollTop = categories.scrollTop;

  categories.scrollBy({
    left: direction,
    top: 0
  });
}

function portionDown(basketIndex) {
  if (basket[basketIndex]['portion'] > 1) {
    amount = amount - basket[basketIndex]['price'];
    basket[basketIndex]['portion']--;
  } else {
    amount = amount - basket[basketIndex]['price'];
    document.getElementById(`meal${basket[basketIndex]['menuIndex']}-${basket[basketIndex]['mealIndex']}`).innerHTML = '+';
    basket.splice(basketIndex, 1);
  }
  renderBasket();
}

function portionUp(mealIndex) {
  if (basket[mealIndex]['portion'] < 99) {
    amount = amount + basket[mealIndex]['price'];
    basket[mealIndex]['portion']++;
  } else {
    alert('Maximal 99 Stück je Speise pro Bestellung');
  }
  renderBasket();
}

function saveComment(basketIndex) {
  let comment = document.getElementById(`input${basketIndex}`).value;
  basket[basketIndex]['comments'].push(comment);
  cancelComment(basketIndex);
}

function searchMenu() {
  let search = document.getElementById('searchBar').value;
  search = search.toLowerCase();
  let menu = document.getElementById('menuChoice');
  menu.innerHTML = '';

  for (let i = 0; i < restaurant['menu'].length; i++) {
    let cat = restaurant['menu'][i]['name'];
    let meal = restaurant['menu'][i]['meals'];
    if (cat.toLowerCase().includes(search) || meal.find((item) => item.name.toLowerCase().includes(search))) {
      menu.innerHTML += htmlMenuTop(i);
      for (let j = 0; j < restaurant['menu'][i]['meals'].length; j++) {
        meal = restaurant['menu'][i]['meals'][j]['name'];
        if (meal.toLowerCase().includes(search)) {
          menu.innerHTML += htmlMenuBottom(i, j);
        }
      }
    }
  }
}

function showBasket() {
  document.querySelector('.basket').style.zIndex = '6';
  renderBasket();
}

function toBasket(menuIndex, mealIndex) {
  let price = restaurant['menu'][menuIndex]['meals'][mealIndex]['price'];
  let meal = { 'name': restaurant['menu'][menuIndex]['meals'][mealIndex]['name'], 'price': price, 'comments': [], 'portion': 1, 'menuIndex': menuIndex, 'mealIndex': mealIndex };
  let index = basket.findIndex(meal => meal.name === restaurant['menu'][menuIndex]['meals'][mealIndex]['name']);

  if (index === -1) {
    basket.push(meal);
    amount = amount + price;
    renderBasket();
  } else if (basket[index]['portion'] < 99) {
    basket[index]['portion'] = basket[index]['portion'] + 1;
    amount = amount + price;
    renderBasket();
  } else {
    alert('Maximal 99 Stück je Speise pro Bestellung');
  }
}