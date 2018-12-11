$(document).ready(function () {

    var characterStats = {

        attackHP: "TEST",
        attackAP: "",
        attackCAP: ""

    };

    var enemyStats = {
        enemyHP: "",
        enemyAP: "",
        enemyCAP: ""
    };

    var test =





        $(document).on("click", "#character-select .preselect", function () {
            selectCharacter(this);
            console.log(characterStats.attackHP);
            console.log(characterStats.attackAP);
            console.log(characterStats.attackCAP);

        });

    $(document).on("click", "#select-enemies .bg-danger", function () {


        selectEnemy(this);
        console.log(enemyStats.enemyHP);
        console.log(enemyStats.enemyAP);
        console.log(enemyStats.enemyCAP);

    })


    function attackButton() {

    }

    function selectEnemy(enemy) {

        console.log("DANGER ON CLICK");
        $(enemy).removeClass(".bg-danger");
        $(enemy).addClass(".bg-dark");
        $("#select-defender").append($(enemy));
        $("#defender-title").text("Defender");
        enemyStats.enemyHP = $(enemy).attr("data-hp");
        enemyStats.enemyAP = $(enemy).attr("data-ap");
        enemyStats.enemyCAP = $(enemy).attr("data-cap");

    }


    function selectCharacter(character) {

        $(character).addClass("bg-success");
        $(".card").not(character).addClass("bg-danger");
        $(".card").removeClass("preselect");
        $("#select-enemies").append($(".bg-danger"));
        characterStats.attackHP = $(character).attr("data-hp");
        characterStats.attackAP = $(character).attr("data-ap");
        characterStats.attackCAP = $(character).attr("data-cap");


    }


})