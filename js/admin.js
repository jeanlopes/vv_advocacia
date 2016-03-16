
var socket = io('127.0.0.1:3001');

socket.on('connect', function () {


    socket.on('message', function (nome ,mensagem) {
        if (nome == 'guest')
            $('#messages').append($('<li>').text('guest: ' + mensagem));
    });
});


$('form').submit(function(){
    var msg = $('#message_field').val();
    socket.send('admin', msg);
    $('#messages').append($('<li>').text('admin: '  + msg));
    $('#message_field').val('');
    return false;
});
