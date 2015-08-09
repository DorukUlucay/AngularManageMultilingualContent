angular.module('MyModule').provider('translate', function () {
    var currentCulture;
    var currentCultureCode ;
    var cultures = {
        'af-ZA'    : {}  , 'sq-AL'    : {}  , 'ar-DZ'    : {}  , 'ar-BH'  : {}, 'ar-EG'  : {}, 'ar-IQ' : {}, 'ar-JO' : {}, 'ar-KW'    : {}  , 'ar-LB'    : {},
        'ar-LY'    : {}  , 'ar-MA'    : {}  , 'ar-OM'    : {}  , 'ar-QA'  : {}, 'ar-SA'  : {}, 'ar-SY' : {}, 'ar-TN' : {}, 'ar-AE'    : {}  , 'ar-YE'    : {},
        'hy-AM'    : {}  , 'Cy-az-AZ' : {}  , 'Lt-az-AZ' : {}  , 'eu-ES'  : {}, 'be-BY'  : {}, 'bg-BG' : {}, 'ca-ES' : {}, 'zh-CN'    : {}  , 'zh-HK'    : {},
        'zh-MO'    : {}  , 'zh-SG'    : {}  , 'zh-TW'    : {}  , 'zh-CHS' : {}, 'zh-CHT' : {}, 'hr-HR' : {}, 'cs-CZ' : {}, 'da-DK'    : {}  , 'div-MV'   : {},
        'nl-BE'    : {}  , 'nl-NL'    : {}  , 'en-AU'    : {}  , 'en-BZ'  : {}, 'en-CA'  : {}, 'en-CB' : {}, 'en-IE' : {}, 'en-JM'    : {}  , 'en-NZ'    : {},
        'en-PH'    : {}  , 'en-ZA'    : {}  , 'en-TT'    : {}  , 'en-GB'  : {}, 'en-US'  : {}, 'en-ZW' : {}, 'et-EE' : {}, 'fo-FO'    : {}  , 'fa-IR'    : {},
        'fi-FI'    : {}  , 'fr-BE'    : {}  , 'fr-CA'    : {}  , 'fr-FR'  : {}, 'fr-LU'  : {}, 'fr-MC' : {}, 'fr-CH' : {}, 'gl-ES'    : {}  , 'ka-GE'    : {},
        'de-AT'    : {}  , 'de-DE'    : {}  , 'de-LI'    : {}  , 'de-LU'  : {}, 'de-CH'  : {}, 'el-GR' : {}, 'gu-IN' : {}, 'he-IL'    : {}  , 'hi-IN'    : {},
        'hu-HU'    : {}  , 'is-IS'    : {}  , 'id-ID'    : {}  , 'it-IT'  : {}, 'it-CH'  : {}, 'ja-JP' : {}, 'kn-IN' : {}, 'kk-KZ'    : {}  , 'kok-IN'   : {},
        'ko-KR'    : {}  , 'ky-KZ'    : {}  , 'lv-LV'    : {}  , 'lt-LT'  : {}, 'mk-MK'  : {}, 'ms-BN' : {}, 'ms-MY' : {}, 'mr-IN'    : {}  , 'mn-MN'    : {},
        'nb-NO'    : {}  , 'nn-NO'    : {}  , 'pl-PL'    : {}  , 'pt-BR'  : {}, 'pt-PT'  : {}, 'pa-IN' : {}, 'ro-RO' : {}, 'ru-RU'    : {}  , 'sa-IN'    : {},
        'Cy-sr-SP' : {}  , 'Lt-sr-SP' : {}  , 'sk-SK'    : {}  , 'sl-SI'  : {}, 'es-AR'  : {}, 'es-BO' : {}, 'es-CL' : {}, 'es-CO'    : {}  , 'es-CR'    : {},
        'es-DO'    : {}  , 'es-EC'    : {}  , 'es-SV'    : {}  , 'es-GT'  : {}, 'es-HN'  : {}, 'es-MX' : {}, 'es-NI' : {}, 'es-PA'    : {}  , 'es-PY'    : {},
        'es-PE'    : {}  , 'es-PR'    : {}  , 'es-ES'    : {}  , 'es-UY'  : {}, 'es-VE'  : {}, 'sw-KE' : {}, 'sv-FI' : {}, 'sv-SE'    : {}  , 'syr-SY'   : {},
        'ta-IN'    : {}  , 'tt-RU'    : {}  , 'te-IN'    : {}  , 'th-TH'  : {}, 'tr-TR'  : {}, 'uk-UA' : {}, 'ur-PK' : {}, 'Cy-uz-UZ' : {}  , 'Lt-uz-UZ' : {},
        'vi-VN'    : {}
    };

    var getCultureObject = function (cultureName) {
        if (!angular.isDefined(cultureName) || cultureName === null) {
            throw new Error('"cultureName" is undefined or null').stack;
        }
        else {
            if (cultureName.constructor.name !== "String") {
                throw new Error('"cultureName" is not a string').stack;
            } else {
                var matched = cultures[cultureName];

                if (!angular.isDefined(matched)) {
                    throw new Error('No matched culture name found').stack;
                }
                else {
                    return matched;
                }
            }
        }
    };

    var loadCulture = function (cultureName) {
        currentCulture = getCultureObject(cultureName);

        currentCultureCode = cultureName;
    };

    var add = function (cultureName, valueObj, overwrite) {

        var cultureObj = getCultureObject(cultureName);

        if (!angular.isDefined(valueObj) || valueObj === null) {
            throw new Error('"valueObj" is undefined or null').stack;
        }
        else {
            if (valueObj.constructor.name !== "Object") {
                if (valueObj.constructor.name === "String") {
                    try {
                        valueObj = JSON.parse(valueObj);
                    }
                    catch (e) {
                        throw new Error('"valueObj" is not a JSON string').stack;
                    }
                }
                else {
                    throw new Error('"valueObj" is not an object or JSON sring').stack;
                }
            }

            if (!angular.isDefined(overwrite) || typeof overwrite !== "boolean") {
                overwrite = true;
            }

            var valueObjKeys = Object.keys(valueObj);

            Array.prototype.forEach.call(valueObjKeys, function (key) {
                if (overwrite || !angular.isDefined(cultureObj[key])) {
                    var value = valueObj[key];

                    if (value.constructor.name === "String") {
                        cultureObj[key] = value;
                    } else {
                        throw new Error('"' + key + '" value is not a string').stack;
                    }
                }
            });
        }
    };

    var get = function (key) {
        if (!angular.isDefined(key) || key === null) {
            throw new Error('"key" is undefined or null').stack;
        }
        else {
            if (!angular.isDefined(currentCulture)) {
                throw new Error('Any culture is not loaded. Use "loadCulture" method to load culture').stack;
            }
            else {
                var matched = currentCulture[key];

                if (!angular.isDefined(matched)) {
                    return '[' + currentCultureCode + ':' + key + ']';
                }
                else {
                    return matched;
                }
            }
        }
    }

    return {
        $get:function() {
            return {
                loadCulture: function (cultureName) {
                    loadCulture(cultureName);
                },
                add: function (cultureName, valueObj, overwrite) {
                    
                    add(cultureName, valueObj, overwrite);
                },
                get: function (key) {
                    return get(key);
                }
            }
        }
    }
});