"use strict";
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
Object.defineProperty(exports, "__esModule", { value: true });
var selenium_webdriver_1 = require("selenium-webdriver");
function sleep(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
(function cadastroLogin() {
    return __awaiter(this, void 0, void 0, function () {
        var driver, email, senha, mensagemCadastro, logoutExiste;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new selenium_webdriver_1.Builder().forBrowser('chrome').build()];
                case 1:
                    driver = _a.sent();
                    return [4 /*yield*/, driver.manage().window().maximize()];
                case 2:
                    _a.sent();
                    email = "carlos".concat(Date.now(), "@example.com");
                    senha = '123456';
                    // Cadastro
                    return [4 /*yield*/, driver.get('https://front.serverest.dev/login')];
                case 3:
                    // Cadastro
                    _a.sent();
                    return [4 /*yield*/, sleep(1000)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.linkText('Cadastre-se')).click()];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, sleep(1000)];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('nome')).sendKeys('Carlos Teste')];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, sleep(500)];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('email')).sendKeys(email)];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, sleep(500)];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('password')).sendKeys(senha)];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, sleep(500)];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('administrador')).click()];
                case 13:
                    _a.sent();
                    return [4 /*yield*/, sleep(500)];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className('btn')).click()];
                case 15:
                    _a.sent();
                    return [4 /*yield*/, sleep(2000)];
                case 16:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className('alert')).getText()];
                case 17:
                    mensagemCadastro = _a.sent();
                    console.log('Mensagem de cadastro:', mensagemCadastro);
                    // Login
                    return [4 /*yield*/, driver.get('https://front.serverest.dev/login')];
                case 18:
                    // Login
                    _a.sent();
                    return [4 /*yield*/, sleep(1000)];
                case 19:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('email')).sendKeys(email)];
                case 20:
                    _a.sent();
                    return [4 /*yield*/, sleep(500)];
                case 21:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.id('password')).sendKeys(senha)];
                case 22:
                    _a.sent();
                    return [4 /*yield*/, sleep(500)];
                case 23:
                    _a.sent();
                    return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.className('btn')).click()];
                case 24:
                    _a.sent();
                    return [4 /*yield*/, sleep(2000)];
                case 25:
                    _a.sent();
                    return [4 /*yield*/, driver.findElements(selenium_webdriver_1.By.xpath("//button[contains(text(),'Logout')]"))];
                case 26:
                    logoutExiste = _a.sent();
                    if (logoutExiste.length > 0) {
                        console.log('✅ Login realizado com sucesso!');
                    }
                    else {
                        console.log('❌ Falha no login.');
                    }
                    return [4 /*yield*/, sleep(2000)];
                case 27:
                    _a.sent();
                    return [4 /*yield*/, driver.quit()];
                case 28:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
})();
