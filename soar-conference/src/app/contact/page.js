'use client'

export default function Contact(){
  return(
    <section className="relative w-full bg-[image:url(/background.png)] bg-repeat bg-center pt-20" >
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl text-center text-white">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-300 sm:text-xl">Have a question about SOAR 2025? Want to send feedback about any imrpovements? Need details about the Conference? Let us know.</p>
        <form  action="mailto:bhavyapatelca@gmail.com" method="post" className="space-y-8" enctype="text/plain">
          <div>
            <label for="email" className= "block mb-2 text-sm font-medium text-white">Your email</label>
            <input type="email" id="email" className="shadow-sm bg-black border border-gray-300 text-white text-sm rounded-lg focus:ring-accent_blue focus:outline-0 focus:border-accent_blue w-full p-2.5" placeholder="example@gmail.com" required />

          </div>
          <div>
            <label for="subject" className="block mb-2 text-sm font-medium text-white">Subject</label>
            <input type="text" id="subject" className="block p-3 w-full text-sm text-white bg-black rounded-lg border border-gray-300 shadow-sm focus:ring-accent_blue focus:border-accent_blue focus:outline-0" placeholder="Let us know how we can help you" required />
          </div>
          <div className="sm:col-span-2">
            <label for="message" className="block mb-2 text-sm font-medium text-white">Your message</label>
            <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-white bg-black rounded-lg shadow-sm border border-gray-300 focus:ring-accent_blue focus:border-accent_blue focus:outline-0" placeholder="Leave a comment..."></textarea>
          </div>
          <input type="submit" className="block mx-auto text-white text-2xl py-1  px-4 rounded-lg  grad transition-all bg-size-200 bg-pos-50 hover:bg-pos-150 ease-linear duration-300 focus:ring-accent_yellow focus:ring-opacity-65 focus:ring-4 focus:outline-none gradient-transition"value="Send" />
          </form>
      </div>
    </section>
  
  )
}