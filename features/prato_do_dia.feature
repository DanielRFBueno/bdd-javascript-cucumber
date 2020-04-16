Feature: Prato do dia!

    Queremos saber qual o prato do dia na capital paulista

    Scenario Outline: Descubra o prato do dia

        Given que hoje é "<dia>"
        When eu pergunto qual é o prato do dia
        Then a resposta deve ser "<resposta>"

        Examples:
            | dia           | resposta          |
            | segunda-feira | Virado a Paulista |
            | terça-feira   | Dobradinha        |
            | quarta-feira  | Feijoada          |
            | quinta-feira  | Macarrão          |
            | sexta-feira   | Filé de Peixe     |
