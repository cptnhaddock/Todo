define([
    'backbone',
    'router'
], function(Backbone, AppRouter){
    var initialize = function(){
        var app_router = new AppRouter();
        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});