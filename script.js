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

    $("#hour4am .description").val(localStorage.getItem("hour4am"));

    $("#hour5am .description").val(localStorage.getItem("hour5am"));

    $("#hour6am .description").val(localStorage.getItem("hour6am"));

    $("#hour7am .description").val(localStorage.getItem("hour7am"));

    $("#hour8am .description").val(localStorage.getItem("hour8am"));

    $("#hour9am .description").val(localStorage.getItem("hour9am"));

    $("#hour10am .description").val(localStorage.getItem("hour10am"));

    $("#hour11am .description").val(localStorage.getItem("hour11am"));

    $("#hour12pm .description").val(localStorage.getItem("hour12pm"));

    $("#hour1pm .description").val(localStorage.getItem("hour1pm"));

    $("#hour2pm .description").val(localStorage.getItem("hour2pm"));

    $("#hour3pm .description").val(localStorage.getItem("hour3pm"));

    $("#hour4pm .description").val(localStorage.getItem("hour4pm"));

    $("#hour5pm .description").val(localStorage.getItem("hour5pm"));

    $("#hour6pm .description").val(localStorage.getItem("hour6pm"));

    getTime();
})