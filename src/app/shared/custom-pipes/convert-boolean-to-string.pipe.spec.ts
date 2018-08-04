import { ConvertBooleanToStringPipe } from './convert-boolean-to-string.pipe';

describe('ConvertBooleanToStringPipe', () => {
  it('create an instance', () => {
    const pipe = new ConvertBooleanToStringPipe();
    expect(pipe).toBeTruthy();
  });
});
