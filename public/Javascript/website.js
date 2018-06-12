"use strict";

$(document).ready( function () {
    let sidebar = $('#sidebar');
    let content = $('#content');
    let sidebarCollapse = $('#sidebarCollapse');
    let listItem = $('.listItem');
    let menu = $('#menu');
    let collapsible = $('.collapsible');
    let chevDown = $('.fa-chevron-down');
    let chevUp = $('.fa-chevron-up');

    // sidebarCollapse.addClass('active');
    sidebarCollapse.click( function(){
        sidebar.toggleClass('active');
        content.toggleClass('active');
        sidebarCollapse.toggleClass('active');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        menu.toggleClass('fa-bars fa-times');
    });

    collapsible.click( function(){
        chevDown.toggleClass('fa-chevron-down fa-chevron-up');
    });

    listItem.click( function(){
        collapseSidebar2();
    });

    // collapseSidebar();
    $( window ).resize( function() {
        collapseSidebar();
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

function collapseSidebar() {
    let sidebar = $('#sidebar');
    let content = $('#content');
    let sidebarCollapse = $('#sidebarCollapse');
    let menu = $('#menu');
    let collapsible = $('.collapsible');
    let chevDown = $('.fa-chevron-down');
    let chevUp = $('.fa-chevron-up');
    if ($(window).width() <= 600) {
        collapseSidebar2();
    }
}

function collapseSidebar2() {
    let sidebar = $('#sidebar');
    let content = $('#content');
    let sidebarCollapse = $('#sidebarCollapse');
    let menu = $('#menu');
    sidebar.addClass('active');
    sidebarCollapse.removeClass('active');
    content.addClass('active');
    menu.removeClass('fa fa-times').addClass('fa fa-bars');
}

// $(document).ready(function () {
//     let sidebar = $('#sidebar');
//     let sideButton = $('.togSide');
//     let menuBody = $('#menuBody');
//     sideButton.click( function(){
//         sideButton.toggleClass('fa-menu-right fa-menu-left');
//         sidebar.toggleClass('collapsed');
//         if (menuBody.hasClass('col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12')){
//             menuBody.removeClass('col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12').addClass('col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8');
//         }
//         else {
//             menuBody.addClass('col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12').removeClass('col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8');
//         }
//     });
// });
