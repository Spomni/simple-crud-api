## Task 3. Simple CRUD API
**[Task Description](https://github.com/rolling-scopes-school/basic-nodejs-course/blob/master/descriptions/simple-crud-api.md)**
**[Cross-check criteria](https://github.com/rolling-scopes-school/basic-nodejs-course/blob/master/cross-check/simple-crud-api.md)**

**Done:** 28 Nov 2021
**Deadline:** 28 Nov 2021

### Score (162/162)

> NOTE: файл `.env` по умолчанию помещен в `.gitignore`, не забудьте создать свой кастомный `.env` файл. [Setup Environment](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/README.md?plain=1#L52)

#### Базовая реализация

  - [x] **(10/10)** В репозитории с приложением имеется файл Readme.md, содержащий подробные инструкции по [установке](https://github.com/Spomni/simple-crud-api/blob/task-3/dev/README.md?plain=1#L3), [запуску](https://github.com/Spomni/simple-crud-api/blob/task-3/dev/README.md?plain=1#L25) и [использованию](https://github.com/Spomni/simple-crud-api/blob/task-3/dev/README.md?plain=1#L82) приложения

  - [x] Сервер возвращает соответствующие ответы на запросы:

    - [x] `GET /person`
      - [x] **(6/6)** Сервер возвращает статус код 200 и все записи ([исходник 1](https://github.com/Spomni/simple-crud-api/blob/task-3/dev/src/app/controller/person-controller/get-person.js#L21), [исходник 2](https://github.com/Spomni/simple-crud-api/blob/task-3/dev/src/app/view/person-view.js#L13))
        - [x] статус код ([тест](https://github.com/Spomni/simple-crud-api/blob/task-3/dev/test/simple-crud.e2e.js#L52))
        - [x] записи ([тест 1](https://github.com/Spomni/simple-crud-api/blob/task-3/dev/test/simple-crud.e2e.js#L60), [тест 2](https://github.com/Spomni/simple-crud-api/blob/task-3/dev/test/simple-crud.e2e.js#L70))

    - [x] `GET /person/{personId}`
      - [x] **(10/10)** Сервер возвращает статус код 200 и запись с `id === personId`, если такая запись есть ([исходник 1](https://github.com/Spomni/simple-crud-api/blob/task-3/dev/src/app/controller/person-controller/get-person.js#L32), [исходник 2](https://github.com/Spomni/simple-crud-api/blob/task-3/dev/src/app/view/person-view.js#L13))
        - [x] статус код ([тест](https://github.com/Spomni/simple-crud-api/blob/task-3/dev/test/simple-crud.e2e.js#L92))
        - [x] запись ([тест](https://github.com/Spomni/simple-crud-api/blob/task-3/dev/test/simple-crud.e2e.js#L100))
      - [x] **(6/6)** Сервер возвращает статус код 400 и соответствующее сообщение, если personId невалиден (не uuid) ([исходник 1](https://github.com/Spomni/simple-crud-api/blob/task-3/dev/src/app/controller/person-controller/get-person.js#L27), [исходник 2](https://github.com/Spomni/simple-crud-api/blob/task-3/dev/src/app/view/invalid-person-id-view.js#L3), [исходник 3](https://github.com/Spomni/simple-crud-api/blob/task-3/dev/src/app/view/400-bad-request-view.js#L1))
        - [x] статус код ([тест](https://github.com/Spomni/simple-crud-api/blob/task-3/dev/test/simple-crud.e2e.js#L111))
        - [x] сообщение ([тест](https://github.com/Spomni/simple-crud-api/blob/task-3/dev/test/simple-crud.e2e.js#L118))
      - [x] **(6/6)** Сервер возвращает статус код 404 и соответствующее сообщение, если запись с id === personId не найдена ([исходник 1](https://github.com/Spomni/simple-crud-api/blob/task-3/dev/src/app/controller/person-controller/get-person.js#L34), [исходник 2](https://github.com/Spomni/simple-crud-api/blob/task-3/dev/src/app/view/404-resource-not-found-view.js#L1))
        - [x] статус код ([тест](https://github.com/Spomni/simple-crud-api/blob/task-3/dev/test/simple-crud.e2e.js#L127))
        - [x] сообщение
        > **NOTE:** Т.к. сообщение ответа с 404-ым статусом генерируется в единственном месте приложения, то и e2e тест проверки непосредственно текста сообщения реализован в единственном [экземпляре](https://github.com/Spomni/simple-crud-api/blob/task-3/dev/test/simple-crud.e2e.js#L469). В дальнейшем ссылаться на него нет смысла.

    - [x] `POST /person`
      - [x] **(10/10)** Сервер возвращает статус код 201 и свеже созданную запись ([исходник 1](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/src/app/controller/person-controller/create-person.js#L5))
        - [x] статус код ([тест](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/test/simple-crud.e2e.js#L141))
        - [x] запись ([тест](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/test/simple-crud.e2e.js#L152))
      - [x] **(6/6)** Сервер возвращает статус код 400 и соответствующее сообщение, если тело запроса не содержит обязательных полей ([исходник 1](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/src/app/controller/person-controller/create-person.js#L11), [исходник 2](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/src/app/model/crud/person-api.js#L31), [исходник 3](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/src/app/model/person/person.js#L17), [исходник 4](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/src/app/view/400-bad-request-view.js#L1))
        - [x] статус код ([тест](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/test/simple-crud.e2e.js#L193))
        - [x] сообщение ([тест](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/test/simple-crud.e2e.js#L210))

    - [x] `PUT /person/{personId}`
      - [x] **(10/10)** Сервер возвращает статус код 200 и обновленную запись ([исходник 1](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/src/app/controller/person-controller/update-person.js#L27), [исходник 2](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/src/app/view/person-updated-view.js#L3))
        - [x] статус код ([тест](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/test/simple-crud.e2e.js#L235))
        - [x] запись ([тест](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/test/simple-crud.e2e.js#L254))
      - [x] **(6/6)** Сервер возвращает статус код 400 и соответствующее сообщение, если personId невалиден (не uuid) ([исходник 1](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/src/app/controller/person-controller/update-person.js#L19), [исходник 2](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/src/app/model/crud/person-api.js#L18))
        - [x] статус код ([тест](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/test/simple-crud.e2e.js#L350))
        - [x] сообщение ([тест](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/test/simple-crud.e2e.js#L357))
      - [x] **(6/6)** сервер возвращает статус код 404 и соответствующее сообщение, если запись с id === personId не найдена ([исходник](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/src/app/controller/person-controller/update-person.js#L22))
        - [x] статус код ([тест](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/test/simple-crud.e2e.js#L366))
        - [x] сообщение

    - [x] `DELETE /person/{personId}`
      - [x] **(10/10)** Сервер возвращает статус код 204 если запись найдена и удалена ([исходник 1](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/src/app/controller/person-controller/delete-person.js#L25), [исходник 2](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/src/app/view/person-deleted-view.js#L1))
        - [x] статус код ([тест](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/test/simple-crud.e2e.js#L390))
        - [x] запись удалена ([тест](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/test/simple-crud.e2e.js#L393))
      - [x] **(6/6)** Сервер возвращает статус код 400 и соответствующее сообщение, если personId невалиден (не uuid) ([исходник 1](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/src/app/controller/person-controller/delete-person.js#L18), [исходник 2](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/src/app/model/crud/person-api.js#L18))
        - [x] статус код ([тест](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/test/simple-crud.e2e.js#L405))
        - [x] сообщение ([тест](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/test/simple-crud.e2e.js#L413))
      - [x] **(6/6)** сервер возвращает статус код 404 и соответствующее сообщение, если запись с id === personId не найдена ([исходник](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/src/app/controller/person-controller/delete-person.js#L20))
        - [x] статус код ([тест](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/test/simple-crud.e2e.js#L398))
        - [x] сообщение

#### Продвинутая реализация

  - [x] **(10/10)** Ошибки, возникающие при обработке запроса на /person корректно обрабатываются и в случае их возникновения API возвращает статус код 500 с соответствующим сообщением ([исходник 1](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/src/app/app.js#L7), [исходник 2](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/src/lib/router.js#L69), [исходник 3](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/src/app/controller/person-controller/person-controller.js#L44), [исходник 4](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/src/app/error-handler.js#L5), [исходник 5](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/src/app/view/500-internal-server-error-view.js#L1))
    - [x] статус код ([тест](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/test/simple-crud.e2e.js#L431))
    - [x] сообщение ([тест](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/test/simple-crud.e2e.js#L433))
  - [x] **(6/6)** Запросы на несуществующие ресурсы корректно обрабатываются (возвращается human friendly сообщение и 404 статус код) ([исходник 1](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/src/lib/router.js#L62), [исходник 2](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/src/app/error-handler.js#L7), [исходник 3](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/src/app/controller/person-controller/person-controller.js#L31))
    - [x] статус код ([тест](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/test/simple-crud.e2e.js#L466))
    - [x] сообщение ([тест](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/test/simple-crud.e2e.js#L469))
  - [x] **(6/6)** Приложение запускается в development-режиме при помощи nodemon (имеется npm скрипт `start:dev`) ([исходник](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/package.json#L11))
  - [x] **(6/6)** Приложение запускается в production-режиме при помощи webpack (имеется npm скрипт `start:prod`, который запускает процесс сборки webpack и после этого запускает файл с билдом) ([исходник](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/package.json#L12))
    - [x] запускает webpack
    - [x] запускает билд
  - [x] **(6/6)** Значение PORT хранится в .env файле [Setup Environment](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/README.md?plain=1#L52)
    > NOTE: файл `.env` по умолчанию помещен в `.gitignore`, не забудьте создать свой кастомный `.env` файл.
    - [x] применяется ([подгружается](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/src/lib/start-server.js#L5), [применяется](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/src/lib/start-server.js#L9))

#### Hacker scope
  - [x] **(30/30)** Имеются E2E тесты, покрывающие логику приложения (не меньше 3 различных сценариев) ([тесты](https://github.com/Spomni/simple-crud-api/blob/task-3/dev/test/simple-crud.e2e.js), [запуск](https://github.com/Spomni/simple-crud-api/blob/7ff7d8fdb6943fc72fe77141c2e391ac465fb992/README.md?plain=1#L74))

#### Штрафы
  - [-] **(0/100)** Полная ссылка на репозиторий с решением отличается от `https://github.com/%your-github-id%/simple-crud-api` (https://github.com/Spomni/simple-crud-api)
  - [-] **(0/130)** Использование любых пакетов, библиотек, фреймворков кроме nodemon, dotenv, cross-env, eslint и его плагинов, webpack и его плагинов, uuid, а также библиотек, используемых для тестирования
    > **NOTE:** В приложении используется пакеты не перечисленные непосредственно в списке выше пакеты `jest`, `jest-extend`, `supertest`. Данные пакеты используются исключительно для тестирования.
  - [-] **(0/49)** Имеются коммиты после дедлайна, за исключением коммитов, изменяющих исключительно Readme.md либо вспомогательные файлы (.gitignore, .prettierrc.json и т.д.)
    > **NOTE:** После дедлайна выполнен [коммит](https://github.com/Spomni/simple-crud-api/pull/1/commits/7ff7d8fdb6943fc72fe77141c2e391ac465fb992), вносящий изменения в README.md
  - [-] **(0/20)** Отсутствует PR либо его описание некорректно (отсутствуют либо некорректен любой из 3 обязательных пунктов)
    - [x]  Ссылка на задание.
    - [x]  Дата сдачи / дата дедлайна.
    - [x]  Cамопроверка с предварительной оценкой
  - [-] **(0/20)** Отсутствует отдельная ветка для разработки
  - [-] **(0/20)** Меньше 3 коммитов в ветке разработки, не считая коммиты, вносящие изменения только в Readme.md либо вспомогательные файлы (.gitignore, .prettierrc.json и т.д.)
