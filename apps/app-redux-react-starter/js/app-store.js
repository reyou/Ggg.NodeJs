(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "redux", "./reducers/widget-reducer"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const redux_1 = require("redux");
    const widget_reducer_1 = require("./reducers/widget-reducer");
    exports.appStore = redux_1.createStore(widget_reducer_1.widgetReducer);
});
//# sourceMappingURL=app-store.js.map