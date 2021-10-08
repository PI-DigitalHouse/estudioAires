$servidor = 'localhost';
$banco = 'u478463865_estudioAires';
$usuario = 'u478463865_henrique';
$senha = 'Balsimelli!23';
$link = mysql_connect($servidor, $usuario, $senha);
$db = mysql_select_db($banco,$link);
if(!$link)
{
echo "erro ao conectar ao banco de dados!";exit();
}