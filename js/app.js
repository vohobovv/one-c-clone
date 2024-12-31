var swiper = new Swiper('.mySwiper', {
	slidesPerView: 1,
	spaceBetween: 30,
	navigation: {
		nextEl: '.popular-swiper-button-next',
		prevEl: '.popular-swiper-button-prev',
	},
	breakpoints: {
		768: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
})

var swiper = new Swiper('.mySwiperBrand', {
	slidesPerView: 3,
	spaceBetween: 20,
	navigation: {
		nextEl: '.popular-swiper-button-next',
		prevEl: '.popular-swiper-button-prev',
	},
	breakpoints: {
		768: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		1024: {
			slidesPerView: 6,
			spaceBetween: 30,
		},
	},
})

let btn = document.querySelectorAll('#faqBtn')
let faqContainer = document.querySelectorAll('#faqContainer')
let faqTop = document.querySelectorAll('#faqTop')

btn.forEach(function (item, index) {
	item.addEventListener('click', function () {
		faqContainer[index].classList.toggle('hidden')
		faqTop[index].classList.toggle('pb-0')
		faqTop[index].classList.toggle('pb-5')
		item.classList.toggle('rotate-0')
	})
})

AOS.init()

if (document.querySelector('#formOpenBtn')) {
    let formBtn = document.querySelector('#formCloseBtn');
    let formOpenBtn = document.querySelector('#formOpenBtn');
    let formBox = document.querySelector('#formBox');
    let formBoxOutLine = document.querySelector('#formBox > div');
  
    if (localStorage.getItem('isRegister') === 'true') {
      console.log('User is already registered, not showing the form.');
      formBox.classList.add('hidden');
    } else {
      formBox.classList.add('hidden');
    }
  
    formBtn.addEventListener('click', function () {
      formBox.classList.add('hidden');
    });
  
    formBoxOutLine.addEventListener('click', function () {
      formBox.classList.add('hidden');
    });
  
    formOpenBtn.addEventListener('click', function () {
      formBox.classList.remove('hidden');
    });

    document.querySelector('#registerBtn')?.addEventListener('click', function () {
      localStorage.setItem('isRegister', 'true'); 
      formBox.classList.add('hidden');
      console.log('User registered successfully!');
    });
  } else {
    console.log("Elements not found!");
  }
