import board from "../assets/whiteBoard.png";
import interview from "../assets/interview.png";
import balance from "../assets/balance.png";
import idea from "../assets/Ideaa.png";
import ALab from "../assets/A Lab.png";
import UMark from "../assets/U Mark.png";
import nira from "../assets/Nira.png";
import tower from "../assets/Tower.png";
import velocity from "../assets/Volicity 9.png";
import chess from "../assets/chess.png";
import goal from "../assets/goal.png";
import convers from "../assets/convers.png";
import market from "../assets/digitalMarket.png";
import enterpreneur from "../assets/Enterpreneur.png";
import graphic from "../assets/graphic.png";
import product from "../assets/productM.png";

export const searchOptions = [
  { title: "Work from home jobs", to: "" },
  { title: "Social media jobs", to: "" },
  { title: "Writer jobs", to: "" },
  { title: "Entry-level jobs", to: "" },
  { title: "Graphic Design jobs", to: "" },
  { title: "Virtual Assistant jobs", to: "" },
  { title: "Content Creation jobs", to: "" },
];

export const jobsOptions = [
  {
    title: "Social Media Content Creator",
    company: "POLISHED BEAUTY",
    para1: "Remote",
    para2: "Full-Time",
    date: "Aug 5, 2023",
    location: "Lagos",
    img: /* require(""), */ idea,
  },
  {
    title: "Customer Care Representative",
    company: "AMARA",
    para1: "On-Site",
    para2: "Full-Time",
    date: "Aug 5, 2023",
    location: "Abuja",
    img: /* require(""), */ ALab,
  },
  {
    title: "Administrative Assistant",
    company: "UMBRELLA CORP",
    para1: "Hybrid",
    para2: "Part-Time",
    date: "Aug 4, 2023",
    location: "Ibadan",
    img: /* require(""), */ UMark,
  },
  {
    title: "Human Resources",
    company: "SOLAYTIC",
    para1: "On-Site",
    para2: "Full-Time",
    date: "Aug 1, 2023",
    location: "Lagos",
    img: /* require(""), */ nira,
  },
  {
    title: "Sales Representative",
    company: "GLOBEX TECHNOLOGIES",
    para1: "On-Site",
    para2: "Full-Time",
    date: "Jul 29, 2023",
    location: "Jos",
    img: /* require(""), */ tower,
  },
  {
    title: "Graphic Designer",
    company: "GAIA JEWELRY",
    para1: "Remote",
    para2: "Contract",
    date: "Jul 29, 2023",
    location: "Jos",
    img: /* require(""), */ velocity,
  },
];

export const blogOption = [
  {
    title: "Self Assessment & Goal Setting",
    description:
      "Begin by critically evaluating your current career status, strengths, weaknesses and aspirations. Establish clear....",
    img: goal,
    mobDescription:
      "Begin by critically evaluating your current career status...",
  },
  {
    title: "Mentorship & Collaboration",
    description:
      "Seek guidance from experienced mentors or colleagues. Collaborative effort can yield fresh perspectives and....",
    img: convers,
    mobDescription: "Seek guidance from experienced mentors or colleagues....",
  },
  {
    title: "Strategic Planning",
    description:
      "Outline long-term and short-term goals along with actionable steps to achieve them. Adapt your plan as circu....",
    img: chess,
  },
];

export const communityOptions = [
  {
    title: "Career Advancement Strategies",
    description:
      "Connect with fellow professionals to discuss proven tactics for advancing your career. Share insights, seek advice and learn from others to accelerate your professional growth.",
    img: board,
  },
  {
    title: "Interview Success Stories",
    description:
      "Dive into a dynamic conversation about interview triumphs. Share your own success stories, learn from others and discover valuable tips to excel in your next interview.",
    img: interview,
  },
  {
    title: "Work-Life Balance",
    description:
      "Join the dialogue on achieving a harmonious work-life balance. Exchange strategies and solutions to ensure your career thrives without compromising your well-being and personal life.",
    img: balance,
  },
];

export const courseOptions = [
  {
    img: market,
    title: "Digital Marketing Essentials",
    price: "N8,000",
    description:
      "Dive into the world of digital marketing with this comprehensive course.",
  },
  {
    img: product,
    title: "Product Management Fundamentals",
    price: "N10,000",
    description:
      "Acquire the foundational skills to manage projects successfully.",
  },
  {
    img: enterpreneur,
    title: "Entrepreneurship & Innovation",
    price: "N6,000",
    description:
      "Learn how to transform innovative ideas into successful business ventures.",
  },
  {
    img: graphic,
    title: "Graphic Design Master",
    price: "N7,000",
    description:
      "Unleash your creativity with graphic design essentials for digital and print media.",
  },
];

export const helpOptions = [
  { name: "Technical Help" },
  { name: "Registration" },
  { name: "Applying for Jobs" },
  { name: "Speak with a Customer Representative" },
  { name: "Account Issues" },
  { name: "Payment Issues" },
  { name: "Delete Account" },
  { name: "Notifications" },
];

export const accordionOption = [
  {
    title: "Is there a cost for your service?",
    description:
      "Yes. We offer a range of flexible pricing options tailored to the needs of your business. Our team will work closely with you to understand your requirements and provide a cost structure that aligns with your budget.",
  },
  {
    title: "I forgot my password. How can I reset it?",
    description:
      "Yes. We offer a range of flexible pricing options tailored to the needs of your business. Our team will work closely with you to understand your requirements and provide a cost structure that aligns with your budget.",
  },
  {
    title:
      "Can I upload my resume and apply for jobs directly through your platform?",
    description:
      "Yes. We offer a range of flexible pricing options tailored to the needs of your business. Our team will work closely with you to understand your requirements and provide a cost structure that aligns with your budget.",
  },
  {
    title: "How can I deactivate my account?",
    description:
      "Yes. We offer a range of flexible pricing options tailored to the needs of your business. Our team will work closely with you to understand your requirements and provide a cost structure that aligns with your budget.",
  },
  {
    title: "Can I save job listings to revisit later?",
    description:
      "Yes. We offer a range of flexible pricing options tailored to the needs of your business. Our team will work closely with you to understand your requirements and provide a cost structure that aligns with your budget.",
  },
  {
    title:
      "How can I contact the employers who have posted job listings on your site?",
    description:
      "Yes. We offer a range of flexible pricing options tailored to the needs of your business. Our team will work closely with you to understand your requirements and provide a cost structure that aligns with your budget.",
  },
];
