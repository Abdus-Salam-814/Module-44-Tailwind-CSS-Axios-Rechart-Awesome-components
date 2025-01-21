import React from "react";
import PriceOption from "../price option/PriceOption";

const PriceOptions = () => {
  const pricingOptions = [
    {
      id: 1,
      name: "Basic Plan",
      price: 29.99,
      billingCycle: "monthly",
      features: [
        "Access to gym during standard hours",
        "Access to basic equipment",
        "Locker facility",
      ],
    },
    {
      id: 2,
      name: "Standard Plan",
      price: 49.99,
      billingCycle: "monthly",
      features: [
        "24/7 gym access",
        "Access to all equipment",
        "Free group classes",
        "Locker facility",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: 79.99,
      billingCycle: "monthly",
      features: [
        "24/7 gym access",
        "Access to all equipment",
        "Personal trainer (2 sessions/month)",
        "Free group classes",
        "Access to spa and sauna",
        "Complimentary drinks",
        "Priority support",
      ],
    },
    {
      id: 4,
      name: "Family Plan",
      price: 99.99,
      billingCycle: "monthly",
      features: [
        "24/7 gym access for up to 4 family members",
        "Access to all equipment",
        "Group classes for the whole family",
        "Locker facility",
        "Discount on additional personal trainer sessions",
      ],
    },
    {
      id: 5,
      name: "Student Plan",
      price: 24.99,
      billingCycle: "monthly",
      features: [
        "Access to gym during standard hours",
        "Access to all equipment",
        "Locker facility",
        "Discounted group classes",
      ],
    },
    {
      id: 6,
      name: "Annual Membership",
      price: 499.99,
      billingCycle: "yearly",
      features: [
        "24/7 gym access",
        "Access to all equipment",
        "Free group classes",
        "Locker facility",
        "One free personal trainer session every month",
        "Access to spa and sauna",
      ],
    },
    {
      id: 7,
      name: "Day Pass",
      price: 9.99,
      billingCycle: "one-time",
      features: [
        "Access to gym during standard hours",
        "Access to all equipment",
        "Locker facility",
      ],
    },
    {
      id: 8,
      name: "Corporate Plan",
      price: 299.99,
      billingCycle: "monthly",
      features: [
        "24/7 gym access for up to 10 employees",
        "Access to all equipment",
        "Dedicated group classes",
        "Locker facility",
        "Discounted rates for additional employees",
      ],
    },
    {
      id: 9,
      name: "VIP Plan",
      price: 149.99,
      billingCycle: "monthly",
      features: [
        "24/7 gym access",
        "Access to private equipment areas",
        "Personal trainer (unlimited sessions)",
        "Free group classes",
        "Priority access to spa and sauna",
        "Complimentary meals and drinks",
        "Dedicated locker room",
      ],
    },
    {
      id: 10,
      name: "Weekend Warrior",
      price: 19.99,
      billingCycle: "monthly",
      features: [
        "Access to gym during weekends",
        "Access to all equipment",
        "Locker facility",
      ],
    },
  ];

  return (
    <div>
      <h1>Best Prices in the Town</h1>
     <div className="grid grid-cols-1 md:grid-cols-3 m-12 gap-6 ">
     {pricingOptions.map((option) => (
        <PriceOption key={option.id} option={option}></PriceOption>
      ))}
     </div>
    </div>
  );
};

export default PriceOptions;
