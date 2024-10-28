import { Input } from "@/components/input";
import { Select } from "@/components/select";
import React, { useState, FC } from "react";

type SocialLinks = {
  instagram: string;
  tiktok: string;
  whatsapp?: string;
  other?: string;
};

const ContactPreferencesForm: FC = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [socialLinks, setSocialLinks] = useState<SocialLinks>({
    instagram: "",
    tiktok: "",
  });
  const [mediaConsent, setMediaConsent] = useState<string | null>(null);
  const [referralSource, setReferralSource] = useState<string | null>("OTHER");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSocialLinks((prevLinks) => ({
      ...prevLinks,
      [name]: value,
    }));
  };

  return (
    <div className="w-full mobile:px-8 lg:px-16">
      <h2 className="text-xl md:text-2xl text-gray-900 mb-3 font-semibold">
        How should we get in touch? *
      </h2>

      <Select
        types={["EMAIL", "PHONE", "TEXT", "WHATSAPP"]}
        value={selectedType}
        onTypeSelect={setSelectedType}
      />
      {selectedType === "WHATSAPP" && (
        <Input
          value={socialLinks.whatsapp || ""}
          label="WHATSAPP"
          onChange={handleInputChange}
          name="whatsapp"
          placeholder="Enter your WhatsApp number"
          required
        />
      )}

      <h2 className="text-xl md:text-2xl text-gray-900 font-semibold mt-8">
        Let's Socialize
      </h2>
      <p className="my-2">Feel free to share your socials so we can get to know you better.</p>
      <div className="flex space-x-4 mb-6">
        <Input
          value={socialLinks.instagram}
          label="INSTAGRAM"
          onChange={handleInputChange}
          name="instagram"
          placeholder="Enter your Instagram handle"
        />
        <Input
          value={socialLinks.tiktok}
          label="TIKTOK"
          onChange={handleInputChange}
          name="tiktok"
          placeholder="Enter your TikTok handle"
        />
      </div>

      <h2 className="text-xl md:text-2xl text-gray-900 mb-3 font-semibold mt-8">
        Can we share photos from your event in the media? *
      </h2>
      <Select
        types={["YES", "DECOR PHOTOS ONLY", "LET'S DISCUSS", "NO"]}
        value={mediaConsent}
        onTypeSelect={setMediaConsent}
      />

      <h2 className="text-xl md:text-2xl text-gray-900 mb-3 font-semibold mt-8">
        How did you hear about us? *
      </h2>
      <div className="space-y-6">
        <Select
          types={["SOCIAL MEDIA", "MAGAZINE", "EVENT", "REFERRAL", "OTHER"]}
          value={referralSource}
          onTypeSelect={setReferralSource}
        />
        {referralSource === "OTHER" && (
          <Input
            value={socialLinks.other || ""}
            label="TELL US MORE"
            onChange={handleInputChange}
            name="other"
            placeholder="Type something"
          />
        )}
      </div>
    </div>
  );
};

export default ContactPreferencesForm;
