"use strict";

$(document).ready(function () {
    let sidebar = $('#sidebar');
    let sidebarCollapse = $('#sidebarCollapse');
    let arrow = $('#arrow');


    sidebarCollapse.click( function(){
        sidebar.toggleClass('active');
        arrow.toggleClass('fa-arrow-right fa-arrow-left');
        // if (arrow.hasClass('fa fa-arrow-left')){
        //     arrow.removeClass('fa fa-arrow-left');
        //     arrow.addClass('fa fa-arrow-right');
        // } else {
        //     arrow.removeClass('fa fa-arrow-right').addClass('fa fa-arrow-left');
        // }
    });

    collapseSidebar();
    $( window ).resize(function() {
      collapseSidebar();
    });
});

function collapseSidebar(){
    let sidebar = $('#sidebar');
    let sidebarCollapse = $('#sidebarCollapse');
    let arrow = $('#arrow');
    if ($(window).width() <= 550) {
        if (sidebar.hasClass('active')){
            sidebar.removeClass('active');
        }
        arrow.removeClass('fa fa-arrow-right').addClass('fa fa-arrow-left');
    }
}

// $(document).ready(function () {
//     let sidebar = $('#sidebar');
//     let sideButton = $('.togSide');
//     let menuBody = $('#menuBody');
//     sideButton.click( function(){
//         sideButton.toggleClass('fa-arrow-right fa-arrow-left');
//         sidebar.toggleClass('collapsed');
//         if (menuBody.hasClass('col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12')){
//             menuBody.removeClass('col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12').addClass('col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8');
//         }
//         else {
//             menuBody.addClass('col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12').removeClass('col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8');
//         }
//     });
// });
