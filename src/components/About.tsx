import React from 'react';
import { Users, Target, Lightbulb, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    'Java', 'Python', 'C/C++', 'React.js', 'Node.js', 
    'AI/ML', 'PHP', 'Oracle', 'TypeScript', 'MongoDB'
  ];

  const teamMembers = [
    {
      name: 'Alex Rodriguez',
      role: 'Full Stack Developer & Team Lead',
      skills: 'React.js, Node.js, Python, AI/ML',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Sarah Chen',
      role: 'Backend Engineer',
      skills: 'Java, Oracle, PHP, Microservices',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Marcus Johnson',
      role: 'Frontend Specialist',
      skills: 'React.js, TypeScript, UI/UX Design',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Priya Patel',
      role: 'AI/ML Engineer',
      skills: 'Python, TensorFlow, Data Science',
      image: '/api/placeholder/300/300'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We deliver innovative solutions that solve real-world problems and drive business growth.'
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'Our diverse team combines different expertise to create comprehensive digital solutions.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation-First',
      description: 'We stay ahead of technology trends to provide cutting-edge solutions for our clients.'
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'Every project undergoes rigorous testing and follows industry best practices.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">
            About <span className="text-primary">Our Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a passionate group of developers committed to delivering exceptional 
            digital solutions that make a difference.
          </p>
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-[var(--shadow-green)] transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills */}
        <div className="mb-16 text-center">
          <h3 className="text-2xl font-bold font-space mb-8">Our Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div>
          <h3 className="text-2xl font-bold font-space text-center mb-12">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-[var(--shadow-green)] transition-all duration-300 scale-hover">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gradient-eco rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-lg mb-1">{member.name}</h4>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.skills}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card p-8 rounded-2xl border border-border shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how our team can help bring your project to life.
            </p>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-eco text-primary-foreground px-8 py-3 rounded-lg hover:shadow-[var(--shadow-green)] transition-all duration-300"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;