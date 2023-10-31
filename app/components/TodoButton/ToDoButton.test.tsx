import { render } from '@testing-library/react';
import ToDoButton from './ToDoButton';
import { Color } from '@/app/constants/color';

describe('ToDoButton', () => {
    it('is truthy', () => {
        expect(ToDoButton).toBeTruthy()
    })

    it('displays the correct text', () => {
        const { container } = render(<ToDoButton title='DONE' hasBorder={false} colorVariant={Color.RED} onPress={() => {}} />);
        expect(container.textContent).toEqual('DONE');
    });

});