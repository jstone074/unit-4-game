$(document).ready(function () {

    var characterSelection = false;



    $("#character-select .card").on("click", SelectCharacter


        // $(this).addClass("bg-success");

        // $(".card").not(this).addClass("bg-danger");
        // $(".card").not(this).removeClass("preselect");

        // $("#select-enemies").append($(".bg-danger"));
        // $(".card").off("click",function(){});
        // console.log(characterSelection);

    )

    $(document).on("click", "#select-enemies .bg-danger", function () {

        // $("#select-enemies .bg-danger").on("click", function(){
        console.log("DANGER ON CLICK");
        $(this).removeClass(".bg-danger");
        $(this).addClass(".bg-dark");
        $("#select-defender").append($(this));

        // })

    })

})


function SelectCharacter() {

    $(this).addClass("bg-success");

    $(".card").not(this).addClass("bg-danger");
    $(".card").not(this).removeClass("preselect");

    $("#select-enemies").append($(".bg-danger"));
    $(".card").off("click", SelectCharacter);




}