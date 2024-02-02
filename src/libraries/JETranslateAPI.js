LIBRARY({
    name: "JETranslateAPI",
    version: 1,
    shared: false,
    api: "CoreEngine"
})

let JETranslation = {
    language: {
        "en_us": {},
        "bg_bg": {},
        "cs_cz": {},
        "da_dk": {},
        "de_de": {},
        "el_gr": {},
        "en_gb": {},
        "es_es": {},
        "es_mx": {},
        "fi_fi": {},
        "fr_ac": {},
        "fr_fr": {},
        "hu_hu": {},
        "id_id": {},
        "it_it": {},
        "ja_jp": {},
        "ko_kr": {},
        "nb_no": {},
        "no_no": {},
        "nl_nl": {},
        "pl_pl": {},
        "pt_br": {},
        "pt_pt": {},
        "ru_ru": {},
        "sk_sk": {},
        "tr_tr": {},
        "uk_ua": {},
        "zh_cn": {},
        "zh_tw": {},
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
        this.pathToTranslateDir = pathToDir
    }(),

    getPathsForEachlanguage: function(path){
        //проверяем, являются ли файлы в дирректории файлами перевода, достаточно наличие файла en.txt/en_us.txt/en_US.txt/en.lang/en_us.lang/en_US.lang
        let pathsToFiles = FileTools.GetListOfFiles(path);
        let pathsToDirs = FileTools.GetListOfDirs(path);
        let pathsToFilesAndDirs = pathsToFiles.concat(pathsToDirs)
        for(let indexOfPath = 0; indexOfPath < pathsToFilesAndDirs.length - 1; indexOfPath++){
            for(let indexOfKey = 0; indexOfKey < 30; indexOfKey++){
                let nameOfKey = Object.keys(this.language)[indexOfKey];
                //let nameOfFile = pathsToFiles[indexOfPath].getName();
                //let nameOfDir = pathsToDirs[indexOfPath].getName();
                //let arrayOfKey = [nameOfKey, nameOfKey.slice(0, 2), nameOfKey.slice(0, 3) + nameOfKey.slice(3, 5).toUpperCase()];
                //if(!!~arrayOfKey.indexOf(nameOfFile.slice(0, nameOfFile.lastIndexOf("."))) || !!~arrayOfKey.indexOf(nameOfDir)){
                    function setPathsForEachlanguage(arrayOfPaths){        
                        let arrayOfNextLevelPaths;
                        arrayOfPaths.forEach(function(element){
                            if (element.isFile()){
                                Object.assign(this.language[nameOfKey], element.ReadKeyValueFile(element.getPath(), "="))
                            } else if (element.isDirectory()){
                                arrayOfNextLevelPaths = FileTools.GetListOfDirs(element.getPath())
                            }
                        });
                        if (!arrayOfNextLevelPaths){
                            setPathsForEachlanguage(arrayOfNextLevelPaths)
                        }
                    }(pathsToFilesAndDirs);
                //} else if (!indexOfKey){
                //    break;
                //}
            }
        }
    }(this.pathToTranslateDir),

    translate: function(key){
        function getLanguageKey(languageKey){
            return this.language[languageKey][key]
        };
        Translation.translate(key);
        Translation.addTranslation(key, {
            "en_us": !!getLanguageKey("en_us") ? getLanguageKey("en_us") : key,
            "bg_bg": !!getLanguageKey("bg_bg") ? getLanguageKey("bg_bg") : this["en_us"],
            "cs_cz": ,
            "da_dk": ,
            "de_de": ,
            "el_gr": ,
            "en_gb": ,
            "es_es": ,
            "es_mx": ,
            "fi_fi": ,
            "fr_ac": ,
            "fr_fr": ,
            "hu_hu": ,
            "id_id": ,
            "it_it": ,
            "ja_jp": ,
            "ko_kr": ,
            "nb_no": ,
            "no_no": ,
            "nl_nl": ,
            "pl_pl": ,
            "pt_br": ,
            "pt_pt": ,
            "ru_ru": ,
            "sk_sk": ,
            "tr_tr": ,
            "uk_ua": ,
            "zh_cn": ,
            "zh_tw": ,
        })
    }
};