const dropdownMen = document.querySelector('.js-dropdown-men')

const dropdownMenButton = document.querySelector('.js-dropdown-men-button')

dropdownMenuMenHTML = `
       <div class="menu-header"> 
        <div class="options">
          What's New <img class="down-arrow" src="images/down arrow.png">
        </div>
        <div class="options">
          Topwear <img class="down-arrow" src="images/down arrow.png">
        </div>
        <div class="options">
          Bottomwear <img class="down-arrow" src="images/down arrow.png">
        </div>
        <div class="options">
          Ethnicwear <img class="down-arrow" src="images/down arrow.png">
        </div>
      </div>
  `;

dropdownMenButton.addEventListener('click', ()=>{
  document.querySelector('.js-menu-header').innerHTML=dropdownMenuMenHTML
})

const dropdownWomenButton = document.querySelector('.js-dropdown-women-button')

dropdownMenuWomenHTML = `
       <div class="menu-header"> 
        <div class="options">
          What's New <img class="down-arrow" src="images/down arrow.png">
        </div>
        <div class="options">
          Indian Wear <img class="down-arrow" src="images/down arrow.png">
        </div>
        <div class="options">
          Western Wear <img class="down-arrow" src="images/down arrow.png">
        </div>
        <div class="options">
          Bags <img class="down-arrow" src="images/down arrow.png">
        </div>
      </div>
  `;

  dropdownWomenButton.addEventListener('click', ()=>{
    document.querySelector('.js-menu-header').innerHTML=dropdownMenuWomenHTML
  })

  const dropdownKidsButton = document.querySelector('.js-dropdown-kids-button')

  dropdownMenuKidsHTML = `
       <div class="menu-header"> 
        <div class="options">
          What's New <img class="down-arrow" src="images/down arrow.png">
        </div>
        <div class="options">
          Indian Wear <img class="down-arrow" src="images/down arrow.png">
        </div>
        <div class="options">
          Western Wear <img class="down-arrow" src="images/down arrow.png">
        </div>
        <div class="options">
          Footwear <img class="down-arrow" src="images/down arrow.png">
        </div>
      </div>
  `;

  dropdownKidsButton.addEventListener('click', ()=>{
    document.querySelector('.js-menu-header').innerHTML=dropdownMenuKidsHTML
  })

