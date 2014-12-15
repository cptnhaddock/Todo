define(['backbone'],
    function (Backbone) {
        var DoMe = Backbone.Model.extend({
            defaults: {
                task: '',
                done: false,
                date: Date.now()
            }
        });

        return DoMe;
    }
);