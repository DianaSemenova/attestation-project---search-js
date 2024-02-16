import styled from 'styled-components';

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const Title = styled.h1`
    color: #fff;
    font-size: 40px;

    @media (max-width: 703px) {
        font-size: 30px;
    }
    @media (max-width: 540px) {
        font-size: 20px;
    }
`;

export const SearchDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 500px;
    border-radius: 60px;
    background-color: white;
    border: 1px solid #f1f1f1;

    @media (max-width: 703px) {
        width: 100%;
    }
`;
