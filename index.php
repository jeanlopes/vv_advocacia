<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
        <!-- Optional theme -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">
        <link rel="stylesheet" href="css/site.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <!-- Latest compiled and minified JavaScript -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
        <script src="https://cdn.socket.io/socket.io-1.4.5.js"></script>
    </head>
    <body>
        <header>
            <nav class="navbar navbar-default navbar-fixed-top">
                <div class="container">
                  <div class="navbar-header">
                      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                      </button>
                    <a class="navbar-brand" href="#home">Advogados Associados</a>
                  </div>
                  <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                      <li class="active"><a href="#index">Home</a></li>
                      <li><a href="#institucional">Institucional</a></li>
                      <li><a href="#atuacao">Áreas de atuação</a></li>
                      <li><a href="#contato">Contato</a></li>
                      <li><a href="#chat">Chat</a></li>
                    </ul>
                  </div>
                </div>
            </nav>
        </header>
        <div id="content">
            <?php include 'home.php'; ?>
            <?php include 'institucional.php'; ?>
            <?php include 'atuacao.php'; ?>
            <?php include 'contato.php'; ?>
            <?php include 'chat.php'; ?>
        </div>
        <footer>
            <p>
                Rua Coronel Vicente, 281 - 90030-040 - Bairro Centro - Porto Alegre/RS <br>
                Tel. +55 (51) 3930-6027 - E-mail: <a href="mailto:advogados@associados.uy">advogados@associados.uy</a><br>
                ©Copyright 2016 - Todos os direitos reservados.<br/>
                Desenvolvido por: Fábio C.S. Miranda, Cícero Costa, Rodrigo Vieira, Matheus Barbosa.
            </p>
        </footer>
        <script type="text/javascript" src="./js/client.js" ></script>
    </body>
</html>
