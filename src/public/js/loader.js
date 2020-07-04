window.addEventListener("load", function(){
    document.getElementById("genLoader").classList.toggle("genLoader2");
});

// Carousel Auto-Cycle
  $(document).ready(function() {
    $('.carousel').carousel({
      interval: 6000
    })
  });