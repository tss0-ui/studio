'use client';

export default function GalleryPage() {
  return (
    <div className="flex flex-wrap px-1">
      {/* Column 1 */}
      <div className="w-1/3 px-1 sm:w-full">
        {[
          "https://cdn-thumbs.imagevenue.com/09/57/a7/ME1ASDMM_t.jpg",
          "https://cdn-thumbs.imagevenue.com/65/9b/44/ME1ASDMQ_t.jpg",
          "https://cdn-thumbs.imagevenue.com/72/41/e1/ME1ASDMS_t.jpg",
          "https://cdn-thumbs.imagevenue.com/4d/5b/15/ME1ASDMU_t.jpg",
        ].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt=""
            className="mt-1 w-full rounded-lg cursor-pointer transition duration-200 ease-linear filter grayscale brightness-50 hover:grayscale-0 hover:brightness-100"
          />
        ))}
      </div>

      {/* Column 2 */}
      <div className="w-1/3 px-1 sm:w-full">
        {[
          "https://cdn-thumbs.imagevenue.com/e4/e3/a9/ME1ASDMV_t.jpg",
          "https://cdn-thumbs.imagevenue.com/a7/75/c3/ME1ASDMY_t.jpg",
          "https://cdn-thumbs.imagevenue.com/74/7e/a3/ME1ASDMZ_t.jpg",
        ].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt=""
            className="mt-1 w-full rounded-lg cursor-pointer transition duration-200 ease-linear filter grayscale brightness-50 hover:grayscale-0 hover:brightness-100"
          />
        ))}
      </div>

      {/* Column 3 */}
      <div className="w-1/3 px-1 sm:w-full">
        {[
          "https://cdn-thumbs.imagevenue.com/ea/52/7b/ME1ASDN2_t.jpg",
          "https://cdn-thumbs.imagevenue.com/38/31/47/ME1ASDN4_t.jpg",
          "https://cdn-thumbs.imagevenue.com/24/ea/14/ME1ASDN9_t.jpg",
          "https://cdn-thumbs.imagevenue.com/34/c8/79/ME1ASDND_t.png",
        ].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt=""
            className="mt-1 w-full rounded-lg cursor-pointer transition duration-200 ease-linear filter grayscale brightness-50 hover:grayscale-0 hover:brightness-100"
          />
        ))}
      </div>
    </div>
  );
}
