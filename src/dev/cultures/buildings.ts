type buildings = {
  //The main parameters of the building
  cultureId: string,
  villagesId: string[],
  buildingId: string,
  villagersId: string[],
  type: string,
  name: any,
  nativeName: string,
  length: number,
  width: number,
  iconPath: string,
  orientation: number,
  parentBuilding: [
    /*Building id*/ string,
    /*Building level*/ number,
    ],
  //Building parameters when generating it
  initial: {
    level: number,
    priority: number,
    pathLevel: number,
    villagers: string[],
    buildingPath: string,
    doorsCoords: [number, number, number][],
  },
  //Building improvement parameters
  upgrade: [
    /*level of construction*/ number,
    /*priority of construction*/ number,
    /*villagers*/ string[],
    /*level of paths*/ number,
    /*path to the building file*/ string,
    /*array of building ids*/ string[],
    /*coordinates of the doors*/ [number, number, number][],
    /*new name*/ any,
  ][]
};