
    var daysWeek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    var sport = {
            bodybuilding: {
                beginner: [
                    { esercizio: "Hammer Curls", set: 3, reps: 12 },
                    { esercizio: "Deadlifts", set: 3, reps: 8 },
                    { esercizio: "Leg Curls", set: 3, reps: 12 },
                    { esercizio: "Incline Bench Press", set: 3, reps: 15 },
                    { esercizio: "Lat Pulldown", set: 3, reps: 12 },
                    { esercizio: "Military Press", set: 2, reps: 12 },
                    { esercizio: "riposo", set: "/", reps: "/" }
                ],
                intermediate: [
                    { esercizio: "Dumbbell Bench Press", set: 2, reps: 10 },
                    { esercizio: "Dips", set: 2, reps: 12 },
                    { esercizio: "Triceps Push-downs", set: 2, reps: 10 },
                    { esercizio: "Preacher Curls", set: 2, reps: 12 },
                    { esercizio: "Ab Crunch Machine", set: 2, reps: 12 },
                    { esercizio: "Leg Extensions", set: 2, reps: 10 },
                    { esercizio: "riposo", set: "/", reps: "/" }
                ],
                advanced: [
                    { esercizio: "Barbell Front Raise", set: 3, reps: 10 },
                    { esercizio: "Dumbbell Lateral Raise", set: 4, reps: 8 },
                    { esercizio: "Tricep Dip", set: 3, reps: 10 },
                    { esercizio: "Preacher Curls", set: 4, reps: 8 },
                    { esercizio: "Leg Curl", set: 4, reps: 10 },
                    { esercizio: "Lat Pull Down", set: 4, reps: 10 },
                    { esercizio: "riposo", set: "/", reps: "/" }
                ]
            },
            powerlifting: {
                beginner: [
                    { esercizio: "Squat", set: 3, reps: 5 },
                    { esercizio: "Bench Press", set: 3, reps: 5 },
                    { esercizio: "Barbell Row", set: 3, reps: 5 },
                    { esercizio: "Deadlift", set: 3, reps: 5 },
                    { esercizio: "Overhead Press", set: 3, reps: 5 },
                    { esercizio: "Lat Pulldown", set: 3, reps: 8 },
                    { esercizio: "riposo", set: "/", reps: "/" }
                ],
                intermediate: [
                    { esercizio: "Squat Variant", set: 3, reps: 7 },
                    { esercizio: "Barbell Back Squats", set: 3, reps: 9 },
                    { esercizio: "Bench Press", set: 3, reps: 7 },
                    { esercizio: "Vertical Pull", set: 3, reps: 7 },
                    { esercizio: "Chin-ups", set: 3, reps: 7 },
                    { esercizio: "Leg Curl", set: 3, reps: 12 },
                    { esercizio: "riposo", set: "/", reps: "/" }
                ],
                advanced: [
                    { esercizio: "Squat", set: 4, reps: 10 },
                    { esercizio: "Bench Press", set: 4, reps: 8 },
                    { esercizio: "One Arm Shoulder Press", set: 3, reps: 10 },
                    { esercizio: "Hammer Arm Curl", set: 4, reps: 7 },
                    { esercizio: "Incline Leg Raise", set: 4, reps: 8 },
                    { esercizio: "Wt Pull-ups", set: 4, reps: 8 },
                    { esercizio: "riposo", set: "/", reps: "/" }
                ]
            },
            calisthenics: {
                beginner: [
                    { esercizio: "Squats", set: 3, reps: 12 },
                    { esercizio: "Push Ups", set: 3, reps: 10 },
                    { esercizio: "Max Mountain Climbers", set: 3, reps: 20 },
                    { esercizio: "Pull Ups", set: 3, reps: 12 },
                    { esercizio: "Dips", set: 3, reps: 12 },
                    { esercizio: "Leg Raises", set: 3, reps: 8 },
                    { esercizio: "riposo", set: "/", reps: "/" }
                ],
                intermediate: [
                    { esercizio: "Front lever", set: 3, reps: 12 },
                    { esercizio: "Planche", set: 3, reps: 8 },
                    { esercizio: "Muscle Up", set: 3, reps: 12 },
                    { esercizio: "Jump Squat", set: 3, reps: 15 },
                    { esercizio: "Pike Push Ups", set: 3, reps: 12 },
                    { esercizio: "Australian Pull Ups", set: 2, reps: 12 },
                    { esercizio: "riposo", set: "/", reps: "/" }
                ],
                advanced: [
                    { esercizio: "Handstand", set: 4, reps: 10 },
                    { esercizio: "Muscle Up", set: 4, reps: 8 },
                    { esercizio: "V-Sit", set: 3, reps: 10 },
                    { esercizio: "Pistol Squat", set: 4, reps: 7 },
                    { esercizio: "Dragon Flag", set: 4, reps: 8 },
                    { esercizio: "Clapping Pull-ups", set: 4, reps: 8 },
                    { esercizio: "riposo", set: "/", reps: "/" }
                ]
            }
        };

    $('#btn-add').click(function() {
        var $userNew = $("<div class='user'></div>");
        var $list = $("<ul></ul>");
        var $elementTitle = $("<li class='title-list'></li>");
        var $dayTitle = $("<span class='day'>Days</span>");
        var $exerciseTitle = $("<span class='exercise'>Exercise</span>");
        var $setsTitle = $("<span class='sets'>Sets</span>");
        var $repsTitle = $("<span class='reps'>Reps</span>");
        var subjectName = $('#sport-name').val();
        var subjectLastname = $('#sport-lastname').val();
        var subjectId = $('#sport-id').val();
        var sportName = $('#sport-select').val();
        var level = $('#level-select').val();

        //Aggiungiamo un titolo prima della creazione del programma di allenamento del nuovo iscritto 
        if (subjectName && subjectLastname && sportName && level) {
        $('#program-list-user').append("<h1 class='user-title'>" + subjectName + " " + subjectLastname + "<span class='divide'> - </span>" + sportName + "<span class='divide'> - </span>" + level + "</h1>");
        $('#sport-name').val('');
        $('#sport-lastname').val('');
        $('#sport-id').val('');
        $('#sport-select').val('');
        $('#level-select').val('');
        

        //Aggiungiamo un nuovo iscritto alla sezione che contiene la lista dei partecipanti 
        $('#program-list-user').append($userNew);
        $userNew.append($list);

        //Aggiungiamo come titolo il nome lo sport e il livello di difficoltà del nuovo iscritto 
        $list.append($elementTitle);
        $elementTitle.append($dayTitle);
        $elementTitle.append($exerciseTitle);
        $elementTitle.append($setsTitle);
        $elementTitle.append($repsTitle);

        //Aggiungiamo alla tabella degli iscritti nuovi il nome, il cognome, il numero identificativo e lo sport
        var $newRow = $('<tr></tr>');
        $('.newUser tbody').append($newRow);
        $newRow.append('<td>' + subjectName + '</td>');
        $newRow.append('<td>' + subjectLastname + '</td>');
        $newRow.append('<td>' + subjectId + '</td>');
        $newRow.append('<td>' + sportName + '</td>');

        for(var i = 0; i < daysWeek.length; i++){
            var $elementNew = $("<li></li>");
            $list.append($elementNew);
            $elementNew.append("<span class='day'>" + daysWeek[i] + "</span>");
            $elementNew.append("<span class='exercise'>" + sport[sportName][level][i]['esercizio'] + "</span>");
            $elementNew.append("<span class='sets'>" + sport[sportName][level][i]['set'] + "</span>");
            $elementNew.append("<span class='reps'>" + sport[sportName][level][i]['reps'] + "</span>");

        }
    }else{
        alert("devi inserire i valori");
    }
});

//Aggiungiamo gli utenti che sono registrati in memoria nella tabella degli iscritti vecchi
$.getJSON("iscritti.json", function(dati) {
    $.each(dati.iscritti, function(indice, iscritto) {
    var $newRow = $('<tr></tr>');
    $('.oldUser tbody').append($newRow);
    $newRow.append('<td>' + iscritto.name + '</td>');
    $newRow.append('<td>' + iscritto.lastname + '</td>');
    $newRow.append('<td>' + iscritto.id + '</td>');
    $newRow.append('<td>' + iscritto.sport + '</td>');
});
});   

$('#btn-view-table').click(function() {
    $(".table_user").show();
    $("#program-list-user").toggle();
    $(".add-program-user").toggle();
    $(".btn-options").toggle();
    $('#btn-view-users').show();
});

$('#btn-view-users').click(function() {
    $(this).hide();
    $(".table_user").hide();
    $("#program-list-user").show();
    $(".add-program-user").show();
    $(".btn-options").show();
});
