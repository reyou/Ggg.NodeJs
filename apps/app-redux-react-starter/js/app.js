(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "react", "react-dom", "./components/widget-table-container", "./app-store", "./actions/refresh-widgets"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const React = require("react");
    const ReactDOM = require("react-dom");
    const widget_table_container_1 = require("./components/widget-table-container");
    const app_store_1 = require("./app-store");
    const refresh_widgets_1 = require("./actions/refresh-widgets");
    ReactDOM.render(React.createElement(widget_table_container_1.WidgetTableContainer, { store: app_store_1.appStore }), document.querySelector('main'));
    refresh_widgets_1.refreshWidgets();
});
//# sourceMappingURL=app.js.map