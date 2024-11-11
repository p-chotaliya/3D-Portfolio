const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5" id="footer">
        <div className="text-white-800 flex gap-2 flex-col my-10">
          <p>Parth Chotaliya</p>
          <p>chotaliyaparth.pc@gmail.com</p>
          <p>+1 416-890-3144</p>
        </div>
  
        <div className="flex">
          <div className="social-icon">
            <a href="https://github.com/p-chotaliya" className="social-icon">
            <img src="/3D-Portfolio/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/parth-chotaliya-pc/" className="social-icon">
            <img src="/3D-Portfolio/assets/LinkedIn.png" alt="LinkedIn" className="w-1/2 h-1/2" />
            </a>
          </div>
          
        </div>
      </footer>
    );
  };
  
  export default Footer;