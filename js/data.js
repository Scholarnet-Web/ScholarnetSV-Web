/*
 * ScholarNet — contenido del sitio.
 * Todos los textos vienen tal cual de la aplicación original (App.py).
 * Para actualizar becas, noticias o experiencias basta con editar este archivo.
 */
(function (S) {
  "use strict";

  const IMG = "assets/images/";

  S.site = {
    name: "ScholarNet",
    tagline: "Your dreams will be reality!",
    kicker: "FIND YOUR PERFECT SCHOLARSHIP",
    question: "WHAT TYPE OF SCHOLARSHIP WOULD YOU LIKE?"
  };

  /* Redes y contacto (pantalla Contact us).
     Facebook: la app original solo tenía el usuario y un enlace de ejemplo
     ("TuPagina"). Cuando exista la URL real, escríbela en `url` y el sitio
     la convertirá automáticamente en enlace. */
  S.contact = {
    intro: "Feel free to reach out to us at any time.\nWe'll get back to you as soon as possible",
    phone: { label: "7681 - 8427", href: "tel:76818427" },
    instagram: { label: "scholarnet_sv", url: "https://www.instagram.com/scholarnet.sv/" },
    facebook: { label: "scholarnet_sv", url: "" }
  };

  S.about = {
    mission: "The mission of our app is to provide access to complete, up-to-date and reliable information about scholarships and student aid, facilitating the search for opportunities to achieve their academic goals.",
    vision: "To be the leading platform for the promotion of educational opportunities, recognized for its commitment to helping students access scholarships and grants.",
    values: ["INCLUSIVE", "ENGAGEMENT", "UNIVERSAL", "INNOVATION"]
  };

  S.team = {
    title: "Our Team",
    image: IMG + "photos/Media.jpeg",
    alt: "The ScholarNet team: six students in school uniforms posing in front of the Digital Talent and ¡Supérate! ADOC sign",
    text: "We are Scholarnet, committed to helping students find the best national and international scholarship opportunities to achieve their academic dreams."
  };

  /* ---------- Becas ---------- */
  S.listings = {
    national: {
      title: "NATIONAL SCHOLARSHIPS",
      image: IMG + "photos/graduado.jpeg",
      alt: "A graduate in cap and gown raising both arms, seen from behind",
      intro: "Explore national scholarships designed to support talented students in your country. Take advantage of these opportunities to advance your academic career."
    },
    international: {
      title: "INTERNATIONAL SCHOLARSHIPS",
      image: IMG + "photos/mundo.jpeg",
      alt: "A hand holding a globe made of world flags",
      intro: "Explore scholarships from around the world designed to help talented students like you study abroad, gain global experiences, and access world-class education."
    }
  };

  S.scholarships = [
    /* ----- Nacionales ----- */
    {
      id: "gloria-kriete", type: "national",
      nombre: "Fundación Gloria Kriete",
      imagen: IMG + "scholarships/kriete.png",
      titulo: "Fundación Gloria Kriete Scholarship",
      descripcion: "Scholarships and programs that support Salvadoran youth through education, training, and social development initiatives.",
      fecha: "August 31, 2025",
      requisitos: [
        "Be a Salvadoran citizen",
        "Meet the specific criteria of the selected program",
        "Provide academic records and identification documents",
        "Participate in the selection process"
      ],
      periodo: "May – July 2025",
      inicio: "January 2026",
      link: "https://fundaciongloriakriete.org/en_us/"
    },
    {
      id: "superate-adoc", type: "national",
      nombre: "Centro ¡Supérate! ADOC",
      imagen: IMG + "scholarships/adoc.png",
      titulo: "¡Supérate! ADOC",
      descripcion: "Academic and values-based training for students with limited resources.",
      fecha: "October 5, 2025",
      requisitos: [
        "Be currently in 9th–11th grade at a Salvadoran school",
        "Maintain GPA ≥ 8.0 (on 10-scale grading)",
        "Pass admission exam and personal interview",
        "Demonstrate leadership and community involvement"
      ],
      periodo: "July – September 2025",
      inicio: "January 2026",
      link: "https://superate.org.sv/"
    },
    {
      id: "jovenes-talento-ues", type: "national",
      nombre: "Programa Jóvenes Talento UES",
      imagen: IMG + "scholarships/jovenes-talento.png",
      titulo: "Jóvenes Talento UES",
      descripcion: "Scholarship for outstanding students to develop academic and research skills in STEM areas.",
      fecha: "July 20, 2025",
      requisitos: [
        "High school graduate with GPA ≥ 4.0 (on 5.0 scale)",
        "Accepted to UES pre-university program or academic test",
        "Provide a research proposal or portfolio",
        "Interview by selection committee"
      ],
      periodo: "May – June 2025",
      inicio: "September 2025",
      link: "https://www.jovenestalento.edu.sv/"
    },
    {
      id: "mined", type: "national",
      nombre: "Beca Ministerio de Educación",
      imagen: IMG + "scholarships/ministerio.png",
      titulo: "MINED Scholarship",
      descripcion: "Financial aid for low-income students to pursue higher education in El Salvador.",
      fecha: "August 10, 2025",
      requisitos: [
        "Student enrolled in public high school final year",
        "Family income below the national poverty line",
        "Have a GPA ≥ 7.5 (on 10-scale grading)",
        "Submit household income documentation"
      ],
      periodo: "May – July 2025",
      inicio: "September 2025",
      link: "https://portal.esco.gob.sv/es-ES/0/PUB/Home/Becas_Show?nav=AeAE16JK&niv=1"
    },
    {
      id: "avianca", type: "national",
      nombre: "Beca Empresarial AVIANCA",
      imagen: IMG + "scholarships/avianca.png",
      titulo: "Avianca Academic Excellence",
      descripcion: "Supports top students in tourism and aeronautical studies.",
      fecha: "September 1, 2025",
      requisitos: [
        "Enroll in tourism or aeronautics program",
        "GPA ≥ 3.7 (on 4.0 scale)",
        "Submit motivational essay",
        "Demonstrate leadership potential"
      ],
      periodo: "June – August 2025",
      inicio: "January 2026",
      link: "https://jobs.avianca.com/content/Becas-Mujeres-Pilotos/?locale=es_ES"
    },

    /* ----- Internacionales ----- */
    {
      id: "salamanca", type: "international",
      nombre: "University of Salamanca",
      imagen: IMG + "scholarships/salamanca.png",
      titulo: "University of Salamanca Scholarship",
      descripcion: "Scholarships for Latin American students to pursue master's or doctoral studies in Spain.",
      fecha: "August 31, 2025",
      requisitos: [
        "Bachelor’s degree with GPA ≥ 8.0 (on 10-scale)",
        "Spanish proficiency (DELE B2 or equivalent)",
        "Research proposal or statement of purpose",
        "Two academic recommendation letters"
      ],
      periodo: "April – July 2025",
      inicio: "October 2025",
      link: "https://www.usal.es/"
    },
    {
      id: "walton", type: "international",
      nombre: "Walton International Scholarship",
      imagen: IMG + "scholarships/walton.png",
      titulo: "Walton Scholarship",
      descripcion: "Full scholarships for Central American students to study at universities in the United States.",
      fecha: "October 1, 2025",
      requisitos: [
        "Completed undergraduate studies with GPA ≥ 3.0 (on 4.0 scale)",
        "TOEFL ≥ 90 or IELTS ≥ 6.5",
        "Leadership in community or university",
        "Submit project or thesis summary"
      ],
      periodo: "May – August 2025",
      inicio: "Fall 2026",
      link: "https://www.wispweb.org/"
    },
    {
      id: "chevening", type: "international",
      nombre: "Chevening Scholarship",
      imagen: IMG + "scholarships/chevening.png",
      titulo: "Chevening Scholarship",
      descripcion: "UK government scholarships for future leaders to study a master's degree in the United Kingdom.",
      fecha: "November 7, 2025",
      requisitos: [
        "Undergraduate degree with first-class or upper second-class honors",
        "Minimum two years of work experience",
        "Leadership potential, as demonstrated in essays",
        "References and English language proficiency"
      ],
      periodo: "August – October 2025",
      inicio: "September 2026",
      link: "https://www.chevening.org/scholarships/"
    },
    {
      id: "erasmus", type: "international",
      nombre: "Erasmus+ Program",
      imagen: IMG + "scholarships/erasmus.png",
      titulo: "Erasmus+ Scholarship",
      descripcion: "Funding for students to study in various European countries through exchange programs.",
      fecha: "June 15, 2025",
      requisitos: [
        "Enrolled in an accredited university program in home country",
        "Nomination by home university",
        "Language proficiency depending on host country",
        "Academic transcript"
      ],
      periodo: "January – April 2025",
      inicio: "September 2025",
      link: "https://erasmus-plus.ec.europa.eu/opportunities/opportunities-for-individuals/students/erasmus-mundus-joint-masters"
    },
    {
      id: "daad", type: "international",
      nombre: "DAAD Scholarship",
      imagen: IMG + "scholarships/daad.png",
      titulo: "DAAD Scholarship",
      descripcion: "Scholarships for international students to study or research in Germany.",
      fecha: "October 31, 2025",
      requisitos: [
        "University degree with top-class rankings",
        "German or English proficiency (depending on program)",
        "Research proposal or academic portfolio",
        "Two academic references"
      ],
      periodo: "May – September 2025",
      inicio: "April 2026",
      link: "https://www.daad.de/en/studying-in-germany/scholarships/"
    }
  ];

  /* ---------- Noticias ---------- */
  S.news = [
    {
      id: "mineducyt-itcha",
      img: IMG + "news/itcha.png",
      alt: "ITCHA institute seal",
      titulo: "MINEDUCYT – ITCHA Scholarships",
      resumen: "A new scholarship program for students across the country.",
      contenido: "The Ministry of Education offers international scholarships covering tuition, accommodation, and transport."
    },
    {
      id: "ues-paid",
      img: IMG + "news/ues.png",
      alt: "University of El Salvador seal",
      titulo: "Paid Scholarships – UES",
      resumen: "A paid scholarship program for university students with good grades.",
      contenido: "The University of El Salvador gives paid scholarships to students with a minimum grade average of 7.0 and full study load."
    }
  ];

  /* ---------- Experiencias ---------- */
  S.experiences = [
    {
      id: "kenia-aguilar", foco: "50% 25%",
      img: IMG + "experiences/Kenia.jpg",
      titulo: "Experience Fundación ¡ADOC!",
      autor: "Kenia Aguilar",
      degree: "Graduated",
      center: "Centro ¡Supérate! ADOC\nProm 2018",
      texto: "Being a scholarship student at Centro Supérate ADOC was an amazing experience. It was a safe space to learn, express myself, and form friendships. Everything I gained is valuable for my future studies and career. The Supérate culture taught me that “impossible” doesn’t exist and inspired me to give back. I highly recommend this opportunity!"
    },
    {
      id: "camila-arias", foco: "55% 65%",
      img: IMG + "experiences/cami.jpeg",
      titulo: "Experience Fundación ¡ADOC!",
      autor: "Camila Arias",
      degree: "Undergraduated",
      center: "Centro ¡Supérate! ADOC\nProm 2025",
      texto: "¡Supérate! ADOC has played a key role in my academic and personal development. Through its programs, I have strengthened my skills, enhanced my confidence, and prepared myself to face future challenges. This scholarship has provided the guidance and tools I needed to be in a strong position today. I am truly grateful for the positive impact it has had on my life."
    },
    {
      id: "xavier-maldonado", foco: "50% 25%",
      img: IMG + "experiences/xav.jpeg",
      titulo: "Walton Experience",
      autor: "Xavier Maldonado",
      degree: "Undergraduated",
      center: "Walton International",
      texto: "The Walton scholarship program completely changed my life. I have learned not only the parts of my career but also applied to different leadership positions that gave me first-hand experience, unforgettable friendships, and an academic formation of excellence. The campus is not very big nor very small, one can get to know all the students and it feels like a great community. Friendships become inseparable as they grow."
    },
    {
      id: "kevin-hernandez", foco: "50% 22%",
      img: IMG + "experiences/Kevin.jpeg",
      titulo: "Walton Experience",
      autor: "Kevin Hernández",
      degree: "Graduated",
      center: "Walton International",
      texto: "This scholarship was a great experience because I had the opportunity to grow both academically and professionally. In addition, I was able to meet people from other cultures and backgrounds, which makes the experience of studying abroad truly amazing. A great opportunity!"
    }
  ];
})((window.Scholarnet = window.Scholarnet || {}));
