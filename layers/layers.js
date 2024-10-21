var wms_layers = [];


        var lyr_googlemap_0 = new ol.layer.Tile({
            'title': 'google map',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

lyr_googlemap_0.setVisible(true);
var layersList = [lyr_googlemap_0];
