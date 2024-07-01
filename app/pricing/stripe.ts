import getStripe from "@utils/get-stripejs";

export const MonthlyBasicSubscriptionCard = async (email: string | undefined) => {
    try {
      // if (!itinerary) {
      //   throw new Error("Something went wrong");
      // }

      const response = await fetch("api/suscribe/", {
        method: "post",
        body: JSON.stringify({
           email: email! ,
           plan:"basicPlan",
           amount:10
        }),
      });
      const json = await response.json();
      if (!json.ok) {
        throw new Error("Something went wrong");
      }
      const stripe = await getStripe();
      if (!stripe) {
        throw new Error("Something went wrong");
      }
      await stripe.redirectToCheckout({ sessionId: json.result.id });
    } catch (error) {
      // toast("Failed to start transaction", "Please try again.");
    }
  };


  export const MonthlyProSubscriptionCard = async (email: string | undefined) => {
    try {
      // if (!itinerary) {
      //   throw new Error("Something went wrong");
      // }

      const response = await fetch("api/suscribe/", {
        method: "post",
        body: JSON.stringify({
           email: email! ,
           plan:"proPlan",
           duration:"",
           amount: 20
        }),
      });
      const json = await response.json();
      if (!json.ok) {
        throw new Error("Something went wrong");
      }
      const stripe = await getStripe();
      if (!stripe) {
        throw new Error("Something went wrong");
      }
      await stripe.redirectToCheckout({ sessionId: json.result.id });
    } catch (error) {
      // toast("Failed to start transaction", "Please try again.");
    }
  };