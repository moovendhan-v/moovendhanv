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
