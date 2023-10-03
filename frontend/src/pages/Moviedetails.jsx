import React from 'react';
import Moviepage from '../components/Moviepage';
import Header from '../components/Header';
import Cast from '../components/Cast';
import Review from '../components/Review';
import Footer from '../components/Footer';
const Moviedetails = () => {
    return (
        <div>
            <Header />
            <Moviepage />
            <Cast />
            <Review />
            <Footer />
        </div>
    )
}

export default Moviedetails