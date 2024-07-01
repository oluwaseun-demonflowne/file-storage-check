import { Features, Plan, Pricing } from "@typesss";


export const plans: Plan = ["Free", "Basic", "Proffessional"];



export const pricing: Pricing = {
  Free: 0,
  Basic: 1.99,
  Proffessional: 2.99,
};
export const size: Pricing = {
  Free: 100,
  Basic: 150,
  Proffessional: 200,
};



export const features: Features = {
  Free: [
    "100 MB storage",
    "2 MB File upload size limit",
    "2 MB file view size limit",
    "10 downloads per month",
  ],
  Basic: [
    "150 MB storage",
    "File upload size limit(e.g 10MB)",
    "File view size limit(e.g 10MB)",
    "Unlimited downloads per month",
    "Priority support(e.g live chat and email support)",
  ],
  Proffessional: [
    "200 MB storage",
    "Feature test goes here",
    "Unlimited downloads per month",
    "Priority support(e.g live chat and email support)",
  ],
};
