import styled from '@emotion/styled';

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;
    height: 100vh;
    background-color: var(--medium-green);

    @media screen and (min-width: 768px) {
        justify-content: center;
    }
`;