import { PlusSvg } from "@/assets/svgs";
import {
  Root,
  Item,
  Header,
  Trigger,
  Content,
} from "@radix-ui/react-accordion";
import Image from "next/image";

const Accordion = () => {
  const accordionData = [
    {
      title: "The Look",
      content:
        "Zoom out and see the big picture of your event. Even if you can’t envision it yet, trust that we can—and we’ll execute it flawlessly.",
      lists: ["Event Design", "Design Consulting", "Floral Design"],
    },
    {
      title: "The Feel",
      content:
        "There’s no looking good without feeling good. These are the key components that make an event flow with ease and cohesion, so all you have to do is have a good time.",
      lists: [
        "Event Production",
        "Floor Plans",
        "Testing + Staging",
        "Custom Dance Floors",
        "Custom-Built Furnishings",
      ],
    },
    {
      title: "The Details",
      content:
        "The finer things live in the details. The Chic treatment means no need is too small, and nothing is overlooked.",
      lists: [
        "Custom Linen",
        "TableWare",
        "Invitations + Day-Of Stationery",
        "Favors + Accessories",
        "Bespoke Finishing Touches ",
      ],
    },
  ];
  return (
    <Root type="multiple" className="w-full">
      {accordionData.map((item, index) => {
        const { title, content, lists } = item;
        return (
          <Item value={`item-${index + 1}`} key={index}>
            <Header>
              <Trigger
                className={`${
                  index !== accordionData.length - 1 && "border-b"
                } border-black w-full flex justify-between items-center lg:text-5xl mobile:text-3xl mobile:py-3 lg:py-6`}
              >
                <span className="uppercase">{title}</span>
                <Image src={PlusSvg} alt="Plus svg" />
              </Trigger>
            </Header>
            <Content className="AccordionContent">
              <div className="flex mobile:flex-col gap-6 mt-10 lg:flex-row lg:gap-40 mobile:gap-10">
                <p className="mobile:text-sm lg:text-lg font-medium text-left max-w-96">
                  {content}
                </p>
                <ol className="list-disc ml-6">
                  {lists &&
                    lists.map((item, index) => (
                      <li key={index} className="text-base uppercase">
                        {item}
                      </li>
                    ))}
                </ol>
              </div>
              <div className="flex justify-center items-center mobile:flex-col gap-6 mt-10 lg:flex-row">
                <Image
                  src="/accordion-1.webp"
                  alt="Accordion Image"
                  width={200}
                  height={200}
                  className="w-80 rounded-md lg:w-[500px] md:w-[320px]"
                />
                <Image
                  src="/accordion-2.webp"
                  alt="Accordion Image"
                  width={200}
                  height={200}
                  className="w-80 rounded-md lg:w-[500px] md:w-[320px]"
                />
                <Image
                  src="/accordion-3.webp"
                  alt="Accordion Image"
                  width={200}
                  height={200}
                  className="w-80 rounded-md lg:w-[500px] md:w-[320px]"
                />
              </div>
            </Content>
          </Item>
        );
      })}
    </Root>
  );
};

export default Accordion;
