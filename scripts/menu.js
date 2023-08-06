const dropdownMen = document.querySelector('.js-dropdown-men')

const dropdownMenButton = document.querySelector('.js-dropdown-men-button')

dropdownMenuMenHTML = `
<div class="menu-header"> 
  <a class= "links" href="mens-Topwear.html">
  <div class="options">
    Topwear
  </div>
  </a>
  <a class= "links" href="mens-bottomwear.html">
  <div class="options">
    Bottomwear
  </div>
  </a>
  <a class= "links" href="mens-Ethnicwear.html">
  <div class="options">
    Ethnicwear
  </div>
  </a>
  <a  class= "links" href="mens-footwear.html">
  <div class="options">
    Footwear
  </div>
  </a>
  <a class= "links" href="mens-sportswear.html">
  <div class="options">
    Active & Sports
  </div>
  </a>
  <a class= "links" href="mens-watches.html">
  <div class="options">
    Watches
  </div>
  </a>
</div>
  `;

dropdownMenButton.addEventListener('click', ()=>{
  document.querySelector('.js-menu-header').innerHTML=dropdownMenuMenHTML
})

const dropdownWomenButton = document.querySelector('.js-dropdown-women-button')

dropdownMenuWomenHTML = `
       <div class="menu-header">
       <a class= "links" href="womens-indianwear.html">
        <div class="options">
          Indian Wear
        </div>
        </a>
        <a class= "links" href="womens-westernwear.html">
        <div class="options">
          Western Wear
        </div>
        </a>
        <a class= "links" href="womens-bags.html">
        <div class="options">
          Bags
        </div>
        </a>
        <a class= "links" href="womens-jeweller.html">
        <div class="options">
          Jewellery
        </div>
        </a>
        <a class= "links" href="womens-sportswear.html">
        <div class="options">
          Active & Sports
        </div>
        </a>
        <aclass= "links" href="womens-footwear.html">
        <div class="options">
          Footwear
        </div>
        </a>
      </div>
  `;

  dropdownWomenButton.addEventListener('click', ()=>{
    document.querySelector('.js-menu-header').innerHTML=dropdownMenuWomenHTML
  })

  const dropdownKidsButton = document.querySelector('.js-dropdown-kids-button')

  dropdownMenuKidsHTML = `
       <div class="menu-header">
       <a class= "links" href="kids-indianwear.html"> 
        <div class="options">
          Indian Wear
        </div>
        </a>
        <a class= "links" href="kids-westernwear.html"> 
        <div class="options">
          Western Wear
        </div>
        </a>
        <a class= "links" href="kids-footwear.html"> 
        <div class="options">
          Footwear
        </div>
        </a>
        <a class= "links" href="kids-jewellery.html"> 
        <div class="options">
          Jewellery
        </div>
        </a>
        <a class= "links" href="kids-sportswear.html"> 
        <div class="options">
          Sportswear
        </div>
        </a>
        <a class= "links" href="kids-toys.html"> 
        <div class="options">
          Toys & Games
        </div>
        </a>
      </div>
  `;

  dropdownKidsButton.addEventListener('click', ()=>{
    document.querySelector('.js-menu-header').innerHTML=dropdownMenuKidsHTML
  })

