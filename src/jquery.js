window.jQuery = function(selectorOrArray){
    let elements;
    if(typeof selectorOrArray === 'string'){
    elements = document.querySelectorAll(selectorOrArray);
      } else if(selectorOrArray instanceof Array) {
        elements = selectorOrArray;
      }
    
    return {
      addClass(className){
        for(i=0; i<elements.length; i++) {
          elements[i].classList.add(className);
        }
        return this;
      },
      find(selector){
        console.log('1');
        let array = [];
          for(i=0; i<elements.length; i++) {
         array.push(...elements[i].querySelectorAll(selector))
        }
        return jQuery(array);
      }
    }
  };
  
  window.$ = window.jQuery;
  
  $('#test').find('.child').addClass('red'); // 请确保这句话成功执行