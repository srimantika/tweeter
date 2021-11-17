//const { Domain } = require("domain");

/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
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