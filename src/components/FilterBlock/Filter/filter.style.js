import styled from 'styled-components';

export const FilterDiv = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    gap: 50px;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 25px 0px;
    justify-content: center;
`;
export const FilterTitle = styled.div`
    font-size: 16px;
    line-height: 24px;
    color: #fff;

    @media (max-width: 540px) {
        display: none;
    }
`;
export const SortDiv = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    gap: 10px;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    justify-content: center;
    align-items: center;
`;

export const Div = styled.div`
    position: relative;
`;
