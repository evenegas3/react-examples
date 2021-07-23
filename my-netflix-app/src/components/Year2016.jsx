// import PropTypes from 'prop-types'
import Modal2016 from './Modal2016';
import React, { useState } from 'react';
import Modal from 'react-modal';


function Year2016(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue = () =>{
        setModalIsOpen(true)
    }
    const setModalIsOpenToFalse = () =>{
        setModalIsOpen(false)
    }

    return (
        <div>
            <button className="btn" onClick={setModalIsOpenToTrue}>{props.year}</button>
            <Modal isOpen={modalIsOpen}>
                <Modal2016 year={props.year}/>
            <button className="btn" onClick={setModalIsOpenToFalse}>Close</button>
            </Modal>
        </div>
    )
}

Year2016.propTypes = {
    year: String,
}

export default Year2016;

