
var socket = io('127.0.0.1:3001');

socket.on('connect', function () {

    socket.on('message', function (nome ,mensagem) {
        if (nome == 'admin')
            $('#messages').append($('<li>').text('admin: ' + mensagem));
    });
});


$('form').submit(function(){
    var msg = $('#message_field').val();
    socket.send('guest', msg);
    $('#messages').append($('<li>').text('visitante: '  + msg));
    $('#message_field').val('');
    return false;
});