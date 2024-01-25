const Millenaire: {
  cultures?: {[key in cultureId]: culture},
  norman?: {
    villages: {[key in normanVillagesId]: villages},
    buildings: {[key in normanBuildingsId]: buildings},
    villagers: {[key in normanVillagersId]: villagers},
    quests: {[key in normanQuestsId]: quests},
  },
} = {};

type cultureId = "norman" | "indian" | "mayan" | "japanese" | "byzantines" | "inuits" | "seljuk";

type culture = {
  cultureId: string,
  name: any,
  iconPath: string,
  cultivatedCrops: string[],
  banner: any,
  villagesId: {
    villagesId: string,
    buildingId: string[],
    villagersId: string[],
  }[],
  buildingId: {
    villagesId: string[],
    buildingId: string,
    villagersId: string[],
  }[],
  villagersId: {
    villagesId: string[],
    buildingId: string[],
    villagersId: string,
  }[],
};