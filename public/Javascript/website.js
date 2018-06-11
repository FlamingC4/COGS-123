"use strict";

$(document).ready( function () {
    let sidebar = $('#sidebar');
    let content = $('#content');
    let sidebarCollapse = $('#sidebarCollapse');
    let arrow = $('#arrow');
    let collapsible = $('.collapsible');
    let chevDown = $('.fa-chevron-down');

    sidebarCollapse.click( function(){
        sidebar.toggleClass('active');
        content.toggleClass('active');
        sidebarCollapse.toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        arrow.toggleClass('fa-chevron-right fa-chevron-left');
    });

    collapsible.click( function(){
        chevDown.toggleClass('fa-chevron-down fa-chevron-up');
    });

    // collapseSidebar();
    $( window ).resize( function() {
        collapseSidebar();
        if (chevDown.hasClass('fa fa-chevron-up')) {
              chevDown.removeClass('fa-chevron-up').addClass('fa-chevron-down');
        }
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
        arrow.removeClass('fa fa-chevron-left').addClass('fa fa-chevron-right');
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
