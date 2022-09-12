require(['gitbook', 'jquery'], function(gitbook, $) {
    var opts;

    gitbook.events.bind('start', function(e, config) {
        opts = config['hide-element'].elements;
        var headHTML = document.getElementsByTagName('head')[0].innerHTML;
    headHTML    += '<meta name="referrer" content="no-referrer">';
    document.getElementsByTagName('head')[0].innerHTML = headHTML;

    });

    gitbook.events.bind('page.change', function() {
        $.map(opts, function(ele) {
            $(ele).hide();
        });
    });
});
