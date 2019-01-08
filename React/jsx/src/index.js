// import react and reactDOM library

import React from 'react';
import ReactDOM from 'react-dom'

import faker from'faker'

import CommentDetail from './CommenDetail'
import ApprovalCard from './ApprovalCard'

// creat react component
const App = () => {

    return (
        <div className='ui container comments'>
            <ApprovalCard>
                <CommentDetail 
                    imageSrc = {faker.image.avatar()}
                    author = {faker.name.findName()}
                    timeAgo= {faker.date.weekday()} 
                    content= {faker.random.words()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    imageSrc = {faker.image.avatar()}
                    author = {faker.name.findName()}
                    timeAgo= {faker.date.weekday()} 
                    content= {faker.random.words()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    imageSrc = {faker.image.avatar()}
                    author = {faker.name.findName()}
                    timeAgo= {faker.date.weekday()} 
                    content= {faker.random.words()}
                />
            </ApprovalCard>

        </div>
    );
};

// take react component and show on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);