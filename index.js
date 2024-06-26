var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var jokesElement = document.getElementById("jokesHere");
var btnJoke = document.getElementById("btnJoke");
function printJoke() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("https://icanhazdadjoke.com/", {
                            headers: {
                                "Accept": "application/json"
                            }
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to fetch dad joke');
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data.joke];
                case 3:
                    error_1 = _a.sent();
                    console.error('Error fetching dad joke:', error_1);
                    return [2 /*return*/, 'Failed to fetch dad joke :('];
                case 4: return [2 /*return*/];
            }
        });
    });
}
var reportAcudits = [];
function jokesChuckNorris() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("https://api.chucknorris.io/jokes/random", {
                            headers: {
                                "Accept": "application/json"
                            }
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to fetch Chuck Norris joke');
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data.value];
                case 3:
                    error_2 = _a.sent();
                    console.error('Error fetching Chuck Norris joke:', error_2);
                    return [2 /*return*/, 'Failed to fetch Chuck Norris joke :('];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function getRandomJoke() {
    var randomNumber = Math.random();
    if (randomNumber < 0.5) {
        printJoke().then(function (joke) {
            if (jokesElement) {
                jokesElement.innerText = joke;
            }
        });
    }
    else {
        jokesChuckNorris().then(function (joke) {
            if (jokesElement) {
                jokesElement.innerText = joke;
            }
        });
    }
}
btnJoke.addEventListener("click", getRandomJoke);
function addJokeToReport(score) {
    var jokeText = (jokesElement === null || jokesElement === void 0 ? void 0 : jokesElement.innerText) || "";
    var date = new Date().toISOString();
    var newReport = { joke: jokeText, score: score, date: date };
    var existingReportIndex = reportAcudits.findIndex(function (report) { return report.joke === jokeText; });
    if (existingReportIndex >= 0) {
        reportAcudits[existingReportIndex].score = score;
        reportAcudits[existingReportIndex].date = date;
    }
    else {
        reportAcudits.push(newReport);
    }
    console.log(reportAcudits);
}
var btnSad = document.getElementById("btnEmoji1");
var btnMeh = document.getElementById("btnEmoji2");
var btnHappy = document.getElementById("btnEmoji3");
btnSad.addEventListener("click", function () { return addJokeToReport(1); });
btnMeh.addEventListener("click", function () { return addJokeToReport(2); });
btnHappy.addEventListener("click", function () { return addJokeToReport(3); });
document.addEventListener("DOMContentLoaded", function () {
    getRandomJoke();
    var weatherElement = document.getElementById("weatherd");
    var weatherIcon = document.getElementById("weatherIcon");
    printWeather();
    function getWeatherIcon(description) {
        var iconMap = {
            "intervalos nubosos": "images/nubes.png",
            "nubes altas": "images/nubes.png",
            "soleado": "images/sol.png",
            "parcialmente nublado": "images/nubes.png",
            "despejado": "images/sol.png",
        };
        var lowerDescription = description.toLowerCase();
        return iconMap[lowerDescription] || "default.png";
    }
    function printWeather() {
        var url = 'https://www.el-tiempo.net/api/json/v2/home';
        fetch(url)
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
            var bcnWeather = data.ciudades.find(function (city) { return city.name === "Barcelona"; });
            if (bcnWeather && weatherElement && weatherIcon) {
                var tempMax = bcnWeather.temperatures.max;
                var tempMin = bcnWeather.temperatures.min;
                var description = bcnWeather.stateSky.description;
                weatherElement.textContent = "".concat(tempMax, "\u00B0C ").concat(description);
                var iconSrc = getWeatherIcon(description);
                weatherIcon.src = "../".concat(iconSrc);
                weatherIcon.style.display = 'block';
            }
        })
            .catch(function (error) {
            console.log('ERROR', error);
            if (weatherElement) {
                weatherElement.textContent = 'Error al cargar los datos del clima.';
                weatherIcon.style.display = 'none';
            }
        });
    }
});
