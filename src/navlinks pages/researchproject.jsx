import React from 'react'
import myStyles from './researchproject.module.css'

export function Researchproject() {
    return (
        <>
            <div className={myStyles.container}>
                <h2 className={myStyles.section_title}>Research Projects</h2>

                <div className={myStyles.grid}>
                    <div className={myStyles.card}>
                        <h3><span className={myStyles.project_number}>1</span> Microbial Biodiversity</h3>
                        <div className={myStyles.point}>
                            <p>UGC Minor Research Project</p>
                            <p><span className={myStyles.highlight}>Researcher:</span> Dr. Partha Pratim Chaudhuri (Zoology)</p>
                            <p><span className={myStyles.highlight}>Duration:</span> IXth - 10th Plan</p>
                        </div>
                        <div className={myStyles.point}>
                            <p><span className={myStyles.highlight}>Project Title:</span> Biodiversity of microbial fauna with special reference to human parasitic protozoan present in surface and ground water of Calcutta and adjoining region</p>
                        </div>
                    </div>

                    <div className={myStyles.card}>
                        <h3><span className={myStyles.project_number}>2</span> Body Studies</h3>
                        <div className={myStyles.point}>
                            <p>UGC XIth Plan MRP <span className={myStyles.highlight}>(Rs 1,14,000)</span></p>
                            <p><span className={myStyles.highlight}>Researcher:</span> Dr. Kakali Ghoshal (Philosophy)</p>
                            <p><span className={myStyles.highlight}>Duration:</span> 2009-2011</p>
                        </div>
                        <div className={myStyles.point}>
                            <p><span className={myStyles.highlight}>Project Title:</span> Body, the Miracle Underneath</p>
                        </div>
                    </div>

                    <div className={myStyles.card}>
                        <h3><span className={myStyles.project_number}>3</span> Metaphysical Implications</h3>
                        <div className={myStyles.point}>
                            <p>UGC Minor Research Project <span className={myStyles.highlight}>(Rs 1,04,000)</span></p>
                            <p><span className={myStyles.highlight}>Researcher:</span> Dr. Kakali Ghoshal (Philosophy)</p>
                            <p><span className={myStyles.highlight}>Duration:</span> 2012-2014</p>
                        </div>
                        <div className={myStyles.point}>
                            <p><span className={myStyles.highlight}>Project Title:</span> Redefining the Universe: Some Metaphysical Implications</p>
                        </div>
                    </div>

                    <div className={myStyles.card}>
                        <h3><span className={myStyles.project_number}>4</span> Pollen Analysis</h3>
                        <div className={myStyles.point}>
                            <p>UGC Minor Research Project <span className={myStyles.highlight}>(Rs 4,45,000)</span></p>
                            <p><span className={myStyles.highlight}>Researcher:</span> Dr. Debashis Upadhyay (Botany)</p>
                            <p><span className={myStyles.highlight}>Duration:</span> 2 Years</p>
                        </div>
                        <div className={myStyles.point}>
                            <p><span className={myStyles.highlight}>Project Title:</span> Pollen Analysis and Antibacterial Activity of Natural Unifloral Honeys From Coastal Orissa, India</p>
                        </div>
                    </div>

                    <div className={myStyles.card}>
                        <h3><span className={myStyles.project_number}>5</span> IPO & SEO Performance</h3>
                        <div className={myStyles.point}>
                            <p>UGC Minor Research Project <span className={myStyles.highlight}>(Rs 2,50,000)</span></p>
                            <p><span className={myStyles.highlight}>Researcher:</span> Dr. Gautam Das (Commerce)</p>
                        </div>
                        <div className={myStyles.point}>
                            <p><span className={myStyles.highlight}>Project Title:</span> The Aftermarket Performance of Initial Public Offerings (IPOS) and Seasoned Equity Offerings (SEOS) In India: An Event Study Based Approach</p>
                        </div>
                    </div>

                    <div className={myStyles.card}>
                        <h3><span className={myStyles.project_number}>6</span> Indian Psyche</h3>
                        <div className={myStyles.point}>
                            <p>UGC Minor Research Project <span className={myStyles.highlight}>(Rs 2,45,000)</span></p>
                            <p><span className={myStyles.highlight}>Researcher:</span> Dr. Sushmita Bhowmik (Philosophy)</p>
                        </div>
                        <div className={myStyles.point}>
                            <p><span className={myStyles.highlight}>Project Title:</span> Journey Into The Indian Psyche: A psychological Approach</p>
                        </div>
                    </div>

                    <div className={myStyles.card}>
                        <h3><span className={myStyles.project_number}>7</span> Non-Simple Liquids</h3>
                        <div className={myStyles.point}>
                            <p>UGC Minor Research Project</p>
                            <p><span className={myStyles.highlight}>Researcher:</span> Dr. Anup Kumar Sahoo (Physics)</p>
                        </div>
                        <div className={myStyles.point}>
                            <p><span className={myStyles.highlight}>Project Title:</span> Study of some non simple liquids, India</p>
                        </div>
                    </div>

                    <div className={myStyles.card}>
                        <h3><span className={myStyles.project_number}>8</span> Maternal Malnutrition</h3>
                        <div className={myStyles.point}>
                            <p>ICSSR Minor Research Project <span className={myStyles.highlight}>(Rs 50,000)</span></p>
                            <p><span className={myStyles.highlight}>Researcher:</span> Dr. Shruti Agrawal (Food & Nutrition)</p>
                            <p><span className={myStyles.highlight}>Completed:</span> Feb 2019</p>
                        </div>
                        <div className={myStyles.point}>
                            <p><span className={myStyles.highlight}>Project Title:</span> Maternal malnutrition and low birth weight</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
