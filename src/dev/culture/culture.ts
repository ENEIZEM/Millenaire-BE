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
      villagers:  {
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
    buildingIds: string[],
    villagersIds: string[],
  }[],
  buildingId: {
    villagesIds: string[],
    buildingId: string,
    villagersIds: string[],
  }[],
  villagersId: {
    villagesIds: string[],
    buildingIds: string[],
    villagersId: string,
  }[],
};