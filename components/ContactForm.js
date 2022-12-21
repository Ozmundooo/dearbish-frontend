import React from "react";
import { useForm } from "react-hook-form";
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="lg:justify-center lg:align-middle lg:flex ">
      <form
        className="flex flex-col p-10 align-middle lg:w-1/2 text-white "
        action="https://formsubmit.co/09c7994bc2115a974dd6edeba1ac47f4"
        method="POST"
      >
        <input type="hidden" name="_captcha" value="false"></input>
        <input
          type="hidden"
          name="_next"
          required
          value="https://dearbish.com/home"
        ></input>
        <h2 className="lg:text-5xl text-3xl text-white text text-center mb-10 font-bold">
          Contact
        </h2>
        <label className="font-['Poppins'] lg:text-lg">Name:</label>
        <input
          className=" font-['Poppins'] border border-white p-1.5 text-black"
          type="text"
          name="name"
          required
        />
        <br></br>
        <label className="font-['Poppins'] lg:text-lg ">Email:</label>
        <input
          className=" font-['Poppins'] border border-white p-1.5 text-black"
          type="text"
          name="email"
          required
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          })}
        />
        {errors.email && <h1 className="text-white">Invalid email</h1>}
        <br></br>
        <label className="font-['Poppins'] lg:text-lg">Message:</label>
        <textarea
          name="message"
          arows="5"
          className=" font-['Poppins'] border border-white p-1.5 text-black"
        />
        <br></br>
        <button
          className="my-4 p-5 bg-white text-center rounded-sm  text-black font-bold text-2xl hover:shadow-2xl border border-black w-1/2 invalid:text-red-900  mx-auto"
          type="submit"
        >
          Send
        </button>
        {errors.email && <h1 className="text-white">Invalid email</h1>}
      </form>
    </div>
  );
}
