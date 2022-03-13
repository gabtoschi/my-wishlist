import { fireEvent, render, screen } from '@testing-library/react';
import RemoveCardButton from './RemoveCardButton';
import { RemoveCardButtonTestIds } from './RemoveCardButton.types';

describe('RemoveCardButton', () => {
  test('calls correctly the click function', () => {
    const onClick = jest.fn().mockName('remove onClick');

    render(<RemoveCardButton onClick={() => onClick()} />);
    const buttonElement = screen.getByTestId(RemoveCardButtonTestIds.Button);

    fireEvent.click(buttonElement);

    expect(onClick).toHaveBeenCalled();
  });
});
