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
                    <iframe width="800" height="500" title="heatPumpTable" align="center"
                    src="https://liveindianatech-my.sharepoint.com/personal/lrodriguesb01_indianatech_net/_layouts/15/Doc.aspx?sourcedoc={d6f92ca9-7c4c-4cf9-9f7d-7469b189badc}&action=embedview&wdAllowInteractivity=False&ActiveCell='Data'!A2&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True&wdInConfigurator=True&wdDownloadButton=False&wdHideSheetTabs=True&wdbipreview=True"></iframe>
                    </div>
                    <br></br>
                </div>
                

                <div align="center" className="w3-panel w3-card w3-round-large w3-card w3-flat-midnight-blue" display="inline-block">
                    <div className="tile">
                    <div>
                    <iframe width="400" height="805" title="heatEnthalpyPoints" align="left"
                    src="https://liveindianatech-my.sharepoint.com/personal/lrodriguesb01_indianatech_net/_layouts/15/Doc.aspx?sourcedoc={d6f92ca9-7c4c-4cf9-9f7d-7469b189badc}&action=embedview&wdAllowInteractivity=False&ActiveCell='Iteration'!B2&wdHideGridlines=True&wdHideHeaders=True&wdInConfigurator=True&wdDownloadButton=False&wdHideSheetTabs=True&wdbipreview=True"></iframe>
                    </div>

                    <div>
                    <iframe width="600" height="600" title="heatEnthalpyGraph" align="right" 
                    src="https://liveindianatech-my.sharepoint.com/personal/lrodriguesb01_indianatech_net/_layouts/15/Doc.aspx?sourcedoc={d6f92ca9-7c4c-4cf9-9f7d-7469b189badc}&action=embedview&wdAllowInteractivity=False&ActiveCell='Plot'!A4&wdHideGridlines=True&wdHideHeaders=True&wdInConfigurator=True&wdInConfigurator=True&wdDownloadButton=False&wdHideSheetTabs=True&wdbipreview=True"></iframe>
                    </div>
                    <br></br>
                    </div>
                </div>

                <div align="center" className="w3-panel w3-card w3-round-large w3-flat-midnight-blue" display="inline-block">
                    <div className="tile">
                    <iframe width="800" height="750" title="Tempatures/Pressures"
                    src="https://liveindianatech-my.sharepoint.com/personal/lrodriguesb01_indianatech_net/_layouts/15/Doc.aspx?sourcedoc={d6f92ca9-7c4c-4cf9-9f7d-7469b189badc}&action=embedview&wdAllowInteractivity=False&ActiveCell='Plot'!S4&wdHideGridlines=True&wdHideHeaders=True&wdInConfigurator=True&wdInConfigurator=True&wdDownloadButton=False&wdHideSheetTabs=True&wdbipreview=True"></iframe>
                    </div>
                </div>

            </body>
        </div>    

            
        )
    }
}