import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col gap-3 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"> Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"> Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email address"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Any message"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-[#108CC6] hover:bg-blue-900 text-white font-bold py-2 px-4 border-b-4 border-primary hover:border-blue-900 rounded"
          >
            Send
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] flex items-center justify-center"
      >
        <div className="flex flex-wrap justify-center gap-8">
          <a
            href="https://www.linkedin.com/in/akshitachauhan1414/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-white text-center text-xl md:text-2xl lg:text-3xl mb-4"
          >
            <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
            LinkedIn
          </a>

          <a
            href="https://github.com/Akshita1414"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-white text-center text-xl md:text-2xl lg:text-3xl mb-4"
          >
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
            Github
          </a>

          <a
            href="https://www.instagram.com/akshitachauhan882/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-white text-center text-xl md:text-2xl lg:text-3xl mb-4"
          >
            <FontAwesomeIcon icon={faInstagram} className="mr-2" />
            Instagram
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
