$(document).ready(function(){
    
    // Add ToDo
      $("#input").keypress(function(e){
        let newDo = $("input").val();
        if (e.which == 13) {
          $(".tasks ul").append("<li class='taskList'>"+newDo+"</li>");
          $("input[placeholder]").val('');
          return false;  
        }  
      });

    //Delete All
      $("#allDelete").click(function(){
        $(".tasks ul").empty();
      });
     
    //Delete ToDo
      $(document).on("dblclick", "li", function(){
        $(this).toggleClass("delete").fadeOut("slow");    
      });
  
      $("ul").sortable();  
});

    