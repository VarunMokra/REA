import React from "react";
import Carousel from "../components/Carousel";
import CategoryCard from "../components/CategoryCard";
import FeatureCard from "../components/FeatureCard";
import StatCard from "../components/StatCard";
import BasicButton from "../components/BasicButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Banner = () => {
  return (
    <div className="relative z-0">
      <div className="bg-[radial-gradient(circle,rgba(214,222,245,1)_0%,white_100%)] w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center">
        <div className="max-w-6xl w-full flex items-center justify-center sm:py-[60px] py-[30px]">
          <div className="text-center xl:text-left xl:w-[36%] w-full">
            <h1 className="font-bold text-2xl md:text-4xl md:leading-[48px] xl:leading-[50px] text-[#1B2124] mb-[6px]">
              Welcome to Our Platform
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

const SalientFeatureBox = () => {
  const features = [
    {
      title: "Daily Live",
      description: "Interactive classes",
      imageUrl:
        "https://static.pw.live/5b09189f7285894d9130ccd0/165756ec-8d87-4a09-9a88-95c342adddea.webp",
    },
    {
      title: "Personal Mentorship",
      description: "Expert guidance",
      imageUrl:
        "https://static.pw.live/5b09189f7285894d9130ccd0/165756ec-8d87-4a09-9a88-95c342adddea.webp",
    },
    {
      title: "Flexible Timings",
      description: "Study at your pace",
      imageUrl:
        "https://static.pw.live/5b09189f7285894d9130ccd0/165756ec-8d87-4a09-9a88-95c342adddea.webp",
    },
    {
      title: "Affordable Pricing",
      description: "Competitive pricing plans",
      imageUrl:
        "https://static.pw.live/5b09189f7285894d9130ccd0/165756ec-8d87-4a09-9a88-95c342adddea.webp",
    },
  ];

  return (
    <div className="relative z-10 -mt-20">
      <div className="w-[50%] sm:w-[50%] md:w-[70%] lg:w-[80%] xl:w-full max-w-6xl mx-auto px-4 py-6 rounded-md bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 overflow-hidden shadow-[0px_1px_8px_rgba(0,0,0,0.08)] place-items-center">
        {features.map((feature, index) => (
          <div key={index} className="lg:block hidden">
            <div className="TransitionWrapper_wrapper__8W2Z3 animate-in TransitionWrapper_transition__8QkqS">
              <FeatureCard
                title={feature.title}
                description={feature.description}
                imageUrl={feature.imageUrl}
              />
            </div>
          </div>
        ))}
        {features.map((feature, index) => (
          <div key={index} className="lg:hidden block">
            <div className="flex justify-center">
              <div className="TransitionWrapper_wrapper__8W2Z3 animate-in TransitionWrapper_transition1__PdYDp">
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  imageUrl={feature.imageUrl}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
const CourseCategories = () => {
  return (
    <div className="mt-6 md:mt-10 mx-auto lg:max-w-6xl xl:px-0 px-4 w-full flex flex-col items-center justify-center ">
      <div>
        <h2 className="md:text-[32px] text-[20px] md:leading-[48px] leading-[30px] font-[700] my-[8px] text-center ">
          Exam Categories
        </h2>
      </div>
      <div>
        <div className="md:text-[18px] text-[14px] text-[#3D3D3D] md:leading-[24px] text-center leading-[20px] font-[500] ">
          PW is preparing students for 35+ exam categories. Scroll down to find
          the one you are preparing for
        </div>
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 items-start justify-center grid-cols-1 gap-4 md:my-[32px] my-[20px]">
        <CategoryCard
          title="NEET"
          tags={["Class 11", "Class 12", "Dropper"]}
          links={[
            "https://www.pw.live/neet/class-11",
            "https://www.pw.live/neet/class-12",
            "https://www.pw.live/neet/dropper",
          ]}
          imageUrl="https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/9816db69-099c-4020-935c-b98cc3ab4464.webp"
          exploreLink="https://www.pw.live/neet"
        />
        <CategoryCard
          title="NEET"
          tags={["Class 11", "Class 12", "Dropper"]}
          links={[
            "https://www.pw.live/neet/class-11",
            "https://www.pw.live/neet/class-12",
            "https://www.pw.live/neet/dropper",
          ]}
          imageUrl="https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/9816db69-099c-4020-935c-b98cc3ab4464.webp"
          exploreLink="https://www.pw.live/neet"
        />
        <CategoryCard
          title="NEET"
          tags={["Class 11", "Class 12", "Dropper"]}
          links={[
            "https://www.pw.live/neet/class-11",
            "https://www.pw.live/neet/class-12",
            "https://www.pw.live/neet/dropper",
          ]}
          imageUrl="https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/9816db69-099c-4020-935c-b98cc3ab4464.webp"
          exploreLink="https://www.pw.live/neet"
        />
        <CategoryCard
          title="NEET"
          tags={["Class 11", "Class 12", "Dropper"]}
          links={[
            "https://www.pw.live/neet/class-11",
            "https://www.pw.live/neet/class-12",
            "https://www.pw.live/neet/dropper",
          ]}
          imageUrl="https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/9816db69-099c-4020-935c-b98cc3ab4464.webp"
          exploreLink="https://www.pw.live/neet"
        />
        <CategoryCard
          title="NEET"
          tags={["Class 11", "Class 12", "Dropper"]}
          links={[
            "https://www.pw.live/neet/class-11",
            "https://www.pw.live/neet/class-12",
            "https://www.pw.live/neet/dropper",
          ]}
          imageUrl="https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/9816db69-099c-4020-935c-b98cc3ab4464.webp"
          exploreLink="https://www.pw.live/neet"
        />
        <CategoryCard
          title="NEET"
          tags={["Class 11", "Class 12", "Dropper"]}
          links={[
            "https://www.pw.live/neet/class-11",
            "https://www.pw.live/neet/class-12",
            "https://www.pw.live/neet/dropper",
          ]}
          imageUrl="https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/9816db69-099c-4020-935c-b98cc3ab4464.webp"
          exploreLink="https://www.pw.live/neet"
        />
      </div>
    </div>
  );
};

const StatsSection = () => {
  const statsData = [
    { title: "Users", value: "1,200", bgColor: "#D8E2DC" },
    { title: "Revenue", value: "$34K", bgColor: "#FFE5EC" },
    { title: "Orders", value: "320", bgColor: "#E2ECE9" },
    { title: "Feedback", value: "85%", bgColor: "#FDE2E4" },
  ];

  return (
    <div className="mt-6 md:mt-10 mx-auto lg:max-w-6xl xl:px-0 px-4 w-full flex flex-col items-center justify-center">
      <div>
        <h2 className="md:text-[32px] text-[20px] md:leading-[48px] leading-[30px] font-[700] my-[8px] text-center">
          A Platform Trusted by Students
        </h2>
      </div>
      <div>
        <div className="md:text-[18px] text-[14px] text-[#3D3D3D] md:leading-[24px] leading-[20px] text-center font-[500]">
          Physics Wallah aims to transform not just through words, but provide
          results with numbers!
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-8">
        <div className="grid grid-cols-2 gap-6 md:gap-8">
          {statsData.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              bgColor={stat.bgColor}
            />
          ))}
        </div>
      </div>
      <div className="mt-7">
        <BasicButton
          text="Get Started"
          className="w-[240px] px-[28px] py-[14px]"
        />
      </div>
    </div>
  );
};

const ResultsSection = () => {
  const resultsSlides = [
    {
      title: "Top Performer 2025",
      description:
        "Congratulations to all the outstanding achievers this year!",
      image: "/results1.svg",
    },
    {
      title: "Excellence in Academics",
      description:
        "Recognizing the best academic performers across all departments.",
      image: "/results2.svg",
    },
    {
      title: "Sports Achievements",
      description:
        "Celebrating our champions who made us proud in sports events.",
      image: "/results3.svg",
    },
  ];

  return (
    <div className="py-7">
      <div className="TransitionWrapper_wrapper__8W2Z3 animate-in TransitionWrapper_transition__8QkqS">
        <div>
          <h2 className="text-xl md:text-4xl font-bold text-center text-headings ">
            Academic Excellence : Results
          </h2>
          <p className="text-center text-sm md:text-lg pb-4 font-medium text-light max-w-3xl mx-auto mt-3">
            Giving wings to a millions dreams, a million more to go
          </p>
          <div className="w-full overflow-x-auto scrollbar-hide pb-1 mb-4">
            <div className="flex flex-nowrap justify-start md:justify-start lg:justify-center gap-3">
              <div class="inline-flex whitespace-nowrap space-x-2 items-center rounded-full cursor-pointer border px-3 py-2 text-sm font-medium transitionAll200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-stroke-light bg-white hover:bg-zinc-50 hover:border-stroke-medium">
                <span class="text-light ">NEET (UG) 2024</span>
              </div>
              <div class="inline-flex whitespace-nowrap space-x-2 items-center rounded-full cursor-pointer border px-3 py-2 text-sm font-medium transitionAll200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-stroke-light bg-white hover:bg-zinc-50 hover:border-stroke-medium">
                <span class="text-light ">NEET (UG) 2024</span>
              </div>
              <div class="inline-flex whitespace-nowrap space-x-2 items-center rounded-full cursor-pointer border px-3 py-2 text-sm font-medium transitionAll200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-stroke-light bg-white hover:bg-zinc-50 hover:border-stroke-medium">
                <span class="text-light ">NEET (UG) 2024</span>
              </div>
              <div class="inline-flex whitespace-nowrap space-x-2 items-center rounded-full cursor-pointer border px-3 py-2 text-sm font-medium transitionAll200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-stroke-light bg-white hover:bg-zinc-50 hover:border-stroke-medium">
                <span class="text-light ">NEET (UG) 2024</span>
              </div>
              <div class="inline-flex whitespace-nowrap space-x-2 items-center rounded-full cursor-pointer border px-3 py-2 text-sm font-medium transitionAll200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-stroke-light bg-white hover:bg-zinc-50 hover:border-stroke-medium">
                <span class="text-light ">NEET (UG) 2024</span>
              </div>
              <div class="inline-flex whitespace-nowrap space-x-2 items-center rounded-full cursor-pointer border px-3 py-2 text-sm font-medium transitionAll200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-stroke-light bg-white hover:bg-zinc-50 hover:border-stroke-medium">
                <span class="text-light ">NEET (UG) 2024</span>
              </div>
            </div>
          </div>
          <div className="w-full px-8 sm:px-6 lg:px-10 overflow-hidden">
            <div className="rounded-md overflow-hidden w-full">
              <div className="w-full group relative">
                <Carousel slides={resultsSlides} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReviewsSection = () => {
  const studentReviews = [
    {
      name: "Priya Sharma",
      review:
        "Physics Wallah helped me improve my NEET scores tremendously. Their test series and teachers' mentorship are unparalleled!",
    },
    {
      name: "Rohit Verma",
      review:
        "I loved the structured approach of PW courses. Concepts became super clear and revision was easier than ever before!",
    },
    {
      name: "Anjali Gupta",
      review:
        "Thanks to PW, I cracked NEET with a great rank! The dedication of the teachers kept me motivated throughout.",
    },
    {
      name: "Aman Yadav",
      review:
        "Physics Wallah's videos and notes were my best companions during preparation. Highly recommended!",
    },
    {
      name: "Sanya Mehra",
      review:
        "PW's affordable courses made quality education accessible to everyone. I'm so grateful to the entire team!",
    },
  ];

  return (
    <div className="bg-[#F8F8F8] py-10 gap-y-5 flex flex-col relative">
      <div>
        <div>
          <div className="xl:mb-8 md:mb-6 mb-5 flex flex-col">
            <h2 className="font-[700] mb-2 text-[#1B2124] text-xl xl:text-[32px] xl:leading-[48px] text-center">
              Students ❤️ REA
            </h2>
            <div className="font-[500] text-[#3D3D3D] text-sm xl:text-lg text-center">
              Hear from our students
            </div>
          </div>
        </div>

        {/* Featured Review */}
        <div>
          <div
            className="max-w-6xl m-auto rounded bg-white sm:p-6 mx-4 sm:mx-6 xl:mx-auto p-4 md:gap-8 gap-5 flex flex-col sm:flex-row"
            style={{ boxShadow: "rgba(0, 0, 0, 0.08) 0px 1px 8px 0px" }}
          >
            <div className="relative">
              <img
                alt="webBanner"
                loading="lazy"
                width="0"
                height="0"
                decoding="async"
                data-nimg="1"
                className="w-full h-[166px] sm:h-[270px] cursor-pointer sm:w-[780px] rounded bg-no-repeat bg-center bg-cover"
                src="https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/6ce6e71a-1cba-4fff-a325-55b3376e96e2.png"
                style={{ color: "transparent" }}
              />
              <img
                alt="play-circle"
                loading="lazy"
                width="0"
                height="0"
                decoding="async"
                data-nimg="1"
                className="h-14 w-14 bg-center cursor-pointer bg-no-repeat bg-contain absolute bottom-2 sm:bottom-24 sm:left-8 lg:bottom-28 lg:left-24"
                src="/_next/static/media/play-circle.58a5bf33.webp"
                style={{ color: "transparent" }}
              />
            </div>

            <div className="relative">
              <img
                alt="commaIcon"
                loading="lazy"
                width="0"
                height="0"
                decoding="async"
                data-nimg="1"
                className="w-10 h-7 bg-center bg-no-repeat bg-contain mb-3.5"
                src="/_next/static/media/comma.fcbeaa74.webp"
                style={{ color: "transparent" }}
              />
              <div className="sm:text-base text-sm text-[#3D3D3D] font-medium sm:mb-6 mb-3">
                My name is Tathagat Awatar. I secured All India Rank 1 by
                scoring full score in NEET UG 2024. I started my preparation
                with Physics Wallah in 12th grade by joining the Lakshya NEET
                batch, then I took 2 drop by joining Yakeen NEET batch and I
                completed my full preparation from online PW batch. PW teachers
                and their guidance helps me to achieve AIR1 and motivated me
                during my&nbsp;drop&nbsp;year....
              </div>

              <div className="lg:absolute bottom-0">
                <div className="text-base text-[#1B2124] mb-1 font-bold">
                  Multiple Rankers
                </div>
                <div className="flex gap-2">
                  <div className="text-[#5A4BDA] text-xs font-semibold">
                    AIR 1, AIR 86 and other
                  </div>
                  <hr className="border h-4" />
                  <div className="text-[#5A4BDA] text-xs font-semibold">
                    NEET
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slidable Reviews */}
        <div className="max-w-6xl mx-auto mt-8 px-4 sm:px-6">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {studentReviews.map((review, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className="bg-white rounded p-6 h-[250px] flex flex-col justify-between shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
                  style={{ boxShadow: "rgba(0, 0, 0, 0.08) 0px 1px 8px 0px" }}
                >
                  <div className="text-[#3D3D3D] font-medium text-sm overflow-hidden line-clamp-5">
                    {review.review}
                  </div>
                  <div className="text-[#1B2124] font-bold text-base mt-4">
                    {review.name}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

const RegistrationSection = () => {
  return (
    <div className="my-6 2xl:max-w-6xl m-auto mb-[80px] flex flex-col items-center justify-center">
      <div className="md:text-[32px] text-[20px] md:leading-[48px] leading-[30px] font-[700] my-[8px] text-center">
        Join The REA Family, Today!
      </div>
      <div className="mt-7">
        <BasicButton
          text="Get Started"
          className="w-[240px] px-[28px] py-[14px]"
        />
      </div>
    </div>
  );
};

const Home = () => {
  const bannerSlides = [
    {
      title: "Empowering Innovation",
      description:
        "We provide smart solutions to accelerate your digital success.",
      image: "/banner1.svg",
      buttonText: "Discover More",
    },
    {
      title: "Build. Launch. Grow.",
      description: "Everything you need to build powerful web experiences.",
      image: "/banner2.svg",
      buttonText: "Get Started",
    },
    {
      title: "Your Vision, Our Code",
      description: "We transform your ideas into scalable digital products.",
      image: "/banner3.svg",
      buttonText: "Talk to Us",
    },
  ];
  return (
    <>
      <Carousel slides={bannerSlides} />
      <Banner />
      <SalientFeatureBox />
      <CourseCategories />
      <StatsSection />
      <ResultsSection />
      <ReviewsSection />
      <RegistrationSection />
    </>
  );
};

export default Home;
