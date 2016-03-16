// note, io(<port>) will create a http server for you
var io = require('socket.io')(3001);

var ids = [];
var admin_id = null;

io.on('connection', function (socket) {

    console.log('socket id: ' + socket.id);

    socket.on('message', function (nome, mensagem) {

        console.log('o servidor recebeu uma mensagem');
        socket.broadcast.send(nome , mensagem);

    });

    socket.on('disconnect', function () {
        socket.broadcast.send('user disconnected');
    });
});