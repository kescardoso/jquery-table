$(document).ready(function() {
    
    $("tr:odd").addClass("odd");
    $("tr:even").addClass("even");
    
    /*when table header is clicked ,
    removes selection class from all other table rows and
    adds the selection class to this table headers row only*/
    $("th").click(function(){
     	$("tr").children().removeClass("select");
     	$(this).siblings().addClass("select");
    });

     	
    
        
    // Challenge C - Chaneg Reset
    // will display rgb value of selected panel in the reset panel
    $(".theButton").click(function(){
        var col = $(this).css("background-color");
        console.log(col);
        $(".superButton").text(col);
    });
        
});