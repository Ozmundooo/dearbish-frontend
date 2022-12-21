import React from "react";

export default function ContactForm() {
  return (
    <div className="lg:justify-center lg:align-middle lg:flex ">
      <form
        className="flex flex-col p-10 align-middle lg:w-1/2 text-white "
        action="https://formsubmit.co/09c7994bc2115a974dd6edeba1ac47f4"
        method="POST"
      >
        <input type="hidden" name="_captcha" value="false"></input>
        <input type="hidden" name="_next" value="/home"></input>
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
          type="email mx-auto"
          name="email"
          required
        />
        <br></br>
        <label className="font-['Poppins'] lg:text-lg">Message:</label>
        <textarea
          name="message"
          arows="5"
          className=" font-['Poppins'] border border-white p-1.5 text-black"
        />
        <br></br>
        <button
          className="my-4 p-5 bg-white text-center rounded-sm  text-black font-bold text-2xl hover:shadow-2xl border border-black w-1/2  mx-auto"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
}
