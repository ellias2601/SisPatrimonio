-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema SisPatr
-- -----------------------------------------------------
CREATE DATABASE `SisPatr`;
-- -----------------------------------------------------
-- Schema SisPatr
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `SisPatr` DEFAULT CHARACTER SET utf8 ;
USE `SisPatr` ;

-- -----------------------------------------------------
-- Table `SisPatr`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SisPatr`.`Usuario` (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `nomeUsuario` VARCHAR(45) NOT NULL,
  `sobrenomeUsuario` VARCHAR(60) NOT NULL,
  `cpfUsuario` VARCHAR(14) NOT NULL,
  `ruaUsuario` VARCHAR(30) NOT NULL,
  `bairroUsuario` VARCHAR(30) NOT NULL,
  `numeroUsuario` INT NOT NULL,
  `cepUsuario` VARCHAR(9) NOT NULL,
  `telefoneUsuario` VARCHAR(18) NOT NULL,
  `permUsuario` INT NOT NULL,
  `senhaUsuario` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idUsuario`),
  UNIQUE INDEX `cpfUsuario_UNIQUE` (`cpfUsuario` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SisPatr`.`Fundo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SisPatr`.`Fundo` (
  `idFundo` INT NOT NULL AUTO_INCREMENT,
  `nomeFundo` VARCHAR(60) NOT NULL,
  `siglaFundo` VARCHAR(4) NOT NULL,
  `cnpjFundo` VARCHAR(18) NOT NULL,
  PRIMARY KEY (`idFundo`),
  UNIQUE INDEX `cnpjFundo_UNIQUE` (`cnpjFundo` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SisPatr`.`TipoBem`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SisPatr`.`TipoBem` (
  `idTipoBem` INT NOT NULL AUTO_INCREMENT,
  `nomeTipoBem` VARCHAR(45) NOT NULL,
  `precisaCampEspBem` INT NOT NULL,
  PRIMARY KEY (`idTipoBem`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SisPatr`.`SubElemento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SisPatr`.`SubElemento` (
  `idSubElemento` INT NOT NULL AUTO_INCREMENT,
  `descricaoSubElemento` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`idSubElemento`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SisPatr`.`Empresa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SisPatr`.`Empresa` (
  `idEmpresa` INT NOT NULL AUTO_INCREMENT,
  `nomeFantEmpresa` VARCHAR(60) NOT NULL,
  `razaoSocEmpresa` VARCHAR(60) NOT NULL,
  `cnpjEmpresa` VARCHAR(18) NOT NULL,
  `ruaEmpresa` VARCHAR(30) NOT NULL,
  `bairroEmpresa` VARCHAR(30) NOT NULL,
  `numeroEmpresa` INT NOT NULL,
  `cepEmpresa` VARCHAR(9) NOT NULL,
  `telefoneEmpresa` VARCHAR(18) NOT NULL,
  PRIMARY KEY (`idEmpresa`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SisPatr`.`Secretaria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SisPatr`.`Secretaria` (
  `idSecretaria` INT NOT NULL AUTO_INCREMENT,
  `descricaoSecretaria` VARCHAR(60) NOT NULL,
  `idFundo` INT NOT NULL,
  PRIMARY KEY (`idSecretaria`),
  INDEX `fk_Secretaria_Fundo1_idx` (`idFundo` ASC),
  CONSTRAINT `fk_Secretaria_Fundo1`
    FOREIGN KEY (`idFundo`)
    REFERENCES `SisPatr`.`Fundo` (`idFundo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SisPatr`.`Origem`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SisPatr`.`Origem` (
  `idOrigem` INT NOT NULL AUTO_INCREMENT,
  `descricaoOrigem` VARCHAR(60) NOT NULL,
  `ruaOrigem` VARCHAR(30) NOT NULL,
  `bairroOrigem` VARCHAR(30) NOT NULL,
  `numeroOrigem` INT NOT NULL,
  `cepOrigem` VARCHAR(9) NOT NULL,
  `telefoneOrigem` VARCHAR(18) NOT NULL,
  `idSecretaria` INT NOT NULL,
  PRIMARY KEY (`idOrigem`),
  INDEX `fk_Origem_Secretaria1_idx` (`idSecretaria` ASC),
  CONSTRAINT `fk_Origem_Secretaria1`
    FOREIGN KEY (`idSecretaria`)
    REFERENCES `SisPatr`.`Secretaria` (`idSecretaria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SisPatr`.`Destino`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SisPatr`.`Destino` (
  `idDestino` INT NOT NULL AUTO_INCREMENT,
  `nomeDestino` VARCHAR(60) NOT NULL,
  `idOrigem` INT NOT NULL,
  PRIMARY KEY (`idDestino`),
  INDEX `fk_Destino_Origem1_idx` (`idOrigem` ASC),
  CONSTRAINT `fk_Destino_Origem1`
    FOREIGN KEY (`idOrigem`)
    REFERENCES `SisPatr`.`Origem` (`idOrigem`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SisPatr`.`SubDestino`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SisPatr`.`SubDestino` (
  `idSubDestino` INT NOT NULL AUTO_INCREMENT,
  `nomeSubDestino` VARCHAR(60) NOT NULL,
  `idDestino` INT NOT NULL,
  PRIMARY KEY (`idSubDestino`),
  INDEX `fk_SubDestino_Destino1_idx` (`idDestino` ASC),
  CONSTRAINT `fk_SubDestino_Destino1`
    FOREIGN KEY (`idDestino`)
    REFERENCES `SisPatr`.`Destino` (`idDestino`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SisPatr`.`Classificacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SisPatr`.`Classificacao` (
  `idClassificacao` INT NOT NULL AUTO_INCREMENT,
  `nomeClassificacao` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`idClassificacao`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SisPatr`.`Responsavel`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SisPatr`.`Responsavel` (
  `idResponsavel` INT NOT NULL AUTO_INCREMENT,
  `nomeResponsavel` VARCHAR(45) NOT NULL,
  `sobrenomeResponsavel` VARCHAR(60) NOT NULL,
  `cpfResponsavel` VARCHAR(14) NOT NULL,
  `ruaResponsavel` VARCHAR(30) NOT NULL,
  `bairroResponsavel` VARCHAR(30) NOT NULL,
  `numeroResponsavel` INT NOT NULL,
  `cepResponsavel` VARCHAR(9) NOT NULL,
  `telefoneResponsavel` VARCHAR(18) NOT NULL,
  PRIMARY KEY (`idResponsavel`),
  UNIQUE INDEX `cpfResponsavel_UNIQUE` (`cpfResponsavel` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SisPatr`.`EstadoBem`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SisPatr`.`EstadoBem` (
  `idEstadoBem` INT NOT NULL AUTO_INCREMENT,
  `nomeEstadoBem` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`idEstadoBem`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SisPatr`.`ContaContabil`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SisPatr`.`ContaContabil` (
  `idContaContabil` INT NOT NULL AUTO_INCREMENT,
  `descricaoContaContabil` VARCHAR(120) NOT NULL,
  `codigoContaContabil` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idContaContabil`),
  UNIQUE INDEX `idContaContabil_UNIQUE` (`idContaContabil` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SisPatr`.`TipoAquisicao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SisPatr`.`TipoAquisicao` (
  `idTipoAquisicao` INT NOT NULL AUTO_INCREMENT,
  `descricaoTipoAquisicao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idTipoAquisicao`),
  UNIQUE INDEX `idTipoAquisicao_UNIQUE` (`idTipoAquisicao` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SisPatr`.`TipoIncorporacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SisPatr`.`TipoIncorporacao` (
  `idTipoIncorporacao` INT NOT NULL AUTO_INCREMENT,
  `descricaoTipoIncorporacao` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`idTipoIncorporacao`),
  UNIQUE INDEX `idTipoIncorporacao_UNIQUE` (`idTipoIncorporacao` ASC),
  UNIQUE INDEX `descricaoTipoIncorporacao_UNIQUE` (`descricaoTipoIncorporacao` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SisPatr`.`Bem`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SisPatr`.`Bem` (
  `idBem` INT NOT NULL AUTO_INCREMENT,
  `dataCadastroBem` DATE NOT NULL,
  `descricaoBem` VARCHAR(60) NOT NULL,
  `valorBem` DOUBLE NOT NULL,
  `numeroAtualBem` INT NOT NULL,
  `numeroAntigoBem` INT NOT NULL,
  `observaçõesBem` VARCHAR(60) NOT NULL,
  `qtdACadastrarBem` VARCHAR(8) NOT NULL,
  `idUsuario` INT NOT NULL,
  `idFundo` INT NOT NULL,
  `idTipoBem` INT NOT NULL,
  `idSubElemento` INT NOT NULL,
  `idClassificacao` INT NOT NULL,
  `idEstadoBem` INT NOT NULL,
  `idEmpresa` INT NOT NULL,
  `idResponsavel` INT NOT NULL,
  `idOrigem` INT NOT NULL,
  `idDestino` INT NOT NULL,
  `idSubDestino` INT NOT NULL,
  `idContaContabil` INT NOT NULL,
  `idTipoAquisicao` INT NOT NULL,
  `idTipoIncorporacao` INT NOT NULL,
  `idSecretaria` INT NOT NULL,
  PRIMARY KEY (`idBem`),
  INDEX `fk_Bem_Usuario_idx` (`idUsuario` ASC),
  INDEX `fk_Bem_SubElemento1_idx` (`idSubElemento` ASC),
  INDEX `fk_Bem_Classificacao1_idx` (`idClassificacao` ASC),
  INDEX `fk_Bem_Empresa1_idx` (`idEmpresa` ASC),
  INDEX `fk_Bem_Responsavel1_idx` (`idResponsavel` ASC),
  INDEX `fk_Bem_Origem1_idx` (`idOrigem` ASC),
  INDEX `fk_Bem_Destino1_idx` (`idDestino` ASC),
  INDEX `fk_Bem_SubDestino1_idx` (`idSubDestino` ASC),
  INDEX `fk_Bem_TipoBem1_idx` (`idTipoBem` ASC),
  INDEX `fk_Bem_Fundo1_idx` (`idFundo` ASC),
  INDEX `fk_Bem_Estado1_idx` (`idEstadoBem` ASC),
  INDEX `fk_Bem_ContaContabil1_idx` (`idContaContabil` ASC),
  INDEX `fk_Bem_TipoAquisicao1_idx` (`idTipoAquisicao` ASC),
  INDEX `fk_Bem_TipoIncorporacao1_idx` (`idTipoIncorporacao` ASC),
  INDEX `fk_Bem_Secretaria1_idx` (`idSecretaria` ASC),
  CONSTRAINT `fk_Bem_Usuario`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `SisPatr`.`Usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Bem_SubElemento1`
    FOREIGN KEY (`idSubElemento`)
    REFERENCES `SisPatr`.`SubElemento` (`idSubElemento`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Bem_Classificacao1`
    FOREIGN KEY (`idClassificacao`)
    REFERENCES `SisPatr`.`Classificacao` (`idClassificacao`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Bem_Empresa1`
    FOREIGN KEY (`idEmpresa`)
    REFERENCES `SisPatr`.`Empresa` (`idEmpresa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Bem_Responsavel1`
    FOREIGN KEY (`idResponsavel`)
    REFERENCES `SisPatr`.`Responsavel` (`idResponsavel`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Bem_Origem1`
    FOREIGN KEY (`idOrigem`)
    REFERENCES `SisPatr`.`Origem` (`idOrigem`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Bem_Destino1`
    FOREIGN KEY (`idDestino`)
    REFERENCES `SisPatr`.`Destino` (`idDestino`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Bem_SubDestino1`
    FOREIGN KEY (`idSubDestino`)
    REFERENCES `SisPatr`.`SubDestino` (`idSubDestino`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Bem_TipoBem1`
    FOREIGN KEY (`idTipoBem`)
    REFERENCES `SisPatr`.`TipoBem` (`idTipoBem`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Bem_Fundo1`
    FOREIGN KEY (`idFundo`)
    REFERENCES `SisPatr`.`Fundo` (`idFundo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Bem_Estado1`
    FOREIGN KEY (`idEstadoBem`)
    REFERENCES `SisPatr`.`EstadoBem` (`idEstadoBem`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Bem_ContaContabil1`
    FOREIGN KEY (`idContaContabil`)
    REFERENCES `SisPatr`.`ContaContabil` (`idContaContabil`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Bem_TipoAquisicao1`
    FOREIGN KEY (`idTipoAquisicao`)
    REFERENCES `SisPatr`.`TipoAquisicao` (`idTipoAquisicao`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Bem_TipoIncorporacao1`
    FOREIGN KEY (`idTipoIncorporacao`)
    REFERENCES `SisPatr`.`TipoIncorporacao` (`idTipoIncorporacao`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Bem_Secretaria1`
    FOREIGN KEY (`idSecretaria`)
    REFERENCES `SisPatr`.`Secretaria` (`idSecretaria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SisPatr`.`AtributosTipoVeiculo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `SisPatr`.`AtributosTipoVeiculo` (
  `idVeiculo` INT NOT NULL AUTO_INCREMENT,
  `numeroDocumentoVeiculo` INT NOT NULL,
  `modeloVeiculo` VARCHAR(60) NOT NULL,
  `tipoCombustivelVeiculo` VARCHAR(15) NOT NULL,
  `marcaVeiculo` VARCHAR(45) NOT NULL,
  `anoVeiculo` INT NOT NULL,
  `placaVeiculo` VARCHAR(9) NOT NULL,
  `chassiVeiculo` VARCHAR(45) NOT NULL,
  `idTipoBem` INT NOT NULL,
  PRIMARY KEY (`idVeiculo`),
  INDEX `fk_TipoVeiculo_TipoBem1_idx` (`idTipoBem` ASC),
  CONSTRAINT `fk_TipoVeiculo_TipoBem1`
    FOREIGN KEY (`idTipoBem`)
    REFERENCES `SisPatr`.`TipoBem` (`idTipoBem`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
