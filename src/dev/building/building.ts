let Millenaire = {
  createBuilding: function(object: {
    //The main parameters of the building
    cultureId: string,
    villageId: string[],
    buildingId: string
    name: any,
    length: number,
    width: number,
    iconPath: string,
    buildingPath: string,
    doorsCoords: [number, number, number][],
    //Building parameters when generating it
    initial: {
      villagers: number,
      level: number,
      priority: number,
    },
    //Building improvement parameters
    upgrade: [/*villagers*/ number, /*priority*/ number, /*replacing paths*/ boolean, /*array of building ids*/ string[]][]
  }) {
    this.getContent = function() {
      return object
    }
  },
};