// Progress Bar //
var mathScale=30;
var readingScale=50;
var writingScale=75;

$(".progress-math").css("height",mathScale + "%");
$(".progress-reading").css("height",readingScale + "%");
$(".progress-writing").css("height",writingScale + "%");

function scaleAdd(scale) {
  // console.log(scale);
  if(scale=="mathScale") {
    mathScale= (mathScale==100 ? mathScale=100 :mathScale + 5);
    return mathScale;
  }
  if(scale=="readingScale") {
    readingScale= (readingScale==100 ? readingScale=100 :readingScale + 5);
    return readingScale;
  }
  if(scale=="writingScale") {
    writingScale= (writingScale==100 ? writingScale=100 :writingScale + 5);
    return writingScale;
  }
}

function scaleMinus(scale) {
  // console.log(scale);
  if(scale=="mathScale") {
    mathScale= (mathScale==0 ? mathScale=0 :mathScale - 5);
    return mathScale;
  }
  if(scale=="readingScale") {
    readingScale= (readingScale==0 ? readingScale=0 :readingScale - 5);
    return readingScale;
  }
  if(scale=="writingScale") {
    writingScale= (writingScale==0 ? writingScale=0 :writingScale - 5);
    return writingScale;
  }
}

$(".add-button").on("click", function(e) {
  e.preventDefault();
  progressBarClass=$(this).data("progress");
  scale=$(this).data("scale");
  scaleHeight=scaleAdd(scale);
  // console.log(scale);
  $("."+progressBarClass).css("height",scaleHeight + "%");

});

$(".minus-button").on("click", function(e) {
  e.preventDefault();
  progressBarClass=$(this).data("progress");
  scale=$(this).data("scale");
  scaleHeight=scaleMinus(scale);
  // console.log(scale);
  $("."+progressBarClass).css("height",scaleHeight + "%");

});

// Test Reward Section //
$("#enter").on("click", function(){
  var task = $("#todoItem").val()
  $("#todoList").append("<div class='task'>" + task + "<div class='x fas fa-times'></div></div>");
});

$(document).on("click", ".x", function(){
  $(this).parent().remove();
});

$(document).on("click", ".task", function(){
  $(this).toggleClass("done");
  if ($(this).hasClass("done")){
      $(this).find("div").removeClass("fa-times");
      $(this).find("div").addClass("fa-check");
  }
  else {
      $(this).find("div").addClass("fa-times");
      $(this).find("div").removeClass("fa-check");
  }    
});

// Dashboard Accordian //
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


