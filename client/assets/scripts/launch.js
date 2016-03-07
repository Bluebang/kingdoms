var boot = require('boot')
cc.Class({
    extends: cc.Component,

    properties: {
        startBtn:{
            default:null,
            type: cc.Button
        },
        gameName: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {

    },

    // called every frame
    update: function (dt) {

    },

    onGameStart:function()
    {
        alert("on start");
        var host = '127.0.0.1';
        var port = '3010';
        pomelo.init({
            host: host,
            port: port,
            user: {},
            log: true,
            handshakeCallback : function(){}
        }, function() {
            console.log('success');
            pomelo.request("connector.entryHandler.entry", "hello pomelo", function(data) {
                alert(data.msg);
                cc.director.loadScene('main');
            });
           // cc.director.loadScene('main');
        });


    },
});
