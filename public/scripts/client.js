//const { Domain } = require("domain");

/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]
  
  function createTweetElement(tweetObject) {
    const $tweet = $(`
    <article class="tweet">
      <div class="tweet-header">
        <div class="tweet-header-name">  
          <img src=${tweetObject.user.avatars}/> 
          <p class="tweet-header-username">${tweetObject.user.name}</p> 
        </div> 
        <p class="tweet-header-handle">
          ${tweetObject.user.handle}
        </p>
      </div>
      <div class="tweet-main">
        ${tweetObject.content.text}
      </div> 
      <div class="tweet-footer">
        <p class="tweet-footer-timestamp">${timeago.format(tweetObject.created_at)}</p>
        <div class="tweet-footer-icons">  
          <i class="fa-solid fa-retweet"></i> 
          <i class="fa-solid fa-heart"></i> 
          <i class="fa-solid fa-flag"></i>
        </div>
      </div>
    </article>`);

    return $tweet;    
  }



  function loadTweets() {
    $.ajax({
      url: "/tweets",
      method: "GET",
      data: $(".submit-tweet").serialize(),
      dataType: "json",
      success: function (data) {
        renderTweets(data);
      }
    });
  }
  loadTweets();

  $( ".submit-tweet" ).submit(function( event ) {
    alert( "Handler for .submit() called." );
    event.preventDefault();
    loadTweets();
  });

  function renderTweets(tweetsArray) {
    for (let value of tweetsArray) {
      const $tweet = createTweetElement(value);
      $('#tweets-container').prepend($tweet);
    }
  }
 


});