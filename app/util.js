define(['jquery'], function ($) {
    return {
        change: function () {
            $('body').css("background-color", "red");
        },
        show: function () {
            console.log("前端");
        },
        message: function () {
            console.log("requirejs");
        }
    }
})