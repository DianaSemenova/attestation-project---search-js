import * as S from './users.style';
import UsersItem from '../UsersItem/UsersItem';
import Button from '../../UI/Button/Button';

export default function UsersList({ data }) {
    const arrNumberPages = [1, 2, 4, 5, 6, 7];
    const arrAmountData = [100, 50, 25, 10, 5];
    return (
        <S.BlockUsers>
            <S.Ul>
                {data?.items.map((item) => (
                    <UsersItem key={Math.random()} item={item} />
                ))}
                <S.Pagination>
                    <S.NumberPageDiv>
                        {arrNumberPages.map((number) => (
                            <Button key={number} classes="pagination">
                                {number}
                            </Button>
                        ))}
                    </S.NumberPageDiv>

                    <S.DataAmount>
                        <div>
                            <Button classes="dataAmount">
                                Показывать по: 10
                            </Button>
                            <S.DataAmountUl>
                                {arrAmountData.map((item) => (
                                    <li key={item}>по: {item}</li>
                                ))}
                            </S.DataAmountUl>
                        </div>
                    </S.DataAmount>
                </S.Pagination>
            </S.Ul>
        </S.BlockUsers>
    );
}
