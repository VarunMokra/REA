import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);

  // Define the custom blue shades
  const customBlue = "#3352cc";
  const customBlueDark = "#23388b"; // A slightly darker shade for hovers/focus

  const onSubmit = async (data) => {
    setLoading(true);
    console.log(data);
    // Simulate form submission with a Promise for better async handling
    await new Promise((resolve) => setTimeout(resolve, 2000));
    toast.success("Message sent successfully!");
    reset();
    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-gray-100 py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <header className="text-center mb-10 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">
            Get in Touch
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            We'd love to hear from you! Send us a message or find our contact
            details below.
          </p>
        </header>

        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl space-y-8 md:space-y-12">
          {/* Contact Form Section */}
          <div>
            <h2
              className={`text-2xl font-semibold text-gray-700 mb-6 border-l-4 border-[${customBlue}] pl-3`}
            >
              Send a Message
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "Full name is required" })}
                  className={`mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-[${customBlue}] focus:border-[${customBlue}] sm:text-sm p-3 transition duration-150 ease-in-out`}
                  placeholder="e.g., John Doe"
                />
                {errors.name && (
                  <p className="text-red-600 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                      message: "Invalid email address format",
                    },
                  })}
                  className={`mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-[${customBlue}] focus:border-[${customBlue}] sm:text-sm p-3 transition duration-150 ease-in-out`}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="text-red-600 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register("subject")}
                  className={`mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-[${customBlue}] focus:border-[${customBlue}] sm:text-sm p-3 transition duration-150 ease-in-out`}
                  placeholder="Regarding your services"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  {...register("message", { required: "Message is required" })}
                  rows="5"
                  className={`mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-[${customBlue}] focus:border-[${customBlue}] sm:text-sm p-3 transition duration-150 ease-in-out`}
                  placeholder="Type your message here..."
                />
                {errors.message && (
                  <p className="text-red-600 text-xs mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className={`w-full py-3 px-6 bg-[${customBlue}] text-white font-semibold rounded-lg shadow-md hover:bg-[${customBlueDark}] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[${customBlue}] focus:ring-offset-2 focus:ring-offset-white transition duration-150 ease-in-out disabled:opacity-70`}
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="border-t border-gray-200 pt-8 md:pt-12">
            {/* Using a neutral or complementary accent for this section title to avoid overuse of the primary blue */}
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 border-l-4 border-green-500 pl-3">
              Contact Details
            </h2>
            <div className="space-y-4 text-gray-600">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  Our Address
                </h3>
                <p>Real Estate, CGJ6+3RC Chilakalguda Road</p>
                <p>Andhra Pradesh, Railway Colony, Chilakalguda,</p>
                <p>Secunderabad, Telangana 500061</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  Get in Touch
                </h3>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:rajuseducationalacademy@gmail.com"
                    className={`text-[${customBlue}] hover:text-[${customBlueDark}] hover:underline transition duration-150 ease-in-out`}
                  >
                    rajuseducationalacademy@gmail.com
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a
                    href="tel:+919849771936"
                    className={`text-[${customBlue}] hover:text-[${customBlueDark}] hover:underline transition duration-150 ease-in-out`}
                  >
                    +91 9849771936
                  </a>{" "}
                  /{" "}
                  <a
                    href="tel:+919502471936"
                    className={`text-[${customBlue}] hover:text-[${customBlueDark}] hover:underline transition duration-150 ease-in-out`}
                  >
                    9502471936
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-12 md:mt-16 rounded-xl shadow-2xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.334608050767!2d78.5100086758719!3d17.44398490134215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a0c7ea323f3%3A0x752dc9ac27580885!2sRaju&#39;s%20Educational%20Academy!5e0!3m2!1sen!2sin!4v1715078867207!5m2!1sen!2sin" // Replace with your actual Google Maps embed URL if this isn't correct
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Location on Google Maps"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
