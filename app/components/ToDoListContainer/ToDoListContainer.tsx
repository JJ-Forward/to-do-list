import React from 'react';
import {Container} from './ToDoListContainer.styles';
import { ChildProps } from '@/app/layout';

const ToDoListContainer = ({children}: ChildProps) => {
    return (
        <Container>
            {children}
        </Container>
    );
};

export default ToDoListContainer;