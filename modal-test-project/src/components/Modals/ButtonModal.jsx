import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from "react-hook-form";
import { useState } from 'react';

function ButtonModal({ secretFirst, secretLast }) {

  const { register, getValues } = useForm();
  const [openFooter, setFooterIsOpen] = useState(false);

  const submitFunction = () => {
    const enteredFirst = getValues("firstName");
    const enteredLast = getValues("lastName");
    if(enteredFirst === secretFirst && enteredLast === secretLast){
      setFooterIsOpenToTrue();
    }
  }

  const setFooterIsOpenToTrue = () =>{
    setFooterIsOpen(true);
  }
    return (
      <div className="modalContainer">

        <div className="modalInputs">
          <p>Please Fill Out The Following User Information</p>
            <form>
              <input {...register("firstName")} placeholder="First name" />
              <input {...register("lastName")} placeholder="Last name" />
              <button type="button" data-backdrop="static" data-keyboard="false" onClick={() => submitFunction()}>Submit</button>
            </form>
        </div>

        {openFooter ? <div>Welcome Erick Venegas</div> : ''}

      </div>




    );
  }

ButtonModal.propTypes = {
  secretFirst: PropTypes.string,
  secretLast: PropTypes.string
}

export default ButtonModal;
