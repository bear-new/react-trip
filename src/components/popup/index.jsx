import React, { Component } from 'react';
import Stack from 'utils/stack';
import style from './style.pcss';

export default class Popup extends Component {
    // 进制转换
    baseConverter (decNumber, base) {
        let rem;
        let baseString = '';
        const remStack = new Stack();
        const digits = '0123456789ABCDEF';

        while (decNumber > 0) {
            rem = Math.floor(decNumber % base);
            console.log(rem)
            remStack.push(rem);
            console.log(remStack)
            decNumber = Math.floor(decNumber / base);
            console.log('decNumber', decNumber)
        }
        console.log(remStack.toString())
        while (!remStack.isEmpty()) {
            // console.log(remStack.pop())
            // console.log(digits[remStack.pop()])
            console.log(digits[0])
            baseString += digits[remStack.pop()];
        }

        return baseString;
    }
    test () {
        const print = this.baseConverter(7, 2);
        console.log('print', print);
    }
    render () {
        this.test();
        return (
            <div className={style.wrapper}>
                <div></div>
                <input />
            </div>
        );
    }
}
