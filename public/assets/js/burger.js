$(function() {

$(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newBurger = {
      name: $("#burgerName").val().trim(),
    };
    console.log(newBurger);
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("Burger successfully created");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  
$(".devouredBurger").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("about to devour");
    const devouredBurger = {
      id: $(this).attr("data-id")
    };
    console.log(devouredBurger);
    // Send the POST request.
    $.ajax("/api/burgers/" + devouredBurger.id, {
      type: "PUT",
      data: devouredBurger
    }).then(
      function() {
        console.log("Burger successfully created");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});