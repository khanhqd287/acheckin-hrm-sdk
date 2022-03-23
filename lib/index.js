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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ACheckinSDK = exports.PICKER_TYPE = void 0;
var PICKER_TYPE;
(function (PICKER_TYPE) {
    PICKER_TYPE["MONTH"] = "MONTH";
    PICKER_TYPE["DATE"] = "DATE";
    PICKER_TYPE["TIME"] = "TIME";
    PICKER_TYPE["DATE_TIME"] = "DATE_TIME";
})(PICKER_TYPE = exports.PICKER_TYPE || (exports.PICKER_TYPE = {}));
var ACheckinSDK = (function () {
    function ACheckinSDK() {
    }
    ACheckinSDK.init = function (options) {
        if (options === void 0) { options = {}; }
        if (typeof window.ACheckin.handleSDK !== "function") {
            throw new Error("Bạn phải sử dụng sdk trong ứng dụng ACheckin HRM");
        }
        ACheckinSDK.sdk_ready = true;
        window.ACheckin.handleSDK("init", {
            title: options.title || null,
            barStyle: options.barStyle || 'dark-content',
        }).catch();
    };
    ACheckinSDK.validInitSDK = function () {
        if (!ACheckinSDK.sdk_ready) {
            throw new Error("SDK chưa được khởi tạo, vui lòng gọi init()");
        }
    };
    ACheckinSDK.getInitConfig = function () {
        ACheckinSDK.validInitSDK();
        return window.ACheckin.handleSDK("getInitConfig");
    };
    ACheckinSDK.setItem = function (key, value) {
        ACheckinSDK.validInitSDK();
        return window.ACheckin.handleSDK("setItem", {
            key: key,
            value: value
        });
    };
    ACheckinSDK.getItem = function (key) {
        ACheckinSDK.validInitSDK();
        return window.ACheckin.handleSDK("getItem", {
            key: key
        });
    };
    ACheckinSDK.getDeviceInfo = function (fields) {
        ACheckinSDK.validInitSDK();
        return window.ACheckin.handleSDK("getDeviceInfo", {
            fields: fields
        });
    };
    ACheckinSDK.readBarCode = function () {
        ACheckinSDK.validInitSDK();
        return window.ACheckin.handleSDK("readBarCode");
    };
    ACheckinSDK.getCurrentLocation = function () {
        ACheckinSDK.validInitSDK();
        return window.ACheckin.handleSDK("getCurrentLocation");
    };
    ACheckinSDK.openDatePicker = function (fields) {
        ACheckinSDK.validInitSDK();
        return window.ACheckin.handleSDK("openDatePicker", __assign({}, fields));
    };
    ACheckinSDK.openCalendarPicker = function (fields) {
        ACheckinSDK.validInitSDK();
        return window.ACheckin.handleSDK("openCalendarPicker", __assign({}, fields));
    };
    ACheckinSDK.openStaffsPicker = function (fields) {
        ACheckinSDK.validInitSDK();
        return window.ACheckin.handleSDK("openStaffsPicker", __assign({}, fields));
    };
    ACheckinSDK.requestAPI = function (fields) {
        ACheckinSDK.validInitSDK();
        return window.ACheckin.handleSDK("requestAPI", fields);
    };
    ACheckinSDK.setLocalNotification = function (options) {
        ACheckinSDK.validInitSDK();
        return window.ACheckin.handleSDK("setLocalNotification", __assign({ title: options.title, body: options.body }, (options.schedule_time && { schedule_time: options.schedule_time })));
    };
    ACheckinSDK.vibrate = function () {
        ACheckinSDK.validInitSDK();
        return window.ACheckin.handleSDK("vibrate");
    };
    ACheckinSDK.openUrl = function (url) {
        return window.ACheckin.handleSDK("openUrl", {
            url: url
        });
    };
    ACheckinSDK.copyString = function (data) {
        return window.ACheckin.handleSDK("copyString", data);
    };
    ACheckinSDK.showAlert = function (fields) {
        return window.ACheckin.handleSDK("showAlert", fields);
    };
    ACheckinSDK.takePhoto = function () {
        ACheckinSDK.validInitSDK();
        return window.ACheckin.handleSDK("takePhoto", {});
    };
    ACheckinSDK.checkinAppliance = function (fields) {
        ACheckinSDK.validInitSDK();
        return window.ACheckin.handleSDK("checkinAppliance", fields);
    };
    ACheckinSDK.getInitPage = function () {
        ACheckinSDK.validInitSDK();
        return window.ACheckin.handleSDK("getInitPage", {});
    };
    ACheckinSDK.sdk_ready = false;
    return ACheckinSDK;
}());
exports.ACheckinSDK = ACheckinSDK;
