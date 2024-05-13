LIBRARY({
    name: "SimpleTranslationLib",
    version: 1,
    shared: false,
    api: "CoreEngine"
})

let SimpleTranslation = {
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
        "fr_fr": {},
        "fr_ac": {},
        "hu_hu": {},
        "id_id": {},
        "it_it": {},
        "ja_jp": {},
        "ko_kr": {},
        "no_no": {},
        "nb_no": {},
        "nl_nl": {},
        "pl_pl": {},
        "pt_pt": {},
        "pt_br": {},
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
        SimpleTranslation.pathToTranslateDir = pathToDir
    }(),

    getPathsForEachlanguage: function(path){
        //создаём перемнную для массива, хранящего названия ключей объекта SimpleTranslation.language
        let arrayOfKey = Object.keys(SimpleTranslation.language);
        //создаём перемнную для массива путей к файлам, находящимся в папке path
        let pathsToFiles = FileTools.GetListOfFiles(path);
        //создаём перемнную для массива путей к директориям, находящимся в папке path
        let pathsToDirs = FileTools.GetListOfDirs(path);
        //создаём перемнную для объединения массивов путей к файлам и директориям, находящимся в папке path
        let pathsToFilesAndDirs = pathsToFiles.concat(pathsToDirs)
        //создаём цикл с индексом indexOfPath. При каждой итерации цикла будут перебираться все файлы и директории из массива путей к файлам и директориям, находящимся в папке path
        for(let indexOfPath = 0; indexOfPath < pathsToFilesAndDirs.length - 1; indexOfPath++){
            //создаём перемнную, хранящую название текущего файла или директории из массива путей к файлам и директориям, находящимся в папке path
            let fileOrDirName = pathsToFilesAndDirs[indexOfPath].getName()
            //создаём цикл с индексом indexOfKey. При каждой итерации цикла будут перебираться все языковые объекты ключей объекта SimpleTranslation.language
            for(let indexOfKey = 0; indexOfKey < 30; indexOfKey++){
                //создаём перемнную, хранящую название текущего языкового ключа объекта SimpleTranslation.language
                let nameOfKey = arrayOfKey[indexOfKey];  
                //создаём перемнную для массива возможных названий файла или директории из массива путей к файлам и директориям, находящимся в папке path, на основе названия текущего языкового ключа объекта SimpleTranslation.language
                let arrayOfExamples = [nameOfKey, nameOfKey.slice(0, 2), nameOfKey.slice(0, 3) + nameOfKey.slice(3, 5).toUpperCase()];
                //проверка того, что название текущего файла или директории из массива путей к файлам и директориям, находящимся в папке path, соответствует одному из возможных названий файла или директории
                if(!!~arrayOfExamples.indexOf(fileOrDirName.slice(0, fileOrDirName.lastIndexOf(".") != -1 ? fileOrDirName.lastIndexOf(".") : fileOrDirName.length))){
                    function setPathsForEachlanguage(arrayOfPaths){        
                        let arrayOfNextLevelPaths = [];
                        arrayOfPaths.forEach(function(element){
                            if (element.isFile()){
                                Object.assign(SimpleTranslation.language[nameOfKey], element.ReadKeyValueFile(element.getPath(), "="))
                            } else if (element.isDirectory()){
                                arrayOfNextLevelPaths = FileTools.GetListOfDirs(element.getPath())
                            }
                        });
                        if (!arrayOfNextLevelPaths){
                            setPathsForEachlanguage(arrayOfNextLevelPaths)
                        }; 
                    }(pathsToFilesAndDirs[indexOfPath].getPath());
                    arrayOfKey.splice(indexOfKey, 1);
                    break;
                };       
            }
        }
    }(SimpleTranslation.pathToTranslateDir),

    translate: function(key){
        function getLanguageKey(languageKey){
            return SimpleTranslation.language[languageKey][key]
        };
        let translationObject = {
            "en_us": !!getLanguageKey("en_us") ? getLanguageKey("en_us") : key,
            "bg_bg": !!getLanguageKey("bg_bg") ? getLanguageKey("bg_bg") : translationObject["en_us"],
            "cs_cz": !!getLanguageKey("cs_cz") ? getLanguageKey("cs_cz") : translationObject["en_us"],
            "da_dk": !!getLanguageKey("da_dk") ? getLanguageKey("da_dk") : translationObject["en_us"],
            "de_de": !!getLanguageKey("de_de") ? getLanguageKey("de_de") : translationObject["en_us"],
            "el_gr": !!getLanguageKey("el_gr") ? getLanguageKey("el_gr") : translationObject["en_us"],
            "en_gb": !!getLanguageKey("en_gb") ? getLanguageKey("en_gb") : translationObject["en_us"],
            "es_es": !!getLanguageKey("es_es") ? getLanguageKey("es_es") : translationObject["en_us"],
            "es_mx": !!getLanguageKey("es_mx") ? getLanguageKey("es_mx") : translationObject["es_es"],
            "fi_fi": !!getLanguageKey("fi_fi") ? getLanguageKey("fi_fi") : translationObject["en_us"],
            //fr_fr и fr_ac поменяны местами
            "fr_fr": !!getLanguageKey("fr_fr") ? getLanguageKey("fr_fr") : translationObject["en_us"],
            "fr_ac": !!getLanguageKey("fr_ac") ? getLanguageKey("fr_ac") : translationObject["fr_fr"],
            "hu_hu": !!getLanguageKey("hu_hu") ? getLanguageKey("hu_hu") : translationObject["en_us"],
            "id_id": !!getLanguageKey("id_id") ? getLanguageKey("id_id") : translationObject["en_us"],
            "it_it": !!getLanguageKey("it_it") ? getLanguageKey("it_it") : translationObject["en_us"],
            "ja_jp": !!getLanguageKey("ja_jp") ? getLanguageKey("ja_jp") : translationObject["en_us"],
            "ko_kr": !!getLanguageKey("ko_kr") ? getLanguageKey("ko_kr") : translationObject["en_us"],
            //no_no и nb_no поменяны местами
            "no_no": !!getLanguageKey("no_no") ? getLanguageKey("no_no") : translationObject["en_us"],
            "nb_no": !!getLanguageKey("nb_no") ? getLanguageKey("nb_no") : translationObject["no_no"],
            "nl_nl": !!getLanguageKey("nl_nl") ? getLanguageKey("nl_nl") : translationObject["en_us"],
            "pl_pl": !!getLanguageKey("pl_pl") ? getLanguageKey("pl_pl") : translationObject["en_us"],
            //pt_pt и pt_br поменяны местами
            "pt_pt": !!getLanguageKey("pt_pt") ? getLanguageKey("pt_pt") : translationObject["en_us"],
            "pt_br": !!getLanguageKey("pt_br") ? getLanguageKey("pt_br") : translationObject["pt_pt"],
            "ru_ru": !!getLanguageKey("ru_ru") ? getLanguageKey("ru_ru") : translationObject["en_us"],
            "sk_sk": !!getLanguageKey("sk_sk") ? getLanguageKey("sk_sk") : translationObject["en_us"],
            "tr_tr": !!getLanguageKey("tr_tr") ? getLanguageKey("tr_tr") : translationObject["en_us"],
            "uk_ua": !!getLanguageKey("uk_ua") ? getLanguageKey("uk_ua") : translationObject["en_us"],
            "zh_cn": !!getLanguageKey("zh_cn") ? getLanguageKey("zh_cn") : translationObject["en_us"],
            "zh_tw": !!getLanguageKey("zh_tw") ? getLanguageKey("zh_tw") : translationObject["zh_cn"],
        };
        Translation.translate(key);
        Translation.addTranslation(key, translationObject)
    }
};

EXPORT("SimpleTranslationLib", SimpleTranslation)