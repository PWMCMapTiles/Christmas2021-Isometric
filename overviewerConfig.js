var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "world"
    ],
    "map": {
        "debug": false,
        "cacheTag": "1641618015",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Isometric Daytime",
            "zoomLevels": 8,
            "defaultZoom": 5,
            "maxZoom": 8,
            "path": "isoday",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "world",
            "last_rendertime": 1641162634,
            "imgextension": "webp",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": false,
            "center": [
                397,
                112,
                845
            ],
            "minZoom": 3,
            "spawn": false,
            "north_direction": 1
        },
        {
            "name": "Isometric Nighttime",
            "zoomLevels": 8,
            "defaultZoom": 5,
            "maxZoom": 8,
            "path": "isonight",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "world",
            "last_rendertime": 1641162634,
            "imgextension": "webp",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": false,
            "center": [
                397,
                112,
                845
            ],
            "minZoom": 3,
            "spawn": false,
            "north_direction": 1
        }
    ]
};
