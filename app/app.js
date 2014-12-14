/*global require*/
'use strict';

require.config({
    shim: {
        handlebars : {
            exports : 'Handlebars'
        }
    },
    paths: {
        jquery: 'lib/jquery/dist/jquery',
        backbone: 'lib/backbone/backbone',
        underscore: 'lib/underscore/underscore',
        handlebars: 'lib/handlebars/handlebars',
        text: 'lib/requirejs-text/text'
    }
});

require([
    'main'
], function (Main) {
    Main.initialize();
});
