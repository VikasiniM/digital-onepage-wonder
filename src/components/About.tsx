
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, Users, Zap } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: Award, title: "Certified Expert", description: "Google & Meta certified digital strategist" },
    { icon: Target, title: "Results-Driven", description: "Average 300% ROI improvement for clients" },
    { icon: Users, title: "Client-Focused", description: "Personalized strategies for every business" },
    { icon: Zap, title: "Innovation Leader", description: "Early adopter of emerging technologies" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">David Smith</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Digital transformation strategist with a proven track record of helping businesses navigate the complex digital landscape and achieve sustainable growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">My Journey</h3>
            <p className="text-lg text-gray-700 mb-6">
              With over 5 years of experience in digital strategy, I've helped startups and Fortune 500 companies transform their digital presence, optimize operations, and drive measurable growth.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              My approach combines data-driven insights with creative problem-solving to deliver solutions that not only meet today's challenges but also prepare businesses for tomorrow's opportunities.
            </p>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
              <p className="text-lg font-semibold mb-2">"Success in digital transformation isn't just about technology—it's about people, processes, and purpose working in harmony."</p>
              <p className="text-blue-200">- David Smith</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                  DS
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Digital Strategy Expert</h4>
                <p className="text-gray-600">Transforming businesses through innovation</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h4>
                <p className="text-gray-600">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
