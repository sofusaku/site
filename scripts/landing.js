// window.onload = function() {
//     $('.nav_container a').on('click', function() {
//         $('.main_container nav').css('transform', 'translate(calc(-4rem + 50px), calc(-2rem + 20px))');
//         $('.navigation.active').removeClass('active');
//         $(this).parent().addClass('active');
//     })
// }

var desc_list = [
    "Tech enthusiast",
    "Indonesian",
    "18",   // TODO: Make a function
    "IE student",
    "La<3"
];
// var delem = $('h2');

// function change_desc() {
//     var strtemp = $('h2').text();
//     console.log(strtemp);
//     while (strtemp.length > 1) {
//         var strtemp = strtemp.substring(0, strtemp.length-1);
        
//         setTimeout(() => {
//             $('h2').text(strtemp);
//             console.log(strtemp);
//         }, 1000);
//     }
// }

var n = 1;
var desc_delay = 2500;

function change_desc() {
    var new_desc = $('<h2>').addClass('next').text(desc_list[n]);
    // var $current_desc = $('h2.main');
    $('h2.main').after(new_desc).addClass('prev').removeClass('main').animate({width: 0}, 500, function() {$('h2.prev').remove();} );
    // var $next_desc = $('h2.next');
    $('h2.next').addClass('main').removeClass('next');
    if (n >= desc_list.length-1) {
        n = 0;
    } else {
        ++n;
    }
    setTimeout(change_desc, desc_delay);
}

// var background_placeholder = $('<img>');

var entrance_isCompleted = false;
var background_isLoaded = false;
var background_isShown = false;

function fetch_background() {
    var tempAccessKey = ''; // TODO: directly call env variable in below, don't use this intermediary var
    var URL = 'https://api.unsplash.com/photos/random?featured=true&query=landscape&client_id=' + tempAccessKey;
    $.getJSON(URL, function(photo) {
        if (photo && photo.urls.regular) {
            function a(hrf, txt) {
                return '<a target="_blank" href="' + hrf + '?utm_source=comfyte.com&utm_medium=referral">' + txt + '</a>';
            }
            var attribution = 'Photo by ' + a(photo.user.links.html, photo.user.name) + ' on ' + a(photo.links.html, 'Unsplash');
            console.log(photo);
            // $('.background').css('background-image', 'url(' + photo.urls.regular + ')');
            // $('.attribution span').html(attribution);
            $('<img>').on('load', function() {
                $('.attribution span').html(attribution);
                $('.background').css('background-image', 'url(' + photo.urls.regular + ')');
                if (entrance_isCompleted && !background_isShown) {
                    show_background();
                }
                background_isLoaded = true;
                $(this).remove();
            }).attr('src', photo.urls.regular);
        }
    });
}

// var backgroundIsLoaded = false;

function show_background() {
    // backgroundIsLoaded = true;
    background_isShown = true;
    $('.background').css('opacity', '1');
    $('.attribution').addClass('peek');
    setTimeout( function() {
        $('.attribution').removeClass('peek');
    }, 5000);
}

// function remove_desc() {
//     var $desc_elem = $('.desc_text h2');
//     var current_desc = $desc_elem.text();
//     $desc_elem.text(current_desc.substring(0, current_desc.length-1));
//     setTimeout(current_desc.length==0 ? type_desc : remove_desc, 50);
// }

// function type_desc() {
//     console.log("typedesc!");
// }

// var windowIsLoaded = false;
// var entrance_complete = false;


function entrance_sequence() {
    $('.middle_hero svg').removeClass('entrance');
    setTimeout( function() {
        $('.middle_hero svg #lower_left').removeClass('entrance');
        setTimeout( function() {
            $('.middle_hero svg #upper_left').removeClass('entrance');
            setTimeout( function() {
                $('.middle_hero, .middle_hero h1').removeClass('entrance');
                setTimeout( function() {
                    $('.desc_text').removeClass('entrance');
                    setTimeout( function() {
                        $('.top_nav, .bottom_social').removeClass('entrance');
                        // if (windowIsLoaded && !backgroundIsLoaded) {
                        //     setTimeout(show_background, 250);
                        // }
                        // entrance_complete = true;
                        setTimeout( function() {
                            if (background_isLoaded && !background_isShown) {
                                show_background();
                            }
                            $('.attribution').removeClass('entrance');
                            entrance_isCompleted = true;
                        }, 250)
                        // setTimeout( function() {}, 250);
                    }, 750);
                }, 150);
            }, 750); //delay
        }, 75);
    }, 75);
}

// $('.background').on('load', function() {
//     if (entrance_isCompleted && !background_isShown) {
//         show_background();
//     }
//     background_isLoaded = true;
// });

$(document).ready(function() {
    fetch_background();
    // $('.middle_hero').css('transition', 'none').addClass('entrance');
    // setTimeout(function() {$('.middle_hero').css('transition', '')}, 1);
    entrance_sequence();
});

$(window).on('load', function() {
    // entrance_sequence();
    // $('.background').css('opacity', '1');
    // if (entrance_complete && !backgroundIsLoaded) {
    //     show_background();
    // }
    // windowIsLoaded = true;
    setTimeout(change_desc, desc_delay);
});
