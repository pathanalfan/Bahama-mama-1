let productMenEthnicwearHTML = '';
productMenEthnicwear.forEach((productMenEthnicwear)=>{
  productMenEthnicwearHTML += `
  <div class="catalogue-container">
    <div class="item-img">
    <img class= "product-img" src="${productMenEthnicwear.image}">
    </div>
    <div class="item-info">
      <p class="brand">
      ${productMenEthnicwear.brand}
      </p>
      <p class="name">
      ${productMenEthnicwear.name}
      </p>
      <p class="price">
      &#8377; ${productMenEthnicwear.price}
      </p>
    </div>
  </div>`
})
document.querySelector('.js-catalogue-men-ethicwear-grid').innerHTML= productMenEthnicwearHTML;