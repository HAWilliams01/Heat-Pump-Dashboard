import React, { Component } from 'react';
import "../home-component.css";

//add ItemName property in iframe

export default class Information extends Component {
    render() {
        return (
        <div>
        <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-colors-flat.css"></link>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
            <body>
                <div align="center" className="w3-panel w3-card w3-round-large w3-flat-midnight-blue" display="inline-block">
                    <div className="tile">
                    <iframe width="800" height="500" title="heatPumpTable"
                    src="https://liveindianatech-my.sharepoint.com/personal/hawilliams01_indianatech_net/_layouts/15/Doc.aspx?sourcedoc={3ff656d1-1ee5-4abd-823b-b00db408e1b9}&action=embedview&wdAllowInteractivity=False&ActiveCell='Data'!B2&wdHideGridlines=True&wdHideHeaders=True&wdInConfigurator=True&wdDownloadButton=False&wdHideSheetTabs=True&wdbipreview=True"></iframe>
                    
                    </div>
                    <br></br>
                </div>
                

                <div align="center" className="w3-panel w3-card w3-round-large w3-card w3-flat-midnight-blue" display="inline-block">
                    <div className="tile">
                    <div>
                    <iframe width="400" height="805" title="heatEnthalpyPoints" align="left"
                    src="https://liveindianatech-my.sharepoint.com/personal/hawilliams01_indianatech_net/_layouts/15/Doc.aspx?sourcedoc={3ff656d1-1ee5-4abd-823b-b00db408e1b9}&action=embedview&wdAllowInteractivity=False&ActiveCell='Iteration'!B2&wdHideGridlines=True&wdHideHeaders=True&wdInConfigurator=TruewdDownloadButton=False&wdHideSheetTabs=True&wdbipreview=True"></iframe>
                    </div>

                    <div>
                    <iframe width="600" height="600" title="heatEnthalpyGraph" align="right"
                    src="https://liveindianatech-my.sharepoint.com/personal/hawilliams01_indianatech_net/_layouts/15/Doc.aspx?sourcedoc={3ff656d1-1ee5-4abd-823b-b00db408e1b9}&action=embedview&wdAllowInteractivity=False&ActiveCell='Plot'!A4&wdHideGridlines=True&wdHideHeaders=True&wdInConfigurator=True&wdDownloadButton=False&wdHideSheetTabs=True&wdbipreview=True"></iframe>
                    </div>
                    <br></br>
                    </div>
                </div>

                <div align="center" className="w3-panel w3-card w3-round-large w3-flat-midnight-blue" display="inline-block">
                    <div className="tile">
                    <iframe width="800" height="750" title="Pressures/Tempatures"
                    src="https://liveindianatech-my.sharepoint.com/personal/hawilliams01_indianatech_net/_layouts/15/Doc.aspx?sourcedoc={3ff656d1-1ee5-4abd-823b-b00db408e1b9}&action=embedview&wdAllowInteractivity=False&ActiveCell='Plot'!W4&wdHideGridlines=True&wdHideHeaders=True&wdInConfigurator=True&wdDownloadButton=False&wdHideSheetTabs=True&wdbipreview=True"></iframe>
                    </div>
                </div>

            </body>
        </div>    

            
        )
    }
}