import React from "react";
import CollapsibleMenu from "./CollapsibleMenu";

const categories = 
[
    {
    title: "Exam wise Books",
    items: [
        "APPSC Books",
        "TGPSC Books",
        "APSLPRB Books",
        "TGPSLPRB Books",
        "UPSC Books",
        "RRB Books",
        "SSC–CGL",
        "DSC–TET"
    ]
},
  { title: "Publication wise Books" ,
    items:[
        "S. Chand Publications",
        "Arihant Publications",
        "Tata McGraw-Hill (TMH)",
        "NCERT Books",
        "Oswaal Books",
        "Spectrum Publications",
        "Kiran Prakashan"
    ]
},
  { title: "Subject wise Books",
    items:[
        "General Knowledge",
        "General Science",
        "History & Polity",
        "Economics",
        "Geography",
        "Environmental Science",
        "Current Affairs",
        "Reasoning & Aptitude"
    ]
},
  { title: "Telugu Academy Books" ,
    items: [
      "6th to 10th Class Telugu Academy",
      "Intermediate Telugu Academy",
      "Degree Telugu Academy",
      "Telugu Academy Question Banks",
      "Language & Literature Books"
    ]
},
  { title: "English Grammar Books" ,
    items: [
      "Wren and Martin",
      "High School English Grammar",
      "Spoken English Books",
      "Vocabulary Builder",
      "English Comprehension",
      "Tense & Sentence Correction"
    ]
},
  { title: "Asthmatic/Math's",
    items: [
      "Arithmetic for Competitive Exams",
      "Quantitative Aptitude by R.S. Aggarwals",
      "Vedic Maths",
      "Maths Shortcuts for Exams",
      "Algebra / Trigonometry / Geometry"
    ]
},
  { title: "B.ED./M.ED/D.ED/DLED" ,
    items: [
      "Teaching Methods",
      "Psychology of Learning",
      "Curriculum Development",
      "Pedagogy of English / Math / Science",
      "Child Development & Education",
      "School Management Books"
    ]
},
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-title">All Categories</div>
      {categories.map((cat, index) => (
        <CollapsibleMenu key={index} title={cat.title} items={cat.items} />
      ))}
    </div>
  );
};

export default Sidebar;
