import {
  Github,
  Linkedin,
  Twitter,
} from "@/assets/SocialLogos.jsx";


const Footer = () => {

  const backToTop = () => {
    toTop.current.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <footer className="bg-[#2a2a2a] text-white pt-4 px-2 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="font-bold mb-2">Epic Games</h5>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">Careers</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">Blog</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="font-bold mb-2">Support</h5>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">Help Center</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">Community</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="font-bold mb-2">Product Help</h5>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">Support</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white">File a Bug</a>
              </li>
            </ul>
          </div>
          <div className=" mb-6 md:mb-0">
            <button onClick={backToTop}
              className='w-max h-max hover:text-blue-500 duration-100 ease-in'>
              <svg xmlns="http://www.w3.org/2000/svg"
                width="30px" height="30px"
                viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m15 13.5l-3-3l-3 3"></path><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z">
                  </path></g></svg>
            </button>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm flex justify-between">
          <div className=" h-max flex items-center sm:gap-x-4 gap-x-2'">
            <p>Copyright &#169; {new Date().getFullYear()}, All rights reserved. </p>
          </div>
          <div className=' h-max flex items-center sm:gap-x-4 gap-x-2'>
            <a href='https://github.com/Aman2611'
              target='_blank'
              className='w-max h-max cursor-pointer 
              hover:text-blue-500 duration-100 ease-in'>
              <Github />
            </a>
            <a href='https://twitter.com/Aman_jsx'
              target='_blank'
              className='w-max h-max cursor-pointer 
              hover:text-blue-500 duration-100 ease-in'>
              <Twitter />
            </a>
            <a href='https://www.linkedin.com/in/amanprakash11/'
              target='_blank'
              className='w-max h-max cursor-pointer 
              hover:text-blue-500 duration-100 ease-in'>
              <Linkedin />
            </a>
          </div>
        </div>

      </div>
      <div className="h-9 mt-4 py-1 text-white text-center bg-[#333333]">
        For Educational Purposes Only
      </div>
    </footer>
  );
};

export default Footer;
