"use client";

import axios from "axios";
import { ChartNoAxesColumnIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Course = {
  id: number;
  courseId: number;
  title: string;
  desc: string;
  level: string;
  bannerImage: string;
  tag: string;
};

const CourseList = () => {
  const [courseList, setCourseList] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GetAllCourses();
  }, []);

  const GetAllCourses = async () => {
    setLoading(true);
    const result = await axios.get("/api/course");
    console.log(result);
    setCourseList(result?.data);
    setLoading(false);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
      {courseList?.map((course, index) => (
        <div
          key={index}
          className="border-4 rounded-xl hover:bg-zinc-900 cursor-pointer"
        >
          <Image
            src={(course?.bannerImage).trimEnd()}
            width={400}
            height={400}
            alt={course?.title}
            className="w-full h-[200px] rounded-t-lg object-cover"
          />

          <div className="p-4">
            <h2 className="font-game text-2xl">{course?.title}</h2>
            <p className="font-game text-xl text-gray-400">{course?.desc}</p>
            <h2 className="bg-zinc-800 flex gap-2 font-game p-1 mt-3 rounded-2xl items-center inline-flex px-4">
              <ChartNoAxesColumnIcon />
              {course?.level}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
