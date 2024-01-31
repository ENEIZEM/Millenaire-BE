LIBRARY({
    name: "JETranslateAPI",
    version: 1,
    shared: false,
    api: "CoreEngine"
})

let JETranslation = {
    language: {
        "en_us": [],
        "bg_bg": [],
        "cs_cz": [],
        "da_dk": [],
        "de_de": [],
        "el_gr": [],
        "en_gb": [],
        "es_es": [],
        "es_mx": [],
        "fi_fi": [],
        "fr_ac": [],
        "fr_fr": [],
        "hu_hu": [],
        "id_id": [],
        "it_it": [],
        "ja_jp": [],
        "ko_kr": [],
        "nb_no": [],
        "nl_nl": [],
        "pl_pl": [],
        "pt_br": [],
        "pt_pt": [],
        "ru_ru": [],
        "sk_sk": [],
        "tr_tr": [],
        "uk_ua": [],
        "zh_cn": [],
        "zh_tw": [],
    },
    getPathToTranslateDir: function(){
        let pathToDir = __dir__ + "lang";
        let resources;
        let path = FileTools.ReadJSON(__dir__+"build.config").resources;
        for(resources = path.length - 1; resources >= 0; --resources){
            if(path[resources].resourceType == "java_edition_translate"){
                pathToDir = __dir__ + path[resources].path
                break;
            };
        };
        this.PathToTranslateDir = pathToDir
    }(),
    getPathsForEachlanguage: function(){
        //проверяем, являются ли файлы в дирректории файлами перевода, достаточно наличие файла en.txt/en_us.txt/en_US.txt/en.lang/en_us.lang/en_US.lang
        let pathsToFiles = GetListOfFiles(path);
        for(let indexOfPath = 0; indexOfPath < pathsToDirs.length - 1; indexOfPath++){
            for(let indexOfKey = 0; indexOfKey < 29; indexOfKey++){
                let nameOfKey = Object.keys(this.language)[indexOfKey];
                let nameOfFile = pathsToFiles[indexOfPath].getName().substring(0, 5);
                let arrayOfKeyName = [nameOfKey + ".lang", nameOfKey.substring(0, 2) + ".lang", nameOfKey.substring(0, 3) + nameOfKey.substring(3, 5).toUpperCase() + ".lang", nameOfKey + ".txt", nameOfKey.substring(0, 2) + ".txt", nameOfKey.substring(0, 3) + nameOfKey.substring(3, 5).toUpperCase() + ".txt"];
                if(!!~arrayOfKeyName.indexOf(nameOfFile)){
                    //TODO
                    break;
                }
            }
        };
        //проверяем, являются ли папки в дирректории папками с файлами перевода, достаточно наличие папки en/en_us/en_US
        let pathsToDirs = FileTools.GetListOfDirs(path);
        for(let indexOfPath = 0; indexOfPath < pathsToDirs.length - 1; indexOfPath++){
            for(let indexOfKey = 0; indexOfKey < 29; indexOfKey++){
                let nameOfKey = Object.keys(this.language)[indexOfKey];
                let nameOfDir = pathsToDirs[indexOfPath].getName();
                arrayOfKeyName = [nameOfKey, nameOfKey.substring(0, 2), nameOfKey.substring(0, 3) + nameOfKey.substring(3, 5).toUpperCase()]
                if(!!~arrayOfKeyName.indexOf(nameOfFile)){
                    //TODO
                    break;
                }
            }
        };
    }(),
    javaAndBedrockTranslation: function(key, path){
      let language = {
        "en_us": ["en", "en_us"],
        "en_gb": ["en", "en_gb"],
        "de_de": ["de", "de_de"],
        "es_es": ["es", "es_es"],
        "es_mx": ["es", "es_mx"],
        "fr_fr": ["fr", "fr_fr"],
        "fr_ac": ["fr", "fr_ac"],
        "it_it": ["it", "it_it"],
        "ja_jp": ["ja", "ja_jp"],
        "ko_kr": ["ko", "ko_kr"],
        "pt_br": ["pt", "pt_br"],
        "pt_pt": ["pt", "pt_pt"],
        "ru_ru": ["ru", "ru_ru"],
        "zh_cn": ["zh", "zh_cn"],
        "zh_tw": ["zh", "zh_tw"],
        "nl_nl": ["nl", "nl_nl"],
        "bg_bg": ["bg", "bg_bg"],
        "cs_cz": ["cs", "cs_cz"],
        "da_dk": ["da", "da_dk"],
        "el_gr": ["el", "el_gr"],
        "fi_fi": ["fi", "fi_fi"],
        "hu_hu": ["hu", "hu_hu"],
        "id_id": ["id", "id_id"],
        "nb_no": ["nb", "nb_no"],
        "pl_pl": ["pl", "pl_pl"],
        "sk_sk": ["sk", "sk_sk"],
        "tr_tr": ["tr", "tr_tr"],
        "uk_ua": ["uk", "uk_ua"],
      };


      FileTools.isExists(path + "en_US.lang") ? FileTools.ReadKeyValueFile(path + "en_US.lang", "=")[key] : key

        //переводы файлов формата lang и txt
        //переводы двубуквенных файлов
        //переводы 4-х буквенных файлов с верхним регистром
        //переводы 4-х буквенных файлов с нижним регистром
        
    },
    translate: function(key, path = this.getPathToTranslateDir()){
        Translation.translate(key);
        if (!!path){
            Translation.addTranslation(key, {
                "en": FileTools.isExists(path + "en_US.lang") ? FileTools.ReadKeyValueFile(path + "en_US.lang", "=")[key] : key
            })
        }
    }
};