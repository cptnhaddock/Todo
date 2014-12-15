define(['backbone',
    'DoMe'],
    function (Backbone, DoMe) {
        var DoMes = Backbone.Collection.extend({
           model: DoMe
        });

        return DoMes;
    }
);
