function contentLoaded(){

    const main = document.getElementById("main");
    const loader = document.querySelector('#loader');


    document.addEventListener("DOMContentLoaded",()=>{
     
        main.classList.remove('visually-hidden');
      loader.classList.add('visually-hidden');
      main.classList.add("show");
    })
 }
             contentLoaded();