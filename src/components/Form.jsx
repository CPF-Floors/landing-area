import { useState } from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL


const sentData = async (data) => {
  const dataFormatted = {
    lastName: data.lastName,
    email: data.email,
    firstName: data.firstName,
    phone: data.phone,
    membershipType: data.membershipType,
  };

  const response = await fetch(`${BACKEND_URL}api/user/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataFormatted),
  });

  return response.status;
};

const Form = () => {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {

    const status = await sentData(data);
    
    if (status === 200) {
      setSuccess(!success);
      reset();
    }
  };

  return (
    <div id="form" className="form-container">
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="dual-input">
            <div className="input">
              <label>First Name</label>
              <input
                {...register("firstName", { required: true })}
                placeholder="Joe Smith"
              />
              {errors.fullName && <span>This field is required</span>}
            </div>
            <div className="input">
              <label>Your E-mail</label>
              <input
                {...register("email", { required: true })}
                placeholder="example@mailto.co"
              />
              {errors.email && <span>This field is required</span>}
            </div>
          </div>

          <div className="dual-input">
            <div className="input">
              <label>Last Name</label>
              <input
                {...register("lastName", { required: false })}
                placeholder="Last Name"
              />
              {errors.companyName && <span>This field is required</span>}
            </div>

            <div className="input">
              <label>Phone Number</label>
              <input
                {...register("phone", { required: true })}
                placeholder="Your Phone Number"
              />
              {errors.phone && <span>This field is required</span>}
            </div>
          </div>

          <div className="input">
            <label>Membership type</label>

            <select  {...register("membershipType", { required: true })} name="membershipType" id="membershipType">
              <option value="Lounge">Lounge</option>
              <option value="Flex Desk">Flex Desk</option>
              <option value="Station">Station</option>
              <option value="Private Office">Private Office</option>
            </select>
          </div>

          <div className="submit">
            <button type="submit">
              Get Early Access
            </button>
          </div>
        </form>
      </div>

      <div className="form-img"></div>

      {success && (
        <AnimatePresence>
          <motion.div
            id="submitForm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}
            className="success"
            onClick={() => setSuccess(false)}
          >
            <img src="/logo.svg" alt="" />
            <p onClick={() => setSuccess(false)}>Close</p>
            <h2>Thanks for your subscription</h2>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default Form;
