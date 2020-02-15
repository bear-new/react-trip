import React from 'react';

export default class NumberList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            numbers: [1, 2, 3, 4]
        };
        this.handleClick = this.handleClick.bind(this);
    }
    // numbers中新加一个数值
    handleClick() {
        const numbers = this.state.numbers;
        // 直接修改numbers对象
        numbers.push(numbers[numbers.length - 1] + 1);
        this.setState({ numbers: numbers });
    }
    render() {
        console.log('render')
        return (
            <div>
                <button onClick={this.handleClick} />
                {this.state.numbers.map(item => <div key={item}>{item}</div>)}
            </div>
        );
    }
}
