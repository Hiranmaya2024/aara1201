describe('Authentication Functionality', () => {
    test('should return a token for valid credentials', () => {
        const credentials = { username: 'user', password: 'pass' };
        const token = authenticate(credentials);
        expect(token).toBeDefined();
    });

    test('should throw an error for invalid credentials', () => {
        const credentials = { username: 'user', password: 'wrongpass' };
        expect(() => authenticate(credentials)).toThrow('Invalid credentials');
    });
});