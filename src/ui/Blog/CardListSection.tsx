import React from "react";
import { BlogCard } from "@/components/blogCard";

const CardListSection = () => {
  const blogData = [
    {
      title: "Should I study abroad?",
      description:
        "Learn the pros and cons of studying abroad and see how it can enrich your education, expand your horizons, and ignite new adventures...",
      author: "by Interstride",
      date: "November 18, 2024",
      image: "https://picsum.photos/200/200?random=1",
    },
    {
      title: "The Benefits of Learning a New Language",
      description:
        "Discover how learning a new language can boost your career, improve cognitive abilities, and connect you with new cultures.",
      author: "by Language Experts",
      date: "November 12, 2024",
      image: "https://picsum.photos/200/200?random=2",
    },
    {
      title: "Top 10 Travel Destinations for Students",
      description:
        "Explore the top travel destinations for students that offer affordability, fun activities, and unforgettable experiences.",
      author: "by Wanderlust",
      date: "November 5, 2024",
      image: "https://picsum.photos/200/200?random=3",
    },
    {
      title: "How to Balance Studies and Work",
      description:
        "Learn practical tips to effectively manage your time and excel at both your studies and part-time job.",
      author: "by CareerCoach",
      date: "October 30, 2024",
      image: "https://picsum.photos/200/200?random=4",
    },
    {
      title: "Scholarships for International Students",
      description:
        "Find out about the best scholarships available for international students and how to apply for them.",
      author: "by Scholarship Finder",
      date: "October 20, 2024",
      image: "https://picsum.photos/200/200?random=5",
    },
    {
      title: "Networking Tips for College Students",
      description:
        "Learn how to build a strong network during college that will benefit your future career and personal growth.",
      author: "by Networking Pro",
      date: "October 10, 2024",
      image: "https://picsum.photos/200/200?random=6",
    },
    {
      title: "Understanding Cultural Differences",
      description:
        "Discover how understanding and respecting cultural differences can enhance your personal and professional relationships.",
      author: "by Global Citizens",
      date: "October 1, 2024",
      image: "https://picsum.photos/200/200?random=7",
    },
    {
      title: "How to Save Money While Studying Abroad",
      description:
        "Explore practical tips on budgeting, finding discounts, and saving money as an international student.",
      author: "by Finance Gurus",
      date: "September 25, 2024",
      image: "https://picsum.photos/200/200?random=8",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 py-6">
      {blogData.map((item, index) => (
        <BlogCard {...item} key={index} />
      ))}
    </div>
  );
};

export default CardListSection;
