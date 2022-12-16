import React from "react";

const AboutPage = () => {
  return (
    <section className="bg-white min-h-[600px]">
      <div className="container py-12">
        <div className="w-fit max-w-[calc(100%_-_32px)] min-h-[582px] flex flex-col-reverse mx-auto lg:flex-row">
          <div className="relative z-0 w-full">
            <div className="absolute z-[-1] bottom-[-15px] left-[-15px] w-[calc(100%_+_30px)] h-[calc(50%_+_15px)] bg-secondaryColor"></div>
            <img
              className="object-cover w-full"
              src="https://images.unsplash.com/photo-1472417583565-62e7bdeda490?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="About Hnadsome Romeo"
            />
          </div>
          <div className="relative z-0 w-full lg:ml-[15px]">
            <div className="absolute z-[-1] w-[calc(100%_+_30px)] h-[calc(50%_+_15px)] top-[-15px] left-[-15px] bg-secondaryColor"></div>
            <div className="max-w-[432px] px-5 py-10 bg-white">
              <h2 className="text-4xl text-mainColor mb-4">Handsome Romeo</h2>
              <p className="text-lg text-justify">
                Hello! I am
                <span className="font-bold mx-1 font-italiana">
                  Ichiri Imad
                </span>
                a FrontEnd developer, I have created this website
                (HandsomeRomeo) using <em>ReactJs</em> and <em>TailwindCSS</em>.
                Handsome Romeo is an E-commerce website that contains men's
                luxurious clothes, you can find proucts by scrolling donw on the
                products page or you can easily find what you want by using
                filtering products by category, price or colors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
