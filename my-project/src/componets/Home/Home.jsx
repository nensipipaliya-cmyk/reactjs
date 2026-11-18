import React from 'react'

function Home() {
     const handleDownload = () => {
    const content = `Welcome to My Website!

This file was downloaded from my React Home Page.`;

    const file = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(file);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'my-website-info.txt';
    link.click();

    URL.revokeObjectURL(url);
  };
  return (
     <main className=" bg-gray-50 px-6 pt-12 pb-14">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">

        {/* Left Side Content */}
        <div>
          <p className="mb-3 font-semibold text-blue-600">
            WELCOME TO MY WEBSITE
          </p>

          <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Build Something
            <span className="text-blue-600"> Amazing</span>
          </h1>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Explore my website to learn more about our work,
            services, and creative ideas. Download the sample
            information file using the button below.
          </p>

          <button
            onClick={handleDownload}
            className="mt-7 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow hover:bg-blue-700"
          >
            ↓ Download File
          </button>
        </div>

        {/* Right Side Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80"
            alt="Computer and web development workspace"
            className="w-full rounded-2xl shadow-xl"
          />
        </div>

      </div>
    </main>
  )
}

export default Home
