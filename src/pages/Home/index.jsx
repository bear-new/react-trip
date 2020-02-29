// import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { testA } from '../../utils/format';
import NumberList from '../../components/NumberList/index';
import Picker from '../../components/picker/index';
import Popup from '../../components/popup/index';
import '../../utils/decorator.js';
const { whyDidYouUpdate } = require('why-did-you-update')
whyDidYouUpdate(React)

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'home'
        }
    }
    componentDidMount() {
        testA();
    }
    change = () => {
        this.setState({
            title: 'login'
        })
    }
    render() {
        console.log('ssss')
        return (
            <div>
                <h1 onClick={this.change}>{this.state.title}</h1>
                <Link to="/login">sign in</Link>
                <NumberList />
                <Popup />
                <div className="picker-wrapper">
                    <Picker
                        list={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                    />
                    <div className="border"></div>
                </div>
            </div>
        )
    }
}

// export default hot(Home);
export default Home;