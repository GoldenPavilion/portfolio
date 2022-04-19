import React from 'react';

const Work = () => {
    return(
        <div className="work-history">
            <div className="card">
                <h3 className="card-title"><a href="www.storyblocks.com">Storyblocks</a></h3>
                <h5>Jan. 2015 - Jan. 2019</h5>
                <h4>Senior Customer Service Manager</h4>
                <ul className="work-list">
                    <li className="work-list-item">Advised Engineering and Design teams on common user misconceptions during sign-up and payment process to optimize flow improvements pre-launch.</li>
                    <li className="work-list-item">Gathered data on bugs and UI inconsistencies to improve customer experience, reducing refunds by 17%.</li>
                    <li className="work-list-item">Developed training sessions and metrics for customer service team and coached individual team members on communication skills - increasing case resolution efficiency by 75%.</li>
                    <li className="work-list-item">Operated as primary escalation point for challenging customer cases, dispelling conflicts with empathy and consideration - increasing customer satisfaction by 12%. </li>
                </ul>
            </div>
        </div>
    )
}

export default Work;