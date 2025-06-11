import React, { useState } from 'react';

const Blog = () => {
  const [expandedArticle, setExpandedArticle] = useState(null);

  const articles = [
    {
      id: 1,
      title: "Building Scalable Web Applications with React and Node.js",
      excerpt: "Learn the best practices for creating maintainable and scalable full-stack applications using modern JavaScript technologies.",
      fullContent: "In this comprehensive guide, we'll explore how to build scalable web applications using React and Node.js. We'll cover component architecture, state management, API design, database optimization, and deployment strategies. You'll learn how to structure your code for maintainability, implement efficient data flow patterns, and optimize performance for production environments.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Web Development",
      image: "/images/blog/react-nodejs.png",
      fallbackBg: "bg-gradient-to-br from-blue-400 to-purple-500",
      tags: ["React", "Node.js", "JavaScript", "Architecture"]
    },
    {
      id: 2,
      title: "Implementing Blockchain Technology in E-commerce",
      excerpt: "Explore how blockchain can revolutionize online commerce with enhanced security, transparency, and trust.",
      fullContent: "Blockchain technology is transforming the e-commerce landscape by providing unprecedented security and transparency. In this article, we'll dive deep into smart contracts, decentralized payment systems, supply chain tracking, and customer trust mechanisms. We'll also explore real-world case studies and implementation strategies for modern e-commerce platforms.",
      date: "2024-01-08",
      readTime: "12 min read",
      category: "Blockchain",
      image: "/images/blog/blockchain-ecommerce.png",
      fallbackBg: "bg-gradient-to-br from-purple-400 to-pink-500",
      tags: ["Blockchain", "E-commerce", "Solidity", "Web3"]
    },
    {
      id: 3,
      title: "Modern CSS Techniques with Tailwind CSS",
      excerpt: "Discover advanced styling techniques and best practices for creating beautiful, responsive designs with Tailwind CSS.",
      fullContent: "Tailwind CSS has revolutionized how we approach styling in modern web development. This guide covers advanced techniques including custom component creation, responsive design patterns, dark mode implementation, and performance optimization. We'll also explore how to extend Tailwind with custom utilities and integrate it with popular frameworks.",
      date: "2024-01-01",
      readTime: "6 min read",
      category: "Frontend",
      image: "/images/blog/tailwind-css.png",
      fallbackBg: "bg-gradient-to-br from-cyan-400 to-blue-500",
      tags: ["CSS", "Tailwind", "Design", "Frontend"]
    }
  ];

  const toggleArticle = (articleId) => {
    setExpandedArticle(expandedArticle === articleId ? null : articleId);
  };

  const ArticleCard = ({ article }) => {
    const isExpanded = expandedArticle === article.id;
    
    return (
      <article className="bg-white rounded-2xl shadow-lg border overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
        {/* Article Image */}
        <div className="h-48 relative overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'flex';
            }}
          />
          <div className={`${article.fallbackBg} w-full h-full absolute top-0 left-0 hidden items-center justify-center`}>
            <div className="text-white text-2xl font-bold opacity-80">
              {article.category}
            </div>
          </div>
          <div className="absolute top-4 left-4">
            <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
              {article.category}
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Article Content */}
        <div className="p-6 space-y-4">
          {/* Meta Info */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <span className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{article.readTime}</span>
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors duration-200 line-clamp-2">
            {article.title}
          </h3>

          {/* Content */}
          <div className="text-gray-600 text-sm leading-relaxed">
            {isExpanded ? (
              <p>{article.fullContent}</p>
            ) : (
              <p className="line-clamp-3">{article.excerpt}</p>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {article.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium hover:bg-primary hover:text-white transition-colors duration-200"
              >
                #{tag}
              </span>
            ))}
            {article.tags.length > 3 && (
              <span className="bg-gray-100 text-gray-500 px-2 py-1 rounded-md text-xs font-medium">
                +{article.tags.length - 3}
              </span>
            )}
          </div>

          {/* Read More/Less Button */}
          <div className="pt-4">
            <button 
              onClick={() => toggleArticle(article.id)}
              className="flex items-center space-x-2 text-primary hover:text-blue-700 transition-colors duration-200 group/btn"
            >
              <span className="text-sm font-medium">
                {isExpanded ? 'Read Less' : 'Read More'}
              </span>
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : 'group-hover/btn:translate-x-1'}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isExpanded ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </article>
    );
  };

  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">
            Latest Articles
          </h2>
          <div className="w-20 h-1 bg-primary rounded mx-auto"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sharing insights, tutorials, and thoughts on web development and technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* Coming Soon Message */}
        <div className="text-center mt-12">
          <div className="bg-gray-50 p-8 rounded-2xl border-2 border-dashed border-gray-300 max-w-2xl mx-auto">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-xl font-bold text-secondary mb-4">
              More Articles Coming Soon!
            </h3>
            <p className="text-gray-600 mb-6">
              I'm working on more in-depth tutorials and insights. Subscribe to my newsletter to get notified when new articles are published.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="btn-primary"
              >
                Get Notified
              </a>
              <a
                href="https://github.com/Abuzarsheik"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-colors duration-200"
              >
                Follow on GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-primary to-blue-600 p-8 rounded-2xl text-white">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-blue-100 mb-6">
              Get the latest articles, tutorials, and web development tips delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog; 