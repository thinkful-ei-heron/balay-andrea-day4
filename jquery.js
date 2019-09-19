
'use strict';

function handleCatClicks() {
  $('.thumbnail').on('click', event => {
    //console.log(event.target);
    const targetCat = $(event.currentTarget).find('img').attr('src');
    const otherCats = $(event.currentTarget).find('img').attr('alt');
    
    $('.hero img').attr('src', targetCat).attr('alt', otherCats);
    
  });
}
    
$(handleCatClicks);