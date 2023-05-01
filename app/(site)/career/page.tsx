import React from 'react'

function Career() {
  return (
    <>
        <div>
        <p><strong>Lake House Bistro - Employment Application</strong></p> 
        <div className="form-container">
        
            <form action="https://formsubmit.co/c60d6b50cbdecbe2c930c286a9425268" method="POST" encType="multipart/form-data">
                

                <fieldset>
                    <legend className="title">Name *</legend>
                    <div className="name-section">
                       <label>
                       <input type="text" name="name" required />
                       <p className="caption-text">First </p> 
                       </label>
                    
                        <label>
                        <input type="text" name="last" required />
                        <p className="caption-text">Last</p>
                       </label> 
                    </div>
                </fieldset> 

                    <legend className="title">Phone *</legend>
                    <label>
                        <input type="tel" name="phone" maxLength={10} pattern="[0-9]{3}[0-9]{3}[0-9]{4}"required />
                        <p className="caption-text">(format xxxxxxxxxx)</p>
                    </label>

                    <legend className="title">Email *</legend>
                    <label>
                        <input type="email" name="email"  required />
                    </label>
                 
                <fieldset className="position-section">
                    <legend className="title">Position Applying For: *</legend>
                    <ul className="checkbox"  >
                        <label><li><input type="checkbox" name="position" value="server" /><span className="box">Server</span></li></label>
                        <label><li><input type="checkbox" name="position" value="host" /><span className="box">Host</span></li></label>
                        <label><li><input type="checkbox" name="position" value="busser" /><span className="box">Busser</span></li></label>
                        <label><li><input type="checkbox" name="position" value="dishwasher" /><span className="box">Dishwasher</span></li></label>
                        <label><li><input type="checkbox" name="position" value="cook" /><span className="box">Cook</span></li></label>
                        <label><li><input type="checkbox" name="position" value="bartender" /><span className="box">Bartender</span></li></label>
                        <label><li><input type="checkbox" name="position" value="foodrunner" /><span className="box">Food Runner</span></li></label>
       
                    </ul>
                </fieldset> 
                     


                <fieldset className="textarea-section" name="textarea">
                     <legend className="title">What is your availability Monday-Saturday?</legend>

                    <label>
                        <div className="description">Days you can work as well as if you are looking for part-time or full-time work.</div>
                        <textarea className="field-element " name="Their Message"></textarea>
                      
                    </label>
                
                    <legend className="title">Upload your resume</legend>
                    <label>
                        <p className="caption-text">If you have a resume, we would love to see it. Accepted file types: pdf </p>
                        <input type="file" name="attachment" accept=".pdf" />
                    </label>
                </fieldset>
                  
                 <div className="">
                    <button id="submit" type="submit">SUBMIT</button>
                 </div>
                  
           </form>
        </div>
    
        </div>
    </>
  )
}

export default Career