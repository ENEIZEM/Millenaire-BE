const Millenaire: {
  //createCulture?: any,
  //createVillage?: any,
  //createBuilding?: any,
  cultures?: {[key in cultureId]: culture},
  norman?: {
      villages: {
          [key in normanVillagesId]: villages
      };
      buldings: {
          [key in normanBuldingId]: bulding
      };
      villagers:  {
          [key in normanVillagersId]: villagers
      };
  }
} = {};

type cultureId = "norman" | "indian" | "mayan" | "japanese" | "byzantines" | "inuits" | "seljuk";
type normanVillagesId = "";
type normanBuldingId = "";
type normanVillagersId = "";

type culture = {
  name: string,
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
type villages = {};
type bulding = {};
type villagers = {};