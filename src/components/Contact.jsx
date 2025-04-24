import { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    //! must read about it

    formData.append("access_key", "275334f5-ff52-4165-8671-5f7e81e99ad1");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Form Submitted Successfully!");
      setResult("");
      event.target.reset();
    } else {
      toast.error(res.message);
      setResult("");
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-center p-6 py-16 md:py-20 lg-px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-center font-bold text-2xl sm:text-4xl mb-2">
        Contact{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          With Us
        </span>
      </h1>
      <p className="max-w-80 text-gray-500 mb-8 mx-auto text-center">
        Ready to Make a Move? Let’s Build Your Future Together
      </p>

      <form
        onSubmit={onSubmit}
        action=""
        className="max-w-xl md:max-w-2xl mx-auto bg-gradient-to-br from-white via-blue-white/50 to-white px-10 py-12 rounded-2xl border border-gray-200 & shadow-2xl transition-all space-y-6"
      >
        <div className="flex flex-col md:flex-row gap-6">
          <input
            name="Name"
            type="text"
            placeholder="Your Name"
            className="flex-1 px-3 py-4 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-200 focus:border-blue-200 placeholder-gray-400 transition-all "
            required
          />
          <input
            name="Email"
            type="email"
            placeholder="Your Email"
            className="flex-1 px-3 py-4 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-200 focus:border-blue-200 placeholder-gray-400 transition-all "
            required
          />
        </div>

        <textarea
          name="Message"
          rows="5"
          placeholder="Write your message..."
          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-200 focus:border-blue-200 placeholder-gray-400 resize-none transition-all"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full md:max-w-fit md:px-16  bg-blue-500 text-white font-medium text-md py-3 rounded-xl border hover:bg-blue-700 transition-all duration-300"
        >
          {result ? result : "Send Message"}
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
