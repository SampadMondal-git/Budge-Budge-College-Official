import React from 'react'
import myStyles from './wastemanagement.module.css'
export function Wastemanagement() {
    return (
        <>
            <div class={myStyles.container}>
                <h2 class={myStyles.section_title}>Waste Management</h2>
                <div class={myStyles.grid}>
                    <div class={myStyles.card}>
                        <h3>Waste Management Overview</h3>
                        <div class={`${myStyles.point} ${myStyles.highlight}`}>Proper waste management ensures health safety and environmental conservation</div>
                        <div class={myStyles.point}>
                            <span class={myStyles.highlight}>Four Primary Waste Categories:</span>
                            <ul class={myStyles.equipment_list}>
                                <li>Liquid/Chemical Waste (Science Labs)</li>
                                <li>Organic Waste (Food & Biology Labs)</li>
                                <li>E-Waste (Computer Labs & Electronics)</li>
                                <li>Solid Waste (General Campus)</li>
                            </ul>
                        </div>
                    </div>

                    <div class={myStyles.card}>
                        <h3>Waste Handling Procedures</h3>
                        <div class={myStyles.point}>
                            <span class={myStyles.highlight}>Chemical Waste:</span>
                            Safe drainage system with proper neutralization
                        </div>
                        <div class={myStyles.point}>
                            <span class={myStyles.highlight}>Organic Waste:</span>
                            Composting for garden manure + municipal disposal
                        </div>
                        <div class={myStyles.point}>
                            <span class={myStyles.highlight}>E-Waste:</span>
                            Special segregation and certified disposal
                        </div>
                        <div class={myStyles.point}>
                            <span class={myStyles.highlight}>Solid Waste:</span>
                            <ul class={myStyles.equipment_list}>
                                <li>Daily campus cleaning</li>
                                <li>Recyclable/non-recyclable segregation</li>
                                <li>Municipal corporation collaboration</li>
                            </ul>
                        </div>
                    </div>

                    <div class={myStyles.card}>
                        <h3>Sustainability Measures</h3>
                        <div class={`${myStyles.point} ${myStyles.highlight}`}>Enhanced recycling through proper segregation</div>
                        <div class={myStyles.point}>Reduced health risks through hazardous waste management</div>
                        <div class={myStyles.point}>Organic waste conversion to natural compost</div>
                        <div class={myStyles.point}>E-waste partnership with certified recyclers</div>
                        <div class={`${myStyles.point} ${myStyles.highlight}`}>Contribution to UN Sustainable Development Goals</div>
                    </div>
                </div>
            </div>
        </>
    )
}
