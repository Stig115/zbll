var Localization = (function () {
    langs = {
        ar: {
            lang_ar: "عربى",
            lang_zh: "صينى (中文)",
            lang_en: "الإنجليزية (English)",
            lang_es: "الأسبانية (Español)",
            briefDrills: "Brief التدريبات",
            btCubeConnect: "قم بتوصيل Cube",
            btCubeConnecting: "توصيل...",
            btCubeDisconnect: "افصل Cube",
            btCubeBuy: "ليس لدي واحد",
            retry: "إعادة المحاولة",
            next: "التالى",
            on: "على",
            off: "إيقاف",
            randomAuf: "AUF عشوائي",
            randomOrder: "ترتيب عشوائي",
            simplifiedDiagram: "مخطط مبسط",
            timeout: "التخلي عن الثواني بعد",
            allowSleep: "السماح للتطبيق بالنوم",
            upColors: "حتى الألوان",
            feedback: "ارسل رأيك",
            allCases: "جميع حالات [ALG]",
            moreInfo: "مزيد من المعلومات",
            hint: "ملحوظة",
            recognitionTime: "التعرف على",
            executionTime: "إعدام",
            meanTime: "متوسط",
            customScheme: "مخطط مخصص",
            customSchemeReset: "إعادة تعيين إلى الألوان الافتراضية",
            btError: "خطأ في الإتصال",
            btSupport: "يتم دعم ما يلي:",
            btAndroid: "Chrome على Android",
            btIOS: "تطبيق WebBLE على iOS",
            btMacOS: "Chrome على MacOS",
            btLinux: "كروم على لينكس",
            btWindows: "كروم الكناري على ويندوز",
            diagramCredit: "الرسوم البيانية بفضل [LINK]",
            language: "لغة"
        },
        en: {
            lang_ar: "Arabic (عربى)",
            lang_zh: "Chinese (中文)",
            lang_en: "English",
            lang_es: "Spanish (Español)",
            briefDrills: "Brief Drills",
            btCubeConnect: "Connect Cube",
            btCubeConnecting: "Connecting...",
            btCubeDisconnect: "Disconnect Cube",
            btCubeBuy: "I don't have one",
            retry: "Retry",
            next: "Next",
            on: "On",
            off: "Off",
            randomAuf: "Random AUF",
            randomOrder: "Random Order",
            simplifiedDiagram: "Simplified Diagram",
            timeout: "Abandon after (seconds):",
            allowSleep: "Allow App Sleep",
            upColors: "Up Colors",
            feedback: "Send Feedback",
            allCases: "All [ALG] Cases",
            moreInfo: "More info",
            hint: "Hint",
            recognitionTime: "Recognition",
            executionTime: "Execution",
            meanTime: "mean",
            customScheme: "Custom scheme",
            customSchemeReset: "Reset to default colors",
            btError: "Connection Error",
            btSupport: "The following are supported:",
            btAndroid: "Chrome on Android",
            btIOS: "WebBLE App on iOS",
            btMacOS: "Chrome on MacOS",
            btLinux: "Chrome on Linux",
            btWindows: "Chrome Canary on Windows",
            diagramCredit: "Diagrams thanks to [LINK]",
            language: "Language"
        },
        es: {
            lang_ar: "Arábica (عربى)",
            lang_zh: "Chino (中文)",
            lang_en: "Inglés (English)",
            lang_es: "Español",
            briefDrills: "Brief Ejercicios",
            btCubeConnect: "Conectar Cube",
            btCubeConnecting: "Conectando...",
            btCubeDisconnect: "Desconecta el cubo",
            btCubeBuy: "No tengo uno",
            retry: "Otra vez",
            next: "Siguiente",
            on: "", // doesn't fit
            off: "", // doesn't fit
            randomAuf: "AUF Aleatorio",
            randomOrder: "Orden Aleatorio",
            simplifiedDiagram: "Diagrama Simplificado",
            timeout: "Abandonar (segundos):",
            allowSleep: "Permitir que la aplicación duerma",
            upColors: "Colores hacia arriba",
            feedback: "Enviar comentarios",
            allCases: "Todos los casos [ALG]",
            moreInfo: "Más información",
            hint: "Insinuación",
            recognitionTime: "Reconocimiento",
            executionTime: "Ejecución",
            meanTime: "medio",
            customScheme: "Esquema personalizado",
            customSchemeReset: "Restablecer los colores predeterminados",
            btError: "Error de conexión",
            btSupport: "Los siguientes son compatibles:",
            btAndroid: "Chrome en Android",
            btIOS: "Aplicación WebBLE en iOS",
            btMacOS: "Chrome en MacOS",
            btLinux: "Chrome en Linux",
            btWindows: "Chrome Canary en Windows",
            diagramCredit: "Diagramas gracias a [LINK]",
            language: "Idioma"
        },
        zh: {
            lang_ar: "阿拉伯 (عربى)",
            lang_zh: "中文",
            lang_en: "英语 (English)",
            lang_es: "西班牙语 (Español)",
            briefDrills: "Brief 演习",
            btCubeConnect: "连接 Cube",
            btCubeConnecting: "连接过程...",
            btCubeDisconnect: "断开 Cube",
            btCubeBuy: "我没有",
            retry: "重试",
            next: "下一个",
            on: "开",
            off: "关",
            randomAuf: "随机 AUF",
            randomOrder: "随机顺序",
            simplifiedDiagram: "更简单的图表",
            timeout: "放弃之后 （秒）：",
            allowSleep: "允许应用程序睡眠",
            upColors: "颜色朝上",
            feedback: "发送反馈",
            allCases: "所有[ALG]案件",
            moreInfo: "更多信息",
            hint: "暗示",
            recognitionTime: "认可",
            executionTime: "执行",
            meanTime: "平均",
            customScheme: "自定义配色方案",
            customSchemeReset: "重置为默认颜色",
            btError: "连接错误",
            btSupport: "支持以下内容：",
            btAndroid: "Android上的Chrome",
            btIOS: "iOS上的WebBLE应用程序",
            btMacOS: "Chrome上的MacOS",
            btLinux: "Chrome上的Linux",
            btWindows: "Chrome Canary上的Windows",
            diagramCredit: "图表感谢[LINK]",
            language: "语言"
        }
    }

    function getString(id) {
        var lang = Settings.values.lang || "en";
        return langs[lang][id];
    }

    return {
        langs: langs,
        getString: getString
    };
}());