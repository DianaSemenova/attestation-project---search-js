const getTextResult = (isError, isLoading, data, paramsLogin, textError) => {
    if (isError) {
        return 'Не удалось загрузить пользователей...';
    }
    if (textError) {
        return textError;
    }

    if (!isError && !isLoading) {
        if (!paramsLogin) {
            return 'Пожалуйста, введите в поле ввода данные пользователя, чтобы получить список пользователей.';
        }

        if (paramsLogin && data?.items.length === 0) {
            return `Пользователи по запросу «${paramsLogin}» не найдены.`;
        }
    }

    if (!isError && isLoading) {
        return `Загрузка...`;
    }
};

export { getTextResult };