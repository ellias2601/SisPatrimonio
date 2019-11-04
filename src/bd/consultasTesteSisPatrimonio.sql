
--Listar Fundos, Secretarias, Origens, Destinos e SubDestinos relacionados entre si

select nomeFundo, descricaoSecretaria, descricaoOrigem, nomeDestino, nomeSubDestino from Fundo inner join Secretaria on Fundo.idFundo = Secretaria.idFundo inner join Origem on Secretaria.idSecretaria = Origem.Secretaria_idSecretaria inner join Destino on Origem.idOrigem = Destino.idOrigem inner join SubDestino on Destino.idDestino = SubDestino.idDestino 

-- Listar Origens, Destinos e SubDestinos relacionados entre si, onde o fundo for 1 (secretaria de saúde)

select nomeFundo, descricaoSecretaria, descricaoOrigem, nomeDestino, nomeSubDestino from Fundo inner join Secretaria on Fundo.idFundo = Secretaria.idFundo inner join Origem on Secretaria.idSecretaria = Origem.Secretaria_idSecretaria inner join Destino on Origem.idOrigem = Destino.idOrigem inner join SubDestino on Destino.idDestino = SubDestino.idDestino where Fundo.idFundo = 1 


-- Descobrir a secretaria a qual o fundo municipal de educação está ligado
select Secretaria.descricaoSecretaria from Secretaria inner join Fundo on Secretaria.idFundo = Fundo.idFundo where Fundo.nomeFundo = 'Fundo Municipal de Educação' 


-- Descobrir possiveis destinos para a origem 1 (almoxarifado 01 saúde)

select nomeDestino from Fundo inner join Secretaria on Fundo.idFundo = Secretaria.idFundo inner join Origem on Secretaria.idSecretaria = Origem.Secretaria_idSecretaria inner join Destino on Origem.idOrigem = Destino.idOrigem where Origem.idOrigem = 1; 


-- Descobrir Secretarias atraves de um fundo

select Secretaria.descricaoSecretaria from Secretaria inner join Fundo on Secretaria.idFundo = Fundo.idFundo where Fundo.idFundo = 1 

-- Descobrir origens disponíveis para um fundo

select Origem.descricaoOrigem from Secretaria inner join Fundo on Secretaria.idFundo = Fundo.idFundo inner join Origem on Secretaria.idSecretaria = Origem.Secretaria_idSecretaria where Fundo.idFundo = 1 

