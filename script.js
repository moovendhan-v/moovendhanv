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
  });
}
contentLoaded()

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
  let lastScrollTop = 0;

  function handleAnimationAndVisibility() {
    const animatedContainers = $('.animated-loading');
    animatedContainers.each(function () {
      const container = $(this);
      const containerTop = container.offset().top;
      const windowHeight = $(window).height();
      const scrollPosition = $(window).scrollTop();
      // const adjustment = 100;
      const scrollDirection = scrollPosition > lastScrollTop ? 'down' : 'up';

      if (containerTop < scrollPosition + windowHeight) {
        console.log("done");

        // Adjust marginTop based on scroll direction
        const newMarginTop = scrollDirection === 'down' ? 0 : '200px';

        container.stop().animate({
          marginTop: newMarginTop
        }, 1000);
      }
    });

    // Update lastScrollTop after processing the current scroll position
    lastScrollTop = scrollPosition;
  }

  $(window).on('scroll', handleAnimationAndVisibility);
  handleAnimationAndVisibility();
});