let productMenFootwearHTML = '';
productMenFootwear.forEach((productMenFootwear)=>{
  productMenFootwearHTML += `
  <div class="catalogue-container">
    <div class="item-img">
    <img class= "product-img" src="${productMenFootwear.image}">
    </div>
    <div class="item-info">
      <p class="brand">
      ${productMenFootwear.brand}
      </p>
      <p class="name">
      ${productMenFootwear.name}
      </p>
      <p class="price">
      &#8377; ${productMenFootwear.price}
      </p>
    </div>
  </div>`
})
document.querySelector('.js-catalogue-men-footwear-grid').innerHTML= productMenFootwearHTML;