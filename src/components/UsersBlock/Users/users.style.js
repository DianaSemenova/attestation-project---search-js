import styled from 'styled-components';

export const BlockUsers = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 703px) {
        align-items: stretch;
    }
`;
export const Ul = styled.ul`
    padding: 20px 50px;
    border-radius: 12px;

    @media (max-width: 800px) {
        padding: 20px 0px;
    }
`;
export const Pagination = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    padding: 0px 10px;
    max-width: 800px;
    color: #ffffff;
    border-radius: 6px;
    background-color: #dbdbdb;
    border: 1px solid #ffffff;
    position: relative;
    @media (max-width: 703px) {
        width: 100%;
        gap: 0px;
    }
`;

export const NumberPageDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const DataAmount = styled.div`
    position: absolute;
    right: 10px;
`;

export const DataAmountUl = styled.div`
    position: absolute;
    background: black;
    bottom: 30px;
    right: 0;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    cursor: pointer;
    width: 100%;
    border-radius: 12px;

    border: 1px solid #ffffff;
    background: #05002c;
    color: #ffffff;
    border-color: white;
    transition: all 0.3s;
`;
