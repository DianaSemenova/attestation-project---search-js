import { useState } from 'react';
import * as S from './userItem.style';
import Button from '../../UI/Button/Button';
import Modal from '../../UI/Modal/Modal';
import UserInfo from '../Modal/UserInfo';

export default function UsersItem({ item }) {
    const [modalActive, setModalActive] = useState(false);

    return (
        <S.Li>
            <S.Login>
                Логин: <span>{item.login}</span>
            </S.Login>
            <Button classes="user" onClick={() => setModalActive(true)}>
                Подробнее о пользователе
            </Button>
            <Modal isActive={modalActive} setActive={setModalActive}>
                <UserInfo item={item} modalActive={modalActive} />
            </Modal>
        </S.Li>
    );
}
