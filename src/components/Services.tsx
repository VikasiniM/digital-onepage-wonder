
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BarChart3, 
  Smartphone, 
  Globe, 
  TrendingUp, 
  Shield, 
  Cog,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Digital Strategy & Analytics",
      description: "Comprehensive digital transformation roadmaps with data-driven insights to accelerate your business growth.",
      features: ["Market Analysis", "KPI Development", "Performance Tracking", "ROI Optimization"],
      price: "Starting at $2,500"
    },
    {
      icon: Smartphone,
      title: "Mobile & App Strategy",
      description: "End-to-end mobile strategy consulting from concept to launch, ensuring maximum user engagement and retention.",
      features: ["App Strategy", "UX/UI Consultation", "App Store Optimization", "User Acquisition"],
      price: "Starting at $3,000"
    },
    {
      icon: Globe,
      title: "Digital Marketing Transformation",
      description: "Omnichannel marketing strategies that integrate SEO, PPC, social media, and content marketing for maximum impact.",
      features: ["SEO Strategy", "PPC Management", "Social Media Strategy", "Content Marketing"],
      price: "Starting at $2,000"
    },
    {
      icon: TrendingUp,
      title: "Business Process Optimization",
      description: "Streamline operations with digital tools and automation to increase efficiency and reduce costs.",
      features: ["Process Automation", "Workflow Optimization", "Digital Tools Integration", "Cost Reduction"],
      price: "Starting at $4,000"
    },
    {
      icon: Shield,
      title: "Cybersecurity Consulting",
      description: "Comprehensive security audits and implementation of robust cybersecurity frameworks to protect your digital assets.",
      features: ["Security Audits", "Risk Assessment", "Compliance Planning", "Training Programs"],
      price: "Starting at $3,500"
    },
    {
      icon: Cog,
      title: "Technology Integration",
      description: "Seamless integration of new technologies with existing systems to enhance operational efficiency.",
      features: ["System Integration", "API Development", "Cloud Migration", "Tech Stack Optimization"],
      price: "Starting at $5,000"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to transform your business and drive sustainable growth in today's competitive landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-6">
                  <div className="text-center mb-4">
                    <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transition-all duration-300">
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl p-12">
          <h3 className="text-3xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-xl mb-6 text-blue-100">
            Every business is unique. Let's discuss how I can create a tailored strategy for your specific needs.
          </p>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
