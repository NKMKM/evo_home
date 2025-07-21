# EVO Home — Система управления сайтом и админ-панель

## Описание

Этот проект состоит из двух независимых частей:
- **frontend** — клиентский сайт для пользователей, включает в себя Node.js backend (backend.js) для API и работы с базой данных PostgreSQL.
- **admin_panel** — отдельная админ-панель для управления заявками и контентом.

---

## Структура проекта

```
/
├── frontend/           # Клиентский сайт + backend.js (Node.js API)
│   ├── src/            # Исходники фронта
│   ├── public/         # Публичные ассеты
│   ├── backend.js      # Серверная часть (Node.js, API, PostgreSQL)
│   ├── package.json    # Зависимости фронта и backend.js
│   └── ...
├── admin_panel/        # Отдельная админ-панель
│   ├── src/            # Исходники админки
│   ├── public/         # Публичные ассеты админки
│   ├── package.json    # Зависимости админки
│   └── ...
└── README.md           # Этот файл
```

---

## frontend

- **Назначение:**
  - Основной сайт для клиентов
  - Включает SPA (React/Vite)
  - В папке `frontend/backend.js` — серверная часть (Node.js), реализует API и работает с PostgreSQL

- **Запуск фронта (разработка):**
  ```bash
  cd frontend
  npm install
  npm run dev
  ```
  Откроется на http://localhost:5173 (или другом порту)

- **Запуск backend.js (API):**
  ```bash
  cd frontend
  node backend.js
  ```
  По умолчанию слушает порт 3001 (может быть изменён в коде)

- **Сборка для продакшена:**
  ```bash
  cd frontend
  npm run build
  # Готовая сборка будет в папке dist
  ```

- **Работа с базой данных:**
  - backend.js использует PostgreSQL
  - Параметры подключения указываются в backend.js (host, user, password, database)

---

## admin_panel

- **Назначение:**
  - Отдельная SPA для администрирования заявок и контента
  - Не зависит от frontend, может деплоиться отдельно

- **Запуск (разработка):**
  ```bash
  cd admin_panel
  npm install
  npm run dev
  ```
  Откроется на http://localhost:5174 (или другом порту)

- **Сборка для продакшена:**
  ```bash
  cd admin_panel
  npm run build
  # Готовая сборка будет в папке dist
  ```

---

## Важно
- **frontend** и **admin_panel** — это два независимых SPA-проекта, но могут работать на одном сервере.
- backend.js (Node.js) — обязательная часть для работы API и интеграции с PostgreSQL.
- Для работы с заявками и фильтрами используйте admin_panel.

---

## Контакты
- Вопросы по проекту: @N0K1M
