$('.loc').hover(
  function() {
    $(this).html("<strong>Location:</strong> Your house?!");
  },
  function() {
    $(this).html("<strong>Location:</strong>Adoption Centre");
  }
);


// Adds a new pet to the page with user input
$('#add-pet').on('click', function() {
  // Grab info from form
  var $name = $('#pet-name');
  var $species = $('#pet-species');
  var $notes = $('#pet-notes');

  // Assemble the HTML of new element with above variables
  var $newPet = $(
    '<section class="six columns"><div class="card"><p><strong>Name:</strong> ' + $name.val() + 
    '</p><p><strong>Species:</strong> ' + $species.val() + 
    '</p><p><strong>Notes:</strong> ' + $notes.val() + 
    '</p><span class="close">x</span></div></section>'
  );

  // Attach new element to page
  $('#posted-pets').append($newPet);
});

// Puppy images fade in
$('img').css('display', 'none').fadeIn(1600);

$('.card').on('click', function() {
  $(this).toggleClass('selected');
});