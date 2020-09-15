import React, { Component } from 'react';

class Header extends Component {
    render () {
        return (
            <div>
                <a href="/">Katie Abraham</a>
                <a href="/about">About</a>
                <a href="/media">Media</a>
                <a href="/contact">Contact</a>
            </div>
        )
    }
};

export default Header;