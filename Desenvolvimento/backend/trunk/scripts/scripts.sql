drop table Usuario;
drop table Gincana;
drop table TipoTarefa;
drop table Tarefa;
drop table TarefaAtributoValor;
drop table TipoAtributo;
create table Usuario (
    IdUsuario serial primary key,
    Nome text not null
);
insert into usuario(nome) values ('Zézinho');
create table Gincana (
    IdGincana serial primary key,
    Nome text not null,
    DataCriacao date not null default now(),
    Criador int references Usuario(IdUsuario)
);
insert into gincana(nome, criador) values ('Uma gincana', 1);
insert into gincana(nome, criador) values ('Outra gincana', 1);
create table TipoTarefa (
    IdTipoTarefa serial primary key,
    Nome text not null
);
insert into TipoTarefa(Nome) values ('Desafio');
insert into TipoTarefa(Nome) values ('Quiz');
insert into TipoTarefa(Nome) values ('Localização');
create table Tarefa (
    IdTarefa serial primary key,
    IdGincana int references Gincana(IdGincana),
    IdTipoTarefa int references TipoTarefa(IdTipoTarefa),
    Nome text not null
);
insert into Tarefa(IdGincana, IdTipoTarefa, Nome) values (1, 1, 'Tarefa de desafio');
insert into Tarefa(IdGincana, IdTipoTarefa, Nome) values (1, 2, 'Tarefa de quiz');
insert into Tarefa(IdGincana, IdTipoTarefa, Nome) values (1, 3, 'Tarefa de localização');
create table TipoAtributo (
    IdTipoAtributo serial primary key,
    Nome text not null
);
create table TarefaAtributoValor (
    IdTarefa int references Tarefa(IdTarefa),
    IdTipoTarefa int references TipoTarefa(IdTipoTarefa),
    IdTipoAtributo int references TipoAtributo(IdTipoAtributo),
    Valor text
);
insert into TipoAtributo(Nome) values ('description');
insert into TipoAtributo(Nome) values ('qrcode');
insert into TipoAtributo(Nome) values ('image');
insert into TipoAtributo(Nome) values ('destination_lat');
insert into TipoAtributo(Nome) values ('destination_lng');
insert into TipoAtributo(Nome) values ('radius');
insert into TipoAtributo(Nome) values ('pergunta');
insert into TipoAtributo(Nome) values ('resposta1');
insert into TipoAtributo(Nome) values ('resposta2');
insert into TipoAtributo(Nome) values ('resposta3');
insert into TipoAtributo(Nome) values ('resposta4');
insert into TipoAtributo(Nome) values ('resposta5');
insert into TipoAtributo(Nome) values ('correct');
insert into TarefaAtributoValor values(1, 1, 1, 'Para completar essa tarefa leia um qrcode');
insert into TarefaAtributoValor values(1, 1, 2, 'http://en.m.wikipedia.org');
insert into TarefaAtributoValor values(1, 1, 3, 'http://s2.glbimg.com/ghFXiTWz85oCFk-SHWci8rrMz44=/e.glbimg.com/og/ed/f/original/2016/05/02/y3hp4en.jpg');
insert into TarefaAtributoValor values(3, 3, 4, '-23.554623');
insert into TarefaAtributoValor values(3, 3, 5, '-46.905776');
insert into TarefaAtributoValor values(3, 3, 6, '100');