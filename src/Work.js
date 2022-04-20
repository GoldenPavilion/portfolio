import React from 'react';

const Work = () => {
    return(
        <div className="work-history">
            <div className="card">
                <h3 className="card-title"><a href="www.storyblocks.com">Storyblocks</a></h3>
                <h5>Jan. 2015 - Jan. 2019</h5>
                <hr class="solid" />
                <h4>Senior Customer Service Manager</h4>
                <ul className="work-list">
                    <li className="work-list-item">Advised Engineering and Design teams on common user misconceptions during sign-up and payment process to optimize flow improvements pre-launch.</li>
                    <li className="work-list-item">Gathered data on bugs and UI inconsistencies to improve customer experience, reducing refunds by 17%.</li>
                    <li className="work-list-item">Developed training sessions and metrics for customer service team and coached individual team members on communication skills - increasing case resolution efficiency by 75%.</li>
                    <li className="work-list-item">Operated as primary escalation point for challenging customer cases, dispelling conflicts with empathy and consideration - increasing customer satisfaction by 12%. </li>
                </ul>
            </div>
            <div className="card">
                <h3 className="card-title"><a href="www.ikea.com">IKEA Baltimore</a></h3>
                <h5>Sept. 2011 - Jan. 2015</h5>
                <hr class="solid" />
                <h4>Self-Serve Coworker III</h4>
                <ul className="work-list">
                    <li className="work-list-item">Assisted customers with complex orders: verifying stock, explaining product details and arranging for delivery.</li>
                    <li className="work-list-item">Completed the nightly pick list, identifying space for incoming product and pulling items from the warehouse to ensure proper stocking and inventory.</li>
                    <li className="work-list-item">Built furniture and organized displays to promote specific products and offers.</li>
                    <li className="work-list-item">Collaborated with co-workers to redesign and renovate the warehouse space.</li>
                </ul>
            </div>
        </div>
    )
}

export default Work;