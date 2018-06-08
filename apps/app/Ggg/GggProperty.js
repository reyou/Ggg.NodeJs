// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
// A getter can be removed using the delete operator.
//=============================================================================
// This means that you shouldn't use a lazy getter for a property whose value 
// you expect to change, because the getter will not recalculate the value.
//=============================================================================
// Note that attempting to assign a value to latest will not change it.
let getterFun = function () {
    console.log("getterFun");
    var obj = {
        log: ['test'],
        get latest() {
            if (this.log.length == 0) return undefined;
            return this.log[this.log.length - 1];
        }
    }
    // Will return test
    console.log(obj.latest);
    console.log("\n");
}
// 
getterFun();
//=============================================================================
let deleteGetterFun = function () {
    console.log("deleteGetterFun");
    class MyClass {
        constructor() {
            this.value = 5;
        }
        get latest() {
            return this.value * 2;
        }
    }
    var myClass = new MyClass();
    console.log(myClass.latest);
    delete myClass.latest;
    console.log(myClass.latest);
    console.log("\n");
}
//
deleteGetterFun();
//=============================================================================
var definePropertyFun = function () {
    console.log("definePropertyFun");
    var o = { a: 0 };
    Object.defineProperty(o, 'b', { get: function () { return this.a + 1 } });
    console.log(o.b);
    console.log("\n");
}
// 
definePropertyFun();
//=============================================================================
var computedPropertyFun = function () {
    console.log("computedPropertyFun");
    var expr = "foo";
    var obj = {
        get [expr]() { return 'bar'; }
    }
    // "bar"
    console.log(obj.foo);
    console.log("\n");
}
//
computedPropertyFun();
//=============================================================================
let notifierFun = function () {
    console.log("notifierFun");
    console.log("This code should be run at browser!");
    class NotifierClass {
        constructor() {

        }
        get notifier() {
            delete this.notifier;
            // this will normally throw exception on serverside node.js
            // but you can run this code in browser to get an idea 
            // how it works
            return this.notifier = document.getElementById('bookmarked-notification-anchor');
        }
    }
    console.log("\n");
}
//
notifierFun();
//=============================================================================

