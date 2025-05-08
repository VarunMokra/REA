import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    address: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, subject, address, resume } = formData;
    if (!name || !email || !phone || !subject || !address || !resume) {
      toast.error("Please fill out all required fields.");
      return;
    }

    // Simulate submission
    setTimeout(() => {
      toast.success("Profile submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        address: "",
        resume: null,
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f3f6ff] to-white py-12 px-4">
      <Toaster position="top-right" />
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#1B2124] mb-8">
          Join Our Teaching Team
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-2xl rounded-xl p-8 space-y-5"
        >
          <div>
            <label className="block text-sm font-medium mb-1">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-[#3352cc] outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-[#3352cc] outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-[#3352cc] outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Subject Expertise *
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-[#3352cc] outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Address *</label>
            <textarea
              name="address"
              rows="3"
              required
              onChange={handleChange}
              value={formData.address}
              className="w-full border border-gray-300 px-3 py-2 rounded-md text-gray-700 bg-white focus:border-[#3352cc] focus:ring-1 focus:ring-[#3352cc] resize-none transition"
              placeholder="Enter your complete address"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Upload Resume *
            </label>
            <div className="relative">
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
                className="peer absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer"
              />
              <div className="flex justify-between items-center px-4 py-2 border border-gray-300 rounded-md bg-white text-sm text-gray-600 peer-hover:border-[#3352cc] peer-focus-within:border-[#3352cc] transition">
                <span className="truncate">
                  {formData.resume ? formData.resume.name : "No file chosen"}
                </span>
                <span className="text-white bg-[#3352cc] hover:bg-[#2c45b3] px-3 py-1 rounded text-sm font-medium transition">
                  Choose File
                </span>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#3352cc] text-white font-semibold py-2 rounded-md hover:bg-[#2a44b6] transition"
          >
            Submit Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Career;
