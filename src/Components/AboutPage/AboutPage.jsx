import React from "react";

const AboutPage = () => {
  return (
    <section className="bg-white min-h-[600px]">
      <div className="container py-12">
        <div className="w-fit max-w-[calc(100%_-_32px)] min-h-[582px] flex flex-col-reverse mx-auto lg:flex-row">
          <div className="relative z-0 w-fit">
            <div className="absolute z-[-1] bottom-[-15px] left-[-15px] w-[calc(100%_+_30px)] h-[calc(50%_+_15px)] bg-secondaryColor"></div>
            <img
              className="object-cover"
              src="https://images.unsplash.com/photo-1472417583565-62e7bdeda490?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="About Hnadsome Romeo"
            />
          </div>
          <div className="relative z-0 lg:ml-[15px]">
            <div className="absolute z-[-1] w-[calc(100%_+_30px)] h-[calc(50%_+_15px)] top-[-15px] left-[-15px] bg-secondaryColor"></div>
            <div className="max-w-[432px] px-5 py-10 bg-white">
              <h2 className="text-4xl text-mainColor mb-4">Handsome Romeo</h2>
              <p className="text-lg text-justify">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum ex inventore praesentium laborum repudiandae corrupti
                accusantium quas voluptatem possimus ab minus quo, quidem vel.
                Labore, ex! A sit nihil iure commodi. Facere autem perferendis
                non sed aspernatur nemo ipsa molestiae itaque repellat, quae
                voluptatibus repellendus dicta rem. Architecto itaque
                reprehenderit consequatur sequi? Quas minima impedit,
                exercitationem consectetur debitis maxime numquam. Adipisci,
                laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
