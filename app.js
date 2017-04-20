$('.loc').hover(
  function() {
    $(this).html("<strong>Location:</strong> Your house?!");
  },
  function() {
    $(this).html("<strong>Location:</strong>Adoption Centre");
  }
);