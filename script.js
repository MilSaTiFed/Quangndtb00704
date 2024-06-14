let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
    setInterval(function() {
        changeSlide(1);
}, 3000);

document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value.trim().toLowerCase();
    if (query) {
        alert('Bạn đã tìm kiếm: ' + query); 
    } else {
        alert('Vui lòng nhập từ khóa tìm kiếm');
    }
});
$('.btn_nav').click(function() {

    $('.page__style').addClass('animate_content');
    $('.page__description').fadeOut(100).delay(2800).fadeIn();
  
    setTimeout(function() {
      $('.page__style').removeClass('animate_content');
    }, 3200);
  
    setTimeout(function() {
      $('.page__style').removeClass('fadeIn');
    }, 1500);
  
  });
  
  $('.home_link').click(function() {
    setTimeout(function() {
      $('.home').addClass('fadeIn');
    }, 1500);
  });
  
  $('.projects_link').click(function() {
    setTimeout(function() {
      $('.projects').addClass('fadeIn');
    }, 1500);
  });
  
  $('.skills_link').click(function() {
    setTimeout(function() {
      $('.skills').addClass('fadeIn');
    }, 1500);
  });
  
  $('.about_link').click(function() {
    setTimeout(function() {
      $('.about').addClass('fadeIn');
    }, 1500);
  });
  
  $('.contact_link').click(function() {
    setTimeout(function() {
      $('.contact').addClass('fadeIn');
    }, 1500);
  });

  document.getElementById('center-search-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const query = document.getElementById('center-search-input').value.trim();
    if (query) {
        addSearchHistory(query);
        alert('Bạn đã tìm kiếm: ' + query); 
        document.getElementById('center-search-input').value = ''; 
    } else {
        alert('Vui lòng nhập từ khóa tìm kiếm');
    }
});

function addSearchHistory(query) {
    const historyList = document.getElementById('history-list');
    const listItem = document.createElement('li');
    listItem.textContent = query;
    historyList.appendChild(listItem);
}
