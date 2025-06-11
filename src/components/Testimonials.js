import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechStart Inc.",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 5,
      text: "Abuzar delivered exceptional work on our e-commerce platform. His technical skills and attention to detail were outstanding. The project was completed on time and exceeded our expectations.",
      project: "E-commerce Platform"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      company: "Digital Solutions",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      rating: 5,
      text: "Working with Abuzar was a fantastic experience. He brought innovative solutions to complex problems and maintained excellent communication throughout the project.",
      project: "Web Application"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Founder",
      company: "StartupHub",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      rating: 5,
      text: "Abuzar's expertise in React and Node.js helped us build a robust platform. His code quality and professional approach made the collaboration seamless.",
      project: "SaaS Platform"
    }
  ];

  const TestimonialCard = ({ testimonial }) => (
    <div className="bg-white p-6 rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-300 group">
      {/* Rating Stars */}
      <div className="flex items-center mb-4">
        {[...Array(testimonial.rating)].map((_, index) => (
          <svg
            key={index}
            className="w-5 h-5 text-yellow-400 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>

      {/* Testimonial Text */}
      <blockquote className="text-gray-600 mb-6 italic leading-relaxed">
        "{testimonial.text}"
      </blockquote>

      {/* Project Info */}
      <div className="bg-gray-50 px-3 py-2 rounded-lg mb-4">
        <span className="text-xs font-medium text-primary">Project: {testimonial.project}</span>
      </div>

      {/* Client Info */}
      <div className="flex items-center">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
          onError={(e) => {
            e.target.src = `https://ui-avatars.com/api/?name=${testimonial.name}&background=3B82F6&color=fff`;
          }}
        />
        <div>
          <h4 className="font-semibold text-secondary">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
          <p className="text-sm text-primary font-medium">{testimonial.company}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-primary rounded mx-auto"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here's what clients say about working with me
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg border max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-secondary mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-6">
              Join these satisfied clients and let's bring your ideas to life together.
            </p>
            <a
              href="#contact"
              className="btn-primary"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 