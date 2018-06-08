(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "react", "./widget-table"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const React = require("react");
    const widget_table_1 = require("./widget-table");
    class WidgetTableContainer extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                widgets: []
            };
        }
        componentDidMount() {
            this.unsubscribe = this.props.store.subscribe(() => {
                this.setState({
                    widgets: this.props.store.getState().widgets
                });
            });
        }
        componentWillUnmount() {
            this.unsubscribe();
        }
        render() {
            return React.createElement(widget_table_1.WidgetTable, { widgets: this.state.widgets });
        }
    }
    exports.WidgetTableContainer = WidgetTableContainer;
});
//# sourceMappingURL=widget-table-container.js.map