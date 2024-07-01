import Image from "next/image";
import HomeImage from "@public/homepage/homepage.png";
import {
  HowItWorksSection,
  LightWeightSection,
  LightningSection,
  ReadySection,
} from "@components/homepage";
import Link from "next/link";
export default async function Home() {
  return (
    <main className="">
      <div>
        <div className="flex px-4 md:px-20 lg:px-56 flex-col gap-4">
          <h1 className="text-3xl text-center font-bold">
            File storage and sharing for{" "}
            <span className="text-[#651FFF]">remote | office teams</span>
          </h1>
          <p className="text-[15px] text-center text-slate-500">
            Deupload is a online file manager that allows you storage, share,
            collect files privately and team collaboration with free restricted
            plan and unrestricted storage with subscription.
          </p>
          <div className="flex justify-center gap-10">
            <button className="btn-rounded text-[15px] text-white font-semibold bg-[#651FFF] py-2 px-6">
              <Link href="/login">Get Started</Link>
            </button>
            <button className="btn-rounded font-semibold text-[15px] py-2 px-6 border border-black">
            <Link href="/pricing">Pricing</Link>
            </button>
          </div>
        </div>
        <div className="px-4 md:px-16 lg:px-24">
          <Image
            src={HomeImage}
            unoptimized
            className="w-full"
            alt="homepage"
            width={100}
            height={100}
          />
        </div>
      </div>
      <LightningSection />
      <LightWeightSection />
      <HowItWorksSection />
      <ReadySection />
    </main>
  );
}
