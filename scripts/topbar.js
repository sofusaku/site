// var hamburger_button = document.getElementById("hamburger_button");
function topBar() {
    document.getElementById('hamburger_button').onclick = function () {
        if (this.classList.contains('expanded')) {
            this.classList.remove('expanded');
            document.getElementById('dropdown_mobile').classList.remove('expanded');
            $('.menu_dim').animate({opacity: 'hide'}, 250);
        } else {
            this.classList.add('expanded');
            document.getElementById('dropdown_mobile').classList.add('expanded');
            $('.menu_dim').animate({opacity: 'show'}, 250);
        }
    }
    $('.menu_dim').on('click', function() { //mousedown?
        $('#hamburger_button').removeClass('expanded');
        document.getElementById('dropdown_mobile').classList.remove('expanded');
        $(this).animate({opacity: 'hide'}, 250);
    })
    $('.dark_switcher .toggle').on('click', function() {
        if ( $(this).parent().hasClass('on') ) {
            $(this).parent().removeClass('on');
        } else {
            $(this).parent().addClass('on');
        }
    })
    $('.dark_switcher .icon.dark').on('click', function() {
        if ( !$(this).parent().hasClass('on') ) {
            $(this).parent().addClass('on');
        }
    })
    $('.dark_switcher .icon.light').on('click', function() {
        if ( $(this).parent().hasClass('on') ) {
            $(this).parent().removeClass('on');
        }
    })
    // experimental below
    // $('.center_elem a').on('click', function() {
    //     // var scale_multiplier = 100 / $('.header').height();
    //     $('.header').css('background-color', 'black').animate({height: '100%'}, 500);
    //     $('.topbar_container').css('opacity', '0');
    // })
}