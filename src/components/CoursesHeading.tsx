"use client";
 
import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";

const CoursesHeading = () => {
  return (
    <div>
      <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-start px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center mt-20">
          Our Featured Courses.
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          From The best Trainers | For The best Trainees
        </div>
        
      </motion.div>
    </AuroraBackground>
    </div>
  )
}

export default CoursesHeading
