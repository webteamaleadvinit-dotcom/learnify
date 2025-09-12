import React from 'react'
import { GoClock } from "react-icons/go";

const PendingCourse = () => {

  const pendingcourse=[
    {
      img:"./src/assets/datascience.png",
      text:"AI & Machine Learning",
      span:"2 Hours",
      title:"Data Science and Analytics Professionals",
      date:"June 30, 2025",
      percent:"68",
    },

    {
      img:"./src/assets/digitalmarketing.png",
      text:"AI & Machine Learning",
      span:"1 Hours",
      title:"Digital Marketing Stratergy Excellence",
      date:"May 10, 2025",
      percent:"80",
    },

    {
      img:"./src/assets/productrmangemw.png",
      text:"AI & Machine Learning",
      span:"4 Hours",
      title:"Product Management Professional Plus",
      date:"January 15, 2025",
      percent:"54",
    }
  ];

  return (
    <section className='border-x-3 border-t-3 border-blue-500 rounded-t-2xl bg-sky-100 px-5 py-5'>
      <h4 className='text-3xl font-bold underline underline-offset-8 mb-8'>Pending Courses</h4>

      <div className='lg:grid grid-cols-3 gap-5 px-5'>
        {
          pendingcourse.map(function(course,key){
            return(
              <figure key={key} className='border rounded-xl overflow-hidden shadow mb-8'>
                <img src={course.img} className='w-full h-48' alt=""/>
                <figcaption className='border-t p-5 bg-white'>
                  <div className='flex justify-between mb-3'>
                  <h5 className='text-sm font-bold bg-green-400 p-2 rounded-full'>{course.text}</h5>
                  <p className='flex gap-1 items-center'><GoClock /><span>{course.span}</span></p>
                  </div>
                  <h4 className='h-12 text-xl font-bold mb-8'>{course.title}</h4>

                  <div className='flex justify-between items-center'>
                  <p className='text-slate-500'>{course.date}</p>
                  <p>{course.percent}%</p>
                  </div>
            <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 mt-2">
              <div className="bg-green-400 h-2 sm:h-3 rounded-full" style={{ width: `${course.percent}%` }}></div>
            </div>
            <div className='my-8 text-center'> 
              <button type='button' className='bg-blue-500 w-48 h-10 rounded-xl text-white'>Resume <i class="fa-solid fa-play text-xs"></i></button>
            </div>
          </figcaption>
        </figure>
            )
          })
        }
      </div>

    </section>
  )
}

export default PendingCourse
