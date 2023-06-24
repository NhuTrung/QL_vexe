function toggleAccordion(button) {
  var detailInfo = button.closest('.route_item').querySelector('.detail_info_from');
  detailInfo.classList.toggle('active');
  
  var arrowIcon = button.querySelector('.arrow-icon');
  arrowIcon.classList.toggle('flipped');
}
function Accordion(btn){
  var accordion = btn.closest('.route_item').querySelector('.nl_booking_container');
    accordion.classList.toggle('active');


}
// slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
// 
const image = document.querySelector(".image")
const utilities  = document.querySelector(".utilities")
const pickup_point  = document.querySelector(".pickup_point")
if(image){
  image.addEventListener("click",function(){
      document.querySelector(".slideshow-container").style.display = "block"
      document.querySelector(".utilites_wrapper").style.display = "none"
      document.querySelector(".pickup_point_wrapper").style.display = "none"
      

  })
}
if(utilities){
  utilities.addEventListener("click",function(){
      document.querySelector(".slideshow-container").style.display = "none"
      document.querySelector(".utilites_wrapper").style.display = "block"
      document.querySelector(".pickup_point_wrapper").style.display = "none"
  })
}
if(pickup_point){
  pickup_point.addEventListener("click",function(){
      document.querySelector(".slideshow-container").style.display = "none"
      document.querySelector(".utilites_wrapper").style.display = "none"
      document.querySelector(".pickup_point_wrapper").style.display = "block"
      

  })
}




// 
var seats = document.querySelectorAll(".seat");
var selectedSeatsElement = document.getElementById("selected-seats");
var totalPriceElement = document.getElementById("total-price");
var continueBtn = document.getElementById("continue-btn");
var infoForm = document.getElementById("info-form");
var destinationForm = document.getElementById("destination-form");
var registerBtn = document.getElementById("register-btn");
var gr = document.getElementById("gr");
var maxSeats = 4;
var selectedSeatsCount = 0;

function updateSelectedSeats() {
  var selectedSeats = document.querySelectorAll(".seat.selected");
  var seatNumbers = Array.from(selectedSeats).map(function(seat) {
    return seat.dataset.id;
  });
  
  selectedSeatsElement.innerHTML = "Ghế đã chọn: " + seatNumbers.join(", ");
}

function updateTotalPrice() {
  var selectedSeats = document.querySelectorAll(".seat.selected");
  var totalPrice = Array.from(selectedSeats).reduce(function(total, seat) {
    return total + parseInt(seat.dataset.price);
  }, 0);
  
  totalPriceElement.innerHTML = "Tổng tiền: " + totalPrice + " đ";
}

function seatClickHandler() {
  if (this.classList.contains("selected")) {
    // Ghế đã chọn trước đó, hủy chọn
    this.classList.remove("selected");
    selectedSeatsCount--;
  } else if (selectedSeatsCount < maxSeats) {
    // Ghế chưa được chọn, chọn ghế mới nếu chưa đạt giới hạn
    this.classList.add("selected");
    selectedSeatsCount++;
  } else {
    // Đã đạt giới hạn số ghế chọn
    alert("Bạn chỉ được chọn tối đa " + maxSeats + " ghế.");
  }
  
  updateSelectedSeats();
  updateTotalPrice();
}

seats.forEach(function(seat) {
  seat.addEventListener("click", seatClickHandler);
});

continueBtn.addEventListener("click", function() {
  if (selectedSeatsElement.innerHTML === "") {
    // No seats selected yet, show seat selection
    document.getElementById("seat-map").style.display = "block";
    infoForm.style.display = "none";
    destinationForm.style.display = "none";
  } else if (infoForm.style.display === "none") {
    // Seats selected, show info form
    document.getElementById("seat-map").style.display = "none";
    infoForm.style.display = "block";
    destinationForm.style.display = "none";
    continueBtn.textContent = "Tiếp Tục";
  } else if (destinationForm.style.display === "none") {
    // Information entered, show destination form
    infoForm.style.display = "none";
    destinationForm.style.display = "block";
    gr.style.display="none"
  }
});
var infoFormSubmit = document.querySelector("#info-form form");
infoFormSubmit.addEventListener("submit", function(event) {
  event.preventDefault();

  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var phoneInput = document.getElementById("phone");
  
  // Lấy thông tin từ người dùng
  var name = nameInput.value;
  var email = emailInput.value;
  var phone = phoneInput.value;
  
  // Tiến hành xử lý đặt vé và thanh toán với thông tin đã nhập
  // ...
});
var backBtns = document.querySelectorAll("#back-btn");
backBtns.forEach(function(btn) {
  btn.addEventListener("click", function() {
    if (destinationForm.style.display === "block") {
      // Go back to info form
      destinationForm.style.display = "none";
      infoForm.style.display = "block";
      gr.style.display = "block";
    } else if (infoForm.style.display === "block") {
      // Go back to seat selection
      infoForm.style.display = "none";
      document.getElementById("seat-map").style.display = "block";
      continueBtn.textContent = "Tiếp tục";
    }
  });
});
var backButton = document.querySelector(".destination-form #back-btn");

backButton.addEventListener("click", function(event) {
  event.preventDefault(); 

  infoForm.style.display = "block";
  destinationForm.style.display = "none";
  gr.style.display = "block";
});


updateSelectedSeats();
updateTotalPrice();
