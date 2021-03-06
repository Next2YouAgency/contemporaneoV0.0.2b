/*Nova estrutura usando normalizações*/
CREATE TABLE agenda_aulas(
	id_aula int(11) not null auto_increment primary key,
	matricula_aluno int(11) not null COLLATE utf8_general_mysql500_ci,
	nome_aluno int(11) not null COLLATE utf8_general_mysql500_ci,
	escolaridade_aluno int(11) not null COLLATE utf8_general_mysql500_ci,
	telefone_aluno int(11) not null COLLATE utf8_general_mysql500_ci,
	nome_mae int(11) COLLATE utf8_general_mysql500_ci,
	telefone_mae int(11) COLLATE utf8_general_mysql500_ci,
	nome_pai int(11) COLLATE utf8_general_mysql500_ci,
	telefone_pai int(11) COLLATE utf8_general_mysql500_ci,
	responsavel_pagamento int(11) COLLATE utf8_general_mysql500_ci,
	desconto varchar(11),
	foto_aluno int(11) COLLATE utf8_general_mysql500_ci NOT NULL DEFAULT 'img/fotos/default.png',
	cep_endereco int(11) COLLATE utf8_general_mysql500_ci,
	endereco_completo int(11) COLLATE utf8_general_mysql500_ci,
	numero_endereco int(11),
	bairro_endereco int(11) COLLATE utf8_general_mysql500_ci,
	cidade_endereco int(11) COLLATE utf8_general_mysql500_ci,
	estado_endereco int(11) COLLATE utf8_general_mysql500_ci,
	complemento_endereco int(11) COLLATE utf8_general_mysql500_ci,
	cupom_desconto int(11) COLLATE utf8_general_mysql500_ci,
	descricao_aluno varchar(5000) COLLATE utf8_general_mysql500_ci DEFAULT 'NOT DEFINED',
	FOREIGN KEY (matricula_aluno)REFERENCES alunos(matricula_aluno),
	FOREIGN KEY (nome_aluno) REFERENCES alunos(matricula_aluno),
	FOREIGN KEY (escolaridade_aluno) REFERENCES alunos(matricula_aluno),
	FOREIGN KEY (telefone_aluno) REFERENCES alunos(matricula_aluno),
	FOREIGN KEY (nome_mae) REFERENCES alunos(matricula_aluno),
	FOREIGN KEY (telefone_mae) REFERENCES alunos(matricula_aluno),
	FOREIGN KEY (nome_pai) REFERENCES alunos(matricula_aluno),
	FOREIGN KEY (telefone_pai) REFERENCES alunos(matricula_aluno),
	FOREIGN KEY (responsavel_pagamento) REFERENCES alunos(matricula_aluno),
	FOREIGN KEY (foto_aluno) REFERENCES alunos(matricula_aluno),
	FOREIGN KEY (cep_endereco) REFERENCES alunos(matricula_aluno),
	FOREIGN KEY (endereco_completo) REFERENCES alunos(matricula_aluno),
	FOREIGN KEY (numero_endereco) REFERENCES alunos(matricula_aluno),
	FOREIGN KEY (bairro_endereco) REFERENCES alunos(matricula_aluno),
	FOREIGN KEY (cidade_endereco) REFERENCES alunos(matricula_aluno),
	FOREIGN KEY (estado_endereco) REFERENCES alunos(matricula_aluno),
	FOREIGN KEY (complemento_endereco) REFERENCES alunos(matricula_aluno),
	FOREIGN KEY (cupom_desconto) REFERENCES alunos(matricula_aluno),
	FOREIGN KEY (descricao_aluno) REFERENCES alunos(matricula_aluno);
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_mysql500_ci;