type buildings = {
  //The main parameters of the building
  readonly cultureId: string,
  readonly buildingId: string,
  readonly livingVillagersId?: string[],
  readonly workersVillagersId?: string[],
  readonly type: string,
  readonly name: any,
  readonly nativeName: string,
  readonly length: number,
  readonly width: number,
  readonly pathToIcon: string,
  readonly buildingOrientation: number,
  readonly shop?: string,
  //Building parameters when generating it
  readonly initial: {
    readonly level: number,
    readonly priority: number,
    readonly doorsCoords: [number, number, number][],
    readonly buildingTrailLevel?: number,
    readonly livingVillagesId?: string[],
    readonly workersVillagesId?: string[],
    readonly pathToBuilding: string,
    readonly parentBuilding?: [
      /*this building level*/ number,
      /*parent building id*/ string,
      /*parent building level*/ number,
      ],
  },
  //Building improvement parameters
  readonly upgrade: {
    readonly level: number,
    readonly priority: number,
    readonly doorsCoords?: [number, number, number][],
    readonly buildingTrailLevel?: number,
    readonly villageTrailLevel?: number,
    readonly livingVillagersId?: string[],
    readonly workersVillagersId?: string[],
    readonly pathToBuilding: string,
    readonly subsidiaryBuilding?: [
    /*subsidiary building id*/ string?,
    /*subsidiary building level*/ number?,
    ],
    readonly parentBuilding?: [
      /*this building level*/ number,
      /*parent building id*/ string,
      /*parent building level*/ number,
    ],
    readonly newName?: any,
  }[]
};