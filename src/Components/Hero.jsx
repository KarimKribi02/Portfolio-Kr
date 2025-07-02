import { HERO_CONTENT } from "../constants"
import { motion } from "motion/react"

const container = (delay) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: delay,
      duration: 0.8,
      ease: "easeOut"
    }
  }
});

const textContainer = (delay) => ({
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: delay,
      duration: 0.6,
      ease: "easeOut"
    }
  }
});

const imageContainer = (delay) => ({
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: delay,
      duration: 0.8,
      ease: "easeOut"
    }
  }
});

function Hero() {
  return (
    <section 
      className="min-h-screen flex items-center justify-center px-6 py-16 relative" 
      style={{ backgroundColor: '#181C14' }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            variants={textContainer(0.2)}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div
              variants={textContainer(0.4)}
              className="space-y-2"
            >
              <p className="text-lg font-medium tracking-wide" style={{ color: '#697565' }}>
                Bonjour, je suis
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight" style={{ color: '#ECDFCC' }}>
                Mohamedkarim
                <br />
                <span style={{ color: '#697565' }}>Kribi</span>
              </h1>
            </motion.div>

            <motion.div
              variants={textContainer(0.6)}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-0.5" style={{ backgroundColor: '#697565' }}></div>
                <h2 className="text-2xl lg:text-3xl font-semibold" style={{ color: '#3C3D37' }}>
                  Développeur Full Stack
                </h2>
              </div>
              
              <p className="text-lg leading-relaxed max-w-xl" style={{ color: '#697565' }}>
                {HERO_CONTENT}
              </p>
            </motion.div>

            
          </motion.div>

          {/* Image/Visual Content */}
          <motion.div
            variants={imageContainer(0.4)}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div 
                className="absolute -top-8 -left-8 w-24 h-24 rounded-full opacity-20"
                style={{ backgroundColor: '#697565' }}
              ></div>
              <div 
                className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full opacity-30"
                style={{ backgroundColor: '#3C3D37' }}
              ></div>
              
              {/* Main image container */}
              <div 
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl"
                style={{ backgroundColor: '#3C3D37' }}
              >
                <img 
                  src="./KarimPic.png" 
                  alt="Mohamedkarim Kribi - Développeur Full Stack" 
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-16 -left-12 w-8 h-8 rounded-lg shadow-lg"
                style={{ backgroundColor: '#ECDFCC' }}
              ></motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute bottom-20 -right-8 w-6 h-6 rounded-full shadow-lg"
                style={{ backgroundColor: '#697565' }}
              ></motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          variants={container(1.2)}
          initial="hidden"
          animate="visible"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2"
          >
            <span className="text-sm font-medium" style={{ color: '#697565' }}>
              Scroll
            </span>
            <div className="w-0.5 h-8" style={{ backgroundColor: '#3C3D37' }}></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero