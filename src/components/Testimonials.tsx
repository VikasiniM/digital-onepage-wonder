
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Solutions",
      company: "Technology Startup",
      content: "David's strategic insights transformed our digital presence completely. Our online revenue increased by 340% within 8 months of implementing his recommendations. His expertise in digital transformation is unmatched.",
      rating: 5,
      image: "SJ"
    },
    {
      name: "Michael Chen",
      role: "CMO, Global Retail Corp",
      company: "E-commerce Platform",
      content: "The mobile strategy consultation provided by David was game-changing. Our app downloads increased by 250% and user engagement improved dramatically. He truly understands the digital landscape.",
      rating: 5,
      image: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, Creative Agency",
      company: "Marketing Agency",
      content: "Working with David was the best investment we made for our business. His process optimization strategies reduced our operational costs by 45% while improving our service delivery speed.",
      rating: 5,
      image: "ER"
    },
    {
      name: "James Wilson",
      role: "VP of Operations, Manufacturing Inc",
      company: "Industrial Solutions",
      content: "David's cybersecurity consultation saved our company from potential threats. His comprehensive security framework implementation gave us peace of mind and client confidence.",
      rating: 5,
      image: "JW"
    },
    {
      name: "Lisa Thompson",
      role: "Director, Healthcare Systems",
      company: "Healthcare Technology",
      content: "The technology integration project led by David streamlined our entire workflow. Patient satisfaction scores increased by 60% thanks to the digital solutions he recommended.",
      rating: 5,
      image: "LT"
    },
    {
      name: "Robert Kim",
      role: "Founder, FinTech Startup",
      company: "Financial Services",
      content: "David's analytics and strategy consultation helped us identify key growth opportunities. Our customer acquisition cost decreased by 35% while conversion rates doubled.",
      rating: 5,
      image: "RK"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what industry leaders and business owners say about working with me.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-blue-500 mb-4" />
                
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-blue-600 font-semibold">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-2xl p-12">
          <h3 className="text-3xl font-bold mb-4">Ready to Join These Success Stories?</h3>
          <p className="text-xl mb-6 text-green-100">
            Let's discuss how I can help transform your business and achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">98%</div>
              <div className="text-sm text-green-100">Client Satisfaction</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">200+</div>
              <div className="text-sm text-green-100">Projects Completed</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold">340%</div>
              <div className="text-sm text-green-100">Average ROI Increase</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
