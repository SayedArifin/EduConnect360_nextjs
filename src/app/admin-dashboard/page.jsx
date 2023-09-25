import React from "react";

const page = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto  md:pt-10 lg:pt-0">
        <div className="grid max-w-screen-xl  px-4 pt-20 sm:py-10  mx-auto lg:gap-8 xl:gap-0 lg:py-5 lg:grid-cols-12 lg:pt-28 md:pt-10">
          <div className=" max-w-screen-xl px-4 py-4 mx-auto lg:pb-16 lg:py-0">
            <div className="grid grid-cols-2 gap-8 sm:gap-12  sm:grid-cols-1 lg:grid-cols-3">
              <div className="flex  bg-red-500">
                <div className="">
                  <img
                    src="https://www.palaiszelda.com/images/z15/link_attaque.jpg"
                    class="w-16 h-16 rounded-full"
                    alt="User Avatar"
                  />
                  <div>
                    <p>500</p>
                    <p>Users Online</p>
                  </div>
                </div>
                <div>
                  <img
                    src="https://www.palaiszelda.com/images/z15/link_attaque.jpg"
                    class="w-16 h-16 rounded-full"
                    alt="User Avatar"
                  />
                  <div>
                    <p>500</p>
                    <p>Users Online</p>
                  </div>
                </div>
                <div>
                  <img
                    src="https://www.palaiszelda.com/images/z15/link_attaque.jpg"
                    class="w-16 h-16 rounded-full"
                    alt="User Avatar"
                  />
                  <div>
                    <p>500</p>
                    <p>Users Online</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
