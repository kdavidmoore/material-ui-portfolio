import React from 'react';

const SocialMediaIcon = ({linkUrl, icon}) => (
    <a href={linkUrl}>
        <span className="fa-stack fa-2x">
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className={icon}></i>
        </span>
    </a>
)

export default SocialMediaIcon;