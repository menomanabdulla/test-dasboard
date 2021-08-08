import React from 'react';

import CourseFilter from '../CourseFilter';
import CourseCard from '../CourseCard';

import MainContentWrapper from './mainContent.style';
interface Props{}

const MainContent: React.FC<Props> = ({
}) => {
    return (
        <MainContentWrapper>
            <header>
                <h4>Courses</h4>
                <CourseFilter />
            </header>
            <div className="course--list">
                <CourseCard />
            </div>
        </MainContentWrapper>
    )
}

export default MainContent;