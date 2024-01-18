const Millenaire: {
  cultures?: {
    [key in cultureIds]: culture
  },
  norman?: {
      villages: {
          [key in normanVillagesId]: villages
      },
      buldings: {
          [key in normanBuildingId]: building
      },
      villagers: {
          [key in normanVillagersId]: villagers
      },
  },
} = {};

type cultureIds = "norman" | "indian" | "mayan" | "japanese" | "byzantines" | "inuits" | "seljuk";

type culture = {
  cultureId: string,
  name: any,
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