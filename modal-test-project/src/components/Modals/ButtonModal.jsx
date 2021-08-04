import React from 'react'
import { useForm } from "react-hook-form";

function ButtonModal() {

  const { register } = useForm();

    return (
      <div>
          <p>Please Fill Out The Following User Information</p>
          <form>
            <input {...register("firstName")} placeholder="First name" />
            <input {...register("lastName")} placeholder="Last name" />
            <button type="submit">Submit</button>
          </form>
      </div>
    );
  }

export default ButtonModal;
