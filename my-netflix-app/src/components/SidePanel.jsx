import React from 'react'
import Year2016 from './Year2016';
// import PropTypes from 'prop-types'
//rfcp
import logo from '../images/white-netflix-logo.png';

function SidePanel() {
    return (
        <div className="container1">
            <img alt="net-logo" className="netflix-logo" src={logo}></img>
            <div className="buttons">
                <Year2016 year="2016"/>
                {/* <button className="btn">2016</button> */}
                <button className="btn">2017</button>
                <button className="btn">2018</button>
                <button className="btn">2019</button>
                <button className="btn">2019</button>
            </div>
        </div>
    )
}

// SidePanel.propTypes = {

// }

export default SidePanel;

