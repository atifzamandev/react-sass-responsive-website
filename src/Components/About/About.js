import React, { useState } from 'react'

const About = () => {
    const [section, setSection] =useState([
        {id: 1, icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-bullseye" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
        <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
        </svg>, heading:"Digital Marketing", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in felis ac nibh imperdiet pretium nec id risus. Sed facilisis id sem sit amet commodo"},
        {id: 2, icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
        <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
      </svg>, heading: "Web and App Development", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in felis ac nibh imperdiet pretium nec id risus. Sed facilisis id sem sit amet commodo"},
      {id: 3, icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-magic" viewBox="0 0 16 16">
      <path d="M9.5 2.672a.5.5 0 1 0 1 0V.843a.5.5 0 0 0-1 0v1.829Zm4.5.035A.5.5 0 0 0 13.293 2L12 3.293a.5.5 0 1 0 .707.707L14 2.707ZM7.293 4A.5.5 0 1 0 8 3.293L6.707 2A.5.5 0 0 0 6 2.707L7.293 4Zm-.621 2.5a.5.5 0 1 0 0-1H4.843a.5.5 0 1 0 0 1h1.829Zm8.485 0a.5.5 0 1 0 0-1h-1.829a.5.5 0 0 0 0 1h1.829ZM13.293 10A.5.5 0 1 0 14 9.293L12.707 8a.5.5 0 1 0-.707.707L13.293 10ZM9.5 11.157a.5.5 0 0 0 1 0V9.328a.5.5 0 0 0-1 0v1.829Zm1.854-5.097a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L8.646 5.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0l1.293-1.293Zm-3 3a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L.646 13.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0L8.354 9.06Z"/>
    </svg>, heading:"Graphic Design", text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in felis ac nibh imperdiet pretium nec id risus. Sed facilisis id sem sit amet commodo"}
    ])
  return (
    <div className='about'>
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <h4 className="about__h4">Who we are?</h4>
                </div>
                <div className="col-9">
                    <div className="about__text">
                        <p>Nullam auctor faucibus tellus, vehicula condimentum lectus eleifend laoreet. Praesent in dolor eget nulla venenatis congue. Praesent vitae nunc a mi finibus efficitur. Etiam nisl neque, condimentum viverra pretium vel, mattis ac felis. Curabitur ut bibendum enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut ac risus nec risus pulvinar blandit vitae at dolor. Fusce non pulvinar magna, eu convallis augue. Integer in posuere ex, eget ullamcorper dolor. Morbi sit amet nibh et ante faucibus tincidunt. Mauris posuere nunc efficitur ante posuere, id malesuada est finibus. Cras ligula mi, egestas vitae nulla id, sodales ullamcorper ligula. Quisque accumsan risus eu rhoncus maximus. Nam tristique ligula id leo condimentum, ut facilisis lorem facilisis. Ut fringilla pulvinar commodo.</p>
                    </div>
                </div>
            </div>
            <div className="row mt-60">
                {section.map(section=>(
                         <div className="col-4 pl-15" key={section.id}>
                         <div className="about__section">
                             <div className="about__section-icon">{section.icon}</div>
                             <div className="about__section-heading">
                                 <h6>{section.heading}</h6>
                             </div>
                             <div className="about__section-text"><p>{section.text}</p></div>
                         </div>
                     </div>
                ))}
       
        </div>
        </div>
    </div>
  )
}

export default About