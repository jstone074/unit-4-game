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
    var characterSelect;
    var win = 0;
    var updateCharacterHp = "";
    var updateEnemyHp = "";
    var gameOver = false;
    var counter = false;


    $(document).on("click", "#character-select .preselect", function () {
        selectCharacter(this);
        characterSelect = (this);
        console.log(this);
        console.log(characterStats.attackHP);
        console.log(characterStats.attackAP);
        console.log(characterStats.attackCAP);
        $(this).find("#display-hp").text(characterStats.attackHP);
        updateCharacterHp = $(this).find("#display-hp");
        console.log("Path to Character HP " + updateCharacterHp);
        console.log(this);

        // $("#selected-character").text(characterStats.attackHP);


    });

    if (!counter) {

        $(document).on("click", "#select-enemies .bg-danger", function () {


            selectEnemy(this);
            enemyChosen = (this);
            $(this).find("#display-hp").text(enemyStats.enemyHP);
            updateEnemyHp = $(this).find("#display-hp");
            console.log(enemyChosen);
            console.log(enemyStats.enemyHP);
            console.log(enemyStats.enemyAP);
            console.log(enemyStats.enemyCAP);

        });
    }

    $(document).on("click", "#attack-button", function () {
        attackButton();
        console.log("Enemy HP " + enemyStats.enemyHP);
        console.log("Enemy CAP " + enemyStats.enemyCAP);
        console.log("character HP " + characterStats.attackHP);
        console.log("Character AP " + characterStats.attackAP);
        $(updateCharacterHp).html("HP " + characterStats.attackHP);
        $(updateEnemyHp).html("HP "+ enemyStats.enemyHP);

        if (enemyStats.enemyHP <= 0) {
            $(enemyChosen).detach();
            $("#attack-button").detach();
            $("#defender-title").text("");
            $("#select-enemies").show();
            $("#enemy-title").text("Select Enemy");
            win++;
        }

        if (win === 3) {
            $("#attack-button").detach();
            $("#defender-title").html("You WIN!");
            $("#enemy-title").html("");
            gameOver = true;
        }

        if (characterStats.attackHP <= 0) {
            $(characterSelect).detach();
            $("#attack-button").detach();
            $("#main-title").html("You LOSE!");
            $("#enemy-title").html("");
            gameOver = true;

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

        if (!gameOver) {

            console.log("DANGER ON CLICK");
            $(enemy).removeClass(".bg-danger");
            $(enemy).addClass(".bg-dark");
            $("#select-defender").append($(enemy));
            $("#defender-title").text("Defender");
            $("#attack-div").html("<button type='button' id='attack-button' class='btn btn-primary mt-4 mb-4'>Attack</button>");
            enemyStats.enemyHP = $(enemy).attr("data-hp");
            enemyStats.enemyAP = $(enemy).attr("data-ap");
            enemyStats.enemyCAP = $(enemy).attr("data-cap");
            counter =true;
            $("#select-enemies").hide();
            $("#enemy-title").html("");
            
           
        }
    }

    function selectCharacter(character) {

        if (!gameOver) {

            $(character).addClass("bg-success");
            $(character).attr("id", "selected-character");
            $(".card").not(character).addClass("bg-danger");
            $(".card").removeClass("preselect");
            $("#enemy-title").text("Select Enemy");
            $("#select-enemies").append($(".bg-danger"));
            $("#character-select").append(character);
            characterStats.attackHP = $(character).attr("data-hp");
            characterStats.attackAP = $(character).attr("data-ap");
            characterStats.attackBaseAP = $(character).attr("data-ap");
            characterStats.attackCAP = $(character).attr("data-cap");

        }
    }
})