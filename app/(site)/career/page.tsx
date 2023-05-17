import './career.css'

function Career() {
  return (
    <>
        <div className="career border-[0.5px] border-yellow-500 ">
        <h3 className="font-bold text-center text-xl py-4">Lake House Bistro - Employment Application</h3> 
        <div className="sm:w-fit sm:mx-auto  md:mx-6 ">
        
            <form action="https://formsubmit.co/c60d6b50cbdecbe2c930c286a9425268" method="POST" encType="multipart/form-data"
               className="flex flex-col gap-5"
            >
                

                <fieldset>
                    <legend className="title">Name </legend>
                    <div className="flex gap-8">
                       <label>
                       <input type="text" name="name" required />
                       <p className="italic font-thin">First </p> 
                       </label>
                    
                        <label>
                        <input type="text" name="last" required />
                        <p className="italic font-thin">Last</p>
                       </label> 
                    </div>
                </fieldset> 
                <fieldset className="flex gap-8">
                    
                    <label>
                        <legend className="title">Phone </legend>
                        <input type="tel" name="phone" maxLength={10} pattern="[0-9]{3}[0-9]{3}[0-9]{4}"required />
                        {/* <p className="caption-text">(format xxxxxxxxxx)</p> */}
                    </label>

                    
                    <label>
                        <legend className="title">Email </legend>
                        <input type="email" name="email"  required />
                    </label>                    
                </fieldset>

                 
                <fieldset className="w-fit">
                    <legend className="title">Position applying for:</legend>
                    <ul   >
                        <label><li><input type="checkbox" name="position" value="server" /><span className="box">Server</span></li></label>
                        <label><li><input type="checkbox" name="position" value="host" /><span className="box">Host</span></li></label>
                        <label><li><input type="checkbox" name="position" value="busser" /><span className="box">Busser</span></li></label>
                        <label><li><input type="checkbox" name="position" value="dishwasher" /><span className="box">Dishwasher</span></li></label>
                        <label><li><input type="checkbox" name="position" value="cook" /><span className="box">Cook</span></li></label>
                        <label><li><input type="checkbox" name="position" value="bartender" /><span className="box">Bartender</span></li></label>
                        <label><li><input type="checkbox" name="position" value="foodrunner" /><span className="box">Food Runner</span></li></label>
       
                    </ul>
                </fieldset> 
                     


                <fieldset className="space-y-6" name="textarea">
                     

                    <label>
                        <legend className="title">What is your availability Monday-Saturday?</legend>
                        <div className="italic font-thin">Days you can work as well as if you are looking for part-time or full-time work.</div>
                        <textarea className=" sm:w-[400px] md:w-[600px] h-[120px] p-2" name="Their Message"></textarea>
                      
                    </label>
                
                    
                    <label>
                        <legend className="title">Upload your resume</legend>
                        <p className="italic font-thin">If you have a resume, we would love to see it. Accepted file types: pdf </p>
                        <input type="file" name="attachment" accept=".pdf" className='border-none hover:border-none' />
                    </label>
                </fieldset>
                  
                 <div className="">
                    <button id="submit" type="submit" className='outline-none '>SUBMIT</button>
                 </div>
                  
           </form>
        </div>
    
        </div>
    </>
  )
}

export default Career