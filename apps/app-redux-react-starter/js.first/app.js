(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "redux"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const redux_1 = require("redux");
    var actionTypes;
    (function (actionTypes) {
        actionTypes[actionTypes["ADD"] = 0] = "ADD";
        actionTypes[actionTypes["SUBSTRACT"] = 1] = "SUBSTRACT";
    })(actionTypes || (actionTypes = {}));
    // delegate
    const createAddAction = (value) => ({
        type: actionTypes.ADD,
        value
    });
    // delegate
    const createSubstractAction = (value) => ({
        type: actionTypes.SUBSTRACT,
        value
    });
    const sumReducer = (state = 0, action) => {
        switch (action.type) {
            case actionTypes.ADD:
                return state + action.value;
            case actionTypes.SUBSTRACT:
                return state - action.value;
            default:
                return state;
        }
    };
    const historyReducer = (state = [], action) => {
        switch (action.type) {
            case actionTypes.ADD:
                return state.concat(`op: add, value: ${action.value}`);
            case actionTypes.SUBSTRACT:
                return state.concat(`op: subtract, value: ${action.value}`);
            default:
                return state;
        }
    };
    const reducersMap = {
        sum: sumReducer,
        history: historyReducer
    };
    // there would be less js if you use vanilla.js
    // but strongly typed is awesome and TypeScript as well!
    const appStore = redux_1.createStore(redux_1.combineReducers(reducersMap));
    appStore.subscribe(() => {
        console.log("action was dispatched, state was reduced. ");
        console.log(appStore.getState());
    });
    appStore.dispatch(createAddAction(2));
    appStore.dispatch(createSubstractAction(4));
    appStore.dispatch(createAddAction(3));
    appStore.dispatch(createSubstractAction(7));
    appStore.dispatch(createAddAction(1));
});
//# sourceMappingURL=app.js.map