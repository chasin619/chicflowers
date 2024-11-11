import {
  Root,
  Item,
  Header,
  Trigger,
  Content,
} from "@radix-ui/react-accordion";
import Image from "next/image";

import { PlusSvg } from "@/assets/svgs";
import { AccordionItem } from "@/utils/constants";

const Accordion = ({ data }: { data: AccordionItem[] }) => {
  return (
    <Root type="multiple" className="w-full">
      {data.map((item, index) => {
        const { title, content, lists, images } = item;
        return (
          <Item value={`item-${index + 1}`} key={index}>
            <Header>
              <Trigger
                className={`${
                  index !== data.length - 1 && "border-b"
                } AccordionTrigger border-black w-full flex justify-between items-center lg:text-5xl mobile:text-3xl mobile:py-3 lg:py-6`}
              >
                <span className="uppercase">{title}</span>
                <Image
                  src={PlusSvg}
                  alt="Plus svg"
                  className="AccordionPlusIcon"
                />
              </Trigger>
            </Header>
            <Content className="AccordionContent">
              <div className="flex mobile:flex-col gap-6 mt-10 lg:flex-row lg:gap-40 mobile:gap-10">
                <p className="mobile:text-sm lg:text-lg font-medium text-left md:w-[50%] mobile:w-[100%]">
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
              {images && (
                <div className="flex justify-center items-center mobile:flex-col gap-6 mt-10 lg:flex-row">
                  {images.map((url) => (
                    <Image
                      src={url}
                      alt="Accordion Image"
                      width={200}
                      height={200}
                      className="w-80 rounded-md lg:w-[500px] md:max-w-[320px] max-h-80 object-cover"
                    />
                  ))}
                </div>
              )}
            </Content>
          </Item>
        );
      })}
    </Root>
  );
};

export default Accordion;
