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
var react_hook_form_1 = require("react-hook-form");
var Result = function () {
    var _a = react_hook_form_1.useForm(), register = _a.register, handleSubmit = _a.handleSubmit;
    var onSubmit = function (data) {
        var student = data.student, id = data.id, bangla = data.bangla, banglaScore = data.banglaScore, bGrade = data.bGrade, english = data.english, egrade = data.egrade, englishScore = data.englishScore, math = data.math, mGrade = data.mGrade, mathScore = data.mathScore, science = data.science, scienceGrade = data.scienceGrade, scienceScore = data.scienceScore, socialGrade = data.socialGrade, socialScience = data.socialScience, socialScienceScore = data.socialScienceScore, gk = data.gk, gkScore = data.gkScore, gkGrade = data.gkGrade, It = data.It, itGrade = data.itGrade, ItScore = data.ItScore, ct = data.ct;
        var resultInfo = [
            { student: student },
            { id: id },
            { bangla: { score: banglaScore, grade: bGrade } },
            { english: { score: englishScore, grade: bGrade } },
            { math: { score: mathScore, grade: mGrade } },
            { science: { score: scienceScore, grade: scienceGrade } },
            { socialScience: { score: socialScienceScore, grade: socialGrade } },
            { gk: { score: gkScore, grade: gkGrade } },
            { It: { score: ItScore, grade: itGrade } },
            { ct: ct },
        ];
        fetch('http://localhost:5000/teacher/postresult', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(resultInfo)
        }).then(function (res) { return console.log(res.body); });
        console.log(resultInfo);
    };
    return (React.createElement("div", { className: "h-full bg-blue-100 md:h-screen" },
        React.createElement("h1", { className: "mb-2 p-5 text-center text-3xl font-bold" }, "Result Processing Form"),
        React.createElement("div", { className: "grid md:grid-cols-12" },
            React.createElement("form", { onSubmit: handleSubmit(onSubmit), className: " col-span-12 flex flex-col p-2 md:col-span-9 md:p-0 md:px-10 " },
                React.createElement("div", { className: "grid gap-2 md:grid-cols-3 " },
                    React.createElement("div", { className: "flex justify-end" },
                        React.createElement("input", __assign({ className: "my-1 w-full gap-2 p-1", placeholder: "studentName" }, register('student', { required: true })))),
                    React.createElement("div", null,
                        React.createElement("input", __assign({ className: "my-1 w-full border p-1", placeholder: "Student Id" }, register('id', { required: true })))),
                    React.createElement("div", null,
                        React.createElement("input", __assign({ className: "my-1 w-full border p-1", placeholder: "Course Teacher" }, register('ct', { required: true }))))),
                React.createElement("div", { className: "flex flex-col" },
                    React.createElement("div", { className: "my-1 flex justify-between" },
                        React.createElement("input", __assign({ className: "w-2/5 rounded p-2", defaultValue: "Bangla", id: "banglaScore" }, register('bangla', { required: true }))),
                        React.createElement("input", __assign({ className: "mx-5 w-2/5 rounded p-2", placeholder: "Bangla", id: "bangla" }, register('bGrade', { required: true }))),
                        React.createElement("input", __assign({ className: "w-1/5 rounded p-2", placeholder: "Score" }, register('banglaScore', { required: true })))),
                    React.createElement("div", { className: "my-1 flex justify-between" },
                        React.createElement("input", __assign({ className: "w-2/5 rounded p-2", defaultValue: "English " }, register('english', { required: true }))),
                        React.createElement("input", __assign({ className: "mx-5 w-2/5 rounded p-2", placeholder: "English" }, register('eGrade', { required: true }))),
                        React.createElement("input", __assign({ className: "w-1/5 rounded p-2", placeholder: "Score" }, register('englishScore', { required: true })))),
                    React.createElement("div", { className: "my-1 flex justify-between" },
                        React.createElement("input", __assign({ className: "w-2/5 rounded p-2", defaultValue: "Math" }, register('math', { required: true }))),
                        React.createElement("input", __assign({ className: "mx-5 w-2/5 rounded p-2", placeholder: "Math" }, register('mGrade', { required: true }))),
                        React.createElement("input", __assign({ className: "w-1/5 rounded p-2", placeholder: "Score" }, register('mathScore', { required: true })))),
                    React.createElement("div", { className: "my-1 flex justify-between" },
                        React.createElement("input", __assign({ className: "w-2/5 rounded p-2", defaultValue: "Science" }, register('science', { required: true }))),
                        React.createElement("input", __assign({ className: "mx-5 w-2/5 rounded p-2", placeholder: "Science" }, register('scienceGrade', { required: true }))),
                        React.createElement("input", __assign({ className: "w-1/5 rounded p-2", placeholder: "Score" }, register('scienceScore', { required: true })))),
                    React.createElement("div", { className: "my-1 flex justify-between" },
                        React.createElement("input", __assign({ className: "w-2/5 rounded p-2", defaultValue: "Social Science" }, register('socialScience', { required: true }))),
                        React.createElement("input", __assign({ className: "mx-5 w-2/5 rounded p-2", placeholder: "Social Science" }, register('socialGrade', { required: true }))),
                        React.createElement("input", __assign({ className: "w-1/5 rounded p-2", placeholder: "Score" }, register('socialScienceScore', { required: true })))),
                    React.createElement("div", { className: "my-1 flex justify-between" },
                        React.createElement("input", __assign({ className: "w-2/5 rounded p-2", defaultValue: "GK" }, register('gk', { required: true }))),
                        React.createElement("input", __assign({ className: "mx-5 w-2/5 rounded p-2", placeholder: "GK" }, register('gkGrade', { required: true }))),
                        React.createElement("input", __assign({ className: "w-1/5 rounded p-2", placeholder: "Score" }, register('gkScore', { required: true })))),
                    React.createElement("div", { className: "my-1 flex justify-between" },
                        React.createElement("input", __assign({ className: "w-2/5 rounded p-2", defaultValue: "IT" }, register('It', { required: true }))),
                        React.createElement("input", __assign({ className: "mx-5 w-2/5 rounded p-2", placeholder: "IT" }, register('itGrade', { required: true }))),
                        React.createElement("input", __assign({ className: "w-1/5 rounded p-2", placeholder: "Score" }, register('ItScore', { required: true }))))),
                React.createElement("input", { className: " hover:white mt-2 w-2/5 rounded  border bg-blue-300 font-bold hover:bg-blue-400 hover:underline md:mx-auto", type: "submit", value: "Generate Result Sheet" })),
            React.createElement("div", { className: "col-span-12 p-2 md:col-span-3 md:p-0  " },
                React.createElement("h1", { className: "text-center font-bold" }, " GPA and Number "),
                React.createElement("table", { className: "w-full table-auto" },
                    React.createElement("thead", { className: "bg-blue-200" },
                        React.createElement("tr", { className: "w-full" },
                            React.createElement("th", { className: " bg-red-500 text-left " }, "Score"),
                            React.createElement("th", { className: " bg-green-500 text-left" }, "GPA"),
                            React.createElement("th", { className: " bg-blue-500 text-left" }, "Point"))),
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border border-b-black py-2 text-left" }, "80-100"),
                            React.createElement("td", { className: " border border-b-black text-left" }, "5.00"),
                            React.createElement("td", { className: "border border-b-black text-left" }, "A+")),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border border-b-black  py-2 text-left" }, "70-79"),
                            React.createElement("td", { className: " border border-b-black text-left" }, "4.00"),
                            React.createElement("td", { className: "border border-b-black text-left" }, "A")),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border border-b-black  py-2 text-left" }, "60-69"),
                            React.createElement("td", { className: " border border-b-black text-left" }, "3.50"),
                            React.createElement("td", { className: "border border-b-black text-left" }, "A-")),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border border-b-black  py-2 text-left" }, "50-59"),
                            React.createElement("td", { className: " border border-b-black text-left" }, "3.00"),
                            React.createElement("td", { className: "border border-b-black text-left" }, "B")),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border border-b-black  py-2 text-left" }, "40-49"),
                            React.createElement("td", { className: " border border-b-black text-left" }, "2.00"),
                            React.createElement("td", { className: "border border-b-black text-left" }, "C")),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border border-b-black  py-2 text-left" }, "33-39"),
                            React.createElement("td", { className: " border border-b-black text-left" }, "1.00"),
                            React.createElement("td", { className: "border border-b-black text-left" }, "D")),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "border border-b-black  py-2 text-left" }, "0-32"),
                            React.createElement("td", { className: " border border-b-black text-left" }, "0.00"),
                            React.createElement("td", { className: "border border-b-black text-left" }, "F"))))))));
};
exports["default"] = Result;
