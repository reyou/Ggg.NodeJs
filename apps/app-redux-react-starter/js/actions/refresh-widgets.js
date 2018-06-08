(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../action-types", "../app-store"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const action_types_1 = require("../action-types");
    const app_store_1 = require("../app-store");
    const createRefreshWidgetsRequestAction = () => ({
        type: action_types_1.actionTypes.REFRESH_WIDGETS_REQUEST,
        widgets: []
    });
    const createRefreshWidgetsDoneAction = (widgets) => ({
        type: action_types_1.actionTypes.REFRESH_WIDGETS_DONE,
        widgets
    });
    exports.refreshWidgets = () => {
        app_store_1.appStore.dispatch(createRefreshWidgetsRequestAction());
        fetch('http://localhost:3010/widgets')
            .then(res => res.json())
            .then(widgets => {
            app_store_1.appStore.dispatch(createRefreshWidgetsDoneAction(widgets));
        });
    };
});
//# sourceMappingURL=refresh-widgets.js.map