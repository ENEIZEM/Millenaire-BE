Millenaire.norman.buildings.abbey = {
  cultureId: "norman",
  buildingId: "abbey",
  livingVillagersId: ["abbot"],
  workersVillagersId: ["abbot"],
  type: "towhalls",
  name: Translation.translate("abbey"),
  nativeName: "Abbaye",
  length: 32,
  width: 32,
  pathToIcon: "",
  buildingOrientation: 1,
  shop: "townhall",
  initial: {
    level: 0,
    priority: 600,
    doorsCoords: [[0, 0, 0]],
    buildingTrailLevel: 1,
    pathToBuilding: "",
  },
  upgrade: [{
    level: 1,
    priority: 580,
    doorsCoords: [[0, 0, 0]],
    buildingTrailLevel: 2,
    pathToBuilding: "",
    subsidiaryBuilding: ["abbey_altar", 0],
  }, {
    level: 2,
    priority: 560,
    pathToBuilding: "",
  }, {
    level: 3,
    priority: 540,
    pathToBuilding: "",
    subsidiaryBuilding: ["abbey_cell", 1],
  }, {
    level: 4,
    priority: 520,
    pathToBuilding: "",
  }, {
    level: 5,
    priority: 500,
    pathToBuilding: "",
    villageTrailLevel: 3,
  }, {
    level: 6,
    priority: 480,
    pathToBuilding: "",
  }, {
    level: 7,
    priority: 460,
    pathToBuilding: "",
  }, {
    level: 8,
    priority: 440,
    pathToBuilding: "",
    subsidiaryBuilding: ["abbey_cell", 2],
  }, {
    level: 9,
    priority: 420,
    pathToBuilding: "",
  }, {
    level: 10,
    priority: 400,
    pathToBuilding: "",
    subsidiaryBuilding: ["abbey_tower", 0],
  }]
};

//Улучшение структуры кода; продолжение работы над ратушей "Аббатство" культуры Норманнов