import { Outlet } from 'react-router-dom';
import * as S from './layout.style';
import Header from '../../components/common/Header/Header';

export default function Layout() {
    return (
        <S.Wrapper>
            <S.Container>
                <Header />
                <Outlet />
            </S.Container>
        </S.Wrapper>
    );
}
