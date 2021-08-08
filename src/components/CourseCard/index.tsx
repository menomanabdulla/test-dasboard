import React, { useContext }  from 'react';
import { FaPlay } from "react-icons/fa";

import { observer } from 'mobx-react'
import { toJS } from 'mobx'
import { MyStore } from '../../store';

import CourseCardWrapper from './courseCard.style';

import CourseCardThumb from '../../assets/images/thumb-01.png'


const CourseCard = observer(() => {
    const Store = useContext(MyStore);
    const { dataForParent } = Store;
    const MyData = toJS(dataForParent);

    let result: any[] = [];

    if(MyData !== undefined){
        for(let i = 0; i <= MyData[1].minutes.length -1 ; i++){
            let obj = {
                courseName: MyData[2].blocks[i],
                courseMinutes: MyData[1].minutes[i].time
            }
            result.push(obj)
        }
    }
    
    return (
        <>
        {
            MyData !== undefined ? 
                result.map((item, index) => 
                <CourseCardWrapper key={index}>
                    <img src={CourseCardThumb} alt="" />
                    <div className="course--info">
                        <h5>{item.courseName}</h5>
                        <p>24 lessons</p>
                    </div>
                    <span className="course--duration">
                        {item.courseMinutes} min
                    </span>
                    <span className="course--play--btn">
                        <FaPlay />
                    </span>
                </CourseCardWrapper>
                )
            :

            <h4>Loading..</h4> 
           
        }
        </>
    )
})

export default CourseCard;