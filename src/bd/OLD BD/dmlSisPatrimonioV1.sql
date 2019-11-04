INSERT INTO Usuario (nomeUsuario,sobrenomeUsuario,cpfUsuario,ruaUsuario,bairroUsuario, numeroUsuario, cepUsuario, telefoneUsuario, permUsuario, senhaUsuario) VALUES ('Ellias', 'Lacerda', '021.030.931-32', 'Rua 06', 'Vila Multirão', 22, '75400-000', '(062) 995575494', 1, 'teste');

-------------------------------------------------

INSERT INTO SubElemento (descricaoSubElemento) VALUES ('Aparelhos e Utensilios Domésticos');

INSERT INTO SubElemento (descricaoSubElemento) VALUES ('Mobiliario em Geral');

INSERT INTO SubElemento (descricaoSubElemento) VALUES ('Aparelhos e Equipamentos Hospitalares');

----------------------------------------------

INSERT INTO Classificacao (nomeClassificacao) VALUES('Cadeira');

INSERT INTO Classificacao (nomeClassificacao) VALUES('Mesa');

INSERT INTO Classificacao (nomeClassificacao) VALUES('Estetoscópio');

---------------------------------------------

INSERT INTO Responsavel (nomeResponsavel, sobrenomeResponsavel, cpfResponsavel, ruaResponsavel, bairroResponsavel, numeroResponsavel, cepResponsavel, telefoneResponsavel) VALUES('José', 'da Silva', '023.323.234-23', 'Rua 24', 'Vila Caiçara', 22, '75453-000', '062 995432323');

--------------------------------------------

INSERT INTO Empresa (nomeFantEmpresa, razaoSocEmpresa, cnpjEmpresa, ruaEmpresa, bairroEmpresa, numeroEmpresa, cepEmpresa, telefoneEmpresa) VALUES ('Papelaria Tributária S.A', 'José da Silva Comercial S.A', '22.345.765/2345-12', 'Rua 44', 'Vila Caiapônia', 22, '54567-034', '062 34561212');

--------------------------------------------

INSERT INTO TipoBem (nomeTipoBem, precisaCampEspBem) VALUES ('Móveis', 1);

INSERT INTO TipoBem (nomeTipoBem, precisaCampEspBem) VALUES ('Imóveis', 1);

INSERT INTO TipoBem (nomeTipoBem, precisaCampEspBem) VALUES ('Veículos', 2);

-------------------------------------------

INSERT INTO AtributosTipoVeiculo (numeroDocumentoVeiculo, modeloVeiculo, tipoCombustivelVeiculo, marcaVeiculo, anoVeiculo, placaVeiculo, chassiVeiculo, idTipoBem) VALUES ('2332323', 'VW Gol Sport', 'Gasolina', 'Volksvagen', 2012, 'PKL-2345', 'ESDSDF5456567DFDF', 1);

-------------------------------------------

INSERT INTO Fundo (nomeFundo,siglaFundo, cnpjFundo) VALUES('Fundo Municipal de Saúde', 'FMS', '34.345.234/1245-12');

INSERT INTO Fundo (nomeFundo,siglaFundo, cnpjFundo) VALUES('Fundo Municipal de Educação', 'FME', '33.342.232/1244-11');

-------------------------------------------

INSERT INTO Secretaria (descricaoSecretaria, idFundo) VALUES ('Secretaria Municipal de Saúde', 1);

INSERT INTO Secretaria (descricaoSecretaria, idFundo) VALUES ('Secretaria Municipal de Educação', 2);

------------------------------------------

INSERT INTO Origem (descricaoOrigem, ruaOrigem, bairroOrigem, numeroOrigem, cepOrigem, telefoneOrigem, Secretaria_idSecretaria) VALUES ('Almoxarifado 01 Saúde', 'Rua 56', 'Vila América', 22,'75467-000','062 35143434', 1);

INSERT INTO Origem (descricaoOrigem, ruaOrigem, bairroOrigem, numeroOrigem, cepOrigem, telefoneOrigem, Secretaria_idSecretaria) VALUES ('Depósito Municipal da Educação', 'Rua 56', 'Vila América', 22,'75467-000','062 35143434', 2);

-----------------------------------------

INSERT INTO Destino(nomeDestino,idOrigem) VALUES ('UBS Floriano Peixoto', 1);

INSERT INTO Destino(nomeDestino,idOrigem) VALUES ('Creche Vó Maria', 2);

-----------------------------------------

INSERT INTO SubDestino(nomeSubDestino,idDestino) VALUES ('Coordenação', 2);

INSERT INTO SubDestino(nomeSubDestino,idDestino) VALUES ('Sala de Vacina', 3);

-----------------------------------------

INSERT INTO Bem (dataCadastroBem, descricaoBem, valorBem, numeroAtualBem, numeroAntigoBem, observaçõesBem, qtdACadastrarBem, idUsuario, idFundo, idTipoBem, idSubElemento, idClassificacao, idEmpresa, idResponsavel, idOrigem, idDestino, idSubDestino) VALUES ('2019-12-12', 'Cadeira Fixa Almofadada', 5000.00, 023345, 012345, 'Recepção, Atrás do Balcão', '2', 1, 1, 1, 2, 1, 1, 1, 1, 3, 2);





