import FeaturedUniversity from "@/components/FeaturedUniversity";
import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaBloggerB } from "react-icons/fa";

const Page = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto  md:pt-10 lg:pt-0">
        <div className="grid max-w-screen-xl  px-4 pt-20 sm:py-10  mx-auto lg:gap-8 xl:gap-0 lg:py-5 lg:grid-cols-12 lg:pt-28 md:pt-10">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className=" max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl ">
              Welcome to <br />
              EduConnect
              <span className="text-bold text-primary-red">360</span>°
            </h1>
            <p className="max-w-2xl mb-6 font-light text-secondary-white lg:mb-8 md:text-lg lg:text-xl ">
              EduConnect360 is the ultimate destination for students seeking the
              perfect university match. Our platform is designed exclusively to
              streamline the university search process, making it easier than
              ever for students to find their ideal educational institution
            </p>
            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <Link
                href="https://github.com/themesberg/landwind"
                className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center bg-primary-white text-primary-red border border-primary-red rounded-lg sm:w-auto hover:bg-primary-red hover:text-primary-white focus:ring-4 focus:ring-primary-white "
              >
                <span className="mr-2">
                  <FaSearch />
                </span>
                Find Your University
              </Link>
              <Link
                href="https://www.figma.com/community/file/1125744163617429490"
                className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-primary-white bg-primary-red border border-primary-red rounded-lg sm:w-auto focus:outline-none hover:bg-primary-white hover:text-primary-red focus:z-10 focus:ring-4 focus:ring-gray-200 "
              >
                <span className="mr-2">
                  <FaBloggerB />
                </span>
                Discover Articles
              </Link>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              width={500}
              height={500}
              src="/images/header.png"
              alt="hero image"
            />
          </div>
        </div>
      </div>
      <section>
        <div className=" max-w-screen-xl px-4 py-4 mx-auto lg:pb-16 lg:py-0">
          <div className="grid grid-cols-2 gap-8 sm:gap-12  sm:grid-cols-3 lg:grid-cols-6">
            <FeaturedUniversity
              href={"#"}
              src={"/images/sample.png"}
              alt={"AIUB Logo"}
            />
            <FeaturedUniversity
              href={"#"}
              src={"/images/sample.png"}
              alt={"AIUB Logo"}
            />
            <FeaturedUniversity
              href={"#"}
              src={"/images/sample.png"}
              alt={"AIUB Logo"}
            />
            <FeaturedUniversity
              href={"#"}
              src={"/images/sample.png"}
              alt={"AIUB Logo"}
            />
            <FeaturedUniversity
              href={"#"}
              src={"/images/sample.png"}
              alt={"AIUB Logo"}
            />
            <FeaturedUniversity
              href={"#"}
              src={"/images/sample.png"}
              alt={"AIUB Logo"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
