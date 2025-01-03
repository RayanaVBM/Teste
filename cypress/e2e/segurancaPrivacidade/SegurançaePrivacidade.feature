Feature: Segurança de Privacidade
	Como pessoa usuária ou profissional
	Quero acessar a página de segurança e privacidade da Lacrei Saúde
	Para entender como funciona a proteção de dados do site
	
Contexto:
	Dado que a pessoa usuária ou profissional está na página "segurança e privacidade"
	
Cenário: "Termos de Uso"
	Quando ela quiser ter acesso aos termos
	Então ela deverá descer a página até chegar em "Termos de Uso"
	E clicar em "Acessar Termos de Uso"
	Então será direcionada a página com os Termos da Pessoa Usuária e Pessoa Profisional
	
Cenário: "Política de Privacidade"
	Quando ela quiser ter acesso a Política de Privacidade
	Então ela deverá descer a página até chegar em "Política de Privacidade"
	E clicar em "Acessar Política de Privacidade"
	Então será direcionada a página: Política de Privacidade da Pessoa Usuária e Profisional

Cenário: Redirecionamento para "Direitos do Titular"
	Quando ela quiser ter acesso aos dados LGPD
	Então ela deverá descer a página até chegar em "Direitos do Titular"
	E clicar em "Solicitar seus Direitos do Titular"
	Então será direcionada a página "Direitos do Titular | Lacrei Saúde"
	
Contexto:
	Dado que a pessoa usuária ou profissional acessou a página "Direitos do titular"
	
Cenário: Solicitar direitos da pessoa titular
	Quando ela preencher todos os campos obrigatórios
	E clicar em "Solicitar"
	Então a mensagem de solicitação enviada deverá aparecer, confirmando o registro
	
Cenário: Informar o direito que gostaria de solicitar
	Quando ela marcar no checkbox "Outro direito"
	E preencher o campo "Qual outro direito gostaria de solicitar?"
	Então ela deverá clicar em "Solicitar" para que o registro seja efetuado.