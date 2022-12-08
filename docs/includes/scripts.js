/* Global Price */
var price;

/* This function redirects user to game package page based on their selection after they submit */
function submitForm(event, platform, type, genre) {
  event.preventDefault();
  var request;
  var mature;
  if ($("#flexRadioMatureYes").is(':checked')) {
    mature = true;
  }
  else if ($("#flexRadioMatureNo").is(':checked')) {
    mature = false;
  }
  else {
    alert("An option must be selected.");
    return false;
  }

  if (platform == "PS4" && genre == "sports") {
    window.location.href = "gamePack.html?packid=1";
  }
  else if (platform == "XboxOne" && genre == "sports") {
    window.location.href = "gamePack.html?packid=2";
  }
  else if (platform == "PC" && genre == "sports") {
    window.location.href = "gamePack.html?packid=3";
  }
  else if (platform == "PS4" && type == "singleplayer" && genre == "action" && mature == false) {
    window.location.href = "gamePack.html?packid=4";
  }
  else if (platform == "XboxOne" && type == "singleplayer" && genre == "action" && mature == false) {
    window.location.href = "gamePack.html?packid=5";
  }
  else if (platform == "PC" && type == "singleplayer" && genre == "action" && mature == false) {
    window.location.href = "gamePack.html?packid=6";
  }
  else if (platform == "PS4" && type == "singleplayer" && genre == "action" && mature == true) {
    window.location.href = "gamePack.html?packid=7";
  }
  else if (platform == "XboxOne" && type == "singleplayer" && genre == "action" && mature == true) {
    window.location.href = "gamePack.html?packid=8";
  }
  else if (platform == "PC" && type == "singleplayer" && genre == "action" && mature == true) {
    window.location.href = "gamePack.html?packid=9";
  }
  else if (platform == "PS4" && type == "multiplayer" && genre == "action" && mature == false) {
    window.location.href = "gamePack.html?packid=10";
  }
  else if (platform == "XboxOne" && type == "multiplayer" && genre == "action" && mature == false) {
    window.location.href = "gamePack.html?packid=11";
  }
  else if (platform == "PC" && type == "multiplayer" && genre == "action" && mature == false) {
    window.location.href = "gamePack.html?packid=12";
  }
  else if (platform == "PS4" && type == "multiplayer" && genre == "action" && mature == true) {
    window.location.href = "gamePack.html?packid=13";
  }
  else if (platform == "XboxOne" && type == "multiplayer" && genre == "action" && mature == true) {
    window.location.href = "gamePack.html?packid=14";
  }
  else if (platform == "PC" && type == "multiplayer" && genre == "action" && mature == true) {
    window.location.href = "gamePack.html?packid=15";
  }
  else if (platform == "PS4" && type == "singleplayer" && genre == "indie" && mature == false) {
    window.location.href = "gamePack.html?packid=16";
  }
  else if (platform == "XboxOne" && type == "singleplayer" && genre == "indie" && mature == false) {
    window.location.href = "gamePack.html?packid=17";
  }
  else if (platform == "PC" && type == "singleplayer" && genre == "indie" && mature == false) {
    window.location.href = "gamePack.html?packid=18";
  }
  else if (platform == "PS4" && type == "singleplayer" && genre == "indie" && mature == true) {
    window.location.href = "gamePack.html?packid=19";
  }
  else if (platform == "XboxOne" && type == "singleplayer" && genre == "indie" && mature == true) {
    window.location.href = "gamePack.html?packid=20";
  }
  else if (platform == "PC" && type == "singleplayer" && genre == "indie" && mature == true) {
    window.location.href = "gamePack.html?packid=21";
  }
  else if (platform == "PS4" && type == "multiplayer" && genre == "indie" && mature == false) {
    window.location.href = "gamePack.html?packid=22";
  }
  else if (platform == "XboxOne" && type == "multiplayer" && genre == "indie" && mature == false) {
    window.location.href = "gamePack.html?packid=23";
  }
  else if (platform == "PC" && type == "multiplayer" && genre == "indie" && mature == false) {
    window.location.href = "gamePack.html?packid=24";
  }
  else if (platform == "PS4" && type == "multiplayer" && genre == "indie" && mature == true) {
    window.location.href = "gamePack.html?packid=25";
  }
  else if (platform == "XboxOne" && type == "multiplayer" && genre == "indie" && mature == true) {
    window.location.href = "gamePack.html?packid=26";
  }
  else if (platform == "PC" && type == "multiplayer" && genre == "indie" && mature == true) {
    window.location.href = "gamePack.html?packid=27";
  }
}

/* Gets Pack Name */
function getPackName(packID) {
  var packName;
  if (packID == 1) {
    packName = "Sports Pack (PS4)";
  }
  else if (packID == 2) {
    packName = "Sports Pack (Xbox One)";
  }
  else if (packID == 3) {
    packName = "Sports Pack (PC)";
  }
  else if (packID == 4) {
    packName = "Action Pack (PS4 | Singleplayer)";
  }
  else if (packID == 5) {
    packName = "Action Pack (Xbox One | Singleplayer)";
  }
  else if (packID == 6) {
    packName = "Action Pack (PC | Singleplayer)";
  }
  else if (packID == 7) {
    packName = "Action Pack (PS4 | Singleplayer | Mature)";
  }
  else if (packID == 8) {
    packName = "Action Pack (Xbox One | Singleplayer | Mature)";
  }
  else if (packID == 9) {
    packName = "Action Pack (PC | Singleplayer | Mature)";
  }
  else if (packID == 10) {
    packName = "Action Pack (PS4 | Multiplayer)";
  }
  else if (packID == 11) {
    packName = "Action Pack (Xbox One | Multiplayer)";
  }
  else if (packID == 12) {
    packName = "Action Pack (PC | Multiplayer)";
  }
  else if (packID == 13) {
    packName = "Action Pack (PS4 | Multiplayer | Mature)";
  }
  else if (packID == 14) {
    packName = "Action Pack (Xbox One | Multiplayer | Mature)";
  }
  else if (packID == 15) {
    packName = "Action Pack (PC | Multiplayer | Mature)";
  }
  else if (packID == 16) {
    packName = "Indie Pack (PS4 | Singleplayer)";
  }
  else if (packID == 17) {
    packName = "Indie Pack (Xbox One | Singleplayer)";
  }
  else if (packID == 18) {
    packName = "Indie Pack (PC | Singleplayer)";
  }
  else if (packID == 19) {
    packName = "Indie Pack (PS4 | Singleplayer | Mature)";
  }
  else if (packID == 20) {
    packName = "Indie Pack (Xbox One | Singleplayer | Mature)";
  }
  else if (packID == 21) {
    packName = "Indie Pack (PC | Singleplayer | Mature)";
  }
  else if (packID == 22) {
    packName = "Indie Pack (PS4 | Multiplayer)";
  }
  else if (packID == 23) {
    packName = "Indie Pack (Xbox One | Multiplayer)";
  }
  else if (packID == 24) {
    packName = "Indie Pack (PC | Multiplayer)";
  }
  else if (packID == 25) {
    packName = "Indie Pack (PS4 | Multiplayer | Mature)";
  }
  else if (packID == 26) {
    packName = "Indie Pack (Xbox One | Multiplayer | Mature)";
  }
  else if (packID == 27) {
    packName = "Indie Pack (PC | Multiplayer | Mature)";
  }
  else {
	return "N/A";
  }
  return packName;
}

/* This function gets game attributes for games in package from RAWG API */
function getGames(packID) {
  var search1, search2, search3, request, gameImg, gameRating1, gameRating2, gameRating3, gameRelease, gameMetacritic;
  var i = 0;
  var j = 0;
  var k = 0;
  var esrbRatingPredefined1 = false;
  var esrbRatingPredefined2 = false;
  var esrbRatingPredefined3 = false;
  // Sports Pack (PS4)
  if (packID == 1) {
    search1 = "mlb-the-show-20";
    search2 = "nba-2k21";
    search3 = "madden-nfl-21";
    i = 3;
    j = 1;
  }
  // Sports Pack (Xbox One)
  else if (packID == 2) {
    search1 = "nhl-21";
    search2 = "nba-2k21";
    search3 = "madden-nfl-21";
    j = 1;
  }
  // Sports Pack (PC)
  else if (packID == 3) {
    search1 = "nba-2k21";
    search2 = "madden-nfl-21";
    search3 = "fifa-21";
    esrbRatingPredefined3 = true;
    gameRating3 = "Everyone";
    i = 1;
  }
  // Action Pack (PS4 | Singleplayer)
  else if (packID == 4) {
    search1 = "spider-man-miles-morales";
    search2 = "lego-marvel-super-heroes";
    search3 = "star-wars-jedi-fallen-order";
    esrbRatingPredefined2 = true;
    gameRating2 = "Everyone 10+";
  }
  // Action Pack (Xbox One | Singleplayer)
  else if (packID == 5) {
    search1 = "star-wars-jedi-fallen-order";
    search2 = "lego-batman-3-beyond-gotham";
    search3 = "geometry-wars-3";
    esrbRatingPredefined2 = true;
    gameRating2 = "Everyone 10+";
  }
  // Action Pack (PC | Singleplayer)
  else if (packID == 6) {
    search1 = "monster-hunter-world";
    search2 = "lego-marvel-super-heroes";
    search3 = "star-wars-jedi-fallen-order";
    esrbRatingPredefined2 = true;
    gameRating2 = "Everyone 10+";
  }
  // Action Pack (PS4 | Singleplayer | Mature)
  else if (packID == 7) {
    search1 = "days-gone";
    search2 = "death-stranding";
    search3 = "ghost-of-tsushima";
    i = 1;
    esrbRatingPredefined3 = true;
    gameRating3 = "Mature";
  }
  // Action Pack (Xbox One | Singleplayer | Mature)
  else if (packID == 8) {
    search1 = "dark-souls-iii";
    search2 = "middle-earth-shadow-of-war";
    search3 = "grand-theft-auto-v";
    i = 3;
    esrbRatingPredefined1 = true;
    gameRating1 = "Mature";
  }
  // Action Pack (PC | Singleplayer | Mature)
  else if (packID == 9) {
    search1 = "batman-arkham-knight";
    search2 = "grand-theft-auto-v";
    search3 = "half-life-2";
  }
  // Action Pack (PS4, Xbox One, PC | Multiplayer)
  else if (packID == 10 || packID == 11 || packID == 12) {
    search1 = "star-wars-battlefront-ii";
    search2 = "apex-legends";
    search3 = "fortnite-battle-royale";
    i = 1;
    esrbRatingPredefined1 = true;
    gameRating1 = "Teen";
  }
  // Action Pack (PS4, Xbox One, PC | Multiplayer | Mature)
  else if (packID == 13 || packID == 14 || packID == 15) {
    search1 = "grand-theft-auto-online";
    search2 = "cyberpunk-2077";
    search3 = "red-dead-online";
    esrbRatingPredefined1 = true;
    gameRating1 = "Mature";
	esrbRatingPredefined2 = true;
    gameRating2 = "Mature";
  }
  // Indie Pack (PS4 | Singleplayer)
  else if (packID == 16) {
    search1 = "dead-cells";
    search2 = "hyper-light-drifter";
    search3 = "shovel-knight-treasure-trove";
    esrbRatingPredefined2 = true;
    gameRating2 = "Teen";
  }
  // Indie Pack (Xbox One | Singleplayer)
  else if (packID == 17) {
    search1 = "dead-cells";
    search2 = "hyper-light-drifter";
    search3 = "oxenfree";
    esrbRatingPredefined2 = true;
    gameRating2 = "Teen";
  }
  // Indie Pack (PC | Singleplayer)
  else if (packID == 18) {
    search1 = "dead-cells";
    search2 = "oxenfree";
    search3 = "stardew-valley";
  }
  // Indie Pack (PS4, Xbox One, PC | Singleplayer | Mature)
  else if (packID == 19 || packID == 20 || packID == 21) {
    search1 = "gone-home";
    search2 = "firewatch";
    search3 = "the-binding-of-isaac-afterbirth";
    i = 1;
    esrbRatingPredefined1 = true;
    gameRating1 = "Mature";
    esrbRatingPredefined3 = true;
    gameRating3 = "Mature";
  }
  // Indie Pack (PS4, Xbox One, PC | Multiplayer)
  else if (packID == 22 || packID == 23 || packID == 24) {
    search1 = "rocket-league";
    search2 = "terraria";
    search3 = "stardew-valley";
  }
  // Indie Pack (PS4, Xbox One, PC | Multiplayer | Mature)
  else if (packID == 25 || packID == 26 || packID == 27) {
    search1 = "divinity-original-sin-2";
    search2 = "a-way-out";
    search3 = "broforce";
    j = 1;
    esrbRatingPredefined1 = true;
    gameRating1 = "Mature";
    esrbRatingPredefined3 = true;
    gameRating3 = "Mature";
  }

  /* Requests to API will get the name of the game, game image, release date, ESRB rating, and Metacritic score */
  request = $.ajax({
    type: 'GET',
    url: 'https://api.rawg.io/api/games?',
    data: {
      key: '98188b8d3dd14a7f9edf6b2bf005a823',
      search: search1
    }
    });
    /* For Game 1 */
    request.done(function(response){
    gameName = response.results[i].name;
    gameImg = response.results[i].background_image;
    if (esrbRatingPredefined1 != true) { // If the ESRB rating is not predefined, then the ESRB rating will be obtained from API
      gameRating1 = response.results[i].esrb_rating.name;
    }
    gameRelease = response.results[i].released;
    if (response.results[i].metacritic != null) { // If the Metacritic score for the game in the API is not provided, it will display as N/A to the user.
      gameMetacritic = response.results[i].metacritic;
    }
    else {
      gameMetacritic = "N/A";
    }
    $("#gameCard1").fadeIn();
    $("#gameImg1").attr("src", gameImg);
    $("#gameTitle1").text(gameName);
    $("#gameRelease1").text("Released: " + gameRelease);
    $("#gameMetacritic1").text("Metacritic score: " + gameMetacritic);
    $("#gameRating1").text("ESRB Rating: " + gameRating1);
  });
  /* For Game 2 */
  request = $.ajax({
    type: 'GET',
    url: 'https://api.rawg.io/api/games?',
    data: {
      key: '98188b8d3dd14a7f9edf6b2bf005a823',
      search: search2
    }
    });
    request.done(function(response){
    gameName = response.results[j].name;
    gameImg = response.results[j].background_image;
    if (esrbRatingPredefined2 != true) {
      gameRating2 = response.results[j].esrb_rating.name;
    }
    gameRelease = response.results[j].released;
    if (response.results[i].metacritic != null) {
      gameMetacritic = response.results[i].metacritic;
    }
    else {
      gameMetacritic = "N/A";
    }
    $("#gameCard2").fadeIn();
    $("#gameImg2").attr("src", gameImg);
    $("#gameTitle2").text(gameName);
    $("#gameRelease2").text("Released: " + gameRelease);
    $("#gameMetacritic2").text("Metacritic score: " + gameMetacritic);
    $("#gameRating2").text("ESRB Rating: " + gameRating2);
  });
  /* For Game 3 */
  request = $.ajax({
    type: 'GET',
    url: 'https://api.rawg.io/api/games?',
    data: {
      key: '98188b8d3dd14a7f9edf6b2bf005a823',
      search: search3
    }
    });
    request.done(function(response){
    gameName = response.results[k].name;
    gameImg = response.results[k].background_image;
    if (esrbRatingPredefined3 != true) {
      gameRating3 = response.results[k].esrb_rating.name;
    }
    gameRelease = response.results[k].released;
    if (response.results[i].metacritic != null) {
      gameMetacritic = response.results[i].metacritic;
    }
    else {
      gameMetacritic = "N/A";
    }
    $("#gameCard3").fadeIn();
    $("#gameImg3").attr("src", gameImg);
    $("#gameTitle3").text(gameName);
    $("#gameRelease3").text("Released: " + gameRelease);
    $("#gameMetacritic3").text("Metacritic score: " + gameMetacritic);
    $("#gameRating3").text("ESRB Rating: " + gameRating3);
  });
}

/* Sets price for each package and raises price by $30 after 25 seconds */
function getPrice(packID) {
  // Sports Pack (PS4)
  if (packID == 1) {
    price = 109.97;
  }
  // Sports Pack (Xbox One) and Sports Pack (PC)
  else if (packID == 2 || packID == 3) {
    price = 179.97;
  }
  // Action Pack (PS4 | Singleplayer) and Action Pack (Xbox One | Singleplayer | Mature)
  else if (packID == 4 || packID == 8) {
    price = 134.97;
  }
  // Action Pack (Xbox One | Singleplayer)
  else if (packID == 5) {
    price = 89.97;
  }
  // Action Pack (PC | Singleplayer)
  else if (packID == 6) {
    price = 84.97;
  }
  // Action Pack (PS4 | Singleplayer | Mature)
  else if (packID == 7) {
    price = 153.47;
  }
  // Action Pack (PC | Singleplayer | Mature)
  else if (packID == 9) {
    price = 41.46;
  }
  // Action Pack (PS4 | Multiplayer) and Action Pack (Xbox One | Multiplayer)
  else if (packID == 10 || packID == 11) {
    price = 0;
  }
  // Action Pack (PC | Multiplayer)
  else if (packID == 12) {
    price = 21.99;
  }
  // Action Pack (PS4 | Multiplayer | Mature)
  else if (packID == 13) {
    price = 118.97;
  }
  // Action Pack (Xbox One | Multiplayer | Mature)
  else if (packID == 14) {
    price = 109.97;
  }
  // Action Pack (PC | Multiplayer | Mature)
  else if (packID == 15) {
    price = 109.96;
  }
  // Indie Pack (PS4 | Singleplayer)
  else if (packID == 16) {
    price = 83.97;
  }
  // Indie Pack (Xbox One | Singleplayer)
  else if (packID == 17) {
    price = 27.77;
  }
  // Indie Pack (PC | Singleplayer)
  else if (packID == 18) {
    price = 28.47;
  }
  // Indie Pack (PS4 | Singleplayer | Mature)
  else if (packID == 19) {
    price = 31.97;
  }
  // Indie Pack (Xbox One | Singleplayer | Mature)
  else if (packID == 20) {
    price = 15.97;
  }
  // Indie Pack (PC | Singleplayer | Mature)
  else if (packID == 21) {
    price = 28.95;
  }
  // Indie Pack (PS4 | Multiplayer)
  else if (packID == 22) {
    price = 16.98;
  }
  // Indie Pack (Xbox One | Multiplayer)
  else if (packID == 23) {
    price = 4.98;
  }
  // Indie Pack (PC | Multiplayer)
  else if (packID == 24) {
    price = 0;
  }
  // Indie Pack (PS4 | Multiplayer | Mature)
  else if (packID == 25) {
    price = 109.97;
  }
  // Indie Pack (Xbox One | Multiplayer | Mature)
  else if (packID == 26) {
    price = 95.97;
  }
  // Indie Pack (PC | Multiplayer | Mature)
  else if (packID == 27) {
    price = 81.97;
  }
  $("#price").text("Get all three games in this pack for $" + price + ".");
  // Timer - After 25 seconds, price will increase by $30    
  var counter = 26;
  var interval = setInterval(function() {
  counter--;
  $("#timerHeading").text("Order in the next 25 seconds and save $30! Regular price: $" + (price+30.00).toFixed(2) + ".");
  $("#timer").text(counter + " seconds left!");
  if (counter == 0) {
    price = price + 30.00;
    $("#price").text("Get all three games in this pack for $" + price.toFixed(2));
    $("#timerHeading").text("Sorry, you missed a great deal!");
    clearInterval(interval);
  }
  }, 1000);
}

/* Collects email from user and confirms order */
function submitSale(event, packID) {
  event.preventDefault();
  var packName = getPackName(packID);
  var email = $("#saleEmail").val();
  
  /* User Email Validation */
  if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
    $("#gameCards").hide();
    $("#gamePrice").hide();
    $("#timerContainer").hide();
    $("#saleForm").hide();
    $("#saleConfirm").text("Thank you " + email + " for ordering the " + packName + " at $" + price.toFixed(2) + ".");
    $("#saleFinal").fadeIn();
  }
  else { // If validation fails
    alert("Please enter a valid email address.");
    return false;
  }
}

function saleFunnel() {
  var platform;
  var type;
  var genre;
  var mature;
  var qCount = 0;
  $(function() {
  $("#quiz").submit(function(event){
    submitForm(event, platform, type, genre);
  });
  $("#q2").hide();
  $("#q3").hide();
  $("#q4").hide();
  $("#prev").hide();
  $("#submitButton").hide();
  $( "#next" ).click(function() {
    if (qCount < 3) {
      qCount++;
    }
    if (qCount == 1) {
      if ($("#flexRadioPS4").is(':checked')) {
        platform = "PS4";
      }
      else if ($("#flexRadioXboxOne").is(':checked')) {
        platform = "XboxOne";
      }
      else if ($("#flexRadioPC").is(':checked')) {
        platform = "PC";
      }
      else {
        alert("An option must be selected.");
        qCount--;
        return false;
      }
      $("#q1").hide();
      $("#q2").fadeIn();
      $("#prev").fadeIn();
    }
    if (qCount == 2) {
      if ($("#flexRadioSingleplay").is(':checked')) {
        type = "singleplayer";
      }
      else if ($("#flexRadioMultiplay").is(':checked')) {
        type = "multiplayer";
      }
      else {
        alert("An option must be selected.");
        qCount--;
        return false;
      }
      $("#q2").hide();
      $("#q3").fadeIn();
    }
    if (qCount == 3) {
      if ($("#flexRadioAction").is(':checked')) {
        genre = "action";
      }
      else if ($("#flexRadioIndie").is(':checked')) {
        genre = "indie";
      }
      else if ($("#flexRadioSports").is(':checked')) {
        genre = "sports";
        $("#flexRadioMatureYes").hide();
        $("#flexRadioMatureYesLabel").hide();
        $("#noMatureOption").text("No mature sports games exist.");
        $("#flexRadioMatureNo").prop("checked", true);
      }
      else if ($("#flexRadioAdventure").is(':checked')) {
        genre = "adventure";
      }
      else {
        alert("An option must be selected.");
        qCount--;
        return false;
      }
      $("#q3").hide();
      $("#q4").fadeIn();
      $("#next").fadeOut();
      $("#submitButton").fadeIn();
    }
  });
  $( "#prev" ).click(function() {
    if (qCount > 0) {
      qCount--;
    }
    if (qCount == 0) {
      $("#q2").hide();
      $("#q1").fadeIn();
      $("#prev").fadeOut();
      if (platform == "PS4") {
        $("#flexRadioPS4").prop("checked", true);
      }
      else if (platform == "XboxOne") {
        $("#flexRadioXboxOne").prop("checked", true);
      }
      else if (platform == "PC") {
        $("#flexRadioPC").prop("checked", true);
      }
    }
    if (qCount == 1) {
      $("#q3").hide();
      $("#q2").fadeIn();
      if (type == "singleplayer") {
        $("#flexRadioSingleplay").prop("checked", true);
      }
      else if (type == "multiplayer") {
        $("#flexRadioMultiplay").prop("checked", true);
      }
    }
    if (qCount == 2) {
      $("#q4").hide();
      $("#q3").fadeIn();
      $("#next").fadeIn();
      $("#submitButton").fadeOut();
      if (genre == "action") {
        $("#flexRadioAction").prop("checked", true);
      }
      else if (genre == "indie") {
        $("#flexRadioIndie").prop("checked", true);
      }
      else if (genre == "sports") {
        $("#flexRadioSports").prop("checked", true);
      }
      else if (genre == undefined) {
        $("#flexRatioAny").prop("checked", true);
      }
    }
  });
  });
}

function gamePacks() {
  // Collects query string from URL
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  // Gets PACK ID parameter from query
  var PACK_ID = urlParams.get('packid');
  $(function() {
    // If sale form is submitted, call submitSale function
  $("#saleForm").submit(function(event){
    submitSale(event, PACK_ID);
  });
  $("#packDesc").hide;
  $("#gameCard1").hide();
  $("#gameCard2").hide();
  $("#gameCard3").hide();
  $("#saleFinal").hide();
  });
  var packName = getPackName(PACK_ID);
  // If packName is equal to "N/A", then user will be alerted that the pack id does not exist and will be redirected back to the home page.
  if (packName == "N/A") {
  alert("Pack ID " + PACK_ID + " does not exist.");
    window.location.href = "index.html";
  }
  $("#packHeading").text(packName);
  $("#packDesc").show;
  getGames(PACK_ID);
  getPrice(PACK_ID);
}

// Calls saleFunnel function when HTML body id is home (index.html)
$(function(){
  if($('body').is('#home')){
    saleFunnel();
  }
});

// Calls gamePacks function when HTML body id is gamePacks (gamePacks.html)
$(function(){
  if($('body').is('#gamePacks')){
    gamePacks();
  }
});