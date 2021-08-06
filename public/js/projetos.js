$(document).ready(function() {
    $('.btn-projetos').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
        var filter = $(this).attr('data-filter')
        if (filter == 'completo') {
            $('.img-projetos').show(400)
        } else {
            $('.img-projetos').not('.' + filter).hide(200);
            $('.img-projetos').filter('.' + filter).show(400);
        }
    })
    $('.galeria-projetos').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    })
})