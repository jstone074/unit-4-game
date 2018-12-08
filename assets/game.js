$(".card").on("click", function(){

    $(this).addClass("bg-success");

    $(".card").not(this).addClass("bg-danger");

    $("#select-Enemies").append($(".bg-danger"));
    

    

    
 
  
})


function SelectCharacter () {

    $(this).addClass("bg-primary");


    

}