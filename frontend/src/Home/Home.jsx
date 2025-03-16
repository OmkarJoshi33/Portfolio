import React, { useState } from "react";
import "../index.css";
import NavBar from "../NavBar/NavBar";
import me from "../assets/images/me.png";
import simplecalci from "../assets/images/simplecalci.png";
import spotify from "../assets/images/spotify.png";
import Todolist from "../assets/images/Todolist.png";
import { VscOpenPreview } from "react-icons/vsc";
import porfolio from "../assets/images/porfolio.png"

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiC, SiPostman, SiExpress } from "react-icons/si";


function Home() {
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });

    const formData = {
      name: e.target.user_name.value,
      email: e.target.user_email.value,
      message: e.target.message.value
    };

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        error: null
      });
      e.target.reset();
      
      // Show success message for 3 seconds
      setTimeout(() => {
        setFormStatus({
          isSubmitting: false,
          isSubmitted: false,
          error: null
        });
      }, 3000);
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: 'Failed to send message. Please try again.'
      });
    }
  };

  return (
    <>
      <NavBar />
      <div>
        <section
          id="home"
          className="min-h-screen bg-gray-100 flex items-center justify-center"
        >
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl font-extrabold text-gray-800 transition-transform transform hover:scale-110 duration-700 ease-in-out">
              Welcome to My Website
            </h1>
            <p className="mt-4 text-xl text-gray-600 animate-fade-in-delay">
              I'm Omkar, Web Development enthusiast .
            </p>
            <a
              href="#about"
              className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              Learn More About Me
            </a>
          </div>
        </section>
        <section
          id="about"
          className="min-h-screen bg-gray-200 flex items-center justify-center"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 animate-slide-in">
            <div className="w-1/2 max-w-sm">
              <img
                src={me}
                alt="Omkar Joshi"
                className="rounded-full shadow-lg hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
              <p className="mt-4 text-lg text-gray-600">
                Hi, I'm Omkar! student in the final semester of my MSc program ,
                enthusiast in web development and MERN stack.
              </p>
            </div>
          </div>
        </section>
        <section id="skills" className="min-h-screen bg-gray-100 py-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800">My Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 justify-items-center">
              <div className="flex flex-col items-center">
                <FaHtml5 className="text-5xl text-orange-500" />
                <p className="mt-2 text-lg text-gray-600">HTML</p>
              </div>
              <div className="flex flex-col items-center">
                <FaCss3Alt className="text-5xl text-blue-500" />
                <p className="mt-2 text-lg text-gray-600">CSS</p>
              </div>
              <div className="flex flex-col items-center">
                <FaJs className="text-5xl text-yellow-500" />
                <p className="mt-2 text-lg text-gray-600">JavaScript</p>
              </div>
              <div className="flex flex-col items-center">
                <SiTailwindcss className="text-5xl text-teal-500" />
                <p className="mt-2 text-lg text-gray-600">Tailwind CSS</p>
              </div>
              <div className="flex flex-col items-center">
                <FaReact className="text-5xl text-blue-400" />
                <p className="mt-2 text-lg text-gray-600">React</p>
              </div>
              <div className="flex flex-col items-center">
                <SiMongodb className="text-5xl text-green-500" />
                <p className="mt-2 text-lg text-gray-600">MongoDB</p>
              </div>
              <div className="flex flex-col items-center">
                <SiC className="text-5xl text-blue-600" />
                <p className="mt-2 text-lg text-gray-600">C</p>
              </div>
              <div className="flex flex-col items-center">
                <FaPython className="text-5xl text-blue-400" />
                <p className="mt-2 text-lg text-gray-600">Core Python</p>
              </div>
            
              <div className="flex flex-col items-center">
                <FaNodeJs className="text-5xl text-green-600" />
                <p className="mt-2 text-lg text-gray-600">Node.js</p>
              </div>
              <div className="flex flex-col items-center">
                <SiExpress className="text-5xl text-gray-600" />
                <p className="mt-2 text-lg text-gray-600">Express</p>
              </div>
              <div className="flex flex-col items-center">
                <SiPostman className="text-5xl text-orange-600" />
                <p className="mt-2 text-lg text-gray-600">Postman</p>
              </div>
            </div>
          </div>
        </section>
        {/* Projects Section */}
        <section id="projects" className="min-h-screen bg-gray-200 py-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800">My Projects</h2>
            <p className="mt-4 text-lg text-gray-600">
              Below are some of the projects I have worked on. Click to explore
              more!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-4">
              {/* Project Card 1 */}
              <div className="bg-white rounded-lg shadow-lg p-4 hover:scale-105 transition-transform duration-500 ease-in-out aspect-w-16 aspect-h-9">
                <h3 className="text-xl font-semibold text-gray-800">
                  Spotify UI Clone
                </h3>
                <img
                  src={spotify}
                  alt="Spotify UI Clone"
                  className="rounded-xl w-full h-auto p-1"
                />
                <p className="mt-2 text-gray-600">
                  A responsive Spotify user interface clone built using React
                  and Tailwind CSS.
                </p>
                <a
                  href="https://omkarjoshi33.github.io/Spotify-UI-Clone/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline inline-block mr-8"
                >
                  <VscOpenPreview />
                </a>
                <a
                  href="https://github.com/OmkarJoshi33"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
                >
                  View on GitHub
                </a>
              </div>

              {/* Project Card 2 */}
              <div className="bg-white rounded-lg shadow-lg p-4 hover:scale-105 transition-transform duration-500 ease-in-out aspect-w-16 aspect-h-9">
                <h3 className="text-xl font-semibold text-gray-800">
                  Portfolio Website
                </h3>
                <img
                  src={porfolio}
                  alt="Portfolio Website"
                  className="rounded-xl w-full h-auto p-1"
                />
                <p className="mt-2 text-gray-600">
                  My personal portfolio website showcasing my skills and
                  projects.
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:underline inline-block mr-8"
                >
                  <VscOpenPreview />
                </a>
                <a
                  href="https://github.com/OmkarJoshi33"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
                >
                  View on GitHub
                </a>
              </div>

              {/* Project Card 3 */}
              <div className="bg-white rounded-lg shadow-lg p-4 hover:scale-105 transition-transform duration-500 ease-in-out aspect-w-16 aspect-h-9">
                <h3 className="text-xl font-semibold text-gray-800">
                  ToDoList
                </h3>
                <img
                  src={Todolist}
                  alt="ToDoList"
                  className="rounded-xl w-full h-auto p-1"
                />
                <p className="mt-2 text-gray-600">
                  Simple functionality ToDo List built using React and Tailwind
                  CSS.
                </p>
                <a
                  href="https://omkarjoshi33.github.io/ToDoList/"
                  className="text-blue-500 hover:underline inline-block mr-8"
                >
                  <VscOpenPreview />
                </a>
                <a
                  href="https://github.com/OmkarJoshi33"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
                >
                  View on GitHub
                </a>
              </div>

              {/* Project Card 4 */}
              <div className="bg-white rounded-lg shadow-lg p-4 hover:scale-105 transition-transform duration-500 ease-in-out aspect-w-16 aspect-h-9">
                <h3 className="text-xl font-semibold text-gray-800">
                  Simple-Calci
                </h3>
                <img
                  src={simplecalci}
                  alt="Simple Calculator"
                  className="rounded-xl w-full h-auto p-1"
                />
                <p className="mt-2 text-gray-600">
                  A simple calculator application showcasing core React and
                  Tailwind CSS skills.
                </p>
                <a
                  href="https://omkarjoshi33.github.io/Simple-Calci/"
                  className="text-blue-500 hover:underline inline-block mr-8"
                >
                  <VscOpenPreview />
                </a>
                <a
                  href="https://github.com/OmkarJoshi33"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
                >
                  View on GitHub
                </a>
              </div>

              {/* Project Card 5 */}
              <div className="bg-white rounded-lg shadow-lg p-4 hover:scale-105 transition-transform duration-500 ease-in-out aspect-w-16 aspect-h-9">
                <h3 className="text-xl font-semibold text-gray-800">
                  Coming Soon
                </h3>
                <p className="mt-2 text-gray-600">
                  Stay tuned! More exciting projects are on the way.
                  StackFlex- Social Media Site using MERN
                </p>
                {/* <a
                  href="#"
                  className="text-blue-500 hover:underline inline-block mr-8"
                >
                  <VscOpenPreview />
                </a>
                <a
                  href="https://github.com/OmkarJoshi33"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
                >
                  View on GitHub
                </a> */}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen bg-gray-100 py-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
            <p className="mt-4 text-lg text-gray-600">
              I'd love to hear from you! Feel free to contact me using the form
              below or via my email.
            </p>
          </div>
          <div className="mt-8 px-4 flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Contact Form */}
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="user_name"
                    className="block text-gray-800 font-medium"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    required
                    placeholder="Your Name"
                    className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="user_email"
                    className="block text-gray-800 font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    required
                    placeholder="Your Email"
                    className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-800 font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    placeholder="Your Message"
                    className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={formStatus.isSubmitting}
                  className={`w-full ${
                    formStatus.isSubmitting
                      ? 'bg-gray-400'
                      : 'bg-blue-500 hover:bg-blue-600'
                  } text-white py-2 rounded-lg shadow-md transition`}
                >
                  {formStatus.isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {formStatus.isSubmitted && (
                  <div className="mt-4 p-2 bg-green-100 text-green-700 rounded">
                    Message sent successfully!
                  </div>
                )}
                {formStatus.error && (
                  <div className="mt-4 p-2 bg-red-100 text-red-700 rounded">
                    {formStatus.error}
                  </div>
                )}
              </form>
            </div>

            {/* Contact Details */}
           
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
