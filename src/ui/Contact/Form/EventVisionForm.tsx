import React from "react";

const EventVisionForm = ({ data, updateFields }) => {
  const handleVisionChange = (e) => {
    updateFields("media", { [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Data = reader.result;
        updateFields("media", {
          visuals: [
            {
              name: file.name,
              content: base64Data,
              preview: URL.createObjectURL(file),
            },
          ],
        });
      };
      reader.readAsDataURL(file);
    }
  };

  console.log(data);

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
          Attach Visual
        </h2>
        <div className="relative">
          <span className="text-gray-700 font-bold">
            Please share a visual to help us better understand your event
            vision. Moodboards, colors, flowers, traditions, logistics – if you
            got it, we'd love to see it.
          </span>
          <label htmlFor="visuals">
            <div className="w-full bg-white border border-dashed rounded-2xl h-52 px-4 py-3 mt-4 text-gray-900 focus:outline-none focus:border-gray-900 flex justify-center items-center flex-col gap-2">
              <span className="uppercase">Drop a file here or</span>
              <input
                type="file"
                name="visuals"
                accept="image/*"
                id="visuals"
                onChange={handleFileChange}
                className="hidden"
              />
              <button
                className="uppercase border border-black px-4 py-2 rounded-full"
                type="button"
                onClick={() => document.getElementById("visuals")?.click()}
              >
                Select File
              </button>
              <div className="mt-4">
                {data.visuals && data.visuals[0].preview && (
                  <img
                    src={data.visuals[0].preview}
                    alt="Preview"
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                )}
              </div>
            </div>
          </label>
        </div>
      </form>
    </div>
  );
};

export default EventVisionForm;
