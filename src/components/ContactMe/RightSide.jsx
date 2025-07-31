import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const RightSide = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false); // Loading state

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true

    emailjs
      .sendForm(
        import.meta.env.VITE_service_id,
        import.meta.env.VITE_template_id,
        form.current,
        import.meta.env.VITE_public_key
      )
      .then(
        (result) => {
          toast.success("Message sent");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message");
          setLoading(false);
        }
      );
  };

  return (
    <div className="lg:w-1/2 w-full lg:ml-10 ml-0 mt-14">
      <form ref={form} onSubmit={sendEmail} className="w-full">
        <div className="w-[80%] mx-auto">
          <input
            type="text"
            placeholder="Name.."
            name="user_name"
            className="input input-bordered border-[#64c59a] w-full"
            required
          />
        </div>
        <div className="mt-10 w-[80%] mx-auto">
          <input
            type="email"
            placeholder="Email..."
            name="user_email"
            required
            className="input input-bordered border-[#64c59a] w-full"
          />
        </div>

        <div className="mt-10 w-[80%] mx-auto">
          <textarea
            className="textarea border-[#64c59a] h-[120px] w-full"
            placeholder="Message"
            name="message"
            required
          ></textarea>
        </div>
        <div className="text-center mt-5">
          <button
            type="submit"
            className={`btn text-white disabled:text-white disabled:bg-[#64c59a] hover:text-[#64c59a] transition-all ease-in-out hover:bg-[#fff] bg-[#64c59a]`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Mail"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RightSide;
