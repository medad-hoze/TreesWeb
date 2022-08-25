var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_QueryLayer_1 = new ol.format.GeoJSON();
var features_QueryLayer_1 = format_QueryLayer_1.readFeatures(json_QueryLayer_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QueryLayer_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QueryLayer_1.addFeatures(features_QueryLayer_1);
var lyr_QueryLayer_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_QueryLayer_1, 
                style: style_QueryLayer_1,
                interactive: true,
                title: '<img src="styles/legend/QueryLayer_1.png" /> QueryLayer'
            });

lyr_OSMStandard_0.setVisible(true);lyr_QueryLayer_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_QueryLayer_1];
lyr_QueryLayer_1.set('fieldAliases', {'shp_source': 'shp_source', 'DN': 'DN', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_QueryLayer_1.set('fieldImages', {'shp_source': '', 'DN': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_QueryLayer_1.set('fieldLabels', {'shp_source': 'no label', 'DN': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_QueryLayer_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});