import React from 'react'
import {useSelector} from "react-redux";


export const CompleteACourse = () => {
  const {user} = useSelector((state) => state.user);
    const {course} = useSelector((state) => state.course)
  return (
    <div>
        <h1>
        congratulations {user.name}
        </h1>
        <h3>Complete {course.name}</h3>
    </div>
  )
}
