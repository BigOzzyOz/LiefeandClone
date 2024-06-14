function htmlCategoriesSlider(menuIndex) {
  return /*html*/`
    <a href="#cat${menuIndex}" class="sliderItem">${restaurant['menu'][menuIndex]['name']}</a>
  `;
}

function htmlDeliverFailure() {
  return /*html*/`
    <div class="deliverFailure">
      <p>Benötigter Betrag, um den Mindestbestellwert zu erreichen</p>
      <p>${Number(restaurant['minOrderVolume'] - amount).toFixed(2).replace('.', ',')} €</p>
    </div>
    <p class="deliverFailureInfo">Leider kannst du noch nicht bestellen. Pizza Avanti liefert erst ab einem Mindestbestellwert von ${Number(restaurant['minOrderVolume']).toFixed(2).replace('.', ',')} € (exkl. Lieferkosten)</p>
  `;
}

function htmlCategoriesMenu(menuIndex) {
  return /*html*/`
    <a href="#cat${menuIndex}" class="sliderItem" onclick="hideMenu('categoriesMenu')">${restaurant['menu'][menuIndex]['name']}</a>
  `;
}

function htmlDelivery() {
  let deliverInfo = document.getElementById('deliverInfo');
  deliverInfo.innerHTML = /*html*/`
    <div class="deliverInfo">
      <img src="assets/icons/bag-shopping-solid.svg" alt="bag">
      <p>Min. ${Number(restaurant['minOrderVolume']).toFixed(2).replace('.', ',')} €</p>
    </div>
    <div class="seperator">
      <img src="assets/icons/circle-solid.svg" alt="dot">
    </div>
    <div class="deliverInfo">
      <img src="assets/icons/truck-fast-solid.svg" alt="truck">
      <p>${Number(restaurant['deliverCost']).toFixed(2).replace('.', ',')} €</p>
    </div>
  `;
}

function htmlInfo() {
  return /*html*/`
    <h4>Lieferzeiten</h4>
    <table>
      <tbody>
        <tr>
          <td>Montag</td>
          <td>${restaurant['openingHours']['monday']}</td>
        </tr>
        <tr>
          <td>Dienstag</td>
          <td>${restaurant['openingHours']['tuesday']}</td>
        </tr>
        <tr>
          <td>Mittwoch</td>
          <td>${restaurant['openingHours']['wednesday']}</td>
        </tr>
        <tr>
          <td>Donnerstag</td>
          <td>${restaurant['openingHours']['thursday']}</td>
        </tr>
        <tr>
          <td>Freitag</td>
          <td>${restaurant['openingHours']['friday']}</td>
        </tr>
        <tr>
          <td>Samstag</td>
          <td>${restaurant['openingHours']['saturday']}</td>
        </tr>
        <tr>
          <td>Sonntag</td>
          <td>${restaurant['openingHours']['sunday']}</td>
        </tr>
      </tbody>
    </table>
    <br>
    <h4>Webseite</h4>
    <table>
      <tbody>
        <tr>
          <td>
            <a href="https://https://jan-holtschke.developerakademie.net/lieferando/index.html">https://jan-holtschke.developerakademie.net/lieferando/index.html</a>
          </td>
        </tr>
      </tbody>
    </table>
    <br>
    <h4>Impressum</h4>
    <table>
      <tbody>
        <tr>
          <td>
            <p>${restaurant['owner']} handelt im Namen von ${restaurant['name']}<br>
              ${restaurant['address']['street']}<br>
              ${restaurant['address']['city']}<br>
              ${restaurant['address']['country']}<br>
            </p>
          </td>
        </tr>
      </tbody>
    </table>
    <button onclick="hideMenu('containerInfo')">X</button>
  `;
}

function htmlMealinBasket(basketIndex) {
  return /*html*/`
    <div class="itemBasket">
      <div class="itemInfo">
        <h3>${basket[basketIndex]['name']}</h3>
        <p>${Number(basket[basketIndex]['price']).toFixed(2).replace('.', ',')} €</p>
      </div>
      <p class="itemComments">${basket[basketIndex]['comments']}</p>
      <div id="comment${basketIndex}" class="mealComment d-none">
        <textarea name="" id="input${basketIndex}"></textarea>
        <div class="commentsWork">
          <a onclick="saveComment(${basketIndex})">Speichern</a>
          <a onclick="cancelComment(${basketIndex})">Abrechen</a>
          <a onclick="deleteComment(${basketIndex})">Löschen</a>
        </div>
      </div>
      <div class="itemOptions">
        <a onclick="addComment(${basketIndex})">Amerkungen<br>hinzufügen</a>
        <div class="itemAmount">
          <span class="manageAmount" onclick="portionDown(${basketIndex})">-</span>
          <p>${basket[basketIndex]['portion']}</p>
          <span class="manageAmount" onclick="portionUp(${basketIndex})">+</span>
        </div>
      </div>
    </div>
  `;
}

function htmlMenuBottom(menuIndex, mealIndex) {
  let price = restaurant['menu'][menuIndex]['meals'][mealIndex]['price'];
  price = Number(price).toFixed(2);
  return /*html*/`
    <div class="meal">
      <h3>${restaurant['menu'][menuIndex]['meals'][mealIndex]['name']}</h3>
      <p>${restaurant['menu'][menuIndex]['meals'][mealIndex]['ingredients'] == undefined ? '' : restaurant['menu'][menuIndex]['meals'][mealIndex]['ingredients']}</p>
      <h3>${price.replace('.', ',')} €</h3>
      <span id="meal${menuIndex}-${mealIndex}" class="addFood" onclick="toBasket(${menuIndex}, ${mealIndex})">+</span>
    </div>
  `;
}

function htmlMenuTop(menuIndex) {
  return /*html*/`
    <img class="menuImg" src="${restaurant['images'][menuIndex]}" alt="Image of ${restaurant['menu'][menuIndex]['name']}">
    <h2 id="cat${menuIndex}">${restaurant['menu'][menuIndex]['name']}</h2>
    <p class="discriptionText">${restaurant['menu'][menuIndex]['description']}</p>
  `;
}

function htmlOrderFinished() {
  return /*html*/`
    <h2>Bestellung erfolgreich übermittelt</h2>
    <button onclick="finishOrder()">Schliessen</button>
  `;
}

function htmlOrderLoading() {
  return /*html*/`
      <h2>Bestellung wird übermittelt</h2>
      <div class="loader">
        <img src="assets/img/logo_small.png" alt="YumRun Logo">
      </div> 
  `;
}

function htmlPickup() {
  let deliverInfo = document.getElementById('deliverInfo');
  deliverInfo.innerHTML = /*html*/`
    <p>Abholung bei ${restaurant['name']} ${restaurant['address']['street']}, ${restaurant['address']['city']}</p >
  `;
}

function htmlSummary() {
  return /*html*/`
    <div class="summary">
      <div class="flex">
        <p class="summaryDefinition">Zwischensumme</p>
        <p class="summaryAmount">${Number(amount).toFixed(2).replace('.', ',')} €</p>
      </div>
      <div class="flex">
        <p class="summaryDefinition">Transaktionskosten PayPal</p>
        <p class="summaryAmount">${Number(payFee).toFixed(2).replace('.', ',')} €</p>
      </div>
      <div class="flex">
        <p class="summaryDefinition">Lieferkosten</p>
        <p class="summaryAmount">${Number(deliverCost).toFixed(2).replace('.', ',')} €</p>
      </div>
      <div class="flex">
        <h4 class="summaryDefinition">Gesamt</h4>
        <h4 class="summaryAmount">${Number(sum).toFixed(2).replace('.', ',')} €</h4>
      </div>
    </div>
    <button id="btnSum" class="btnSum" onclick="handleOrderButton()">Bezahlen(${Number(sum).toFixed(2).replace('.', ',')} €)</button>
  `;
}