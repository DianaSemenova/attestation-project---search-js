import styled from 'styled-components';

export const Pagination = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${(props) => (props.$active ? 'center' : 'flex-start')};
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

export const DataAmountUl = styled.ul`
    position: absolute;
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

export const Li = styled.li`
    color: ${(props) => (props.$active ? '#db61ffab' : 'white')};
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        color: #db61ffab;
        text-decoration-line: underline;
    }
    &:active {
        color: #db61ffab;
        text-decoration-line: underline;
    }
`;
export const Point = styled.div`
    display: flex;
    align-items: center;
    color: black;
    padding: 0px 10px 0px 0px;
    font-size: 16px;
`;