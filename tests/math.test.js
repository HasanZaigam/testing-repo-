import * as math from '../src/math.js';
import assert from 'assert';

function runTests() {
    console.log('Running tests...');

    // Testing add
    if (typeof math.add !== 'function') {
        console.error('add function not found');
        process.exit(1);
    }

    // Positive
    assert.strictEqual(math.add(5, 3), 8, '5 + 3 should be 8');
    
    // Negative
    assert.strictEqual(math.add(-5, -3), -8, '-5 + -3 should be -8');
    
    // Zero
    assert.strictEqual(math.add(5, 0), 5, '5 + 0 should be 5');
    assert.strictEqual(math.add(0, 5), 5, '0 + 5 should be 5');
    
    // Decimal
    assert.strictEqual(math.add(5.5, 2.2), 7.7, '5.5 + 2.2 should be 7.7');

    // Testing subtract
    if (typeof math.subtract !== 'function') {
        console.error('subtract function not found');
        process.exit(1);
    }

    // Positive
    assert.strictEqual(math.subtract(5, 3), 2, '5 - 3 should be 2');
    
    // Negative
    assert.strictEqual(math.subtract(-5, -3), -2, '-5 - (-3) should be -2');
    
    // Zero
    assert.strictEqual(math.subtract(5, 0), 5, '5 - 0 should be 5');
    assert.strictEqual(math.subtract(0, 5), -5, '0 - 5 should be -5');
    
    // Decimal
    assert.strictEqual(math.subtract(5.5, 2.2), 3.3, '5.5 - 2.2 should be 3.3');
    
    console.log('All tests passed!');
}

runTests();
