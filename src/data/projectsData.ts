export interface ProjectItem {
  slug: string;
  title: string;
  category: string;
  type: string;
  featured?: boolean;
  date: string;
  image: string;
  description: string;
  team?: string;
  mentors?: string;
  stats?: { label: string; value: string }[];
  techStack: string[];
  skillsDemonstrated: string[];
  sections: { title: string; paragraphs: string[] }[];
  milestones?: string[];
  gallery?: { url: string; caption: string }[];
}

export const projectsData: ProjectItem[] = [
  {
    slug: "adaptive-traffic-management",
    title: "Adaptive Traffic Management System",
    category: "Smart Cities & AI",
    type: "Flagship Achievement",
    featured: true,
    date: "Aspire Scheme & IIT Delhi",
    image: "/images/projects/project_img_5.jpeg",
    description: "Government-funded initiative under SPPU University's Aspire Scheme utilizing predictive algorithms to forecast traffic flow, dynamically optimize signal timings, and minimize vehicular fuel consumption.",
    team: "Gokul B, Mrunal Hedau, Yash Sunne, Omkar Malpure, Yash Phalle",
    mentors: "Prof. Dr. Nitin Sakhare Sir",
    stats: [
      { label: "SPPU Scheme", value: "Aspire Scheme 1st Prize" },
      { label: "IIT Delhi Hackathon", value: "Top 20 Nationwide" },
      { label: "Faculty Mentor", value: "Prof. Nitin Sakhare Sir" },
      { label: "Domain", value: "Predictive AI & Telemetry" },
    ],
    techStack: [
      "Predictive Machine Learning",
      "Edge Computing",
      "Real-Time Telemetry",
      "Sensor Interfacing",
      "Traffic Simulation",
      "Hardware-Software Co-Design",
    ],
    skillsDemonstrated: [
      "Predictive Traffic Flow Algorithms",
      "Real-time Data Processing & Analytics",
      "Hardware & Sensor Telemetry Integration",
      "Fuel & Congestion Optimization Models",
      "Large-Scale System Integration",
    ],
    sections: [
      {
        title: "Revolutionizing Traffic Management",
        paragraphs: [
          "Traffic congestion in metropolitan centers causes significant economic losses, excessive fuel wastage, and hazardous environmental pollution. Traditional timer-based traffic lights fail to adapt dynamically to real-time road conditions.",
          "Our team collaborated on a prestigious government-funded initiative under Savitribai Phule Pune University's (SPPU) Aspire Scheme to engineer an Adaptive Traffic Management System. Unlike conventional traffic controllers, this system harnesses predictive algorithms and real-time sensory inputs to forecast localized traffic volume, optimize signal timing on the fly, and minimize overall commuter wait times and fuel consumption.",
        ],
      },
      {
        title: "Recognition and Industry Validation",
        paragraphs: [
          "The technical rigor and measurable impact of this project received extraordinary recognition across regional and national stages:",
          "• 1st Prize Winner under the SPPU University Aspire Scheme, securing top honors for innovation in municipal smart systems.",
          "• A coveted spot in the Top 20 ranks at the prestigious IIT Delhi Hackathon (Western Region), competing successfully against established commercial startups and premier engineering institutions nationwide.",
          "This flagship achievement demonstrates the IoT Club's capacity to tackle complex, real-world societal problems and deliver robust, production-grade engineering solutions.",
        ],
      },
      {
        title: "Team & Academic Mentorship",
        paragraphs: [
          "The project was executed under the guidance of Faculty Mentor Prof. Nitin Sakhare Sir, bringing together dedicated student engineers across hardware and software verticals:",
          "• Gokul B (Software Architecture & Systems Integration)\n• Mrunal Hedau (Software & Embedded Hardware)\n• Yash Sunne (Hardware Prototyping & Sensor Calibration)\n• Omkar Malpure (Backend & Simulation Software)\n• Yash Phalle (Circuit Fabrication & Power Distribution)",
        ],
      },
    ],
    milestones: [
      "Won 1st Prize under SPPU University's government-funded Aspire Scheme.",
      "Achieved Top 20 ranking at the IIT Delhi Hackathon (Western Region).",
      "Successfully integrated predictive traffic flow forecasting with physical controller actuation.",
      "Validated substantial reductions in idling time and simulated fuel emissions.",
    ],
    gallery: [
      {
        url: "/images/projects/project_img_5.jpeg",
        caption: "Team presenting the Adaptive Traffic Management System to dignitaries, faculty, and industry jury under the Aspire Scheme.",
      },
      {
        url: "/images/projects/project_img_16.jpeg",
        caption: "Edge AI computing platform utilized for local video processing and deep learning vehicle detection.",
      },
      {
        url: "/images/projects/project_img_17.jpeg",
        caption: "Embedded Raspberry Pi IoT gateway handling cloud communication and signal controller relays.",
      },
    ],
  },
  {
    slug: "smart-environmental-monitoring-kit",
    title: "Smart Environmental Monitoring System (SEM-Kit)",
    category: "Environmental IoT",
    type: "Hardware Prototyping",
    date: "General Showcase",
    image: "/images/projects/project_img_6.jpeg",
    description: "Custom-built, encapsulated environmental telemetry station engineered for robust, long-term atmospheric data logging with custom perforated board circuitry and weather-sealed housing.",
    stats: [
      { label: "Form Factor", value: "Ruggedized Enclosure" },
      { label: "Sensors", value: "Temp, Humidity, Air Quality" },
      { label: "Hardware", value: "Custom Circuit Board" },
      { label: "Deployment", value: "Long-term Autonomous" },
    ],
    techStack: [
      "Custom Board Design",
      "Environmental Sensing",
      "Data Logging",
      "Low-Power Architecture",
      "Relay Actuation",
      "Embedded C++",
    ],
    skillsDemonstrated: [
      "Custom PCB / Perforated Board Fabrication",
      "Sensor Integration (Temperature, Relative Humidity, Air Quality)",
      "Non-Volatile Data Logging & Flash Storage",
      "Power Regulation & Battery Longevity Management",
      "Robust Enclosure & Weather-Proof Packaging",
    ],
    sections: [
      {
        title: "Project Overview & Engineering Architecture",
        paragraphs: [
          "The Smart Environmental Monitoring System (SEM-Kit) is an engineered hardware telemetry station designed specifically for continuous, long-term environmental observation in challenging outdoor and industrial environments.",
          "Unlike delicate development breadboards, the SEM-Kit integrates all core processing, sensor conditioning, power regulation, and switching circuitry onto a tailored perforated board housed inside a heavy-duty industrial enclosure. The unit reliably monitors ambient temperatures, relative humidity levels, and air quality parameters, buffering data continuously to ensure zero packet loss even during transient network dropouts.",
        ],
      },
      {
        title: "Hardware Integration & Power Optimization",
        paragraphs: [
          "The design emphasizes hardware durability and power efficiency. By selecting low-quiescent-current voltage regulators and implementing deep-sleep microcontroller cycles, the system drastically minimizes energy consumption.",
          "Onboard relay channels allow the SEM-Kit to trigger auxiliary equipment such as exhaust fans, dehumidifiers, or visual alarms whenever critical environmental thresholds are breached.",
        ],
      },
    ],
    milestones: [
      "Engineered a fully self-contained, weather-resistant hardware telemetry enclosure.",
      "Achieved stable 24/7 environmental data logging with localized flash backup.",
      "Demonstrated proficiency in custom circuit fabrication and industrial hardware packaging.",
    ],
    gallery: [
      {
        url: "/images/projects/project_img_6.jpeg",
        caption: "Internal hardware layout of the SEM-Kit showing power regulation, custom circuit board, display module, and relay switches.",
      },
    ],
  },
  {
    slug: "smart-farm-weather-dashboard",
    title: "IoT-Based Smart Farm & Weather Dashboard",
    category: "Smart Agriculture",
    type: "Full-Stack IoT",
    date: "General Showcase",
    image: "/images/projects/project_img_8.jpeg",
    description: "Full-stack agricultural monitoring platform providing real-time telemetry on ambient temperature, humidity, heat index, and soil moisture with remote actuator controls for automated irrigation.",
    stats: [
      { label: "Platform", value: "Cloud IoT Platform" },
      { label: "Sensors", value: "Soil, Temp, Humidity, Rain" },
      { label: "Control", value: "Remote Pump Actuation" },
      { label: "Architecture", value: "Full-Stack Telemetry" },
    ],
    techStack: [
      "Cloud IoT Integration",
      "Frontend Dashboard UI",
      "Real-Time WebSockets/MQTT",
      "Soil Moisture Telemetry",
      "Automated Irrigation Control",
      "Data Analytics",
    ],
    skillsDemonstrated: [
      "End-to-End Cloud IoT Integration",
      "Frontend User Interface Design & Reactive State Management",
      "Real-time Sensor Data Visualization & Graphing",
      "Remote Actuator Control (Automated Irrigation Motor Triggers)",
      "Threshold Alerting for Agricultural Optimization",
    ],
    sections: [
      {
        title: "Precision Farming & Telemetry Dashboard",
        paragraphs: [
          "Modern agriculture requires real-time actionable intelligence to maximize crop yield, prevent over-irrigation, and conserve water resources. The IoT-Based Smart Farm Dashboard represents an end-to-end full-stack IoT solution bridging field hardware with a sleek web user interface.",
          "The intuitive dashboard displays live atmospheric parameters including ambient temperature (28.5°C), relative humidity (55.0%), computed heat index (30.0°C), rain status detection, and real-time volumetric soil moisture levels (45.0%).",
        ],
      },
      {
        title: "Closed-Loop Automated Irrigation",
        paragraphs: [
          "Beyond passive observation, the platform incorporates closed-loop automated actuator controls. When soil moisture drops below critical hydration thresholds, the system can automatically trigger the irrigation pump, or allow farm operators to override motor status (Motor On / Motor Off) directly from any mobile or desktop browser.",
          "This highlights the club's comprehensive software development and cloud integration capabilities, uniting embedded hardware with responsive, human-centric web applications.",
        ],
      },
    ],
    milestones: [
      "Built a responsive real-time web dashboard for multi-parameter environmental telemetry.",
      "Integrated bi-directional MQTT actuator controls for automated pump and motor switching.",
      "Demonstrated full-stack synergy between edge microcontroller sensors and modern cloud platforms.",
    ],
    gallery: [
      {
        url: "/images/projects/project_img_8.jpeg",
        caption: "Live user interface showing real-time temperature, humidity, soil moisture percentage, and motor actuator toggle.",
      },
    ],
  },
  {
    slug: "autonomous-obstacle-avoiding-robot",
    title: "Autonomous Obstacle-Avoiding Robotics Platform",
    category: "Robotics & Control",
    type: "Autonomous Navigation",
    date: "General Showcase",
    image: "/images/projects/project_img_9.jpeg",
    description: "Mobile robotic rover platform equipped with ultrasonic range sensing and an Arduino microcontroller brain, implementing real-time obstacle detection and responsive navigation algorithms.",
    stats: [
      { label: "Core Controller", value: "Arduino Microcontroller" },
      { label: "Sensing", value: "Ultrasonic Sonar Array" },
      { label: "Drive System", value: "Differential DC Motors" },
      { label: "Autonomy", value: "Reactive Navigation" },
    ],
    techStack: [
      "Arduino Embedded C++",
      "Ultrasonic Rangefinding (HC-SR04)",
      "H-Bridge Motor Drivers (L298N)",
      "Differential Steering Kinematics",
      "Collision Avoidance Algorithms",
    ],
    skillsDemonstrated: [
      "Robotics Mechanical Prototyping & Chassis Balancing",
      "Real-time Sensor Processing & Echo Time-of-Flight Calculations",
      "PWM Motor Speed & Direction Control",
      "Reactive Collision-Avoidance State Machines",
      "Mobile Battery Power Distribution",
    ],
    sections: [
      {
        title: "Autonomous Ground Robotics Platform",
        paragraphs: [
          "Autonomous ground vehicles form the foundation of warehouse automation, robotic vacuum cleaners, and search-and-rescue rovers. This project developed an agile, mobile robotics platform capable of traversing unknown environments without human intervention.",
          "The rover utilizes an ultrasonic sensor turret mounted on the front bumper to emit high-frequency acoustic pulses. By measuring the precise time-of-flight of returning acoustic echoes, the microcontroller computes distance to obstacles in front with millimeter precision.",
        ],
      },
      {
        title: "Kinematics & Reactive Algorithm Implementation",
        paragraphs: [
          "The Arduino brain continuously executes an obstacle-avoidance algorithm. When an object is detected within a designated braking threshold, the robot halts, sweeps its sensor to evaluate alternate clearance vectors, and commands differential motor turns to navigate around the hazard smoothly.",
          "This project serves as an essential stepping stone for club members mastering motor controllers, sensor polling, interrupt handling, and robotic kinematics.",
        ],
      },
    ],
    milestones: [
      "Fabricated and tuned a two-wheel differential drive mobile robot chassis.",
      "Engineered real-time reactive collision avoidance using acoustic time-of-flight sensing.",
      "Implemented smooth PWM acceleration and skid-steering navigational algorithms.",
    ],
    gallery: [
      {
        url: "/images/projects/project_img_9.jpeg",
        caption: "Assembled autonomous robotic rover featuring Arduino controller, dual motor drive, ultrasonic sensor, and battery pack.",
      },
    ],
  },
  {
    slug: "custom-multirotor-uav-drone",
    title: "Custom Multi-Rotor UAV (Drone) Development",
    category: "Aerospace Electronics",
    type: "UAV Systems",
    date: "General Showcase",
    image: "/images/projects/project_img_11.jpeg",
    description: "High-level systems integration of an autonomous quadcopter featuring customized flight controllers, electronic speed controllers (ESCs), high-discharge LiPo battery management, and radio telemetry.",
    stats: [
      { label: "Airframe", value: "X-Configuration Quadcopter" },
      { label: "Flight Controller", value: "Advanced IMU & Gyro" },
      { label: "Propulsion", value: "Brushless DC Motors & ESCs" },
      { label: "Power", value: "High-Discharge LiPo" },
    ],
    techStack: [
      "Flight Controller Architecture",
      "Electronic Speed Controllers (ESCs)",
      "Brushless DC Motors (BLDC)",
      "Radio Frequency Telemetry",
      "PID Stabilization Tuning",
      "Aerospace Systems Integration",
    ],
    skillsDemonstrated: [
      "Flight Controller Calibration & Firmware Configuration",
      "High-Frequency ESC Calibration & Signal Synchronization",
      "High-Current Power Distribution & LiPo Safety Protocol",
      "Vibration Isolation & Structural Rigidity Optimization",
      "Complex Multi-Disciplinary Systems Integration",
    ],
    sections: [
      {
        title: "Advanced Aerial Robotics & UAV Architecture",
        paragraphs: [
          "Unmanned Aerial Vehicles (UAVs) demand the absolute highest degree of hardware reliability, aerodynamic balance, and real-time electronic responsiveness. A single microsecond delay in motor synchronization can lead to flight destabilization.",
          "This ambitious initiative brought together senior club members to design, assemble, and tune a custom multi-rotor quadcopter from foundational components. The airframe features high-thrust brushless DC motors, four dedicated electronic speed controllers (ESCs), an advanced central flight controller with integrated 6-axis inertial measurement units (IMUs), and an omnidirectional radio receiver.",
        ],
      },
      {
        title: "PID Tuning & Flight Control Synchronization",
        paragraphs: [
          "Configuring the flight controller required extensive mathematical tuning of Proportional-Integral-Derivative (PID) control loops to ensure rapid attitude correction in turbulent wind conditions.",
          "The project developed deep competency in aerospace electronics, battery discharge rate calculations, fail-safe radio protocols, and vibration-dampening mounting techniques, paving the way for future aerial surveillance and delivery payload missions.",
        ],
      },
    ],
    milestones: [
      "Successfully assembled, wired, and calibrated a custom X-frame quadcopter UAV.",
      "Achieved stable flight dynamics and hovering via precision PID control tuning.",
      "Integrated fail-safe protocols including automatic motor cut-offs and signal-loss protections.",
    ],
    gallery: [
      {
        url: "/images/projects/project_img_11.jpeg",
        caption: "Overhead view of custom quadcopter showing central flight controller, power distribution harness, ESCs, and carbon-fiber composite arms.",
      },
    ],
  },
  {
    slug: "esp32-sound-detection-automation",
    title: "ESP32-Based Sound Detection & Automation System",
    category: "Home Automation & Security",
    type: "Acoustic IoT",
    date: "General Showcase",
    image: "/images/projects/project_img_12.jpeg",
    description: "An acoustic threshold detection and smart automation system utilizing the ESP32 microcontroller, high-sensitivity microphone modules, and isolated relay switching for smart home security.",
    stats: [
      { label: "Microcontroller", value: "ESP32 Wi-Fi & Bluetooth" },
      { label: "Sensing", value: "Acoustic Sound Transducer" },
      { label: "Actuator", value: "Optocoupled 5V Relay" },
      { label: "Application", value: "Home Automation & Security" },
    ],
    techStack: [
      "ESP32 Wi-Fi/BLE",
      "Acoustic Signal Processing",
      "Relay Switching Circuits",
      "Smart Home Automation",
      "Low-Power Embedded C++",
    ],
    skillsDemonstrated: [
      "ESP32 Microcontroller Programming & GPIO Configuration",
      "Sound Sensor Threshold Calibration & Noise Filtering",
      "Isolated Optocoupler Relay Interfacing for AC/DC Loads",
      "Wireless Telemetry Notification Integration",
      "Rapid Prototyping on Perforated Circuit Boards",
    ],
    sections: [
      {
        title: "Acoustic Sensing in Smart Environments",
        paragraphs: [
          "Sound-activated systems provide touchless convenience and immediate perimeter security detection. This proof-of-concept project investigates the use of acoustic frequency and amplitude detection to trigger automated responses in residential and industrial environments.",
          "Centering around the dual-core ESP32 microcontroller, the system interfaces with a high-sensitivity microphone module equipped with an onboard analog comparator. When an acoustic signature (such as a clap, glass break, or abnormal motor rumble) exceeds a calibrated decibel threshold, the ESP32 registers an instantaneous hardware interrupt.",
        ],
      },
      {
        title: "Wireless Notification & Isolated Relay Switching",
        paragraphs: [
          "Upon detecting the acoustic trigger, the ESP32 safely switches a high-voltage optocoupled relay module, enabling touchless appliance activation (e.g. lighting or exhaust systems).",
          "Leveraging the ESP32's onboard Wi-Fi capabilities, the module can simultaneously dispatch immediate push alerts to security dashboards, demonstrating practical IoT utility in both home automation and industrial anomaly detection.",
        ],
      },
    ],
    milestones: [
      "Constructed a reliable sound-detection trigger circuit with adjustable noise sensitivity.",
      "Achieved sub-50ms relay switching latency upon acoustic threshold breach.",
      "Established wireless notification transmission over local Wi-Fi networks.",
    ],
    gallery: [
      {
        url: "/images/projects/project_img_12.jpeg",
        caption: "Prototyping setup showing ESP32 board, acoustic sound sensor module, 5V optocoupled relay, and battery power supply.",
      },
    ],
  },
  {
    slug: "edge-ai-industrial-computing-platforms",
    title: "Edge AI & Industrial Computing Platforms",
    category: "Industrial IoT & Computing",
    type: "Hardware Infrastructure",
    date: "General Showcase",
    image: "/images/projects/project_img_16.jpeg",
    description: "Advanced embedded computing testbeds incorporating NVIDIA Jetson Nano for computer vision and deep learning, Raspberry Pi gateways, STM32 real-time controllers, and Industrial PLCs.",
    stats: [
      { label: "Edge AI", value: "NVIDIA Jetson Nano" },
      { label: "IoT Gateway", value: "Raspberry Pi 4 Model B" },
      { label: "Embedded Control", value: "STM32 ARM Cortex-M" },
      { label: "Industrial", value: "Programmable Logic Controllers" },
    ],
    techStack: [
      "NVIDIA Jetson Nano",
      "Computer Vision & Edge AI",
      "Raspberry Pi Linux Gateways",
      "STM32 ARM Microcontrollers",
      "Industrial PLCs & SCADA",
      "TensorRT & OpenCV",
    ],
    skillsDemonstrated: [
      "Edge Machine Learning & Real-Time Computer Vision",
      "Embedded Linux OS Administration & Docker Containers",
      "High-Performance ARM Cortex Firmware in Embedded C",
      "Industrial Automation & PLC Ladder Logic Programming",
      "Distributed IoT Gateway Telemetry Pipelines",
    ],
    sections: [
      {
        title: "Industry-Relevant Computing Platforms",
        paragraphs: [
          "To prepare students for competitive careers in modern deep-tech sectors, the IoT Club incorporates a diverse spectrum of industry-standard computing platforms across our projects:",
          "• NVIDIA Jetson Nano: Powering Computer Vision, Deep Learning, and Edge AI projects with 128-core GPU acceleration, enabling real-time object detection and spatial analytics directly on autonomous rovers and drones.",
          "• Raspberry Pi: Serving as resilient high-level IoT gateways, data aggregators, and running custom Linux environments for large-scale telemetry handling and local edge processing.",
          "• STM32 Microcontrollers: Focusing on high-performance 32-bit ARM Cortex embedded systems, deterministic hard real-time control, and ultra-low-power telemetry applications.",
          "• Programmable Logic Controllers (PLCs): Equipping students with hands-on industrial automation experience, relay ladder logic, and industrial fieldbus communication protocols essential for smart manufacturing and process control.",
        ],
      },
      {
        title: "Hands-on Student Training & Innovation Pipeline",
        paragraphs: [
          "Regular hands-on lab sessions allow students to write bare-metal code, train quantized neural models for edge deployment, and interface heavy industrial machinery with modern cloud dashboards.",
          "This technical diversity ensures our members possess practical, end-to-end expertise spanning low-level silicon to cloud-scale infrastructure.",
        ],
      },
    ],
    milestones: [
      "Integrated NVIDIA Jetson Nano for real-time edge computer vision inference.",
      "Deployed Raspberry Pi gateways for distributed edge-to-cloud data routing.",
      "Provided practical training on STM32 ARM microcontrollers and industrial PLCs.",
    ],
    gallery: [
      {
        url: "/images/projects/project_img_16.jpeg",
        caption: "NVIDIA Jetson Nano edge computing workstation running deep learning vision pipelines with passive heat sink.",
      },
      {
        url: "/images/projects/project_img_17.jpeg",
        caption: "Raspberry Pi embedded gateway testbed interfacing GPIO indicators and serial sensor telemetry.",
      },
    ],
  },
];
