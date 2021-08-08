import React, { useContext } from 'react';
import { Link, BrowserRouter as Router, } from "react-router-dom";
import { observer } from 'mobx-react'
import { toJS } from 'mobx'
import { MyStore } from '../../store';

import CourseFilterWrapper from './courseFilter.style';

const CourseFilter = observer(() => {
    const Store = useContext(MyStore);
    const { dataForParent } = Store;
    const MyData = toJS(dataForParent);
    
    return (
        <CourseFilterWrapper>
            {
            MyData !== undefined ? 
                <Router>
                    <ul>
                        {
                            MyData[0].categories.map((item, index) => 
                                <li key={index}>
                                    <Link to={'/'+item}>{item}</Link>
                                </li>
                            )
                        }
                    </ul>
                </Router> 

                :

                <h4>Loading..</h4> 
            }
            
        </CourseFilterWrapper>
    )
})

export default CourseFilter;