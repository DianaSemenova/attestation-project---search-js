# Search for users on GitHub

## Описание проекта

Этот проект представляет собой интерфейс для поиска пользователей на GitHub. Приложение позволяет осуществлять поиск пользователей по логину, сортировать результаты по количеству репозиториев в порядке возрастания или убывания, а также просматривать подробности о найденных пользователях.

### Стек технологий:

-   React
-   Styled Components
-   Redux Toolkit
-   RTK Query
-   HTML
-   CSS

### Используемые библиотеки:

-   [react-spinners](https://www.davidhu.io/react-spinners/)

## Установка и запуск

1. Клонируйте репозиторий на свой компьютер:
   git clone <URL репозитория>
2. Перейдите в корневую папку проекта:
   cd <название папки>
3. Установите зависимости: `npm install` или `npm i`

4. Запустите приложение: `npm run start`

5. Откройте [http://localhost:3000](http://localhost:3000) в браузере, чтобы увидеть ваше приложение.

6. Запуск тестов: `npm run test`

## База данных

Данные о пользовател доступны по этой ссылке:
https://api.github.com/users?q={имя пользователя}

Количество запросов на поиск пользователя ограничено, и в случае возникновения ошибки со статусом 403, будет выведено сообщение о том, что не удалось загрузить пользователя.
Дополнительную информацию по данной теме можно найти в [документации](https://developer.github.com/v3/search/#search-users).

## Деплой проекта
https://whimsical-pudding-739428.netlify.app

## Помощь и поддержка

Если у вас возникли вопросы или проблемы, пожалуйста, создайте `issue` в этом репозитории.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
