define(['backbone',
    'DoMes'],
    function (Backbone, DoMes) {
        var DoMesView = Backbone.View.extend({
            collection: DoMes
        });

        return DoMesView;
    }
);
