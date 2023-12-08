function contentLoaded() {
  const main = document.getElementById("main");
  const loader = document.querySelector("#loader");
  const loadingBar = document.querySelector('.loading_bar');

  var timeOut = setTimeout(()=>{
    main.classList.remove("visually-hidden");
    loader.classList.add("visually-hidden");
    main.classList.add("show");
    toastMessage();
  },7000); //If the content is not loaded this will executed after 7sec

  window.addEventListener("load", function() {
    main.classList.remove("visually-hidden");
    loader.classList.add("visually-hidden");
    main.classList.add("show");
    loadingBar.classList.add('fade');
    clearTimeout(timeOut);
    $(document).ready(function () {
      function handleAnimationAndVisibility() {
        const animatedContainers = $('.animated-instance');
        animatedContainers.each(function () {
          const container = $(this);
            container.animate({marginTop: '0'}, 1000);
        });
      }
      $(window).on('scroll', handleAnimationAndVisibility);
      handleAnimationAndVisibility();
    });
  });
}
contentLoaded();

function toastMessage(){
  const toastMessage = document.querySelector(".toastMessage");
  const paragraph = document.createElement('p');
  paragraph.textContent = "Some content may load later";
  toastMessage.appendChild(paragraph);
  setTimeout(()=>{
    toastMessage.classList.add("fade-effect", "visually-hidden");
  },3000)
}

$(document).ready(function () {
  function handleAnimationAndVisibility() {
    const animatedContainers = $('.animated-loading');
    animatedContainers.each(function () {
      const container = $(this);
      const containerTop = container.offset().top;
      const windowHeight = $(window).height();
      const scrollPosition = $(window).scrollTop();
      const adjustment = 100;
      if (containerTop < scrollPosition + windowHeight - adjustment) {
        console.log("done");
        container.animate({marginTop: '0'}, 1000);
      }  
    });
  }
  $(window).on('scroll', handleAnimationAndVisibility);
  handleAnimationAndVisibility();
});

function showToast(text, message){
  new bootstrap.Toast(document.querySelector('#basicToast')).show();
  $('.toast-heading').text(text);
  $('.toast-message').text(message);
}


$('.footer_subscribe_button').on('click', function () {
  const apiUrl = 'https://youtubeapi.agricreations.com/?email';
  function storeEmail(email) {
      $.ajax({
          url: apiUrl,
          type: 'POST', // Use 'POST' if you are sending data to the server
          data: { email: email },
          success: function (response) {
            const responseObject = JSON.parse(response);
              console.log(response);
              showToast(responseObject.status, responseObject.message);
          },
          error: function (error) {
              console.error('Error:', error);
          }
      });
  }
  const userEmail = $('.footer_subscribe_email_input_value').val();
  storeEmail(userEmail);
});

