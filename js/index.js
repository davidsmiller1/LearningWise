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

// Add Goal Modal //
$(document).ready(function(){
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })
  
    var date_input = $('input[name="date"]'); //our date input has the name "date"
  
    console.log("--> Selected the date input: ", date_input);
  
    var container = $('.bootstrap-iso form').length > 0 
    ? $('.bootstrap-iso form').parent() 
    : "body";
  
    var options={
      format: 'mm/dd/yyyy',
      container: container,
      todayHighlight: true,
      autoclose: true,
    };
  
    date_input.datepicker(options);
    
  })
  
// Material Select Initialization //
$(document).ready(function() {
  $('.mdb-select').materialSelect();
  });
  
$(".thumbnail").on("click",function (){
  $(".thumbnail").css("border", "5px solid transparent")
    $(this).css("border", "5px solid #FA850C")
  
  })

