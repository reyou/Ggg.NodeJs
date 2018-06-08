(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "react"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const React = require("react");
    class WidgetTable extends React.Component {
        render() {
            return React.createElement("table", null,
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "Name"),
                        React.createElement("th", null, "Color"),
                        React.createElement("th", null, "Size"),
                        React.createElement("th", null, "Quantity"))),
                React.createElement("tbody", null, this.props.widgets.map(widget => React.createElement("tr", { key: widget.id },
                    React.createElement("td", null, widget.name),
                    React.createElement("td", null, widget.color),
                    React.createElement("td", null, widget.size),
                    React.createElement("td", null, widget.quantity)))));
        }
    }
    exports.WidgetTable = WidgetTable;
});
//# sourceMappingURL=widget-table.js.map