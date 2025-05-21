'use client';

export default function GalleryPage() {
  const column1 = [
    "https://cdn-thumbs.imagevenue.com/09/57/a7/ME1ASDMM_t.jpg",
    "https://cdn-thumbs.imagevenue.com/65/9b/44/ME1ASDMQ_t.jpg",
    "https://cdn-thumbs.imagevenue.com/72/41/e1/ME1ASDMS_t.jpg",
    "https://cdn-thumbs.imagevenue.com/4d/5b/15/ME1ASDMU_t.jpg",
  ];

  const column2 = [
    "https://cdn-thumbs.imagevenue.com/e4/e3/a9/ME1ASDMV_t.jpg",
    "https://cdn-thumbs.imagevenue.com/a7/75/c3/ME1ASDMY_t.jpg",
    "https://cdn-thumbs.imagevenue.com/74/7e/a3/ME1ASDMZ_t.jpg",
  ];

  const column3 = [
    "https://cdn-thumbs.imagevenue.com/ea/52/7b/ME1ASDN2_t.jpg",
    "https://cdn-thumbs.imagevenue.com/38/31/47/ME1ASDN4_t.jpg",
    "https://cdn-thumbs.imagevenue.com/24/ea/14/ME1ASDN9_t.jpg",
    "https://cdn-thumbs.imagevenue.com/34/c8/79/ME1ASDND_t.png",
  ];

  const imgClass = `
    mt-2 w-full max-w-[180px] mx-auto rounded-md cursor-pointer
    filter grayscale brightness-50 blur-sm
    transition duration-300 ease-in-out
    hover:blur-0 hover:grayscale-0 hover:brightness-100
  `;

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-white">Gallery</h1>
      <p className="text-lg text-center text-gray-400 mt-2">
        A Sneak Peek of Nikki&apos;s Beauty
      </p>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-8">
        {[column1, column2, column3].map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col items-center space-y-2">
            {column.map((src, idx) => (
              <img key={idx} src={src} alt="" className={imgClass} />
            ))}
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <p className="text-center text-sm text-gray-300 mt-10">
        For pricing details, please visit our <a href="/rates" className="underline hover:text-pink-400">Rates</a> page.
      </p>
    </div>
  );
}
