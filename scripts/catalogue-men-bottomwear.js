let productMenBottomwearHTML = '';
productMenBottomwear.forEach((productMenBottomwear)=>{
  productMenBottomwearHTML += `
  <div class="catalogue-container">
    <div class="item-img">
    <img class= "product-img" src="${productMenBottomwear.image}">
    </div>
    <div class="item-info">
      <p class="brand">
      ${productMenBottomwear.brand}
      </p>
      <p class="name">
      ${productMenBottomwear.name}
      </p>
      <p class="price">
      &#8377; ${productMenBottomwear.price}
      </p>
    </div>
  </div>`
})
document.querySelector('.js-catalogue-men-bottomwear-grid').innerHTML= productMenBottomwearHTML;