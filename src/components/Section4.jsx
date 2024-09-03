// eslint-disable-next-line no-unused-vars
import React from "react";

const Section4 = () => {
  return (
    <section className="w-full h-auto flex bg-[#e5f0f1]">
      <div className="container h-auto w-full flex flex-col">
        {/* heading */}
        <div className="w-full h-auto">
          <p>ESTIMATE EARNING POTENTIAL</p>
        </div>
        {/* col-1 */}
        <div className="flex flex-row">
          <div className="flex flex-col">
            <p>How many followers do you have?</p>
            <div> slider</div>
            <button>10 k</button>
          </div>
          <div className="flex flex-col">
            <p>Monthly Earning</p>
            <p>₹28500</p>
          </div>
        </div>
        {/* col-2 */}
        <div className="flex flex-row">
          <div className="flex flex-col">
            <p>How many followers do you have?</p>
            <div> slider</div>
            <button>10 k</button>
          </div>
          <div className="flex flex-col">
            <p>Monthly Earning</p>
            <p>₹28500</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
