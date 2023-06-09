import './career.css'
import Image from 'next/image'


export const metadata = {
  title: 'Work Here',
  description: 'Lake House Bistro Employment Application',
}

function Career() {
  return (
    <>
      <div className="career border-[0.5px]">
        <h3 className="font-bold text-center text-xl py-6 mx-2">Lake House Bistro - Employment Application</h3> 
        <div className="flex flex-col gap-4 w-fit mx-auto ">
            <div className='flex justify-center items-center mx-auto  w-fit'>
                <Image src="/serversImage.jpg" alt="s" height={400} width={400} className='h-[150px]  md:h-[200px]  w-auto  border-2 shadow-md'/>
            </div>
            <form action="https://formsubmit.co/c60d6b50cbdecbe2c930c286a9425268" method="POST" encType="multipart/form-data"
               className="flex flex-col gap-2 md:gap-5 p-6"
            >
                

                <fieldset >
                    <legend className="title">Name </legend>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-8">
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
                <fieldset className="flex gap-2 md:gap-8 flex-col md:flex-row">
                    
                    <label>
                        <legend className="title">Phone </legend>
                        <input type="tel" name="phone" maxLength={10} pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required />
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
                        <textarea className=" w-[320px] md:w-[600px] h-[120px] p-2" name="Their Message"></textarea>
                      
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