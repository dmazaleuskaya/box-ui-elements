import React from 'react';
import { render, screen } from '@testing-library/react';

import Answer from '../Answer';

describe('features/content-answers/answer', () => {
    const renderComponent = (props: { answer: string; isLoading: boolean }) => render(<Answer {...props} />);

    test('should render the answer', () => {
        renderComponent({ answer: 'some answer', isLoading: false });

        const answer = screen.getByText('some answer');
        expect(answer).toBeInTheDocument();
    });

    test('should render the loading element', () => {
        renderComponent({ answer: '', isLoading: true });

        const loadingElement = screen.getByTestId('LoadingElement');
        expect(loadingElement).toBeInTheDocument();
    });
});
