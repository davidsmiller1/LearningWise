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


