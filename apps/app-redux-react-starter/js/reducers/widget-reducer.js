(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../action-types"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const action_types_1 = require("../action-types");
    exports.widgetReducer = (state = { widgets: [] }, action) => {
        switch (action.type) {
            case action_types_1.actionTypes.REFRESH_WIDGETS_REQUEST:
                return Object.assign({}, state, { widgets: [] });
            case action_types_1.actionTypes.REFRESH_WIDGETS_DONE:
                return Object.assign({}, state, { widgets: action.widgets });
            default:
                return state;
        }
    };
});
//# sourceMappingURL=widget-reducer.js.map