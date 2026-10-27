/* iztro v2.6.3 (MIT, SylarLong) + lunar-lite (MIT, SylarLong); bundled for chinesewithlily. Needs lunar.js (lunar-javascript, MIT) loaded first. */
(function(){var M={0:[function(require,module,exports){"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.astro = exports.util = exports.star = exports.data = void 0;
exports.data = __importStar(require("./data"));
exports.star = __importStar(require("./star"));
exports.util = __importStar(require("./utils"));
exports.astro = __importStar(require("./astro"));

},{"./data":1,"./star":6,"./utils":89,"./astro":15}],
1:[function(require,module,exports){"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./constants"), exports);
__exportStar(require("./stars"), exports);
__exportStar(require("./heavenlyStems"), exports);
__exportStar(require("./earthlyBranches"), exports);

},{"./constants":2,"./stars":3,"./heavenlyStems":4,"./earthlyBranches":5}],
2:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RAT_RULE = exports.TIGER_RULE = exports.TIME_RANGE = exports.CHINESE_TIME = exports.FiveElementsClass = exports.GENDER = exports.PALACES = exports.ZODIAC = exports.EARTHLY_BRANCHES = exports.HEAVENLY_STEMS = exports.LANGUAGES = void 0;
/** 支持的语言 */
exports.LANGUAGES = ['en-US', 'ja-JP', 'ko-KR', 'zh-CN', 'zh-TW', 'vi-VN'];
/** 十天干 */
exports.HEAVENLY_STEMS = [
    'jiaHeavenly',
    'yiHeavenly',
    'bingHeavenly',
    'dingHeavenly',
    'wuHeavenly',
    'jiHeavenly',
    'gengHeavenly',
    'xinHeavenly',
    'renHeavenly',
    'guiHeavenly',
];
/** 十二地支 */
exports.EARTHLY_BRANCHES = [
    'ziEarthly',
    'chouEarthly',
    'yinEarthly',
    'maoEarthly',
    'chenEarthly',
    'siEarthly',
    'wuEarthly',
    'weiEarthly',
    'shenEarthly',
    'youEarthly',
    'xuEarthly',
    'haiEarthly',
];
/** 十二生肖（按地支顺序） */
exports.ZODIAC = [
    'rat',
    'ox',
    'tiger',
    'rabbit',
    'dragon',
    'snake',
    'horse',
    'sheep',
    'monkey',
    'rooster',
    'dog',
    'pig',
];
/** 紫微斗数十二宫名称 */
exports.PALACES = [
    'soulPalace',
    'parentsPalace',
    'spiritPalace',
    'propertyPalace',
    'careerPalace',
    'friendsPalace',
    'surfacePalace',
    'healthPalace',
    'wealthPalace',
    'childrenPalace',
    'spousePalace',
    'siblingsPalace',
];
/** 性别对应阴阳，男为阳，女为阴 */
exports.GENDER = {
    male: '阳',
    female: '阴',
};
/**
 * 五行局，用于定紫微星和算起运年龄
 * 几局就从几岁（虚岁）开始起运
 * 比如 木三局 就从3岁开始起运
 *
 * @enum
 *  - 2 水二局
 *  - 3 木三局
 *  - 4 金四局
 *  - 5 土五局
 *  - 6 火六局
 */
var FiveElementsClass;
(function (FiveElementsClass) {
    FiveElementsClass[FiveElementsClass["water2nd"] = 2] = "water2nd";
    FiveElementsClass[FiveElementsClass["wood3rd"] = 3] = "wood3rd";
    FiveElementsClass[FiveElementsClass["metal4th"] = 4] = "metal4th";
    FiveElementsClass[FiveElementsClass["earth5th"] = 5] = "earth5th";
    FiveElementsClass[FiveElementsClass["fire6th"] = 6] = "fire6th";
})(FiveElementsClass || (exports.FiveElementsClass = FiveElementsClass = {}));
/**
 * 时辰, 子时分早晚。
 * 其中 00:00-01:00 为早子时，23:00-00:00 为晚子时
 */
exports.CHINESE_TIME = [
    'earlyRatHour', // : '00:00~01:00',
    'oxHour', // : '01:00~03:00',
    'tigerHour', // : '03:00~05:00',
    'rabbitHour', // : '05:00~07:00',
    'dragonHour', // : '07:00~09:00',
    'snakeHour', // : '09:00~11:00',
    'horseHour', // : '11:00~13:00',
    'goatHour', // : '13:00~15:00',
    'monkeyHour', // : '15:00~17:00',
    'roosterHour', // : '17:00~19:00',
    'dogHour', // : '19:00~21:00',
    'pigHour', // : '21:00~23:00',
    'lateRatHour', // : '23:00~00:00',
];
/** 时辰序号所对应的时间段，与 `CHINESE_TIME` 一一对应 */
exports.TIME_RANGE = [
    '00:00~01:00',
    '01:00~03:00',
    '03:00~05:00',
    '05:00~07:00',
    '07:00~09:00',
    '09:00~11:00',
    '11:00~13:00',
    '13:00~15:00',
    '15:00~17:00',
    '17:00~19:00',
    '19:00~21:00',
    '21:00~23:00',
    '23:00~00:00',
];
/**
 * 五虎遁 从年干算月干。
 *
 * “五虎遁元”年上起月法，简称 `五虎遁`。
 * 因为正月建寅，所以正月的地支为寅，寅属虎，所以叫五虎盾。
 *
 * - 甲己之年丙作首
 * - 乙庚之岁戊为头
 * - 丙辛必定寻庚起
 * - 丁壬壬位顺行流
 * - 若问戊癸何方发
 * - 甲寅之上好追求
 */
exports.TIGER_RULE = {
    jiaHeavenly: 'bingHeavenly',
    yiHeavenly: 'wuHeavenly',
    bingHeavenly: 'gengHeavenly',
    dingHeavenly: 'renHeavenly',
    wuHeavenly: 'jiaHeavenly',
    jiHeavenly: 'bingHeavenly',
    gengHeavenly: 'wuHeavenly',
    xinHeavenly: 'gengHeavenly',
    renHeavenly: 'renHeavenly',
    guiHeavenly: 'jiaHeavenly',
};
/**
 * 五鼠遁 以日干算时干。
 *
 * “五鼠遁元”日上起时法，简称 `五鼠遁`。
 * 因为日支全部以“子”时打头来排列的，子为鼠，所以叫五鼠遁。
 *
 * - 甲己还加甲，乙庚丙作初。
 * - 丙辛从戊起，丁壬庚子居。
 * - 戊癸起壬子，周而复始求。
 */
exports.RAT_RULE = {
    jiaHeavenly: 'jiaHeavenly',
    yiHeavenly: 'bingHeavenly',
    bingHeavenly: 'wuHeavenly',
    dingHeavenly: 'gengHeavenly',
    wuHeavenly: 'renHeavenly',
    jiHeavenly: 'jiaHeavenly',
    gengHeavenly: 'bingHeavenly',
    xinHeavenly: 'wuHeavenly',
    renHeavenly: 'gengHeavenly',
    guiHeavenly: 'renHeavenly',
};

},{}],
3:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STARS_INFO = exports.MUTAGEN = void 0;
/** 紫微斗数四化 */
exports.MUTAGEN = ['sihuaLu', 'sihuaQuan', 'sihuaKe', 'sihuaJi'];
/**
 * 星耀信息
 * 其中包含：
 * 1. 亮度（bright）, 按照宫位地支排序（从寅开始）
 * 2. 五行（fiveElements）
 * 3. 阴阳（yinYang）
 */
exports.STARS_INFO = {
    ziweiMaj: {
        brightness: ['wang', 'wang', 'de', 'wang', 'miao', 'miao', 'wang', 'wang', 'de', 'wang', 'ping', 'miao'],
        fiveElements: '土',
        yinYang: '阴',
    },
    tianjiMaj: {
        brightness: ['de', 'wang', 'li', 'ping', 'miao', 'xian', 'de', 'wang', 'li', 'ping', 'miao', 'xian'],
        fiveElements: '木',
        yinYang: '阴',
    },
    taiyangMaj: {
        brightness: ['wang', 'miao', 'wang', 'wang', 'wang', 'de', 'de', 'ping', 'bu', 'xian', 'xian', 'bu'],
        fiveElements: '',
        yinYang: '',
    },
    wuquMaj: {
        brightness: ['de', 'li', 'miao', 'ping', 'wang', 'miao', 'de', 'li', 'miao', 'ping', 'wang', 'miao'],
        fiveElements: '金',
        yinYang: '阴',
    },
    tiantongMaj: {
        brightness: ['li', 'ping', 'ping', 'miao', 'xian', 'bu', 'wang', 'ping', 'ping', 'miao', 'wang', 'bu'],
        fiveElements: '水',
        yinYang: '阳',
    },
    lianzhenMaj: {
        brightness: ['miao', 'ping', 'li', 'xian', 'ping', 'li', 'miao', 'ping', 'li', 'xian', 'ping', 'li'],
        fiveElements: '火',
        yinYang: '阴',
    },
    tianfuMaj: {
        brightness: ['miao', 'de', 'miao', 'de', 'wang', 'miao', 'de', 'wang', 'miao', 'de', 'miao', 'miao'],
        fiveElements: '土',
        yinYang: '阳',
    },
    taiyinMaj: {
        brightness: ['wang', 'xian', 'xian', 'xian', 'bu', 'bu', 'li', 'wang', 'wang', 'miao', 'miao', 'miao'],
        fiveElements: '水',
        yinYang: '阴',
    },
    tanlangMaj: {
        brightness: ['ping', 'li', 'miao', 'xian', 'wang', 'miao', 'ping', 'li', 'miao', 'xian', 'wang', 'miao'],
        fiveElements: '水',
        yinYang: '',
    },
    jumenMaj: {
        brightness: ['miao', 'miao', 'xian', 'wang', 'wang', 'bu', 'miao', 'miao', 'xian', 'wang', 'wang', 'bu'],
        fiveElements: '土',
        yinYang: '阴',
    },
    tianxiangMaj: {
        brightness: ['miao', 'xian', 'de', 'de', 'miao', 'de', 'miao', 'xian', 'de', 'de', 'miao', 'miao'],
        fiveElements: '水',
        yinYang: '',
    },
    tianliangMaj: {
        brightness: ['miao', 'miao', 'miao', 'xian', 'miao', 'wang', 'xian', 'de', 'miao', 'xian', 'miao', 'wang'],
        fiveElements: '土',
        yinYang: '',
    },
    qishaMaj: {
        brightness: ['miao', 'wang', 'miao', 'ping', 'wang', 'miao', 'miao', 'wang', 'miao', 'ping', 'wang', 'miao'],
        fiveElements: '',
        yinYang: '',
    },
    pojunMaj: {
        brightness: ['de', 'xian', 'wang', 'ping', 'miao', 'wang', 'de', 'xian', 'wang', 'ping', 'miao', 'wang'],
        fiveElements: '水',
        yinYang: '',
    },
    wenchangMin: {
        brightness: ['xian', 'li', 'de', 'miao', 'xian', 'li', 'de', 'miao', 'xian', 'li', 'de', 'miao'],
    },
    wenquMin: {
        brightness: ['ping', 'wang', 'de', 'miao', 'xian', 'wang', 'de', 'miao', 'xian', 'wang', 'de', 'miao'],
    },
    huoxingMin: {
        brightness: ['miao', 'li', 'xian', 'de', 'miao', 'li', 'xian', 'de', 'miao', 'li', 'xian', 'de'],
    },
    lingxingMin: {
        brightness: ['miao', 'li', 'xian', 'de', 'miao', 'li', 'xian', 'de', 'miao', 'li', 'xian', 'de'],
    },
    qingyangMin: {
        brightness: ['', 'xian', 'miao', '', 'xian', 'miao', '', 'xian', 'miao', '', 'xian', 'miao'],
    },
    tuoluoMin: {
        brightness: ['xian', '', 'miao', 'xian', '', 'miao', 'xian', '', 'miao', 'xian', '', 'miao'],
    },
};

},{}],
4:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.heavenlyStems = void 0;
/**
 * 十天干信息
 * 其中包含：
 * 1. 阴阳（yinYang）
 * 2. 五行（fiveElements）
 * 3. 天干相冲（crash）
 *    - 甲庚相冲
 *    - 乙辛相冲
 *    - 壬丙相冲
 *    - 癸丁相冲
 *    - 戊己土居中央，故无冲。
 * 4. 紫微斗数十天干四化(mutagen)
 *
 *    顺序为【禄，权，科，忌】
 *    - 甲:【廉，破，武，阳】
 *    - 乙:【机，梁，紫，月】
 *    - 丙:【同，机，昌，廉】
 *    - 丁:【阴，同，机，巨】
 *    - 戊:【贪，月，弼，机】
 *    - 己:【武，贪，梁，曲】
 *    - 庚:【阳，武，阴，同】
 *    - 辛:【巨，日，曲，昌】
 *    - 壬:【梁，紫，左，武】
 *    - 癸:【破，巨，阴，贪】
 */
exports.heavenlyStems = {
    jiaHeavenly: {
        yinYang: '阳',
        fiveElements: '木',
        crash: 'gengHeavenly',
        mutagen: ['lianzhenMaj', 'pojunMaj', 'wuquMaj', 'taiyangMaj'],
    },
    yiHeavenly: {
        yinYang: '阴',
        fiveElements: '木',
        crash: 'xinHeavenly',
        mutagen: ['tianjiMaj', 'tianliangMaj', 'ziweiMaj', 'taiyinMaj'],
    },
    bingHeavenly: {
        yinYang: '阳',
        fiveElements: '火',
        crash: 'renHeavenly',
        mutagen: ['tiantongMaj', 'tianjiMaj', 'wenchangMin', 'lianzhenMaj'],
    },
    dingHeavenly: {
        yinYang: '阴',
        fiveElements: '火',
        crash: 'guiHeavenly',
        mutagen: ['taiyinMaj', 'tiantongMaj', 'tianjiMaj', 'jumenMaj'],
    },
    wuHeavenly: {
        yinYang: '阳',
        fiveElements: '土',
        mutagen: ['tanlangMaj', 'taiyinMaj', 'youbiMin', 'tianjiMaj'],
    },
    jiHeavenly: {
        yinYang: '阴',
        fiveElements: '土',
        mutagen: ['wuquMaj', 'tanlangMaj', 'tianliangMaj', 'wenquMin'],
    },
    gengHeavenly: {
        yinYang: '阳',
        fiveElements: '金',
        crash: 'jiaHeavenly',
        mutagen: ['taiyangMaj', 'wuquMaj', 'taiyinMaj', 'tiantongMaj'],
    },
    xinHeavenly: {
        yinYang: '阴',
        fiveElements: '金',
        crash: 'yiHeavenly',
        mutagen: ['jumenMaj', 'taiyangMaj', 'wenquMin', 'wenchangMin'],
    },
    renHeavenly: {
        yinYang: '阳',
        fiveElements: '水',
        crash: 'bingHeavenly',
        mutagen: ['tianliangMaj', 'ziweiMaj', 'zuofuMin', 'wuquMaj'],
    },
    guiHeavenly: {
        yinYang: '阴',
        fiveElements: '水',
        crash: 'dingHeavenly',
        mutagen: ['pojunMaj', 'jumenMaj', 'taiyinMaj', 'tanlangMaj'],
    },
};

},{}],
5:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.earthlyBranches = void 0;
/**
 * 十二地支信息
 * 其中包含：
 * 1. 阴阳（yinYang）
 * 2. 五行（fiveElements）
 * 3. 六冲（crash）
 *    - 子午相冲
 *    - 丑未相冲
 *    - 寅申相冲
 *    - 卯酉相冲
 *    - 辰戌相冲
 *    - 巳亥相冲
 * 4. 紫微斗数命主（soul）
 *    - 命主以命宫所在宫位地支定之
 * 5. 紫微斗数身主（body）
 *    - 身主以生年年支定之
 * 6. 身体部位【内】（inside）
 * 7. 身体部位【外】（outside）
 * 8. 健康提示（healthTip）
 */
exports.earthlyBranches = {
    ziEarthly: {
        yinYang: '阳',
        fiveElements: '水',
        crash: 'wuEarthly',
        soul: 'tanlangMaj',
        body: 'huoxingMin',
        inside: '胆',
        outside: '下体',
        healthTip: '生殖系统、膀胱、尿道之疾病，听觉障碍',
    },
    chouEarthly: {
        yinYang: '阴',
        fiveElements: '土',
        crash: 'weiEarthly',
        soul: 'jumenMaj',
        body: 'tianxiangMaj',
        inside: '肝',
        outside: '小腿、脚（右）',
        healthTip: '胸部、肋膜炎、胃病、脚部',
    },
    yinEarthly: {
        yinYang: '阳',
        fiveElements: '木',
        crash: 'shenEarthly',
        soul: 'lucunMin',
        body: 'tianliangMaj',
        inside: '肺',
        outside: '大腿（右）',
        healthTip: '胆囊、关节、胫部、神经痛、风湿',
    },
    maoEarthly: {
        yinYang: '阴',
        fiveElements: '木',
        crash: 'youEarthly',
        soul: 'wenquMin',
        body: 'tiantongMaj',
        inside: '大肠',
        outside: '腰（右）、背',
        healthTip: '肝病、颜面神经、失眠、神经衰弱',
    },
    chenEarthly: {
        yinYang: '阳',
        fiveElements: '土',
        crash: 'xuEarthly',
        soul: 'lianzhenMaj',
        body: 'wenchangMin',
        inside: '胃',
        outside: '胸、胳膊（右）',
        healthTip: '消化系统、脊椎、皮肤疾病',
    },
    siEarthly: {
        yinYang: '阴',
        fiveElements: '火',
        crash: 'haiEarthly',
        soul: 'wuquMaj',
        body: 'tianjiMaj',
        inside: '脾',
        outside: '左肩',
        healthTip: '喉头、牙病、感冒',
    },
    wuEarthly: {
        yinYang: '阳',
        fiveElements: '火',
        crash: 'ziEarthly',
        soul: 'pojunMaj',
        body: 'huoxingMin',
        inside: '心',
        outside: '头',
        healthTip: '心脏、视觉、味觉障碍、火难',
    },
    weiEarthly: {
        yinYang: '阴',
        fiveElements: '土',
        crash: 'chouEarthly',
        soul: 'wuquMaj',
        body: 'tianxiangMaj',
        inside: '小肠',
        outside: '脸',
        healthTip: '消化系统、胰脏、健忘症、疲倦、手腕、嘴唇',
    },
    shenEarthly: {
        yinYang: '阳',
        fiveElements: '金',
        crash: 'yinEarthly',
        soul: 'lianzhenMaj',
        body: 'tianliangMaj',
        inside: '膀胱',
        outside: '胸、胳膊（左）',
        healthTip: '呼吸系统、肺部、消化系统、大肠',
    },
    youEarthly: {
        yinYang: '阴',
        fiveElements: '金',
        crash: 'maoEarthly',
        soul: 'wenquMin',
        body: 'tiantongMaj',
        inside: '肾',
        outside: '腰（左）、腹',
        healthTip: '吐血、痢血、小肠之疾、脑出血、头腕部',
    },
    xuEarthly: {
        yinYang: '阳',
        fiveElements: '土',
        crash: 'chenEarthly',
        soul: 'lucunMin',
        body: 'wenchangMin',
        inside: '心包',
        outside: '大腿（左）',
        healthTip: '下半身之疾、子宫、痔疮、脚部',
    },
    haiEarthly: {
        yinYang: '阴',
        fiveElements: '水',
        crash: 'siEarthly',
        soul: 'jumenMaj',
        body: 'tianjiMaj',
        inside: '三焦',
        outside: '小腿、脚（左）',
        healthTip: '排泄机能障碍、肾脏、尿道、偏头痛',
    },
};

},{}],
6:[function(require,module,exports){"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initStars = void 0;
const initStars = () => [[], [], [], [], [], [], [], [], [], [], [], []];
exports.initStars = initStars;
__exportStar(require("./location"), exports);
__exportStar(require("./majorStar"), exports);
__exportStar(require("./minorStar"), exports);
__exportStar(require("./adjectiveStar"), exports);
__exportStar(require("./decorativeStar"), exports);
__exportStar(require("./horoscopeStar"), exports);

},{"./location":7,"./majorStar":103,"./minorStar":104,"./adjectiveStar":105,"./decorativeStar":106,"./horoscopeStar":107}],
7:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChangQuIndexByHeavenlyStem = exports.getMonthlyStarIndex = exports.getNianjieIndex = exports.getTianshiTianshangIndex = exports.getYearlyStarIndex = exports.getDahaoIndex = exports.getJieshaAdjIndex = exports.getGuGuaIndex = exports.getHuagaiXianchiIndex = exports.getLuanXiIndex = exports.getHuoLingIndex = exports.getKongJieIndex = exports.getTimelyStarIndex = exports.getDailyStarIndex = exports.getChangQuIndex = exports.getZuoYouIndex = exports.getKuiYueIndex = exports.getLuYangTuoMaIndex = exports.getStartIndex = void 0;
const lunar_lite_1 = require("lunar-lite");
const astro_1 = require("../astro");
const data_1 = require("../data");
const i18n_1 = require("../i18n");
const utils_1 = require("../utils");
/**
 * 起紫微星诀算法
 *
 * - 六五四三二，酉午亥辰丑，
 * - 局数除日数，商数宫前走；
 * - 若见数无余，便要起虎口，
 * - 日数小於局，还直宫中守。
 *
 * 举例：
 * - 例一：27日出生木三局，以三除27，循环0次就可以整除，27➗3=9，从寅进9格，在戍安紫微。
 * - 例二：13日出生火六局，以六除13，最少需要加5才能整除， 18➗8=3，从寅进3格为辰，添加数为5（奇数），故要逆回五宫，在亥安紫微。
 * - 例三：6日出生土五局，以五除6，最少需要加4才能整除，10➗5=2，从寅进2格为卯，添加数为4（偶数），顺行4格为未，在未安紫微。
 *
 * @param solarDateStr 公历日期 YYYY-MM-DD
 * @param timeIndex 时辰索引【0～12】
 * @param fixLeap 是否调整农历闰月（若该月不是闰月则不会生效）
 * @param from 根据传入的干支起五行局来计算紫微星和天府星位置
 * @returns 紫微和天府星所在宫位索引
 */
const getStartIndex = (param) => {
    var _a, _b;
    const { solarDate, timeIndex, fixLeap, from } = param;
    const { heavenlyStemOfSoul, earthlyBranchOfSoul } = (0, astro_1.getSoulAndBody)({ solarDate, timeIndex, fixLeap });
    const { lunarDay } = (0, lunar_lite_1.solar2lunar)(solarDate);
    // 如果已传入干支，则用传入干支起五行局
    // 确定用于起五行局的地盘干支
    const baseHeavenlyStem = (_a = from === null || from === void 0 ? void 0 : from.heavenlyStem) !== null && _a !== void 0 ? _a : heavenlyStemOfSoul;
    const baseEarthlyBranch = (_b = from === null || from === void 0 ? void 0 : from.earthlyBranch) !== null && _b !== void 0 ? _b : earthlyBranchOfSoul;
    // 获取五行局
    const fiveElements = (0, i18n_1.kot)((0, astro_1.getFiveElementsClass)(baseHeavenlyStem, baseEarthlyBranch));
    const fiveElementsValue = data_1.FiveElementsClass[fiveElements];
    let remainder = -1; // 余数
    let quotient; // 商
    let offset = -1; // 循环次数
    // 获取当月最大天数
    const maxDays = (0, lunar_lite_1.getTotalDaysOfLunarMonth)(solarDate);
    // 如果timeIndex等于12说明是晚子时，需要加一天
    // 如果晚子时算当天则不需要加一天
    let _day = timeIndex === 12 && (0, astro_1.getConfig)().dayDivide !== 'current' ? lunarDay + 1 : lunarDay;
    if (_day > maxDays) {
        // 假如日期超过当月最大天数，说明跨月了，需要处理为合法日期
        _day -= maxDays;
    }
    do {
        // 农历出生日（初一为1，以此类推）加上偏移量作为除数，以这个数处以五行局的数向下取整
        // 需要一直运算到余数为0为止
        offset++;
        const divisor = _day + offset;
        quotient = Math.floor(divisor / fiveElementsValue);
        remainder = divisor % fiveElementsValue;
    } while (remainder !== 0);
    // 将商除以12取余数
    quotient %= 12;
    // 以商减一（因为需要从0开始）作为起始位置
    let ziweiIndex = quotient - 1;
    if (offset % 2 === 0) {
        // 若循环次数为偶数，则索引逆时针数到循环数
        ziweiIndex += offset;
    }
    else {
        // 若循环次数为偶数，则索引顺时针数到循环数
        ziweiIndex -= offset;
    }
    ziweiIndex = (0, utils_1.fixIndex)(ziweiIndex);
    // 天府星位置与紫微星相对
    const tianfuIndex = (0, utils_1.fixIndex)(12 - ziweiIndex);
    return { ziweiIndex, tianfuIndex };
};
exports.getStartIndex = getStartIndex;
/**
 * 按年干支计算禄存、擎羊，陀罗、天马的索引
 *
 * 定禄存、羊、陀诀（按年干）
 *
 * - 甲禄到寅宫，乙禄居卯府。
 * - 丙戊禄在巳，丁己禄在午。
 * - 庚禄定居申，辛禄酉上补。
 * - 壬禄亥中藏，癸禄居子户。
 * - 禄前羊刃当，禄后陀罗府。
 *
 * 安天马（按年支），天马只会出现在四马地【寅申巳亥】
 *
 * - 寅午戍流马在申，申子辰流马在寅。
 * - 巳酉丑流马在亥，亥卯未流马在巳。
 *
 * @param heavenlyStemName 天干
 * @param earthlyBranchName 地支
 * @returns 禄存、擎羊，陀罗、天马的索引
 */
const getLuYangTuoMaIndex = (heavenlyStemName, earthlyBranchName) => {
    let luIndex = -1; // 禄存索引
    let maIndex = 0; // 天马索引
    const heavenlyStem = (0, i18n_1.kot)(heavenlyStemName, 'Heavenly');
    const earthlyBranch = (0, i18n_1.kot)(earthlyBranchName, 'Earthly');
    switch (earthlyBranch) {
        case 'yinEarthly':
        case 'wuEarthly':
        case 'xuEarthly':
            maIndex = (0, utils_1.fixEarthlyBranchIndex)('shen');
            break;
        case 'shenEarthly':
        case 'ziEarthly':
        case 'chenEarthly':
            maIndex = (0, utils_1.fixEarthlyBranchIndex)('yin');
            break;
        case 'siEarthly':
        case 'youEarthly':
        case 'chouEarthly':
            maIndex = (0, utils_1.fixEarthlyBranchIndex)('hai');
            break;
        case 'haiEarthly':
        case 'maoEarthly':
        case 'weiEarthly':
            maIndex = (0, utils_1.fixEarthlyBranchIndex)('si');
            break;
    }
    switch (heavenlyStem) {
        case 'jiaHeavenly': {
            luIndex = (0, utils_1.fixEarthlyBranchIndex)('yin');
            break;
        }
        case 'yiHeavenly': {
            luIndex = (0, utils_1.fixEarthlyBranchIndex)('mao');
            break;
        }
        case 'bingHeavenly':
        case 'wuHeavenly': {
            luIndex = (0, utils_1.fixEarthlyBranchIndex)('si');
            break;
        }
        case 'dingHeavenly':
        case 'jiHeavenly': {
            luIndex = (0, utils_1.fixEarthlyBranchIndex)('woo');
            break;
        }
        case 'gengHeavenly': {
            luIndex = (0, utils_1.fixEarthlyBranchIndex)('shen');
            break;
        }
        case 'xinHeavenly': {
            luIndex = (0, utils_1.fixEarthlyBranchIndex)('you');
            break;
        }
        case 'renHeavenly': {
            luIndex = (0, utils_1.fixEarthlyBranchIndex)('hai');
            break;
        }
        case 'guiHeavenly': {
            luIndex = (0, utils_1.fixEarthlyBranchIndex)('zi');
            break;
        }
    }
    return {
        luIndex,
        maIndex,
        yangIndex: (0, utils_1.fixIndex)(luIndex + 1),
        tuoIndex: (0, utils_1.fixIndex)(luIndex - 1),
    };
};
exports.getLuYangTuoMaIndex = getLuYangTuoMaIndex;
/**
 * 获取天魁天钺所在宫位索引（按年干）
 *
 * - 甲戊庚之年丑未
 * - 乙己之年子申
 * - 辛年午寅
 * - 壬癸之年卯巳
 * - 丙丁之年亥酉
 *
 * @param heavenlyStemName 天干
 * @returns
 */
const getKuiYueIndex = (heavenlyStemName) => {
    let kuiIndex = -1;
    let yueIndex = -1;
    const heavenlyStem = (0, i18n_1.kot)(heavenlyStemName, 'Heavenly');
    switch (heavenlyStem) {
        case 'jiaHeavenly':
        case 'wuHeavenly':
        case 'gengHeavenly':
            kuiIndex = (0, utils_1.fixEarthlyBranchIndex)('chou');
            yueIndex = (0, utils_1.fixEarthlyBranchIndex)('wei');
            break;
        case 'yiHeavenly':
        case 'jiHeavenly':
            kuiIndex = (0, utils_1.fixEarthlyBranchIndex)('zi');
            yueIndex = (0, utils_1.fixEarthlyBranchIndex)('shen');
            break;
        case 'xinHeavenly':
            kuiIndex = (0, utils_1.fixEarthlyBranchIndex)('woo');
            yueIndex = (0, utils_1.fixEarthlyBranchIndex)('yin');
            break;
        case 'bingHeavenly':
        case 'dingHeavenly':
            kuiIndex = (0, utils_1.fixEarthlyBranchIndex)('hai');
            yueIndex = (0, utils_1.fixEarthlyBranchIndex)('you');
            break;
        case 'renHeavenly':
        case 'guiHeavenly':
            kuiIndex = (0, utils_1.fixEarthlyBranchIndex)('mao');
            yueIndex = (0, utils_1.fixEarthlyBranchIndex)('si');
            break;
    }
    return { kuiIndex, yueIndex };
};
exports.getKuiYueIndex = getKuiYueIndex;
/**
 * 获取左辅右弼的索引（按生月）
 *
 * - 辰上顺正寻左辅
 * - 戌上逆正右弼当
 *
 * 解释：
 *
 * - 从辰顺数农历月份数是左辅的索引
 * - 从戌逆数农历月份数是右弼的索引
 *
 * @param lunarMonth 农历月份
 * @returns 左辅、右弼索引
 */
const getZuoYouIndex = (lunarMonth) => {
    const zuoIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('chen') + (lunarMonth - 1));
    const youIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('xu') - (lunarMonth - 1));
    return { zuoIndex, youIndex };
};
exports.getZuoYouIndex = getZuoYouIndex;
/**
 * 获取文昌文曲的索引（按时支）
 *
 * - 辰上顺时文曲位
 * - 戌上逆时觅文昌
 *
 * 解释：
 *
 * - 从辰顺数到时辰地支索引是文曲的索引
 * - 从戌逆数到时辰地支索引是文昌的索引
 *
 * 由于时辰地支的索引即是时辰的序号，所以可以直接使用时辰的序号
 *
 * @param timeIndex 时辰索引【0～12】
 * @returns 文昌、文曲索引
 */
const getChangQuIndex = (timeIndex) => {
    const changIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('xu') - (0, utils_1.fixIndex)(timeIndex));
    const quIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('chen') + (0, utils_1.fixIndex)(timeIndex));
    return { changIndex, quIndex };
};
exports.getChangQuIndex = getChangQuIndex;
/**
 * 获取日系星索引，包括
 *
 * 三台，八座，恩光，天贵
 *
 * - 安三台八座
 *   - 由左辅之宫位起初一，顺行至生日安三台。
 *   - 由右弼之宫位起初一，逆行至生日安八座。
 *
 * - 安恩光天贵
 *   - 由文昌之宫位起初一，顺行至生日再退一步起恩光。
 *   - 由文曲之宫位起初一，顺行至生日再退一步起天贵。
 *
 * @param solarDateStr 阳历日期
 * @param timeIndex 时辰索引【0～12】
 * @returns 三台，八座索引
 */
const getDailyStarIndex = (solarDateStr, timeIndex, fixLeap) => {
    const { lunarDay } = (0, lunar_lite_1.solar2lunar)(solarDateStr);
    const monthIndex = (0, utils_1.fixLunarMonthIndex)(solarDateStr, timeIndex, fixLeap);
    // 此处获取到的是索引，下标是从0开始的，所以需要加1
    const { zuoIndex, youIndex } = (0, exports.getZuoYouIndex)(monthIndex + 1);
    const { changIndex, quIndex } = (0, exports.getChangQuIndex)(timeIndex);
    const dayIndex = (0, utils_1.fixLunarDayIndex)(lunarDay, timeIndex);
    const santaiIndex = (0, utils_1.fixIndex)((zuoIndex + dayIndex) % 12);
    const bazuoIndex = (0, utils_1.fixIndex)((youIndex - dayIndex) % 12);
    const enguangIndex = (0, utils_1.fixIndex)(((changIndex + dayIndex) % 12) - 1);
    const tianguiIndex = (0, utils_1.fixIndex)(((quIndex + dayIndex) % 12) - 1);
    return { santaiIndex, bazuoIndex, enguangIndex, tianguiIndex };
};
exports.getDailyStarIndex = getDailyStarIndex;
/**
 * 获取时系星耀索引，包括台辅，封诰
 *
 * @param timeIndex 时辰序号【0～12】
 * @returns 台辅，封诰索引
 */
const getTimelyStarIndex = (timeIndex) => {
    const taifuIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('woo') + (0, utils_1.fixIndex)(timeIndex));
    const fenggaoIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('yin') + (0, utils_1.fixIndex)(timeIndex));
    return { taifuIndex, fenggaoIndex };
};
exports.getTimelyStarIndex = getTimelyStarIndex;
/**
 * 获取地空地劫的索引（按时支）
 *
 * - 亥上子时顺安劫
 * - 逆回便是地空亡
 *
 * 解释：
 *
 * - 从亥顺数到时辰地支索引是地劫的索引
 * - 从亥逆数到时辰地支索引是地空的索引
 *
 * 由于时辰地支的索引即是时辰的序号，所以可以直接使用时辰的序号
 *
 * @param timeIndex 时辰索引【0～12】
 * @returns 地空、地劫索引
 */
const getKongJieIndex = (timeIndex) => {
    const fixedTimeIndex = (0, utils_1.fixIndex)(timeIndex);
    const haiIndex = (0, utils_1.fixEarthlyBranchIndex)('hai');
    const kongIndex = (0, utils_1.fixIndex)(haiIndex - fixedTimeIndex);
    const jieIndex = (0, utils_1.fixIndex)(haiIndex + fixedTimeIndex);
    return { kongIndex, jieIndex };
};
exports.getKongJieIndex = getKongJieIndex;
/**
 * 获取火星铃星索引（按年支以及时支）
 *
 * - 申子辰人寅戌扬
 * - 寅午戌人丑卯方
 * - 巳酉丑人卯戌位
 * - 亥卯未人酉戌房
 *
 * 起火铃二耀先据出生年支，依口诀定火铃起子时位。
 *
 * 例如壬辰年卯时生人，据[申子辰人寅戌扬]口诀，故火星在寅宫起子时，铃星在戌宫起子时，顺数至卯时，即火星在巳，铃星在丑。
 *
 * @param earthlyBranchName 地支
 * @param timeIndex 时辰序号
 * @returns 火星、铃星索引
 */
const getHuoLingIndex = (earthlyBranchName, timeIndex) => {
    let huoIndex = -1;
    let lingIndex = -1;
    const fixedTimeIndex = (0, utils_1.fixIndex)(timeIndex);
    const earthlyBranch = (0, i18n_1.kot)(earthlyBranchName, 'Earthly');
    switch (earthlyBranch) {
        case 'yinEarthly':
        case 'wuEarthly':
        case 'xuEarthly': {
            huoIndex = (0, utils_1.fixEarthlyBranchIndex)('chou') + fixedTimeIndex;
            lingIndex = (0, utils_1.fixEarthlyBranchIndex)('mao') + fixedTimeIndex;
            break;
        }
        case 'shenEarthly':
        case 'ziEarthly':
        case 'chenEarthly': {
            huoIndex = (0, utils_1.fixEarthlyBranchIndex)('yin') + fixedTimeIndex;
            lingIndex = (0, utils_1.fixEarthlyBranchIndex)('xu') + fixedTimeIndex;
            break;
        }
        case 'siEarthly':
        case 'youEarthly':
        case 'chouEarthly': {
            huoIndex = (0, utils_1.fixEarthlyBranchIndex)('mao') + fixedTimeIndex;
            lingIndex = (0, utils_1.fixEarthlyBranchIndex)('xu') + fixedTimeIndex;
            break;
        }
        case 'haiEarthly':
        case 'weiEarthly':
        case 'maoEarthly': {
            huoIndex = (0, utils_1.fixEarthlyBranchIndex)('you') + fixedTimeIndex;
            lingIndex = (0, utils_1.fixEarthlyBranchIndex)('xu') + fixedTimeIndex;
            break;
        }
    }
    return {
        huoIndex: (0, utils_1.fixIndex)(huoIndex),
        lingIndex: (0, utils_1.fixIndex)(lingIndex),
    };
};
exports.getHuoLingIndex = getHuoLingIndex;
/**
 * 获取红鸾天喜所在宫位索引
 *
 * - 卯上起子逆数之
 * - 数到当生太岁支
 * - 坐守此宫红鸾位
 * - 对宫天喜不差移
 *
 * @param earthlyBranchName 年支
 * @returns 红鸾、天喜索引
 */
const getLuanXiIndex = (earthlyBranchName) => {
    const earthlyBranch = (0, i18n_1.kot)(earthlyBranchName, 'Earthly');
    const hongluanIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('mao') - data_1.EARTHLY_BRANCHES.indexOf(earthlyBranch));
    const tianxiIndex = (0, utils_1.fixIndex)(hongluanIndex + 6);
    return { hongluanIndex, tianxiIndex };
};
exports.getLuanXiIndex = getLuanXiIndex;
/**
 * 安华盖
 * - 子辰申年在辰，丑巳酉年在丑
 * - 寅午戍年在戍，卯未亥年在未。
 *
 * 安咸池
 * - 子辰申年在酉，丑巳酉年在午
 * - 寅午戍年在卯，卯未亥年在子。
 *
 * @param earthlyBranchName 地支
 * @returns 华盖、咸池索引
 */
const getHuagaiXianchiIndex = (earthlyBranchName) => {
    let hgIdx = -1;
    let xcIdx = -1;
    const earthlyBranch = (0, i18n_1.kot)(earthlyBranchName, 'Earthly');
    switch (earthlyBranch) {
        case 'yinEarthly':
        case 'wuEarthly':
        case 'xuEarthly': {
            hgIdx = (0, utils_1.fixEarthlyBranchIndex)('xu');
            xcIdx = (0, utils_1.fixEarthlyBranchIndex)('mao');
            break;
        }
        case 'shenEarthly':
        case 'ziEarthly':
        case 'chenEarthly': {
            hgIdx = (0, utils_1.fixEarthlyBranchIndex)('chen');
            xcIdx = (0, utils_1.fixEarthlyBranchIndex)('you');
            break;
        }
        case 'siEarthly':
        case 'youEarthly':
        case 'chouEarthly': {
            hgIdx = (0, utils_1.fixEarthlyBranchIndex)('chou');
            xcIdx = (0, utils_1.fixEarthlyBranchIndex)('woo');
            break;
        }
        case 'haiEarthly':
        case 'weiEarthly':
        case 'maoEarthly': {
            hgIdx = (0, utils_1.fixEarthlyBranchIndex)('wei');
            xcIdx = (0, utils_1.fixEarthlyBranchIndex)('zi');
            break;
        }
    }
    return {
        huagaiIndex: (0, utils_1.fixIndex)(hgIdx),
        xianchiIndex: (0, utils_1.fixIndex)(xcIdx),
    };
};
exports.getHuagaiXianchiIndex = getHuagaiXianchiIndex;
/**
 * 安孤辰寡宿
 * - 寅卯辰年安巳丑
 * - 巳午未年安申辰
 * - 申酉戍年安亥未
 * - 亥子丑年安寅戍。
 *
 * @param earthlyBranchName 地支
 * @returns 孤辰、寡宿索引
 */
const getGuGuaIndex = (earthlyBranchName) => {
    let guIdx = -1;
    let guaIdx = -1;
    const earthlyBranch = (0, i18n_1.kot)(earthlyBranchName, 'Earthly');
    switch (earthlyBranch) {
        case 'yinEarthly':
        case 'maoEarthly':
        case 'chenEarthly': {
            guIdx = (0, utils_1.fixEarthlyBranchIndex)('si');
            guaIdx = (0, utils_1.fixEarthlyBranchIndex)('chou');
            break;
        }
        case 'siEarthly':
        case 'wuEarthly':
        case 'weiEarthly': {
            guIdx = (0, utils_1.fixEarthlyBranchIndex)('shen');
            guaIdx = (0, utils_1.fixEarthlyBranchIndex)('chen');
            break;
        }
        case 'shenEarthly':
        case 'youEarthly':
        case 'xuEarthly': {
            guIdx = (0, utils_1.fixEarthlyBranchIndex)('hai');
            guaIdx = (0, utils_1.fixEarthlyBranchIndex)('wei');
            break;
        }
        case 'haiEarthly':
        case 'ziEarthly':
        case 'chouEarthly': {
            guIdx = (0, utils_1.fixEarthlyBranchIndex)('yin');
            guaIdx = (0, utils_1.fixEarthlyBranchIndex)('xu');
            break;
        }
    }
    return {
        guchenIndex: (0, utils_1.fixIndex)(guIdx),
        guasuIndex: (0, utils_1.fixIndex)(guaIdx),
    };
};
exports.getGuGuaIndex = getGuGuaIndex;
/**
 * 安劫杀诀（年支）
 * 申子辰人蛇开口、亥卯未人猴速走
 * 寅午戌人猪面黑、巳酉丑人虎咆哮
 *
 * @version v2.5.0
 *
 * @param earthlyBranchKey 生年地支
 * @returns {number} 劫杀索引
 */
const getJieshaAdjIndex = (earthlyBranchKey) => {
    switch (earthlyBranchKey) {
        case 'shenEarthly':
        case 'ziEarthly':
        case 'chenEarthly':
            return 3;
        case 'haiEarthly':
        case 'maoEarthly':
        case 'weiEarthly':
            return 6;
        case 'yinEarthly':
        case 'wuEarthly':
        case 'xuEarthly':
            return 9;
        case 'siEarthly':
        case 'youEarthly':
        case 'chouEarthly':
            return 0;
    }
};
exports.getJieshaAdjIndex = getJieshaAdjIndex;
/**
 * 安大耗诀（年支）
 * 但用年支去对冲、阴阳移位过一宫
 * 阳顺阴逆移其位、大耗原来不可逢
 *
 * 大耗安法，是在年支之对宫，前一位或后一位安星。阳支顺行前一位，阴支逆行后一位。
 *
 * @param earthlyBranchKey 生年地支
 * @returns {number} 大耗索引
 */
const getDahaoIndex = (earthlyBranchKey) => {
    const matched = [
        'weiEarthly',
        'wuEarthly',
        'youEarthly',
        'shenEarthly',
        'haiEarthly',
        'xuEarthly',
        'chouEarthly',
        'ziEarthly',
        'maoEarthly',
        'yinEarthly',
        'siEarthly',
        'chenEarthly',
    ][data_1.EARTHLY_BRANCHES.indexOf(earthlyBranchKey)];
    // 因为宫位是以寅宫开始排的，所以需要 -2 来对齐
    return (0, utils_1.fixIndex)(data_1.EARTHLY_BRANCHES.indexOf(matched) - 2);
};
exports.getDahaoIndex = getDahaoIndex;
/**
 * 获取年系星的索引，包括
 * 咸池，华盖，孤辰，寡宿, 天厨，破碎，天才，天寿，蜚蠊, 龙池，凤阁，天哭，天虚，
 * 天官，天福
 *
 * - 安天才天寿
 *   - 天才由命宫起子，顺行至本生年支安之。天寿由身宫起子，顺行至本生年支安之。
 *
 * - 安破碎
 *   - 子午卯酉年安巳宫，寅申巳亥年安酉宫，辰戍丑未年安丑宫。
 *
 * - 安天厨
 *   - 甲丁食蛇口，乙戊辛马方。丙从鼠口得，己食于猴房。庚食虎头上，壬鸡癸猪堂。
 *
 * - 安蜚蠊
 *   - 子丑寅年在申酉戍，卯辰巳年在巳午未，午未申年在寅卯辰，酉戍亥年在亥子丑。
 *
 * - 安龙池凤阁
 *   - 龙池从辰宫起子，顺至本生年支安之。凤阁从戍宫起子，逆行至本生年支安之。
 *
 * - 安天哭天虚
 *   - 天哭天虚起午宫，午宫起子两分踪，哭逆行兮虚顺转，数到生年便停留。
 *
 * - 安天官天福
 *   - 甲喜羊鸡乙龙猴，丙年蛇鼠一窝谋。丁虎擒猪戊玉兔，
 *   - 己鸡居然与虎俦。庚猪马辛鸡蛇走，壬犬马癸马蛇游。
 *
 * - 安截路空亡（截空）
 *   - 甲己之年申酉，乙庚之年午未，
 *   - 丙辛之年辰巳，丁壬之年寅卯，
 *   - 戊癸之年子丑。
 *
 * - 安天空
 *   - 生年支顺数的前一位就是。
 * @param solarDate 阳历日期
 * @param timeIndex 时辰序号
 * @param gender 性别
 * @param fixLeap 是否修复闰月，假如当月不是闰月则不生效
 */
const getYearlyStarIndex = (param) => {
    const { solarDate, timeIndex, gender, fixLeap } = param;
    const { horoscopeDivide } = (0, astro_1.getConfig)();
    const { yearly } = (0, lunar_lite_1.getHeavenlyStemAndEarthlyBranchBySolarDate)(solarDate, timeIndex, {
        // 流耀应该用立春为界，但为了满足不同流派的需求允许配置
        year: horoscopeDivide,
    });
    const { soulIndex, bodyIndex } = (0, astro_1.getSoulAndBody)({ solarDate, timeIndex, fixLeap });
    const heavenlyStem = (0, i18n_1.kot)(yearly[0], 'Heavenly');
    const earthlyBranch = (0, i18n_1.kot)(yearly[1], 'Earthly');
    const { huagaiIndex, xianchiIndex } = (0, exports.getHuagaiXianchiIndex)(yearly[1]);
    const { guchenIndex, guasuIndex } = (0, exports.getGuGuaIndex)(yearly[1]);
    const tiancaiIndex = (0, utils_1.fixIndex)(soulIndex + data_1.EARTHLY_BRANCHES.indexOf(earthlyBranch));
    const tianshouIndex = (0, utils_1.fixIndex)(bodyIndex + data_1.EARTHLY_BRANCHES.indexOf(earthlyBranch));
    const tianchuIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)(['si', 'woo', 'zi', 'si', 'woo', 'shen', 'yin', 'woo', 'you', 'hai'][data_1.HEAVENLY_STEMS.indexOf(heavenlyStem)]));
    const posuiIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)(['si', 'chou', 'you'][data_1.EARTHLY_BRANCHES.indexOf(earthlyBranch) % 3]));
    const feilianIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)(['shen', 'you', 'xu', 'si', 'woo', 'wei', 'yin', 'mao', 'chen', 'hai', 'zi', 'chou'][data_1.EARTHLY_BRANCHES.indexOf(earthlyBranch)]));
    const longchiIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('chen') + data_1.EARTHLY_BRANCHES.indexOf(earthlyBranch));
    const fenggeIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('xu') - data_1.EARTHLY_BRANCHES.indexOf(earthlyBranch));
    const tiankuIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('woo') - data_1.EARTHLY_BRANCHES.indexOf(earthlyBranch));
    const tianxuIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('woo') + data_1.EARTHLY_BRANCHES.indexOf(earthlyBranch));
    const tianguanIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)(['wei', 'chen', 'si', 'yin', 'mao', 'you', 'hai', 'you', 'xu', 'woo'][data_1.HEAVENLY_STEMS.indexOf(heavenlyStem)]));
    const tianfuIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)(['you', 'shen', 'zi', 'hai', 'mao', 'yin', 'woo', 'si', 'woo', 'si'][data_1.HEAVENLY_STEMS.indexOf(heavenlyStem)]));
    const tiandeIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('you') + data_1.EARTHLY_BRANCHES.indexOf(earthlyBranch));
    const yuedeIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('si') + data_1.EARTHLY_BRANCHES.indexOf(earthlyBranch));
    const tiankongIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)(yearly[1]) + 1);
    const jieluIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)(['shen', 'woo', 'chen', 'yin', 'zi'][data_1.HEAVENLY_STEMS.indexOf(heavenlyStem) % 5]));
    const kongwangIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)(['you', 'wei', 'si', 'mao', 'chou'][data_1.HEAVENLY_STEMS.indexOf(heavenlyStem) % 5]));
    let xunkongIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)(yearly[1]) + data_1.HEAVENLY_STEMS.indexOf('guiHeavenly') - data_1.HEAVENLY_STEMS.indexOf(heavenlyStem) + 1);
    // 判断命主出生年年支阴阳属性，如果结果为 0 则为阳，否则为阴
    const yinyang = data_1.EARTHLY_BRANCHES.indexOf(earthlyBranch) % 2;
    if (yinyang !== xunkongIndex % 2) {
        // 若命主出生年支阴阳属性与初始旬空宫位的阴阳属性不同，则+1
        xunkongIndex = (0, utils_1.fixIndex)(xunkongIndex + 1);
    }
    // 中州派没有截路空亡，只有一颗截空星
    // 生年阳干在阳宫，阴干在阴宫
    const jiekongIndex = yinyang === 0 ? jieluIndex : kongwangIndex;
    const jieshaAdjIndex = (0, exports.getJieshaAdjIndex)(earthlyBranch);
    const nianjieIndex = (0, exports.getNianjieIndex)(yearly[1]);
    const dahaoAdjIndex = (0, exports.getDahaoIndex)(earthlyBranch);
    const { tianshiIndex, tianshangIndex } = (0, exports.getTianshiTianshangIndex)(gender, earthlyBranch, soulIndex);
    return {
        xianchiIndex,
        huagaiIndex,
        guchenIndex,
        guasuIndex,
        tiancaiIndex,
        tianshouIndex,
        tianchuIndex,
        posuiIndex,
        feilianIndex,
        longchiIndex,
        fenggeIndex,
        tiankuIndex,
        tianxuIndex,
        tianguanIndex,
        tianfuIndex,
        tiandeIndex,
        yuedeIndex,
        tiankongIndex,
        jieluIndex,
        kongwangIndex,
        xunkongIndex,
        tianshangIndex,
        tianshiIndex,
        jiekongIndex,
        jieshaAdjIndex,
        nianjieIndex,
        dahaoAdjIndex,
    };
};
exports.getYearlyStarIndex = getYearlyStarIndex;
const getTianshiTianshangIndex = (gender, earthlyBranch, soulIndex) => {
    // 判断命主出生年年支阴阳属性，如果结果为 0 则为阳，否则为阴
    const yinyang = data_1.EARTHLY_BRANCHES.indexOf(earthlyBranch) % 2;
    const { algorithm } = (0, astro_1.getConfig)();
    const genderYinyang = ['male', 'female'];
    const sameYinyang = yinyang === genderYinyang.indexOf((0, i18n_1.kot)(gender));
    let tianshangIndex = (0, utils_1.fixIndex)(data_1.PALACES.indexOf('friendsPalace') + soulIndex);
    let tianshiIndex = (0, utils_1.fixIndex)(data_1.PALACES.indexOf('healthPalace') + soulIndex);
    if (algorithm === 'zhongzhou' && !sameYinyang) {
        // 中州派的天使天伤与通行版本不一样
        // 天伤奴仆、天使疾厄、夹迁移宫最易寻得
        // 凡阳男阴女，皆依此诀，但若为阴男阳女，则改为天伤居疾厄、天使居奴仆。
        [tianshiIndex, tianshangIndex] = [tianshangIndex, tianshiIndex];
    }
    return { tianshangIndex, tianshiIndex };
};
exports.getTianshiTianshangIndex = getTianshiTianshangIndex;
/**
 * 获取年解的索引
 *
 * - 年解（按年支）
 *   - 解神从戌上起子，逆数至当生年太岁上是也
 *
 * @param earthlyBranch 地支（年）
 * @returns 年解索引
 */
const getNianjieIndex = (earthlyBranchName) => {
    const earthlyBranch = (0, i18n_1.kot)(earthlyBranchName, 'Earthly');
    return (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)(['xu', 'you', 'shen', 'wei', 'woo', 'si', 'chen', 'mao', 'yin', 'chou', 'zi', 'hai'][data_1.EARTHLY_BRANCHES.indexOf(earthlyBranch)]));
};
exports.getNianjieIndex = getNianjieIndex;
/**
 * 获取以月份索引为基准的星耀索引，包括解神，天姚，天刑，阴煞，天月，天巫
 * 解神分为年解和月解，月解作用更加直接快速，年解稍迟钝，且作用力没有月解那么大
 *
 * - 月解（按生月）
 *   - 正二在申三四在戍，五六在子七八在寅，九十月坐於辰宫，十一十二在午宫。
 *
 * - 安天刑天姚（三合必见）
 *   - 天刑从酉起正月，顺至生月便安之。天姚丑宫起正月，顺到生月即停留。
 *
 * - 安阴煞
 *   - 正七月在寅，二八月在子，三九月在戍，四十月在申，五十一在午，六十二在辰。
 *
 * - 安天月
 *   - 一犬二蛇三在龙，四虎五羊六兔宫。七猪八羊九在虎，十马冬犬腊寅中。
 *
 * - 安天巫
 *   - 正五九月在巳，二六十月在申，三七十一在寅，四八十二在亥。
 *
 * @param solarDate 阳历日期
 * @param timeIndex 时辰序号
 * @param fixLeap 是否修复闰月，假如当月不是闰月则不生效
 * @returns
 */
const getMonthlyStarIndex = (solarDate, timeIndex, fixLeap) => {
    const monthIndex = (0, utils_1.fixLunarMonthIndex)(solarDate, timeIndex, fixLeap);
    const jieshenIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)(['shen', 'xu', 'zi', 'yin', 'chen', 'woo'][Math.floor(monthIndex / 2)]));
    const tianyaoIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('chou') + monthIndex);
    const tianxingIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('you') + monthIndex);
    const yinshaIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)(['yin', 'zi', 'xu', 'shen', 'woo', 'chen'][monthIndex % 6]));
    const tianyueIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)(['xu', 'si', 'chen', 'yin', 'wei', 'mao', 'hai', 'wei', 'yin', 'woo', 'xu', 'yin'][monthIndex]));
    const tianwuIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)(['si', 'shen', 'yin', 'hai'][monthIndex % 4]));
    return {
        yuejieIndex: jieshenIndex,
        tianyaoIndex,
        tianxingIndex,
        yinshaIndex,
        tianyueIndex,
        tianwuIndex,
    };
};
exports.getMonthlyStarIndex = getMonthlyStarIndex;
/**
 * 通过 大限/流年 天干获取流昌流曲
 *
 * - 流昌起巳位	甲乙顺流去
 * - 不用四墓宫	日月同年岁
 * - 流曲起酉位	甲乙逆行踪
 * - 亦不用四墓	年日月相同
 *
 * @param heavenlyStemName 天干
 * @returns 文昌、文曲索引
 */
const getChangQuIndexByHeavenlyStem = (heavenlyStemName) => {
    let changIndex = -1;
    let quIndex = -1;
    const heavenlyStem = (0, i18n_1.kot)(heavenlyStemName, 'Heavenly');
    switch (heavenlyStem) {
        case 'jiaHeavenly':
            changIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('si'));
            quIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('you'));
            break;
        case 'yiHeavenly':
            changIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('woo'));
            quIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('shen'));
            break;
        case 'bingHeavenly':
        case 'wuHeavenly':
            changIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('shen'));
            quIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('woo'));
            break;
        case 'dingHeavenly':
        case 'jiHeavenly':
            changIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('you'));
            quIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('si'));
            break;
        case 'gengHeavenly':
            changIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('hai'));
            quIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('mao'));
            break;
        case 'xinHeavenly':
            changIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('zi'));
            quIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('yin'));
            break;
        case 'renHeavenly':
            changIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('yin'));
            quIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('zi'));
            break;
        case 'guiHeavenly':
            changIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('mao'));
            quIndex = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)('hai'));
            break;
    }
    return { changIndex, quIndex };
};
exports.getChangQuIndexByHeavenlyStem = getChangQuIndexByHeavenlyStem;

},{"lunar-lite":8,"../astro":15,"../data":1,"../i18n":17,"../utils":89}],
8:[function(require,module,exports){"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./misc"), exports);
__exportStar(require("./ganzhi"), exports);
__exportStar(require("./convertor"), exports);

},{"./misc":9,"./ganzhi":13,"./convertor":12}],
9:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTotalDaysOfLunarMonth = exports.getZodiac = exports.getSign = void 0;
const lunar_typescript_1 = require("lunar-typescript");
const constants_1 = require("./constants");
const convertor_1 = require("./convertor");
/**
 * 获取星座
 *
 * @param  solarDateStr [description]
 * @return 星座
 */
const getSign = (solarDateStr) => {
    const [year, month, day] = (0, convertor_1.normalizeDateStr)(solarDateStr);
    return lunar_typescript_1.Solar.fromYmd(year, month, day).getXingZuo() + "座";
};
exports.getSign = getSign;
/**
 * 通过年支获取生肖
 *
 * @param earthlyBranchOfYear 年支
 * @example
 * const zodiac = calendar.getZodiac("卯") ;// zodiac='兔'
 */
const getZodiac = (earthlyBranchOfYear) => {
    return constants_1.ZODIAC[constants_1.EARTHLY_BRANCHES.indexOf(earthlyBranchOfYear)];
};
exports.getZodiac = getZodiac;
/**
 * 按照传入阳历日期获取该月农历月份天数
 *
 * @param solarDateStr 阳历日期
 * @returns {number} 日期天数
 */
const getTotalDaysOfLunarMonth = (solarDateStr) => {
    var _a;
    const { lunarYear, lunarMonth, isLeap } = (0, convertor_1.solar2lunar)(solarDateStr);
    const month = lunar_typescript_1.LunarMonth.fromYm(lunarYear, isLeap ? 0 - lunarMonth : lunarMonth);
    return (_a = month === null || month === void 0 ? void 0 : month.getDayCount()) !== null && _a !== void 0 ? _a : 0;
};
exports.getTotalDaysOfLunarMonth = getTotalDaysOfLunarMonth;

},{"lunar-typescript":10,"./constants":11,"./convertor":12}],
10:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LunarUtil = exports.SolarUtil = exports.Solar = exports.LunarMonth = exports.LunarYear = exports.Lunar = void 0;
const g = globalThis;
exports.Lunar = g.Lunar, exports.LunarYear = g.LunarYear, exports.LunarMonth = g.LunarMonth, exports.Solar = g.Solar, exports.SolarUtil = g.SolarUtil, exports.LunarUtil = g.LunarUtil;

},{}],
11:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FIVE_TIGER = exports.MONTHLY_EARTHLY_BRANCHES = exports.ZODIAC = exports.EARTHLY_BRANCHES = exports.HEAVENLY_STEMS = void 0;
/**
 * 天干速查表
 */
exports.HEAVENLY_STEMS = [
    "甲",
    "乙",
    "丙",
    "丁",
    "戊",
    "己",
    "庚",
    "辛",
    "壬",
    "癸",
];
/**
 * 地支速查表
 */
exports.EARTHLY_BRANCHES = [
    "子",
    "丑",
    "寅",
    "卯",
    "辰",
    "巳",
    "午",
    "未",
    "申",
    "酉",
    "戌",
    "亥",
];
/** 十二生肖（按地支顺序） */
exports.ZODIAC = [
    "鼠",
    "牛",
    "虎",
    "兔",
    "龙",
    "蛇",
    "马",
    "羊",
    "猴",
    "鸡",
    "狗",
    "猪",
];
/**
 * 每月地支（按月序）
 */
exports.MONTHLY_EARTHLY_BRANCHES = [
    "寅",
    "卯",
    "辰",
    "巳",
    "午",
    "未",
    "申",
    "酉",
    "戌",
    "亥",
    "子",
    "丑",
];
/** 五虎遁速查表，按天干从甲开始 */
exports.FIVE_TIGER = [
    "丙",
    "戊",
    "庚",
    "壬",
    "甲",
    "丙",
    "戊",
    "庚",
    "壬",
    "甲",
];

},{}],
12:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lunar2solar = exports.solar2lunar = exports.normalizeDateStr = void 0;
const lunar_typescript_1 = require("lunar-typescript");
/**
 * 将日期字符串 YYYY-MM-DD 或者一个 Date 对象分割为 [YYYY, M, D, H, m, s]
 * 当参数为字符串时分割符可以是 `-` `.` 或者 `/`
 *
 * @param dateStr 日期字符串或者 Date 对象
 * @returns [年, 月, 日]
 * @example
 * normalizeDateStr('2023-07-31'); // [2023, 7, 31]
 */
const normalizeDateStr = (date) => {
    if (date instanceof Date) {
        return [
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate(),
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
        ];
    }
    return date
        .split(/[ ]+/)
        .map((item) => item.split(/[-:/.]/))
        .reduce((prev, next) => prev.concat(next), [])
        .map((item) => Math.abs(+item));
};
exports.normalizeDateStr = normalizeDateStr;
/**
 * 公历转农历，年份需要在【1900~2100】之间，并且日期必须在1900-1-31之后
 *
 * @param dateStr 公历日期 YYYY-MM-DD格式的字符串或者Date对象
 * @returns LunarDate
 */
const solar2lunar = (dateStr) => {
    const [year, month, day] = (0, exports.normalizeDateStr)(dateStr);
    const solar = lunar_typescript_1.Solar.fromYmd(year, month, day);
    const lunar = solar.getLunar();
    const lunarYear = lunar.getYear();
    const lunarMonth = Math.abs(lunar.getMonth());
    const lunarDay = lunar.getDay();
    const isLeap = lunar.getMonth() < 0;
    return {
        lunarYear,
        lunarMonth,
        lunarDay,
        isLeap,
        toString(toCnStr) {
            if (toCnStr) {
                return lunar.toString();
            }
            return `${lunarYear}-${lunarMonth}-${lunarDay}`;
        },
    };
};
exports.solar2lunar = solar2lunar;
/**
 * 农历转公历
 *
 * @param dateStr 农历日期 YYYY-MM-DD
 * @param isLeapMonth 是否闰月，若该月不是闰月，会忽略该参数
 * @returns SolarDate
 */
const lunar2solar = (dateStr, isLeapMonth) => {
    const [year, month, day] = (0, exports.normalizeDateStr)(dateStr);
    let lunar = lunar_typescript_1.Lunar.fromYmd(year, month, day);
    const lunarYear = lunar_typescript_1.LunarYear.fromYear(lunar.getYear());
    const leapMonth = lunarYear.getLeapMonth();
    if (leapMonth > 0 && leapMonth === month && isLeapMonth) {
        lunar = lunar_typescript_1.Lunar.fromYmd(year, 0 - month, day);
    }
    const solar = lunar.getSolar();
    const solarYear = solar.getYear();
    const solarMonth = solar.getMonth();
    const solarDay = solar.getDay();
    return {
        solarYear,
        solarMonth,
        solarDay,
        toString() {
            return `${solarYear}-${solarMonth}-${solarDay}`;
        },
    };
};
exports.lunar2solar = lunar2solar;

},{"lunar-typescript":10}],
13:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeavenlyStemAndEarthlyBranchBySolarDate = exports.getHeavenlyStemAndEarthlyBranchByLunarDate = void 0;
const constants_1 = require("./constants");
const convertor_1 = require("./convertor");
const lunar_typescript_1 = require("lunar-typescript");
const utils_1 = require("./utils");
/**
 * 通过农历获取生辰干支
 *
 * @param dateStr 农历日期 YYYY-MM-DD
 * @param timeIndex 时辰索引【0～12】
 * @param isLeap 是否为闰月
 * @returns HeavenlyStemAndEarthlyBranchResult
 */
const getHeavenlyStemAndEarthlyBranchByLunarDate = (dateStr, timeIndex, isLeap, options = { year: "normal", month: "exact" }) => {
    const solarDate = (0, convertor_1.lunar2solar)(dateStr, isLeap);
    return (0, exports.getHeavenlyStemAndEarthlyBranchBySolarDate)(solarDate.toString(), timeIndex, options);
};
exports.getHeavenlyStemAndEarthlyBranchByLunarDate = getHeavenlyStemAndEarthlyBranchByLunarDate;
/**
 * 将阳历转化为干支纪年
 *
 * @param dateStr 公历日期 YYYY-MM-DD
 * @param timeIndex 时辰索引【0～12】
 * @returns HeavenlyStemAndEarthlyBranchResult
 */
const getHeavenlyStemAndEarthlyBranchBySolarDate = (dateStr, timeIndex, options = { year: "exact" }) => {
    const [year, month, date] = (0, convertor_1.normalizeDateStr)(dateStr);
    const solar = lunar_typescript_1.Solar.fromYmdHms(year, month, date, Math.max(timeIndex * 2 - 1, 0), 30, 0);
    const lunar = solar.getLunar();
    const yearlyGan = (options === null || options === void 0 ? void 0 : options.year) === "normal"
        ? lunar.getYearGan()
        : lunar.getYearGanByLiChun();
    const yearlyZhi = (options === null || options === void 0 ? void 0 : options.year) === "normal"
        ? lunar.getYearZhi()
        : lunar.getYearZhiByLiChun();
    const yearly = [
        yearlyGan,
        yearlyZhi,
    ];
    // 如果是初一换干支的话需要自己起五虎遁
    const monthly = calculateMonthlyGanZhi(yearlyGan, lunar, options === null || options === void 0 ? void 0 : options.month);
    const daily = [
        lunar.getDayGanExact(),
        lunar.getDayZhiExact(),
    ];
    const hourly = [
        lunar.getTimeGan(),
        lunar.getTimeZhi(),
    ];
    return {
        yearly,
        monthly,
        daily,
        hourly,
        toString() {
            return `${yearly.join("")} ${monthly.join("")} ${daily.join("")} ${hourly.join("")}`;
        },
    };
};
exports.getHeavenlyStemAndEarthlyBranchBySolarDate = getHeavenlyStemAndEarthlyBranchBySolarDate;
function calculateMonthlyGanZhi(yearlyGan, lunar, monthlyDivide = "exact") {
    if (monthlyDivide === "exact") {
        // 按节气
        return [
            lunar.getMonthGanExact(),
            lunar.getMonthZhiExact(),
        ];
    }
    // 按初一
    const fixLeap = lunar.getMonth() < 0 && lunar.getDay() > 15 ? 1 : 0;
    const gan = constants_1.HEAVENLY_STEMS[(0, utils_1.fixIndex)(constants_1.HEAVENLY_STEMS.indexOf(constants_1.FIVE_TIGER[constants_1.HEAVENLY_STEMS.indexOf(yearlyGan)]) +
        Math.abs(lunar.getMonth()) -
        1 +
        fixLeap, 10)];
    const zhi = constants_1.MONTHLY_EARTHLY_BRANCHES[Math.abs(lunar.getMonth()) - 1 + fixLeap];
    return [gan, zhi];
}

},{"./constants":11,"./convertor":12,"lunar-typescript":10,"./utils":14}],
14:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixIndex = void 0;
/**
 * 用于处理索引，将索引锁定在 0~max 范围内
 *
 * @param index 当前索引
 * @param max 最大循环数，默认为12【因为12用得最多，宫位数量以及十二地支数量都为12，所以将12作为默认值】
 * @returns {number} 处理后的索引
 */
const fixIndex = (index, max = 12) => {
    if (index < 0) {
        return (0, exports.fixIndex)(index + max, max);
    }
    if (index > max - 1) {
        return (0, exports.fixIndex)(index - max, max);
    }
    const res = 1 / index === -Infinity ? 0 : index;
    return res;
};
exports.fixIndex = fixIndex;

},{}],
15:[function(require,module,exports){"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./palace"), exports);
__exportStar(require("./astro"), exports);

},{"./palace":16,"./astro":90}],
16:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHoroscope = exports.getPalaceNames = exports.getFiveElementsClass = exports.getSoulAndBody = void 0;
const lunar_lite_1 = require("lunar-lite");
const data_1 = require("../data");
const i18n_1 = require("../i18n");
const utils_1 = require("../utils");
const astro_1 = require("./astro");
/**
 * 获取命宫以及身宫数据
 *
 * 1. 定寅首
 * - 甲己年生起丙寅，乙庚年生起戊寅，
 * - 丙辛年生起庚寅，丁壬年生起壬寅，
 * - 戊癸年生起甲寅。
 *
 * 2. 安命身宫诀
 * - 寅起正月，顺数至生月，逆数生时为命宫。
 * - 寅起正月，顺数至生月，顺数生时为身宫。
 *
 * @param {AstrolabeParam} param 通用排盘参数
 * @returns {SoulAndBody} 命宫和身宫数据
 */
const getSoulAndBody = (param) => {
    const { solarDate, timeIndex, fixLeap, from } = param;
    const { yearly, hourly } = (0, lunar_lite_1.getHeavenlyStemAndEarthlyBranchBySolarDate)(solarDate, timeIndex, {
        year: (0, astro_1.getConfig)().yearDivide,
        month: (0, astro_1.getConfig)().horoscopeDivide,
    });
    const earthlyBranchOfTime = (0, i18n_1.kot)(hourly[1], 'Earthly');
    const heavenlyStemOfYear = (0, i18n_1.kot)(yearly[0], 'Heavenly');
    // 紫微斗数以`寅`宫为第一个宫位
    const firstIndex = data_1.EARTHLY_BRANCHES.indexOf('yinEarthly');
    const monthIndex = (0, utils_1.fixLunarMonthIndex)(solarDate, timeIndex, fixLeap);
    // 命宫索引，以寅宫为0，顺时针数到生月地支索引，再逆时针数到生时地支索引
    // 此处数到生月地支索引其实就是农历月份，所以不再计算生月地支索引
    let soulIndex = (0, utils_1.fixIndex)(monthIndex - data_1.EARTHLY_BRANCHES.indexOf(earthlyBranchOfTime));
    // 身宫索引，以寅宫为0，顺时针数到生月地支索引，再顺时针数到生时地支索引
    // 与命宫索引一样，不再赘述
    let bodyIndex = (0, utils_1.fixIndex)(monthIndex + data_1.EARTHLY_BRANCHES.indexOf(earthlyBranchOfTime));
    if ((from === null || from === void 0 ? void 0 : from.heavenlyStem) && (from === null || from === void 0 ? void 0 : from.earthlyBranch)) {
        // 以传入地支为命宫
        soulIndex = (0, utils_1.fixEarthlyBranchIndex)(from.earthlyBranch);
        const bodyOffset = [0, 2, 4, 6, 8, 10, 0, 2, 4, 6, 8, 10, 0];
        bodyIndex = (0, utils_1.fixIndex)(bodyOffset[timeIndex] + soulIndex);
    }
    // 用五虎遁取得寅宫的天干
    const startHevenlyStem = data_1.TIGER_RULE[heavenlyStemOfYear];
    // 获取命宫天干索引，起始天干索引加上命宫的索引即是
    // 天干循环数为10
    const heavenlyStemOfSoulIndex = (0, utils_1.fixIndex)(data_1.HEAVENLY_STEMS.indexOf(startHevenlyStem) + soulIndex, 10);
    // 命宫的天干
    const heavenlyStemOfSoul = (0, i18n_1.t)(data_1.HEAVENLY_STEMS[heavenlyStemOfSoulIndex]);
    // 命宫地支，命宫索引 + `寅`的索引（因为紫微斗数里寅宫是第一个宫位）
    const earthlyBranchOfSoul = (0, i18n_1.t)(data_1.EARTHLY_BRANCHES[(0, utils_1.fixIndex)(soulIndex + firstIndex)]);
    return {
        soulIndex,
        bodyIndex,
        heavenlyStemOfSoul,
        earthlyBranchOfSoul,
    };
};
exports.getSoulAndBody = getSoulAndBody;
/**
 * 定五行局法（以命宫天干地支而定）
 *
 * 纳音五行计算取数巧记口诀：
 *
 * - 甲乙丙丁一到五，子丑午未一来数，
 * - 寅卯申酉二上走，辰巳戌亥三为足。
 * - 干支相加多减五，五行木金水火土。
 *
 * 注解：
 *
 * 1、五行取数：木1 金2 水3 火4 土5
 *
 *  天干取数：
 *  - 甲乙 ——> 1
 *  - 丙丁 ——> 2
 *  - 戊己 ——> 3
 *  - 庚辛 ——> 4
 *  - 壬癸 ——> 5
 *
 *  地支取数：
 *  - 子午丑未 ——> 1
 *  - 寅申卯酉 ——> 2
 *  - 辰戌巳亥 ——> 3
 *
 * 2、计算方法：
 *
 *  干支数相加，超过5者减去5，以差论之。
 *  - 若差为1则五行属木
 *  - 若差为2则五行属金
 *  - 若差为3则五行属水
 *  - 若差为4则五行属火
 *  - 若差为5则五行属土
 *
 * 3、举例：
 *  - 丙子：丙2 子1=3 ——> 水 ——> 水二局
 *  - 辛未：辛4 未1=5 ——> 土 ——> 土五局
 *  - 庚申：庚4 申2=6 ——> 6-5=1 ——> 木 ——> 木三局
 *
 * @param heavenlyStemName 天干
 * @param earthlyBranchName 地支
 * @returns 水二局 ｜ 木三局 ｜ 金四局 ｜ 土五局 ｜ 火六局
 */
const getFiveElementsClass = (heavenlyStemName, earthlyBranchName) => {
    const fiveElementsTable = ['wood3rd', 'metal4th', 'water2nd', 'fire6th', 'earth5th'];
    const heavenlyStem = (0, i18n_1.kot)(heavenlyStemName, 'Heavenly');
    const earthlyBranch = (0, i18n_1.kot)(earthlyBranchName, 'Earthly');
    const heavenlyStemNumber = Math.floor(data_1.HEAVENLY_STEMS.indexOf(heavenlyStem) / 2) + 1;
    const earthlyBranchNumber = Math.floor((0, utils_1.fixIndex)(data_1.EARTHLY_BRANCHES.indexOf(earthlyBranch), 6) / 2) + 1;
    let index = heavenlyStemNumber + earthlyBranchNumber;
    while (index > 5) {
        index -= 5;
    }
    return (0, i18n_1.t)(fiveElementsTable[index - 1]);
};
exports.getFiveElementsClass = getFiveElementsClass;
/**
 * 获取从寅宫开始的各个宫名
 *
 * @param fromIndex 命宫索引
 * @returns 从寅宫开始的各个宫名
 */
const getPalaceNames = (fromIndex) => {
    const names = [];
    for (let i = 0; i < data_1.PALACES.length; i++) {
        const idx = (0, utils_1.fixIndex)(i - fromIndex);
        names[i] = (0, i18n_1.t)(data_1.PALACES[idx]);
    }
    return names;
};
exports.getPalaceNames = getPalaceNames;
/**
 * 起大限
 *
 * - 大限由命宫起，阳男阴女顺行；
 * - 阴男阳女逆行，每十年过一宫限。
 *
 * @param solarDateStr 公历日期
 * @param timeIndex 出生时索引
 * @param gender 性别
 * @param fixLeap 是否修正闰月，若修正，则闰月前15天按上月算，后15天按下月算
 * @returns 从寅宫开始的大限年龄段
 */
const getHoroscope = (param) => {
    var _a, _b;
    const { solarDate, timeIndex, gender, from } = param;
    const decadals = [];
    const genderKey = (0, i18n_1.kot)(gender);
    const { yearly } = (0, lunar_lite_1.getHeavenlyStemAndEarthlyBranchBySolarDate)(solarDate, timeIndex, {
        // 起大限应该与配置同步
        year: (0, astro_1.getConfig)().yearDivide,
    });
    const heavenlyStem = (0, i18n_1.kot)(yearly[0], 'Heavenly');
    const earthlyBranch = (0, i18n_1.kot)(yearly[1], 'Earthly');
    const { soulIndex, heavenlyStemOfSoul, earthlyBranchOfSoul } = (0, exports.getSoulAndBody)(param);
    const fiveElementsClass = (0, i18n_1.kot)((0, exports.getFiveElementsClass)((_a = from === null || from === void 0 ? void 0 : from.heavenlyStem) !== null && _a !== void 0 ? _a : heavenlyStemOfSoul, (_b = from === null || from === void 0 ? void 0 : from.earthlyBranch) !== null && _b !== void 0 ? _b : earthlyBranchOfSoul));
    // 用五虎遁获取大限起始天干
    const startHeavenlyStem = data_1.TIGER_RULE[heavenlyStem];
    for (let i = 0; i < 12; i++) {
        const idx = data_1.GENDER[genderKey] === data_1.earthlyBranches[earthlyBranch].yinYang ? (0, utils_1.fixIndex)(soulIndex + i) : (0, utils_1.fixIndex)(soulIndex - i);
        const start = data_1.FiveElementsClass[fiveElementsClass] + 10 * i;
        const heavenlyStemIndex = (0, utils_1.fixIndex)(data_1.HEAVENLY_STEMS.indexOf(startHeavenlyStem) + idx, 10);
        const earthlyBranchIndex = (0, utils_1.fixIndex)(data_1.EARTHLY_BRANCHES.indexOf('yinEarthly') + idx);
        decadals[idx] = {
            range: [start, start + 9],
            heavenlyStem: (0, i18n_1.t)(data_1.HEAVENLY_STEMS[heavenlyStemIndex]),
            earthlyBranch: (0, i18n_1.t)(data_1.EARTHLY_BRANCHES[earthlyBranchIndex]),
        };
    }
    const ageIdx = (0, utils_1.getAgeIndex)(yearly[1]);
    const ages = [];
    for (let i = 0; i < 12; i++) {
        const age = [];
        for (let j = 0; j < 10; j++) {
            age.push(12 * j + i + 1);
        }
        const idx = (0, i18n_1.kot)(gender) === 'male' ? (0, utils_1.fixIndex)(ageIdx + i) : (0, utils_1.fixIndex)(ageIdx - i);
        ages[idx] = age;
    }
    return { decadals, ages };
};
exports.getHoroscope = getHoroscope;

},{"lunar-lite":8,"../data":1,"../i18n":17,"../utils":89,"./astro":90}],
17:[function(require,module,exports){"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.kot = exports.t = exports.withLanguage = exports.getLanguage = exports.setLanguage = void 0;
const i18next_1 = __importDefault(require("i18next"));
const zh_CN_1 = __importDefault(require("./locales/zh-CN"));
const zh_TW_1 = __importDefault(require("./locales/zh-TW"));
const ko_KR_1 = __importDefault(require("./locales/ko-KR"));
const ja_JP_1 = __importDefault(require("./locales/ja-JP"));
const en_US_1 = __importDefault(require("./locales/en-US"));
const vi_VN_1 = __importDefault(require("./locales/vi-VN"));
const starAliases_1 = require("./starAliases");
const constants_1 = require("../data/constants");
const resources = {
    'en-US': {
        translation: en_US_1.default,
    },
    'ja-JP': {
        translation: ja_JP_1.default,
    },
    'ko-KR': {
        translation: ko_KR_1.default,
    },
    'zh-CN': {
        translation: zh_CN_1.default,
    },
    'zh-TW': {
        translation: zh_TW_1.default,
    },
    'vi-VN': {
        translation: vi_VN_1.default,
    },
};
// 设置默认语言和加载翻译文件
i18next_1.default.init({ lng: 'zh-CN', resources });
/**
 * 设置国际化语言。
 * 支持的语言见 type.ts -> Language
 *
 * @param language 需要设置的语言【默认为zh-CN】
 */
const setLanguage = (language) => {
    if (!constants_1.LANGUAGES.includes(language))
        throw new Error('invalid language.');
    i18next_1.default.changeLanguage(language);
};
exports.setLanguage = setLanguage;
let activeLanguage;
/**
 * 获取当前同步计算或全局设置使用的语言。
 *
 * @version 2.6.2
 */
const getLanguage = () => activeLanguage !== null && activeLanguage !== void 0 ? activeLanguage : i18next_1.default.language;
exports.getLanguage = getLanguage;
/**
 * 同步计算期间使用指定语言，不改变其他调用的语言。
 *
 * @internal
 * @version 2.6.2
 * @param language 当前计算使用的语言
 * @param calculate 同步计算方法
 */
const withLanguage = (language, calculate) => {
    if (!constants_1.LANGUAGES.includes(language))
        throw new Error('invalid language.');
    const previous = activeLanguage;
    activeLanguage = language;
    try {
        return calculate();
    }
    finally {
        activeLanguage = previous;
    }
};
exports.withLanguage = withLanguage;
/**
 * 输出国际化文本。
 *
 * @param str 待翻译的字符串
 * @returns 翻译后的字符串
 */
const t = (str, options) => {
    if (!str) {
        return '';
    }
    return i18next_1.default.t(str, Object.assign(Object.assign({}, options), { lng: (0, exports.getLanguage)() }));
};
exports.t = t;
/**
 * kot(Key of Translation).
 *
 * 通过翻译文本反查Key的值，用于各种计算。
 * 若没有找到则会返回Value本身。
 *
 * @param value 翻译后的字符串
 * @returns 翻译文本的Key值
 */
const kot = (value, k) => {
    let res = value;
    const aliasKey = starAliases_1.STAR_ALIASES[value];
    if (aliasKey) {
        return aliasKey;
    }
    for (const [, item] of Object.entries(resources)) {
        for (const [transKey, trans] of Object.entries(item.translation)) {
            if (((k && transKey.includes(k)) || !k) && trans === value) {
                res = transKey;
                return res;
            }
        }
    }
    return res;
};
exports.kot = kot;
__exportStar(require("./types"), exports);
exports.default = i18next_1.default;

},{"i18next":18,"./locales/zh-CN":19,"./locales/zh-TW":29,"./locales/ko-KR":39,"./locales/ja-JP":49,"./locales/en-US":59,"./locales/vi-VN":69,"./starAliases":79,"../data/constants":2,"./types":80}],
18:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let res = {};
const api = {
    language: 'zh-CN',
    init(o) { res = o.resources; api.language = o.lng; },
    changeLanguage(l) { api.language = l; },
    t(key, opt) {
        const lng = (opt && opt.lng) || api.language;
        let s = (res[lng] && res[lng].translation[key]);
        if (s == null)
            s = res['zh-CN'] && res['zh-CN'].translation[key];
        if (s == null)
            s = key;
        return typeof s === 'string' ? s.replace(/\{\{\s*(\w+)\s*\}\}/g, (_, k) => (opt && opt[k] != null ? String(opt[k]) : '')) : s;
    }
};
exports.default = api;

},{}],
19:[function(require,module,exports){"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_json_1 = __importDefault(require("./common.json"));
const brightness_1 = __importDefault(require("./brightness"));
const earthlyBranch_1 = __importDefault(require("./earthlyBranch"));
const fiveElementsClass_1 = __importDefault(require("./fiveElementsClass"));
const gender_1 = __importDefault(require("./gender"));
const heavenlyStem_1 = __importDefault(require("./heavenlyStem"));
const mutagen_1 = __importDefault(require("./mutagen"));
const palace_1 = __importDefault(require("./palace"));
const star_1 = __importDefault(require("./star"));
exports.default = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, common_json_1.default), fiveElementsClass_1.default), heavenlyStem_1.default), earthlyBranch_1.default), brightness_1.default), mutagen_1.default), star_1.default), palace_1.default), gender_1.default);

},{"./common.json":20,"./brightness":21,"./earthlyBranch":22,"./fiveElementsClass":23,"./gender":24,"./heavenlyStem":25,"./mutagen":26,"./palace":27,"./star":28}],
20:[function(require,module,exports){module.exports={
  "decadal": "大限",
  "childhood": "童限",
  "yearly": "流年",
  "monthly": "流月",
  "daily": "流日",
  "hourly": "流时",
  "turn": "小限",
  "rat": "鼠",
  "ox": "牛",
  "tiger": "虎",
  "rabbit": "兔",
  "dragon": "龙",
  "snake": "蛇",
  "horse": "马",
  "sheep": "羊",
  "monkey": "猴",
  "rooster": "鸡",
  "dog": "狗",
  "pig": "猪",
  "earlyRatHour": "早子时",
  "oxHour": "丑时",
  "tigerHour": "寅时",
  "rabbitHour": "卯时",
  "dragonHour": "辰时",
  "snakeHour": "巳时",
  "horseHour": "午时",
  "goatHour": "未时",
  "monkeyHour": "申时",
  "roosterHour": "酉时",
  "dogHour": "戌时",
  "pigHour": "亥时",
  "lateRatHour": "晚子时",
  "aries": "白羊座",
  "taurus": "金牛座",
  "gemini": "双子座",
  "cancer": "巨蟹座",
  "leo": "狮子座",
  "virgo": "处女座",
  "libra": "天秤座",
  "scorpio": "天蝎座",
  "sagittarius": "射手座",
  "capricorn": "摩羯座",
  "aquarius": "水瓶座",
  "pisces": "双鱼座"
};
},{}],
21:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    miao: '庙',
    wang: '旺',
    de: '得',
    li: '利',
    ping: '平',
    bu: '不',
    xian: '陷',
};

},{}],
22:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    ziEarthly: '子',
    chouEarthly: '丑',
    yinEarthly: '寅',
    maoEarthly: '卯',
    chenEarthly: '辰',
    siEarthly: '巳',
    wuEarthly: '午',
    weiEarthly: '未',
    shenEarthly: '申',
    youEarthly: '酉',
    xuEarthly: '戌',
    haiEarthly: '亥',
};

},{}],
23:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    water2nd: '水二局',
    wood3rd: '木三局',
    metal4th: '金四局',
    earth5th: '土五局',
    fire6th: '火六局',
};

},{}],
24:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    male: '男',
    female: '女',
};

},{}],
25:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    jiaHeavenly: '甲',
    yiHeavenly: '乙',
    bingHeavenly: '丙',
    dingHeavenly: '丁',
    wuHeavenly: '戊',
    jiHeavenly: '己',
    gengHeavenly: '庚',
    xinHeavenly: '辛',
    renHeavenly: '壬',
    guiHeavenly: '癸',
};

},{}],
26:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    sihuaLu: '禄',
    sihuaQuan: '权',
    sihuaKe: '科',
    sihuaJi: '忌',
};

},{}],
27:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    soulPalace: '命宫',
    bodyPalace: '身宫',
    siblingsPalace: '兄弟',
    spousePalace: '夫妻',
    childrenPalace: '子女',
    wealthPalace: '财帛',
    healthPalace: '疾厄',
    surfacePalace: '迁移',
    friendsPalace: '仆役',
    careerPalace: '官禄',
    propertyPalace: '田宅',
    spiritPalace: '福德',
    parentsPalace: '父母',
    originalPalace: '来因',
};

},{}],
28:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    ziweiMaj: '紫微',
    tianjiMaj: '天机',
    taiyangMaj: '太阳',
    wuquMaj: '武曲',
    tiantongMaj: '天同',
    lianzhenMaj: '廉贞',
    tianfuMaj: '天府',
    taiyinMaj: '太阴',
    tanlangMaj: '贪狼',
    jumenMaj: '巨门',
    tianxiangMaj: '天相',
    tianliangMaj: '天梁',
    qishaMaj: '七杀',
    pojunMaj: '破军',
    zuofuMin: '左辅',
    youbiMin: '右弼',
    wenchangMin: '文昌',
    wenquMin: '文曲',
    lucunMin: '禄存',
    tianmaMin: '天马',
    qingyangMin: '擎羊',
    tuoluoMin: '陀罗',
    huoxingMin: '火星',
    lingxingMin: '铃星',
    tiankuiMin: '天魁',
    tianyueMin: '天钺',
    dikongMin: '地空',
    dijieMin: '地劫',
    jieshaAdj: '劫杀',
    tiankong: '天空',
    tianxing: '天刑',
    tianyao: '天姚',
    jieshen: '解神',
    yinsha: '阴煞',
    tianxi: '天喜',
    tianguan: '天官',
    tianfu: '天福',
    tianku: '天哭',
    tianxu: '天虚',
    longchi: '龙池',
    fengge: '凤阁',
    hongluan: '红鸾',
    guchen: '孤辰',
    guasu: '寡宿',
    feilian: '蜚廉',
    posui: '破碎',
    taifu: '台辅',
    fenggao: '封诰',
    tianwu: '天巫',
    tianyue: '天月',
    santai: '三台',
    bazuo: '八座',
    engguang: '恩光',
    tiangui: '天贵',
    tiancai: '天才',
    tianshou: '天寿',
    jiekong: '截空',
    xunzhong: '旬中',
    xunkong: '旬空',
    kongwang: '空亡',
    jielu: '截路',
    yuede: '月德',
    tianshang: '天伤',
    tianshi: '天使',
    tianchu: '天厨',
    changsheng: '长生',
    muyu: '沐浴',
    guandai: '冠带',
    linguan: '临官',
    diwang: '帝旺',
    shuai: '衰',
    bing: '病',
    si: '死',
    mu: '墓',
    jue: '绝',
    tai: '胎',
    yang: '养',
    boshi: '博士',
    lishi: '力士',
    qinglong: '青龙',
    xiaohao: '小耗',
    jiangjun: '将军',
    zhoushu: '奏书',
    faylian: '飞廉',
    xishen: '喜神',
    bingfu: '病符',
    dahao: '大耗',
    suipo: '岁破',
    fubing: '伏兵',
    guanfu: '官府',
    suijian: '岁建',
    huiqi: '晦气',
    sangmen: '丧门',
    guansuo: '贯索',
    gwanfu: '官符',
    longde: '龙德',
    baihu: '白虎',
    tiande: '天德',
    diaoke: '吊客',
    jiangxing: '将星',
    panan: '攀鞍',
    suiyi: '岁驿',
    xiishen: '息神',
    huagai: '华盖',
    jiesha: '劫煞',
    zhaisha: '灾煞',
    tiansha: '天煞',
    zhibei: '指背',
    xianchi: '咸池',
    yuesha: '月煞',
    wangshen: '亡神',
    yunkui: '运魁',
    yunyue: '运钺',
    yunchang: '运昌',
    yunqu: '运曲',
    yunluan: '运鸾',
    yunxi: '运喜',
    yunlu: '运禄',
    yunyang: '运羊',
    yuntuo: '运陀',
    yunma: '运马',
    liukui: '流魁',
    liuyue: '流钺',
    liuchang: '流昌',
    liuqu: '流曲',
    liuluan: '流鸾',
    liuxi: '流喜',
    liulu: '流禄',
    liuyang: '流羊',
    liutuo: '流陀',
    liuma: '流马',
    nianjie: '年解',
    yuekui: '月魁',
    yueyue: '月钺',
    yuechang: '月昌',
    yuequ: '月曲',
    yueluan: '月鸾',
    yuexi: '月喜',
    yuelu: '月禄',
    yueyang: '月羊',
    yuetuo: '月陀',
    yuema: '月马',
    rikui: '日魁',
    riyue: '日钺',
    richang: '日昌',
    riqu: '日曲',
    riluan: '日鸾',
    rixi: '日喜',
    rilu: '日禄',
    riyang: '日羊',
    rituo: '日陀',
    rima: '日马',
    shikui: '时魁',
    shiyue: '时钺',
    shichang: '时昌',
    shiqu: '时曲',
    shiluan: '时鸾',
    shixi: '时喜',
    shilu: '时禄',
    shiyang: '时羊',
    shituo: '时陀',
    shima: '时马',
};

},{}],
29:[function(require,module,exports){"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_json_1 = __importDefault(require("./common.json"));
const brightness_1 = __importDefault(require("./brightness"));
const earthlyBranch_1 = __importDefault(require("./earthlyBranch"));
const fiveElementsClass_1 = __importDefault(require("./fiveElementsClass"));
const gender_1 = __importDefault(require("./gender"));
const heavenlyStem_1 = __importDefault(require("./heavenlyStem"));
const mutagen_1 = __importDefault(require("./mutagen"));
const palace_1 = __importDefault(require("./palace"));
const star_1 = __importDefault(require("./star"));
exports.default = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, common_json_1.default), fiveElementsClass_1.default), heavenlyStem_1.default), earthlyBranch_1.default), brightness_1.default), mutagen_1.default), star_1.default), palace_1.default), gender_1.default);

},{"./common.json":30,"./brightness":31,"./earthlyBranch":32,"./fiveElementsClass":33,"./gender":34,"./heavenlyStem":35,"./mutagen":36,"./palace":37,"./star":38}],
30:[function(require,module,exports){module.exports={
  "decadal": "大限",
  "childhood": "童限",
  "yearly": "流年",
  "monthly": "流月",
  "daily": "流日",
  "hourly": "流時",
  "turn": "小限",
  "rat": "鼠",
  "ox": "牛",
  "tiger": "虎",
  "rabbit": "兔",
  "dragon": "龍",
  "snake": "蛇",
  "horse": "馬",
  "sheep": "羊",
  "monkey": "猴",
  "rooster": "雞",
  "dog": "狗",
  "pig": "豬",
  "earlyRatHour": "早子時",
  "oxHour": "丑時",
  "tigerHour": "寅時",
  "rabbitHour": "卯時",
  "dragonHour": "辰時",
  "snakeHour": "巳時",
  "horseHour": "午時",
  "goatHour": "未時",
  "monkeyHour": "申時",
  "roosterHour": "酉時",
  "dogHour": "戌時",
  "pigHour": "亥時",
  "lateRatHour": "晚子時",
  "aries": "白羊座",
  "taurus": "金牛座",
  "gemini": "雙子座",
  "cancer": "巨蟹座",
  "leo": "獅子座",
  "virgo": "處女座",
  "libra": "天秤座",
  "scorpio": "天蠍座",
  "sagittarius": "射手座",
  "capricorn": "摩羯座",
  "aquarius": "水瓶座",
  "pisces": "雙魚座"
};
},{}],
31:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    miao: '廟',
    wang: '旺',
    de: '得',
    li: '利',
    ping: '平',
    bu: '不',
    xian: '陷',
};

},{}],
32:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    ziEarthly: '子',
    chouEarthly: '丑',
    yinEarthly: '寅',
    maoEarthly: '卯',
    chenEarthly: '辰',
    siEarthly: '巳',
    wuEarthly: '午',
    weiEarthly: '未',
    shenEarthly: '申',
    youEarthly: '酉',
    xuEarthly: '戌',
    haiEarthly: '亥',
};

},{}],
33:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    water2nd: '水二局',
    wood3rd: '木三局',
    metal4th: '金四局',
    earth5th: '土五局',
    fire6th: '火六局',
};

},{}],
34:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    male: '男',
    female: '女',
};

},{}],
35:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    jiaHeavenly: '甲',
    yiHeavenly: '乙',
    bingHeavenly: '丙',
    dingHeavenly: '丁',
    wuHeavenly: '戊',
    jiHeavenly: '己',
    gengHeavenly: '庚',
    xinHeavenly: '辛',
    renHeavenly: '壬',
    guiHeavenly: '癸',
};

},{}],
36:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    sihuaLu: '祿',
    sihuaQuan: '權',
    sihuaKe: '科',
    sihuaJi: '忌',
};

},{}],
37:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    soulPalace: '命宮',
    bodyPalace: '身宮',
    siblingsPalace: '兄弟',
    spousePalace: '夫妻',
    childrenPalace: '子女',
    wealthPalace: '財帛',
    healthPalace: '疾厄',
    surfacePalace: '遷移',
    friendsPalace: '僕役',
    careerPalace: '官祿',
    propertyPalace: '田宅',
    spiritPalace: '福德',
    parentsPalace: '父母',
    originalPalace: '来因',
};

},{}],
38:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    ziweiMaj: '紫微',
    tianjiMaj: '天機',
    taiyangMaj: '太陽',
    wuquMaj: '武曲',
    tiantongMaj: '天同',
    lianzhenMaj: '廉貞',
    tianfuMaj: '天府',
    taiyinMaj: '太陰',
    tanlangMaj: '貪狼',
    jumenMaj: '巨門',
    tianxiangMaj: '天相',
    tianliangMaj: '天梁',
    qishaMaj: '七殺',
    pojunMaj: '破軍',
    zuofuMin: '左輔',
    youbiMin: '右弼',
    wenchangMin: '文昌',
    wenquMin: '文曲',
    lucunMin: '祿存',
    tianmaMin: '天馬',
    qingyangMin: '擎羊',
    tuoluoMin: '陀羅',
    huoxingMin: '火星',
    lingxingMin: '鈴星',
    tiankuiMin: '天魁',
    tianyueMin: '天鉞',
    dikongMin: '地空',
    dijieMin: '地劫',
    jieshaAdj: '劫殺',
    tiankong: '天空',
    tianxing: '天刑',
    tianyao: '天姚',
    jieshen: '解神',
    yinsha: '陰煞',
    tianxi: '天喜',
    tianguan: '天官',
    tianfu: '天福',
    tianku: '天哭',
    tianxu: '天虛',
    longchi: '龍池',
    fengge: '鳳閣',
    hongluan: '紅鸞',
    guchen: '孤辰',
    guasu: '寡宿',
    feilian: '蜚廉',
    posui: '破碎',
    taifu: '台輔',
    fenggao: '封誥',
    tianwu: '天巫',
    tianyue: '天月',
    santai: '三台',
    bazuo: '八座',
    engguang: '恩光',
    tiangui: '天貴',
    tiancai: '天才',
    tianshou: '天壽',
    jiekong: '截空',
    xunzhong: '旬中',
    xunkong: '旬空',
    kongwang: '空亡',
    jielu: '截路',
    yuede: '月德',
    tianshang: '天傷',
    tianshi: '天使',
    tianchu: '天廚',
    changsheng: '長生',
    muyu: '沐浴',
    guandai: '冠帶',
    linguan: '臨官',
    diwang: '帝旺',
    shuai: '衰',
    bing: '病',
    si: '死',
    mu: '墓',
    jue: '絕',
    tai: '胎',
    yang: '養',
    boshi: '博士',
    lishi: '力士',
    qinglong: '青龍',
    xiaohao: '小耗',
    jiangjun: '將軍',
    zhoushu: '奏書',
    faylian: '飛廉',
    xishen: '喜神',
    bingfu: '病符',
    dahao: '大耗',
    suipo: '歲破',
    fubing: '伏兵',
    guanfu: '官府',
    suijian: '歲建',
    huiqi: '晦氣',
    sangmen: '喪門',
    guansuo: '貫索',
    gwanfu: '官符',
    longde: '龍德',
    baihu: '白虎',
    tiande: '天德',
    diaoke: '弔客',
    jiangxing: '將星',
    panan: '攀鞍',
    suiyi: '歲驛',
    xiishen: '息神',
    huagai: '華蓋',
    jiesha: '劫煞',
    zhaisha: '災煞',
    tiansha: '天煞',
    zhibei: '指背',
    xianchi: '咸池',
    yuesha: '月煞',
    wangshen: '亡神',
    yunkui: '運魁',
    yunyue: '運鉞',
    yunchang: '運昌',
    yunqu: '運曲',
    yunluan: '運鸞',
    yunxi: '運喜',
    yunlu: '運祿',
    yunyang: '運羊',
    yuntuo: '運陀',
    yunma: '運馬',
    liukui: '流魁',
    liuyue: '流鉞',
    liuchang: '流昌',
    liuqu: '流曲',
    liuluan: '流鸞',
    liuxi: '流喜',
    liulu: '流祿',
    liuyang: '流羊',
    liutuo: '流陀',
    liuma: '流馬',
    nianjie: '年解',
    yuekui: '月魁',
    yueyue: '月鉞',
    yuechang: '月昌',
    yuequ: '月曲',
    yueluan: '月鸞',
    yuexi: '月喜',
    yuelu: '月祿',
    yueyang: '月羊',
    yuetuo: '月陀',
    yuema: '月馬',
    rikui: '日魁',
    riyue: '日鉞',
    richang: '日昌',
    riqu: '日曲',
    riluan: '日鸞',
    rixi: '日喜',
    rilu: '日祿',
    riyang: '日羊',
    rituo: '日陀',
    rima: '日馬',
    shikui: '時魁',
    shiyue: '時鉞',
    shichang: '時昌',
    shiqu: '時曲',
    shiluan: '時鸞',
    shixi: '時喜',
    shilu: '時祿',
    shiyang: '時羊',
    shituo: '時陀',
    shima: '時馬',
};

},{}],
39:[function(require,module,exports){"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_json_1 = __importDefault(require("./common.json"));
const brightness_1 = __importDefault(require("./brightness"));
const earthlyBranch_1 = __importDefault(require("./earthlyBranch"));
const fiveElementsClass_1 = __importDefault(require("./fiveElementsClass"));
const gender_1 = __importDefault(require("./gender"));
const heavenlyStem_1 = __importDefault(require("./heavenlyStem"));
const mutagen_1 = __importDefault(require("./mutagen"));
const palace_1 = __importDefault(require("./palace"));
const star_1 = __importDefault(require("./star"));
exports.default = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, common_json_1.default), fiveElementsClass_1.default), heavenlyStem_1.default), earthlyBranch_1.default), brightness_1.default), mutagen_1.default), star_1.default), palace_1.default), gender_1.default);

},{"./common.json":40,"./brightness":41,"./earthlyBranch":42,"./fiveElementsClass":43,"./gender":44,"./heavenlyStem":45,"./mutagen":46,"./palace":47,"./star":48}],
40:[function(require,module,exports){module.exports={
  "lunarDate": "음력 {{year}}년 {{leapMonth}}{{month}}월 {{day}}일",
  "leapMonth": "윤",
  "decadal": "대한",
  "childhood": "동한",
  "yearly": "유년",
  "monthly": "유월",
  "daily": "유일",
  "hourly": "유시",
  "turn": "소한",
  "rat": "쥐",
  "ox": "소",
  "tiger": "호랑이",
  "rabbit": "토끼",
  "dragon": "용",
  "snake": "뱀",
  "horse": "말",
  "sheep": "양",
  "monkey": "원숭이",
  "rooster": "닭",
  "dog": "개",
  "pig": "돼지",
  "earlyRatHour": "아침 자시",
  "oxHour": "축시",
  "tigerHour": "인시",
  "rabbitHour": "묘시",
  "dragonHour": "진시",
  "snakeHour": "사시",
  "horseHour": "오시",
  "goatHour": "미시",
  "monkeyHour": "신시",
  "roosterHour": "유시",
  "dogHour": "술시",
  "pigHour": "해시",
  "lateRatHour": "밤에 자시",
  "aries": "백양궁",
  "taurus": "금우궁",
  "gemini": "쌍아궁",
  "cancer": "거해궁",
  "leo": "사자궁",
  "virgo": "처녀궁",
  "libra": "천칭궁",
  "scorpio": "천갈궁",
  "sagittarius": "인마궁",
  "capricorn": "마갈궁",
  "aquarius": "보병궁",
  "pisces": "쌍어궁"
}
;
},{}],
41:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    miao: '[+3]',
    wang: '[+2]',
    de: '[+1]',
    li: '[0]',
    ping: '[-1]',
    bu: '[-2]',
    xian: '[-3]',
};

},{}],
42:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    ziEarthly: '자',
    chouEarthly: '축',
    yinEarthly: '인',
    maoEarthly: '묘',
    chenEarthly: '진',
    siEarthly: '사',
    wuEarthly: '오',
    weiEarthly: '미',
    shenEarthly: '신',
    youEarthly: '유',
    xuEarthly: '술',
    haiEarthly: '해',
};

},{}],
43:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    water2nd: '수이국',
    wood3rd: '목삼국',
    metal4th: '금사국',
    earth5th: '토오국',
    fire6th: '화육국',
};

},{}],
44:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    male: '남성',
    female: '여자',
};

},{}],
45:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    jiaHeavenly: '갑',
    yiHeavenly: '을',
    bingHeavenly: '병',
    dingHeavenly: '정',
    wuHeavenly: '무',
    jiHeavenly: '기',
    gengHeavenly: '경',
    xinHeavenly: '신',
    renHeavenly: '임',
    guiHeavenly: '계',
};

},{}],
46:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    sihuaLu: '록',
    sihuaQuan: '권',
    sihuaKe: '과',
    sihuaJi: '기',
};

},{}],
47:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    soulPalace: '명궁',
    bodyPalace: '신궁',
    siblingsPalace: '형제',
    spousePalace: '부처',
    childrenPalace: '자녀',
    wealthPalace: '재백',
    healthPalace: '질액',
    surfacePalace: '천이',
    friendsPalace: '노복',
    careerPalace: '관록',
    propertyPalace: '전택',
    spiritPalace: '복덕',
    parentsPalace: '부모',
    originalPalace: '래인',
};

},{}],
48:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    ziweiMaj: '자미',
    tianjiMaj: '천기',
    taiyangMaj: '태양',
    wuquMaj: '무곡',
    tiantongMaj: '천동',
    lianzhenMaj: '염정',
    tianfuMaj: '천부',
    taiyinMaj: '태음',
    tanlangMaj: '탐랑',
    jumenMaj: '거문',
    tianxiangMaj: '천상',
    tianliangMaj: '천량',
    qishaMaj: '칠살',
    pojunMaj: '파군',
    zuofuMin: '좌보',
    youbiMin: '우필',
    wenchangMin: '문창',
    wenquMin: '문곡',
    lucunMin: '록존',
    tianmaMin: '천마',
    qingyangMin: '경양',
    tuoluoMin: '타라',
    huoxingMin: '화성',
    lingxingMin: '영성',
    tiankuiMin: '천괴',
    tianyueMin: '천월',
    dikongMin: '지공',
    dijieMin: '지겁',
    jieshaAdj: '겁살',
    tiankong: '천공',
    tianxing: '천형',
    tianyao: '천요',
    jieshen: '해신',
    yinsha: '음살',
    tianxi: '천희',
    tianguan: '천관',
    tianfu: '천복',
    tianku: '천곡',
    tianxu: '천허',
    longchi: '용지',
    fengge: '봉각',
    hongluan: '홍란',
    guchen: '고진',
    guasu: '과숙',
    feilian: '비렴',
    posui: '파쇄',
    taifu: '태보',
    fenggao: '봉고',
    tianwu: '천무',
    tianyue: '천월',
    santai: '삼태',
    bazuo: '팔좌',
    engguang: '은광',
    tiangui: '천귀',
    tiancai: '천재',
    tianshou: '천수',
    jiekong: '절공',
    xunzhong: '순중',
    xunkong: '순공',
    kongwang: '공망',
    jielu: '절로',
    yuede: '월덕',
    tianshang: '천상',
    tianshi: '천사',
    tianchu: '천주',
    changsheng: '장생',
    muyu: '목욕',
    guandai: '관대',
    linguan: '임관',
    diwang: '제왕',
    shuai: '쇠',
    bing: '병',
    si: '사',
    mu: '묘',
    jue: '절',
    tai: '태',
    yang: '양',
    boshi: '박사',
    lishi: '역사',
    qinglong: '청룡',
    xiaohao: '소모',
    jiangjun: '장군',
    zhoushu: '주서',
    faylian: '비렴',
    xishen: '희신',
    bingfu: '병부',
    dahao: '대모',
    suipo: '세파',
    fubing: '복병',
    guanfu: '관부',
    suijian: '태세',
    huiqi: '회기',
    sangmen: '상문',
    guansuo: '관색',
    gwanfu: '관부',
    longde: '용덕',
    baihu: '백호',
    tiande: '천덕',
    diaoke: '조객',
    jiangxing: '장성',
    panan: '반안',
    suiyi: '세역',
    xiishen: '식신',
    huagai: '화개',
    jiesha: '겁살',
    zhaisha: '재살',
    tiansha: '천살',
    zhibei: '지배',
    xianchi: '함지',
    yuesha: '월살',
    wangshen: '망신',
    yunkui: '천괴(십년)',
    yunyue: '천월(십년)',
    yunchang: '문창(십년)',
    yunqu: '문곡(십년)',
    yunluan: '홍란(십년)',
    yunxi: '천희(십년)',
    yunlu: '록존(십년)',
    yunyang: '경양(십년)',
    yuntuo: '타라(십년)',
    yunma: '천마(십년)',
    liukui: '천괴(년)',
    liuyue: '천월(년)',
    liuchang: '문창(년)',
    liuqu: '문곡(년)',
    liuluan: '홍란(년)',
    liuxi: '천희(년)',
    liulu: '록존(년)',
    liuyang: '경양(년)',
    liutuo: '타라(년)',
    liuma: '천마(년)',
    nianjie: '해신(년)',
    yuekui: '천괴(월)',
    yueyue: '천월(월)',
    yuechang: '문창(월)',
    yuequ: '문곡(월)',
    yueluan: '홍란(월)',
    yuexi: '천희(월)',
    yuelu: '록존(월)',
    yueyang: '경양(월)',
    yuetuo: '타라(월)',
    yuema: '천마(월)',
    rikui: '천괴(일)',
    riyue: '천월(일)',
    richang: '문창(일)',
    riqu: '문곡(일)',
    riluan: '홍란(일)',
    rixi: '천희(일)',
    rilu: '록존(일)',
    riyang: '경양(일)',
    rituo: '타라(일)',
    rima: '천마(일)',
    shikui: '천괴(시)',
    shiyue: '천월(시)',
    shichang: '문창(시)',
    shiqu: '문곡(시)',
    shiluan: '홍란(시)',
    shixi: '천희(시)',
    shilu: '록존(시)',
    shiyang: '경양(시)',
    shituo: '타라(시)',
    shima: '천마(시)',
};

},{}],
49:[function(require,module,exports){"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_json_1 = __importDefault(require("./common.json"));
const brightness_1 = __importDefault(require("./brightness"));
const earthlyBranch_1 = __importDefault(require("./earthlyBranch"));
const fiveElementsClass_1 = __importDefault(require("./fiveElementsClass"));
const gender_1 = __importDefault(require("./gender"));
const heavenlyStem_1 = __importDefault(require("./heavenlyStem"));
const mutagen_1 = __importDefault(require("./mutagen"));
const palace_1 = __importDefault(require("./palace"));
const star_1 = __importDefault(require("./star"));
exports.default = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, common_json_1.default), fiveElementsClass_1.default), heavenlyStem_1.default), earthlyBranch_1.default), brightness_1.default), mutagen_1.default), star_1.default), palace_1.default), gender_1.default);

},{"./common.json":50,"./brightness":51,"./earthlyBranch":52,"./fiveElementsClass":53,"./gender":54,"./heavenlyStem":55,"./mutagen":56,"./palace":57,"./star":58}],
50:[function(require,module,exports){module.exports={
  "lunarDate": "旧暦{{year}}年{{leapMonth}}{{month}}月{{day}}日",
  "leapMonth": "閏",
  "decadal": "大限",
  "childhood": "子供",
  "yearly": "流年",
  "monthly": "流月",
  "daily": "流日",
  "hourly": "流時",
  "turn": "小限",
  "rat": "鼠",
  "ox": "牛",
  "tiger": "虎",
  "rabbit": "兎",
  "dragon": "竜",
  "snake": "蛇",
  "horse": "馬",
  "sheep": "羊",
  "monkey": "猿",
  "rooster": "鶏",
  "dog": "犬",
  "pig": "豚",
  "earlyRatHour": "早子時",
  "oxHour": "丑時",
  "tigerHour": "寅時",
  "rabbitHour": "卯時",
  "dragonHour": "辰時",
  "snakeHour": "巳時",
  "horseHour": "午時",
  "goatHour": "未時",
  "monkeyHour": "申時",
  "roosterHour": "酉時",
  "dogHour": "戌時",
  "pigHour": "亥時",
  "lateRatHour": "晩子時",
  "aries": "おひつじ座",
  "taurus": "おうし座",
  "gemini": "ふたご座",
  "cancer": "かに座",
  "leo": "しし座",
  "virgo": "おとめ座",
  "libra": "てんびん座",
  "scorpio": "さそり座",
  "sagittarius": "いて座",
  "capricorn": "やぎ座",
  "aquarius": "みずがめ座",
  "pisces": "うお座"
}
;
},{}],
51:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    miao: '廟',
    wang: '旺',
    de: '得',
    li: '利',
    ping: '平',
    bu: '不',
    xian: '陥',
};

},{}],
52:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    ziEarthly: '子',
    chouEarthly: '丑',
    yinEarthly: '寅',
    maoEarthly: '卯',
    chenEarthly: '辰',
    siEarthly: '巳',
    wuEarthly: '午',
    weiEarthly: '未',
    shenEarthly: '申',
    youEarthly: '酉',
    xuEarthly: '戌',
    haiEarthly: '亥',
};

},{}],
53:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    water2nd: '水の二局',
    wood3rd: '木の三局',
    metal4th: '金の四局',
    earth5th: '土の五局',
    fire6th: '火の六局',
};

},{}],
54:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    male: '男',
    female: '女',
};

},{}],
55:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    jiaHeavenly: '甲',
    yiHeavenly: '乙',
    bingHeavenly: '丙',
    dingHeavenly: '丁',
    wuHeavenly: '戊',
    jiHeavenly: '己',
    gengHeavenly: '庚',
    xinHeavenly: '辛',
    renHeavenly: '壬',
    guiHeavenly: '癸',
};

},{}],
56:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    sihuaLu: '禄',
    sihuaQuan: '権',
    sihuaKe: '科',
    sihuaJi: '忌',
};

},{}],
57:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    soulPalace: '命宮',
    bodyPalace: '身宮',
    siblingsPalace: '兄弟',
    spousePalace: '夫妻',
    childrenPalace: '子女',
    wealthPalace: '財帛',
    healthPalace: '疾厄',
    surfacePalace: '遷移',
    friendsPalace: '奴僕',
    careerPalace: '官禄',
    propertyPalace: '田宅',
    spiritPalace: '福徳',
    parentsPalace: '父母',
    originalPalace: '来因',
};

},{}],
58:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    ziweiMaj: '紫微',
    tianjiMaj: '天機',
    taiyangMaj: '太陽',
    wuquMaj: '武曲',
    tiantongMaj: '天同',
    lianzhenMaj: '廉貞',
    tianfuMaj: '天府',
    taiyinMaj: '太陰',
    tanlangMaj: '貪狼',
    jumenMaj: '巨門',
    tianxiangMaj: '天相',
    tianliangMaj: '天梁',
    qishaMaj: '七殺',
    pojunMaj: '破軍',
    zuofuMin: '左輔',
    youbiMin: '右弼',
    wenchangMin: '文昌',
    wenquMin: '文曲',
    lucunMin: '禄存',
    tianmaMin: '天馬',
    qingyangMin: '擎羊',
    tuoluoMin: '陀羅',
    huoxingMin: '火星',
    lingxingMin: '鈴星',
    tiankuiMin: '天魁',
    tianyueMin: '天鉞',
    dikongMin: '地空',
    dijieMin: '地劫',
    jieshaAdj: '劫殺',
    tiankong: '天空',
    tianxing: '天刑',
    tianyao: '天姚',
    jieshen: '解神',
    yinsha: '陰煞',
    tianxi: '天喜',
    tianguan: '天官',
    tianfu: '天福',
    tianku: '天哭',
    tianxu: '天虚',
    longchi: '竜池',
    fengge: '鳳閣',
    hongluan: '紅鸞',
    guchen: '孤辰',
    guasu: '寡宿',
    feilian: '蜚廉',
    posui: '破碎',
    taifu: '台輔',
    fenggao: '封誥',
    tianwu: '天巫',
    tianyue: '天月',
    santai: '三台',
    bazuo: '八座',
    engguang: '恩光',
    tiangui: '天貴',
    tiancai: '天才',
    tianshou: '天寿',
    jiekong: '截空',
    xunzhong: '旬中',
    xunkong: '旬空',
    kongwang: '空亡',
    jielu: '截路',
    yuede: '月徳',
    tianshang: '天傷',
    tianshi: '天使',
    tianchu: '天厨',
    changsheng: '長生',
    muyu: '沐浴',
    guandai: '冠帯',
    linguan: '臨官',
    diwang: '帝旺',
    shuai: '衰',
    bing: '病',
    si: '死',
    mu: '墓',
    jue: '絶',
    tai: '胎',
    yang: '養',
    boshi: '博士',
    lishi: '力士',
    qinglong: '青竜',
    xiaohao: '小耗',
    jiangjun: '将軍',
    zhoushu: '奏書',
    faylian: '飛廉',
    xishen: '喜神',
    bingfu: '病符',
    dahao: '大耗',
    suipo: '歳破',
    fubing: '伏兵',
    guanfu: '官府',
    suijian: '歳建',
    huiqi: '晦気',
    sangmen: '喪門',
    guansuo: '貫索',
    gwanfu: '官符',
    longde: '竜徳',
    baihu: '白虎',
    tiande: '天徳',
    diaoke: '弔客',
    jiangxing: '将星',
    panan: '攀鞍',
    suiyi: '歳駅',
    xiishen: '息神',
    huagai: '華蓋',
    jiesha: '劫煞',
    zhaisha: '災煞',
    tiansha: '天煞',
    zhibei: '指背',
    xianchi: '咸池',
    yuesha: '月煞',
    wangshen: '亡神',
    yunkui: '限の魁',
    yunyue: '限の鉞',
    yunchang: '限の昌',
    yunqu: '限の曲',
    yunluan: '限の鸞',
    yunxi: '限の喜',
    yunlu: '限の禄',
    yunyang: '限の羊',
    yuntuo: '限の陀',
    yunma: '限の馬',
    liukui: '年の魁',
    liuyue: '年の鉞',
    liuchang: '年の昌',
    liuqu: '年の曲',
    liuluan: '年の鸞',
    liuxi: '年の喜',
    liulu: '年の禄',
    liuyang: '年の羊',
    liutuo: '年の陀',
    liuma: '年の馬',
    nianjie: '年の解',
    yuekui: '月の魁',
    yueyue: '月の鉞',
    yuechang: '月の昌',
    yuequ: '月の曲',
    yueluan: '月の鸞',
    yuexi: '月の喜',
    yuelu: '月の禄',
    yueyang: '月の羊',
    yuetuo: '月の陀',
    yuema: '月の馬',
    rikui: '日の魁',
    riyue: '日の鉞',
    richang: '日の昌',
    riqu: '日の曲',
    riluan: '日の鸞',
    rixi: '日の喜',
    rilu: '日の禄',
    riyang: '日の羊',
    rituo: '日の陀',
    rima: '日の馬',
    shikui: '時の魁',
    shiyue: '時の鉞',
    shichang: '時の昌',
    shiqu: '時の曲',
    shiluan: '時の鸞',
    shixi: '時の喜',
    shilu: '時の禄',
    shiyang: '時の羊',
    shituo: '時の陀',
    shima: '時の馬',
};

},{}],
59:[function(require,module,exports){"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_json_1 = __importDefault(require("./common.json"));
const brightness_1 = __importDefault(require("./brightness"));
const earthlyBranch_1 = __importDefault(require("./earthlyBranch"));
const fiveElementsClass_1 = __importDefault(require("./fiveElementsClass"));
const gender_1 = __importDefault(require("./gender"));
const heavenlyStem_1 = __importDefault(require("./heavenlyStem"));
const mutagen_1 = __importDefault(require("./mutagen"));
const palace_1 = __importDefault(require("./palace"));
const star_1 = __importDefault(require("./star"));
exports.default = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, common_json_1.default), fiveElementsClass_1.default), heavenlyStem_1.default), earthlyBranch_1.default), brightness_1.default), mutagen_1.default), star_1.default), palace_1.default), gender_1.default);

},{"./common.json":60,"./brightness":61,"./earthlyBranch":62,"./fiveElementsClass":63,"./gender":64,"./heavenlyStem":65,"./mutagen":66,"./palace":67,"./star":68}],
60:[function(require,module,exports){module.exports={
  "lunarDate": "Lunar {{year}}-{{leapMonth}}{{month}}-{{day}}",
  "leapMonth": "leap-",
  "decadal": "decadal",
  "yearly": "yearly",
  "monthly": "monthly",
  "daily": "daily",
  "hourly": "hourly",
  "turn": "age",
  "rat": "rat",
  "ox": "ox",
  "tiger": "tiger",
  "rabbit": "rabbit",
  "dragon": "dragon",
  "snake": "snake",
  "horse": "horse",
  "sheep": "sheep",
  "monkey": "monkey",
  "rooster": "rooster",
  "dog": "dog",
  "pig": "pig",
  "aries": "aries",
  "taurus": "taurus",
  "gemini": "gemini",
  "cancer": "cancer",
  "leo": "leo",
  "virgo": "virgo",
  "libra": "libra",
  "scorpio": "scorpio",
  "sagittarius": "sagittarius",
  "capricorn": "capricorn",
  "aquarius": "aquarius",
  "pisces": "pisces",
  "earlyRatHour": "early Rat hour",
  "oxHour": "Ox hour",
  "tigerHour": "Tiger hour",
  "rabbitHour": "Rabbit hour",
  "dragonHour": "Dragon hour",
  "snakeHour": "Snake hour",
  "horseHour": "Horse hour",
  "goatHour": "Goat hour",
  "monkeyHour": "Monkey hour",
  "roosterHour": "Rooster hour",
  "dogHour": "Dog hour",
  "pigHour": "Pig hour",
  "lateRatHour": "late Rat hour"
}
;
},{}],
61:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    miao: '[+3]',
    wang: '[+2]',
    de: '[+1]',
    li: '[0]',
    ping: '[-1]',
    bu: '[-2]',
    xian: '[-3]',
};

},{}],
62:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    ziEarthly: 'zi',
    chouEarthly: 'chou',
    yinEarthly: 'yin',
    maoEarthly: 'mao',
    chenEarthly: 'chen',
    siEarthly: 'si',
    wuEarthly: 'woo',
    weiEarthly: 'wei',
    shenEarthly: 'shen',
    youEarthly: 'you',
    xuEarthly: 'xu',
    haiEarthly: 'hai',
};

},{}],
63:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    water2nd: 'water 2nd',
    wood3rd: 'wood 3rd',
    metal4th: 'metal 4th',
    earth5th: 'earth 5th',
    fire6th: 'fire 6th',
};

},{}],
64:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    male: 'male',
    female: 'female',
};

},{}],
65:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    jiaHeavenly: 'jia',
    yiHeavenly: 'yi',
    bingHeavenly: 'bing',
    dingHeavenly: 'ding',
    wuHeavenly: 'wu',
    jiHeavenly: 'ji',
    gengHeavenly: 'geng',
    xinHeavenly: 'xin',
    renHeavenly: 'ren',
    guiHeavenly: 'gui',
};

},{}],
66:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    sihuaLu: 'A',
    sihuaQuan: 'B',
    sihuaKe: 'C',
    sihuaJi: 'D',
};

},{}],
67:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    soulPalace: 'soul',
    bodyPalace: 'body',
    siblingsPalace: 'siblings',
    spousePalace: 'spouse',
    childrenPalace: 'children',
    wealthPalace: 'wealth',
    healthPalace: 'health',
    surfacePalace: 'surface',
    friendsPalace: 'friends',
    careerPalace: 'career',
    propertyPalace: 'property',
    spiritPalace: 'spirit',
    parentsPalace: 'parents',
    originalPalace: 'origin',
};

},{}],
68:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    ziweiMaj: 'emperor',
    tianjiMaj: 'advisor',
    taiyangMaj: 'sun',
    wuquMaj: 'warrior',
    tiantongMaj: 'fortunate',
    lianzhenMaj: 'judge',
    tianfuMaj: 'empress',
    taiyinMaj: 'moon',
    tanlangMaj: 'wolf',
    jumenMaj: 'advocator',
    tianxiangMaj: 'minister',
    tianliangMaj: 'sage',
    qishaMaj: 'marshal',
    pojunMaj: 'rebel',
    zuofuMin: 'officer',
    youbiMin: 'helper',
    wenchangMin: 'scholar',
    wenquMin: 'artist',
    lucunMin: 'money',
    tianmaMin: 'horse',
    qingyangMin: 'driven',
    tuoluoMin: 'tangled',
    huoxingMin: 'impulsive',
    lingxingMin: 'spark',
    tiankuiMin: 'assistant',
    tianyueMin: 'aide',
    dikongMin: 'ideologue',
    dijieMin: 'fickle',
    jieshaAdj: 'murder',
    tiankong: 'utopian',
    tianxing: 'serious',
    tianyao: 'social',
    jieshen: 'considery',
    yinsha: 'gloomy',
    tianxi: 'cheerful',
    tianguan: 'solemn',
    tianfu: 'lucky',
    tianku: 'upset',
    tianxu: 'frail',
    longchi: 'talented',
    fengge: 'refined',
    hongluan: 'attractive',
    guchen: 'alone',
    guasu: 'lonely',
    feilian: 'instigated',
    posui: 'broken',
    taifu: 'honorable',
    fenggao: 'awarded',
    tianwu: 'psychic',
    tianyue: 'sickly',
    santai: 'senior',
    bazuo: 'dignified',
    engguang: 'grateful',
    tiangui: 'noble',
    tiancai: 'gifted',
    tianshou: 'ageless',
    jiekong: 'interrupted',
    xunzhong: 'meditative',
    xunkong: 'fancied',
    kongwang: 'bottomless',
    jielu: 'intercepted',
    yuede: 'peaceful',
    tianshang: 'wounded',
    tianshi: 'heaven',
    tianchu: 'gourmet',
    changsheng: 'born',
    muyu: 'infancy',
    guandai: 'adolescence',
    linguan: 'adulthood',
    diwang: 'prime',
    shuai: 'weak',
    bing: 'sick',
    si: 'dead',
    mu: 'buried',
    jue: 'dissipated',
    tai: 'embryo',
    yang: 'molding',
    boshi: 'doctor',
    lishi: 'sumo',
    qinglong: 'dragon',
    xiaohao: 'consumer',
    jiangjun: 'general',
    zhoushu: 'book',
    faylian: 'gossip',
    xishen: 'happiness',
    bingfu: 'illness',
    dahao: 'wastrel',
    suipo: 'breaker',
    fubing: 'ambush',
    guanfu: 'government',
    suijian: 'initial',
    huiqi: 'unlucky',
    sangmen: 'downcast',
    guansuo: 'tied',
    gwanfu: 'official',
    longde: 'virtuous',
    baihu: 'sinister',
    tiande: 'blessed',
    diaoke: 'sorrowing',
    jiangxing: 'capable',
    panan: 'admired',
    suiyi: 'varied',
    xiishen: 'listless',
    huagai: 'religious',
    jiesha: 'robbed',
    zhaisha: 'disastery',
    tiansha: 'condemned',
    zhibei: 'insidious',
    xianchi: 'passionate',
    yuesha: 'hapless',
    wangshen: 'perished',
    yunkui: 'assistant(D)',
    yunyue: 'aide(D)',
    yunchang: 'scholar(D)',
    yunqu: 'artist(D)',
    yunluan: 'attractive(D)',
    yunxi: 'cheerful(D)',
    yunlu: 'money(D)',
    yunyang: 'driven(D)',
    yuntuo: 'tangled(D)',
    yunma: 'horse(D)',
    liukui: 'assistant(Y)',
    liuyue: 'aide(Y)',
    liuchang: 'scholar(Y)',
    liuqu: 'artist(Y)',
    liuluan: 'attractive(Y)',
    liuxi: 'cheerful(Y)',
    liulu: 'money(Y)',
    liuyang: 'driven(Y)',
    liutuo: 'tangled(Y)',
    liuma: 'horse(Y)',
    nianjie: 'considery(Y)',
    yuekui: 'assistant(M)',
    yueyue: 'aide(M)',
    yuechang: 'scholar(M)',
    yuequ: 'artist(M)',
    yueluan: 'attractive(M)',
    yuexi: 'cheerful(M)',
    yuelu: 'money(M)',
    yueyang: 'driven(M)',
    yuetuo: 'tangled(M)',
    yuema: 'horse(M)',
    rikui: 'assistant(d)',
    riyue: 'aide(d)',
    richang: 'scholar(d)',
    riqu: 'artist(d)',
    riluan: 'attractive(d)',
    rixi: 'cheerful(d)',
    rilu: 'money(d)',
    riyang: 'driven(d)',
    rituo: 'tangled(d)',
    rima: 'horse(d)',
    shikui: 'assistant(H)',
    shiyue: 'aide(H)',
    shichang: 'scholar(H)',
    shiqu: 'artist(H)',
    shiluan: 'attractive(H)',
    shixi: 'cheerful(H)',
    shilu: 'money(H)',
    shiyang: 'driven(H)',
    shituo: 'tangled(H)',
    shima: 'horse(H)',
};

},{}],
69:[function(require,module,exports){"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_json_1 = __importDefault(require("./common.json"));
const brightness_1 = __importDefault(require("./brightness"));
const earthlyBranch_1 = __importDefault(require("./earthlyBranch"));
const fiveElementsClass_1 = __importDefault(require("./fiveElementsClass"));
const gender_1 = __importDefault(require("./gender"));
const heavenlyStem_1 = __importDefault(require("./heavenlyStem"));
const mutagen_1 = __importDefault(require("./mutagen"));
const palace_1 = __importDefault(require("./palace"));
const star_1 = __importDefault(require("./star"));
exports.default = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, common_json_1.default), fiveElementsClass_1.default), heavenlyStem_1.default), earthlyBranch_1.default), brightness_1.default), mutagen_1.default), star_1.default), palace_1.default), gender_1.default);

},{"./common.json":70,"./brightness":71,"./earthlyBranch":72,"./fiveElementsClass":73,"./gender":74,"./heavenlyStem":75,"./mutagen":76,"./palace":77,"./star":78}],
70:[function(require,module,exports){module.exports={
  "lunarDate": "Âm lịch ngày {{day}} tháng {{leapMonth}}{{month}} năm {{year}}",
  "leapMonth": "nhuận ",
  "decadal": "Đại Hạn",
  "childhood": "Vận hạn thời thơ ấu",
  "yearly": "Lưu Niên",
  "monthly": "Lưu Nguyệt",
  "daily": "Lưu Nhật",
  "hourly": "Lưu Thì",
  "turn": "Tiểu Hạn",
  "rat": "Chuột",
  "ox": "Trâu",
  "tiger": "Hổ",
  "rabbit": "Mèo",
  "dragon": "Rồng",
  "snake": "Rắn",
  "horse": "Ngựa",
  "sheep": "Dê",
  "monkey": "Khỉ",
  "rooster": "Gà",
  "dog": "Chó",
  "pig": "Lợn",
  "earlyRatHour": "Giờ tý sớm",
  "oxHour": "Giờ sửu",
  "tigerHour": "Giờ dần",
  "rabbitHour": "Giờ mão",
  "dragonHour": "Giờ thìn",
  "snakeHour": "Giờ tỵ",
  "horseHour": "Giờ ngọ",
  "goatHour": "Giờ mùi",
  "monkeyHour": "Giờ thân",
  "roosterHour": "Giờ dậu",
  "dogHour": "Giờ tuất",
  "pigHour": "Giờ hợi",
  "lateRatHour": "Giờ tý muộn",
  "aries": "Cung Bạch Dương",
  "taurus": "Cung Kim Ngưu",
  "gemini": "Cung Song Tử",
  "cancer": "Cung Cự Giải",
  "leo": "Cung Sư Tử",
  "virgo": "Cung Xử Nữ",
  "libra": "Cung Thiên Bình",
  "scorpio": "Cung Thiên Yết",
  "sagittarius": "Cung Xạ Thủ",
  "capricorn": "Cung Ma Kết",
  "aquarius": "Cung Thủy Bình",
  "pisces": "Cung Song Ngư"
}
;
},{}],
71:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    miao: 'Miếu',
    wang: 'Vượng',
    de: 'Đắc',
    li: 'Lợi',
    ping: 'Bình',
    bu: 'Bất',
    xian: 'Hãm',
};

},{}],
72:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    ziEarthly: 'Tý',
    chouEarthly: 'Sửu',
    yinEarthly: 'Dần',
    maoEarthly: 'Mão',
    chenEarthly: 'Thìn',
    siEarthly: 'Tỵ',
    wuEarthly: 'Ngọ',
    weiEarthly: 'Mùi',
    shenEarthly: 'Thân',
    youEarthly: 'Dậu',
    xuEarthly: 'Tuất',
    haiEarthly: 'Hợi',
};

},{}],
73:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    water2nd: 'Thủy Nhị Cục',
    wood3rd: 'Mộc Tam Cục',
    metal4th: 'Kim Tứ Cục',
    earth5th: 'Thổ Ngũ Cục',
    fire6th: 'Hỏa Lục Cục',
};

},{}],
74:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    male: 'Nam',
    female: 'Nữ',
};

},{}],
75:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    jiaHeavenly: 'Giáp',
    yiHeavenly: 'Ất',
    bingHeavenly: 'Bính',
    dingHeavenly: 'Đinh',
    wuHeavenly: 'Mậu',
    jiHeavenly: 'Kỷ',
    gengHeavenly: 'Canh',
    xinHeavenly: 'Tân',
    renHeavenly: 'Nhâm',
    guiHeavenly: 'Quý',
};

},{}],
76:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    sihuaLu: 'Lộc',
    sihuaQuan: 'Quyền',
    sihuaKe: 'Khoa',
    sihuaJi: 'Kỵ',
};

},{}],
77:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    soulPalace: 'Mệnh',
    bodyPalace: 'Thân',
    siblingsPalace: 'Huynh Đệ',
    spousePalace: 'Phu Thê',
    childrenPalace: 'Tử Nữ',
    wealthPalace: 'Tài Bạch',
    healthPalace: 'Tật Ách',
    surfacePalace: 'Thiên Di',
    friendsPalace: 'Nô Bộc',
    careerPalace: 'Quan Lộc',
    propertyPalace: 'Điền Trạch',
    spiritPalace: 'Phúc Đức',
    parentsPalace: 'Phụ Mẫu',
    originalPalace: 'Lai Nhân',
};

},{}],
78:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    ziweiMaj: 'Tử Vi',
    tianjiMaj: 'Thiên Cơ',
    taiyangMaj: 'Thái Dương',
    wuquMaj: 'Vũ Khúc',
    tiantongMaj: 'Thiên Đồng',
    lianzhenMaj: 'Liêm Trinh',
    tianfuMaj: 'Thiên Phủ',
    taiyinMaj: 'Thái Âm',
    tanlangMaj: 'Tham Lang',
    jumenMaj: 'Cự Môn',
    tianxiangMaj: 'Thiên Tướng',
    tianliangMaj: 'Thiên Lương',
    qishaMaj: 'Thất Sát',
    pojunMaj: 'Phá Quân',
    zuofuMin: 'Tả Phù',
    youbiMin: 'Hữu Bật',
    wenchangMin: 'Văn Xương',
    wenquMin: 'Văn Khúc',
    lucunMin: 'Lộc Tồn',
    tianmaMin: 'Thiên Mã',
    qingyangMin: 'Kình Dương',
    tuoluoMin: 'Đà La',
    huoxingMin: 'Hỏa Tinh',
    lingxingMin: 'Linh Tinh',
    tiankuiMin: 'Thiên Khôi',
    tianyueMin: 'Thiên Việt',
    dikongMin: 'Địa Không',
    dijieMin: 'Địa Kiếp',
    jieshaAdj: 'Kiếp Sát',
    tiankong: 'Thiên Không',
    tianxing: 'Thiên Hình',
    tianyao: 'Thiên Diêu',
    jieshen: 'Giải Thần',
    yinsha: 'Âm Sát',
    tianxi: 'Thiên Hỷ',
    tianguan: 'Thiên Quan',
    tianfu: 'Thiên Phúc',
    tianku: 'Thiên Khốc',
    tianxu: 'Thiên Hư',
    longchi: 'Long Trì',
    fengge: 'Phụng Các',
    hongluan: 'Hồng Loan',
    guchen: 'Cô Thần',
    guasu: 'Quả Tú',
    feilian: 'Phi Liêm',
    posui: 'Phá Toái',
    taifu: 'Đài Phụ',
    fenggao: 'Phong Cáo',
    tianwu: 'Thiên Vu',
    tianyue: 'Thiên Nguyệt',
    santai: 'Tam Thai',
    bazuo: 'Bát Tọa',
    engguang: 'Ân Quang',
    tiangui: 'Thiên Quý',
    tiancai: 'Thiên Tài',
    tianshou: 'Thiên Thọ',
    jiekong: 'Triệt Không',
    xunzhong: 'Tuần Trung',
    xunkong: 'Tuần Không',
    kongwang: 'Không Vong',
    jielu: 'Triệt Lộ',
    yuede: 'Nguyệt Đức',
    tianshang: 'Thiên Thương',
    tianshi: 'Thiên Sứ',
    tianchu: 'Thiên Trù',
    changsheng: 'Trường Sinh',
    muyu: 'Mộc Dục',
    guandai: 'Quan Đới',
    linguan: 'Lâm Quan',
    diwang: 'Đế Vượng',
    shuai: 'Suy',
    bing: 'Bệnh',
    si: 'Tử',
    mu: 'Mộ',
    jue: 'Tuyệt',
    tai: 'Thai',
    yang: 'Dưỡng',
    boshi: 'Bác Sỹ',
    lishi: 'Lực Sỹ',
    qinglong: 'Thanh Long',
    xiaohao: 'Tiểu Hao',
    jiangjun: 'Tướng Quân',
    zhoushu: 'Tấu Thư',
    faylian: 'Phi Liêm',
    xishen: 'Hỷ Thần',
    bingfu: 'Bệnh Phù',
    dahao: 'Đại Hao',
    suipo: 'Tuế Phá',
    fubing: 'Phục Binh',
    guanfu: 'Quan Phủ',
    suijian: 'Tuế Kiện',
    huiqi: 'Hối Khí',
    sangmen: 'Tang Môn',
    guansuo: 'Quán Tác',
    gwanfu: 'Quan Phù',
    longde: 'Long Đức',
    baihu: 'Bạch Hổ',
    tiande: 'Thiên Đức',
    diaoke: 'Điếu Khách',
    jiangxing: 'Tướng Tinh',
    panan: 'Phan Án',
    suiyi: 'Tuế Dịch',
    xiishen: 'Tức Thần',
    huagai: 'Hoa Cái',
    jiesha: 'Kiếp Sát',
    zhaisha: 'Tai Sát',
    tiansha: 'Thiên Sát',
    zhibei: 'Chỉ Bối',
    xianchi: 'Hàm Trì',
    yuesha: 'Nguyệt Sát',
    wangshen: 'Vong Thần',
    yunkui: 'Vận Khôi',
    yunyue: 'Vận Việt',
    yunchang: 'Vận Xương',
    yunqu: 'Vận Khúc',
    yunluan: 'Vận Loan',
    yunxi: 'Vận Hỷ',
    yunlu: 'Vận Lộc',
    yunyang: 'Vận Dương',
    yuntuo: 'Vận Đà',
    yunma: 'Vận Mã',
    liukui: 'Lưu Khôi',
    liuyue: 'Lưu Việt',
    liuchang: 'Lưu Xương',
    liuqu: 'Lưu Khúc',
    liuluan: 'Lưu Loan',
    liuxi: 'Lưu Hỷ',
    liulu: 'Lưu Lộc',
    liuyang: 'Lưu Dương',
    liutuo: 'Lưu Đà',
    liuma: 'Lưu Mã',
    nianjie: 'Niên Giải',
    yuekui: 'Thiên Khôi(M)',
    yueyue: 'Thiên Việt(M)',
    yuechang: 'Văn Xương(M)',
    yuequ: 'Văn Khúc(M)',
    yueluan: 'Hồng Loan(M)',
    yuexi: 'Thiên Hỷ(M)',
    yuelu: 'Lộc Tồn(M)',
    yueyang: 'Kình Dương(M)',
    yuetuo: 'Đà La(M)',
    yuema: 'Thiên Mã(M)',
    rikui: 'Thiên Khôi(d)',
    riyue: 'Thiên Việt(d)',
    richang: 'Văn Xương(d)',
    riqu: 'Văn Khúc(d)',
    riluan: 'Hồng Loan(d)',
    rixi: 'Thiên Hỷ(d)',
    rilu: 'Lộc Tồn(d)',
    riyang: 'Kình Dương(d)',
    rituo: 'Đà La(d)',
    rima: 'Thiên Mã(d)',
    shikui: 'Thiên Khôi(H)',
    shiyue: 'Thiên Việt(H)',
    shichang: 'Văn Xương(H)',
    shiqu: 'Văn Khúc(H)',
    shiluan: 'Hồng Loan(H)',
    shixi: 'Thiên Hỷ(H)',
    shilu: 'Lộc Tồn(H)',
    shiyang: 'Kình Dương(H)',
    shituo: 'Đà La(H)',
    shima: 'Thiên Mã(H)',
};

},{}],
79:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STAR_ALIASES = void 0;
/**
 * 星曜名称别名。
 *
 * 部分语言中的不同星曜具有完全相同的译名，带汉字的别名用于在反查时明确指定目标星曜。
 */
exports.STAR_ALIASES = {
    // 韩文
    '천상(天相)': 'tianxiangMaj',
    '천상(天傷)': 'tianshang',
    '천월(天鉞)': 'tianyueMin',
    '천월(天月)': 'tianyue',
    '겁살(劫殺)': 'jieshaAdj',
    '겁살(劫煞)': 'jiesha',
    '비렴(蜚廉)': 'feilian',
    '비렴(飛廉)': 'faylian',
    '관부(官府)': 'guanfu',
    '관부(官符)': 'gwanfu',
    // 越南语
    'Kiếp Sát(劫殺)': 'jieshaAdj',
    'Kiếp Sát(劫煞)': 'jiesha',
    'Phi Liêm(蜚廉)': 'feilian',
    'Phi Liêm(飛廉)': 'faylian',
};

},{}],
80:[function(require,module,exports){"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./Brightness"), exports);
__exportStar(require("./EarthlyBranch"), exports);
__exportStar(require("./FiveElementsClass"), exports);
__exportStar(require("./Gender"), exports);
__exportStar(require("./HeavenlyStem"), exports);
__exportStar(require("./Palace"), exports);
__exportStar(require("./Star"), exports);
__exportStar(require("./mutagen"), exports);

},{"./Brightness":81,"./EarthlyBranch":82,"./FiveElementsClass":83,"./Gender":84,"./HeavenlyStem":85,"./Palace":86,"./Star":87,"./mutagen":88}],
81:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],
82:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],
83:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],
84:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],
85:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],
86:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],
87:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],
88:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],
89:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.translateChineseDate = exports.getAgeIndex = exports.timeToIndex = exports.mergeStars = exports.fixLunarDayIndex = exports.fixLunarMonthIndex = exports.fixEarthlyBranchIndex = exports.getMutagensByHeavenlyStem = exports.getMutagen = exports.getBrightness = exports.earthlyBranchIndexToPalaceIndex = exports.fixIndex = void 0;
const data_1 = require("../data");
const star_1 = require("../star");
const i18n_1 = require("../i18n");
const lunar_lite_1 = require("lunar-lite");
const astro_1 = require("../astro");
const getTargetMutagens = (heavenlyStem) => {
    var _a, _b;
    const { mutagens } = (0, astro_1.getConfig)();
    let result;
    if (mutagens && mutagens[heavenlyStem]) {
        result = (_a = mutagens[heavenlyStem]) !== null && _a !== void 0 ? _a : [];
    }
    else {
        result = (_b = data_1.heavenlyStems[heavenlyStem].mutagen) !== null && _b !== void 0 ? _b : [];
    }
    return result;
};
/**
 * 用于处理索引，将索引锁定在 0~max 范围内
 *
 * @param index 当前索引
 * @param max 最大循环数，默认为12【因为12用得最多，宫位数量以及十二地支数量都为12，所以将12作为默认值】
 * @returns {number} 处理后的索引
 */
const fixIndex = (index, max = 12) => {
    if (index < 0) {
        return (0, exports.fixIndex)(index + max, max);
    }
    if (index > max - 1) {
        return (0, exports.fixIndex)(index - max, max);
    }
    const res = 1 / index === -Infinity ? 0 : index;
    return res;
};
exports.fixIndex = fixIndex;
/**
 * 因为宫位是从寅宫开始的排列的，所以需要将目标地支的序号减去寅的序号才能得到宫位的序号
 *
 * @param {EarthlyBranchName} earthlyBranch 地支
 * @returns {number} 该地支对应的宫位索引序号
 */
const earthlyBranchIndexToPalaceIndex = (earthlyBranchName) => {
    const earthlyBranch = (0, i18n_1.kot)(earthlyBranchName, 'Earthly');
    const yin = (0, i18n_1.kot)('yinEarthly', 'Earthly');
    return (0, exports.fixIndex)(data_1.EARTHLY_BRANCHES.indexOf(earthlyBranch) - data_1.EARTHLY_BRANCHES.indexOf(yin));
};
exports.earthlyBranchIndexToPalaceIndex = earthlyBranchIndexToPalaceIndex;
/**
 * 配置星耀亮度
 *
 * @param {StarName} starName 星耀名字
 * @param {number} index 所在宫位索引
 */
const getBrightness = (starName, index) => {
    var _a;
    const star = (0, i18n_1.kot)(starName);
    const { brightness } = (0, astro_1.getConfig)();
    const targetBrightness = brightness[star] ? brightness[star] : (_a = data_1.STARS_INFO[star]) === null || _a === void 0 ? void 0 : _a.brightness;
    if (!targetBrightness) {
        return '';
    }
    return (0, i18n_1.t)(targetBrightness[(0, exports.fixIndex)(index)]);
};
exports.getBrightness = getBrightness;
const getMutagen = (starName, heavenlyStemName) => {
    const heavenlyStem = (0, i18n_1.kot)(heavenlyStemName, 'Heavenly');
    const starKey = (0, i18n_1.kot)(starName);
    const target = getTargetMutagens(heavenlyStem);
    return (0, i18n_1.t)(data_1.MUTAGEN[target.indexOf(starKey)]);
};
exports.getMutagen = getMutagen;
const getMutagensByHeavenlyStem = (heavenlyStemName) => {
    const heavenlyStem = (0, i18n_1.kot)(heavenlyStemName, 'Heavenly');
    const target = getTargetMutagens(heavenlyStem);
    return target.map((star) => (0, i18n_1.t)(star));
};
exports.getMutagensByHeavenlyStem = getMutagensByHeavenlyStem;
/**
 * 处理地支相对于十二宫的索引，因为十二宫是以寅宫开始，所以下标需要减去地支寅的索引
 *
 * @param {EarthlyBranchName} earthlyBranch 地支
 * @returns {number} Number(0~11)
 */
const fixEarthlyBranchIndex = (earthlyBranchName) => {
    const earthlyBranch = (0, i18n_1.kot)(earthlyBranchName, 'Earthly');
    return (0, exports.fixIndex)(data_1.EARTHLY_BRANCHES.indexOf(earthlyBranch) - data_1.EARTHLY_BRANCHES.indexOf('yinEarthly'));
};
exports.fixEarthlyBranchIndex = fixEarthlyBranchIndex;
/**
 * 调整农历月份的索引
 *
 * 正月建寅（正月地支为寅），fixLeap为是否调整闰月情况
 * 若调整闰月，则闰月的前15天按上月算，后面天数按下月算
 * 比如 闰二月 时，fixLeap 为 true 时 闰二月十五(含)前
 * 的月份按二月算，之后的按三月算
 *
 * @param {string} solarDateStr 阳历日期
 * @param {number} timeIndex 时辰序号
 * @param {vboolean} fixLeap 是否调整闰月
 * @returns {number} 月份索引
 */
const fixLunarMonthIndex = (solarDateStr, timeIndex, fixLeap) => {
    const { lunarMonth, lunarDay, isLeap } = (0, lunar_lite_1.solar2lunar)(solarDateStr);
    // 紫微斗数以`寅`宫为第一个宫位
    const firstIndex = data_1.EARTHLY_BRANCHES.indexOf('yinEarthly');
    const needToAdd = isLeap && fixLeap && lunarDay > 15 && timeIndex !== 12;
    return (0, exports.fixIndex)(lunarMonth + 1 - firstIndex + (needToAdd ? 1 : 0));
};
exports.fixLunarMonthIndex = fixLunarMonthIndex;
/**
 * 获取农历日期【天】的索引，晚子时将加一天，所以如果是晚子时下标不需要减一
 *
 * @param lunarDay 农历日期【天】
 * @param timeIndex 时辰索引
 * @returns {number} 农历日期【天】
 */
const fixLunarDayIndex = (lunarDay, timeIndex) => (timeIndex >= 12 ? lunarDay : lunarDay - 1);
exports.fixLunarDayIndex = fixLunarDayIndex;
/**
 * 将多个星耀数组合并到一起
 *
 * @param {FunctionalStar[][][]} stars 星耀数组
 * @returns {FunctionalStar[][]} 合并后的星耀
 */
const mergeStars = (...stars) => {
    const finalStars = (0, star_1.initStars)();
    stars.forEach((item) => {
        item.forEach((subItem, index) => {
            Array.prototype.push.apply(finalStars[index], subItem);
        });
    });
    return finalStars;
};
exports.mergeStars = mergeStars;
/**
 * 将时间的小时转化为时辰的索引
 *
 * @param {number} hour 当前时间的小时数
 * @returns {number} 时辰的索引
 */
const timeToIndex = (hour) => {
    if (hour === 0) {
        // 00:00～01:00 为早子时
        return 0;
    }
    if (hour === 23) {
        // 23:00～00:00 为晚子时
        return 12;
    }
    return Math.floor((hour + 1) / 2);
};
exports.timeToIndex = timeToIndex;
/**
 * 起小限
 *
 * - 小限一年一度逢，男顺女逆不相同，
 * - 寅午戍人辰上起，申子辰人自戍宫，
 * - 巳酉丑人未宫始，亥卯未人起丑宫。
 *
 * @param {EarthlyBranchName} earthlyBranchName 地支
 * @returns {number} 小限开始的宫位索引
 */
const getAgeIndex = (earthlyBranchName) => {
    const earthlyBranch = (0, i18n_1.kot)(earthlyBranchName, 'Earthly');
    let ageIdx = -1;
    if (['yinEarthly', 'wuEarthly', 'xuEarthly'].includes(earthlyBranch)) {
        ageIdx = (0, exports.fixEarthlyBranchIndex)('chen');
    }
    else if (['shenEarthly', 'ziEarthly', 'chenEarthly'].includes(earthlyBranch)) {
        ageIdx = (0, exports.fixEarthlyBranchIndex)('xu');
    }
    else if (['siEarthly', 'youEarthly', 'chouEarthly'].includes(earthlyBranch)) {
        ageIdx = (0, exports.fixEarthlyBranchIndex)('wei');
    }
    else if (['haiEarthly', 'maoEarthly', 'weiEarthly'].includes(earthlyBranch)) {
        ageIdx = (0, exports.fixIndex)((0, exports.fixEarthlyBranchIndex)('chou'));
    }
    return ageIdx;
};
exports.getAgeIndex = getAgeIndex;
/**
 * 返回翻译后的干支纪年字符串
 *
 * @param chineseDate 干支纪年日期对象
 * @returns 干支纪年字符串
 */
const translateChineseDate = (chineseDate) => {
    const { yearly, monthly, daily, hourly } = chineseDate;
    if (yearly.some((item) => (0, i18n_1.t)((0, i18n_1.kot)(item)).length > 1) ||
        monthly.some((item) => (0, i18n_1.t)((0, i18n_1.kot)(item)).length > 1) ||
        daily.some((item) => (0, i18n_1.t)((0, i18n_1.kot)(item)).length > 1) ||
        hourly.some((item) => (0, i18n_1.t)((0, i18n_1.kot)(item)).length > 1)) {
        return `${yearly.map((item) => (0, i18n_1.t)((0, i18n_1.kot)(item))).join(' ')} - ${monthly.map((item) => (0, i18n_1.t)((0, i18n_1.kot)(item))).join(' ')} - ${daily
            .map((item) => (0, i18n_1.t)((0, i18n_1.kot)(item)))
            .join(' ')} - ${hourly.map((item) => (0, i18n_1.t)((0, i18n_1.kot)(item))).join(' ')}`;
    }
    return `${yearly.map((item) => (0, i18n_1.t)((0, i18n_1.kot)(item))).join('')} ${monthly.map((item) => (0, i18n_1.t)((0, i18n_1.kot)(item))).join('')} ${daily
        .map((item) => (0, i18n_1.t)((0, i18n_1.kot)(item)))
        .join('')} ${hourly.map((item) => (0, i18n_1.t)((0, i18n_1.kot)(item))).join('')}`;
};
exports.translateChineseDate = translateChineseDate;

},{"../data":1,"../star":6,"../i18n":17,"lunar-lite":8,"../astro":15}],
90:[function(require,module,exports){"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMajorStarByLunarDate = exports.getMajorStarBySolarDate = exports.getSignByLunarDate = exports.getSignBySolarDate = exports.getZodiacBySolarDate = exports.resetConfig = exports.getConfig = exports.config = exports.loadPlugin = exports.loadPlugins = void 0;
exports.astrolabeBySolarDate = astrolabeBySolarDate;
exports.bySolar = bySolar;
exports.astrolabeByLunarDate = astrolabeByLunarDate;
exports.byLunar = byLunar;
exports.rearrangeAstrolable = rearrangeAstrolable;
exports.withOptions = withOptions;
const lunar_lite_1 = require("lunar-lite");
const data_1 = require("../data");
const i18n_1 = require("../i18n");
const star_1 = require("../star");
const utils_1 = require("../utils");
const FunctionalAstrolabe_1 = __importDefault(require("./FunctionalAstrolabe"));
const FunctionalPalace_1 = __importDefault(require("./FunctionalPalace"));
const palace_1 = require("./palace");
const FunctionalStar_1 = __importDefault(require("../star/FunctionalStar"));
const config_1 = require("./config");
const context_1 = require("./context");
const validation_1 = require("../utils/validation");
const _plugins = [];
/**
 * 按当前排盘语言格式化农历日期。
 *
 * @internal
 * @version 2.6.2
 */
const formatLunarDate = (lunarDate) => {
    const language = (0, i18n_1.getLanguage)();
    if (language === 'zh-CN' || language === 'zh-TW') {
        return lunarDate.toString(true);
    }
    return (0, i18n_1.t)('lunarDate', {
        year: lunarDate.lunarYear,
        month: lunarDate.lunarMonth,
        day: lunarDate.lunarDay,
        leapMonth: lunarDate.isLeap ? (0, i18n_1.t)('leapMonth') : '',
    });
};
/**
 * 批量加载插件
 *
 * @version v2.3.0
 *
 * @param plugins 插件方法数组
 */
const loadPlugins = (plugins) => {
    Array.prototype.push.apply(_plugins, plugins);
};
exports.loadPlugins = loadPlugins;
/**
 * 加载单个插件
 *
 * @version v2.3.0
 *
 * @param plugin 插件方法
 */
const loadPlugin = (plugin) => {
    _plugins.push(plugin);
};
exports.loadPlugin = loadPlugin;
var config_2 = require("./config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return config_2.config; } });
Object.defineProperty(exports, "getConfig", { enumerable: true, get: function () { return config_2.getConfig; } });
Object.defineProperty(exports, "resetConfig", { enumerable: true, get: function () { return config_2.resetConfig; } });
/**
 * 通过阳历获取星盘信息
 *
 * @deprecated 此方法已在`v2.0.5`废弃，请用 `bySolar` 方法替换，参数不变
 *
 * @param solarDateStr 阳历日期【YYYY-M-D】
 * @param timeIndex 出生时辰序号【0~12】
 * @param gender 性别【男|女】
 * @param fixLeap 是否调整闰月情况【默认 true】，假入调整闰月，则闰月的前半个月算上个月，后半个月算下个月
 * @param language 输出语言
 * @returns 星盘信息
 */
function astrolabeBySolarDate(solarDateStr, timeIndex, gender, fixLeap = true, language) {
    return bySolar(solarDateStr, timeIndex, gender, fixLeap, language);
}
/**
 * 通过阳历获取星盘信息
 *
 * @param solarDate 阳历日期【YYYY-M-D】
 * @param timeIndex 出生时辰序号【0~12】
 * @param gender 性别【男|女】
 * @param fixLeap 是否调整闰月情况【默认 true】，假入调整闰月，则闰月的前半个月算上个月，后半个月算下个月
 * @param language 输出语言
 * @returns 星盘信息
 */
function bySolar(solarDate, timeIndex, gender, fixLeap = true, language) {
    (0, validation_1.validateDate)(solarDate);
    (0, validation_1.validateTimeIndex)(timeIndex);
    (0, validation_1.validateGender)(gender);
    (0, validation_1.validateBoolean)(fixLeap, 'fixLeap');
    return (0, i18n_1.withLanguage)(language !== null && language !== void 0 ? language : 'zh-CN', () => {
        const palaces = [];
        const { dayDivide } = (0, config_1.getConfig)();
        let tIndex = timeIndex;
        if (dayDivide === 'current' && tIndex >= 12) {
            // 如果当前时辰为晚子时并且晚子时算当天时，将时辰调整为当日早子时
            tIndex = 0;
        }
        const { yearly } = (0, lunar_lite_1.getHeavenlyStemAndEarthlyBranchBySolarDate)(solarDate, tIndex, {
            year: (0, config_1.getConfig)().yearDivide,
            month: (0, config_1.getConfig)().horoscopeDivide,
        });
        const earthlyBranchOfYear = (0, i18n_1.kot)(yearly[1], 'Earthly');
        const heavenlyStemOfYear = (0, i18n_1.kot)(yearly[0], 'Heavenly');
        const { bodyIndex, soulIndex, heavenlyStemOfSoul, earthlyBranchOfSoul } = (0, palace_1.getSoulAndBody)({
            solarDate,
            timeIndex: tIndex,
            fixLeap,
        });
        const palaceNames = (0, palace_1.getPalaceNames)(soulIndex);
        const majorStars = (0, star_1.getMajorStar)({ solarDate, timeIndex: tIndex, fixLeap });
        const minorStars = (0, star_1.getMinorStar)(solarDate, tIndex, fixLeap);
        const adjectiveStars = (0, star_1.getAdjectiveStar)({
            solarDate,
            timeIndex: tIndex,
            gender,
            fixLeap,
        });
        const changsheng12 = (0, star_1.getchangsheng12)({
            solarDate,
            timeIndex: tIndex,
            gender,
            fixLeap,
        });
        const boshi12 = (0, star_1.getBoShi12)(solarDate, gender);
        const { jiangqian12, suiqian12 } = (0, star_1.getYearly12)(solarDate);
        const { decadals, ages } = (0, palace_1.getHoroscope)({ solarDate, timeIndex: tIndex, gender, fixLeap });
        for (let i = 0; i < 12; i++) {
            const heavenlyStemOfPalace = data_1.HEAVENLY_STEMS[(0, utils_1.fixIndex)(data_1.HEAVENLY_STEMS.indexOf((0, i18n_1.kot)(heavenlyStemOfSoul, 'Heavenly')) - soulIndex + i, 10)];
            const earthlyBranchOfPalace = data_1.EARTHLY_BRANCHES[(0, utils_1.fixIndex)(2 + i)];
            palaces.push(new FunctionalPalace_1.default({
                index: i,
                name: palaceNames[i],
                isBodyPalace: bodyIndex === i,
                isOriginalPalace: !['ziEarthly', 'chouEarthly'].includes(earthlyBranchOfPalace) &&
                    heavenlyStemOfPalace === heavenlyStemOfYear,
                heavenlyStem: (0, i18n_1.t)(heavenlyStemOfPalace),
                earthlyBranch: (0, i18n_1.t)(earthlyBranchOfPalace),
                majorStars: majorStars[i],
                minorStars: minorStars[i],
                adjectiveStars: adjectiveStars[i],
                changsheng12: changsheng12[i],
                boshi12: boshi12[i],
                jiangqian12: jiangqian12[i],
                suiqian12: suiqian12[i],
                decadal: decadals[i],
                ages: ages[i],
            }));
        }
        // 宫位是从寅宫开始，而寅的索引是2，所以需要+2
        const earthlyBranchOfSoulPalace = data_1.EARTHLY_BRANCHES[(0, utils_1.fixIndex)(soulIndex + 2)];
        const earthlyBranchOfBodyPalace = (0, i18n_1.t)(data_1.EARTHLY_BRANCHES[(0, utils_1.fixIndex)(bodyIndex + 2)]);
        const chineseDate = (0, lunar_lite_1.getHeavenlyStemAndEarthlyBranchBySolarDate)(solarDate, tIndex, {
            year: (0, config_1.getConfig)().yearDivide,
            month: (0, config_1.getConfig)().horoscopeDivide,
        });
        const lunarDate = (0, lunar_lite_1.solar2lunar)(solarDate);
        // 中州派地支以年支找命主
        // 通用派别以命宫地支找命主
        const soul = (0, i18n_1.t)(data_1.earthlyBranches[(0, config_1.getConfig)().algorithm === 'zhongzhou' ? earthlyBranchOfYear : earthlyBranchOfSoulPalace].soul);
        const result = new FunctionalAstrolabe_1.default({
            gender: (0, i18n_1.t)((0, i18n_1.kot)(gender)),
            solarDate,
            lunarDate: formatLunarDate(lunarDate),
            chineseDate: (0, utils_1.translateChineseDate)(chineseDate),
            rawDates: { lunarDate, chineseDate },
            time: (0, i18n_1.t)(data_1.CHINESE_TIME[timeIndex]),
            timeRange: data_1.TIME_RANGE[timeIndex],
            sign: (0, exports.getSignBySolarDate)(solarDate, language),
            zodiac: (0, exports.getZodiacBySolarDate)(solarDate, language),
            earthlyBranchOfSoulPalace: (0, i18n_1.t)(earthlyBranchOfSoulPalace),
            earthlyBranchOfBodyPalace,
            soul,
            body: (0, i18n_1.t)(data_1.earthlyBranches[earthlyBranchOfYear].body),
            fiveElementsClass: (0, palace_1.getFiveElementsClass)(heavenlyStemOfSoul, earthlyBranchOfSoul),
            palaces,
            copyright: `copyright © 2023-${new Date().getFullYear()} iztro (https://github.com/SylarLong/iztro)`,
        });
        (0, context_1.bindContext)(result);
        _plugins.map((plugin) => result.use(plugin));
        return result;
    });
}
/**
 * 通过农历获取星盘信息
 *
 * @deprecated 此方法已在`v2.0.5`废弃，请用 `byLunar` 方法替换，参数不变
 *
 * @param lunarDateStr 农历日期【YYYY-M-D】，例如2000年七月十七则传入 2000-7-17
 * @param timeIndex 出生时辰序号【0~12】
 * @param gender 性别【男|女】
 * @param isLeapMonth 是否闰月【默认 false】，当实际月份没有闰月时该参数不生效
 * @param fixLeap 是否调整闰月情况【默认 true】，假入调整闰月，则闰月的前半个月算上个月，后半个月算下个月
 * @param language 输出语言
 * @returns 星盘数据
 */
function astrolabeByLunarDate(lunarDateStr, timeIndex, gender, isLeapMonth = false, fixLeap = true, language) {
    return byLunar(lunarDateStr, timeIndex, gender, isLeapMonth, fixLeap, language);
}
/**
 * 通过农历获取星盘信息
 *
 * @param lunarDateStr 农历日期【YYYY-M-D】，例如2000年七月十七则传入 2000-7-17
 * @param timeIndex 出生时辰序号【0~12】
 * @param gender 性别【男|女】
 * @param isLeapMonth 是否闰月【默认 false】，当实际月份没有闰月时该参数不生效
 * @param fixLeap 是否调整闰月情况【默认 true】，假入调整闰月，则闰月的前半个月算上个月，后半个月算下个月
 * @param language 输出语言
 * @returns 星盘数据
 */
function byLunar(lunarDateStr, timeIndex, gender, isLeapMonth = false, fixLeap = true, language) {
    (0, validation_1.validateDate)(lunarDateStr, 'lunar', isLeapMonth);
    (0, validation_1.validateTimeIndex)(timeIndex);
    (0, validation_1.validateGender)(gender);
    (0, validation_1.validateBoolean)(isLeapMonth, 'isLeapMonth');
    (0, validation_1.validateBoolean)(fixLeap, 'fixLeap');
    const solarDate = (0, lunar_lite_1.lunar2solar)(lunarDateStr, isLeapMonth);
    return bySolar(solarDate.toString(), timeIndex, gender, fixLeap, language);
}
function rearrangeAstrolable({ from, astrolable, option, }) {
    const { timeIndex, fixLeap } = option;
    const { dayDivide } = (0, config_1.getConfig)();
    let tIndex = timeIndex;
    if (dayDivide === 'current' && tIndex >= 12) {
        // 如果当前时辰为晚子时并且晚子时算当天时，将时辰调整为当日早子时
        tIndex = 0;
    }
    // 以传入地支为命宫
    const { soulIndex, bodyIndex } = (0, palace_1.getSoulAndBody)({
        solarDate: astrolable.solarDate,
        timeIndex: tIndex,
        fixLeap,
        from,
    });
    const fiveElementsClass = (0, palace_1.getFiveElementsClass)(from.heavenlyStem, from.earthlyBranch);
    const palaceNames = (0, palace_1.getPalaceNames)(soulIndex);
    const majorStars = (0, star_1.getMajorStar)({ solarDate: astrolable.solarDate, timeIndex: tIndex, fixLeap, from });
    const changsheng12 = (0, star_1.getchangsheng12)({
        solarDate: astrolable.solarDate,
        gender: astrolable.gender,
        timeIndex: tIndex,
        fixLeap,
        from,
    });
    const { decadals, ages } = (0, palace_1.getHoroscope)({
        solarDate: astrolable.solarDate,
        timeIndex: tIndex,
        gender: astrolable.gender,
        fixLeap,
        from,
    });
    astrolable.fiveElementsClass = fiveElementsClass;
    // 重新获取天使、天伤的索引
    const { tianshiIndex, tianshangIndex } = (0, star_1.getTianshiTianshangIndex)(astrolable.gender, (0, i18n_1.kot)(astrolable.rawDates.chineseDate.yearly[1]), soulIndex);
    // 重新获取天才星的位置
    const tiancaiIndex = (0, utils_1.fixIndex)(soulIndex + data_1.EARTHLY_BRANCHES.indexOf((0, i18n_1.kot)(astrolable.rawDates.chineseDate.yearly[1])));
    astrolable.palaces.forEach((palace, i) => {
        const _tianshangIdx = palace.adjectiveStars.findIndex((item) => (0, i18n_1.kot)(item.name) === 'tianshang');
        if (_tianshangIdx !== -1 && tianshangIndex !== i) {
            // 当天伤不应该在该宫位时，删之
            palace.adjectiveStars.splice(_tianshangIdx, 1);
        }
        if (_tianshangIdx === -1 && tianshangIndex === i) {
            // 当天伤应该在该宫位却不在，加之
            palace.adjectiveStars.push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('tianshang'), type: 'adjective', scope: 'origin' }));
        }
        const _tianshiIdx = palace.adjectiveStars.findIndex((item) => (0, i18n_1.kot)(item.name) === 'tianshi');
        if (_tianshiIdx !== -1 && tianshiIndex !== i) {
            // 当天使不应该在该宫位时，删之
            palace.adjectiveStars.splice(_tianshiIdx, 1);
        }
        if (_tianshiIdx === -1 && tianshiIndex === i) {
            // 当天使应该在该宫位却不在，加之
            palace.adjectiveStars.push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('tianshi'), type: 'adjective', scope: 'origin' }));
        }
        const _tiancaiIndex = palace.adjectiveStars.findIndex((item) => (0, i18n_1.kot)(item.name) === 'tiancai');
        if (_tiancaiIndex !== -1 && tiancaiIndex !== i) {
            // 当天才不应该在该宫位时，删之
            palace.adjectiveStars.splice(_tiancaiIndex, 1);
        }
        if (_tiancaiIndex === -1 && tiancaiIndex === i) {
            // 当天才应该在该宫位却不在，加之
            palace.adjectiveStars.push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('tiancai'), type: 'adjective', scope: 'origin' }));
        }
        palace.name = palaceNames[i];
        palace.majorStars = majorStars[i];
        palace.changsheng12 = changsheng12[i];
        palace.decadal = decadals[i];
        palace.ages = ages[i];
        palace.isBodyPalace = bodyIndex === i;
    });
    astrolable.earthlyBranchOfSoulPalace = (0, i18n_1.t)(astrolable.palace('命宫').earthlyBranch);
    return astrolable;
}
/**
 * 获取排盘信息。
 * config 只覆盖当前星盘，不改变全局默认配置。
 * 返回的星盘及其运限查询保留生成时的配置和语言。
 *
 * @param param0 排盘参数
 * @returns 星盘信息
 */
function withOptions(option) {
    const { type = 'solar', dateStr, timeIndex, gender, isLeapMonth, fixLeap, language, astroType, config: cfg } = option;
    if (!['solar', 'lunar'].includes(type))
        throw new Error('invalid date type.');
    if (astroType !== undefined && !['heaven', 'earth', 'human'].includes(astroType))
        throw new Error('invalid astroType.');
    return (0, config_1.withConfig)((0, config_1.resolveConfig)(cfg), () => (0, i18n_1.withLanguage)(language !== null && language !== void 0 ? language : 'zh-CN', () => {
        let result;
        if (type === 'solar') {
            result = bySolar(dateStr, timeIndex, gender, fixLeap, language);
        }
        else {
            result = byLunar(dateStr, timeIndex, gender, isLeapMonth, fixLeap, language);
        }
        switch (astroType) {
            case 'earth': {
                // 以身宫干支起五行局重排，身宫为命宫
                const bodyPalace = result.palace('身宫');
                const { heavenlyStem, earthlyBranch } = bodyPalace;
                return rearrangeAstrolable({ from: { heavenlyStem, earthlyBranch }, astrolable: result, option });
            }
            case 'human': {
                // 以福德宫干支起五行局重排，福德宫为命宫
                const bodyPalace = result.palace('福德');
                const { heavenlyStem, earthlyBranch } = bodyPalace;
                return rearrangeAstrolable({ from: { heavenlyStem, earthlyBranch }, astrolable: result, option });
            }
            default: {
                // 直接返回天盘
                return result;
            }
        }
    }));
}
/**
 * 通过公历获取十二生肖
 *
 * @version v1.2.1
 *
 * @param solarDateStr 阳历日期【YYYY-M-D】
 * @param language 输出语言，默认为中文
 * @returns 十二生肖
 */
const getZodiacBySolarDate = (solarDateStr, language) => {
    (0, validation_1.validateDate)(solarDateStr);
    return (0, i18n_1.withLanguage)(language !== null && language !== void 0 ? language : 'zh-CN', () => {
        const { yearly } = (0, lunar_lite_1.getHeavenlyStemAndEarthlyBranchBySolarDate)(solarDateStr, 0, {
            year: (0, config_1.getConfig)().yearDivide,
        });
        return (0, i18n_1.t)((0, i18n_1.kot)((0, lunar_lite_1.getZodiac)(yearly[1])));
    });
};
exports.getZodiacBySolarDate = getZodiacBySolarDate;
/**
 * 通过阳历获取星座
 *
 * @version v1.2.1
 *
 * @param solarDateStr 阳历日期【YYYY-M-D】
 * @param language 输出语言，默认为中文
 * @returns 星座
 */
const getSignBySolarDate = (solarDateStr, language) => {
    (0, validation_1.validateDate)(solarDateStr);
    return (0, i18n_1.withLanguage)(language !== null && language !== void 0 ? language : 'zh-CN', () => {
        return (0, i18n_1.t)((0, i18n_1.kot)((0, lunar_lite_1.getSign)(solarDateStr)));
    });
};
exports.getSignBySolarDate = getSignBySolarDate;
/**
 * 通过农历获取星座
 *
 * @version v1.2.1
 *
 * @param lunarDateStr 农历日期【YYYY-M-D】
 * @param isLeapMonth 是否闰月，如果该月没有闰月则此字段不生效
 * @param language 输出语言，默认为中文
 * @returns 星座
 */
const getSignByLunarDate = (lunarDateStr, isLeapMonth, language) => {
    (0, validation_1.validateDate)(lunarDateStr, 'lunar', isLeapMonth);
    if (isLeapMonth !== undefined)
        (0, validation_1.validateBoolean)(isLeapMonth, 'isLeapMonth');
    return (0, i18n_1.withLanguage)(language !== null && language !== void 0 ? language : 'zh-CN', () => {
        const solarDate = (0, lunar_lite_1.lunar2solar)(lunarDateStr, isLeapMonth);
        return (0, exports.getSignBySolarDate)(solarDate.toString(), language);
    });
};
exports.getSignByLunarDate = getSignByLunarDate;
/**
 * 通过阳历获取命宫主星
 *
 * @version v1.2.1
 *
 * @param solarDateStr 阳历日期【YYYY-M-D】
 * @param timeIndex 出生时辰序号【0~12】
 * @param fixLeap 是否调整闰月情况【默认 true】，假入调整闰月，则闰月的前半个月算上个月，后半个月算下个月
 * @param language 输出语言，默认为中文
 * @returns 命宫主星
 */
const getMajorStarBySolarDate = (solarDateStr, timeIndex, fixLeap = true, language) => {
    (0, validation_1.validateDate)(solarDateStr);
    (0, validation_1.validateTimeIndex)(timeIndex);
    (0, validation_1.validateBoolean)(fixLeap, 'fixLeap');
    return (0, i18n_1.withLanguage)(language !== null && language !== void 0 ? language : 'zh-CN', () => {
        const { soulIndex } = (0, palace_1.getSoulAndBody)({ solarDate: solarDateStr, timeIndex, fixLeap });
        const majorStars = (0, star_1.getMajorStar)({ solarDate: solarDateStr, timeIndex, fixLeap });
        const stars = majorStars[soulIndex].filter((star) => star.type === 'major');
        if (stars.length) {
            return stars.map((star) => (0, i18n_1.t)(star.name)).join(',');
        }
        // 如果命宫为空宫，则借对宫主星
        return majorStars[(0, utils_1.fixIndex)(soulIndex + 6)]
            .filter((star) => star.type === 'major')
            .map((star) => (0, i18n_1.t)(star.name))
            .join(',');
    });
};
exports.getMajorStarBySolarDate = getMajorStarBySolarDate;
/**
 * 通过农历获取命宫主星
 *
 * @version v1.2.1
 *
 * @param lunarDateStr 农历日期【YYYY-M-D】，例如2000年七月十七则传入 2000-7-17
 * @param timeIndex 出生时辰序号【0~12】
 * @param isLeapMonth 是否闰月，如果该月没有闰月则此字段不生效
 * @param fixLeap 是否调整闰月情况【默认 true】，假入调整闰月，则闰月的前半个月算上个月，后半个月算下个月
 * @param language 输出语言，默认为中文
 * @returns 命宫主星
 */
const getMajorStarByLunarDate = (lunarDateStr, timeIndex, isLeapMonth = false, fixLeap = true, language) => {
    (0, validation_1.validateDate)(lunarDateStr, 'lunar', isLeapMonth);
    (0, validation_1.validateBoolean)(isLeapMonth, 'isLeapMonth');
    const solarDate = (0, lunar_lite_1.lunar2solar)(lunarDateStr, isLeapMonth);
    return (0, exports.getMajorStarBySolarDate)(solarDate.toString(), timeIndex, fixLeap, language);
};
exports.getMajorStarByLunarDate = getMajorStarByLunarDate;

},{"lunar-lite":8,"../data":1,"../i18n":17,"../star":6,"../utils":89,"./FunctionalAstrolabe":91,"./FunctionalPalace":101,"./palace":16,"../star/FunctionalStar":102,"./config":93,"./context":92,"../utils/validation":100}],
91:[function(require,module,exports){"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const context_1 = require("./context");
const dayjs_1 = __importDefault(require("dayjs"));
const lunar_lite_1 = require("lunar-lite");
const lunar_typescript_1 = require("lunar-typescript");
const data_1 = require("../data");
const i18n_1 = require("../i18n");
const star_1 = require("../star");
const utils_1 = require("../utils");
const analyzer_1 = require("./analyzer");
const palace_1 = require("./palace");
const FunctionalHoroscope_1 = __importDefault(require("./FunctionalHoroscope"));
const config_1 = require("./config");
const validation_1 = require("../utils/validation");
const toJSON_1 = require("../utils/toJSON");
/**
 * 获取运限数据
 *
 * @version v0.2.1
 *
 * @private 私有方法
 *
 * @param $ 星盘对象
 * @param targetDate 阳历日期【可选】，默认为调用时日期
 * @param timeIndex 时辰序号【可选】，若不传会返回 `targetDate` 中时间所在的时辰
 * @returns 运限数据
 */
const _getHoroscopeBySolarDate = ($, targetDate = new Date(), timeIndex) => {
    (0, validation_1.validateDate)(targetDate);
    if (timeIndex !== undefined)
        (0, validation_1.validateTimeIndex)(timeIndex);
    const _birthday = (0, lunar_lite_1.solar2lunar)($.solarDate);
    const _date = (0, lunar_lite_1.solar2lunar)(targetDate);
    const convertTimeIndex = (0, utils_1.timeToIndex)((0, dayjs_1.default)(targetDate).hour());
    const targetTimeIndex = timeIndex !== null && timeIndex !== void 0 ? timeIndex : convertTimeIndex;
    const adjustedTargetTimeIndex = (0, config_1.getConfig)().dayDivide === 'current' && targetTimeIndex >= 12 ? 0 : targetTimeIndex;
    const { yearly, monthly, daily, hourly } = (0, lunar_lite_1.getHeavenlyStemAndEarthlyBranchBySolarDate)(targetDate, adjustedTargetTimeIndex, {
        // 允许配置运限分割点
        year: (0, config_1.getConfig)().horoscopeDivide,
        month: (0, config_1.getConfig)().horoscopeDivide,
    });
    // 虚岁
    let nominalAge = _date.lunarYear - _birthday.lunarYear;
    // 是否童限
    let isChildhood = false;
    if ((0, config_1.getConfig)().ageDivide === 'birthday') {
        // 假如目标日期已经过了生日，则需要加1岁
        // 比如 2022年九月初一 出生的人，在出生后虚岁为 1 岁
        // 但在 2023年九月初二 以后，虚岁则为 2 岁
        if (_date.lunarMonth > _birthday.lunarMonth ||
            (_date.lunarMonth === _birthday.lunarMonth && _date.lunarDay > _birthday.lunarDay)) {
            nominalAge += 1;
        }
    }
    else {
        // 以自然年为界，直接加1岁
        nominalAge += 1;
    }
    // 大限索引
    let decadalIndex = -1;
    // 大限天干
    let heavenlyStemOfDecade = 'jia';
    // 大限地支
    let earthlyBranchOfDecade = 'zi';
    // 小限索引
    let ageIndex = -1;
    // 流年索引
    const yearlyIndex = (0, utils_1.fixEarthlyBranchIndex)(yearly[1]);
    // 流月索引
    let monthlyIndex = -1;
    // 流日索引
    let dailyIndex = -1;
    // 流时索引
    let hourlyIndex = -1;
    // 小限天干
    let heavenlyStemOfAge = 'jia';
    // 小限地支
    let earthlyBranchOfAge = 'zi';
    // 查询大限索引
    $.palaces.some(({ decadal }, index) => {
        if (nominalAge >= decadal.range[0] && nominalAge <= decadal.range[1]) {
            decadalIndex = index;
            heavenlyStemOfDecade = decadal.heavenlyStem;
            earthlyBranchOfDecade = decadal.earthlyBranch;
            return true;
        }
    });
    if (decadalIndex < 0) {
        // 如果大限索引小于0则证明还没有开始起运
        // 此时应该取小限运
        // 一命二财三疾厄	四岁夫妻五福德
        // 六岁事业为童限	专就宫垣视吉凶
        const palaces = ['命宫', '财帛', '疾厄', '夫妻', '福德', '官禄'];
        const targetIndex = palaces[nominalAge - 1];
        const targetPalace = $.palace(targetIndex);
        if (targetPalace) {
            isChildhood = true;
            decadalIndex = targetPalace.index;
            heavenlyStemOfDecade = targetPalace.heavenlyStem;
            earthlyBranchOfDecade = targetPalace.earthlyBranch;
        }
    }
    // 查询小限索引
    $.palaces.some(({ ages, heavenlyStem, earthlyBranch }, index) => {
        if (ages.includes(nominalAge)) {
            ageIndex = index;
            heavenlyStemOfAge = heavenlyStem;
            earthlyBranchOfAge = earthlyBranch;
            return true;
        }
    });
    // 获取流月索引, 流年地支逆数到生月所在宫位，再从该宫位顺数到生时，为正月所在宫位，之后每月一宫
    // 计算流月时需要考虑生月闰月情况，如果是后15天则计算时需要加1月
    const leapAddition = _birthday.isLeap && _birthday.lunarDay > 15 ? 1 : 0;
    // 流月当月的闰月情况也需要考虑
    const dateLeapAddition = _date.isLeap && _date.lunarDay > 15 ? 1 : 0;
    monthlyIndex = (0, utils_1.fixIndex)(yearlyIndex -
        (_birthday.lunarMonth + leapAddition) +
        data_1.EARTHLY_BRANCHES.indexOf((0, i18n_1.kot)($.rawDates.chineseDate.hourly[1])) +
        (_date.lunarMonth + dateLeapAddition));
    // 获取流日索引
    dailyIndex = (0, utils_1.fixIndex)(monthlyIndex + _date.lunarDay - 1);
    // 获取流时索引
    hourlyIndex = (0, utils_1.fixIndex)(dailyIndex + data_1.EARTHLY_BRANCHES.indexOf((0, i18n_1.kot)(hourly[1], 'Earthly')));
    const scope = {
        solarDate: (0, lunar_lite_1.normalizeDateStr)(targetDate).slice(0, 3).join('-'),
        lunarDate: _date.toString(true),
        decadal: {
            index: decadalIndex,
            name: isChildhood ? (0, i18n_1.t)('childhood') : (0, i18n_1.t)('decadal'),
            heavenlyStem: (0, i18n_1.t)((0, i18n_1.kot)(heavenlyStemOfDecade, 'Heavnly')),
            earthlyBranch: (0, i18n_1.t)((0, i18n_1.kot)(earthlyBranchOfDecade, 'Earthly')),
            palaceNames: (0, palace_1.getPalaceNames)(decadalIndex),
            mutagen: (0, utils_1.getMutagensByHeavenlyStem)(heavenlyStemOfDecade),
            stars: (0, star_1.getHoroscopeStar)(heavenlyStemOfDecade, earthlyBranchOfDecade, 'decadal'),
        },
        age: {
            index: ageIndex,
            nominalAge,
            name: (0, i18n_1.t)('turn'),
            heavenlyStem: heavenlyStemOfAge,
            earthlyBranch: earthlyBranchOfAge,
            palaceNames: (0, palace_1.getPalaceNames)(ageIndex),
            mutagen: (0, utils_1.getMutagensByHeavenlyStem)(heavenlyStemOfAge),
        },
        yearly: {
            index: yearlyIndex,
            name: (0, i18n_1.t)('yearly'),
            heavenlyStem: (0, i18n_1.t)((0, i18n_1.kot)(yearly[0], 'Heavenly')),
            earthlyBranch: (0, i18n_1.t)((0, i18n_1.kot)(yearly[1], 'Earthly')),
            palaceNames: (0, palace_1.getPalaceNames)(yearlyIndex),
            mutagen: (0, utils_1.getMutagensByHeavenlyStem)(yearly[0]),
            stars: (0, star_1.getHoroscopeStar)(yearly[0], yearly[1], 'yearly'),
            yearlyDecStar: (0, star_1.getYearly12)(targetDate),
        },
        monthly: {
            index: monthlyIndex,
            name: (0, i18n_1.t)('monthly'),
            heavenlyStem: (0, i18n_1.t)((0, i18n_1.kot)(monthly[0], 'Heavenly')),
            earthlyBranch: (0, i18n_1.t)((0, i18n_1.kot)(monthly[1], 'Earthly')),
            palaceNames: (0, palace_1.getPalaceNames)(monthlyIndex),
            mutagen: (0, utils_1.getMutagensByHeavenlyStem)(monthly[0]),
            stars: (0, star_1.getHoroscopeStar)(monthly[0], monthly[1], 'monthly'),
        },
        daily: {
            index: dailyIndex,
            name: (0, i18n_1.t)('daily'),
            heavenlyStem: (0, i18n_1.t)((0, i18n_1.kot)(daily[0], 'Heavenly')),
            earthlyBranch: (0, i18n_1.t)((0, i18n_1.kot)(daily[1], 'Earthly')),
            palaceNames: (0, palace_1.getPalaceNames)(dailyIndex),
            mutagen: (0, utils_1.getMutagensByHeavenlyStem)(daily[0]),
            stars: (0, star_1.getHoroscopeStar)(daily[0], daily[1], 'daily'),
        },
        hourly: {
            index: hourlyIndex,
            name: (0, i18n_1.t)('hourly'),
            heavenlyStem: (0, i18n_1.t)((0, i18n_1.kot)(hourly[0], 'Heavenly')),
            earthlyBranch: (0, i18n_1.t)((0, i18n_1.kot)(hourly[1], 'Earthly')),
            palaceNames: (0, palace_1.getPalaceNames)(hourlyIndex),
            mutagen: (0, utils_1.getMutagensByHeavenlyStem)(hourly[0]),
            stars: (0, star_1.getHoroscopeStar)(hourly[0], hourly[1], 'hourly'),
        },
    };
    return new FunctionalHoroscope_1.default(scope, $);
};
/**
 * 星盘类。
 *
 * 文档地址：https://docs.iztro.com/posts/astrolabe.html#functionalastrolabe
 */
class FunctionalAstrolabe {
    constructor(data) {
        // 保存插件列表
        this.plugins = [];
        this.toJSON = () => (0, toJSON_1.serialize)(this);
        this.star = (starName) => {
            let targetStar;
            this.palaces.some((p) => {
                [...p.majorStars, ...p.minorStars, ...p.adjectiveStars].some((item) => {
                    if ((0, i18n_1.kot)(item.name) === (0, i18n_1.kot)(starName)) {
                        targetStar = item;
                        targetStar.setPalace(p);
                        targetStar.setAstrolabe(this);
                    }
                });
            });
            if (!targetStar) {
                throw new Error('invalid star name.');
            }
            return targetStar;
        };
        this.horoscope = (targetDate = new Date(), timeIndexOfTarget) => _getHoroscopeBySolarDate(this, targetDate, timeIndexOfTarget);
        this.decadalList = () => {
            const birthYear = this.rawDates.lunarDate.lunarYear;
            return [...this.palaces]
                .sort((previous, next) => previous.decadal.range[0] - next.decadal.range[0])
                .map(({ index, name: palaceName, decadal }) => ({
                index,
                name: (0, i18n_1.t)('decadal'),
                palaceName,
                ageRange: [...decadal.range],
                yearRange: [birthYear + decadal.range[0] - 1, birthYear + decadal.range[1] - 1],
                heavenlyStem: decadal.heavenlyStem,
                earthlyBranch: decadal.earthlyBranch,
                palaceNames: (0, palace_1.getPalaceNames)(index),
                mutagen: (0, utils_1.getMutagensByHeavenlyStem)(decadal.heavenlyStem),
                stars: (0, star_1.getHoroscopeStar)(decadal.heavenlyStem, decadal.earthlyBranch, 'decadal'),
            }));
        };
        this.yearlyList = (indexOrName) => {
            const decadalPalaces = [...this.palaces].sort((previous, next) => previous.decadal.range[0] - next.decadal.range[0]);
            const palace = typeof indexOrName === 'number' ? decadalPalaces[indexOrName] : this.palace(indexOrName);
            if (!palace) {
                throw new Error('invalid decadal index or palace name.');
            }
            const birthYear = this.rawDates.lunarDate.lunarYear;
            const [startAge, endAge] = palace.decadal.range;
            const timeIndex = data_1.EARTHLY_BRANCHES.indexOf((0, i18n_1.kot)(this.rawDates.chineseDate.hourly[1], 'Earthly'));
            return Array.from({ length: endAge - startAge + 1 }, (_, index) => {
                const age = startAge + index;
                const year = birthYear + age - 1;
                const targetDate = (0, lunar_lite_1.lunar2solar)(`${year}-6-1`).toString();
                const { yearly } = this.horoscope(targetDate, timeIndex);
                return {
                    index: yearly.index,
                    name: yearly.name,
                    age,
                    year,
                    heavenlyStem: yearly.heavenlyStem,
                    earthlyBranch: yearly.earthlyBranch,
                    palaceNames: yearly.palaceNames,
                    mutagen: yearly.mutagen,
                    stars: yearly.stars,
                };
            });
        };
        this.monthlyList = (year, fixLeap = true) => {
            if (!Number.isInteger(year) || year < 1 || year > 9999) {
                throw new Error('invalid year.');
            }
            const age = year - this.rawDates.lunarDate.lunarYear + 1;
            const timeIndex = data_1.EARTHLY_BRANCHES.indexOf((0, i18n_1.kot)(this.rawDates.chineseDate.hourly[1], 'Earthly'));
            const periods = lunar_typescript_1.LunarYear.fromYear(year)
                .getMonthsInYear()
                .flatMap((lunarMonth) => {
                const rawMonth = lunarMonth.getMonth();
                const month = Math.abs(rawMonth);
                const isLeapMonth = rawMonth < 0;
                const lastDay = lunarMonth.getDayCount();
                if (isLeapMonth && fixLeap) {
                    return [
                        { month, isLeapMonth, part: 'first', dayRange: [1, 15] },
                        { month, isLeapMonth, part: 'second', dayRange: [16, lastDay] },
                    ];
                }
                return [{ month, isLeapMonth, part: 'normal', dayRange: [1, lastDay] }];
            });
            return periods.map(({ month, isLeapMonth, part, dayRange }) => {
                const targetDay = part === 'second' ? 16 : 1;
                const targetDate = (0, lunar_lite_1.lunar2solar)(`${year}-${month}-${targetDay}`, isLeapMonth).toString();
                const { monthly } = this.horoscope(targetDate, timeIndex);
                return {
                    index: monthly.index,
                    name: monthly.name,
                    age,
                    year,
                    month,
                    isLeapMonth,
                    part,
                    dayRange,
                    heavenlyStem: monthly.heavenlyStem,
                    earthlyBranch: monthly.earthlyBranch,
                    palaceNames: monthly.palaceNames,
                    mutagen: monthly.mutagen,
                    stars: monthly.stars,
                };
            });
        };
        this.palace = (indexOrName) => (0, analyzer_1.getPalace)(this, indexOrName);
        this.surroundedPalaces = (indexOrName) => (0, analyzer_1.getSurroundedPalaces)(this, indexOrName);
        this.flankingPalaces = (indexOrName) => (0, analyzer_1.getFlankingPalaces)(this, indexOrName);
        /**
         * @deprecated 此方法已在`v1.2.0`废弃，请用下列方法替换
         *
         * @example
         *  // AS IS
         *  astrolabe.isSurrounded(0, ["紫微"]);
         *
         *  // TO BE
         *  astrolabe.surroundedPalaces(0).have(["紫微"]);
         */
        this.isSurrounded = (indexOrName, stars) => this.surroundedPalaces(indexOrName).have(stars);
        /**
         * @deprecated 此方法已在`v1.2.0`废弃，请用下列方法替换
         *
         * @example
         *  // AS IS
         *  astrolabe.isSurroundedOneOf(0, ["紫微"]);
         *
         *  // TO BE
         *  astrolabe.surroundedPalaces(0).haveOneOf(["紫微"]);
         */
        this.isSurroundedOneOf = (indexOrName, stars) => this.surroundedPalaces(indexOrName).haveOneOf(stars);
        /**
         * @deprecated 此方法已在`v1.2.0`废弃，请用下列方法替换
         *
         * @example
         *  // AS IS
         *  astrolabe.notSurrounded(0, ["紫微"]);
         *
         *  // TO BE
         *  astrolabe.surroundedPalaces(0).notHave(["紫微"]);
         */
        this.notSurrounded = (indexOrName, stars) => this.surroundedPalaces(indexOrName).notHave(stars);
        this.gender = data.gender;
        this.solarDate = data.solarDate;
        this.lunarDate = data.lunarDate;
        this.chineseDate = data.chineseDate;
        this.rawDates = data.rawDates;
        this.time = data.time;
        this.timeRange = data.timeRange;
        this.sign = data.sign;
        this.zodiac = data.zodiac;
        this.earthlyBranchOfBodyPalace = data.earthlyBranchOfBodyPalace;
        this.earthlyBranchOfSoulPalace = data.earthlyBranchOfSoulPalace;
        this.soul = data.soul;
        this.body = data.body;
        this.fiveElementsClass = data.fiveElementsClass;
        this.palaces = data.palaces;
        this.copyright = data.copyright;
        return this;
    }
    use(plugin) {
        this.plugins.push(plugin);
        plugin.apply(this);
    }
}
exports.default = FunctionalAstrolabe;
(0, context_1.registerContextClass)(FunctionalAstrolabe.prototype);

},{"./context":92,"dayjs":94,"lunar-lite":8,"lunar-typescript":10,"../data":1,"../i18n":17,"../star":6,"../utils":89,"./analyzer":95,"./palace":16,"./FunctionalHoroscope":99,"./config":93,"../utils/validation":100,"../utils/toJSON":97}],
92:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindContext = exports.registerContextClass = void 0;
const i18n_1 = require("../i18n");
const config_1 = require("./config");
const functionalPrototypes = new WeakSet();
/**
 * 注册需要绑定排盘上下文的功能类原型，不依赖压缩后的类名。
 *
 * @internal
 * @version 2.6.2
 * @param prototype 功能类的原型对象
 */
const registerContextClass = (prototype) => {
    functionalPrototypes.add(prototype);
};
exports.registerContextClass = registerContextClass;
/**
 * 将功能对象及其返回的功能对象绑定到生成时的配置和语言。
 *
 * @internal
 * @version 2.6.2
 * @param root 需要绑定上下文的功能对象
 * @returns 原功能对象
 */
const bindContext = (root) => {
    const config = (0, config_1.getConfig)();
    const language = (0, i18n_1.getLanguage)();
    const bound = new WeakSet();
    const wrapped = new WeakSet();
    const bind = (value) => {
        if (!value || typeof value !== 'object' || bound.has(value))
            return;
        if (Array.isArray(value)) {
            bound.add(value);
            value.forEach(bind);
            return;
        }
        let prototype = Object.getPrototypeOf(value);
        while (prototype && !functionalPrototypes.has(prototype))
            prototype = Object.getPrototypeOf(prototype);
        if (!prototype)
            return;
        bound.add(value);
        const object = value;
        const keys = new Set([...Object.keys(object), ...Object.getOwnPropertyNames(prototype)]);
        keys.forEach((key) => {
            if (key === 'constructor' || key.startsWith('_') || key === 'plugins')
                return;
            const member = object[key];
            if (typeof member === 'function') {
                if (wrapped.has(member))
                    return;
                const method = (...args) => (0, config_1.withConfig)(config, () => (0, i18n_1.withLanguage)(language, () => {
                    const result = member.apply(value, args);
                    bind(result);
                    // 插件和重排可能新增方法或星曜。
                    bound.delete(value);
                    bind(value);
                    return result;
                }));
                wrapped.add(method);
                object[key] = method;
            }
            else {
                bind(member);
            }
        });
    };
    bind(root);
    return root;
};
exports.bindContext = bindContext;

},{"../i18n":17,"./config":93}],
93:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withConfig = exports.config = exports.resolveConfig = exports.resetConfig = exports.getConfig = void 0;
const i18n_1 = require("../i18n");
/**
 * 创建默认配置。
 * @internal
 * @version 2.6.2
 */
const defaults = () => ({
    mutagens: {},
    brightness: {},
    yearDivide: 'normal',
    horoscopeDivide: 'normal',
    ageDivide: 'normal',
    dayDivide: 'forward',
    algorithm: 'default',
});
/**
 * 复制配置表及其数组。
 * @internal
 * @version 2.6.2
 */
const cloneTable = (table) => {
    const result = {};
    Object.entries(table).forEach(([key, values]) => {
        if (values)
            result[key] = [...values];
    });
    return result;
};
/**
 * 创建完整配置的独立副本。
 * @internal
 * @version 2.6.2
 */
const clone = (value) => (Object.assign(Object.assign({}, value), { mutagens: cloneTable(value.mutagens), brightness: cloneTable(value.brightness) }));
let globalConfig = defaults();
let activeConfig;
/**
 * 获取配置的独立副本，修改返回值不会影响库。
 *
 * @version 2.3.0
 * @since 2.6.2 返回深拷贝
 * @returns 当前生效配置的独立副本
 */
const getConfig = () => clone(activeConfig !== null && activeConfig !== void 0 ? activeConfig : globalConfig);
exports.getConfig = getConfig;
/**
 * 将配置恢复为出厂默认值，并清除自定义四化和亮度表。
 * 已经生成的星盘不受影响。
 *
 * @version 2.6.2
 */
const resetConfig = () => {
    globalConfig = defaults();
};
exports.resetConfig = resetConfig;
/**
 * 将单次排盘配置合并到当前配置，返回独立副本。
 *
 * @internal
 * @version 2.6.2
 * @param options 配置覆盖项
 * @param base 基础配置，默认使用当前生效配置
 */
const resolveConfig = (options = {}, base = activeConfig !== null && activeConfig !== void 0 ? activeConfig : globalConfig) => {
    const result = clone(base);
    const choices = {
        yearDivide: ['normal', 'exact'],
        horoscopeDivide: ['normal', 'exact'],
        ageDivide: ['normal', 'birthday'],
        dayDivide: ['current', 'forward'],
        algorithm: ['default', 'zhongzhou'],
    };
    Object.keys(choices).forEach((key) => {
        const value = options[key];
        if (value !== undefined) {
            if (!choices[key].includes(value))
                throw new Error(`invalid ${key}.`);
            Object.assign(result, { [key]: value });
        }
    });
    if (options.mutagens) {
        Object.entries(options.mutagens).forEach(([key, stars]) => {
            result.mutagens[(0, i18n_1.kot)(key)] = stars.map((star) => (0, i18n_1.kot)(star));
        });
    }
    if (options.brightness) {
        Object.entries(options.brightness).forEach(([key, levels]) => {
            result.brightness[(0, i18n_1.kot)(key)] = levels.map((level) => (0, i18n_1.kot)(level));
        });
    }
    return result;
};
exports.resolveConfig = resolveConfig;
/**
 * 设置后续排盘的全局默认配置；不会修改已经生成的星盘。
 *
 * @version 2.3.0
 * @since 2.6.2 已有星盘保留生成时的配置
 * @param options 全局默认配置覆盖项
 */
const config = (options) => {
    globalConfig = (0, exports.resolveConfig)(options, globalConfig);
};
exports.config = config;
/**
 * 在同步计算中使用指定配置，嵌套调用和异常退出时恢复上一层上下文。
 *
 * @internal
 * @version 2.6.2
 * @param snapshot 当前计算使用的配置
 * @param calculate 同步计算方法
 */
const withConfig = (snapshot, calculate) => {
    const previous = activeConfig;
    activeConfig = snapshot;
    try {
        return calculate();
    }
    finally {
        activeConfig = previous;
    }
};
exports.withConfig = withConfig;

},{"../i18n":17}],
94:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = dayjs;
function dayjs(d) { const x = d instanceof Date ? d : new Date(d); return { hour: () => x.getHours() }; }

},{}],
95:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mutagensToStars = exports.notFlankedByStars = exports.isFlankedByOneOfStars = exports.isFlankedByStars = exports.notSurroundedByStars = exports.isSurroundedByOneOfStars = exports.isSurroundedByStars = exports.hasOneOfStars = exports.notHaveStars = exports.notHaveMutagenInPalce = exports.hasMutagenInPlace = exports.hasStars = exports.getPalace = exports.getFlankingPalaces = exports.getSurroundedPalaces = void 0;
const data_1 = require("../data");
const i18n_1 = require("../i18n");
const utils_1 = require("../utils");
const FunctionalSurpalaces_1 = require("./FunctionalSurpalaces");
const FunctionalFlankingPalaces_1 = require("./FunctionalFlankingPalaces");
const _concatStars = (...stars) => Array.from(stars)
    .reduce((prev, next) => {
    return [...prev, ...next];
}, [])
    .map((item) => (0, i18n_1.kot)(item.name));
const _includeAll = (allStarsInPalace, targetStars) => {
    const starKeys = targetStars.map((item) => (0, i18n_1.kot)(item));
    return starKeys.every((star) => allStarsInPalace.includes(star));
};
const _excludeAll = (allStarsInPalace, targetStars) => {
    const starKeys = targetStars.map((item) => (0, i18n_1.kot)(item));
    return starKeys.every((star) => !allStarsInPalace.includes(star));
};
const _includeOneOf = (allStarsInPalace, targetStars) => {
    const starKeys = targetStars.map((item) => (0, i18n_1.kot)(item));
    return starKeys.some((star) => allStarsInPalace.includes(star));
};
const _includeMutagen = (stars, mutagen) => {
    const mutagenKey = (0, i18n_1.kot)(mutagen);
    return stars.some((star) => star.mutagen && (0, i18n_1.kot)(star.mutagen) === mutagenKey);
};
const _getAllStarsInSurroundedPalaces = ({ target, opposite, wealth, career }) => _concatStars(target.majorStars, target.minorStars, target.adjectiveStars, opposite.majorStars, opposite.minorStars, opposite.adjectiveStars, wealth.majorStars, wealth.minorStars, wealth.adjectiveStars, career.majorStars, career.minorStars, career.adjectiveStars);
const _getAllStarsInFlankingPalaces = ({ previous, next }) => _concatStars(previous.majorStars, previous.minorStars, previous.adjectiveStars, next.majorStars, next.minorStars, next.adjectiveStars);
/**
 * 获取三方四正宫位，所谓三方四正就是传入的目标宫位，以及其对宫，财帛位和官禄位，总共四个宫位
 *
 * @version v1.1.0
 *
 * @param $ 星盘实例
 * @param indexOrName 宫位索引或者宫位名称
 * @returns 三方四正宫位
 */
const getSurroundedPalaces = ($, indexOrName) => {
    // 获取目标宫位
    const palace = (0, exports.getPalace)($, indexOrName);
    if (!palace) {
        throw new Error('indexOrName is inccorrect.');
    }
    // 获取目标宫位索引
    const palaceIndex = (0, utils_1.fixEarthlyBranchIndex)(palace.earthlyBranch);
    // 获取对宫
    const palace6 = (0, exports.getPalace)($, (0, utils_1.fixIndex)(palaceIndex + 6));
    // 官禄位
    const palace4 = (0, exports.getPalace)($, (0, utils_1.fixIndex)(palaceIndex + 4));
    // 财帛位
    const palace8 = (0, exports.getPalace)($, (0, utils_1.fixIndex)(palaceIndex + 8));
    if (!palace4 || !palace6 || !palace8) {
        throw new Error('indexOrName is inccorrect.');
    }
    return new FunctionalSurpalaces_1.FunctionalSurpalaces({
        target: palace,
        wealth: palace8,
        opposite: palace6,
        career: palace4,
    });
};
exports.getSurroundedPalaces = getSurroundedPalaces;
/**
 * 获取目标宫位的功能夹宫对象，即目标宫位前后相邻的两个宫位。
 *
 * 返回对象的 `previous` 属性是前一宫，`next` 属性是后一宫，并提供
 * `have()`、`notHave()`、`haveOneOf()`、`haveMutagen()`、
 * `notHaveMutagen()` 和 `toJSON()` 方法。十二宫首尾相连，因此索引为
 * `0` 的前一宫是索引 `11`，索引为 `11` 的后一宫是索引 `0`。
 *
 * @version 2.6.0
 *
 * @param $ 星盘实例
 * @param indexOrName 目标宫位索引或者宫位名称
 * @returns 包含前一宫、后一宫及夹宫分析方法的功能夹宫对象
 */
const getFlankingPalaces = ($, indexOrName) => {
    const palace = (0, exports.getPalace)($, indexOrName);
    if (!palace) {
        throw new Error('invalid palace index or name.');
    }
    const previousPalace = (0, exports.getPalace)($, (0, utils_1.fixIndex)(palace.index - 1));
    const nextPalace = (0, exports.getPalace)($, (0, utils_1.fixIndex)(palace.index + 1));
    if (!previousPalace || !nextPalace) {
        throw new Error('invalid palace index or name.');
    }
    return new FunctionalFlankingPalaces_1.FunctionalFlankingPalaces({ previous: previousPalace, next: nextPalace });
};
exports.getFlankingPalaces = getFlankingPalaces;
/**
 * 获取星盘的某一个宫位
 *
 * @version v1.0.0
 *
 * @param $ 星盘实例
 * @param indexOrName 宫位索引或者宫位名称
 * @returns 宫位实例
 */
const getPalace = ($, indexOrName) => {
    let palace;
    if (typeof indexOrName === 'number') {
        if (indexOrName < 0 || indexOrName > 11) {
            throw new Error('invalid palace index.');
        }
        palace = $.palaces[indexOrName];
    }
    else {
        // 宫位与星曜的译名可能相同，例如韩语「복덕」同时表示福德宫和天德星。
        const palaceKey = (0, i18n_1.kot)(indexOrName, 'Palace');
        palace = $.palaces.find((item) => {
            if (palaceKey === 'originalPalace' && item.isOriginalPalace) {
                return item;
            }
            if (palaceKey === 'bodyPalace' && item.isBodyPalace) {
                return item;
            }
            if ((0, i18n_1.kot)(item.name, 'Palace') === palaceKey) {
                return item;
            }
        });
    }
    palace === null || palace === void 0 ? void 0 : palace.setAstrolabe($);
    return palace;
};
exports.getPalace = getPalace;
/**
 * 判断某个宫位内是否有传入的星耀，要所有星耀都在宫位内才会返回true
 *
 * @version v1.0.0
 *
 * @param $ 宫位实例
 * @param stars 星耀
 * @returns true | false
 */
const hasStars = ($, stars) => {
    const allStarsInPalace = _concatStars($.majorStars, $.minorStars, $.adjectiveStars);
    return _includeAll(allStarsInPalace, stars);
};
exports.hasStars = hasStars;
/**
 * 判断指定宫位内是否有生年四化
 *
 * @version v1.2.0
 *
 * @param $ 宫位实例
 * @param mutagen 四化名称【禄｜权｜科｜忌】
 * @returns true | false
 */
const hasMutagenInPlace = ($, mutagen) => {
    const allStarsInPalace = [...$.majorStars, ...$.minorStars];
    return _includeMutagen(allStarsInPalace, mutagen);
};
exports.hasMutagenInPlace = hasMutagenInPlace;
/**
 * 判断指定宫位内是否没有生年四化
 *
 * @version v1.2.0
 *
 * @param $ 宫位实例
 * @param mutagen 四化名称【禄｜权｜科｜忌】
 * @returns true | false
 */
const notHaveMutagenInPalce = ($, mutagen) => {
    return !(0, exports.hasMutagenInPlace)($, mutagen);
};
exports.notHaveMutagenInPalce = notHaveMutagenInPalce;
/**
 * 判断某个宫位内是否有传入的星耀，要所有星耀都不在宫位内才会返回true
 *
 * @version v1.0.0
 *
 * @param $ 宫位实例
 * @param stars 星耀
 * @returns true | false
 */
const notHaveStars = ($, stars) => {
    const allStarsInPalace = _concatStars($.majorStars, $.minorStars, $.adjectiveStars);
    return _excludeAll(allStarsInPalace, stars);
};
exports.notHaveStars = notHaveStars;
/**
 * 判断某个宫位内是否有传入星耀的其中一个，只要命中一个就会返回true
 *
 * @version v1.0.0
 *
 * @param $ 宫位实例
 * @param stars 星耀
 * @returns true | false
 */
const hasOneOfStars = ($, stars) => {
    const allStarsInPalace = _concatStars($.majorStars, $.minorStars, $.adjectiveStars);
    return _includeOneOf(allStarsInPalace, stars);
};
exports.hasOneOfStars = hasOneOfStars;
/**
 * 判断某一个宫位三方四正是否包含目标星耀，必须要全部包含才会返回true
 *
 * @param $ 三方四正的实例
 * @param stars 星耀名称数组
 * @returns true | false
 */
const isSurroundedByStars = ($, stars) => {
    const allStarsInPalace = _getAllStarsInSurroundedPalaces($);
    return _includeAll(allStarsInPalace, stars);
};
exports.isSurroundedByStars = isSurroundedByStars;
/**
 * 判断三方四正内是否有传入星耀的其中一个，只要命中一个就会返回true
 *
 * @param $ 三方四正的实例
 * @param stars 星耀名称数组
 * @returns true | false
 */
const isSurroundedByOneOfStars = ($, stars) => {
    const allStarsInPalace = _getAllStarsInSurroundedPalaces($);
    return _includeOneOf(allStarsInPalace, stars);
};
exports.isSurroundedByOneOfStars = isSurroundedByOneOfStars;
/**
 * 判断某一个宫位三方四正是否不含目标星耀，必须要全部都不在三方四正内含才会返回true
 *
 * @param $ 三方四正的实例
 * @param stars 星耀名称数组
 * @returns true | false
 */
const notSurroundedByStars = ($, stars) => {
    const allStarsInPalace = _getAllStarsInSurroundedPalaces($);
    return _excludeAll(allStarsInPalace, stars);
};
exports.notSurroundedByStars = notSurroundedByStars;
/**
 * 判断两个夹宫内是否包含全部目标星曜。
 *
 * @version 2.6.0
 *
 * @param $ 功能夹宫实例
 * @param stars 星曜名称数组
 * @returns 是否包含全部目标星曜
 */
const isFlankedByStars = ($, stars) => _includeAll(_getAllStarsInFlankingPalaces($), stars);
exports.isFlankedByStars = isFlankedByStars;
/**
 * 判断两个夹宫内是否包含任意一颗目标星曜。
 *
 * @version 2.6.0
 *
 * @param $ 功能夹宫实例
 * @param stars 星曜名称数组
 * @returns 是否包含任意一颗目标星曜
 */
const isFlankedByOneOfStars = ($, stars) => _includeOneOf(_getAllStarsInFlankingPalaces($), stars);
exports.isFlankedByOneOfStars = isFlankedByOneOfStars;
/**
 * 判断两个夹宫内是否完全不包含目标星曜。
 *
 * @version 2.6.0
 *
 * @param $ 功能夹宫实例
 * @param stars 星曜名称数组
 * @returns 是否完全不包含目标星曜
 */
const notFlankedByStars = ($, stars) => _excludeAll(_getAllStarsInFlankingPalaces($), stars);
exports.notFlankedByStars = notFlankedByStars;
const mutagensToStars = (heavenlyStem, mutagens) => {
    const muts = Array.isArray(mutagens) ? mutagens : [mutagens];
    const stars = [];
    const mutagenStars = (0, utils_1.getMutagensByHeavenlyStem)(heavenlyStem);
    muts.forEach((withMutagen) => {
        const mutagenIndex = data_1.MUTAGEN.indexOf((0, i18n_1.kot)(withMutagen));
        if (!mutagenStars[mutagenIndex]) {
            return;
        }
        stars.push(mutagenStars[mutagenIndex]);
    });
    return stars;
};
exports.mutagensToStars = mutagensToStars;

},{"../data":1,"../i18n":17,"../utils":89,"./FunctionalSurpalaces":96,"./FunctionalFlankingPalaces":98}],
96:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionalSurpalaces = void 0;
const context_1 = require("./context");
const analyzer_1 = require("./analyzer");
const toJSON_1 = require("../utils/toJSON");
class FunctionalSurpalaces {
    constructor({ target, opposite, wealth, career }) {
        this.toJSON = () => (0, toJSON_1.serialize)(this);
        this.have = (stars) => (0, analyzer_1.isSurroundedByStars)(this, stars);
        this.notHave = (stars) => (0, analyzer_1.notSurroundedByStars)(this, stars);
        this.haveOneOf = (stars) => (0, analyzer_1.isSurroundedByOneOfStars)(this, stars);
        this.haveMutagen = (mutagen) => this.target.hasMutagen(mutagen) ||
            this.opposite.hasMutagen(mutagen) ||
            this.wealth.hasMutagen(mutagen) ||
            this.career.hasMutagen(mutagen);
        this.notHaveMutagen = (mutagen) => !this.haveMutagen(mutagen);
        this.target = target;
        this.opposite = opposite;
        this.wealth = wealth;
        this.career = career;
    }
}
exports.FunctionalSurpalaces = FunctionalSurpalaces;
(0, context_1.registerContextClass)(FunctionalSurpalaces.prototype);

},{"./context":92,"./analyzer":95,"../utils/toJSON":97}],
97:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serialize = void 0;
const _clone = (value, references) => {
    if (typeof value === 'function' ||
        typeof value === 'undefined' ||
        typeof value === 'symbol' ||
        typeof value === 'bigint') {
        return undefined;
    }
    if (value === null || typeof value !== 'object') {
        return typeof value === 'number' && !Number.isFinite(value) ? null : value;
    }
    if (references.has(value)) {
        return undefined;
    }
    references.add(value);
    if (Array.isArray(value)) {
        const result = value.map((item) => { var _a; return (_a = _clone(item, references)) !== null && _a !== void 0 ? _a : null; });
        references.delete(value);
        return result;
    }
    const result = {};
    Object.entries(value).forEach(([key, item]) => {
        if (key === 'plugins' || key === 'astrolabe' || key.startsWith('_')) {
            return;
        }
        const clonedItem = _clone(item, references);
        if (typeof clonedItem !== 'undefined') {
            // 避免特殊属性名（例如 __proto__）改变结果对象的原型。
            Object.defineProperty(result, key, {
                value: clonedItem,
                enumerable: true,
                configurable: true,
                writable: true,
            });
        }
    });
    references.delete(value);
    return result;
};
/**
 * 将功能类实例转换为普通 JSON 对象。
 *
 * @param instance 功能类实例
 * 循环引用会被忽略，数组中的循环项会按照 JSON 规则转换为 null。
 * 转换过程不会调用嵌套对象的 toJSON 方法。
 *
 * @returns 不包含方法、循环引用和运行时引用的普通对象
 */
const serialize = (instance) => _clone(instance, new WeakSet());
exports.serialize = serialize;

},{}],
98:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionalFlankingPalaces = void 0;
const context_1 = require("./context");
const toJSON_1 = require("../utils/toJSON");
const analyzer_1 = require("./analyzer");
/**
 * 功能夹宫类。
 *
 * @version 2.6.0
 */
class FunctionalFlankingPalaces {
    constructor({ previous, next }) {
        this.toJSON = () => (0, toJSON_1.serialize)(this);
        this.have = (stars) => (0, analyzer_1.isFlankedByStars)(this, stars);
        this.notHave = (stars) => (0, analyzer_1.notFlankedByStars)(this, stars);
        this.haveOneOf = (stars) => (0, analyzer_1.isFlankedByOneOfStars)(this, stars);
        this.haveMutagen = (mutagen) => this.previous.hasMutagen(mutagen) || this.next.hasMutagen(mutagen);
        this.notHaveMutagen = (mutagen) => !this.haveMutagen(mutagen);
        this.previous = previous;
        this.next = next;
    }
}
exports.FunctionalFlankingPalaces = FunctionalFlankingPalaces;
(0, context_1.registerContextClass)(FunctionalFlankingPalaces.prototype);

},{"./context":92,"../utils/toJSON":97,"./analyzer":95}],
99:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const context_1 = require("./context");
const i18n_1 = require("../i18n");
const utils_1 = require("../utils");
const data_1 = require("../data");
const toJSON_1 = require("../utils/toJSON");
const _getHoroscopePalaceIndex = ($, scope, palaceName) => {
    var _a, _b;
    if (scope === 'origin') {
        return (_b = (_a = $.astrolabe.palace(palaceName)) === null || _a === void 0 ? void 0 : _a.index) !== null && _b !== void 0 ? _b : -1;
    }
    const palaceKey = (0, i18n_1.kot)(palaceName, 'Palace');
    return $[scope].palaceNames.findIndex((name) => (0, i18n_1.kot)(name, 'Palace') === palaceKey);
};
class FunctionalHoroscope {
    constructor(data, astrolabe) {
        this.toJSON = () => (0, toJSON_1.serialize)(this);
        this.agePalace = () => {
            return this.astrolabe.palace(this.age.index);
        };
        this.palace = (palaceName, scope) => {
            const targetPalaceIndex = _getHoroscopePalaceIndex(this, scope, palaceName);
            return targetPalaceIndex < 0 ? undefined : this.astrolabe.palace(targetPalaceIndex);
        };
        this.surroundPalaces = (palaceName, scope) => {
            const targetPalaceIndex = _getHoroscopePalaceIndex(this, scope, palaceName);
            return targetPalaceIndex < 0 ? undefined : this.astrolabe.surroundedPalaces(targetPalaceIndex);
        };
        this.hasHoroscopeStars = (palaceName, scope, horoscopeStar) => {
            if (!this.decadal.stars || !this.yearly.stars) {
                return false;
            }
            const palaceIndex = _getHoroscopePalaceIndex(this, scope, palaceName);
            if (palaceIndex < 0) {
                return false;
            }
            const stars = (0, utils_1.mergeStars)(this.decadal.stars, this.yearly.stars)[palaceIndex];
            const starKeys = stars.map((item) => (0, i18n_1.kot)(item.name));
            const horoscopeStarKeys = horoscopeStar.map((item) => (0, i18n_1.kot)(item));
            return horoscopeStarKeys.every((star) => starKeys.includes(star));
        };
        this.notHaveHoroscopeStars = (palaceName, scope, horoscopeStar) => {
            if (!this.decadal.stars || !this.yearly.stars) {
                return false;
            }
            const palaceIndex = _getHoroscopePalaceIndex(this, scope, palaceName);
            if (palaceIndex < 0) {
                return false;
            }
            const stars = (0, utils_1.mergeStars)(this.decadal.stars, this.yearly.stars)[palaceIndex];
            const starKeys = stars.map((item) => (0, i18n_1.kot)(item.name));
            const horoscopeStarKeys = horoscopeStar.map((item) => (0, i18n_1.kot)(item));
            return horoscopeStarKeys.every((star) => !starKeys.includes(star));
        };
        this.hasOneOfHoroscopeStars = (palaceName, scope, horoscopeStar) => {
            if (!this.decadal.stars || !this.yearly.stars) {
                return false;
            }
            const palaceIndex = _getHoroscopePalaceIndex(this, scope, palaceName);
            if (palaceIndex < 0) {
                return false;
            }
            const stars = (0, utils_1.mergeStars)(this.decadal.stars, this.yearly.stars)[palaceIndex];
            const starKeys = stars.map((item) => (0, i18n_1.kot)(item.name));
            const horoscopeStarKeys = horoscopeStar.map((item) => (0, i18n_1.kot)(item));
            return horoscopeStarKeys.some((star) => starKeys.includes(star));
        };
        this.hasHoroscopeMutagen = (palaceName, scope, horoscopeMutagen) => {
            var _a, _b, _c, _d;
            if (scope === 'origin') {
                return false;
            }
            const palaceIndex = _getHoroscopePalaceIndex(this, scope, palaceName);
            if (palaceIndex < 0) {
                return false;
            }
            const majorStars = (_b = (_a = this.astrolabe.palace(palaceIndex)) === null || _a === void 0 ? void 0 : _a.majorStars) !== null && _b !== void 0 ? _b : [];
            const minorStars = (_d = (_c = this.astrolabe.palace(palaceIndex)) === null || _c === void 0 ? void 0 : _c.minorStars) !== null && _d !== void 0 ? _d : [];
            const stars = (0, utils_1.mergeStars)([majorStars], [minorStars])[0].map((star) => (0, i18n_1.kot)(star.name));
            const mutagenIndex = data_1.MUTAGEN.indexOf((0, i18n_1.kot)(horoscopeMutagen));
            return stars.includes((0, i18n_1.kot)(this[scope].mutagen[mutagenIndex]));
        };
        this.lunarDate = data.lunarDate;
        this.solarDate = data.solarDate;
        this.decadal = data.decadal;
        this.age = data.age;
        this.yearly = data.yearly;
        this.monthly = data.monthly;
        this.daily = data.daily;
        this.hourly = data.hourly;
        this.astrolabe = astrolabe;
        return this;
    }
}
exports.default = FunctionalHoroscope;
(0, context_1.registerContextClass)(FunctionalHoroscope.prototype);

},{"./context":92,"../i18n":17,"../utils":89,"../data":1,"../utils/toJSON":97}],
100:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBoolean = exports.validateGender = exports.validateTimeIndex = exports.validateDate = void 0;
const lunar_typescript_1 = require("lunar-typescript");
const i18n_1 = require("../i18n");
/**
 * 校验公历/农历 1～9999 年的真实日期，不接受自动滚动到下个月的无效日期。
 *
 * @internal
 * @version 2.6.2
 * @param date 待校验的日期
 * @param type 日期类型，默认为阳历
 * @param isLeapMonth 是否为农历闰月
 */
const validateDate = (date, type = 'solar', isLeapMonth = false) => {
    let parts;
    if (date instanceof Date) {
        if (!Number.isFinite(date.getTime()))
            throw new Error('invalid date.');
        parts = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
    }
    else {
        if (typeof date !== 'string' || !/^\d{1,4}([-/.])\d{1,2}\1\d{1,2}(?: \d{1,2}:\d{1,2}(?::\d{1,2})?)?$/.test(date)) {
            throw new Error('invalid date.');
        }
        const [day, time] = date.split(' ');
        parts = day.split(/[-/.]/).map(Number);
        if (time) {
            const [hour, minute, second = 0] = time.split(':').map(Number);
            if (hour > 23 || minute > 59 || second > 59)
                throw new Error('invalid time.');
        }
    }
    const [year, month, day] = parts;
    if (year < 1 || year > 9999 || month < 1 || month > 12 || day < 1)
        throw new Error('invalid date.');
    if (type === 'lunar') {
        const lunarYear = lunar_typescript_1.LunarYear.fromYear(year);
        const leap = isLeapMonth && lunarYear.getLeapMonth() === month;
        const lunarMonth = lunarYear.getMonth(leap ? -month : month);
        if (!lunarMonth || day > lunarMonth.getDayCount())
            throw new Error('invalid lunar date.');
    }
    else {
        // 与底层历法一致：历史日期使用儒略历/格里历切换规则。
        if (year === 1582 && month === 10 && day >= 5 && day <= 14)
            throw new Error('invalid solar date.');
        const leap = lunar_typescript_1.SolarUtil.isLeapYear(year);
        const days = [31, leap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (day > days[month - 1])
            throw new Error('invalid solar date.');
    }
};
exports.validateDate = validateDate;
/**
 * 校验时辰为 0～12 的整数。
 *
 * @internal
 * @version 2.6.2
 */
const validateTimeIndex = (index) => {
    if (!Number.isInteger(index) || index < 0 || index > 12)
        throw new Error('invalid timeIndex: expected an integer from 0 to 12.');
};
exports.validateTimeIndex = validateTimeIndex;
/**
 * 校验已支持语言中的有效性别。
 *
 * @internal
 * @version 2.6.2
 */
const validateGender = (gender) => {
    if (typeof gender !== 'string' || !['male', 'female'].includes((0, i18n_1.kot)(gender)))
        throw new Error('invalid gender.');
};
exports.validateGender = validateGender;
/**
 * 校验布尔选项，不进行隐式类型转换。
 *
 * @internal
 * @version 2.6.2
 */
const validateBoolean = (value, name) => {
    if (typeof value !== 'boolean')
        throw new Error(`invalid ${name}: expected a boolean.`);
};
exports.validateBoolean = validateBoolean;

},{"lunar-typescript":10,"../i18n":17}],
101:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const context_1 = require("./context");
const analyzer_1 = require("./analyzer");
const toJSON_1 = require("../utils/toJSON");
/**
 * 宫位类。
 *
 * 文档地址：https://docs.iztro.com/posts/palace.html#functionalastrolabe
 */
class FunctionalPalace {
    constructor(data) {
        this.toJSON = () => (0, toJSON_1.serialize)(this);
        this.has = (stars) => (0, analyzer_1.hasStars)(this, stars);
        this.notHave = (stars) => (0, analyzer_1.notHaveStars)(this, stars);
        this.hasOneOf = (stars) => (0, analyzer_1.hasOneOfStars)(this, stars);
        this.hasMutagen = (mutagen) => (0, analyzer_1.hasMutagenInPlace)(this, mutagen);
        this.notHaveMutagen = (mutagen) => (0, analyzer_1.notHaveMutagenInPalce)(this, mutagen);
        this.isEmpty = (excludeStars) => {
            var _a;
            if ((_a = this.majorStars) === null || _a === void 0 ? void 0 : _a.filter((star) => star.type === 'major').length) {
                return false;
            }
            if ((excludeStars === null || excludeStars === void 0 ? void 0 : excludeStars.length) && this.hasOneOf(excludeStars)) {
                return false;
            }
            return true;
        };
        this.setAstrolabe = (astro) => (this._astrolabe = astro);
        this.astrolabe = () => this._astrolabe;
        this.fliesTo = (to, withMutagens) => {
            var _a;
            const toPalace = (_a = this.astrolabe()) === null || _a === void 0 ? void 0 : _a.palace(to);
            if (!toPalace) {
                return false;
            }
            const { heavenlyStem } = this;
            const stars = (0, analyzer_1.mutagensToStars)(heavenlyStem, withMutagens);
            if (!stars || !stars.length) {
                return false;
            }
            return toPalace.has(stars);
        };
        this.fliesOneOfTo = (to, withMutagens) => {
            var _a;
            const toPalace = (_a = this.astrolabe()) === null || _a === void 0 ? void 0 : _a.palace(to);
            if (!toPalace) {
                return false;
            }
            const { heavenlyStem } = this;
            const stars = (0, analyzer_1.mutagensToStars)(heavenlyStem, withMutagens);
            if (!stars || !stars.length) {
                return true;
            }
            return toPalace.hasOneOf(stars);
        };
        this.notFlyTo = (to, withMutagens) => {
            var _a;
            const toPalace = (_a = this.astrolabe()) === null || _a === void 0 ? void 0 : _a.palace(to);
            if (!toPalace) {
                return false;
            }
            const { heavenlyStem } = this;
            const stars = (0, analyzer_1.mutagensToStars)(heavenlyStem, withMutagens);
            if (!stars || !stars.length) {
                return true;
            }
            return toPalace.notHave(stars);
        };
        this.selfMutaged = (withMutagens) => {
            const { heavenlyStem } = this;
            const stars = (0, analyzer_1.mutagensToStars)(heavenlyStem, withMutagens);
            return this.has(stars);
        };
        this.selfMutagedOneOf = (withMutagens) => {
            let muts = [];
            if (!withMutagens || !withMutagens.length) {
                muts = ['禄', '权', '科', '忌'];
            }
            else {
                muts = withMutagens;
            }
            const { heavenlyStem } = this;
            const stars = (0, analyzer_1.mutagensToStars)(heavenlyStem, muts);
            return this.hasOneOf(stars);
        };
        this.notSelfMutaged = (withMutagens) => {
            let muts = [];
            if (!withMutagens || !withMutagens.length) {
                muts = ['禄', '权', '科', '忌'];
            }
            else {
                muts = withMutagens;
            }
            const { heavenlyStem } = this;
            const stars = (0, analyzer_1.mutagensToStars)(heavenlyStem, muts);
            return this.notHave(stars);
        };
        this.mutagedPlaces = () => {
            const { heavenlyStem } = this;
            const astrolabe = this.astrolabe();
            if (!astrolabe) {
                return [];
            }
            const stars = (0, analyzer_1.mutagensToStars)(heavenlyStem, ['禄', '权', '科', '忌']);
            return stars.map((star) => astrolabe.star(star).palace());
        };
        this.index = data.index;
        this.name = data.name;
        this.isBodyPalace = data.isBodyPalace;
        this.isOriginalPalace = data.isOriginalPalace;
        this.heavenlyStem = data.heavenlyStem;
        this.earthlyBranch = data.earthlyBranch;
        this.majorStars = data.majorStars;
        this.minorStars = data.minorStars;
        this.adjectiveStars = data.adjectiveStars;
        this.changsheng12 = data.changsheng12;
        this.boshi12 = data.boshi12;
        this.jiangqian12 = data.jiangqian12;
        this.suiqian12 = data.suiqian12;
        this.decadal = data.decadal;
        this.ages = data.ages;
        return this;
    }
}
exports.default = FunctionalPalace;
(0, context_1.registerContextClass)(FunctionalPalace.prototype);

},{"./context":92,"./analyzer":95,"../utils/toJSON":97}],
102:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const context_1 = require("../astro/context");
const i18n_1 = require("../i18n");
const toJSON_1 = require("../utils/toJSON");
/**
 * 星耀类。
 *
 * 文档地址：https://docs.iztro.com/posts/star.html
 */
class FunctionalStar {
    constructor(data) {
        this.toJSON = () => (0, toJSON_1.serialize)(this);
        this.oppositePalace = () => {
            if (!this._palace || !this._astrolabe) {
                return undefined;
            }
            return this._astrolabe.surroundedPalaces(this._palace.name).opposite;
        };
        this.setPalace = (p) => {
            this._palace = p;
        };
        this.setAstrolabe = (a) => {
            this._astrolabe = a;
        };
        this.palace = () => this._palace;
        this.surroundedPalaces = () => {
            var _a;
            if (!this._palace) {
                return undefined;
            }
            return (_a = this._astrolabe) === null || _a === void 0 ? void 0 : _a.surroundedPalaces(this._palace.name);
        };
        this.withMutagen = (mutagen) => {
            if (Array.isArray(mutagen)) {
                return mutagen.some((mtg) => this.mutagen && (0, i18n_1.kot)(mtg) === (0, i18n_1.kot)(this.mutagen));
            }
            return !!this.mutagen && (0, i18n_1.kot)(mutagen) === (0, i18n_1.kot)(this.mutagen);
        };
        this.withBrightness = (brightness) => {
            if (Array.isArray(brightness)) {
                return brightness.some((brit) => this.brightness != undefined && (0, i18n_1.kot)(brit) === (0, i18n_1.kot)(this.brightness));
            }
            return !!this.brightness && (0, i18n_1.kot)(brightness) === (0, i18n_1.kot)(this.brightness);
        };
        this.name = data.name;
        this.type = data.type;
        this.scope = data.scope;
        this.brightness = data.brightness;
        this.mutagen = data.mutagen;
        return this;
    }
}
exports.default = FunctionalStar;
(0, context_1.registerContextClass)(FunctionalStar.prototype);

},{"../astro/context":92,"../i18n":17,"../utils/toJSON":97}],
103:[function(require,module,exports){"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMajorStar = void 0;
const lunar_lite_1 = require("lunar-lite");
const _1 = require(".");
const i18n_1 = require("../i18n");
const utils_1 = require("../utils");
const FunctionalStar_1 = __importDefault(require("./FunctionalStar"));
const location_1 = require("./location");
const astro_1 = require("../astro");
/**
 * 安主星，寅宫下标为0，若下标对应的数组为空数组则表示没有星耀
 *
 * 安紫微诸星诀
 * - 紫微逆去天机星，隔一太阳武曲辰，
 * - 连接天同空二宫，廉贞居处方是真。
 *
 * 安天府诸星诀
 * - 天府顺行有太阴，贪狼而后巨门临，
 * - 随来天相天梁继，七杀空三是破军。
 *
 * @param {AstrolabeParam} param 通用排盘参数
 * @returns {Array<Star[]>} 从寅宫开始每一个宫的星耀
 */
const getMajorStar = (param) => {
    const { solarDate, timeIndex } = param;
    const { ziweiIndex, tianfuIndex } = (0, location_1.getStartIndex)(param);
    const { yearly } = (0, lunar_lite_1.getHeavenlyStemAndEarthlyBranchBySolarDate)(solarDate, timeIndex, {
        year: (0, astro_1.getConfig)().yearDivide,
    });
    const stars = (0, _1.initStars)();
    const ziweiGroup = [
        'ziweiMaj',
        'tianjiMaj',
        '',
        'taiyangMaj',
        'wuquMaj',
        'tiantongMaj',
        '',
        '',
        'lianzhenMaj',
    ];
    const tianfuGroup = [
        'tianfuMaj',
        'taiyinMaj',
        'tanlangMaj',
        'jumenMaj',
        'tianxiangMaj',
        'tianliangMaj',
        'qishaMaj',
        '',
        '',
        '',
        'pojunMaj',
    ];
    ziweiGroup.forEach((s, i) => {
        // 安紫微星系，起始宫逆时针安
        if (s !== '') {
            stars[(0, utils_1.fixIndex)(ziweiIndex - i)].push(new FunctionalStar_1.default({
                name: (0, i18n_1.t)(s),
                type: 'major',
                scope: 'origin',
                brightness: (0, utils_1.getBrightness)((0, i18n_1.t)(s), (0, utils_1.fixIndex)(ziweiIndex - i)),
                mutagen: (0, utils_1.getMutagen)((0, i18n_1.t)(s), yearly[0]),
            }));
        }
    });
    tianfuGroup.forEach((s, i) => {
        if (s !== '') {
            stars[(0, utils_1.fixIndex)(tianfuIndex + i)].push(new FunctionalStar_1.default({
                name: (0, i18n_1.t)(s),
                type: 'major',
                scope: 'origin',
                brightness: (0, utils_1.getBrightness)((0, i18n_1.t)(s), (0, utils_1.fixIndex)(tianfuIndex + i)),
                mutagen: (0, utils_1.getMutagen)((0, i18n_1.t)(s), yearly[0]),
            }));
        }
    });
    return stars;
};
exports.getMajorStar = getMajorStar;

},{"lunar-lite":8,".":6,"../i18n":17,"../utils":89,"./FunctionalStar":102,"./location":7,"../astro":15}],
104:[function(require,module,exports){"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMinorStar = void 0;
const lunar_lite_1 = require("lunar-lite");
const _1 = require(".");
const i18n_1 = require("../i18n");
const utils_1 = require("../utils");
const FunctionalStar_1 = __importDefault(require("./FunctionalStar"));
const location_1 = require("./location");
const astro_1 = require("../astro");
/**
 * 安14辅星，寅宫下标为0，若下标对应的数组为空数组则表示没有星耀
 *
 * @param solarDateStr 阳历日期字符串
 * @param timeIndex 时辰索引【0～12】
 * @param fixLeap 是否修复闰月，假如当月不是闰月则不生效
 * @returns 14辅星
 */
const getMinorStar = (solarDateStr, timeIndex, fixLeap) => {
    const stars = (0, _1.initStars)();
    const { yearly } = (0, lunar_lite_1.getHeavenlyStemAndEarthlyBranchBySolarDate)(solarDateStr, timeIndex, {
        year: (0, astro_1.getConfig)().yearDivide,
    });
    const monthIndex = (0, utils_1.fixLunarMonthIndex)(solarDateStr, timeIndex, fixLeap);
    // 此处获取到的是索引，下标是从0开始的，所以需要加1
    const { zuoIndex, youIndex } = (0, location_1.getZuoYouIndex)(monthIndex + 1);
    const { changIndex, quIndex } = (0, location_1.getChangQuIndex)(timeIndex);
    const { kuiIndex, yueIndex } = (0, location_1.getKuiYueIndex)(yearly[0]);
    const { huoIndex, lingIndex } = (0, location_1.getHuoLingIndex)(yearly[1], timeIndex);
    const { kongIndex, jieIndex } = (0, location_1.getKongJieIndex)(timeIndex);
    const { luIndex, yangIndex, tuoIndex, maIndex } = (0, location_1.getLuYangTuoMaIndex)(yearly[0], yearly[1]);
    stars[zuoIndex].push(new FunctionalStar_1.default({
        name: (0, i18n_1.t)('zuofuMin'),
        type: 'soft',
        scope: 'origin',
        brightness: (0, utils_1.getBrightness)('左辅', zuoIndex),
        mutagen: (0, utils_1.getMutagen)('左辅', yearly[0]),
    }));
    stars[youIndex].push(new FunctionalStar_1.default({
        name: (0, i18n_1.t)('youbiMin'),
        type: 'soft',
        scope: 'origin',
        brightness: (0, utils_1.getBrightness)('右弼', youIndex),
        mutagen: (0, utils_1.getMutagen)('右弼', yearly[0]),
    }));
    stars[changIndex].push(new FunctionalStar_1.default({
        name: (0, i18n_1.t)('wenchangMin'),
        type: 'soft',
        scope: 'origin',
        brightness: (0, utils_1.getBrightness)('文昌', changIndex),
        mutagen: (0, utils_1.getMutagen)('文昌', yearly[0]),
    }));
    stars[quIndex].push(new FunctionalStar_1.default({
        name: (0, i18n_1.t)('wenquMin'),
        type: 'soft',
        scope: 'origin',
        brightness: (0, utils_1.getBrightness)('文曲', quIndex),
        mutagen: (0, utils_1.getMutagen)('文曲', yearly[0]),
    }));
    stars[kuiIndex].push(new FunctionalStar_1.default({
        name: (0, i18n_1.t)('tiankuiMin'),
        type: 'soft',
        scope: 'origin',
        brightness: (0, utils_1.getBrightness)('天魁', kuiIndex),
    }));
    stars[yueIndex].push(new FunctionalStar_1.default({
        name: (0, i18n_1.t)('tianyueMin'),
        type: 'soft',
        scope: 'origin',
        brightness: (0, utils_1.getBrightness)('天钺', yueIndex),
    }));
    stars[luIndex].push(new FunctionalStar_1.default({
        name: (0, i18n_1.t)('lucunMin'),
        type: 'lucun',
        scope: 'origin',
        brightness: (0, utils_1.getBrightness)('禄存', luIndex),
    }));
    stars[maIndex].push(new FunctionalStar_1.default({
        name: (0, i18n_1.t)('tianmaMin'),
        type: 'tianma',
        scope: 'origin',
        brightness: (0, utils_1.getBrightness)('天马', maIndex),
    }));
    stars[kongIndex].push(new FunctionalStar_1.default({
        name: (0, i18n_1.t)('dikongMin'),
        type: 'tough',
        scope: 'origin',
        brightness: (0, utils_1.getBrightness)('地空', kongIndex),
    }));
    stars[jieIndex].push(new FunctionalStar_1.default({
        name: (0, i18n_1.t)('dijieMin'),
        type: 'tough',
        scope: 'origin',
        brightness: (0, utils_1.getBrightness)('地劫', jieIndex),
    }));
    stars[huoIndex].push(new FunctionalStar_1.default({
        name: (0, i18n_1.t)('huoxingMin'),
        type: 'tough',
        scope: 'origin',
        brightness: (0, utils_1.getBrightness)('火星', huoIndex),
    }));
    stars[lingIndex].push(new FunctionalStar_1.default({
        name: (0, i18n_1.t)('lingxingMin'),
        type: 'tough',
        scope: 'origin',
        brightness: (0, utils_1.getBrightness)('铃星', lingIndex),
    }));
    stars[yangIndex].push(new FunctionalStar_1.default({
        name: (0, i18n_1.t)('qingyangMin'),
        type: 'tough',
        scope: 'origin',
        brightness: (0, utils_1.getBrightness)('擎羊', yangIndex),
    }));
    stars[tuoIndex].push(new FunctionalStar_1.default({
        name: (0, i18n_1.t)('tuoluoMin'),
        type: 'tough',
        scope: 'origin',
        brightness: (0, utils_1.getBrightness)('陀罗', tuoIndex),
    }));
    return stars;
};
exports.getMinorStar = getMinorStar;

},{"lunar-lite":8,".":6,"../i18n":17,"../utils":89,"./FunctionalStar":102,"./location":7,"../astro":15}],
105:[function(require,module,exports){"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdjectiveStar = void 0;
const lunar_lite_1 = require("lunar-lite");
const _1 = require(".");
const i18n_1 = require("../i18n");
const FunctionalStar_1 = __importDefault(require("./FunctionalStar"));
const location_1 = require("./location");
const astro_1 = require("../astro");
/**
 * 安杂耀
 *
 * @param {AstrolabeParam} param - 通用排盘参数参数
 * @returns 38杂耀
 */
const getAdjectiveStar = (param) => {
    const { solarDate, timeIndex, fixLeap } = param;
    const { algorithm } = (0, astro_1.getConfig)();
    const stars = (0, _1.initStars)();
    const { yearly } = (0, lunar_lite_1.getHeavenlyStemAndEarthlyBranchBySolarDate)(solarDate, timeIndex, {
        year: (0, astro_1.getConfig)().yearDivide,
    });
    const yearlyIndex = (0, location_1.getYearlyStarIndex)(param);
    const monthlyIndex = (0, location_1.getMonthlyStarIndex)(solarDate, timeIndex, fixLeap);
    const dailyIndex = (0, location_1.getDailyStarIndex)(solarDate, timeIndex, fixLeap);
    const timelyIndex = (0, location_1.getTimelyStarIndex)(timeIndex);
    const { hongluanIndex, tianxiIndex } = (0, location_1.getLuanXiIndex)(yearly[1]);
    const { suiqian12 } = (0, _1.getYearly12)(solarDate);
    stars[hongluanIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('hongluan'), type: 'flower', scope: 'origin' }));
    stars[tianxiIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('tianxi'), type: 'flower', scope: 'origin' }));
    stars[monthlyIndex.tianyaoIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('tianyao'), type: 'flower', scope: 'origin' }));
    stars[yearlyIndex.xianchiIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('xianchi'), type: 'flower', scope: 'origin' }));
    stars[monthlyIndex.yuejieIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('jieshen'), type: 'helper', scope: 'origin' }));
    stars[dailyIndex.santaiIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('santai'), type: 'adjective', scope: 'origin' }));
    stars[dailyIndex.bazuoIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('bazuo'), type: 'adjective', scope: 'origin' }));
    stars[dailyIndex.enguangIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('engguang'), type: 'adjective', scope: 'origin' }));
    stars[dailyIndex.tianguiIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('tiangui'), type: 'adjective', scope: 'origin' }));
    stars[yearlyIndex.longchiIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('longchi'), type: 'adjective', scope: 'origin' }));
    stars[yearlyIndex.fenggeIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('fengge'), type: 'adjective', scope: 'origin' }));
    stars[yearlyIndex.tiancaiIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('tiancai'), type: 'adjective', scope: 'origin' }));
    stars[yearlyIndex.tianshouIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('tianshou'), type: 'adjective', scope: 'origin' }));
    stars[timelyIndex.taifuIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('taifu'), type: 'adjective', scope: 'origin' }));
    stars[timelyIndex.fenggaoIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('fenggao'), type: 'adjective', scope: 'origin' }));
    stars[monthlyIndex.tianwuIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('tianwu'), type: 'adjective', scope: 'origin' }));
    stars[yearlyIndex.huagaiIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('huagai'), type: 'adjective', scope: 'origin' }));
    stars[yearlyIndex.tianguanIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('tianguan'), type: 'adjective', scope: 'origin' }));
    stars[yearlyIndex.tianfuIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('tianfu'), type: 'adjective', scope: 'origin' }));
    stars[yearlyIndex.tianchuIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('tianchu'), type: 'adjective', scope: 'origin' }));
    stars[monthlyIndex.tianyueIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('tianyue'), type: 'adjective', scope: 'origin' }));
    stars[yearlyIndex.tiandeIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('tiande'), type: 'adjective', scope: 'origin' }));
    stars[yearlyIndex.yuedeIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('yuede'), type: 'adjective', scope: 'origin' }));
    stars[yearlyIndex.tiankongIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('tiankong'), type: 'adjective', scope: 'origin' }));
    stars[yearlyIndex.xunkongIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('xunkong'), type: 'adjective', scope: 'origin' }));
    if (algorithm !== 'zhongzhou') {
        // 中州派没有的星耀
        stars[yearlyIndex.jieluIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('jielu'), type: 'adjective', scope: 'origin' }));
        stars[yearlyIndex.kongwangIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('kongwang'), type: 'adjective', scope: 'origin' }));
    }
    else {
        // 中州派特有的星耀
        stars[suiqian12.indexOf((0, i18n_1.t)((0, i18n_1.kot)('longde')))].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('longde'), type: 'adjective', scope: 'origin' }));
        stars[yearlyIndex.jiekongIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('jiekong'), type: 'adjective', scope: 'origin' }));
        stars[yearlyIndex.jieshaAdjIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('jieshaAdj'), type: 'adjective', scope: 'origin' }));
        stars[yearlyIndex.dahaoAdjIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('dahao'), type: 'adjective', scope: 'origin' }));
    }
    stars[yearlyIndex.guchenIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('guchen'), type: 'adjective', scope: 'origin' }));
    stars[yearlyIndex.guasuIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('guasu'), type: 'adjective', scope: 'origin' }));
    stars[yearlyIndex.feilianIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('feilian'), type: 'adjective', scope: 'origin' }));
    stars[yearlyIndex.posuiIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('posui'), type: 'adjective', scope: 'origin' }));
    stars[monthlyIndex.tianxingIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('tianxing'), type: 'adjective', scope: 'origin' }));
    stars[monthlyIndex.yinshaIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('yinsha'), type: 'adjective', scope: 'origin' }));
    stars[yearlyIndex.tiankuIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('tianku'), type: 'adjective', scope: 'origin' }));
    stars[yearlyIndex.tianxuIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('tianxu'), type: 'adjective', scope: 'origin' }));
    stars[yearlyIndex.tianshiIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('tianshi'), type: 'adjective', scope: 'origin' }));
    stars[yearlyIndex.tianshangIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('tianshang'), type: 'adjective', scope: 'origin' }));
    // 生年年解
    stars[yearlyIndex.nianjieIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('nianjie'), type: 'helper', scope: 'origin' }));
    return stars;
};
exports.getAdjectiveStar = getAdjectiveStar;

},{"lunar-lite":8,".":6,"../i18n":17,"./FunctionalStar":102,"./location":7,"../astro":15}],
106:[function(require,module,exports){"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getYearly12 = exports.getJiangqian12StartIndex = exports.getBoShi12 = exports.getchangsheng12 = exports.getChangesheng12StartIndex = void 0;
const lunar_lite_1 = require("lunar-lite");
const astro_1 = require("../astro");
const data_1 = require("../data");
const i18n_1 = require("../i18n");
const utils_1 = require("../utils");
const location_1 = require("./location");
/**
 * 获取长生12神开始的宫位索引
 *
 * - 水二局长生在申
 * - 木三局长生在亥
 * - 金四局长生在巳
 * - 土五局长生在申
 * - 火六局长生在寅，
 * @param fiveElementClassName 五行局
 * @returns 长生12神开始的索引
 */
const getChangesheng12StartIndex = (fiveElementClassName) => {
    const fiveElementClass = (0, i18n_1.kot)(fiveElementClassName);
    let startIdx = 0;
    switch (data_1.FiveElementsClass[fiveElementClass]) {
        case 2: {
            startIdx = (0, utils_1.fixEarthlyBranchIndex)('shen');
            break;
        }
        case 3: {
            startIdx = (0, utils_1.fixEarthlyBranchIndex)('hai');
            break;
        }
        case 4: {
            startIdx = (0, utils_1.fixEarthlyBranchIndex)('si');
            break;
        }
        case 5: {
            startIdx = (0, utils_1.fixEarthlyBranchIndex)('shen');
            break;
        }
        case 6: {
            startIdx = (0, utils_1.fixEarthlyBranchIndex)('yin');
            break;
        }
    }
    return startIdx;
};
exports.getChangesheng12StartIndex = getChangesheng12StartIndex;
/**
 * 长生12神。
 *
 * 阳男阴女顺行，阴男阳女逆行，安长生、沐浴、冠带、临官、帝旺、衰、病、死、墓、绝 、胎、养。
 *
 * @param {AstrolabeParam} param 通用排盘参数
 * @returns 长生12神从寅宫开始的顺序
 */
const getchangsheng12 = (param) => {
    const { solarDate, gender } = param;
    const changsheng12 = [];
    const genderKey = (0, i18n_1.kot)(gender);
    const { yearly } = (0, lunar_lite_1.getHeavenlyStemAndEarthlyBranchBySolarDate)(solarDate, 0, {
        year: (0, astro_1.getConfig)().yearDivide,
    });
    const [, earthlyBranchNameOfYear] = yearly;
    const earthlyBranchOfYear = (0, i18n_1.kot)(earthlyBranchNameOfYear, 'Earthly');
    // 获取命宫干支，需要通过命宫干支计算五行局
    const { heavenlyStemOfSoul, earthlyBranchOfSoul } = (0, astro_1.getSoulAndBody)(param);
    // 获取五行局，通过五行局获取起运年龄
    const fiveElementClass = (0, astro_1.getFiveElementsClass)(heavenlyStemOfSoul, earthlyBranchOfSoul);
    // 长生12神顺序
    const stars = [
        'changsheng',
        'muyu',
        'guandai',
        'linguan',
        'diwang',
        'shuai',
        'bing',
        'si',
        'mu',
        'jue',
        'tai',
        'yang',
    ];
    const startIdx = (0, exports.getChangesheng12StartIndex)(fiveElementClass);
    for (let i = 0; i < stars.length; i++) {
        let idx = 0;
        if (data_1.GENDER[genderKey] === data_1.earthlyBranches[earthlyBranchOfYear].yinYang) {
            idx = (0, utils_1.fixIndex)(i + startIdx);
        }
        else {
            idx = (0, utils_1.fixIndex)(startIdx - i);
        }
        changsheng12[idx] = (0, i18n_1.t)(stars[i]);
    }
    return changsheng12;
};
exports.getchangsheng12 = getchangsheng12;
/**
 * 博士12神。
 *
 * 从禄存起，阳男阴女顺行，阴男阳女逆行。安博士、力士、青龙、小耗、将军、奏书、飞廉、喜神、病符、大耗、伏兵、官府。
 *
 * @param solarDateStr 阳历日期字符串
 * @param gender 性别【男｜女】
 * @returns 博士12神从寅宫开始的顺序
 */
const getBoShi12 = (solarDateStr, gender) => {
    const genderKey = (0, i18n_1.kot)(gender);
    const { yearly } = (0, lunar_lite_1.getHeavenlyStemAndEarthlyBranchBySolarDate)(solarDateStr, 0, {
        year: (0, astro_1.getConfig)().yearDivide,
    });
    const [heavenlyStemNameOfYear, earthlyBranchNameOfYear] = yearly;
    const earthlyBranchOfYear = (0, i18n_1.kot)(earthlyBranchNameOfYear, 'Earthly');
    // 博士12神的顺序
    const stars = [
        'boshi',
        'lishi',
        'qinglong',
        'xiaohao',
        'jiangjun',
        'zhoushu',
        'faylian',
        'xishen',
        'bingfu',
        'dahao',
        'fubing',
        'guanfu',
    ];
    const { luIndex } = (0, location_1.getLuYangTuoMaIndex)(heavenlyStemNameOfYear, earthlyBranchNameOfYear);
    const boshi12 = [];
    for (let i = 0; i < stars.length; i++) {
        // 阳男阴女顺行，阴男阳女逆部
        const idx = (0, utils_1.fixIndex)(data_1.GENDER[genderKey] === data_1.earthlyBranches[earthlyBranchOfYear].yinYang ? luIndex + i : luIndex - i);
        boshi12[idx] = (0, i18n_1.t)(stars[i]);
    }
    return boshi12;
};
exports.getBoShi12 = getBoShi12;
/**
 * 安流年将前诸星（按流年地支起将星）
 * - 寅午戍年将星午，申子辰年子将星，
 * - 巳酉丑将酉上驻，亥卯未将卯上停。
 * - 攀鞍岁驿并息神，华盖劫煞灾煞轻，
 * - 天煞指背咸池续，月煞亡神次第行。
 *
 * @param earthlyBranchName 地支
 * @returns 将前诸星起始索引
 */
const getJiangqian12StartIndex = (earthlyBranchName) => {
    let jqStartIdx = -1;
    const earthlyBranchOfYear = (0, i18n_1.kot)(earthlyBranchName, 'Earthly');
    if (['yinEarthly', 'wuEarthly', 'xuEarthly'].includes(earthlyBranchOfYear)) {
        jqStartIdx = (0, utils_1.fixEarthlyBranchIndex)('woo');
    }
    else if (['shenEarthly', 'ziEarthly', 'chenEarthly'].includes(earthlyBranchOfYear)) {
        jqStartIdx = (0, utils_1.fixEarthlyBranchIndex)('zi');
    }
    else if (['siEarthly', 'youEarthly', 'chouEarthly'].includes(earthlyBranchOfYear)) {
        jqStartIdx = (0, utils_1.fixEarthlyBranchIndex)('you');
    }
    else if (['haiEarthly', 'maoEarthly', 'weiEarthly'].includes(earthlyBranchOfYear)) {
        jqStartIdx = (0, utils_1.fixEarthlyBranchIndex)('mao');
    }
    return (0, utils_1.fixIndex)(jqStartIdx);
};
exports.getJiangqian12StartIndex = getJiangqian12StartIndex;
/**
 * 流年诸星。
 *
 * - 流年岁前诸星
 *   - 流年地支起岁建，岁前首先是晦气，
 *   - 丧门贯索及官符，小耗大耗龙德继，
 *   - 白虎天德连吊客，病符居后须当记。
 *
 * - 安流年将前诸星（按流年地支起将星）
 *   - 寅午戍年将星午，申子辰年子将星，
 *   - 巳酉丑将酉上驻，亥卯未将卯上停。
 *   - 攀鞍岁驿并息神，华盖劫煞灾煞轻，
 *   - 天煞指背咸池续，月煞亡神次第行。
 *
 * @param solarDateStr 阳历日期字符串
 * @returns 流年诸星从寅宫开始的顺序
 */
const getYearly12 = (solarDateStr) => {
    const jiangqian12 = [];
    const suiqian12 = [];
    const { algorithm } = (0, astro_1.getConfig)();
    const { yearly } = (0, lunar_lite_1.getHeavenlyStemAndEarthlyBranchBySolarDate)(solarDateStr, 0, {
        // 流年神煞应该用立春为界，但为了满足不同流派的需求允许配置
        year: (0, astro_1.getConfig)().horoscopeDivide,
    });
    // 中州派的大耗叫岁破
    const ts12shen = algorithm === 'zhongzhou'
        ? [
            'suijian',
            'huiqi',
            'sangmen',
            'guansuo',
            'gwanfu',
            'xiaohao',
            'suipo',
            'longde',
            'baihu',
            'tiande',
            'diaoke',
            'bingfu',
        ]
        : [
            'suijian',
            'huiqi',
            'sangmen',
            'guansuo',
            'gwanfu',
            'xiaohao',
            'dahao',
            'longde',
            'baihu',
            'tiande',
            'diaoke',
            'bingfu',
        ];
    for (let i = 0; i < ts12shen.length; i++) {
        const idx = (0, utils_1.fixIndex)((0, utils_1.fixEarthlyBranchIndex)(yearly[1]) + i);
        suiqian12[idx] = (0, i18n_1.t)(ts12shen[i]);
    }
    const jq12shen = [
        'jiangxing',
        'panan',
        'suiyi',
        'xiishen',
        'huagai',
        'jiesha',
        'zhaisha',
        'tiansha',
        'zhibei',
        'xianchi',
        'yuesha',
        'wangshen',
    ];
    const jiangqian12StartIndex = (0, exports.getJiangqian12StartIndex)(yearly[1]);
    for (let i = 0; i < jq12shen.length; i++) {
        const idx = (0, utils_1.fixIndex)(jiangqian12StartIndex + i);
        jiangqian12[idx] = (0, i18n_1.t)(jq12shen[i]);
    }
    return { suiqian12, jiangqian12 };
};
exports.getYearly12 = getYearly12;

},{"lunar-lite":8,"../astro":15,"../data":1,"../i18n":17,"../utils":89,"./location":7}],
107:[function(require,module,exports){"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHoroscopeStar = void 0;
const _1 = require(".");
const i18n_1 = require("../i18n");
const FunctionalStar_1 = __importDefault(require("./FunctionalStar"));
const location_1 = require("./location");
/**
 * 获取流耀
 *
 * 魁钺昌曲禄羊陀马鸾喜
 *
 * @param heavenlyStem 天干
 * @param earthlyBranch 地支
 */
const getHoroscopeStar = (heavenlyStem, earthlyBranch, scope) => {
    const { kuiIndex, yueIndex } = (0, location_1.getKuiYueIndex)(heavenlyStem);
    const { changIndex, quIndex } = (0, location_1.getChangQuIndexByHeavenlyStem)(heavenlyStem);
    const { luIndex, yangIndex, tuoIndex, maIndex } = (0, location_1.getLuYangTuoMaIndex)(heavenlyStem, earthlyBranch);
    const { hongluanIndex, tianxiIndex } = (0, location_1.getLuanXiIndex)(earthlyBranch);
    const stars = (0, _1.initStars)();
    const trans = {
        origin: {
            tiankui: (0, i18n_1.t)('tiankuiMin'),
            tianyue: (0, i18n_1.t)('tianyueMin'),
            wenchang: (0, i18n_1.t)('wenchangMin'),
            wenqu: (0, i18n_1.t)('wenquMin'),
            lucun: (0, i18n_1.t)('lucunMin'),
            qingyang: (0, i18n_1.t)('qingyangMin'),
            tuoluo: (0, i18n_1.t)('tuoluoMin'),
            tianma: (0, i18n_1.t)('tianmaMin'),
            hongluan: (0, i18n_1.t)('hongluanMin'),
            tianxi: (0, i18n_1.t)('tianxi'),
        },
        decadal: {
            tiankui: (0, i18n_1.t)('yunkui'),
            tianyue: (0, i18n_1.t)('yunyue'),
            wenchang: (0, i18n_1.t)('yunchang'),
            wenqu: (0, i18n_1.t)('yunqu'),
            lucun: (0, i18n_1.t)('yunlu'),
            qingyang: (0, i18n_1.t)('yunyang'),
            tuoluo: (0, i18n_1.t)('yuntuo'),
            tianma: (0, i18n_1.t)('yunma'),
            hongluan: (0, i18n_1.t)('yunluan'),
            tianxi: (0, i18n_1.t)('yunxi'),
        },
        yearly: {
            tiankui: (0, i18n_1.t)('liukui'),
            tianyue: (0, i18n_1.t)('liuyue'),
            wenchang: (0, i18n_1.t)('liuchang'),
            wenqu: (0, i18n_1.t)('liuqu'),
            lucun: (0, i18n_1.t)('liulu'),
            qingyang: (0, i18n_1.t)('liuyang'),
            tuoluo: (0, i18n_1.t)('liutuo'),
            tianma: (0, i18n_1.t)('liuma'),
            hongluan: (0, i18n_1.t)('liuluan'),
            tianxi: (0, i18n_1.t)('liuxi'),
        },
        monthly: {
            tiankui: (0, i18n_1.t)('yuekui'),
            tianyue: (0, i18n_1.t)('yueyue'),
            wenchang: (0, i18n_1.t)('yuechang'),
            wenqu: (0, i18n_1.t)('yuequ'),
            lucun: (0, i18n_1.t)('yuelu'),
            qingyang: (0, i18n_1.t)('yueyang'),
            tuoluo: (0, i18n_1.t)('yuetuo'),
            tianma: (0, i18n_1.t)('yuema'),
            hongluan: (0, i18n_1.t)('yueluan'),
            tianxi: (0, i18n_1.t)('yuexi'),
        },
        daily: {
            tiankui: (0, i18n_1.t)('rikui'),
            tianyue: (0, i18n_1.t)('riyue'),
            wenchang: (0, i18n_1.t)('richang'),
            wenqu: (0, i18n_1.t)('riqu'),
            lucun: (0, i18n_1.t)('rilu'),
            qingyang: (0, i18n_1.t)('riyang'),
            tuoluo: (0, i18n_1.t)('rituo'),
            tianma: (0, i18n_1.t)('rima'),
            hongluan: (0, i18n_1.t)('riluan'),
            tianxi: (0, i18n_1.t)('rixi'),
        },
        hourly: {
            tiankui: (0, i18n_1.t)('shikui'),
            tianyue: (0, i18n_1.t)('shiyue'),
            wenchang: (0, i18n_1.t)('shichang'),
            wenqu: (0, i18n_1.t)('shiqu'),
            lucun: (0, i18n_1.t)('shilu'),
            qingyang: (0, i18n_1.t)('shiyang'),
            tuoluo: (0, i18n_1.t)('shituo'),
            tianma: (0, i18n_1.t)('shima'),
            hongluan: (0, i18n_1.t)('shiluan'),
            tianxi: (0, i18n_1.t)('shixi'),
        },
    };
    if (scope === 'yearly') {
        const nianjieIndex = (0, location_1.getNianjieIndex)(earthlyBranch);
        stars[nianjieIndex].push(new FunctionalStar_1.default({ name: (0, i18n_1.t)('nianjie'), type: 'helper', scope: 'yearly' }));
    }
    stars[kuiIndex].push(new FunctionalStar_1.default({ name: trans[scope].tiankui, type: 'soft', scope }));
    stars[yueIndex].push(new FunctionalStar_1.default({ name: trans[scope].tianyue, type: 'soft', scope }));
    stars[changIndex].push(new FunctionalStar_1.default({ name: trans[scope].wenchang, type: 'soft', scope }));
    stars[quIndex].push(new FunctionalStar_1.default({ name: trans[scope].wenqu, type: 'soft', scope }));
    stars[luIndex].push(new FunctionalStar_1.default({ name: trans[scope].lucun, type: 'lucun', scope }));
    stars[yangIndex].push(new FunctionalStar_1.default({ name: trans[scope].qingyang, type: 'tough', scope }));
    stars[tuoIndex].push(new FunctionalStar_1.default({ name: trans[scope].tuoluo, type: 'tough', scope }));
    stars[maIndex].push(new FunctionalStar_1.default({ name: trans[scope].tianma, type: 'tianma', scope }));
    stars[hongluanIndex].push(new FunctionalStar_1.default({ name: trans[scope].hongluan, type: 'flower', scope }));
    stars[tianxiIndex].push(new FunctionalStar_1.default({ name: trans[scope].tianxi, type: 'flower', scope }));
    return stars;
};
exports.getHoroscopeStar = getHoroscopeStar;

},{".":6,"../i18n":17,"./FunctionalStar":102,"./location":7}]};var C={};function r(i){if(C[i])return C[i].exports;var m=C[i]={exports:{}};M[i][0](function(s){return r(M[i][1][s])},m,m.exports);return m.exports}window.iztro=r(0);})();