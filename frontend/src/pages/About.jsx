import React from "react";

const About = () => {
  return (
    <section className="bg-[#F8F8F8] py-12 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/*<div className="flex justify-center mb-8">
          <Image
            src={Logo}
            alt="Raju's Educational Academy Logo"
            width={120}
            height={120}
            className="object-contain"
          />
        </div>*/}
        <h2 className="text-4xl sm:text-5xl font-bold text-[#1B2124] mb-6">
          About Raju's Educational Academy
        </h2>
        <p className="text-[#3D3D3D] text-base sm:text-lg leading-relaxed max-w-4xl mx-auto mb-8">
          Raju's Educational Academy, established in 1986, has been at the
          forefront of providing high-quality education for over three decades.
          We are committed to shaping young minds with the right balance of
          academic excellence, character development, and overall growth. Our
          innovative teaching methods, experienced educators, and an unwavering
          focus on results have made us a preferred destination for students
          aiming for success in competitive exams and beyond.
        </p>
        <div className="border-t-2 border-[#ddd] pt-8 mb-8">
          <h3 className="text-2xl font-semibold text-[#1B2124] mb-4">
            Why Choose Raju's Educational Academy?
          </h3>
          <p className="text-[#3D3D3D] text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            Choosing the right educational institution is crucial, and at Raju’s
            Educational Academy, we stand out due to our student-centric
            approach and exceptional track record. Our institution not only
            focuses on academic excellence but also strives to build the
            character, confidence, and discipline of each student.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold text-[#1B2124] mb-3">
              🎯 Vision
            </h3>
            <p className="text-[#3D3D3D] text-sm sm:text-base leading-relaxed">
              To be a trailblazer in education by fostering a learning
              environment where every student is empowered with the knowledge,
              skills, and mindset to achieve their fullest potential and become
              leaders of tomorrow.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold text-[#1B2124] mb-3">
              🚩 Mission
            </h3>
            <p className="text-[#3D3D3D] text-sm sm:text-base leading-relaxed">
              To provide a holistic, transformative educational experience that
              combines academics, ethics, and real-world applications, ensuring
              that our students not only succeed in exams but are well-prepared
              to meet the challenges of life.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold text-[#1B2124] mb-3">
              🌟 Why Choose Us?
            </h3>
            <p className="text-[#3D3D3D] text-sm sm:text-base leading-relaxed">
              At Raju’s Educational Academy, we blend tradition with modern
              teaching methodologies. With state-of-the-art facilities,
              personalized attention, and a relentless focus on results, our
              students consistently achieve top ranks in competitive exams. Join
              us to experience a journey of intellectual and personal growth.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="text-white bg-[#FF6600] hover:bg-[#e65c00] py-3 px-8 rounded-full text-lg font-semibold transition duration-300"
          >
            Get in Touch with Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
