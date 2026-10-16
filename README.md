# Banco API Performance

Projeto de testes de performance de API utilizando **JavaScript e k6**, com o objetivo de avaliar o comportamento da aplicação sob diferentes condições de carga, analisar os tempos de resposta e identificar possíveis gargalos de desempenho.

## 🎯 Objetivo do projeto

Desenvolver e executar testes de performance em uma API bancária, utilizando o k6 para simular requisições e avaliar indicadores como:

- **Tempo de resposta:** duração das requisições realizadas à API.
- **Throughput:** quantidade de requisições processadas por unidade de tempo.
- **Taxa de falhas:** percentual de requisições que apresentam erros.
- **Percentis de resposta:** análise de métricas como p(90) e p(95).
- **Comportamento sob carga:** avaliação da API em diferentes níveis de utilização.

O projeto também busca praticar a criação de cenários de performance, a parametrização por variáveis de ambiente e a análise de resultados.

## 🛠️ Tecnologias utilizadas

- **JavaScript:** linguagem utilizada para desenvolver os scripts de teste.
- **k6:** ferramenta de código aberto para testes de carga e performance.
- **Git e GitHub:** controle de versão e hospedagem do código.
- **Visual Studio Code:** ambiente de desenvolvimento.

## 📁 Estrutura do repositório

```text
banco-api-performance/
├── config/       # Configurações utilizadas pelos testes
├── fixtures/     # Dados utilizados na execução dos cenários
├── helpers/      # Funções auxiliares reutilizáveis
├── tests/        # Scripts e cenários de teste de performance
├── utils/        # Utilitários de apoio aos testes
├── .gitignore    # Arquivos e diretórios ignorados pelo Git
└── README.md     # Documentação do projeto
```

### Responsabilidade de cada diretório

| Diretório | Responsabilidade |
|---|---|
| `config/` | Centralizar configurações utilizadas pelos scripts de teste. |
| `fixtures/` | Organizar dados de entrada necessários aos cenários. |
| `helpers/` | Reunir funções auxiliares para reutilização entre testes. |
| `tests/` | Armazenar os scripts responsáveis pela execução dos testes de performance. |
| `utils/` | Agrupar funções utilitárias de apoio ao projeto. |

## ⚙️ Pré-requisitos

Antes de executar os testes, é necessário ter:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) caso alguma dependência do projeto necessite dele.
- [k6](https://grafana.com/docs/k6/latest/set-up/install-k6/) instalado e disponível no terminal.
- Acesso à API que será testada.

## 📥 Instalação do projeto

Clone o repositório:

```bash
git clone https://github.com/EliseuXavier02/banco-api-performance.git
```

Entre no diretório:

```bash
cd banco-api-performance
```

Verifique se o k6 está instalado:

```bash
k6 version
```

Configure a variável de ambiente `BASE_URL` com a URL da API que será testada.

### Windows — PowerShell

```powershell
$env:BASE_URL="http://localhost:3000"
```

### Windows — Git Bash

```bash
export BASE_URL="http://localhost:3000"
```

**Importante:** substitua o endereço de exemplo pela URL correta da API. A variável `BASE_URL` deve ser lida pelo script de teste, por exemplo, por meio de `__ENV.BASE_URL`.

## ▶️ Executando os testes

Os scripts de teste estão organizados no diretório `tests/`.

Para executar um cenário específico, informe o caminho do arquivo JavaScript. Por exemplo, considerando o script `tests/login.test.js`:

```bash
k6 run tests/login.test.js
```

Para passar a URL da API diretamente na execução, sem configurar previamente a variável de ambiente:

```bash
k6 run -e BASE_URL="http://localhost:3000" tests/login.test.js
```

Ajuste o caminho do script conforme os arquivos existentes no projeto.

Durante a execução, o k6 apresenta informações como número de requisições, duração, taxa de falhas e métricas de tempo de resposta.

## 📊 Relatórios de performance

O k6 permite acompanhar os resultados durante a execução e exportar um relatório HTML para análise posterior.

### Acompanhamento em tempo real

Para habilitar o dashboard web integrado do k6, execute:

```bash
K6_WEB_DASHBOARD=true k6 run tests/login.test.js
```

O dashboard permite acompanhar as métricas de execução em tempo real pelo navegador.

### Exportação do relatório HTML

Para habilitar o dashboard e exportar o relatório ao final da execução:

```bash
K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run tests/login.test.js
```

Ao término do teste, o arquivo `html-report.html` será gerado no diretório de trabalho, permitindo consultar os resultados posteriormente.

**Observação:** esses comandos utilizam a sintaxe do Bash, compatível com o Git Bash no Windows. O suporte ao dashboard integrado depende da versão do k6 instalada.

### Executando com variáveis de ambiente

É possível combinar a URL da API com as opções do dashboard:

```bash
BASE_URL="http://localhost:3000" \
K6_WEB_DASHBOARD=true \
K6_WEB_DASHBOARD_EXPORT=html-report.html \
k6 run tests/login.test.js
```

Dessa forma, a configuração do ambiente, o acompanhamento em tempo real e a exportação do relatório são realizados na mesma execução.

## 📈 Análise dos resultados

Após a execução, os resultados podem ser analisados considerando:

- **`http_req_duration`:** duração das requisições HTTP.
- **`http_req_failed`:** proporção de requisições HTTP consideradas falhas pelo k6.
- **`http_reqs`:** quantidade total de requisições realizadas.
- **`iterations`:** número de iterações executadas pelos VUs.
- **`vus`:** quantidade de usuários virtuais ativos.

Os resultados devem ser interpretados considerando os limites definidos para cada cenário, as condições do ambiente e os objetivos do teste.

## 🚀 Próximos passos

- Ampliar a cobertura dos cenários de performance.
- Reutilizar configurações e dados de teste.
- Definir critérios de aceitação para as métricas.
- Comparar resultados entre diferentes execuções.
- Documentar gargalos identificados e oportunidades de melhoria.

## 👨‍💻 Autor

**Eliseu Xavier**

Projeto desenvolvido para praticar JavaScript, k6 e testes de performance de APIs.

[Repositório no GitHub](https://github.com/EliseuXavier02/banco-api-performance)
