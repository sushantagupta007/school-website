"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
        while (_) try {
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
exports.__esModule = true;
var router_1 = require("next/router");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var ImageUpload = function () {
    var router = router_1.useRouter();
    var id = router.query._id;
    // const collectImage = () => {
    //   console.log('hello')
    //   fetch('http://localhost:5000/admin/getImage').then((res) =>
    //     console.log(res)
    //   )
    // }
    var _a = react_hook_form_1.useForm(), register = _a.register, handleSubmit = _a.handleSubmit;
    var _b = react_1.useState(false), picture = _b[0], setPicture = _b[1];
    var onSubmit = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var formData, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    formData = new FormData();
                    formData.append('file', data.file[0]);
                    return [4 /*yield*/, fetch("http://localhost:5000/admin/student_register?id=" + id, {
                            method: 'POST',
                            body: formData
                        }).then(function (res) {
                            // if (res) {
                            //   collectImage()
                            // }
                        })];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: "mx-auto flex h-screen w-2/5 flex-col items-center justify-center" },
        React.createElement("form", { className: " flex flex-col items-center justify-center border border-indigo-500/50 p-5", onSubmit: handleSubmit(onSubmit) },
            React.createElement("input", __assign({ type: "file" }, register('file'))),
            React.createElement("input", { className: " hover:white mt-2 w-full rounded border bg-blue-300 font-bold hover:bg-blue-400 hover:underline", type: "submit" })),
        React.createElement("div", null,
            React.createElement("h2", { className: "text-center font-bold" }, " Uploaded Image"),
            picture ? (React.createElement("img", { style: { width: '100px', height: '100px' }, src: "", alt: "profilepic" })) : (''))));
};
exports["default"] = ImageUpload;
