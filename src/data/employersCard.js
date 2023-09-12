import mark from "/teenyicons_tick-circle-solid.svg";
import cancel from "/iconoir_xbox-x.svg";

const cards = [
  {
    id: 1,
    plan: "Starter Essential",
    cost: "Free",
    duration: "",
    mark: mark,
    cancel: cancel,
    markFeatures: [
      `3 job postings per month`,
      `Access to candidate profiles`,
      `Jobs stay active for a month`,
    ],
    cancelFeatures: [
      `Enhanced visibility for more outreach`,
      `Resume search filters`,
      `Job mailed to 100 matching candidates`,
    ],
    btn: "Get Started For Free",
  },
  {
    id: 2,
    plan: "Growth Partner",
    cost: "N15,000",
    duration: "/yearly",
    mark: mark,
    cancel: cancel,
    markFeatures: [
      `10 job postings per month`,
      `Access to candidate profiles`,
      `Jobs stay active for up to 6 months`,
      `Enhanced visibility for more outreach`,
    ],
    cancelFeatures: [
      `Resume search filters`,
      `Job mailed to 100 matching candidates`,
    ],
    btn: "Choose Plan",
  },
  {
    id: 3,
    plan: "Premium Connection",
    cost: "N35,000",
    duration: "/yearly",
    mark: mark,
    cancel: cancel,
    markFeatures: [
      `Unlimited job postings per month`,
      `Access to candidate profiles`,
      `Jobs stay active`,
      `Priority placement in search results `,
      `Resume search filters`,
      `Job mailed to 100 matching candidates`,
    ],
    cancelFeatures: [],
    btn: "Choose Plan",
  },
];

export default cards;
