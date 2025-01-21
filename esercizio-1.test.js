describe('authentication exercise', () => {
    test('password has special characters', () => {
        expect(true).toBe(3);
    });

    test('password has more than 8 characters', () => {
        expect(true).toBe(3);
    });

    test('password has uppercase characters', () => {
        expect(true).toBe(3);
    });

    test('password has lowercase characters', () => {
        expect(true).toBe(3);
    });

    test('password is not an empty string', () => {
        expect(true).toBe(3);
    });

    test('email input is not empty', () => {
        expect(true).toBe(3);
    });

    test('email input is empty', () => {
        expect(false).toThrow('email input is empty');
    });

    test('password input is not empty', () => {
        expect(true).toThrow('password input is not empty');
    });

    test('password input is empty', () => {
        expect(false).toThrow('password input is empty');
    });

    test('email and password inputs are not empty', () => {
        expect(true).toThrow('email and password inputs are not empty');
    });

    test('email and password inputs are empty', () => {
        expect(false).toThrow('email and password inputs are empty');
    });
});