import React, { useState } from "react";

const EventVisionForm = () => {
  const [vision, setVision] = useState<string>("");
  const [files, setFiles] = useState<FileList | null>(null);

  const handleVisionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setVision(e.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
  };

  return (
    <div className="w-full px-16">
      <form>
        <h2 className="text-2xl md:text-3xl text-gray-900 my-2 font-semibold">
          Now for the fun stuff. Tell us all about your event vision, and spare
          no detail!
        </h2>
        <div className="relative">
          <textarea
            value={vision}
            onChange={handleVisionChange}
            placeholder="Type your Description Here *"
            className="w-full bg-transparent border-2 border-gray-700 rounded-2xl px-4 py-3 text-gray-900 focus:outline-none focus:border-gray-900"
            required
            rows={8}
          />
        </div>

        <h2 className="text-2xl md:text-3xl text-gray-900 mt-10 mb-2 font-semibold">
          Attach Visuals
        </h2>
        <div className="relative">
          <span className="text-gray-700 font-bold">
            Please share any visuals to help us better understand your event
            vision. Moodboards, colors, flowers, traditions, logistics – if you
            got it, we'd love to see it.
          </span>
          <label htmlFor="visuals">
            <div className="w-full bg-transparent border-2 border-gray-700 border-dashed rounded-3xl h-64 px-4 py-3 mt-4 text-gray-900 focus:outline-none focus:border-gray-900 flex justify-center items-center flex-col gap-2">
              <span className="uppercase">Drop files here or</span>
              <input
                type="file"
                name="visuals"
                accept="image/*"
                id="visuals"
                multiple
                onChange={handleFileChange}
                className="hidden"
              />
              <button
                className="uppercase border border-black px-4 py-2 rounded-full"
                type="button"
                onClick={() => document.getElementById("visuals")?.click()}
              >
                Select Files
              </button>
            </div>
          </label>
        </div>
      </form>
    </div>
  );
};

export default EventVisionForm;
