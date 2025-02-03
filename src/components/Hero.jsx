import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import image from './canvas/image.jpeg'; // Import the image from the correct path

const Hero = () => {
  const circleContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '150px', // Adjust this value as needed to position below the navbar
    right: '50px', // Adjust this value to position on the right side
    width: '450px', // Adjust width
    height: '450px', // Adjust height
    borderRadius: '50%',
    border: '5px solid #108CC6', // Blue color
    overflow: 'hidden', // Ensures the image stays within the circle
  };

  const profileImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  return (
    <section className="relative w-full h-screen mx-auto">
      <style jsx>{`
        .circle-container {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 150px;
          right: 50px;
          width: 350px;
          height: 350px;
          border-radius: 50%;
          border: 5px solid #108cc6;
          overflow: hidden;
        }
        .circle-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        @media (max-width: 1000px) {
          .circle-container {
            top: 300px;
            right: 100px;
            width: 250px;
            height: 250px;
          }
        }

        @media (max-width: 650px) {
          .circle-container {
            top: 450px;
            right: 200px;
            width: 250px;
            height: 250px;
          }
        }

        @media (max-width: 560px) {
          .circle-container {
            top: 420px;
            right: 200px;
            width: 200px;
            height: 200px;
          }
        }
           
        
        @media (max-width: 477px) {
          .circle-container {
            top: 450px;
            right: 130px;
            width: 200px;
            height: 200px;
          }
        }

        @media (max-width: 450px) {
          .circle-container {
            top: 530px;
            right: 100px;
            width: 180px;
            height: 180px;
          }
        }


        @media (max-width: 370px) {
          .circle-container {
            top: 590px;
            right: 100px;
            width: 120px;
            height: 120px;
          }
        }

        @media (max-width: 330px) {
          .circle-container {
            top: 630px;
            right: 100px;
            width: 120px;
            height: 120px;
          }
        }

         @media (max-width: 290px) {
          .circle-container {
          display: hidden
            top: 490px;
            right: 20px;
            width: 120px;
            height: 120px;
          }
        }


      `}</style>

      <div className={`absolute inset-0 top-[220px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#108CC6]">Akshita Chauhan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I am a web developer, passionate <br className="sm:block hidden" />
          about coding and continually eager to <br className="sm:block hidden" />
          learn new technologies
          </p>

          <div className="position-relative mt-10 align-center ">
          <a
            href="https://drive.google.com/file/d/1QuaYsbM4CSPXR8qoTACZG9EjJ7BtbbHQ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button class="bg-[#108CC6] hover:bg-blue-900 text-white font-bold py-2 px-4 border-b-4 border-primary hover:border-blue-900 rounded">
              Download resume
            </button>
          </a>
        </div>
        </div>

        
      </div>

      

      <div className="circle-container">
        <img src={image} alt="My Setup" />
      </div>
    </section>
  );
};

export default Hero;
