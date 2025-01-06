TypeScript 与 JavaScript 类似，支持 Number 对象。
Number 对象是原始数值的包装对象。
语法：
```typescript
var num = new Number(value);
```
注意： 如果一个参数值不能转换为一个数字将返回 NaN (非数字值)。
#### Number 对象属性
**MAX_VALUE:** 可表示的最大的数，MAX_VALUE 属性值接近于 1.79E+308。大于 MAX_VALUE 的值代表 "Infinity"。
**MIN_VALUE:**可表示的最小的数，即最接近 0 的正数 (实际上不会变成 0)。最大的负数是 -MIN_VALUE，MIN_VALUE 的值约为 5e-324。小于 MIN_VALUE ("underflow values") 的值将会转换为 0。
**NaN:**非数字值（Not-A-Number）。
**NEGATIVE_INFINITY:**负无穷大，溢出时返回该值。该值小于 MIN_VALUE。
**POSITIVE_INFINITY:**正无穷大，溢出时返回该值。该值大于 MAX_VALUE。
代码示例:
```typescript
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.NaN); // NAN
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.POSITIVE_INFINITY); // Infinity
```

#### Number 对象方法
**toExponential():**把对象的值转换为指数计数法。
**toFixed():**把数字转换为字符串，并对小数点指定位数。
**toLocaleString():**把数字转换为字符串，使用本地数字格式顺序。
**toPrecision():**把数字格式化为指定的长度。
**toString():**把数字转换为字符串，使用指定的基数。数字的基数是 2 ~ 36 之间的整数。若省略该参数，则使用基数 10。
**valueOf():**返回一个 Number 对象的原始数字值。

代码示例：
```typescript
let num = new Number(12345678910.12345);
console.log(num.toExponential()); // 1.234567891012345e+10
console.log(num.toFixed(3)); // 12345678910.123
console.log(num.toLocaleString()); // 12,345,678,910.123
console.log(num.toPrecision(3)); // 1.23e+10
console.log(num.toString()); // 12345678910.12345
console.log(num.valueOf()); // 12345678910.12345
```

附录(TS3.9.7接口部分源码):
```typescript
interface Number {
    /**
     * Returns a string representation of an object.
     * @param radix Specifies a radix for converting numeric values to strings. This value is only used for numbers.
     */
    toString(radix?: number): string;

    /**
     * Returns a string representing a number in fixed-point notation.
     * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
     */
    toFixed(fractionDigits?: number): string;

    /**
     * Returns a string containing a number represented in exponential notation.
     * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
     */
    toExponential(fractionDigits?: number): string;

    /**
     * Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
     * @param precision Number of significant digits. Must be in the range 1 - 21, inclusive.
     */
    toPrecision(precision?: number): string;

    /** Returns the primitive value of the specified object. */
    valueOf(): number;
}

interface NumberConstructor {
    new(value?: any): Number;
    (value?: any): number;
    readonly prototype: Number;

    /** The largest number that can be represented in JavaScript. Equal to approximately 1.79E+308. */
    readonly MAX_VALUE: number;

    /** The closest number to zero that can be represented in JavaScript. Equal to approximately 5.00E-324. */
    readonly MIN_VALUE: number;

    /**
     * A value that is not a number.
     * In equality comparisons, NaN does not equal any value, including itself. To test whether a value is equivalent to NaN, use the isNaN function.
     */
    readonly NaN: number;

    /**
     * A value that is less than the largest negative number that can be represented in JavaScript.
     * JavaScript displays NEGATIVE_INFINITY values as -infinity.
     */
    readonly NEGATIVE_INFINITY: number;

    /**
     * A value greater than the largest number that can be represented in JavaScript.
     * JavaScript displays POSITIVE_INFINITY values as infinity.
     */
    readonly POSITIVE_INFINITY: number;
}

/** An object that represents a number of any kind. All JavaScript numbers are 64-bit floating-point numbers. */
declare var Number: NumberConstructor;
```
