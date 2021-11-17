
// Check character count of tweet text and becomes negative red counter once it exceeds 140 length
$(document).ready(function() {
  const $input = $(".textArea");
  $input.on("keyup", (event) => {
    let tweetlength = event.target.value.length;
    //console.log(tweetlength);
    $(".counter").text (140 - tweetlength);
    if (tweetlength > 140 ) {
      $(".counter").css("color", "red");
    } else {
      $(".counter").css("color", "black");
    }
  });
});


$(document).ready(function() {
  const $retweet = $("#retweet")
  $retweet.on('mouseover', (event) => {
  document.getElementById("retweet").style.color = "red"
});
});