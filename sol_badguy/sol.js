$(document).ready(function() {
    $('#sidebar-btn').on('click', function() {
      $('#sidebar').toggleClass('visible');
    });
  });

  $(function() {
    $("#solcs").hover(
        function() {
            $(this).attr("src", "./images/cs.gif");
        },
        function() {
            $(this).attr("src", "./images/cs.png");
        }                         
    );                  
});

$(function() {
  $("#solfs").hover(
      function() {
          $(this).attr("src", "./images/fs.gif");
      },
      function() {
          $(this).attr("src", "./images/fs.png");
      }                         
  );                  
});

  $(function() {
    $("#sol5h").hover(
        function() {
            $(this).attr("src", "./images/5h.gif");
        },
        function() {
            $(this).attr("src", "./images/5h.png");
        }                         
    );                  
});