var playMain;
var pauseMain;
var pauseDragon;
var playDragon;
var playTransform;
var kamehameha;
var heroChosen = false;
var enemyChosen = false;
var superSayain = false;
var gokuChosen = false;
var goku = new player(120, 10);
var gohan = new player(150, 15);
var cell = new enemy(180, 8);
var cellJunior = new enemy(80, 5);

function player(health, attackPower) {
  this.health = health;
  this.attackPower = attackPower;
};

function enemy(health, counterAttackPower) {
  this.health = health;
  this.counterAttackPower = counterAttackPower;
}

function playSong(variable, id) {
 variable = document.getElementById(id);
  variable.play();
}

function pauseSong(variable, id) {
 variable = document.getElementById(id);
  variable.pause();
}

// removes default functions from arrow keys and space bar
// keeps browser window from moving when attempting to move player
var disabledKeys =new Array(32,33,34,35,36,37,38,39,40);
$(document).keydown(function(e) {
     var key = e.which;
      //console.log(key);
      //if(key==35 || key == 36 || key == 37 || key == 39)
      if($.inArray(key,disabledKeys) > -1) {
          e.preventDefault();
          return false;
      }
      return true;
});


goku.image = "<img class='heroes' id='goku' src='assets/images/goku2.jpg' width='280px' height='235px'>";

gohan.image = "<img class='heroes' id='gohan' src='assets/images/gohan-ssj2.jpg' width='280px' height='235px'>";

cell.image = "<img class='enemies' id='cell' src='assets/images/perfect-cell.jpg' width='280px' height='235px'>";

cellJunior.image = "<img class='enemies' id='cellJunior' src='assets/images/cell-junior.jpg' width='280px' height='235px'>";

$("#heroDisplay").hide();
$("#enemyDisplay").hide();
$("#userFight").hide();
$("#gokuFight").hide();
$("#cellFight").hide();

$("#gohanFight").css({
  'background-position' : 'top -210px right 1550px',
  'width': '80px',
  'height': '150px'
});
$("#gohanFight").hide();

$("#heroes").append(goku.image);

$("#heroes").append(gohan.image);

$("#enemies").append(cell.image);

$("#enemies").append(cellJunior.image);

playSong(playDragon, "dragonTheme");

$(".heroes").on("click", function() {
  $(".heroes").not(this).css("display", "none");
  $(this).parent().css({position: 'relative'});
  $(this).css({position: 'absolute'});
  heroChosen = true;

  //Trying to retrieve the current jquery image that was clicked to reference
  //this.health property to display on screen????


  if($(this).attr('id') === "goku" ) {
    var gokuHealth = goku.health;
    gokuHealth = parseInt(gokuHealth);
    $("#heroHP").html(gokuHealth);
    var gokuAttack = goku.attackPower;
    gokuAttack = parseInt(gokuAttack);
    $("#heroAttack").html(gokuAttack);
    $("#gokuFight").show();
    gokuChosen = true;
    $(this).animate({
      right: "-=140"
    });
  }

  if($(this).attr('id') === "gohan" ) {
    $("#gohanFight").show();
    // Figure out how to start animation from default position
    $(this).animate({
      right: "-=140"
    });
  }

})


$(".enemies").on("click", function() {
  $(".enemies").not(this).css("display", "none");
  $(this).parent().css({position: 'relative'});
  $(this).css({position: 'absolute'});
  enemyChosen = true;

  if($(this).attr('id') === "cell" ) {
    $(this).animate({
      right: "-=140"
    });
    var cellHealth = cell.health;
    cellHealth = parseInt(cellHealth);
    $("#enemyHP").html(cellHealth);
    $("#cellFight").show();
  }
})


$("#startGameText").on("click", function(event) {
  event.preventDefault();
  pauseSong(pauseDragon, "dragonTheme");
  $("#main-Theme").prop("volume", "0.8");
  playSong(playMain, "main-Theme");


  $("#main-Theme").on('ended', function(){
    $("#secondTheme").play();
  });

  if(gokuChosen) {
  window.setTimeout("$('#gokuFight').css('background-position', 'top 0px right 1435px');", 1000);
    var timeOutId = window.setTimeout("$('#gokuFight').css('background-position', 'top 0px right 1325px');", 2000);
    playSong(playTransform, 'gokuTransform');
  }

  if(heroChosen && enemyChosen) {
    $("#enemyDisplay").show();
    $("#heroDisplay").show();

    $("#selectHero").html("<h3 id='selectHero'> User </h3>");
    $("#selectEnemy").html("<h3 id='selectEnemy'> Enemy </h3>");
    $("#startGameText").hide();
    $("#userFight").show();
  }
})

$("#userFight").on("click", function(event) {
  $("#heroes").css("display", "none");
  $("#selectHero").hide();
  $("#vsHeading").hide();
  $("#enemies").hide();
  $("#selectEnemy").hide();
  $("#header").hide();
  $("#second-header").hide();
  $("#userFight").hide();


  $("#heroDisplay").animate({
    top: "-=600"
  });

  $("#enemyDisplay").animate({
    top: "-=600",
    right: "-=150"
  });

  $("#gokuFight").animate({
    right: "-=200",
    top: "-=10"
  });

  $("#cellFight").animate({
    left: "-=200",
    top: "-=10"
  });
});

$("html").keydown(function(event){
      // keep if(gokuChosen) {} and add functions below inside and give each a name
      // optimize and assign functions to goku object and just refer to the object to launch functions

        function resetPowerGoku() { $("#gokuFight").css({
          'background-position' : 'top 0px right 1206px',
          'width': '105px',
          'height': '180px'
        });
      }

        if(event.which == "37") {
            if(gokuChosen) {
              $("#gokuFight").stop(true).animate({"left" : "-=75px"});
              $("#gokuFight").css({
                'background-position' : 'top 0px right 560px',
                'width': '105px',
                'height': '180px'
              });
            }
          }

        if(event.which == "39") {
            if(gokuChosen) {
              $("#gokuFight").stop(true).animate({"left" : "+=75px"});
              $("#gokuFight").css({
               "background-position" : "top -190px right 350px",
               "width": "130px",
               "height": "165px"
             });
            }
          }

        if(event.which == "38") {
            if(gokuChosen) {
              $("#gokuFight").stop(true).animate({"top" : "-=75px"});
              $("#gokuFight").css({
                'background-position' : 'top 0px right 660px',
                'width': '105px',
                'height': '180px'
              });
            }
          }

        if(event.which == "40") {
            if(gokuChosen) {
              $("#gokuFight").stop(true).animate({"top" :  "+=75px"});
              $("#gokuFight").css({
                'background-position' : 'top 0px right 660px',
                'width': '105px',
                'height': '180px'
              });
            }
          }

        // press "space" for punch
        if(event.which == "32") {
          if(gokuChosen) {
            $("#gokuFight").css({
           "background-position" : "top -173px right 1570px",
           "width": "130px",
           "height": "165px"
         });

          function punchPos2() {
            $("#gokuFight").css({
           "background-position" : "top -178px right 1460px",
           "width": "150px",
           "height": "155px"
         });
        }
          setTimeout(punchPos2, 300);
          setTimeout(resetPowerGoku, 800);
       }
     }

        //press "s" for special attack ("kamehameha")
        if(event.which == "83") {
          if(gokuChosen) {
            $("#kamehamehaAttack").prop("volume", "1.0");
            playSong(kamehameha, "kamehamehaAttack");

           $("#gokuFight").css({
            "background-position" : "top 500px right 1565px",
            "width": "125px",
            "height": "170px"
          });

          function attackPos2() { $("#gokuFight").css({
            'background-position' : 'top 500px right 1490px',
            'width': '300px',
            'height': '170px'
          });
        }

          function attackPos3() { $("#gokuFight").css({
            'background-position' : 'top 500px right 458px',
            'width': '700px',
            'height': '170px'
          });
        }
        setTimeout(attackPos2, 8500);
        setTimeout(attackPos3, 9000);
        setTimeout(resetPowerGoku, 13000);
      }
    }

});
