let productMenTopwearHTML = '';
productMenTopwear.forEach((productMenTopwear)=>{
  productMenTopwearHTML += `
  <div class="catalogue-container">
    <div class="item-img">
    <img class= "product-img" src="${productMenTopwear.image}">
    </div>
    <div class="item-info">
      <p class="brand">
      ${productMenTopwear.brand}
      </p>
      <p class="name">
      ${productMenTopwear.name}
      </p>
      <p class="price">
      &#8377; ${productMenTopwear.price}
      </p>
    </div>
  </div>`
})
document.querySelector('.js-catalogue-men-topwear-grid').innerHTML= productMenTopwearHTML;
