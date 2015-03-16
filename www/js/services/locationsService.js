angular.module('starter').factory('LocationsService', [ function() {

  var locationsObj = {};

  locationsObj.savedLocations = [
    {
      name : "Target TP3",
      lat : 44.975032,
      lng : -93.274549
    },
    {
      name : "Target TPN",
      lat : 44.9738397,
      lng : -93.2754874
    },
    {
      name: "Target Commons",
      lat: 44.9736565,
      lng: -93.2745246
    },
    {
      name: "Target Store",
      lat: 44.9751308,
      lng: -93.2735751
    },
    {
      name : "Chipotle",
      lat : 44.9735085,
      lng : -93.2754352
    },
    {
      name : "Barrio Mexican Restaurant",
      lat : 44.9735085,
      lng : -93.2754352
    },
    {
      name : "Qdoba Mexican Grill",
      lat : 44.9739601,
      lng : -93.2751187
    },
    {
      name : "Target Pharmacy",
      lat : 44.9746091,
      lng : -93.2744803
    },
    {
      name: "Caribou Coffee",
      lat: 44.9750417,
      lng: -93.2749363
    },
    {
      name: "Andreas Pizza",
      lat: 44.975766,
      lng: -93.2745675
    },
    {
      name: 'Dairy Queen',
      lat: 44.9755554,
      lng: -93.2733149
    },
    {
      name: "Jimmy Johns",
      lat: 44.974637,
      lng: -93.2737494
    },
    {
      name: "Pot Belly Sandwhiches",
      lat: 44.9757167,
      lng: -93.271263
    },
    {
      name: "Which Wich Sandwhiches",
      lat: 44.9754748,
      lng: -93.2737876
    },
    {
      name: "Erberts & Gerberts Sandwhiches",
      lat: 44.9753154,
      lng: -93.275279
    },
    {
      name: "Brits Pubb Bar & Grill",
      lat: 44.9738733,
      lng: -93.2754399
    },
    {
      name: "Yogurt Lab",
      lat: 44.97608,
      lng: -93.2726812
    }

  ];

  return locationsObj;

}]);

