$(document).ready(function() {
    $('.btn-projetos').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
        let filter = $(this).attr('data-filter')
        if (filter == 'all') {
            $('.img-projetos').show(400)
        } else {
            $('.img-projetos').not('.' + filter).hide(200);
            $('.img-projetos').filter('.' + filter).show(400);
        }
    })
})