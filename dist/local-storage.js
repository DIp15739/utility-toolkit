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
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearAsyncLS = exports.clearLS = exports.removeItemAsyncLS = exports.removeItemLS = exports.getItemAsyncLS = exports.getItemLS = exports.setItemAsyncLS = exports.setItemLS = void 0;
function setItemLS(key, value) {
    try {
        const stringValue = JSON.stringify(value);
        localStorage.setItem(key, stringValue);
    }
    catch (error) {
        console.error(`Error setting item ${key} to localStorage`, error);
    }
}
exports.setItemLS = setItemLS;
function setItemAsyncLS(key, value) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const stringValue = JSON.stringify(value);
            yield Promise.resolve(localStorage.setItem(key, stringValue));
        }
        catch (error) {
            console.error(`Error setting item ${key} to localStorage`, error);
            throw new Error(`Unable to set item: ${error}`);
        }
    });
}
exports.setItemAsyncLS = setItemAsyncLS;
function getItemLS(key) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    }
    catch (error) {
        console.error(`Error getting item ${key} from localStorage`, error);
        return null;
    }
}
exports.getItemLS = getItemLS;
function getItemAsyncLS(key) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const item = yield Promise.resolve(localStorage.getItem(key));
            return item ? JSON.parse(item) : null;
        }
        catch (error) {
            console.error(`Error getting item ${key} from localStorage`, error);
            throw new Error(`Unable to get item: ${error}`);
        }
    });
}
exports.getItemAsyncLS = getItemAsyncLS;
function removeItemLS(key) {
    try {
        localStorage.removeItem(key);
    }
    catch (error) {
        console.error(`Error removing item ${key} from localStorage`, error);
    }
}
exports.removeItemLS = removeItemLS;
function removeItemAsyncLS(key) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield Promise.resolve(localStorage.removeItem(key));
        }
        catch (error) {
            console.error(`Error removing item ${key} from localStorage`, error);
            throw new Error(`Unable to remove item: ${error}`);
        }
    });
}
exports.removeItemAsyncLS = removeItemAsyncLS;
function clearLS() {
    try {
        localStorage.clear();
    }
    catch (error) {
        console.error('Error clearing localStorage', error);
    }
}
exports.clearLS = clearLS;
function clearAsyncLS() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield Promise.resolve(localStorage.clear());
        }
        catch (error) {
            console.error('Error clearing localStorage', error);
            throw new Error(`Unable to clear localStorage: ${error}`);
        }
    });
}
exports.clearAsyncLS = clearAsyncLS;
//# sourceMappingURL=local-storage.js.map