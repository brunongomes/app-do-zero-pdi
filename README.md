# **Projeto: Gerenciador de Tarefas**

## **Descrição**
O **Gerenciador de Tarefas** é um projeto desenvolvido em Angular 2 que tem como objetivo praticar os conceitos fundamentais do framework. O sistema permite gerenciar tarefas diárias, oferecendo funcionalidades básicas para adicionar, listar, marcar como concluídas e remover tarefas.

---

## **Objetivo**
Este projeto busca validar o aprendizado dos seguintes conceitos do Angular:
- Criação e utilização de componentes.
- Uso de diretivas estruturais e de atributos.
- Implementação de serviços para gerenciar dados.
- Aplicação de data binding (unidirecional e bidirecional).
- Controle de fluxo com diretivas como `*ngFor` e `*ngIf`.
- Compreensão dos ciclos de vida dos componentes.
- Utilização do Angular CLI para automação de tarefas.

---

## **Funcionalidades**
1. **Adicionar tarefas**: Permite ao usuário criar novas tarefas através de um formulário.
2. **Listar tarefas**: Exibe todas as tarefas criadas, separadas por status (pendentes e concluídas).
3. **Marcar como concluída**: Permite alterar o status de uma tarefa para "concluída" ou "pendente".
4. **Remover tarefas**: Possibilita excluir tarefas da lista.

---

## **Requisitos do Projeto**
- **Angular CLI**: Utilizado para gerar componentes, serviços e módulos.
- **Componentes**: Divisão da interface em partes reutilizáveis.
- **Serviços**: Centralização da lógica de negócio para manipulação das tarefas.
- **Diretivas**:
  - `*ngFor` para iterar sobre a lista de tarefas.
  - `*ngIf` para exibir mensagens caso não existam tarefas.
- **Data Binding**:
  - Binding unidirecional para exibir dados na interface.
  - Two-way binding no formulário para capturar entradas do usuário.
- **LifeCycle Hooks**: Uso do `ngOnInit` para inicializar dados ao carregar o componente.

---

## **Estrutura do Projeto**
1. **Componentes**:
   - **TaskFormComponent**: Formulário para adicionar novas tarefas.
   - **TaskListComponent**: Lista de tarefas com opções para concluir ou remover.
2. **Serviço**:
   - **TaskService**: Responsável por gerenciar os dados das tarefas e fornecer métodos para adicionar, remover e atualizar o status das tarefas.
3. **Interface do Usuário**:
   - Formulário de entrada para criação de tarefas.
   - Lista que exibe tarefas pendentes e concluídas.
   - Botões para concluir ou excluir tarefas.

---

## **Passos para Implementação**
1. **Configuração do Ambiente**:
   - Instalar o Node.js e Angular CLI.
   - Criar um novo projeto Angular utilizando o comando `ng new`.
2. **Criação de Componentes e Serviço**:
   - Utilizar o Angular CLI para gerar os componentes e o serviço.
3. **Implementação das Funcionalidades**:
   - Adicionar lógica nos componentes e serviços para gerenciar as tarefas.
4. **Simulação de API**:
   - Utilizar arrays no serviço para simular dados obtidos de uma API.
5. **Testes e Refinamentos**:
   - Testar o sistema para garantir que todas as funcionalidades estão operando corretamente.

---
## **Link de interface para orientação**
https://www.figma.com/design/6f9Zh1gWVbjQ5lWGcUPUNR/Untitled?node-id=0-1&t=dR4qW5PZkfq7kUeN-1

## **Benefícios do Projeto**
- Compreensão prática dos conceitos fundamentais do Angular.
- Exercício de boas práticas no desenvolvimento de aplicações front-end.
- Criação de uma aplicação funcional que pode ser expandida com novos recursos futuramente.
