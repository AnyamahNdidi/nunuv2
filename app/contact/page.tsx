export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-gray-900">
      <div className="h-20 bg-[#0F3D3E]"></div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch justify-center">
            {/* Left Content - Contact Form */}
            <div className="space-y-8 flex flex-col justify-center">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#0F3D3E]">
                  Contact us
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Have any questions? We'd love to hear from you.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 flex-1 flex flex-col">
                <h2 className="text-2xl font-semibold mb-6 text-[#0F3D3E]">
                  Let's Connect
                </h2>

                <form className="space-y-6 flex-1 flex flex-col">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2 text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A0F0D0] focus:border-transparent text-gray-900 placeholder-gray-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2 text-gray-700"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A0F0D0] focus:border-transparent text-gray-900 placeholder-gray-500"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2 text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A0F0D0] focus:border-transparent text-gray-900 placeholder-gray-500"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="solution"
                      className="block text-sm font-medium mb-2 text-gray-700"
                    >
                      What is the solution you are looking for?
                    </label>
                    <select
                      id="solution"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A0F0D0] focus:border-transparent text-gray-900"
                    >
                      <option value="">Select a solution</option>
                      <option value="generative-ai">
                        Generative AI & Machine Learning
                      </option>
                      <option value="ai-strategy">
                        AI Strategy & Consulting
                      </option>
                      <option value="ai-product">AI Product Engineering</option>
                      <option value="data-engineering">
                        Data Engineering & Analytics
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2 text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A0F0D0] focus:border-transparent text-gray-900 placeholder-gray-500 resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#A0F0D0] text-[#0F3D3E] font-semibold py-4 px-6 rounded-lg hover:bg-[#A0F0D0]/90 transition-colors duration-200 mt-auto"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative flex items-stretch">
              <div className="relative rounded-2xl overflow-hidden w-full min-h-[700px] flex">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/african-american-business-man.jpg-cqcBI2bpJ6I74B0veb1LTc0lBXzjeB.jpeg"
                  alt="Professional businessman working on laptop and talking on phone"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#A0F0D0]/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#0F3D3E]/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#A0F0D0]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-[#0F3D3E]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#0F3D3E]">
                Phone
              </h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#A0F0D0]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-[#0F3D3E]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#0F3D3E]">
                Email
              </h3>
              <p className="text-gray-600">hello@nunu-consulting.com</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#A0F0D0]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-[#0F3D3E]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#0F3D3E]">
                Office
              </h3>
              <p className="text-gray-600">
                123 Business Ave
                <br />
                Suite 100, City, State 12345
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
