<?php

if (isset($_POST['nome']) && !empty($_POST['nome'])) {
	
	$nome = addslashes($_POST['nome']);
	$tel = addslashes($_POST['tel']);
	$email = addslashes($_POST['email']);
	$msg = addslashes($_POST['msg']);


	$para     = "Cristianhiei@gmail.com";
	$assunto  = "Pergunta do Contato";
	$corpo    = "Nome: ".$nome." - E-mail: ".$email." -Mensagem: ".$msg;
	$cabecalho= "From: stylexxorigens@gmail.com"."\r\n".
				"Replay-To: ".$email."\r\n".
				"X-Mailer: PHP/".phpversion();

				mail($para, $assunto, $corpo, $cabecalho);				

				}if (mail($para, $assunto, $corpo, $cabecalho)) {				
					?>
					<script >						
					alert("Sua mensagem foi enviada com Sucesso irei entrar em contato o mais rápido possível!");
					history.go(-1);					
					</script>
				<?php				
			}else{
				?>
				<script >
					alert("Ocorreu um erro. Tente nos icones do menu");
					history.go(-1);
					</script>
			}<?php
				
				}


?>

