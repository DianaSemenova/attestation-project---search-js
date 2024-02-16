import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './layout.style';
import Header from '../../components/Header/Header';
import { setIsOpenSort } from '../../store/slices/users';

export default function Layout() {
    const dispatch = useDispatch();
    const isOpenSort = useSelector((state) => state.users.isOpenSort);

    return (
        <S.Wrapper
            onClick={() => {
                if (isOpenSort) {
                    dispatch(setIsOpenSort(false));
                }
            }}
        >
            <S.Container>
                <Header />
                <Outlet />
            </S.Container>
        </S.Wrapper>
    );
}
