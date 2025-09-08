import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AnimatedCard } from "@/components/ui/animated-card";
import { AnimatedText } from "@/components/ui/animated-text";
import { Scene } from "@/components/3d/Scene";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, ExternalLink, Briefcase, GraduationCap, Award, User } from "lucide-react";

const Index = () => {
  const skills = [
    "Figma", "Canva", "Adobe XD", "Wireframing", "Prototyping",
    "User Research", "Usability Testing", "Interaction Design"
  ];

  const projects = [
    {
      title: "CRM System",
      description: "Designed intuitive dashboards and workflows, improving user efficiency by 20%",
      link: "https://www.figma.com/design/MgNdUwxf5Pije8OFbvrWic/Ali-Baba-CRM-?node-id=0-1&p=f"
    },
    {
      title: "Travel App",
      description: "Created user-friendly interfaces for booking and itinerary management",
      link: "https://www.figma.com/design/utUmRYEArWQFqIRi5LarXi/Travel.App?node-id=0-1&p=f"
    },
    {
      title: "Security Application",
      description: "Developed secure and accessible UI for user authentication and monitoring",
      link: "https://www.figma.com/design/ztXs4C5M8mYHE26PJebBnL/Security?node-id=0-1"
    },
    {
      title: "DBMS Interface",
      description: "Designed data visualization tools for streamlined database interactions",
      link: "https://www.figma.com/design/ztXs4C5M8mYHE26PJebBnL/Security?node-id=0-1"
    },
    {
      title: "ethereal-dbx (E-Store)",
      description: "Crafted an e-commerce platform UI, enhancing user shopping experience by 15%",
      link: "https://www.figma.com/design/C12CRm54l9s1wmT8WjHiLo/ethereal-dbx--E-Store-?node-id=0-1&t=PLrCS5FNboIuYMCN-1&fuid=1393166933782397268"
    }
  ];

  const experiences = [
    {
      title: "Junior UI/UX Developer",
      company: "Zeptechlogix, Lahore",
      period: "July 2025 – Present",
      achievements: [
        "Designed user interfaces for a CRM system, improving user navigation and workflow efficiency by 20%",
        "Developed wireframes and prototypes for a travel app, enhancing user engagement",
        "Collaborated with developers to implement UI designs for a security application",
        "Created interactive mockups for a DBMS interface, streamlining data interaction processes"
      ]
    },
    {
      title: "UI/UX Design Intern",
      company: "Zeptechlogix, Lahore",
      period: "April 2025 – June 2025",
      achievements: [
        "Assisted in designing UI components for the ethereal-dbx e-store, contributing to a 15% increase in user retention",
        "Conducted user research and usability testing to refine wireframes and prototypes",
        "Supported senior designers in creating high-fidelity mockups using Figma and Adobe XD"
      ]
    },
    {
      title: "Freelance UI/UX Designer",
      company: "Remote",
      period: "October 2024 – March 2025",
      achievements: [
        "Delivered UI/UX designs for various in-house projects, including a travel app and e-commerce platform",
        "Created visually appealing graphics and layouts using Canva and Figma",
        "Conducted client consultations to gather requirements and iterated designs based on feedback"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-secondary relative overflow-hidden">
      {/* Hero Section with 3D Background */}
      <div className="relative min-h-screen overflow-hidden bg-gradient-primary">
        {/* 3D Scene Background */}
        <Scene />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-transparent to-accent/30 z-10"></div>

        {/* Animated particles */}
        <div className="absolute inset-0 z-10">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center py-20">
          <div className="text-center text-white max-w-6xl mx-auto">
            <AnimatedText
              stagger
              delay={0.5}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200 leading-tight px-2"
            >
              Muhammad Haseeb Akram
            </AnimatedText>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.5, type: "spring", bounce: 0.5 }}
              className="relative"
            >
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 sm:mb-8 font-light tracking-wide animate-pulse-glow px-2">
                Creative UI/UX Designer
              </h2>
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-20 animate-gradient-shift"></div>
            </motion.div>

            <AnimatedText delay={2} className="text-sm xs:text-base sm:text-lg mb-8 sm:mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed px-4">
              Passionate about enhancing user experiences through innovative design solutions.
              1 year of experience delivering user-centered designs for CRM systems, travel apps,
              security applications, and e-commerce platforms.
            </AnimatedText>

            <motion.div
              className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 px-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:max-w-xs"
              >
                <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm w-full text-xs xs:text-sm sm:text-base py-3 px-4">
                  <Mail className="mr-2 h-4 w-4 flex-shrink-0" />
                  <span className="truncate min-w-0">haseebmirxa671@gmail.com</span>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, rotateY: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:max-w-xs"
              >
                <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm w-full text-xs xs:text-sm sm:text-base py-3 px-4">
                  <Phone className="mr-2 h-4 w-4 flex-shrink-0" />
                  <span className="whitespace-nowrap">(+92) 03096000400</span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 space-y-12 sm:space-y-16 lg:space-y-20 relative z-10">
        {/* About Section */}
        <AnimatedCard direction="left" delay={0.2}>
          <CardHeader>
            <CardTitle className="flex items-center text-3xl">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <User className="mr-4 h-8 w-8 text-primary" />
              </motion.div>
              Professional Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <AnimatedText delay={0.4} className="text-muted-foreground leading-relaxed text-lg">
              Creative and detail-oriented UI/UX Designer with 1 year of experience delivering user-centered design solutions.
              Skilled in designing intuitive interfaces for projects including CRM systems, travel apps, security applications,
              DBMS interfaces, and e-commerce platforms. Proficient in Figma, Canva, and Adobe XD, with a strong foundation
              in freelancing, internship, and junior developer roles.
            </AnimatedText>
          </CardContent>
        </AnimatedCard>

        {/* Experience Section */}
        <AnimatedCard direction="right" delay={0.4}>
          <CardHeader>
            <CardTitle className="flex items-center text-3xl">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Briefcase className="mr-4 h-8 w-8 text-primary" />
              </motion.div>
              Experience
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="space-y-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse-glow"></div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                    </div>
                  </div>
                </div>
                <ul className="space-y-3 ml-6">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      className="text-muted-foreground flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.2) + (i * 0.1) }}
                      viewport={{ once: true }}
                    >
                      <span className="text-primary mr-3 mt-1 text-lg">•</span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
                {index < experiences.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Separator className="mt-8 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </CardContent>
        </AnimatedCard>

        {/* Skills Section */}
        <AnimatedCard direction="up" delay={0.6}>
          <CardHeader>
            <CardTitle className="text-3xl text-center">Skills & Expertise</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold mb-4 text-primary text-xl">Design Tools</h4>
                <div className="flex flex-wrap gap-3">
                  {["Figma", "Canva", "Adobe XD"].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
                      viewport={{ once: true }}
                    >
                      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 px-4 py-2 text-sm font-medium">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold mb-4 text-primary text-xl">UI/UX Skills</h4>
                <div className="flex flex-wrap gap-3">
                  {["Wireframing", "Prototyping", "User Research", "Usability Testing", "Interaction Design"].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ duration: 0.3, delay: 0.6 + (index * 0.1) }}
                      viewport={{ once: true }}
                    >
                      <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20 px-4 py-2 text-sm font-medium">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </CardContent>
        </AnimatedCard>

        {/* Projects Section */}
        <AnimatedCard  direction="up" delay={0.8}>
          <CardHeader>
            <CardTitle className="text-3xl text-center">Featured Projects</CardTitle>
            <CardDescription className="text-center text-lg">A showcase of my UI/UX design work</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateY: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  whileHover={{
                    y: -10,
                    rotateY: 5,
                    boxShadow: "0 20px 40px -10px rgba(139, 92, 246, 0.4)"
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                  className="perspective-1000"
                >
                  <Card className="border border-border hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm h-full">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-primary">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <a  target="_blank" href={project.link} className="w-full flex items-center cursor-pointer hover:bg-primary hover:text-white px-3 py-2 rounded-lg">
                          <ExternalLink className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                          View Design
                        </a>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </AnimatedCard>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <AnimatedCard direction="left" delay={1}>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <GraduationCap className="mr-4 h-6 w-6 text-primary" />
                </motion.div>
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-foreground text-lg">Bachelor of Science in Computer Science (BSCS)</h3>
                <p className="text-primary font-medium">Superior University, Lahore</p>
                <p className="text-sm text-muted-foreground">2023 – 2027 (Ongoing)</p>
              </motion.div>
            </CardContent>
          </AnimatedCard>

          <AnimatedCard direction="right" delay={1.2}>
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Award className="mr-4 h-6 w-6 text-primary" />
                </motion.div>
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-foreground text-lg">Figma for UX Design</h3>
                <p className="text-primary font-medium">Udemy</p>
                <p className="text-sm text-muted-foreground">2024</p>
              </motion.div>
            </CardContent>
          </AnimatedCard>
        </div>

        {/* Contact Section */}
        <AnimatedCard direction="up" delay={1.4}>
          <CardHeader>
            <CardTitle className="text-3xl text-center">Let's Connect</CardTitle>
            <CardDescription className="text-center text-lg">
              Ready to collaborate on your next design project?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <motion.div
              className="flex flex-wrap justify-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="gradient" size="lg" className="group">
                  <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Send Email
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="group border-2"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/haseeb-akram-625793335"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    LinkedIn Profile
                  </a>
                </Button>
              </motion.div>

              <motion.div
                className="flex items-center text-muted-foreground text-lg"
                whileHover={{ scale: 1.05 }}
              >
                <MapPin className="mr-2 h-5 w-5 text-primary" />
                <span>Lahore, Pakistan</span>
              </motion.div>
            </motion.div>
          </CardContent>
        </AnimatedCard>
      </div>
    </div>
  );
};

export default Index;
