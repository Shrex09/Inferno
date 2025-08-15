import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Sharma',
      role: 'CEO, TechVenture Solutions',
      company: 'TechVenture Solutions',
      rating: 5,
      feedback: 'Inferno delivered an exceptional IndiaMART-style platform that exceeded our expectations. Their attention to detail and technical expertise is remarkable. The platform has significantly boosted our business operations.',
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Emily Watson',
      role: 'Product Manager, GreenEnergy Corp',
      company: 'GreenEnergy Corp',
      rating: 5,
      feedback: 'The RenewGen platform they built for us is incredible. The AI recommendations are spot-on and have helped our customers make better energy choices. Professional team with great communication.',
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Michael Chen',
      role: 'Founder, EcoMobility',
      company: 'EcoMobility',
      rating: 5,
      feedback: 'Outstanding work on our EV charging station locator. The blockchain integration was seamless and the user experience is fantastic. They delivered on time and within budget.',
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Dr. Priya Mehta',
      role: 'Environmental Scientist',
      company: 'CleanAir Initiative',
      rating: 5,
      feedback: 'The air quality monitoring app has been a game-changer for our research. The real-time data accuracy and predictive analytics features are exactly what we needed. Highly recommended!',
      image: '/api/placeholder/80/80'
    },
    {
      name: 'James Wilson',
      role: 'Owner, Wilson\'s Garden Center',
      company: 'Wilson\'s Garden Center',
      rating: 5,
      feedback: 'The e-commerce platform for our nursery has transformed our business. Online sales have increased by 300% since launch. The team understood our needs perfectly.',
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Sarah Kumar',
      role: 'IT Director, MGTech Systems',
      company: 'MGTech Systems',
      rating: 5,
      feedback: 'The barcode scanning solution has streamlined our inventory management completely. The integration with our existing systems was flawless. Excellent technical skills and support.',
      image: '/api/placeholder/80/80'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-amber-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">
            Client <span className="text-primary">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients say about 
            working with our team.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="relative hover:shadow-[var(--shadow-green)] transition-all duration-300 scale-hover"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4">
                  <Quote className="h-8 w-8 text-primary/20" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Feedback */}
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.feedback}"
                </p>

                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-eco rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-primary font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-card p-8 rounded-2xl border border-border">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">On-Time Delivery</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.6</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">Ready to Join Our Happy Clients?</h3>
          <p className="text-muted-foreground mb-6">
            Let's discuss your project and see how we can help you achieve your goals.
          </p>
          <button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-eco text-primary-foreground px-8 py-3 rounded-lg hover:shadow-[var(--shadow-green)] transition-all duration-300"
          >
            Get Your Quote Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;