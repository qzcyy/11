
var io = {
    init: function (server) {
        var io = require('socket.io')(server);
        io.sockets.on('connection', function (socket) {
            socket.on('request', function (data) {
                socket.emit('send', {
                    msg: '我收到的信息是' + data,
                    user: 'admin'
                })
                console.log('提交')
            })
        })
    }
}


module.exports = io