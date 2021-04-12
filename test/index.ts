import handleBackspaces from '..';
import assert from 'assert';

describe('handleBackspaces', () => {
  it('removes backspaces from strings and Buffers', () => {
    assert.strictEqual(handleBackspaces('abc'), 'abc');
    assert.strictEqual(handleBackspaces('abc\u0008def'), 'abdef');
    assert.strictEqual(handleBackspaces('abc\u007fdef'), 'abdef');
    assert.strictEqual(handleBackspaces('ab\u0008c\u007fdef'), 'adef');
    assert.strictEqual(handleBackspaces(Buffer.from('abc')).toString(), 'abc');
    assert.strictEqual(handleBackspaces(Buffer.from('abc\u0008def')).toString(), 'abdef');
    assert.strictEqual(handleBackspaces(Buffer.from('abc\u007fdef')).toString(), 'abdef');
    assert.strictEqual(handleBackspaces('\u0008foo'), 'foo');
    assert.strictEqual(handleBackspaces('<🎉\u0008>'), '<>');
    assert.strictEqual(handleBackspaces(Buffer.from('<🎉\u0008>')).toString(), '<>');
  });
});
