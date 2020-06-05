import React from "react";
import PriceCard from "./PriceCard";

export default function PricingPage() {
  const plans = [
    {
      id: "bronze",
      plan: "Bronze",
      price: "$10",
      features: [
        "Unlimited number of surveys",
        "Unlimited questions per survey",
        "1,000 responses per month",
        "Custom logos",
      ],
    },
    {
      id: "silver",
      plan: "Silver",
      price: "$20",
      features: [
        "Unlimited number of surveys",
        "Unlimited questions per survey",
        "5,000 responses per month*",
        "Custom logos",
      ],
    },
    {
      id: "gold",
      plan: "Gold",
      price: "$40",
      features: [
        "Unlimited number of surveys",
        "Unlimited questions per survey",
        "5,000 responses per month",
        "Custom logos",
        "Data exports(CSV, PDF, PPT, XLS)*",
      ],
    },
  ];

  return (
    <div className="mb-5 container">
      <div className="text-center mt-3">
        <h3>Pick a pricing plan</h3>
        <p>Subscribe to one of our new pricing plans</p>
      </div>
      <div className="row">
        {plans.length &&
          plans.map((plan) => <PriceCard render={plan} key={plan} />)}
      </div>
    </div>
  );
}
