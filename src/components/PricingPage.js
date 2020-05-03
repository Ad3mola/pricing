import React, { useState } from "react";
import PriceCard from "./PriceCard";
import { toast } from "react-toastify";

export default function PricingPage() {
  const [loading, setLoading] = useState(false);

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
    <div className="mb-5 container">
      <div className="text-center mt-3">
        <h3>Pick a pricing plan</h3>
        <p>Subscribe to one of our new pricing plans</p>
      </div>
      <PriceCard plans={plans} choosePlan={choosePlan} loading={loading} />
    </div>
  );
}
