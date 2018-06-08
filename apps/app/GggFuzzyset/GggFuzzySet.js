// http://glench.github.io/fuzzyset.js/
//=============================================================================
let FuzzySet = require("fuzzyset.js");
//=============================================================================
let fuzzyFun = function () {
    console.log("fuzzyFun");
    let a = FuzzySet(['Michael Axiak']);
    let result = a.get("micael asiak");
    console.log(result);
    console.log("\n");
}
//
fuzzyFun();
//=============================================================================
let sameFun = function () {
    console.log("sameFun");
    let text1 = "http://glench.github.io/fuzzyset.js/";
    let text2 = "http://glench.github.io/fuzzyset.js/";
    let set1 = FuzzySet([text1]);
    let result = set1.get(text2);
    console.log(result);
    console.log("\n");
}
//
sameFun();
//=============================================================================
let somewhatSimilarFun = function () {
    console.log("somewhatSimilarFun");
    let text1 = "http://glench.github.io/fuzzyset.js/";
    let text2 = "https://www.glench.github.io/fuzzyset.js/";
    let set1 = FuzzySet([text1]);
    let result = set1.get(text2);
    console.log(result);
    console.log(parseInt(result[0][0] * 100));
    console.log("\n");
}
//
somewhatSimilarFun();
//=============================================================================