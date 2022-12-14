import { createElement } from 'lwc';
import LwcAssignment2_1Parent from 'c/lwcAssignment2_1Parent';

describe('c-lwc-assignment2-1-parent', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-lwc-assignment2-1-parent', {
            is: LwcAssignment2_1Parent
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});