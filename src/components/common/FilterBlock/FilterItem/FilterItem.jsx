import * as S from './filterItem.style';

export default function FilterItem({ data, setSortName }) {
    return (
        <S.Ul>
            {data?.map((item) => (
                <S.Li key={Math.random()} onClick={() => setSortName(item)}>
                    {item}
                </S.Li>
            ))}
        </S.Ul>
    );
}
