// $(".hit").prop("disabled", true);
// $(".stand").prop("disabled", true);

// $(".stand").css("display", "none");
// $(".hit").css("display", "none");
// $(".scoreDealer").css("display", "none");
// $(".scorePlayer").css("display", "none");

// let dealerCards = [];
// let playerCards = [];
// let dealerCardsCover = true;

// // Deck ♥♣♠♦
// let cards = [
//   "1♥",
//   "2♥",
//   "3♥",
//   "4♥",
//   "5♥",
//   "6♥",
//   "7♥",
//   "8♥",
//   "9♥",
//   "10♥",
//   "J♥",
//   "Q♥",
//   "K♥",
//   "1♣",
//   "2♣",
//   "3♣",
//   "4♣",
//   "5♣",
//   "6♣",
//   "7♣",
//   "8♣",
//   "9♣",
//   "10♣",
//   "J♣",
//   "Q♣",
//   "K♣",
//   "1♠",
//   "2♠",
//   "3♠",
//   "4♠",
//   "5♠",
//   "6♠",
//   "7♠",
//   "8♠",
//   "9♠",
//   "10♠",
//   "J♠",
//   "Q♠",
//   "K♠",
//   "1♦",
//   "2♦",
//   "3♦",
//   "4♦",
//   "5♦",
//   "6♦",
//   "7♦",
//   "8♦",
//   "9♦",
//   "10♦",
//   "J♦",
//   "Q♦",
//   "K♦",
// ];

// // All the New Game.
// $(".newGame").on("click", function () {
//   $(".gameMessages").html("Let's see what happens!");
//   $(".hit").prop("disabled", true);
//   $(".stand").prop("disabled", true);
//   $(".scoreDealer").css("display", "block");
//   $(".scorePlayer").css("display", "block");
//   $(".stand").css("display", "inline-block");
//   $(".hit").css("display", "inline-block");

//   $(".dealer").html(""); // <-- To clean the dealer table
//   $(".player").html(""); // <-- To clean the player table

//   // To clean the dealer and player arrays of cards
//   cards = cards.concat(playerCards, dealerCards);
//   playerCards = [];
//   dealerCards = [];
//   dealerCardsCover = true;

//   $("#scoreD").text("-"); // <-- To clean the dealer score
//   $("#scoreP").text("-"); // <-- To clean the player score

//   setTimeout(function () {
//     giveCard(playerCards);
//     $("#scoreP").html(sumCards(playerCards));
//     setTimeout(function () {
//       giveCard(dealerCards);
//       $("#scoreD").html(sumCards(dealerCards));
//       setTimeout(function () {
//         giveCard(playerCards);
//         $("#scoreP").html(sumCards(playerCards));
//         setTimeout(function () {
//           giveCard(dealerCards);
//           $(".stand").prop("disabled", false);
//           if ($("#scoreP").text()[0] + $("#scoreP").text()[1] === "21") {
//             $(".stand").click();
//           } else {
//             $(".hit").prop("disabled", false);
//             $(".gameMessages").html("Choose between `Hit` or `Stand`");
//           }
//         }, 200);
//       }, 200);
//     }, 200);
//   }, 200);
// });

// // All the Hit logic
// $(".hit").on("click", function () {
//   setTimeout(function () {
//     giveCard(playerCards);
//     let scoreP = sumCards(playerCards);
//     $("#scoreP").html(scoreP);
//     if (parseInt(scoreP) > 21) {
//       $(".hit").prop("disabled", true);
//       $(".stand").prop("disabled", true);
//       $(".gameMessages").html("You lose, the Dealer wins :( Try again!");
//     } else if (parseInt(scoreP) === 21) {
//       $(".hit").prop("disabled", true);
//       $(".stand").prop("disabled", true);
//       $(".stand").click();
//     } else {
//       $(".gameMessages").html("You can either press 'Hit' or 'Stand' ");
//     }
//   }, 200);
// });

// // All the stand logic
// $(".stand").on("click", function () {
//   $(".stand").prop("disabled", true);
//   $(".hit").prop("disabled", true);
//   let scoreP = sumCards(playerCards);
//   let scoreD = sumCards(dealerCards);
//   // This show the dealer covered card
//   if (parseInt(scoreD) >= 17) {
//     if (dealerCardsCover) {
//       giveCard(dealerCards);
//     }
//     $("#scoreD").html(scoreD);
//   }
//   let scoreD2 = scoreD.split("").splice(5).join(""); // In case there is a 1 in the dealer cards
//   while (parseInt(scoreD) < 17) {
//     giveCard(dealerCards);
//     scoreD = sumCards(dealerCards);
//     scoreD2 = scoreD.split("").splice(5).join("");
//     $("#scoreD").html(scoreD);
//   }
//   // In case there is a 1 in the dealer cards and still the option by drawing cards to
//   // have one number winning the player's one.
//   while (parseInt(scoreD) < parseInt(scoreP) && parseInt(scoreD2) < 17) {
//     giveCard(dealerCards);
//     if (sumCards(dealerCards).split("").splice(5)[0] === undefined) {
//       scoreD2 = sumCards(dealerCards);
//       scoreD = scoreD2;
//       $("#scoreD").html(scoreD);
//     } else {
//       scoreD2 = sumCards(dealerCards).split("").splice(5).join("");
//       scoreD = scoreD.split("").splice(0, 5).join("") + scoreD2;
//       $("#scoreD").html(scoreD);
//       scoreD = scoreD2;
//     }
//   }

//   if (parseInt(scoreD) === parseInt(scoreP)) {
//     $("#scoreD").html(scoreD);
//     $(".gameMessages").html("Even score, try a new game!");
//   } else if (parseInt(scoreD) < parseInt(scoreP) || parseInt(scoreD) > 21) {
//     $("#scoreD").html(scoreD);
//     $(".gameMessages").html("You win!!! Play again!");
//   } else {
//     $("#scoreD").html(scoreD);
//     $(".gameMessages").html("You lose, the Dealer wins. Try again!");
//   }
// });

// // Funzione che traduce una carta in valore numerico, accetta come argomento una stringa e
// // ritorna un numero intero.
// function parseCards(card) {
//   let value = card.split("").slice(0, -1).join("");
//   if (value === "J" || value === "Q" || value === "K") {
//     value = 10;
//     return value;
//   }
//   return parseInt(value);
// }

// // Funzione che somma le carte di un giocatore e restituisce una stringa
// function sumCards(player) {
//   let sum1 = 0;
//   let sum2 = 0;
//   let useOfEleven = false;
//   for (let card of player) {
//     if (parseCards(card) === 1 && !useOfEleven) {
//       sum1 += parseCards(card);
//       sum2 += parseCards(card) + 10;
//       useOfEleven = true;
//     } else {
//       sum1 += parseCards(card);
//       sum2 += parseCards(card);
//     }
//   }
//   if (sum1 === sum2 || sum2 > 21) return `${sum1}`;
//   if (sum1 > sum2 || sum2 > 21) return `${sum1} | ${sum2}`;
//   return `${sum2} | ${sum1}`;
// }

// // Funzione che pesca una carta dal mazzo e la da al giocatore interessato, restituisce una stringa
// function giveCard(player) {
//   let card;
//   let htmlCard;
//   if (
//     player === dealerCards &&
//     dealerCards.length === 2 &&
//     dealerCardsCover === true
//   ) {
//     card = dealerCards[1];
//     htmlCard = `<div class="card"><div class="number ${
//       card[card.length - 1]
//     }">${card}</div><div class="cardType ${card[card.length - 1]}">${
//       card[card.length - 1]
//     }</div><div class="number rev ${
//       card[card.length - 1]
//     }">${card}</div></div>`;
//     $(".retro").replaceWith(htmlCard);
//     dealerCardsCover = false;
//   } else {
//     let cardsIndex = Math.floor(Math.random() * cards.length);
//     card = cards.splice(cardsIndex, 1)[0];
//     htmlCard = `<div class="card"><div class="number ${
//       card[card.length - 1]
//     }">${card}</div><div class="cardType ${card[card.length - 1]}">${
//       card[card.length - 1]
//     }</div><div class="number rev ${
//       card[card.length - 1]
//     }">${card}</div></div>`;
//     if (player === playerCards) $(".player").append(htmlCard);
//     if (player === dealerCards) {
//       if (dealerCards.length === 1) {
//         $(".dealer").append('<div class="card retro"></div>');
//       } else {
//         $(".dealer").append(htmlCard);
//       }
//     }
//     return player.push(card);
//   }
// }

$(".hit").prop("disabled", true);
$(".stand").prop("disabled", true);

$(".stand").css("display", "none");
$(".hit").css("display", "none");
$(".scoreDealer").css("display", "none");
$(".scorePlayer").css("display", "none");

let dealerCards = [];
let playerCards = [];
let dealerCardsCover = true;

// Deck ♥♣♠♦
let cards = [
  "A♥",
  "2♥",
  "3♥",
  "4♥",
  "5♥",
  "6♥",
  "7♥",
  "8♥",
  "9♥",
  "10♥",
  "J♥",
  "Q♥",
  "K♥",
  "A♣",
  "2♣",
  "3♣",
  "4♣",
  "5♣",
  "6♣",
  "7♣",
  "8♣",
  "9♣",
  "10♣",
  "J♣",
  "Q♣",
  "K♣",
  "A♠",
  "2♠",
  "3♠",
  "4♠",
  "5♠",
  "6♠",
  "7♠",
  "8♠",
  "9♠",
  "10♠",
  "J♠",
  "Q♠",
  "K♠",
  "A♦",
  "2♦",
  "3♦",
  "4♦",
  "5♦",
  "6♦",
  "7♦",
  "8♦",
  "9♦",
  "10♦",
  "J♦",
  "Q♦",
  "K♦",
];

// All the New Game.
$(".newGame").on("click", function () {
  $(".gameMessages").html("Let's see what happens!");
  $(".hit").prop("disabled", true);
  $(".stand").prop("disabled", true);
  $(".scoreDealer").css("display", "block");
  $(".scorePlayer").css("display", "block");
  $(".stand").css("display", "inline-block");
  $(".hit").css("display", "inline-block");

  $(".dealer").html(""); // <-- To clean the dealer table
  $(".player").html(""); // <-- To clean the player table

  // To clean the dealer and player arrays of cards
  cards = cards.concat(playerCards, dealerCards);
  playerCards = [];
  dealerCards = [];
  dealerCardsCover = true;

  $("#scoreD").text("-"); // <-- To clean the dealer score
  $("#scoreP").text("-"); // <-- To clean the player score

  setTimeout(function () {
    giveCard(playerCards);
    $("#scoreP").html(sumCards(playerCards));
    setTimeout(function () {
      giveCard(dealerCards);
      $("#scoreD").html(sumCards(dealerCards));
      setTimeout(function () {
        giveCard(playerCards);
        $("#scoreP").html(sumCards(playerCards));
        setTimeout(function () {
          giveCard(dealerCards);
          $(".stand").prop("disabled", false);
          if ($("#scoreP").text()[0] + $("#scoreP").text()[1] === "21") {
            $(".stand").click();
          } else {
            $(".hit").prop("disabled", false);
            $(".gameMessages").html("Choose between `Hit` or `Stand`");
          }
        }, 200);
      }, 200);
    }, 200);
  }, 200);
});

// All the Hit logic
$(".hit").on("click", function () {
  setTimeout(function () {
    giveCard(playerCards);
    let scoreP = sumCards(playerCards);
    $("#scoreP").html(scoreP);
    if (parseInt(scoreP) > 21) {
      $(".hit").prop("disabled", true);
      $(".stand").prop("disabled", true);
      $(".gameMessages").html("You lose, the Dealer wins :( Try again!");
    } else if (parseInt(scoreP) === 21) {
      $(".hit").prop("disabled", true);
      $(".stand").prop("disabled", true);
      $(".stand").click();
    } else {
      $(".gameMessages").html("You can either press 'Hit' or 'Stand' ");
    }
  }, 200);
});

// All the stand logic
$(".stand").on("click", function () {
  $(".stand").prop("disabled", true);
  $(".hit").prop("disabled", true);
  let scoreP = sumCards(playerCards);
  let scoreD = sumCards(dealerCards);
  // This show the dealer covered card
  if (parseInt(scoreD) >= 17) {
    if (dealerCardsCover) {
      giveCard(dealerCards);
    }
    $("#scoreD").html(scoreD);
  }
  let scoreD2 = scoreD.split("").splice(5).join(""); // In case there is a 1 in the dealer cards
  while (parseInt(scoreD) < 17) {
    giveCard(dealerCards);
    scoreD = sumCards(dealerCards);
    scoreD2 = scoreD.split("").splice(5).join("");
    $("#scoreD").html(scoreD);
  }
  // In case there is a 1 in the dealer cards and still the option by drawing cards to
  // have one number winning the player's one.
  while (parseInt(scoreD) < parseInt(scoreP) && parseInt(scoreD2) < 17) {
    giveCard(dealerCards);
    if (sumCards(dealerCards).split("").splice(5)[0] === undefined) {
      scoreD2 = sumCards(dealerCards);
      scoreD = scoreD2;
      $("#scoreD").html(scoreD);
    } else {
      scoreD2 = sumCards(dealerCards).split("").splice(5).join("");
      scoreD = scoreD.split("").splice(0, 5).join("") + scoreD2;
      $("#scoreD").html(scoreD);
      scoreD = scoreD2;
    }
  }

  if (parseInt(scoreD) === parseInt(scoreP)) {
    $("#scoreD").html(scoreD);
    $(".gameMessages").html("Even score, try a new game!");
  } else if (parseInt(scoreD) < parseInt(scoreP) || parseInt(scoreD) > 21) {
    $("#scoreD").html(scoreD);
    $(".gameMessages").html("You win!!! Play again!");
  } else {
    $("#scoreD").html(scoreD);
    $(".gameMessages").html("You lose, the Dealer wins. Try again!");
  }
});

// Funzione che traduce una carta in valore numerico, accetta come argomento una stringa e
// ritorna un numero intero.
function parseCards(card) {
  let value = card.split("").slice(0, -1).join("");
  if (value === "J" || value === "Q" || value === "K") {
    value = 10;
    return value;
  }
  if (value === "A") {
    value = 1;
    return value;
  }
  return parseInt(value);
}

// Funzione che somma le carte di un giocatore e restituisce una stringa
function sumCards(player) {
  let sum1 = 0;
  let sum2 = 0;
  let useOfEleven = false;
  for (let card of player) {
    if (parseCards(card) === 1 && !useOfEleven) {
      sum1 += parseCards(card);
      sum2 += parseCards(card) + 10;
      useOfEleven = true;
    } else {
      sum1 += parseCards(card);
      sum2 += parseCards(card);
    }
  }
  if (sum1 === sum2 || sum2 > 21) return `${sum1}`;
  if (sum1 > sum2 || sum2 > 21) return `${sum1} | ${sum2}`;
  return `${sum2} | ${sum1}`;
}

// Funzione che pesca una carta dal mazzo e la da al giocatore interessato, restituisce una stringa
function giveCard(player) {
  let card;
  let htmlCard;
  if (
    player === dealerCards &&
    dealerCards.length === 2 &&
    dealerCardsCover === true
  ) {
    card = dealerCards[1];
    htmlCard = `<div class="card"><div class="number ${
      card[card.length - 1]
    }">${card}</div><div class="cardType ${card[card.length - 1]}">${
      card[card.length - 1]
    }</div><div class="number rev ${
      card[card.length - 1]
    }">${card}</div></div>`;
    $(".retro").replaceWith(htmlCard);
    dealerCardsCover = false;
  } else {
    let cardsIndex = Math.floor(Math.random() * cards.length);
    card = cards.splice(cardsIndex, 1)[0];
    htmlCard = `<div class="card"><div class="number ${
      card[card.length - 1]
    }">${card}</div><div class="cardType ${card[card.length - 1]}">${
      card[card.length - 1]
    }</div><div class="number rev ${
      card[card.length - 1]
    }">${card}</div></div>`;
    if (player === playerCards) $(".player").append(htmlCard);
    if (player === dealerCards) {
      if (dealerCards.length === 1) {
        $(".dealer").append('<div class="card retro"></div>');
      } else {
        $(".dealer").append(htmlCard);
      }
    }
    return player.push(card);
  }
}
