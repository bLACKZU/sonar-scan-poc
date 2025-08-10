const hello = require('./index');

describe('hello', () => {
  it('should print "No name provided" when name is null', () => {
    // Mock console.log
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    hello(null);
    expect(logSpy).toHaveBeenCalledWith('No name provided');
    logSpy.mockRestore();
  });

  it('should print "Hello, <name>" when name is provided', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    hello('World');
    expect(logSpy).toHaveBeenCalledWith('Hello, World');
    logSpy.mockRestore();
  });
});
