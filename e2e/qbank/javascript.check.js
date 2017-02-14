var javascriptPage = require('./javascript.check.js');
var test = require('npm-publish-check');

describe('javascript check', function(){
   // var jPage = new javascriptPage();
    it('method overload check',function(){
        test.printMessageJS();
     //   javascriptPage
    });
/*
    function test(){
        console.log('test')
    }
    function test(data1){
        console.log(data1);
    }
    function test(){
        console.log('test2');
    }
    */
});