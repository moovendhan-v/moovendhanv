function contentLoaded() {
  const main = document.getElementById("main");
  const loader = document.querySelector("#loader");

  document.addEventListener("DOMContentLoaded", () => {
    main.classList.remove("visually-hidden");
    loader.classList.add("visually-hidden");
    main.classList.add("show");
  });
}
contentLoaded();

  
//Creating div element for slider

// const insertSlide = document.getElementById('insertSlide');

// const caroselItems =document.createElement('div');
// caroselItems.classList.add("carousel-item", "active");
// const colMd3 =document.createElement('div');
// colMd3.classList.add("col-md-3");
// const cardBody =document.createElement('div');
// cardBody.classList.add("card", "card-body");
// const slideImg =  document.createElement("img");
// slideImg.setAttribute("src", "https://via.placeholder.com/640x360?text=8");

// cardBody.append(slideImg);
// colMd3.append(cardBody);
// caroselItems.append(colMd3);

// insertSlide.appendChild(caroselItems);
// console.log("completed");
//    <div class="carousel-item active">
//    <div class="col-md-3">
//      <div class="card card-body">
//        <img
//          class="img-fluid"
//          src="https://via.placeholder.com/640x360?text=1"
//        />
//      </div>
//    </div>
//  </div>

// Creating div content for slider youtube videos

// const caroselItem = $("<div>").addClass("carousel-item active");
// const colMd3 = $("<div>").addClass("col-md-3");
// const cardBody = $("<div>").addClass("card card-body");
// const img = $("img").addClass("img-fluid").attr("src", "#");

// cardBody.append(Image);
// colMd3.append(cardBody);
// caroselItem.append(colMd3);

// caroselItem.appendTO("#insert");
