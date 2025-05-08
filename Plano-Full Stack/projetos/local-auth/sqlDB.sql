create database plataforma
default character set utf8
default collate utf8_general_ci;

select * from curso;
delete from aluno
where id = 2;

-- id, nome, email, senha, nascimento, sexo, nacionalidade, cadastro
insert into aluno values (default, 'Hermenegildo', 'hermenegildo@gmail.com',
							'2004-11-18', 'Masculino', default, '654321', '2025-02-19');
create table if not exists aluno (
	id integer(4) auto_increment,
    nome varchar(60) not null,
    email varchar(60) not nul€l unique,
    dataNascimento date,
	sexo enum('Masculino', 'Feminino'),
	nacionalidade varchar(18) default 'Angolana',
    senha varchar(20) not null,
    
    dataCadastro date,
    
    primary key(id)
) default charset utf8;

select * from aluno;
insert into professor values (default, 'Honorato', 'honorato@gmail.com',
							'1978-08-26', 'Masculino', default, '123456', '2025-02-19');
create table professor (
	id integer(4) auto_increment,
    nome varchar(60) not null,
    email varchar(60) not null unique,
    dataNascimento date,
	sexo enum('Masculino', 'Feminino'),
	nacionalidade varchar(18) default 'Angolana',
    senha varchar(20) not null,
    
    dataCadastro date,
    
    primary key(id)
) default charset utf8;

select * from curso;
-- id, nome, link, descricao, carga, aulas, lancamento, idProf
insert into curso values (default, 'Python', 'youtube.com/playlist/Python', 
'Curso de fundamentos para futuros pythonistas', 40, 37, '2018-11-6', 1);
insert into curso values (default, 'HTML5', 'youtube.com/playlist/html5', 
'Curso de fundamentos para quem deseja ser desenvolvedor front-end', 45, 43, '2020-08-26', 1);
insert into curso values (default, 'JavaScript', 'youtube.com/playlist/JavaScript', 
'Curso de fundamentos para que deseja ser desenvolvedor aplicações web mais iterativas', 
20, 16, '2019-08-26', 1);
insert into curso values (default, 'Hardware', 'youtube.com/playlist/Hardware', 
'Curso de fundamentos para que deseja entender sobre o funcionamento de aparelhos eletrónicos', 
26, 32, '2019-08-26', 1);


create table if not exists curso (
	id integer(4) auto_increment,
    nome varchar(60) unique not null,
    link varchar(70) unique not null,
    descricao varchar(200),
    cargaHoraria int(7),
    totalAulas int(4),
    dataLancamento date,

	idProfessor integer(4),
	foreign key(idProfessor) references professor(id),
    
    primary key(id)
)default charset utf8;

insert into assiste values (default, '2025-01-04', 0, 1, 1);
create table assiste (
	id integer(4) auto_increment,
    dataInicio date,
    aulasVistas integer(7),

    idCurso integer(4),
    idAluno integer(4),
	
    primary key(id),
    
    foreign key(idCurso) references curso(id),
    foreign key(idAluno) references aluno(id)
) default charset utf8;



insert into curso values (default, 'Algoritmo', '--', 20, 15, 2014);
select * from assiste;
-- (default, 'HTML5', '--', 40, 37, 2014)

-- hermenegildowilson7@gmail.com

select *
from aluno join curso
on aluno.email = 'hermenegildowilson7@gmail.com'
and assiste.idAluno = aluno.id
and assiste.idCurso = curso.id;

select * 
from assiste join curso join aluno
on assiste.idAluno = aluno.id and assiste.idCurso = curso.id and aluno.id = 1;