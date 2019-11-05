

-- Implementar a API, projeto e repositórios diferentes! Como prover autenticação de clientes? Token de Acesso?

-- Validar login de usuário (Tela 01 - Login)
-- EndPoint: ("urldaapi/login")
-- Parâmetros: cpfUsuario e senhaUsuario
-- Deve devolver (Sucesso): JSON com nomeUsuario e permUsuario (1 -> somente app) ou (2 -> app e web) 
-- Deve devolver (Erro): JSON com mensagem erro (Dados incorretos, tente novamente!) 

   SELECT Usuario.nomeUsuario, Usuario.permUsuario
   FROM Usuario
   WHERE Usuario.cpfUsuario = ? '021.030.931-32' and Usuario.senhaUsuario = ? 'teste';



-- Consultar fundos públicos cadastrados (Tela 03, Cadastros)
-- EndPoint: ("urldaapi/fundos")
-- Parâmetros: nenhum
-- Deve devolver (Sucesso): JSON com idFundo, siglaFundo e nomeFundo (por posição)
-- Deve devolver (Erro): JSON com mensagem erro (Não foi possível recuperar a lista de fundos, tente novamente!)

   SELECT Fundo.idFundo, Fundo.siglaFundo, Fundo.nomeFundo
   FROM Fundo



-- Consultar tipos de bem cadastrados (Tela 04, Cadastros)
-- EndPoint: ("urldaapi/tiposBem")
-- Parâmetros: nenhum
-- Deve devolver (Sucesso): JSON com idTipoBem e nomeTipoBem (por posição)
-- Deve devolver (Erro): JSON com mensagem erro (Não foi possível recuperar os tipos de bens cadastrados, tente novamente!)

   SELECT TipoBem.idTipoBem, TipoBem.nomeTipoBem
   FROM TipoBem


-- Consultar subelementos cadastrados (Tela 05, Cadastros->Identificação do bem)
-- EndPoint: ("urldaapi/subElementos")
-- Parâmetros: nenhum
-- Deve devolver (Sucesso): JSON com idSubElemento e descricaoSubElemento (por posição)
-- Deve devolver (Erro): JSON com mensagem erro (Não foi possível recuperar os subelementos cadastrados, tente novamente!)

   SELECT SubElemento.idSubElemento, SubElemento.descricaoSubElemento
   FROM SubElemento


-- Consultar classificações cadastrados (Tela 05, Cadastros->Identificação do bem)
-- EndPoint: ("urldaapi/classificacoes")
-- Parâmetros: nenhum
-- Deve devolver (Sucesso): JSON com idClassificacao e nomeClassificacao (por posição)
-- Deve devolver (Erro): JSON com mensagem erro (Não foi possível recuperar os classificações cadastrados, tente novamente!)

   SELECT Classificacao.idClassificacao, Classificacao.nomeClassificacao
   FROM Classificacao


-- Consultar estados do bem cadastrados (Tela 05, Cadastros->Identificação do bem)
-- EndPoint: ("urldaapi/estadosBem")
-- Parâmetros: nenhum
-- Deve devolver (Sucesso): JSON com idEstadoBem e nomeEstadoBem (por posição)
-- Deve devolver (Erro): JSON com mensagem erro (Não foi possível recuperar os estados do bem cadastrados, tente novamente!)

   SELECT EstadoBem.idEstadobem, EstadoBem.nomeEstadoBem
   FROM EstadoBem


-- Consultar responsáveis pelo bem público cadastrados (Tela 05, Cadastros->Dados do Responsável)
-- EndPoint: ("urldaapi/responsaveis")
-- Parâmetros: nenhum
-- Deve devolver (Sucesso): JSON com idResponsavel, nomeResponsavel e sobrenomeResponsavel (por posição)
-- Deve devolver (Erro): JSON com mensagem erro (Não foi possível recuperar os responsáveis pelo bem público cadastrados, tente novamente!)

   SELECT Responsavel.idResponsavel, Responsavel.nomeResponsavel, Responsavel.sobrenomeResponsavel
   FROM Responsavel


-- Consultar secretarias vinculadas ao fundo público selecionado previamente pelo usuário (Tela 05, Cadastros->Localização do Bem)
-- EndPoint: ("urldaapi/secretariasPorFundo")
-- Parâmetros: idFundo
-- Deve devolver (Sucesso): JSON com idSecretaria, descricaoSecretaria (por posição)
-- Deve devolver (Erro): JSON com mensagem erro (Não foi possível recuperar as secretarias vinculadas ao fundo público selecionado, tente novamente!)

   SELECT Secretaria.idSecretaria, Secretaria.descricaoSecretaria
   FROM Secretaria
   INNER JOIN Fundo
   ON Fundo.idFundo = Secretaria.idFundo
   WHERE Secretaria.idFundo = ? 1;


-- Consultar origens vinculadas ao fundo público e secretaria selecionada previamente pelo usuário (Tela 05, Cadastros->Localização do Bem)
-- EndPoint: ("urldaapi/origensPorFundoESecretaria")
-- Parâmetros: idFundo e idSecretaria
-- Deve devolver (Sucesso): JSON com idOrigem, descricaoOrigem (por posição)
-- Deve devolver (Erro): JSON com mensagem erro (Não foi possível recuperar as origens vinculadas ao fundo público e secretaria selecionada, tente novamente!)

   SELECT Origem.idOrigem, Origem.descricaoOrigem
   FROM Fundo
   INNER JOIN Secretaria
   ON Fundo.idFundo = Secretaria.idFundo
   INNER JOIN Origem
   ON Secretaria.idSecretaria = Origem.idSecretaria
   WHERE Fundo.idFundo = ? 1 and Secretaria.idSecretaria = ? 1


-- Consultar destinos vinculados a fundo público, secretaria e origem selecionados previamente pelo usuário (Tela 05, Cadastros->Localização do Bem)
-- EndPoint: ("urldaapi/destinosPorFundoSecretariaEOrigem")
-- Parâmetros: idFundo, idSecretaria, idOrigem
-- Deve devolver (Sucesso): JSON com idDestino, nomeDestino (por posição)
-- Deve devolver (Erro): JSON com mensagem erro (Não foi possível recuperar os destinos vinculadas ao fundo público, secretaria e origem selecionada, tente novamente!)


   SELECT Destino.idDestino, Destino.nomeDestino
   FROM Fundo
   INNER JOIN Secretaria
   ON Fundo.idFundo = Secretaria.idFundo
   INNER JOIN Origem
   ON Secretaria.idSecretaria = Origem.idSecretaria
   INNER JOIN Destino
   ON Origem.idOrigem = Destino.idOrigem
   WHERE Fundo.idFundo = ? 1 and Secretaria.idSecretaria = ? 1 and Destino.idOrigem = ? 1


-- Consultar sub destinos vinculados a fundo público, secretaria, origem e destino selecionados previamente pelo usuário (Tela 05, Cadastros->Localização do Bem)
-- EndPoint: ("urldaapi/subDestinosPorFundoSecretariaOrigemEDestino")
-- Parâmetros: idFundo, idSecretaria, idOrigem, idDestino
-- Deve devolver (Sucesso): JSON com idSubDestino, nomeSubDestino (por posição)
-- Deve devolver (Erro): JSON com mensagem erro (Não foi possível recuperar os sub destinos vinculadas ao fundo público, secretaria, origem e destino selecionado, tente novamente!)


   SELECT SubDestino.idSubDestino, SubDestino.nomeSubDestino
   FROM Fundo
   INNER JOIN Secretaria
   ON Fundo.idFundo = Secretaria.idFundo
   INNER JOIN Origem
   ON Secretaria.idSecretaria = Origem.idSecretaria
   INNER JOIN Destino
   ON Origem.idOrigem = Destino.idOrigem
   INNER JOIN SubDestino
   ON Destino.idDestino = SubDestino.idDestino
   WHERE Fundo.idFundo = ? 1 and Secretaria.idSecretaria = ? 1 and Destino.idOrigem = ? 1 and SubDestino.idDestino = ? 1



-- Consultar empresas cadastradas no sistema (Tela 05, Cadastros->Dados Contábeis)
-- EndPoint: ("urldaapi/empresas")
-- Parâmetros: nenhum
-- Deve devolver (Sucesso): JSON com idEmpresa, nomeFantEmpresa (por posição)
-- Deve devolver (Erro): JSON com mensagem erro (Não foi possível recuperar as empresas cadastradas no sistema, tente novamente!)
	
   SELECT Empresa.idEmpresa, Empresa.nomeFantEmpresa
   FROM Empresa


-- Consultar contas contábeis cadastradas no sistema (Tela 05, Cadastros->Dados Contábeis)
-- EndPoint: ("urldaapi/contascontabeis")
-- Parâmetros: nenhum
-- Deve devolver (Sucesso): JSON com idContaContabil, descricaoContaContabil (por posição)
-- Deve devolver (Erro): JSON com mensagem erro (Não foi possível recuperar as contas contabeis cadastradas no sistema, tente novamente!)

   SELECT ContaContabil.idContaContabil, ContaContabil.descricaoContaContabil
   FROM ContaContabil


-- Consultar tipos de aquisição cadastradas no sistema (Tela 05, Cadastros->Dados Contábeis)
-- EndPoint: ("urldaapi/tiposaquisicao")
-- Parâmetros: nenhum
-- Deve devolver (Sucesso): JSON com idTipoAquisicao, descricaoTipoAquisição (por posição)
-- Deve devolver (Erro): JSON com mensagem erro (Não foi possível recuperar os tipos de aquisição cadastradas no sistema, tente novamente!)

   SELECT TipoAquisicao.idTipoAquisicao, TipoAquisicao.descricaoTipoAquisicao
   FROM TipoAquisicao


-- Consultar tipos de incorporação cadastradas no sistema (Tela 05, Cadastros->Dados Contábeis)
-- EndPoint: ("urldaapi/tiposincorporacao")
-- Parâmetros: nenhum
-- Deve devolver (Sucesso): JSON com idTipoIncorporacao, descricaoTipoIncorporacao  (por posição)
-- Deve devolver (Erro): JSON com mensagem erro (Não foi possível recuperar os tipos de incorporação cadastrados no sistema, tente novamente!)

   SELECT TipoIncorporacao.idTipoIncorporacao, TipoIncorporacao.descricaoTipoIncorporacao
   FROM TipoIncorporacao



-- Fazer inserção (com transação) para o cadastro de veículos (Tabela Bem + Tabela AtributosTipoVeiculo) (Tela 05, Cadastros->Dados do Veículo)
-- EndPoint: ("urldaapi/??")
-- Parâmetros: ?
-- Deve devolver (Sucesso): JSON com ??  (por posição)
-- Deve devolver (Erro): JSON com mensagem erro (Não foi possível realizar o cadastro do veículo, tente novamente!)


   ??????


-- Fazer inserção do bem após cadastro finalizado (Tela 05, Cadastros)
-- EndPoint: ("urldaapi/salvarCadastro") (POST)

-- Parâmetros: dataCadastroBem, descricao, valorBem = req.body.valorBem, numeroAtualBem, numeroAntigoBem,
               --observacoesBem, qtdACadastrarBem, idUsuario, idFundo, idTipoBem, idSubElemento, idClassificacao,
               --idEstadoBem, idEmpresa, idResponsavel, idOrigem, idDestino, idSubDestino, idContaContabil, idTipoIncorporacao

-- Deve devolver (Sucesso): JSON com status  (sucesso ou erro)
-- Deve devolver (Erro): JSON com mensagem erro (Não foi possível realizar o cadastro do bem, tente novamente!)

   INSERT INTO Bem (dataCadastroBem, descricaoBem, valorBem, numeroAtualBem, numeroAntigoBem, observaçõesBem, qtdACadastrarBem, idUsuario, idFundo, idTipoBem,   	             idSubElemento, idClassificacao, idEstadoBem, idEmpresa, idResponsavel, idOrigem, idDestino, idSubDestino, idContaContabil, idTipoAquisicao,
                    idTipoIncorporacao) 
   VALUES ('2019-12-12', 'Cadeira Fixa Almofadada', 5000.00, 023345, 012345, 'Recepção, Atrás do Balcão', '2', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1);



-- Fazer consulta do determinado bem através de seu número patrimonial (Tabela de Bem Recupera os IDs + Inner Join nas demais para coletar as descrições) 
-- (Tela 06, Consultas)
-- EndPoint: ("urldaapi/consultaPorNumeroPatrimonio")
-- Parâmetros: numeroAtualBem
-- Deve devolver (Sucesso): JSON com todos os dados do bem  (por posição)
-- Deve devolver (Erro): JSON com mensagem erro (Não foi possível consultar os dados do bem, tente novamente! ou Bem não cadastrado!)

   SELECT Bem.dataCadastroBem, Bem.descricaoBem, Bem.valorBem, Bem.numeroAtualBem, Bem.numeroAntigoBem, Bem.observaçõesBem, Fundo.nomeFundo, TipoBem.nomeTipoBem,   	    	   SubElemento.descricaoSubElemento, Classificacao.nomeClassificacao, EstadoBem.nomeEstadoBem, Empresa.nomeFantEmpresa, Responsavel.nomeResponsavel,   		   	  Responsavel.sobrenomeResponsavel, Origem.descricaoOrigem, Destino.nomeDestino, SubDestino.nomeSubDestino, ContaContabil.descricaoContaContabil, 			 	TipoAquisicao.descricaoTipoAquisicao, TipoIncorporacao.descricaoTipoIncorporacao
 
       FROM Bem
       INNER JOIN Fundo
       ON Fundo.idFundo = Bem.idFundo
       INNER JOIN TipoBem
       ON TipoBem.idTipoBem = Bem.idTipoBem
       INNER JOIN SubElemento
       ON SubElemento.idSubElemento = Bem.idSubElemento
       INNER JOIN Classificacao
       ON Classificacao.idClassificacao = Bem.idClassificacao
       INNER JOIN EstadoBem
       ON EstadoBem.idEstadoBem = Bem.idEstadoBem
       INNER JOIN Empresa
       ON Empresa.idEmpresa = Bem.idEmpresa
       INNER JOIN Responsavel
       ON Responsavel.idResponsavel = Bem.idResponsavel
       INNER JOIN Origem
       ON Origem.idOrigem = Bem.idOrigem
       INNER JOIN Destino
       ON Destino.idDestino = Bem.idDestino
       INNER JOIN SubDestino
       ON SubDestino.idSubDestino = Bem.idSubDestino
       INNER JOIN ContaContabil
       ON ContaContabil.idContaContabil = Bem.idContaContabil
       INNER JOIN TipoAquisicao
       ON TipoAquisicao.idTipoAquisicao = Bem.idTipoAquisicao
       INNER JOIN TipoIncorporacao
       ON TipoIncorporacao.idTipoIncorporacao = Bem.idTipoIncorporacao
       WHERE Bem.numeroAtualBem = 023345

