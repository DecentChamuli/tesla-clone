import React from 'react'
import Sections from './Sections'

function Home() {
    return (
        <div>
            <Sections
                title="Model S"
                leftBtnlink="#1-l"
                rightBtnlink="#1-r"
                descriptionTextRight="Touchless Delivery"
                descriptionlink="#model-s"
                descriptionTextLeft="Order Online for"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Sections
                title="Model Y"
                leftBtnlink="#2-l"
                rightBtnlink="#2-r"
                descriptionTextRight="Touchless Delivery"
                descriptionlink="#model-y"
                descriptionTextLeft="Order Online for"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Sections
                title="Model 3"
                leftBtnlink="#3-l"
                rightBtnlink="#3-r"
                descriptionTextRight="Touchless Delivery"
                descriptionlink="#model-3"
                descriptionTextLeft="Order Online for"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Sections
                title="Model X"
                leftBtnlink="#4-l"
                rightBtnlink="#4-r"
                descriptionTextRight="Touchless Delivery"
                descriptionlink="#model-x"
                descriptionTextLeft="Order Online for"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Sections
                title="Solar Panels"
                leftBtnlink="#5-l"
                rightBtnlink="#5-r"
                descriptionTextRight=""
                descriptionlink=""
                descriptionTextLeft="Lowest Cost Solar Panels in America"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />
            <Sections
                title="Solar Roof"
                leftBtnlink="#6-l"
                rightBtnlink="#6-r"
                descriptionTextRight=""
                descriptionlink=""
                descriptionTextLeft="Produce Clean Energy From Your Roof"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />
        </div>
    )
}

export default Home
