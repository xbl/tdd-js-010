import assert from 'assert';
import Parentheses from '../src/parentheses';

describe('Parentheses', function() {
  it('如果 输入字符串为 "" ，当调用 Parentheses.execute()，则结果返回 true', () => {
    assert.equal(Parentheses.execute(''), true);
  });

  it('如果 输入字符串为 () ，当调用 Parentheses.execute()，则结果返回 true', () => {
    assert.equal(Parentheses.execute('()'), true);
  });

  it('如果 输入字符串为 ) ，当调用 Parentheses.execute()，则结果返回 false', () => {
    assert.equal(Parentheses.execute(')'), false);
  });

  it('如果 输入字符串为 ()() ，当调用 Parentheses.execute()，则结果返回 true', () => {
    assert.equal(Parentheses.execute('()()'), true);
  });

  it('如果 输入字符串为 ()()( ，当调用 Parentheses.execute()，则结果返回 false', () => {
    assert.equal(Parentheses.execute('()()('), false);
  });

  it('如果 输入字符串为 ] ，当调用 Parentheses.execute()，则结果返回 false', () => {
    assert.equal(Parentheses.execute(']'), false);
  });

  it('如果 输入字符串为 } ，当调用 Parentheses.execute()，则结果返回 false', () => {
    assert.equal(Parentheses.execute('}'), false);
  });

  it('如果 输入字符串为 [({})] ，当调用 Parentheses.execute()，则结果返回 true', () => {
    assert.equal(Parentheses.execute('[({})]'), true);
  });

  it('如果 输入字符串为 {}([]) ，当调用 Parentheses.execute()，则结果返回 true', () => {
    assert.equal(Parentheses.execute('{}([])'), true);
  });

  it('如果 输入字符串为 {()}[[{}]] ，当调用 Parentheses.execute()，则结果返回 true', () => {
    assert.equal(Parentheses.execute('{()}[[{}]]'), true);
  });

  it('如果 输入字符串为 {{)(}} ，当调用 Parentheses.execute()，则结果返回 false', () => {
    assert.equal(Parentheses.execute('{{)(}}'), false);
  });

  it('如果 输入字符串为 ({)} ，当调用 Parentheses.execute()，则结果返回 false', () => {
    assert.equal(Parentheses.execute('({)}'), false);
  });

  const inputStr = `
    const fn = () => {
      const arr = [1, 2, 3];
      if (arr.length) {
        alert('success!');
      }
    };
  `;

  it(`如果 输入字符串为 ${inputStr} ，当调用 Parentheses.execute()，则结果返回 false`, () => {
    assert.equal(Parentheses.execute(inputStr), true);
  });
});
