import React, { useState } from "react";

const EventVisionForm = ({ data, updateFields }) => {
  const [previewImages, setPreviewImages] = useState([]); // State to hold image previews

  const handleVisionChange = (e) => {
    updateFields("media", { [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const fileURLs = files.map((file) => URL.createObjectURL(file));
    setPreviewImages(fileURLs);

    updateFields("media", { visuals: files });
  };

  return (
    <div className="w-full mobile:px-8 lg:px-16">
      <form>
        <h2 className="text-xl md:text-2xl text-gray-900 mb-3 font-semibold">
          Now for the fun stuff. Tell us all about your event vision, and spare
          no detail!
        </h2>
        <div className="relative">
          <textarea
            name="description"
            value={data.description}
            onChange={handleVisionChange}
            placeholder="Type your Description Here *"
            className="w-full bg-white border rounded-2xl px-4 py-3 text-gray-900 focus:outline-none focus:border-gray-900"
            required
            rows={8}
          />
        </div>

        <h2 className="text-xl md:text-2xl text-gray-900 mb-3 font-semibold mt-10">
          Attach Visuals
        </h2>
        <div className="relative">
          <span className="text-gray-700 font-bold">
            Please share any visuals to help us better understand your event
            vision. Moodboards, colors, flowers, traditions, logistics – if you
            got it, we'd love to see it.
          </span>
          <label htmlFor="visuals">
            <div className="w-full bg-white border border-dashed rounded-2xl h-52 px-4 py-3 mt-4 text-gray-900 focus:outline-none focus:border-gray-900 flex justify-center items-center flex-col gap-2">
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
              <div className="mt-4 flex flex-wrap gap-2">
                {previewImages.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Preview ${index}`}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>
          </label>
        </div>
      </form>
    </div>
  );
};

export default EventVisionForm;
