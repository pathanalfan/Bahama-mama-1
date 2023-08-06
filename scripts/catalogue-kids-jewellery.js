let productMenSportswearHTML = '';
productMenSportswear.forEach((productMenSportswear)=>{
  productMenSportswearHTML += `
  <div class="catalogue-container">
    <div class="item-img">
    <img class= "product-img" src="${productMenSportswear.image}">
    </div>
    <div class="item-info">
      <p class="brand">
      ${productMenSportswear.brand}
      </p>
      <p class="name">
      ${productMenSportswear.name}
      </p>
      <p class="price">
      &#8377; ${productMenSportswear.price}
      </p>
    </div>
  </div>`
})
document.querySelector('.js-catalogue-men-sportswear-grid').innerHTML= productMenSportswearHTML;
