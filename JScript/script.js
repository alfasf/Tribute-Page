$(document).ready(function(){
  $("h3").click(function(){
    $(this).next().toggle("slow").delay(1000);
  });
});

