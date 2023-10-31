import styled from 'styled-components';

export const InputContainer = styled.div`
    display: flex;
    width: calc(90% + 2rem);
    margin: 0 auto;
    background-color: var(--white);
    margin-bottom: 1rem;

    @media screen and (min-width: 768px) {
        width: calc(600px + 2rem);
    }
`;

export const Input = styled.input`
    width: 70%;
    padding: 1rem;
    border: none;
    font-size: 1rem;
    color: var(--dark-gray);
    background-color: var(--white);

    &:focus {
        outline: none;
    }
`;

export const Button = styled.button`
    width: 40%;
    padding: 1rem;
    border: none;
    font-size: 1rem;
    color: var(--black);
    background-color: var(--yellow);
    cursor: pointer;
`;

