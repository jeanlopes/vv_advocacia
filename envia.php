<?php
	echo "Nome: ".$_POST['nome']."<br/>";
	echo "E-mail: ".$_POST['email']."<br/>";
	echo "Telefone: ".$_POST['telefone']."<br/>";
	echo "Mensagem: ".$_POST['mensagem']."<br/>";
	echo "<input type='button' value='Voltar' onClick='history.go(-1)'>";
?>