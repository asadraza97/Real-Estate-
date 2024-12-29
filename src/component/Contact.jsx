import React from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion"


const Contact = ()=>{

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "f37b4954-dc39-490c-8f5b-6de6d4535a7f");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("");
        toast.success("Form Successfully Submit ")
        event.target.reset()
      } else {
        console.log("Error", data);
        alert(data.message)
        setResult(data.message);
      }
    };
    return (
        <motion.div     initial={{opacity:0, x: -200}} transition={{duration: 1}} whileInView={{opacity:1 , x:0}} viewport={{once: true}}
        className=" text-center p-6 py-20 lg:px-32 w-full overflow-hidden" id="contact">
            <h1 className=" text-2xl sm:text-4xl font-bold mb-2 text-center">Contact  <span className=" underline underline-offset-4 decoration-1 under font-light"> With us </span></h1>
            <p className=" text-gray-500 max-w-80 text-center mb-12 mx-auto">Ready to Make a Move? Let's Build Your Futher Together </p>
            
            <form action="" className=" max-w-2xl mx-auto text-gray-600 pt-8" onSubmit={onSubmit}>
                <div className=" flex flex-wrap">
                    <div className=" w-full md:w-1/2 text-left"> Your Name 
                    <input className=" w-full border border-gray-300 rounded py-3 px-4 mt-2" name="name" type="text" placeholder="your name " required />
                    </div>
                    <div className=" w-full md:w-1/2 text-left md:pl-4"> Your Email
                    <input className=" w-full border border-gray-300 rounded py-3 px-4 mt-2" name="email" type="text" placeholder="your email " required />
                    </div>
                </div>
                <div className=" my-6 text-left">
                    Message 
                    <textarea name="message " placeholder="message" required id="" className=" w-full border border-gray-300 rounded py-3 px-4 h-48 resize-none"></textarea>
                </div>
                 <button className=" bg-blue-800 text-white rounded px-8 py-4"> {result ? result : "Send Message"} </button>
            </form>
        </motion.div>
    )
}

export default Contact