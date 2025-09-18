export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-gray-900">
      <div className="h-20 bg-[#0F3D3E]"></div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 mt-4 mb-4 sm:px-6 lg:px-8 max-w-8xl">
          <div className="grid lg:grid-cols-2 gap-16 items-stretch justify-center">
            {/* Left Content - Contact Form */}
            <div className="space-y-8 flex flex-col justify-center">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold mb-6 text-[#0F3D3E]">
                  Let's shape your AI story together
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  We'd love to hear from you. Please fill in your details below
                  and we'll get back to you quickly, usually within 24 hours.
                  Thank you for considering us. We respect your privacy and
                  assure you that all information provided will be kept
                  confidential.
                </p>
              </div>

              <div className="bg-white shadow-lg rounded-2xl p-8 flex-1 flex flex-col">
                <form className="space-y-6 flex-1 flex flex-col">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2 text-gray-700"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A0F0D0] focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2 text-gray-700"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A0F0D0] focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2 text-gray-700"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A0F0D0] focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="services"
                      className="block text-sm font-medium mb-2 text-gray-700"
                    >
                      What service are you looking for?{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="services"
                      multiple
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A0F0D0] focus:border-transparent"
                      size={4}
                    >
                      <option value="product-strategy">
                        Product & Narrative Strategy
                      </option>
                      <option value="go-to-market">
                        Go-to-Market Strategy
                      </option>
                      <option value="ai-storytelling">AI Storytelling</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2 text-gray-700"
                    >
                      Message (optional)
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A0F0D0] focus:border-transparent resize-none"
                      placeholder="Tell us about your project or requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#A0F0D0] text-[#0F3D3E] font-semibold py-4 px-6 rounded-lg hover:bg-[#A0F0D0]/90 transition-colors duration-200 mt-auto text-lg"
                  >
                    Send Message
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
          {/* Trusted By Section */}
          <br />
          <br />
          <div className="container mx-auto   pb-16">
            <div className="max-w-4xl">
              <p className=" text-xl font-bold text-[#0A211F] mb-4">
                Trusted By
              </p>

              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2">
                {/* Logo 1 - Amazon */}
                <div className="rounded-lg  flex items-center justify-center p-2">
                  <img
                    src="/logo/amazom.png"
                    alt="Amazon logo"
                    className="w-20  h-8 object-contain hover:opacity-80 transition-opacity duration-300 filter grayscale"
                  />
                </div>

                {/* Logo 2 - Google */}
                <div className="rounded-lg flex items-center justify-center p-2">
                  <img
                    src="/logo/google.png"
                    alt="Google logo"
                    className="w-20 h-8 object-contain hover:opacity-80 transition-opacity duration-300 filter grayscale"
                  />
                </div>

                {/* Logo 3 - Databricks */}
                <div className="rounded-lg flex items-center justify-center p-2">
                  <img
                    src="/logo/databricks_logo_icon_249070.png"
                    alt="Databricks logo"
                    className="w-20 h-8 object-contain hover:opacity-80 transition-opacity duration-300 filter grayscale"
                  />
                </div>

                {/* Logo 4 - Reddit */}
                <div className="rounded-lg flex items-center justify-center p-2">
                  <img
                    src="/logo/reddit.png"
                    alt="Reddit logo"
                    className="w-20 h-8 object-contain hover:opacity-80 transition-opacity duration-300 filter grayscale"
                  />
                </div>
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
