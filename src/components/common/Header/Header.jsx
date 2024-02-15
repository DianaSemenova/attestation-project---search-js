import { useState } from 'react';
import * as S from './header.style';
import Button from '../../UI/Button/Button';
import SearchSvg from '../../UI/Icons/Search/SearchSvg';
import Modal from '../../UI/Modal/Modal';
import Input from '../../UI/Input/Input';

export default function Header() {
    const [modalActive, setModalActive] = useState(false);
    const [searchText, setSearchText] = useState('');
    return (
        <S.Header>
            <S.Title>Поиск пользователей на GitHub</S.Title>
            <S.SearchDiv>
                <Input
                    type="search"
                    placeholder="Введите логин пользователя"
                    name="search"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />
                <Button classes="search" onClick={() => setModalActive(true)}>
                    <SearchSvg />
                </Button>
            </S.SearchDiv>
            <Modal isActive={modalActive} setActive={setModalActive}>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolores molestiae corrupti rerum? Non veritatis, magni
                    nesciunt fugiat adipisci blanditiis mollitia!
                </p>
            </Modal>
        </S.Header>
    );
}
