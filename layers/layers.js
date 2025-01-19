var wms_layers = [];
var format_Sungai_0 = new ol.format.GeoJSON();
var features_Sungai_0 = format_Sungai_0.readFeatures(json_Sungai_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Sungai_0.addFeatures(features_Sungai_0);var lyr_Sungai_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sungai_0, 
                style: style_Sungai_0,
                title: '<img src="styles/legend/Sungai_0.png" /> Sungai'
            });var format_DesaIndonesia_1 = new ol.format.GeoJSON();
var features_DesaIndonesia_1 = format_DesaIndonesia_1.readFeatures(json_DesaIndonesia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaIndonesia_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_DesaIndonesia_1.addFeatures(features_DesaIndonesia_1);var lyr_DesaIndonesia_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DesaIndonesia_1, 
                style: style_DesaIndonesia_1,
                title: '<img src="styles/legend/DesaIndonesia_1.png" /> DesaIndonesia'
            });var format_Rumah_2 = new ol.format.GeoJSON();
var features_Rumah_2 = format_Rumah_2.readFeatures(json_Rumah_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rumah_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Rumah_2.addFeatures(features_Rumah_2);var lyr_Rumah_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rumah_2, 
                style: style_Rumah_2,
                title: '<img src="styles/legend/Rumah_2.png" /> Rumah'
            });var format_Jalan_3 = new ol.format.GeoJSON();
var features_Jalan_3 = format_Jalan_3.readFeatures(json_Jalan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Jalan_3.addFeatures(features_Jalan_3);var lyr_Jalan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_3, 
                style: style_Jalan_3,
                title: '<img src="styles/legend/Jalan_3.png" /> Jalan'
            });

lyr_Sungai_0.setVisible(true);lyr_DesaIndonesia_1.setVisible(true);lyr_Rumah_2.setVisible(true);lyr_Jalan_3.setVisible(true);
var layersList = [lyr_Sungai_0,lyr_DesaIndonesia_1,lyr_Rumah_2,lyr_Jalan_3];
lyr_Sungai_0.set('fieldAliases', {'id': 'id', 'Sungai': 'Sungai', });
lyr_DesaIndonesia_1.set('fieldAliases', {});
lyr_Rumah_2.set('fieldAliases', {'id': 'id', 'Rumah': 'Rumah', });
lyr_Jalan_3.set('fieldAliases', {});
lyr_Sungai_0.set('fieldImages', {'id': 'TextEdit', 'Sungai': 'TextEdit', });
lyr_DesaIndonesia_1.set('fieldImages', {});
lyr_Rumah_2.set('fieldImages', {'id': 'TextEdit', 'Rumah': 'TextEdit', });
lyr_Jalan_3.set('fieldImages', {});
lyr_Sungai_0.set('fieldLabels', {'id': 'no label', 'Sungai': 'no label', });
lyr_DesaIndonesia_1.set('fieldLabels', {});
lyr_Rumah_2.set('fieldLabels', {'id': 'no label', 'Rumah': 'no label', });
lyr_Jalan_3.set('fieldLabels', {});
lyr_Jalan_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});