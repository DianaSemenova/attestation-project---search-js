import Button from '../../UI/Button/Button';

export default function UsersItem({ item }) {
    return (
        <li>
            <div>Логин: {item.login}</div>
            <Button>Подробнее о пользователе</Button>
        </li>
    );
}
