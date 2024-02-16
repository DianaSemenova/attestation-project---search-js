import { styled, css } from 'styled-components';

const buttons = {
    search: css`
        padding: 5px 35px;
        border: 1px solid #ffffff;
        border-radius: 60px;
        background-color: #f1f1f1;
        transition: all 0.2s;

        &:hover {
            background-color: #ebebeb;
            border: 1px solid #dbdbdb;
        }

        &:active {
            background-color: #ebebeb;
            border: 1px solid #dbdbdb;
        }

        @media (max-width: 540px) {
            background-color: #ffffff;
            padding: 5px 5px;
        }
    `,
    close: css`
        position: absolute;
        top: 0;
        right: 0;
        background-color: transparent;
        border: none;
        outline: none;
    `,
    notFound: css`
        background-color: transparent;
        border: 1px solid #ffffff;
        color: #ffffff;
        margin-left: 10px;
        padding: 13px 36px;
        border-radius: 6px;
        font-size: 16px;
        line-height: 24px;
        transition: all 0.3s;

        &:hover {
            background-color: #4d3c8d;
        }
        &:active {
            background-color: #4d3c8d;
        }
    `,

    sort: css`
        font-size: 15px;
        line-height: 24px;
        border: 1px solid #ffffff;
        border-radius: 60px;
        padding: 6px 20px;
        background: #05002c;
        color: #ffffff;
        border-color: ${(props) => (props.$active ? '#db61ffab' : 'white')};
        color: ${(props) => (props.$active ? '#db61ffab' : 'white')};
        transition: all 0.3s;

        &:hover {
            border-color: #db61ffab;
            color: #db61ffab;
        }
        &:active {
            border-color: #db61ffab;
            color: #db61ffab;
        }
    `,
    user: css`
        border: none;
        color: #ffffff;
        background-color: transparent;
        padding: 5px 15px;
        border-radius: 6px;
        font-size: 14px;
        transition: all 0.3s;

        &:hover {
            background-color: #4d3c8d;
            border: 1px solid #ffffff;
        }
        &:active {
            background-color: #4d3c8d;
            border: 1px solid #ffffff;
        }
    `,
};

const btnMixin = (params) => {
    const styles = buttons[params];
    return styles;
};
export const Btn = styled.button`
    ${(props) => btnMixin(props.$style)};
`;
// background: none;
