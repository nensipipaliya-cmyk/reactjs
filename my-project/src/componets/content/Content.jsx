import React from 'react'

function Content() {
   const topics = [
  {
    title: 'Web Development',
    description: 'Web development is used to create websites using HTML, CSS and JavaScript.',
    tag: 'Development',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800'
  },
  {
    title: 'React.js',
    description: 'React is a JavaScript library used to build interactive user interfaces.',
    tag: 'Frontend',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800'
  },
  {
    title: 'Artificial Intelligence',
    description: 'AI enables computers to perform tasks that usually require human intelligence.',
    tag: 'Technology',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800'
  },
  {
    title: 'Computer Networks',
    description: 'Computer networks connect devices to share information and resources.',
    tag: 'Networking',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800'
  },
  {
    title: 'Programming',
    description: 'Programming means writing instructions that a computer can execute.',
    tag: 'Coding',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800'
  },
  {
    title: 'Cyber Security',
    description: 'Cyber security protects computers, networks and data from cyberattacks.',
    tag: 'Security',
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800'
  }
]
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 px-6 py-20 text-center text-white">
        <p className="mb-3 font-semibold uppercase tracking-widest text-blue-200">
          Explore • Learn • Grow
        </p>

        <h1 className="mb-5 text-4xl font-bold md:text-6xl">
          Explore Our Content
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-blue-100">
          Discover technology, programming and innovation.
          Learn new skills and explore the world of computer engineering.
        </p>

        <a
          href="#topics"
          className="mt-8 inline-block rounded-lg bg-white px-7 py-3 font-semibold text-blue-700 transition hover:bg-blue-100"
        >
          Explore Topics
        </a>
      </section>

      {/* Information Section */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Latest Technology Topics
          </h2>

          <p className="mt-3 text-gray-600">
            Learn about important concepts in modern technology.
          </p>
        </div>

        <div
          id="topics"
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" >
          {topics.map((topic, index) => (
            <article
              key={topic.title}
              className="overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <img
                src={topic.image}
                alt={topic.title}
                className="h-52 w-full object-cover"
                loading="lazy"
              />

              <div className="p-6">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                  {topic.tag}
                </span>

                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  {topic.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {topic.description}
                </p>

                <a
                  href={`#topic-${index}`}
                  className="mt-5 inline-block font-semibold text-blue-600 hover:text-blue-800"
                >
                  Learn more →
                </a>

                <div id={`topic-${index}`} className="mt-3" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Why Learn Technology?
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            Technology plays an important role in education, healthcare,
            business and communication. Learning programming, networking
            and artificial intelligence helps students develop logical
            thinking and problem-solving skills for future careers.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-lg bg-blue-50 p-6">
              <h3 className="text-lg font-bold text-blue-700">
                Learn
              </h3>
              <p className="mt-2 text-gray-600">
                Understand new concepts.
              </p>
            </div>

            <div className="rounded-lg bg-indigo-50 p-6">
              <h3 className="text-lg font-bold text-indigo-700">
                Practice
              </h3>
              <p className="mt-2 text-gray-600">
                Build practical projects.
              </p>
            </div>

            <div className="rounded-lg bg-purple-50 p-6">
              <h3 className="text-lg font-bold text-purple-700">
                Grow
              </h3>
              <p className="mt-2 text-gray-600">
                Develop your technical skills.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Content
