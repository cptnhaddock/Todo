define([
    'backbone'
    //,'views/todo/todo'
], function(Backbone, TodoView){
    var AppRouter = Backbone.Router.extend({
        routes: {
            // Define some URL routes
            'todo': 'showTodo',
            '' : 'showTodo'
        },
        showTodo: function(){
            //var todoView = new TodoView();
            //todoView.render();
            console.log('showtodo');
        },
        defaultAction: function() {
            console.log('No route');
        }
    });

    return AppRouter;
});