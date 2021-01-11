import React from 'react';

const LeaderPrice: React.FC = (props) => {
    return (
        <h4><p>$</p><strong>{props.children}</strong>/h</h4>
    )
};
export default LeaderPrice;