// tối màn hình
const menuIcon = document.getElementById('menu-icon');
const overlay = document.getElementById('overlay');
const mainMenu = document.querySelector('.main-menu');

// Khi nhấn vào menu, hiển thị overlay
menuIcon.addEventListener('mouseover', () => {
    overlay.style.display = 'block'; // Hiển thị nền tối
    mainMenu.style.display = 'block'; // Hiển thị menu
});

// Khi nhấn ra ngoài overlay hoặc menu, ẩn overlay và menu
document.addEventListener('mouseover', (event) => {
    if (!menuIcon.contains(event.target) && !mainMenu.contains(event.target)) {
        overlay.style.display = 'none'; // Ẩn nền tối
        mainMenu.style.display = 'none'; // Ẩn menu
    }
});

var mySwiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  }
});

window.onload = function() {
    var video = document.getElementById("myVideo");
    video.play();
};

var slide1 = new Swiper(".slide11", {
  spaceBetween: 10, // Khoảng cách giữa các ảnh (bạn có thể chỉnh lại số này)
  slidesPerView: 2, // Hiển thị đúng 2 ảnh cùng lúc
  slidesPerGroup: 1, // Chuyển 1 ảnh khi click
  loop: true,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next_1",
    prevEl: ".swiper-button-prev_1",
  },
});

var slide2 = new Swiper(".slide22", {
  spaceBetween: 10, // Khoảng cách giữa các ảnh (bạn có thể chỉnh lại số này)
  slidesPerView: 3, // Hiển thị đúng 2 ảnh cùng lúc
  slidesPerGroup: 1, // Chuyển 1 ảnh khi click
  loop: true,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next_3",
    prevEl: ".swiper-button-prev_3",
  },
});


var SMP_hot = new Swiper(".SMP_hot", {
  spaceBetween: 12,
  slidesPerView: 5,
  slidesPerGroup: 1,
  // loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next_2",
    prevEl: ".swiper-button-prev_2",
  },
  on: {
    slideChange: function () {
      var swiper = this;

      // Nếu đến slide S8 thì quay về S1
      if (swiper.activeIndex === swiper.slides.length - 1) {
        setTimeout(function() {
          swiper.slideTo(0);  // Quay về slide đầu tiên (S1)
        }, 500);  // Đặt thời gian ngắn để tạo cảm giác chuyển mượt
      }
    },
  },
});

var Ipad = new Swiper(".Ipad", {
  spaceBetween: 30,
  slidesPerView: 5,
  slidesPerGroup: 1,
  // loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next_4",
    prevEl: ".swiper-button-prev_4",
  },
  on: {
    slideChange: function () {
      var swiper = this;

      // Nếu đến slide S8 thì quay về S1
      if (swiper.activeIndex === swiper.slides.length - 1) {
        setTimeout(function() {
          swiper.slideTo(0);  // Quay về slide đầu tiên (S1)
        }, 500);  // Đặt thời gian ngắn để tạo cảm giác chuyển mượt
      }
    },
  },
});