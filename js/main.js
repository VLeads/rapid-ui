/*  *********  Modal ******* */

let modal = document.querySelector("#myModal");

let modalOpen = document.querySelector("#modalOpen");

let modalClose = document.querySelector("#modalClose");

modalOpen.addEventListener("click", function () {
  modal.style.display = "block";
});

modalClose.addEventListener("click", function () {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

/*  ****** Toast ***** */

let toastShow = document.querySelector("#toastShow");
let myToast = document.querySelector("#toast");
let toastClose = document.querySelector("#toastClose");

toastShow.addEventListener("click", function () {
  myToast.classList.add("toast-show");
  myToast.classList.remove("toast-hide");

  setTimeout(function () {
    myToast.classList.remove("toast-show");
    myToast.classList.add("toast-hide");
  }, 8000);
});

toastClose.addEventListener("click", () => {
  myToast.classList.remove("toast-show");
  myToast.classList.add("toast-hide");
});
