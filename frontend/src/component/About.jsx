import React from 'react'
import aboutAnimation from "../assets/about.gif"
import taskAnimation from "../assets/main.gif"
function About() {
  return (
    <>
      <div className="about_heading">
        <h1>E-NoteBook</h1>
        <img src={aboutAnimation} alt="about" />
      </div>

      <div className="about_description">
        <p><span>E-NoteBook</span> is your personal, secure workspace in the cloud — built for clarity, speed, and control.
          Designed for modern productivity, Secure Notebook allows you to create, organize, and manage your notes from any
          device, anywhere in the world. With secure login and account-based access, your data stays protected and always within
          reach.</p>
      </div>
      <div className='taskAnimation'>
        <img src={taskAnimation} alt="task" />
      </div>
      <div className="about_content">
        <div className="about_sub_heading">
          <h4>✨ What We Offer</h4>
          <div className="about_sub_heading_description" style={{backgroundColor:"#e8d4d4"}}>
            <p><span>Secure Login & Signup</span> - Personal accounts to keep your data private and protected.</p>
            <p><span>Cloud-Based Access</span> - Access your notes anytime, from any device.</p>
            <p><span>Smart Organization</span> - Filter notes by tags and priority (Low, Medium, High).</p>
            <p><span>Full Note Management</span> - Personal accounts to keep your data private and protected.</p>
            <p><span>Priority Focus System</span> - Stay productive by identifying what matters most.</p>
          </div>
        </div>

         <div className="about_sub_heading">
          <h4>🚀 Objective</h4>
          <div className="about_sub_heading_description" style={{backgroundColor:"#d5e8ef"}}>
            <p>E-NoteBook aims to combine user-friendly design with strong backend architecture, enabling secure,
             device-independent access to personal notes while maintaining performance and scalability standards.</p>
          </div>
        </div>


        <div className="about_sub_heading">
          <h4>🎯 Our Mission</h4>
          <div className="about_sub_heading_description" style={{backgroundColor:"#c0e2ce"}}>
            <p>To provide a secure, simple, and powerful cloud notebook that helps individuals stay organized without compromising privacy.</p>
          </div>
        </div>

        <div className="about_sub_heading">
          <h4>🌍 Our Vision</h4>
          <div className="about_sub_heading_description" style={{backgroundColor:"#f6efd1"}}>
            <p>We aim to build a reliable digital companion that empowers users to manage ideas,
              tasks, and information seamlessly across devices — securely and efficiently.</p>
            <p><span>Secure. Accessible. Organized.</span></p>
          </div>
        </div>

       






      </div>

    </>
  )
}

export default About