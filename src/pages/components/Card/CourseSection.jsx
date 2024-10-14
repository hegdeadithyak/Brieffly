"use client";
import React, { useState, useRef } from "react";
import CourseCard from "./CourseCard";
import CourseTag from "./CourseTag";
import { motion, useInView } from "framer-motion";

const coursesData = [
  {
    id: 1,
    title: "React Portfolio Course",
    description: "Learn to build a portfolio with React.",
    image: "/images/courses/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Photography Portfolio Course",
    description: "Capture and showcase your photos.",
    image: "/images/courses/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Course",
    description: "Build an online store with React.",
    image: "/images/courses/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering App Course",
    description: "Develop a mobile app for food ordering.",
    image: "/images/courses/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template Course",
    description: "Authentication and CRUD operations.",
    image: "/images/courses/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Development Roadmap",
    description: "Comprehensive guide to full-stack development.",
    image: "/images/courses/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const CoursesSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredCourses = coursesData.filter((course) =>
    course.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="courses">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Courses
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <CourseTag
          onclick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <CourseTag
          onclick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <CourseTag
          onclick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredCourses.map((course, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
              imgUrl={course.image}
              gitUrl={course.gitUrl}
              previewUrl={course.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default CoursesSection;
