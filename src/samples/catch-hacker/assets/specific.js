
// Get the data
var jsonData = {};
$.getJSON('data.json',function(data){
    jsonData = data;
});

// Setup map view
function setupMap() {
    
    var streetMapLayer = new ol.layer.Tile({
        source: new ol.source.OSM()
    });

    var view = new ol.View({
        center: ol.proj.transform([-95, 42], 'EPSG:4326', 'EPSG:3857'),
        zoom: 1
    });

    var map = new ol.Map({
        target: 'map',
        layers: [streetMapLayer],
        view: view
    });

}

function putHackerOnMap(coords) {

}

function getRandomQuestionFromData() {
    return { "question": "This is a question", "coords": [45.496089, -73.569315] };
}

function nextQuestion() {
    var question = getRandomQuestionFromData();
    $('#question').text(question.question);

    putHackerOnMap(quetion.coords);
}

$( document ).ready(function() {
    
    setupMap();

});
