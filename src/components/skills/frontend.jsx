import React from "react";

const FrontEnd = () =>{
    return(
       <div className="skills_content">
        <h3 className="skills_title">Web Developer</h3>
        <div className="skills_box">
            <div className="skills_group"> 
            
            <div className="skills_data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills_name">HTML</h3>
                    {/* <spam className="skills_level">Advanced</spam> */}
                </div>
            </div>

            <div className="skills_data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills_name">CSS</h3>
                    {/* <spam className="skills_level">Advanced</spam> */}
                </div>
            </div>


            <div className="skills_data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills_name">Javascript</h3>
                    {/* <spam className="skills_level">Advanced</spam> */}
                </div>
            </div>



            </div>

{/* another skill grooup */}

<div className="skills_group"> 
            
            <div className="skills_data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills_name">React</h3>
                    {/* <spam className="skills_level">Intermediate</spam> */}
                </div>
            </div>

            <div className="skills_data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills_name">Bootstrap</h3>
                    {/* <spam className="skills_level">Intermediate</spam> */}
                </div>
            </div>


            <div className="skills_data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills_name">Wordpress</h3>
                    {/* <spam className="skills_level">Advanced</spam> */}
                </div>
            </div>



            </div>
        </div>
       </div>
    )
}
export default FrontEnd;