"use strict";

$(document).ready(function () {
    let sidebar = $('#sidebar');
    let sideButton = $('.togSide');
    sideButton.click( function(){
        sidebar.toggleClass('collapsed');
    });
});
