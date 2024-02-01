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

    getPathsForEachlanguage: function(){
        //проверяем, являются ли файлы в дирректории файлами перевода, достаточно наличие файла en.txt/en_us.txt/en_US.txt/en.lang/en_us.lang/en_US.lang
        let pathsToFiles = FileTools.GetListOfFiles(path);
        let pathsToDirs = FileTools.GetListOfDirs(path);
        let pathsToFilesAndDirs = pathsToFiles.concat(pathsToDirs)
        for(let indexOfPath = 0; indexOfPath < pathsToFilesAndDirs.length - 1; indexOfPath++){
            for(let indexOfKey = 0; indexOfKey < 30; indexOfKey++){
                let nameOfKey = Object.keys(this.language)[indexOfKey];
                let nameOfFile = pathsToFiles[indexOfPath].getName();
                let nameOfDir = pathsToDirs[indexOfPath].getName();
                let arrayOfKey = [nameOfKey, nameOfKey.slice(0, 2), nameOfKey.slice(0, 3) + nameOfKey.slice(3, 5).toUpperCase()];
                if(!!~arrayOfKey.indexOf(nameOfFile.slice(0, nameOfFile.lastIndexOf("."))) || !!~arrayOfKey.indexOf(nameOfDir)) {
                    function setPathsForEachlanguage(arrayOfPaths){
                        //в объект language для соответствующего языка добавляются все пары вида "ключ: перевод" из всех файлов перевода
                        //this.language[nameOfKey].push(pathsToFiles[indexOfPath].getName())
                        //this.language[nameOfKey].push(pathsToFiles[pathsToDirs].getName())
                        setPathsForEachlanguage()
                    }(this.pathsToFilesAndDirs);
                } else if (!indexOfKey){
                    break;
                }
            }
        }
    }(this.pathToTranslateDir),

    translate: function(key, path = this.getPathToTranslateDir()){
        Translation.translate(key);
        if (!!path){
            Translation.addTranslation(key, {
                "en": FileTools.isExists(path + "en_US.lang") ? FileTools.ReadKeyValueFile(path + "en_US.lang", "=")[key] : key
            })
        }
    }
};