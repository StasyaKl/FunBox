$(document).ready(() => {
    $(".block-item").on("click", function () {
        if(!$(this).hasClass('disabled')) {
            $(this).children('.block-item-form').toggleClass('active');
            $(this).children('.block-item-form').children('.block-item-card').children('.weight').toggleClass('active');
            $(this).children('.block-item-block').hide();
            $(this).children('.block-item-select').show();
            $(this).children('.block-item-form').children('.block-item-card').children('.block-item-text').hide();
            $(this).children('.block-item-form').children('.block-item-card').children('.block-item-text-select').show();
        }
        if(!$(this).children('.block-item-form').hasClass('active')) {
            $(this).children('.block-item-block').show();
            $(this).children('.block-item-select').hide();
            $(this).children('.block-item-form').children('.block-item-card').children('.block-item-text').show();
            $(this).children('.block-item-form').children('.block-item-card').children('.block-item-text-select').hide();
        }
        if($(this).hasClass('disabled')) {
            $(this).children('.block-item-block').hide();
        }
    });

    function disabled(x) {
        x = $(".disabled");
        x.children('.block-item-block').hide();
        x.children('.block-item-select').hide();
        x.children('.block-item-disabled').show();
        x.children('.block-item-form').addClass('disabled');
        x.children('.block-item-form').children('.block-item-card').children('.weight').toggleClass('disabled');
        x.children('.block-item-form').children('.block-item-card').children('.block-item-text').css('color', '#b3b3b3');
        x.children('.block-item-form').children('.block-item-card').children('.title').css('color', '#b3b3b3');
        x.children('.block-item-form').children('.block-item-card').children('.features').css('color', '#b3b3b3');
    }
    disabled();
})
