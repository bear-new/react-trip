// import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Popup from '../../components/popup/index';
import '../../utils/decorator.js';
const { whyDidYouUpdate } = require('why-did-you-update')
whyDidYouUpdate(React)

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'home',
            NumberList: null
        }
    }
    getSnapshotBeforeUpdate() {
        console.log('5555');
        return 1;
    }
    componentDidMount() {
        // import('../../utils/format').then(format => {
        //     format.testA();
        // })

        setTimeout(() => {
            this.setState({
                NumberList: React.lazy(() => import('../../components/NumberList/index'))
            })
        }, 3000)
    }
    change = () => {
        this.setState({
            title: 'login'
        })
    }
    render() {
        console.log('77777')
        const { NumberList } = this.state;
        return (
            <div>
                <h1 onClick={this.change}>{this.state.title}</h1>
                <Link to="/login">sign in</Link>
                <Popup />
                <div className="picker-wrapper">
                    <Picker
                        list={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                    />
                    <div className="border"></div>
                </div>
                {
                    NumberList &&
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <section>
                            <NumberList />
                        </section>
                    </React.Suspense>
                }
            </div>
        )
    }
}

// export default hot(Home);
export default Home;
import Picker from '../../components/picker/index';