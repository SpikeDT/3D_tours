var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room",
      "name": "Living room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 0.006263836600005845,
        "pitch": 0,
        "fov": 1.4669021853052546
      },
      "linkHotspots": [
        {
          "yaw": -1.6106270599974373,
          "pitch": 0.36340612928088944,
          "rotation": 0,
          "target": "1-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.558262481135733,
          "pitch": 0.37301397213496656,
          "rotation": 0,
          "target": "0-living-room"
        },
        {
          "yaw": 1.5974962194343254,
          "pitch": 0.2002955828645483,
          "rotation": 0,
          "target": "2-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-corridor",
      "name": "Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.120206752217559,
          "pitch": 0.3943589173941646,
          "rotation": 0,
          "target": "0-living-room"
        },
        {
          "yaw": -3.112915271294007,
          "pitch": 0.2180450474787996,
          "rotation": 0,
          "target": "1-kitchen"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
