var javascriptPage = function(){
    this.methodOverload= function(){
        console.log('test');
    };
    this.methodOverload = function(test){
        console.log(test);
    };
    this.methodOverload = function(data1,data2){
        console.log('result :'+(data1+data2));
    }
};
module.exports = new javascriptPage;