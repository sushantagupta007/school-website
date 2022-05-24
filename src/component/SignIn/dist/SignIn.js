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
exports.__esModule = true;
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var AuthProvider_1 = require("./../../context/AuthProvider");
var SignIn = function () {
    var _a = react_1.useContext(AuthProvider_1.AuthContext), login = _a.login, user = _a.user;
    var _b = react_hook_form_1.useForm(), register = _b.register, handleSubmit = _b.handleSubmit, reset = _b.reset;
    var onSubmit = function (data) {
        var email = data.email, password = data.password;
        login({ email: email, password: password });
        console.log(data);
        // reset()
    };
    return (react_1["default"].createElement("div", { className: "mx-auto h-screen p-5 md:w-2/5" },
        react_1["default"].createElement("h1", { className: "text-2xl font-bold text-white" }, " Login Form "),
        react_1["default"].createElement("form", { onSubmit: handleSubmit(onSubmit), className: "flex flex-col " },
            react_1["default"].createElement("input", __assign({ type: "email", className: "my-3 rounded p-3", placeholder: "Your Email" }, register('email', { required: true, maxLength: 255 }))),
            react_1["default"].createElement("input", __assign({ type: "password", className: "my-3 rounded p-3", placeholder: "Your Password " }, register('password'))),
            react_1["default"].createElement("button", { type: "submit", className: "rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700" }, "Sign In"))));
};
exports["default"] = SignIn;
