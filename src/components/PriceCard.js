import React, { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const Pricing = styled.div`
  .card {
    height: 100%;
    border-radius: 0;
    box-shadow: 1px 2px 2px #babcbc;
  }
  button {
    background-color: purple;
  }
  svg {
    width: 10%;
  }
`;

const PriceCard = function PriceCard({ render }) {
  const [loading, setLoading] = useState(false);

  const choosePlan = (arg) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success(`${arg} plan subscription successful`, {
        toastId: "success",
      });
    }, 3000);
  };

  return (
    <Pricing className="col-md-4 mt-3 mt-md-0">
      {" "}
      <div className="card mx-auto mt-3 text-center p-3">
        <h3 className="pt-2">{render.plan}</h3>
        <h4 className="pt-2">
          {render.price} <small>/ month</small>
        </h4>
        <p className="pt-2">BILLED MONTHLY</p>
        <div>
          <button
            className="border-0 px-4 py-2 text-light w-75"
            onClick={() => choosePlan(render.plan)}
          >
            {loading ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.0"
                viewBox="0 0 128 128"
              >
                <path
                  fill="#075e2f"
                  d="M64.4 16a49 49 0 00-50 48 51 51 0 0050 52.2 53 53 0 0054-52c-.7-48-45-55.7-45-55.7s45.3 3.8 49 55.6c.8 32-24.8 59.5-58 60.2-33 .8-61.4-25.7-62-60C1.3 29.8 28.8.6 64.3 0c0 0 8.5 0 8.7 8.4 0 8-8.6 7.6-8.6 7.6z"
                >
                  <animateTransform
                    attributeName="transform"
                    dur="1600ms"
                    from="0 64 64"
                    repeatCount="indefinite"
                    to="360 64 64"
                    type="rotate"
                  />
                </path>
              </svg>
            ) : (
              "Choose plan"
            )}
          </button>
        </div>
        <ul className="text-left pt-3">
          {render.features.map((feature) => (
            <li className="pt-2" key={feature}>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </Pricing>
  );
};

export default PriceCard;
