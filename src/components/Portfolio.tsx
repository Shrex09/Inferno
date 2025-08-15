import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      title: 'IndiaMART-style Dynamic Website',
      description: 'A comprehensive B2B marketplace platform with dynamic product listings, advanced search, and vendor management.',
      category: 'Web Development',
      tags: ['React.js', 'Node.js', 'MongoDB', 'Express'],
      image: '/api/placeholder/400/250',
      features: ['Product catalog', 'Vendor profiles', 'Advanced search', 'Analytics dashboard']
    },
    {
      title: 'RenewGen - Renewable Energy Platform',
      description: 'AI-powered platform providing personalized renewable energy recommendations and efficiency tracking.',
      category: 'AI/ML',
      tags: ['Python', 'TensorFlow', 'React.js', 'PostgreSQL'],
      image: '/api/placeholder/400/250',
      features: ['AI recommendations', 'Energy analytics', 'Carbon footprint tracking', 'ROI calculator']
    },
    {
      title: 'EV Charging Station Locator',
      description: 'Blockchain-powered platform for locating and booking EV charging stations with smart contracts.',
      category: 'Blockchain',
      tags: ['React.js', 'Solidity', 'Web3.js', 'Node.js'],
      image: '/api/placeholder/400/250',
      features: ['Real-time availability', 'Blockchain booking', 'Payment integration', 'Route optimization']
    },
    {
      title: 'Air Quality Monitoring App',
      description: 'Mobile application providing real-time air quality data with predictive analytics and health recommendations.',
      category: 'Mobile',
      tags: ['React Native', 'Python', 'Firebase', 'ML APIs'],
      image: '/api/placeholder/400/250',
      features: ['Real-time monitoring', 'Health alerts', 'Predictive analytics', 'Location-based data']
    },
    {
      title: 'Mayur Nursery Website',
      description: 'E-commerce platform for plant nursery with inventory management and care guides.',
      category: 'E-commerce',
      tags: ['React.js', 'PHP', 'MySQL', 'PayPal API'],
      image: '/api/placeholder/400/250',
      features: ['Product catalog', 'Care guides', 'Inventory management', 'Order tracking']
    },
    {
      title: 'MGTech Barcode Scanner',
      description: 'Enterprise application for scanning barcodes and fetching detailed laptop specifications automatically.',
      category: 'Enterprise',
      tags: ['Java', 'Oracle', 'REST APIs', 'Barcode SDK'],
      image: '/api/placeholder/400/250',
      features: ['Barcode scanning', 'Specs database', 'Inventory sync', 'Reporting system']
    }
  ];

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl md:text-4xl font-bold font-space mb-4">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our recent projects showcasing innovative solutions across 
            different industries and technologies.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={`transition-all duration-300 ${
                selectedCategory === category 
                  ? 'bg-gradient-eco text-primary-foreground shadow-[var(--shadow-green)]' 
                  : 'hover:bg-primary/10'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-[var(--shadow-green)] transition-all duration-300 scale-hover group"
            >
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-eco flex items-center justify-center">
                  <div className="text-primary-foreground text-6xl font-bold opacity-20">
                    {project.title.split(' ')[0]}
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <Button size="sm" variant="secondary" className="bg-background/90">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-background/90">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <ArrowRight className="h-3 w-3 mr-2 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-subtle p-8 rounded-2xl border border-border">
            <h3 className="text-2xl font-bold mb-4">Have a Project in Mind?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how we can help bring your ideas to life with our expertise.
            </p>
            <Button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-eco text-primary-foreground hover:shadow-[var(--shadow-green)] transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;