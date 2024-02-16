import * as S from './userItem.style';
import Button from '../../UI/Button/Button';

export default function UsersItem({ item }) {
    return (
        <S.Li>
            <div>Логин пользователя: {item.login}</div>
            <Button classes="user">Подробнее о пользователе</Button>
        </S.Li>
    );
}
