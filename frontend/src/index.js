import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'
import UserBadges from './components/badge_section'
import ProfilePicture from './components/profile_picture'
import UserDescription from './components/user_descripion'
import Footer from './components/footer'
import * as serviceWorker from './serviceWorker';
// import './index.css';
import './styles/styles.css'

ReactDOM.render(
    <div className={'app-body container'}>
        <SearchBar/>
        {/*<ProfilePicture/>*/}
        <UserBadges />
        <UserDescription/>
        <Footer/>
    </div>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
