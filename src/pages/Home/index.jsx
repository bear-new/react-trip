import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { testA } from '../../utils/format';
import Picker from '../../components/picker/index';
// import { hot } from 'react-hot-loader/root';

class Home extends Component {
    componentDidMount() {
        testA();
    }
    render() {
        console.log('fffff')
        return (
            <div>
                <h1>home</h1>
                <Link to="/login">sign in bear new</Link>
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