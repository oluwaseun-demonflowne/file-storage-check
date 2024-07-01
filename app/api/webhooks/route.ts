import prisma from "@lib/prisma";
// import Cors from "micro-cors";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY || "", {
    apiVersion: "2023-10-16",
});
  
const newExpirationDate = new Date();
newExpirationDate.setDate(newExpirationDate.getDate() + 30);

// const cors = Cors({
//   allowMethods: ["POST", "HEAD"],
// });
const secret: string = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(req: Request) {
  try {
    const body = await req.text();
    console.log("Webhook listened")
    const signature = headers().get("stripe-signature")!;
    const event = stripe.webhooks.constructEvent(body, signature, secret);
    


    if (event.type === "checkout.session.completed") {
            const paymentIntentSucceeded = event.data.object;
            console.log(paymentIntentSucceeded?.metadata?.email)
            console.log(paymentIntentSucceeded?.metadata?.name)

            const company = await prisma.profile.findUnique({
              where: {
                email: paymentIntentSucceeded?.metadata?.email,
              },
            });

            if (company) {
              await prisma.company.update({
                where: {
                  id: company.companyId,
                },
                data: {
                  plan: paymentIntentSucceeded?.metadata?.name,
                  maxSize : paymentIntentSucceeded?.metadata?.name === "basicPlan" ? 150 :
                            paymentIntentSucceeded?.metadata?.name === "proPlan" ? 200 : 100,
                  freePlanExpirationDate: newExpirationDate
                },
              });
            }          
    }

    if(event.type === "invoice.updated") {
      // const invoicePdfUrl = event?.data?.object?.invoice_pdf;
    }
    
    if(event.type === 'customer.subscription.created') {
        const customerSubscriptionCreated = event.data.object;
        console.log(customerSubscriptionCreated)
    }

    return NextResponse.json({ result: event, ok: true });
  } catch (error) {
    
    console.error(error);
    return NextResponse.json(
      {
        message: "something went wrong",
        ok: false,
      },
      { status: 500 }
    );
  }
}


