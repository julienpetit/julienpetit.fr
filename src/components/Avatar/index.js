import React, { PureComponent } from 'react';
import avatarImg from './avatar.jpg';
import './avatar.css'

class Avatar extends PureComponent {
    render() {
        return (
            <img src={avatarImg} alt="" className='avatar'/>
        );
    }
}

export default Avatar;
