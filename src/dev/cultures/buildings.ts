type buildings = {
  //The main parameters of the building
  cultureId: string,
  buildingId: string,
  livingVillagersId?: string[],
  workersVillagersId?: string[],
  type: string,
  name: any,
  nativeName: string,
  length: number,
  width: number,
  pathToIcon: string,
  buildingOrientation: number,
  shop?: string,
  //Building parameters when generating it
  initial: {
    level: number,
    priority: number,
    doorsCoords: [number, number, number][],
    buildingTrailLevel?: number,
    livingVillagesId?: string[],
    workersVillagesId?: string[],
    pathToBuilding: string,
    parentBuilding?: [
      /*this building level*/ number,
      /*parent building id*/ string,
      /*parent building level*/ number,
      ],
  },
  //Building improvement parameters
  upgrade: {
    level: number,
    priority: number,
    doorsCoords?: [number, number, number][],
    buildingTrailLevel?: number,
    villageTrailLevel?: number,
    livingVillagersId?: string[],
    workersVillagersId?: string[],
    pathToBuilding: string,
    subsidiaryBuilding?: [
    /*subsidiary building id*/ string?,
    /*subsidiary building level*/ number?,
    ],
    newName?: any,
  }[]
};