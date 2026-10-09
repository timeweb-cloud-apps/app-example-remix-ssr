![Remix Logo](https://st.timeweb.com/cloud-static/apps-logo/remix.svg)

# Remix SSR

Пример приложения [Remix](https://remix.run/) с серверным рендерингом (SSR), которое можно развернуть в **Timeweb Cloud Apps** без настройки.

Remix v2 продолжает развиваться как [React Router](https://reactrouter.com/) в режиме фреймворка, поэтому пример собран на React Router 8.

:tada: [Демо]

:rocket: [Создать свой Apps](https://timeweb.cloud/my/apps/create)

:books: [Документация Timeweb Cloud Apps](https://timeweb.cloud/docs/apps)

## Параметры деплоя

При создании приложения включите поддержку SSR — оно развернётся как backend на Node.js.

| Параметр        | Значение           |
| --------------- | ------------------ |
| Фреймворк       | Remix, SSR включён |
| Команда сборки  | `npm run build`    |
| Команда запуска | `npm run start`    |

Скрипт `start` запускает собранное приложение через `react-router-serve`. Сервер слушает все интерфейсы, порт по умолчанию — `3000`, его можно изменить переменной окружения `PORT`.

Статическая версия — [app-example-remix](https://github.com/timeweb-cloud-apps/app-example-remix).

## Что показывает пример

- `/` — страница рендерится на сервере при каждом запросе: время рендера, версия Node.js и `User-Agent` приходят из `loader` и уже подставлены в HTML.
- `/about` — вторая страница приложения.
- `/api/hello` — ресурсный маршрут, отдаёт JSON.

## <a name="dev"></a>Локальный запуск проекта

```bash
# установка зависимостей
npm install

# запуск в дев режиме с отслеживанием изменений
npm run dev

# сборка для продакшн
npm run build

# запуск собранного приложения
npm run start
```
