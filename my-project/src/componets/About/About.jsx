import React from 'react'

function About() {
  return (
    <>
    
     <main id="about" className="bg-gray-50 px-6 py-12">
     <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
 
        {/* Left Side Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
            alt="Team working together"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
      

        {/* Right Side Content */}
        <div>
          <p className="mb-3 font-semibold uppercase tracking-widest text-blue-600">
            About Us
          </p>

          <h1 className="text-4xl font-bold leading-tight text-gray-900">
            We Build Ideas Into
            <span className="text-blue-600"> Reality</span>
          </h1>

          <p className="mt-5 leading-7 text-gray-600">
            Welcome to MyLogo! We believe in creativity, innovation,
            and building useful digital experiences. Our goal is to
            create simple and effective solutions for everyone.
          </p>

          <p className="mt-4 leading-7 text-gray-600">
            We focus on quality, teamwork, and continuous improvement
            to make every project meaningful.
          </p>

          {/* Features */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <h3 className="font-bold text-blue-600">Our Mission</h3>
              <p className="mt-2 text-sm text-gray-600">
                Deliver useful and creative solutions.
              </p>
            </div>

            <div className="rounded-lg bg-white p-4 shadow-sm">
              <h3 className="font-bold text-blue-600">Our Vision</h3>
              <p className="mt-2 text-sm text-gray-600">
                Make technology simple for everyone.
              </p>
            </div>
          </div>

          <a
            href="#content"
            className="mt-7 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Learn More
          </a>
        </div>
      </div>
    </main>
    </>
  )
}

export default About
