import { Outlet } from 'react-router-dom';
import * as S from './layout.style';
import Header from '../../components/common/Header/Header';
import Filter from '../../components/common/FilterBlock/Filter/Filter';

export default function Layout() {
    return (
        <S.Wrapper>
            <S.Container>
                <Header />
                <Filter />
                <Outlet />
            </S.Container>
        </S.Wrapper>
    );
}
