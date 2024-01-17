const MAX_REPUTATION: number = 32768;
const MIN_REPUTATION: number = -1024;
const RELETATION: {
    RELATION_MIN: number,
    RELATION_OPENCONFLICT: number,
    RELATION_ATROCIOUS: number,
    RELATION_VERYBAD: number,
    RELATION_BAD: number,
    RELATION_CHILLY: number,
    RELATION_NEUTRAL: number,
    RELATION_FAIR: number,
    RELATION_DECENT: number,
    RELATION_GOOD: number,
    RELATION_VERYGOOD: number,
    RELATION_EXCELLENT: number,
    RELATION_MAX: number,
} = {
    RELATION_MIN: -100,
    RELATION_OPENCONFLICT: -90,
    RELATION_ATROCIOUS: -70,
    RELATION_VERYBAD: -50,
    RELATION_BAD: -30,
    RELATION_CHILLY: -10,
    RELATION_NEUTRAL: 0,
    RELATION_FAIR: 10,
    RELATION_DECENT: 30,
    RELATION_GOOD: 50,
    RELATION_VERYGOOD: 70,
    RELATION_EXCELLENT: 90,
    RELATION_MAX: 100,
};
const NORMAN = "norman";
const INDIAN = "indian";
const MAYAN = "mayan";
const JAPANESE = "japanese";
const BYZANTINES = "byzantines";
const INUITS = "inuits";
const SELJUK = "seljuk";

let Millenaire: {
    createCulture: any,
    createVillage: any,
    createBuilding: any,
    /*norman: {
        villagers: any,
        bulding: any,
        village: any,
    }*/
};