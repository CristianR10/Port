const target   = document.querySelectorAll('.animation_e');
const target_R = document.querySelectorAll('.animation_d');
/***************************************************Animação do lado Esquerdo******************************************************/
const debounce = function(func, wait, immediate) {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

function animeScroll(){
	//console.log("asdfasd");
	const windowTop = window.pageYOffset + ((window.innerHeight * 3 /6));
	//console.log(windowTop);
	target.forEach(function(element){
	console.log(element.offsetTop);
		if ((windowTop) > element.offsetTop) {
			element.classList.add('animated','slideInLeft');
		} else {
			element.classList.remove('animated','slideInLeft');
		}
	}) //ver cada elemento
}

animeScroll();
if (target.length) {
	window.addEventListener('scroll', debounce(function(){
		animeScroll();
	}, 300));
}

/***************************************************Animação do lado direito******************************************************/
function animeScroll_R(){
	//console.log("asdfasd");
	const windowTop = window.pageYOffset + ((window.innerHeight * 3 /6));;
	//console.log(windowTop);
	target_R.forEach(function(element_r){
	console.log(element_r.offsetTop);
		if ((windowTop) > element_r.offsetTop) {
			element_r.classList.add('animated','slideInRight');
		} else {
			element_r.classList.remove('animated','slideInRight');
		}
	}) //ver cada elemento
}

animeScroll_R();
if (target_R.length) {
	window.addEventListener('scroll', debounce(function(){
		animeScroll_R();
	}, 300));
}
/*******************************************************************fim*************************************************************/
