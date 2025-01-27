import { useState } from 'react';
import { DollarSign, Clock, Shield, ChevronDown, ChevronUp, Calendar, Star, Briefcase } from 'lucide-react';

const BodyguardsAndFAQ = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: "How do I book a bodyguard?",
      answer: "Booking a bodyguard is simple: Download our app, create an account, select your desired date and duration, choose from available bodyguards, and confirm your booking. Payment is processed securely through the app."
    },
    {
      question: "What are the requirements to become a bodyguard on the platform?",
      answer: "To join as a bodyguard, you must: Be at least 21 years old, have valid security certification, pass our background check, provide proof of training and experience, complete our platform verification process, and maintain required insurance coverage."
    },
    {
      question: "How much do bodyguards earn?",
      answer: "Earnings vary based on experience and hours worked. Our bodyguards typically earn between $50-$150 per hour, with experienced professionals earning at the higher end. You keep 80% of the booking fee, with platform fees of 20%."
    },
    {
      question: "What happens in case of emergency?",
      answer: "Our app features a 24/7 emergency response system. In case of any security concerns, you can instantly alert our command center through the app's panic button. We maintain direct lines with local law enforcement for rapid response."
    },
    {
      question: "Can I choose my working hours?",
      answer: "Yes, bodyguards have full flexibility to set their own availability. You can update your schedule through the app, choose which bookings to accept, and set your preferred working areas."
    }
  ];

  return (
    <>
      {/* For Bodyguards Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" id="bodyguards">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join Our Elite Security Network
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Turn your security expertise into a profitable career. Set your own hours, 
              choose your assignments, and earn competitive rates.
            </p>
          </div>

          {/* Earnings Calculator */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Earning Potential
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#2A9D8F]/10 flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-[#2A9D8F]" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">$50-$150/hour</div>
                      <div className="text-sm text-gray-600">Competitive rates</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#2A9D8F]/10 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-[#2A9D8F]" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Flexible Schedule</div>
                      <div className="text-sm text-gray-600">Work when you want</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#2A9D8F]/10 flex items-center justify-center">
                      <Star className="w-6 h-6 text-[#2A9D8F]" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Performance Bonuses</div>
                      <div className="text-sm text-gray-600">Earn more with high ratings</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="app2.png"
                  alt="Bodyguard using app"
                  className="rounded-xl shadow-lg w-full h-[1/2]"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#2A9D8F]/20 flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-[#2A9D8F]" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">80% Commission</div>
                      <div className="text-sm text-gray-600">Keep more of your earnings</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Requirements Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 rounded-lg bg-[#2A9D8F]/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-[#2A9D8F]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Certification Required
              </h3>
              <p className="text-gray-600">
                Valid security certification and relevant training documentation needed.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 rounded-lg bg-[#2A9D8F]/10 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-[#2A9D8F]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Experience
              </h3>
              <p className="text-gray-600">
                Minimum 2 years of professional security or military experience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 rounded-lg bg-[#2A9D8F]/10 flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-[#2A9D8F]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Background Check
              </h3>
              <p className="text-gray-600">
                Must pass comprehensive background check and maintain clean record.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" id="faq">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about our platform and services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-gray-50">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BodyguardsAndFAQ;