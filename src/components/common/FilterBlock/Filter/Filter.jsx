import { useState } from 'react';
import * as S from './filter.style';
import Button from '../../../UI/Button/Button';
import FilterItem from '../FilterItem/FilterItem';

export default function Filter() {
    const arrNumberRepositories = ['По возрастанию', 'По убыванию'];
    const [sortName, setSortName] = useState('По возрастанию');
    const [isOpen, setIsOpen] = useState(false);

    return (
        <S.FilterDiv>
            <S.SortDiv>
                <S.FilterTitle>По количеству репозиториев:</S.FilterTitle>
                <S.Div>
                    <Button
                        classes="sort"
                        isActive={isOpen}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {sortName}
                    </Button>
                    {isOpen && (
                        <FilterItem
                            data={arrNumberRepositories}
                            setSortName={setSortName}
                        />
                    )}
                </S.Div>
            </S.SortDiv>
        </S.FilterDiv>
    );
}
