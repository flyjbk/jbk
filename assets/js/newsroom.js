;(function () {
    'use strict'
  
    const get = (target) => {
      return document.querySelector(target)
    }
  
    const searchButton = get('.newsroom-search-icon')
    const searchArea = get('.newsroom-search-area')
  
    searchButton.addEventListener('click', () => {
         searchArea.classList.toggle('hidden')
    })
  })()