import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { GoPaperAirplane } from "react-icons/go";

const RightSide = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_service_id,
        import.meta.env.VITE_template_id,
        form.current,
        import.meta.env.VITE_public_key
      )
      .then(
        (result) => {
          toast.success("Message sent successfully! 🚀");
          form.current.reset();
          setFormData({ user_name: "", user_email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="lg:w-1/2 w-full lg:ml-0 ml-0 mt-10 lg:mt-0">
      <div className="bg-gradient-to-br from-[#0f1830] to-[#1a2332] rounded-2xl p-8 border border-[#64C59A]/20 shadow-2xl">
        <div className="mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Send Message
          </h3>
          <p className="text-gray-400">
            Drop me a line and I'll get back to you as soon as possible
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          {/* Name Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Your Name"
              name="user_name"
              value={formData.user_name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-[#1a2332] border border-[#64C59A]/30 rounded-xl text-white placeholder-gray-400 focus:border-[#64C59A] focus:ring-2 focus:ring-[#64C59A]/20 focus:outline-none transition-all duration-300"
              required
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#64C59A]/0 to-[#4ade80]/0 group-hover:from-[#64C59A]/5 group-hover:to-[#4ade80]/5 pointer-events-none transition-all duration-300"></div>
          </div>

          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              placeholder="Your Email"
              name="user_email"
              value={formData.user_email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-[#1a2332] border border-[#64C59A]/30 rounded-xl text-white placeholder-gray-400 focus:border-[#64C59A] focus:ring-2 focus:ring-[#64C59A]/20 focus:outline-none transition-all duration-300"
              required
            />
          </div>

          {/* Message Input */}
          <div className="relative">
            <textarea
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="5"
              className="w-full px-4 py-3 bg-[#1a2332] border border-[#64C59A]/30 rounded-xl text-white placeholder-gray-400 focus:border-[#64C59A] focus:ring-2 focus:ring-[#64C59A]/20 focus:outline-none transition-all duration-300 resize-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`
              w-full py-3 px-6 bg-gradient-to-r from-[#64C59A] to-[#4ade80] text-black font-semibold rounded-xl
              transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[#64C59A]/30
              disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none
              flex items-center justify-center gap-2 group
            `}
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <GoPaperAirplane className="w-5 h-5  transition-transform duration-300" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RightSide;
