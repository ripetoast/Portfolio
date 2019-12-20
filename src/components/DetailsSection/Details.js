import React from "react";
import DetailBox from "./DetailBox";

const Details = () => {
    return (
      <div>
        <div className="row justify-content-center justify-content-lg-between">
          <div>

          </div>
          <DetailBox 
            icon="graduation-cap" 
            title="Passion for learning new things"
            text="I like to equip myself with the knowledge of solving problems using many technologies, including different libraries and packages. Keeping up with new techniques for maintaining efficient and well documented code is a must! I also enjoy expanding my skillset to using all kinds of digital programs, including the Adobe CC suite. If the job requires a skill that I am unfamiliar with, I will happily learn it."
          />
          <DetailBox 
            icon="palette"
            title="Keen Designer"
            text="I also have a big interest in User Interface and User experience design. I enjoy sketching prototypes of all my projects in OneNote and identify current UI trends amongst certain age groups. I always ensure that I am applying laws of UX design when making choices for navigation, fonts, colour, layout etc."
          />
          <DetailBox 
            icon="code" 
            title="Coder"
            text="I am versatile when it comes to coding. I adapt well when switching to different coding languages and can apply them effectively whether it be backend development or frontend. I am very conscious when using appropriate data structures and algorithms as I aim to deliver workable products that can run on any machine."
          />
          <DetailBox 
            icon="users" 
            title="Good at communicating"
            text="As a former lead designer at CUB Magazine, I am used to conveying my ideas, instructing team members and establishing deadlines. It is important to always be prepared and be well organised, so that all projects are completed on time at the highest quality. Additionally, I take feedback extremely well, as I strive for self-improvement."
          />

        </div>
      </div>
    );
};

export default Details;