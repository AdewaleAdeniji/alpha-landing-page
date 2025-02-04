import {
  Shield,
  Clock,
  CreditCard,
  Users,
  CheckCircle,
  Smartphone,
} from "lucide-react";

const HeroAndFeatures = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2A9D8F]/10 to-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Your Personal Security,
                <br />
                <span className="text-[#2A9D8F]"> On Demand</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Book verified professional bodyguards instantly. Whether
                it&apos;s for an hour or a day, your safety is just a tap away.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-[#2A9D8F] hidden text-white px-8 py-3 rounded-lg font-medium hover:bg-[#248579] transition-colors duration-200 flex items-center justify-center gap-2">
                  <Smartphone className="w-5 h-5" />
                  Download iOS App
                </button>
                <a href="https://api.codemagic.io/artifacts/.eJwVzUtygjAAANC7uHemAT_pwkWCBqIgCdEibBhUQIL8RD7x9G3fBd4sQ_9wVV-zjMMohPrYpZwNQroy3JqFihiSyaEJwFvaufe-23mnV9V6KlCgS3BItfuh2Sl1P26byMnK5woNp-ccY-doJcaZuSwnsoYiAHGs3y7zuAZ90qXTu-ZtFRjCqD5_16peLpJbu6LoDDVzqbe-jwx8vfVlr7Z5hEmp2B7OIzebAHl97y2b8OEDHNTQ9AIpPAla2IsWXDTFRp_ytASF8yAessEA4w-28geoRuZpo-B-r2dWgJKwh7hRrheKlJCrqX09xJ5S-ZLFburW7rCLzUXDf9BmM_sFRcJiYg.YrfsvDExNJ8ra8CM1_Q6Vzsy78c" download className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2">
                  <Smartphone className="w-5 h-5" />
                  Download Android App
                </a>
              </div>
              <div className="mt-8 flex items-center justify-center lg:justify-start gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Verified Guards</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">10k+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                  <div className="text-sm text-gray-600">App Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl  flex items-center justify-center">
                <img
                  src="/app.png"
                  alt="Mobile app screenshot"
                  className="w-auto h-full rounded-xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#2A9D8F]/20 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#2A9D8F]" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      Verified Guards
                    </div>
                    <div className="text-sm text-gray-600">
                      100% Background Checked
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" id="features">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Security Made Simple
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Book professional bodyguards in minutes. Our platform ensures a
              seamless experience for both clients and security professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#2A9D8F] transition-colors duration-200">
              <div className="w-12 h-12 rounded-lg bg-[#2A9D8F]/10 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-[#2A9D8F]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Instant Booking
              </h3>
              <p className="text-gray-600">
                Book a verified bodyguard in less than 5 minutes. Choose your
                duration and location, and we&apos;ll handle the rest.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#2A9D8F] transition-colors duration-200">
              <div className="w-12 h-12 rounded-lg bg-[#2A9D8F]/10 flex items-center justify-center mb-4">
                <CreditCard className="w-6 h-6 text-[#2A9D8F]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Transparent Pricing
              </h3>
              <p className="text-gray-600">
                Clear hourly rates with no hidden fees. Pay securely through the
                app and get detailed digital receipts.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#2A9D8F] transition-colors duration-200">
              <div className="w-12 h-12 rounded-lg bg-[#2A9D8F]/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#2A9D8F]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Verified Professionals
              </h3>
              <p className="text-gray-600">
                All bodyguards undergo rigorous background checks and are
                professionally certified. Your safety is our priority.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#2A9D8F] transition-colors duration-200">
              <div className="w-12 h-12 rounded-lg bg-[#2A9D8F]/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-[#2A9D8F]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Insurance Coverage
              </h3>
              <p className="text-gray-600">
                Every booking includes comprehensive insurance coverage for your
                peace of mind.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#2A9D8F] transition-colors duration-200">
              <div className="w-12 h-12 rounded-lg bg-[#2A9D8F]/10 flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-[#2A9D8F]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Real-time Tracking
              </h3>
              <p className="text-gray-600">
                Track your bodyguard&rsquo;s location in real-time and stay
                connected through our secure in-app messaging.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#2A9D8F] transition-colors duration-200">
              <div className="w-12 h-12 rounded-lg bg-[#2A9D8F]/10 flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-[#2A9D8F]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Flexible Duration
              </h3>
              <p className="text-gray-600">
                Book for as little as 2 hours or as long as you need. Extend
                your booking anytime through the app.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroAndFeatures;
