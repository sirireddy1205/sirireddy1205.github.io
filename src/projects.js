// At the top of your file, make sure to import all the images correctly:
import avaImg from './imgs/ava1.png';
import avaSS from './imgs/ava.png';
import faceImg from './imgs/face1.png';
import faceSS from './imgs/face.png';
import objImg from './imgs/obj1.png';
import objSS from './imgs/obj.png';
import hosImg from './imgs/hos1.png';

export const projects = {
  ava: {
    name: "AVA – Desktop Assistant",
    subTitle: (
      <div className="ith-subtitle">
        A <span>voice and text-based desktop assistant</span> that automates
        daily tasks using AI.
      </div>
    ),
    img: avaImg,
    description:
      "Performs tasks like launching apps, sending WhatsApp/Gmail messages, web searches, and live updates (weather, news, object detection) via speech or text.",
    screenshotMain: avaSS,
    link: "https://github.com/sirireddy1205/AVA-Artificial-Virtual-Assistant",
    tools: ["Python", "Kivy", "SpeechRecognition"],
    motivation: (
      <div className="motivation">
        I’ve always loved the idea of automating everyday tasks, and AVA was my
        attempt to bring that to life. I wanted something that could act like a
        personal helper — opening apps, sending quick messages, or giving me
        news without lifting a finger. Building AVA introduced me to speech
        recognition, natural language processing, and AI-based control flows. It
        made me realize how simple automations can have a huge impact on
        productivity.
      </div>
    ),
  },

  attendanceSystem: {
    name: "Face Recognition Attendance System",
    subTitle: (
      <div className="ith-subtitle">
        A <span>facial recognition-based system</span> to automate and secure
        roll calls.
      </div>
    ),
    img: faceImg,
    description:
      "Captures webcam video, detects faces, and marks attendance by matching facial encodings in real time.",
    screenshotMain: faceSS,
    link:
      "https://github.com/sirireddy1205/Attendance-Management-System-using-Face-Recognition",
    tools: ["Python", "OpenCV", "face_recognition"],
    motivation: (
      <div className="motivation">
        While attending classes and events, I noticed how time-consuming and
        error-prone traditional attendance marking can be. I wanted to try a
        smarter way — using facial recognition to identify people automatically
        and mark their presence. This project helped me dive deep into computer
        vision and real-time image processing, and taught me how AI can simplify
        everyday operations.
      </div>
    ),
  },

  objectDetection: {
    name: "YOLOv8 Object Detection",
    subTitle: (
      <div className="ith-subtitle">
        Real-time <span>object detection</span> for surveillance and smart
        monitoring.
      </div>
    ),
    img: objImg,
    description:
      "Implements YOLOv8 with OpenCV to detect multiple object classes in real-time from live camera feeds.",
    screenshotMain: objSS,
    link: "https://github.com/sirireddy1205/Object-Detection",
    tools: ["Python", "OpenCV", "YOLOv8"],
    motivation: (
      <div className="motivation">
        I’ve always been fascinated by how machines “see” the world. With this
        project, I wanted to experiment with real-time object detection —
        something useful for surveillance, automation, or even interactive
        interfaces. I trained the model and tested it on different scenarios to
        see how effectively it could classify and respond to the environment.
      </div>
    ),
  },

  hospitalManagement: {
    name: "Hospital Management System",
    subTitle: (
      <div className="ith-subtitle">
        A <span>full-stack web platform</span> to streamline hospital workflows.
      </div>
    ),
    img: hosImg,
    description:
      "A responsive PHP-MySQL based system to manage appointments, patient data, and staff coordination.",
    link: "https://github.com/sirireddy1205/Hospital_Management_System",
    tools: ["HTML", "CSS", "PHP", "MySQL"],
    motivation: (
      <div className="motivation">
        I wanted to build something real and useful, and hospitals often face
        bottlenecks in managing data and coordination. This system was my way of
        learning full-stack development while solving a real-world issue. I
        focused on creating a clean UI and making sure the backend handled data
        securely and efficiently.
      </div>
    ),
  },
};
