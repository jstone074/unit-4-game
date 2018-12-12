$(document).ready(function () {

    var characterStats = {

        attackHP: "",
        attackAP: "",
        attackBaseAP: "",
        attackCAP: ""

    };

    var enemyStats = {
        enemyHP: "",
        enemyAP: "",
        enemyCAP: ""
    };

    var enemyChosen;

    var UpdateCharacterHp = "";


    $(document).on("click", "#character-select .preselect", function () {
        selectCharacter(this);
        console.log(this);
        console.log(characterStats.attackHP);
        console.log(characterStats.attackAP);
        console.log(characterStats.attackCAP);
        $(this).find("#display-hp").text(characterStats.attackHP);
        console.log(this);
        
        // $("#selected-character").text(characterStats.attackHP);


    });

    $(document).on("click", "#select-enemies .bg-danger", function () {


        selectEnemy(this);
        enemyChosen = (this);
        console.log(enemyChosen);
        console.log(enemyStats.enemyHP);
        console.log(enemyStats.enemyAP);
        console.log(enemyStats.enemyCAP);

    });

    $(document).on("click", "#attack-button", function () {
        attackButton();
        console.log("Enemy HP " + enemyStats.enemyHP);
        console.log("Enemy CAP " + enemyStats.enemyCAP);
        console.log("character HP " + characterStats.attackHP);
        console.log("Character AP " + characterStats.attackAP);

        if (enemyStats.enemyHP <= 0){
            $(enemyChosen).detach();

        }
    
    });


    function attackButton() {

        //Converting the strings to ints so they can be updated
        enemyStats.enemyHP = parseInt(enemyStats.enemyHP);
        enemyStats.enemyCAP = parseInt(enemyStats.enemyCAP);
        characterStats.attackHP = parseInt(characterStats.attackHP);
        characterStats.attackBaseAP = parseInt(characterStats.attackBaseAP);
        characterStats.attackAP = parseInt(characterStats.attackAP);

        enemyStats.enemyHP = (enemyStats.enemyHP - characterStats.attackAP);
        characterStats.attackHP = (characterStats.attackHP - enemyStats.enemyCAP);
        characterStats.attackAP = (characterStats.attackAP + characterStats.attackBaseAP);

    }

    function selectEnemy(enemy) {

        // enemyStats.enemyHP = "";
        // enemyStats.enemyCAP = "";
        // enemyStats.enemyAP = "";

        console.log("DANGER ON CLICK");
        $(enemy).removeClass(".bg-danger");
        $(enemy).addClass(".bg-dark");
        $("#select-defender").append($(enemy));
        $("#defender-title").text("Defender");
        enemyStats.enemyHP = $(enemy).attr("data-hp");
        enemyStats.enemyAP = $(enemy).attr("data-ap");
        enemyStats.enemyCAP = $(enemy).attr("data-cap");
        

    }

//try using children() and find() 
    function selectCharacter(character) {

        $(character).addClass("bg-success");
        $(character).attr("id", "selected-character");
        $(".card").not(character).addClass("bg-danger");
        $(".card").removeClass("preselect");
        $("#select-enemies").append($(".bg-danger"));
        characterStats.attackHP = $(character).attr("data-hp");
        characterStats.attackAP = $(character).attr("data-ap");
        characterStats.attackBaseAP = $(character).attr("data-ap");
        characterStats.attackCAP = $(character).attr("data-cap");
        



    }


})