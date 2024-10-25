import { CircleSvg } from "@/assets/svgs";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="lg:pl-18 mobile:px-1 mobile:pl-0 flex flex-col lg:flex-row items-center justify-between xl:gap-60 max-xl:gap-80 lg:gap-48 mobile:gap-20 lg:mt-40 mobile:mt-20 z-30">
      <div className="text-black space-y-6 flex-1">
        <h1 className="mobile:text-4xl lg:text-6xl font-medium leading-tight lg:w-86 mobile:w-80">
          {`IF IT'S NOT PLAY, IT'S NOT WORKING`}
        </h1>
        <p className="lg:text-lg lg:w-[360px] xl:w-[500px] mobile:text-base">
          {`For all the elegance, glamor, and vitality of a Chic event, we are
            powered by the empathy and humility that brought us here. With
            substantive knowledge and an easygoing approach, we are ALL IN the
            moment we start your proposal.`}
        </p>
        <p className="lg:text-lg lg:w-[360px] xl:w-[500px] mobile:text-base">
          {`The process begins with a one-to-one conversation that lets us in on
            your personal aesthetic or desired theme. Together we might explore
            a favorite muse, movie, or hotel lobby for inspiration, or look
            through fabric and pattern swatches to find common threads.`}
        </p>
        <p className="lg:text-lg lg:w-[360px] xl:w-[500px] mobile:text-base">
          {`You'll find we're an agile team that never cuts a conversation
            short, and you can always keep us on speed dial. We're here up until
            the very last minute — and far beyond it.`}
        </p>
      </div>

      <div className="relative mobile:w-56 lg:w-[380px] xl:w-[450px]">
        <Image
          src={CircleSvg}
          alt="Circle Image"
          className="circle-animation mobile:w-56 lg:w-[380px] xl:w-[450px]"
        />
        <Image
          src={"/about.webp"}
          alt="Event Image"
          width={550}
          height={550}
          className="rounded-lg z-10 mobile:w-56 lg:w-[550px]"
        />
      </div>
    </div>
  );
};

export default AboutSection;
