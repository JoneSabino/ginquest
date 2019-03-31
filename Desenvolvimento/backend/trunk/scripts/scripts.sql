create table Gincana (
    IdGincana serial primary key,
    Nome text not null,
    Criador int
);
/
insert into gincana(nome, criador) values ('Uma gincana', 1);
insert into gincana(nome, criador) values ('Outra gincana', 1);
create table TipoTarefa (
    IdTipoTarefa serial primary key,
    Nome text not null
);
insert into TipoTarefa(Nome) values ('Desafio');
insert into TipoTarefa(Nome) values ('Quiz');
create table Tarefa (
    IdTarefa serial primary key,
    IdGincana int references Gincana(IdGincana),
    IdTipoTarefa int references TipoTarefa(IdTipoTarefa),
    Nome text not null
);
insert into Tarefa(IdGincana, IdTipoTarefa, Nome) values (1, 1, 'Tarefa de desafio');
insert into Tarefa(IdGincana, IdTipoTarefa, Nome) values (1, 2, 'Tarefa de quiz');