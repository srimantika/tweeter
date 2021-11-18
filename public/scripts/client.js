//const { Domain } = require("domain");

/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  const data = [];

   
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



  $( ".submit-tweet" ).submit(function( event ) {
    event.preventDefault();

    let inputLength = $("textArea").val().length;
    console.log(inputLength);
    if(inputLength === 0 || inputLength === null || inputLength > 140) {
      $(".error-container").slideDown();
      $(".error-message").html("<h5>Error: Please enter a valid tweet!</h5>");
    } else {
      $(".error-container").slideUp();  
      const tweetContent = $(".submit-tweet").serialize();
      $.post("/tweets", tweetContent, function () {
      $("textArea").val("");
      loadTweets();
    })
  }
  }); 

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

  function renderTweets(tweetsArray) {
    for (let value of tweetsArray) {
      const $tweet = createTweetElement(value);
      $('#tweets-container').prepend($tweet);
    }
  }

});