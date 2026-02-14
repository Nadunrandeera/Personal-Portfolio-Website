import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import profileImage from "../../assets/Hero_Image.png";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-[#212121] pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#ff014f] text-xs font-medium mb-6 tracking-widest uppercase">
              WELCOME TO MY WORLD
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-4 leading-tight">
              <span className="text-white">Hi, I'm </span>
              <span className="text-[#ff014f]">Nadun</span>
            </h1>

            <h2 className="text-3xl md:text-4xl text-gray-300 mb-8">
              a Full Stack Developer
            </h2>

            <p className="text-gray-400 text-base leading-relaxed max-w-xl mb-12">
              I'm an undergraduate at the University of Jaffna, Faculty of
              Technological Studies, Department of ICT. I have a strong interest
              in web technologies, and I'm passionate about building efficient,
              scalable, and user-friendly solutions. My journey in tech began
              with a curiosity about how things work on the web.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-0">
              {/* Find With Me */}
              <div>
                <p className="text-gray-400 text-xs mb-4 tracking-widest uppercase">
                  FIND WITH ME
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-[#1a1a1a] hover:bg-[#ff014f] rounded-lg flex items-center justify-center transition-all duration-300 shadow-lg group border border-gray-800 hover:border-[#ff014f]"
                  >
                    <Github
                      className="text-gray-400 group-hover:text-white"
                      size={20}
                    />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-[#1a1a1a] hover:bg-[#ff014f] rounded-lg flex items-center justify-center transition-all duration-300 shadow-lg group border border-gray-800 hover:border-[#ff014f]"
                  >
                    <Linkedin
                      className="text-gray-400 group-hover:text-white"
                      size={20}
                    />
                  </a>
                  <a
                    href="mailto:contact@example.com"
                    className="w-14 h-14 bg-[#1a1a1a] hover:bg-[#ff014f] rounded-lg flex items-center justify-center transition-all duration-300 shadow-lg group border border-gray-800 hover:border-[#ff014f]"
                  >
                    <Mail
                      className="text-gray-400 group-hover:text-white"
                      size={20}
                    />
                  </a>
                </div>
              </div>

              {/* Best Skill On */}
              <div>
                <p className="text-gray-400 text-xs mb-4 tracking-widest uppercase">
                  BEST SKILL ON
                </p>
                <div className="flex gap-3">
                  <div className="w-14 h-14 bg-[#1a1a1a] rounded-lg flex items-center justify-center border border-gray-800 shadow-lg">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a23.73 23.73 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.397 25.397 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
                        fill="#61DAFB"
                      />
                    </svg>
                  </div>
                  <div className="w-14 h-14 bg-[#1a1a1a] rounded-lg flex items-center justify-center border border-gray-800 shadow-lg">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M0 12v12h24V0H0v12zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967a.88.88 0 0 0 .102.45c.16.331.458.53 1.39.934 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.877-.648-2.388-1.244-.221-.257-.651-.923-.612-.953.015-.011.11-.076.213-.143.104-.067.487-.28.853-.475l.665-.354.15.213c.208.302.654.673.964.802.676.28 1.615.246 2.05-.059.195-.138.285-.327.285-.602 0-.232-.03-.324-.144-.484-.145-.202-.431-.357-1.25-.676-1.176-.458-1.683-.743-2.123-1.193a2.95 2.95 0 0 1-.614-1.045 3.559 3.559 0 0 1-.069-1.478c.096-.63.569-1.336 1.212-1.805.613-.448 1.375-.665 2.355-.67.422 0 .861.008.976.019zm-5.961 1.048c.036.057.068 1.232.068 2.613v2.508l-.469.469-.47.469h-2.015l-.47-.469-.469-.469V7.535h1.431v4.691l.234.234.234.234h.938l.234-.234.234-.234V7.535h1.432l.068.103z"
                        fill="#3178C6"
                      />
                    </svg>
                  </div>
                  <div className="w-14 h-14 bg-[#1a1a1a] rounded-lg flex items-center justify-center border border-gray-800 shadow-lg">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
                        fill="#F7DF1E"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff014f]/20 to-transparent rounded-3xl blur-3xl"></div>
              <img
                src={profileImage}
                alt="Nadun Randeera"
                className="relative rounded-3xl shadow-2xl w-full max-w-md h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
