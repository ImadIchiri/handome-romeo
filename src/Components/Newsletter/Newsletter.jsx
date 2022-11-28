import React from "react";

const Newsletter = () => {
  return (
    <section>
      <div className="container py-14 px-4 flex flex-col bg-secondaryColorLight text-mainColor">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="text-4xl font-semibold mb-3">
            Subscribe To Our Newsletter
          </h2>
          <p className="text-xl text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit ipsum tenetur incidunt delectus est repellat harum
            eos, sint fugit quis illo, dignissimos provident sit unde inventore!
          </p>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="relative overflow-hidden mx-auto w-[100%] max-w-[600px]"
        >
          <label className="absolute left-[-999999px]" htmlFor="email">
            Enter Your Email:
          </label>
          <div className="flex flex-wrap items-center w-full h-max">
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="flex-1 text-xl py-2 px-3 outline-none"
            />
            <button className="text-xl text-white px-2 py-1 bg-mainColor min-h-[44px] opacity-90 hover:opacity-100">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
