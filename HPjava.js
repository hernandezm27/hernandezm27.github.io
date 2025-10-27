
$(document).ready(function() {

  //Quiz answers
  const answers = ["Gryffindor", "Dumbledore", "Hedwig"];


  //Submit quiz
  $("#submitQuiz").click(function() {
    let score = 0;
    for (let i = 0; i < answers.length; i++) {
      const q = $(`input[name="q${i+1}"]:checked`).val();
      if (q === answers[i]) score++;
    }

    $("#results").removeClass("hidden").hide().fadeIn(500);
    $("#score").text(`You scored ${score} out of ${answers.length}.`);
    let msg = (score === answers.length)
      ? "Brilliant! You’re a true wizard!"
      : (score > 1)
        ? "Good job! But you can do even better."
        : "Try again, Muggle!";
    $("#message").text(msg);
  });


  //Reset quiz
  $("#resetQuiz").click(function() {
    $("#quizForm")[0].reset();
    $("#results").fadeOut(300);
  });


  //Toggle extra info
  $("#toggleExtra").click(function() {
    $("#extraContent").slideToggle();
  });

  //Generate spell table
  const spells = [
    ["1", "Expelliarmus", "Disarm opponent"],
    ["2", "Lumos", "Light wand tip"],
    ["3", "Alohomora", "Unlock doors"],
    ["4", "Wingardium Leviosa", "Levitate objects"],
    ["5", "Expecto Patronum", "Summon Patronus"]
  ];

  for (let i = 0; i < spells.length; i++) {
    $("#spellsTable tbody").append(`<tr><td>${spells[i][0]}</td><td>${spells[i][1]}</td><td>${spells[i][2]}</td></tr>`);
  }

  //Reveal more spells
  $("#revealSpellBtn").click(function() {
    $("#moreSpells").slideToggle(600);
  });

  //Newsletter form validation
  $("#signupForm").submit(function(e) {
    e.preventDefault();
    const name = $("#name").val().trim();
    const email = $("#email").val().trim();

    if (!name || !email) {
      alert("Please fill out both your name and email!");
      return;
    }

    alert(`Thanks for signing up, ${name}! Watch your inbox for magical updates.`);
    $(this)[0].reset();
  });

  //Back to top
  $("#backToTop").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
});
