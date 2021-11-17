//const { Domain } = require("domain");

/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  const tweetObject = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1636997380182
  }

 function createTweetElement(tweetObject) {
  const $tweet = $(`<h3><img src=${tweetObject.user.avatars}> ${tweetObject.user.name} <span>${tweetObject.user.handle}</span></h3><p>${tweetObject.content.text}</p> <div>10 days ago  <i id = "retweet" class="fa-solid fa-retweet"></i> <i id = "heart" class="fa-solid fa-heart"></i> <i id = "flag" class="fa-solid fa-flag"></i></div>`);
  return $tweet;    
  }


    $('#tweetdisplay').html(createTweetElement(tweetObject));










  //--------------------------------------------------------------------------------------
// Code for box shadow and color change on mouse hover  
  const $tweets = $("#tweets")
  $tweets.on('mouseover', (event) => {
  document.getElementById("tweets").style.boxShadow = "10px 20px 30px"
  });
  $tweets.on('mouseleave', (event) => {
    document.getElementById("tweets").style.boxShadow = "None"
    });

  const $retweet = $("#retweet")
  $retweet.on('mouseover', (event) => {
  document.getElementById("retweet").style.color = "#FFD700"
  });
  $retweet.on('mouseleave', (event) => {
  document.getElementById("retweet").style.color = "#4056A1"
  });

  const $heart = $("#heart")
  $heart.on('mouseover', (event) => {
  document.getElementById("heart").style.color = "#FFD700"
  });
  $heart.on('mouseleave', (event) => {
  document.getElementById("heart").style.color = "#4056A1"
  });

  const $flag = $("#flag")
  $flag.on('mouseover', (event) => {
  document.getElementById("flag").style.color = "#FFD700"
  });
  $flag.on('mouseleave', (event) => {
  document.getElementById("flag").style.color = "#4056A1"
  });
});