import assert from 'assert';
import Parentheses from '../src/parentheses';

describe('Parentheses', function() {
  it('如果 输入字符串为 "" ，当调用 Parentheses.execute()，则结果返回 true', () => {
    assert.equal(Parentheses.execute(''), true);
  });

  it('如果 输入字符串为 () ，当调用 Parentheses.execute()，则结果返回 true', () => {
    assert.equal(Parentheses.execute('()'), true);
  });
});
