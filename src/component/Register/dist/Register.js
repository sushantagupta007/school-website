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
var router_1 = require("next/router");
var react_hook_form_1 = require("react-hook-form");
var Register = function () {
    var router = router_1.useRouter();
    var _a = react_hook_form_1.useForm(), register = _a.register, handleSubmit = _a.handleSubmit;
    var onSubmit = function (data) {
        //Destructuring Data
        var admissionYear = data.admissionYear, age = data.age, gender = data.gender, bloodGroup = data.bloodGroup, district = data.district, mobile = data.mobile, name = data.name, thana = data.thana, village = data.village, houseNo = data.houseNo, guardian = data.guardian, email = data.email, classNo = data.classNo;
        var mobileString = mobile.toString();
        //Id Form
        var studentId = admissionYear +
            gender +
            ("" + mobileString.toString().substring(mobileString.length - 3)) +
            age +
            ("" + district.substring(0, 3).toUpperCase()) +
            bloodGroup;
        //Combine data with id
        var newData = {
            name: name,
            gender: gender,
            age: age,
            bloodGroup: bloodGroup,
            district: district,
            id: studentId,
            thana: thana,
            village: village,
            houseNo: houseNo,
            guardian: guardian,
            email: email,
            classNo: classNo,
            admissionYear: admissionYear,
            mobile: mobile
        };
        try {
            fetch('http://localhost:5000/admin/student_register', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(newData)
            })
                .then(function (res) { return res.json(); })
                .then(function (data) {
                if (data._id) {
                    alert('Registration Successful');
                    router.push({
                        pathname: '/student/imageupload',
                        query: { _id: data._id }
                    });
                }
            });
        }
        catch (err) {
            console.log(err);
        }
    };
    return (React.createElement("div", { className: "h-screen bg-blue-100 " },
        React.createElement("h1", { className: "mb-2 p-5 text-center text-3xl font-bold" },
            ' ',
            "Registration Form"),
        React.createElement("form", { onSubmit: handleSubmit(onSubmit), className: "mx-auto flex flex-col border bg-indigo-200 to-blue-50 shadow-md shadow-blue-500 md:w-3/5" },
            React.createElement("div", { className: "grid grid-cols-1 gap-1 md:grid-cols-2" },
                React.createElement("div", { className: "md: flex flex-col p-2 md:p-5" },
                    React.createElement("label", { className: "font-bold" }, " Full Name "),
                    React.createElement("input", __assign({ className: "rounded border p-1 ", type: "text" }, register('name'))),
                    React.createElement("label", { className: "my-2 font-bold" }, " Gender "),
                    React.createElement("select", __assign({}, register('gender'), { className: "rounded border p-1.5 " }),
                        React.createElement("option", { value: "F" }, "female"),
                        React.createElement("option", { value: "M" }, "male")),
                    React.createElement("label", { className: "my-2 font-bold" }, " Age "),
                    React.createElement("select", __assign({}, register('age'), { className: "rounded border p-1.5 " }),
                        React.createElement("option", { value: "C" }, "5-12"),
                        React.createElement("option", { value: "T" }, "13-19"),
                        React.createElement("option", { value: "A" }, "20-25")),
                    React.createElement("label", { className: "my-2 font-bold" }, " Blood Group "),
                    React.createElement("select", __assign({}, register('bloodGroup'), { className: "rounded border p-1.5 " }),
                        React.createElement("option", { value: "O+" }, "O+"),
                        React.createElement("option", { value: "O-" }, "O-"),
                        React.createElement("option", { value: "A+" }, "A+"),
                        React.createElement("option", { value: "A-" }, "A-"),
                        React.createElement("option", { value: "B+" }, "B+"),
                        React.createElement("option", { value: "B-" }, "B-"),
                        React.createElement("option", { value: "AB+" }, "AB+"),
                        React.createElement("option", { value: "AB-" }, "AB-")),
                    React.createElement("label", { className: "my-2 font-bold" }, " Local Address "),
                    React.createElement("div", { className: "grid grid-cols-2" },
                        React.createElement("input", __assign({}, register('district'), { className: "mx-1 my-1 rounded border p-1", placeholder: "District", type: "text" })),
                        React.createElement("input", __assign({ placeholder: "Thana", className: "my-1 mx-1 rounded border p-1 " }, register('thana'), { type: "text" })),
                        React.createElement("input", __assign({ className: "mx-1 my-1 rounded border p-1", placeholder: "Village", type: "text" }, register('village'))),
                        React.createElement("input", __assign({ placeholder: "House", className: "my-1 mx-1 rounded border p-1 ", type: "text" }, register('houseNo'))))),
                React.createElement("div", { className: "flex flex-col p-2  md:p-5" },
                    React.createElement("label", { className: "my-2 font-bold" }, " Local Guardian "),
                    React.createElement("input", __assign({}, register('guardian'), { className: "rounded border p-1 ", type: "text" })),
                    React.createElement("label", { className: "my-2 font-bold" }, " Mobile "),
                    React.createElement("input", __assign({}, register('mobile'), { className: "rounded border p-1 ", type: "number" })),
                    React.createElement("label", { className: "my-2 font-bold" }, " Email "),
                    React.createElement("input", __assign({}, register('email'), { className: "rounded border p-1 ", type: "email" })),
                    React.createElement("label", { className: "my-2 font-bold" }, " Class "),
                    React.createElement("input", __assign({}, register('classNo'), { className: "rounded border p-1", type: "number" })),
                    React.createElement("label", { className: "my-2 font-bold" }, " Admission Year "),
                    React.createElement("input", __assign({}, register('admissionYear'), { className: "rounded border p-1 ", type: "text" })),
                    React.createElement("div", { className: "grid grid-cols-2" },
                        React.createElement("div", { className: "" },
                            React.createElement("input", { className: " hover:white mt-2 w-full rounded border bg-blue-300 font-bold hover:bg-blue-400 hover:underline", type: "submit", value: "Register" }))))))));
};
exports["default"] = Register;
