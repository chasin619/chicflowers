import React from "react";
import { Input } from "@/components/input";
import { Select } from "@/components/select";

const ContactPreferencesForm = ({ data, updateFields, personalInfo }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateFields("additionalInfo", { [name]: value });
  };

  const handleSelect = (name: string, type: string) => {
    updateFields("additionalInfo", { [name]: type });
  };

  return (
    <div className="w-full mobile:px-8 lg:px-16">
      <h2 className="text-xl md:text-2xl text-gray-900 font-semibold mt-8">
        {`Let's Socialize`}
      </h2>
      <p className="my-2">
        Feel free to share your socials so we can get to know you better.
      </p>
      <div className="flex space-x-4 mb-6">
        <Input
          value={data.instagramHandle}
          label="INSTAGRAM"
          onChange={handleInputChange}
          name="instagramHandle"
          placeholder="Enter your Instagram handle"
        />
        <Input
          value={data.tiktokHandle}
          label="TIKTOK"
          onChange={handleInputChange}
          name="tiktokHandle"
          placeholder="Enter your TikTok handle"
        />
      </div>
      <h2 className="text-xl md:text-2xl text-gray-900 mb-3 font-semibold mt-8">
        How did you hear about us? *
      </h2>
      <div className="space-y-6">
        <Select
          types={["SOCIAL MEDIA", "MAGAZINE", "EVENT", "REFERRAL", "OTHER"]}
          value={data.hearAbout}
          onTypeSelect={(type) => handleSelect("hearAbout", type)}
        />
      </div>
    </div>
  );
};

export default ContactPreferencesForm;
