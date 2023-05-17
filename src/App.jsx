import { Component } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
class App extends Component {
    render() {
        return (
            <>
                <Header />
                内容
                <Footer />
            </>
        );
    }
}

export  default  App;