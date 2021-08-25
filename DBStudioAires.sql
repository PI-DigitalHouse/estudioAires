-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema estudioaires
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema estudioaires
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `estudioaires` DEFAULT CHARACTER SET utf8 ;
USE `estudioaires` ;

-- -----------------------------------------------------
-- Table `estudioaires`.`membros`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `estudioaires`.`membros` (
  `idMembro` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(150) NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  `telefone` BIGINT NOT NULL,
  `cpfCnpj` VARCHAR(18) NOT NULL,
  `comoConheceu` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(150) NOT NULL,
  `experiencia` VARCHAR(30) NOT NULL,
  `detalhes` VARCHAR(150) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`idMembro`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `estudioaires`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `estudioaires`.`usuarios` (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(150) NOT NULL,
  `sobrenome` VARCHAR(150) NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  `telefone` BIGINT NOT NULL,
  `cpfCnpj` VARCHAR(18) NOT NULL,
  `senha` VARCHAR(150) NOT NULL,
  `comoConheceu` VARCHAR(30) NOT NULL,
  `imobiliaria` VARCHAR(30) NULL DEFAULT NULL,
  `termosDeUso` VARCHAR(30) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`idUsuario`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `cpf_cnpj_UNIQUE` (`cpfCnpj` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 12
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `estudioaires`.`reservas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `estudioaires`.`reservas` (
  `idReserva` INT NOT NULL AUTO_INCREMENT,
  `horarioInicio` TIME NOT NULL,
  `dataInicio` DATETIME NOT NULL,
  `horarioFinal` TIME NOT NULL,
  `dataFinal` DATETIME NOT NULL,
  `reservadoPor` INT NOT NULL,
  `membros_idMembro` INT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `status` VARCHAR(150) NOT NULL,
  `servico` JSON NOT NULL,
  PRIMARY KEY (`idReserva`, `reservadoPor`, `membros_idMembro`),
  INDEX `fk_reservas_usuarios1_idx` (`reservadoPor` ASC) VISIBLE,
  INDEX `fk_reservas_membros1_idx` (`membros_idMembro` ASC) VISIBLE,
  CONSTRAINT `fk_reservas_membros1`
    FOREIGN KEY (`membros_idMembro`)
    REFERENCES `estudioaires`.`membros` (`idMembro`),
  CONSTRAINT `fk_reservas_usuarios1`
    FOREIGN KEY (`reservadoPor`)
    REFERENCES `estudioaires`.`usuarios` (`idUsuario`))
ENGINE = InnoDB
AUTO_INCREMENT = 28
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `estudioaires`.`orcamentos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `estudioaires`.`orcamentos` (
  `idSolicitacao` INT NOT NULL AUTO_INCREMENT,
  `endereco` VARCHAR(300) NOT NULL,
  `tamanhoImovel` VARCHAR(45) NOT NULL,
  `cep` VARCHAR(9) NOT NULL,
  `valor` DECIMAL(10,0) NOT NULL,
  `pagamento` VARCHAR(30) NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  `contatoSessao` VARCHAR(45) NULL DEFAULT NULL,
  `nomeContato` VARCHAR(150) NOT NULL,
  `telefoneContato` BIGINT NOT NULL,
  `detalhes` VARCHAR(300) NULL DEFAULT NULL,
  `sessaoShooting` DATETIME NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `reservas_idReserva` INT NOT NULL,
  PRIMARY KEY (`idSolicitacao`, `reservas_idReserva`),
  INDEX `fk_orcamentos_reservas1_idx` (`reservas_idReserva` ASC) VISIBLE,
  CONSTRAINT `fk_orcamentos_reservas1`
    FOREIGN KEY (`reservas_idReserva`)
    REFERENCES `estudioaires`.`reservas` (`idReserva`))
ENGINE = InnoDB
AUTO_INCREMENT = 19
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `estudioaires`.`arquivos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `estudioaires`.`arquivos` (
  `idArquivo` INT NOT NULL AUTO_INCREMENT,
  `nomeArquivo` VARCHAR(150) NOT NULL,
  `tipoDeArquivo` VARCHAR(150) NOT NULL,
  `idSolicitacao` INT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`idArquivo`, `idSolicitacao`),
  INDEX `fk_arquivos_solicitacoes1_idx` (`idSolicitacao` ASC) VISIBLE,
  CONSTRAINT `fk_arquivos_solicitacoes1`
    FOREIGN KEY (`idSolicitacao`)
    REFERENCES `estudioaires`.`orcamentos` (`idSolicitacao`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `estudioaires`.`login`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `estudioaires`.`login` (
  `idLogin` INT NOT NULL AUTO_INCREMENT,
  `idUsuario` INT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`idLogin`, `idUsuario`),
  INDEX `fk_login_usuarios1_idx` (`idUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_login_usuarios1`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `estudioaires`.`usuarios` (`idUsuario`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `estudioaires`.`pagamentos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `estudioaires`.`pagamentos` (
  `idPagamento` INT NOT NULL AUTO_INCREMENT,
  `valorFinal` DECIMAL(10,0) NOT NULL,
  `formaDePagamento` VARCHAR(150) NOT NULL,
  `statusTransacao` VARCHAR(150) NOT NULL,
  `idSolicitacao` INT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`idPagamento`, `idSolicitacao`),
  INDEX `fk_pagamentos_solicitacoes1_idx` (`idSolicitacao` ASC) VISIBLE,
  CONSTRAINT `fk_pagamentos_solicitacoes1`
    FOREIGN KEY (`idSolicitacao`)
    REFERENCES `estudioaires`.`orcamentos` (`idSolicitacao`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `estudioaires`.`servicos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `estudioaires`.`servicos` (
  `idServico` INT NOT NULL AUTO_INCREMENT,
  `tipoDeServico` VARCHAR(150) NOT NULL,
  `descricao` VARCHAR(150) NOT NULL,
  `valor` DECIMAL(2,2) NOT NULL,
  `idSolicitacao` INT NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`idServico`),
  INDEX `fk_servicos_solicitacoes1_idx` (`idSolicitacao` ASC) VISIBLE,
  CONSTRAINT `fk_servicos_solicitacoes1`
    FOREIGN KEY (`idSolicitacao`)
    REFERENCES `estudioaires`.`orcamentos` (`idSolicitacao`))
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
