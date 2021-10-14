let currentDate = moment().format('dddd, MMM Do YYYY');
$("#currentDate").html(currentDate);

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        const typeText = $(this).siblings(".description").val();
        let clockTime = $(this).parent().attr("id");
        localStorage.setItem(clockTime, typeText);
    })
   
    function getTime() {
        const currentTime = moment().hour();
        $(".time-block").each(function () {
            let displayTime = parseInt($(this).attr("id").split("hour")[1]);
            
            if (displayTime < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (displayTime === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    $("#hour4 .description").val(localStorage.getItem("hour4"));

    $("#hour5 .description").val(localStorage.getItem("hour5"));

    $("#hour6 .description").val(localStorage.getItem("hour6"));

    $("#hour7 .description").val(localStorage.getItem("hour7"));

    $("#hour8 .description").val(localStorage.getItem("hour8"));

    $("#hour9 .description").val(localStorage.getItem("hour9"));

    $("#hour10 .description").val(localStorage.getItem("hour10"));

    $("#hour11 .description").val(localStorage.getItem("hour11"));

    $("#hour12 .description").val(localStorage.getItem("hour12"));

    $("#hour13 .description").val(localStorage.getItem("hour13"));

    $("#hour14 .description").val(localStorage.getItem("hour14"));

    $("#hour15 .description").val(localStorage.getItem("hour15"));

    $("#hour16 .description").val(localStorage.getItem("hour16"));

    $("#hour17 .description").val(localStorage.getItem("hour17"));

    $("#hour18 .description").val(localStorage.getItem("hour18"));

    getTime();
})