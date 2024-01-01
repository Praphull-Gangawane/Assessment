const { getHistoricalEvents } = require('C:/Users/Prafull Gangawane/historical-events-test/historical-events-test/historicalEventsModule.js');

describe('getHistoricalEvents Function Tests', () => {
  // Input Validation Tests
  test('Valid date format should not throw an error', () => {
    expect(() => getHistoricalEvents('1776-07-04')).not.toThrow();
  });

  test('Invalid date format should throw an error', () => {
    expect(() => getHistoricalEvents('invalid-date')).toThrow('Invalid date and time format');
  });

  test('Invalid maxLength value should throw an error', () => {
    expect(() => getHistoricalEvents('1776-07-04', 'invalid-maxLength')).toThrow('Invalid maxLength value');
  });

  test('Negative maxLength value should throw an error', () => {
    expect(() => getHistoricalEvents('1776-07-04', -1)).toThrow('Invalid maxLength value');
  });

  // Data Accuracy Tests
  test('Events for a specific date should be returned accurately', () => {
    const events = getHistoricalEvents('1776-07-04');
    expect(events).toEqual(['Declaration of Independence']);
  });

  test('Events should be returned in the order of historicalEvents array', () => {
    const events = getHistoricalEvents('1969-07-20');
    expect(events).toEqual(['Declaration of Independence', 'Apollo 11 Moon Landing', 'Gettysburg Address', 'End of World War II']);
  });
  

  // Boundary Testing Tests
  test('Events close to historical events dates should be returned', () => {
    const events = getHistoricalEvents('1969-07-19');
    expect(events).toEqual(['Declaration of Independence', 'Gettysburg Address', 'End of World War II']);
  });

  test('No future events should be returned', () => {
    const events = getHistoricalEvents('2100-01-01');
    expect(events).toEqual([]);
  });
  

  // Error Handling Tests
  test('No historical events found should throw an error', () => {
    expect(() => getHistoricalEvents('1800-01-01')).toThrow("No historical events found for the specified date and time");
  });
});
