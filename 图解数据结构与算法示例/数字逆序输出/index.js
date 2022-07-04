function convert(num) {
    const numStr = num.toString();
    const reuslt = [...numStr].reverse().join('');
    return reuslt;
}

console.log(convert(123456));