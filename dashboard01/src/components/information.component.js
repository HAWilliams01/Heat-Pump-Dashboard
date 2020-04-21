import React, { Component } from 'react';

export default class Information extends Component {
    render() {
        return ( 
        <div>
        <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-colors-flat.css"></link>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>

            <body>
            <div align="center" className="w3-panel w3-card w3-round-large w3-card w3-flat-midnight-blue" display="inline-block">
                <div className="tile" align="left">
                    <h3>Project creator: Hunter Williams</h3>
                    <h4>Major: Computer Science B.S.</h4>
                    <h4>Minor: Mathematics</h4>
                    <h4>LinkedIn: <a href="https://www.linkedin.com/in/hunter-williams-indianatech/">https://www.linkedin.com/in/hunter-williams-indianatech</a></h4>
                    <br></br>
                    <p><strong>Purpose:</strong> This project includes web development and front end services, which are topics I am interested in and want to learn more about.
                       Creating this project is important to me because it applies to the real world and better prepares me post graduation. 
                    </p>
                    <br></br>
                    <p><strong>Project Thesis:</strong> Create a front-end dashboard to view the information about a newly installed heat pump on Indiana Tech’s campus. The dashboard collects data from a data logger and stores the data in a database. That data is then transferred over the intranet where it will propagate the dashboard, showing real-time displays of the heat pump data via tables and graphs.</p>                                       
                </div>
            </div>
            </body>

        </div>
        
        )
    }
}