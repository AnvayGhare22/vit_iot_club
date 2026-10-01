export interface TeamMember {
  name: string;
  role: string;
  domain: string;
  photo?: string | null;
  linkedin?: string;
  github?: string;
  email?: string;
  contact?: string;
}

export interface TeamGroup {
  name: string;
  members: TeamMember[];
}

export const coreCommittee: TeamMember[] = [
  {
    "name": "Hamd Ansari",
    "role": "Chairperson",
    "domain": "Core Committee",
    "photo": "/images/team/hamd-ansari.jpeg",
    "linkedin": "https://www.linkedin.com/in/hamd-ansari",
    "email": "hamd.ansari@vit.edu"
  },
  {
    "name": "Harshvardhan Patil",
    "role": "Secretary",
    "domain": "Core Committee",
    "photo": "/images/team/harshvardhan-patil.jpg",
    "linkedin": "https://www.linkedin.com/in/harshvardhan-patil",
    "email": "harshvardhan.patil@vit.edu"
  },
  {
    "name": "Deepraj Patil",
    "role": "Treasurer",
    "domain": "Core Committee",
    "photo": "/images/team/deepraj-patil.jpg",
    "linkedin": "https://www.linkedin.com/in/deepraj-patil",
    "email": "deepraj.patil@vit.edu"
  },
  {
    "name": "Suraj Yadav",
    "role": "Event Coordinator",
    "domain": "Core Committee",
    "photo": "/images/team/suraj-yadav.jpg",
    "linkedin": "https://www.linkedin.com/in/suraj-yadav",
    "email": "suraj.yadav@vit.edu"
  },
  {
    "name": "Samruddhi Kabade",
    "role": "PRO",
    "domain": "Core Committee",
    "photo": "/images/team/samruddhi-kabade.png",
    "linkedin": "https://www.linkedin.com/in/samruddhi-kabade",
    "email": "samruddhi.kabade@vit.edu"
  }
];

export const domainHeads: TeamMember[] = [
  {
    "name": "Lokesh Purohit",
    "role": "Finance Head",
    "domain": "Finance Domain",
    "photo": "/images/team/lokesh-purohit.jpeg",
    "linkedin": "https://www.linkedin.com/in/lokesh-purohit-tech?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    "github": "",
    "email": "lokesh.1251140283@vit.edu",
    "contact": ""
  },
  {
    "name": "Divita Rao",
    "role": "Event Execution Head",
    "domain": "Event Execution Domain",
    "photo": "/images/team/divita-rao.png",
    "linkedin": "https://www.linkedin.com/in/divita-rao-645130346?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "github": "",
    "email": "divita.rao24@vit.edu",
    "contact": ""
  },
  {
    "name": "Vihaan Dhanapune",
    "role": "Publicity Head",
    "domain": "Publicity Domain",
    "photo": "/images/team/vihaan-dhanapune.jpeg",
    "linkedin": "https://www.linkedin.com/in/vihaan-dhanapune-56ba72329?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    "github": "",
    "email": "vihaan.dhanapune24@vit.edu",
    "contact": ""
  },
  {
    "name": "Mayank Patil",
    "role": "Activity Head",
    "domain": "Activity Domain",
    "photo": "/images/team/mayank-patil-new.jpg",
    "linkedin": "https://www.linkedin.com/in/mayank-patil-b10a94331?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "github": "",
    "email": "mayank.patil24@vit.edu",
    "contact": ""
  },
  {
    "name": "Vanshika Dekate",
    "role": "Documentation Head",
    "domain": "Documentation Domain",
    "photo": "/images/team/vanshika-dekate.jpg",
    "linkedin": "https://www.linkedin.com/in/vanshika-dekate-57634b397?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "github": "https://github.com/VanshikaDekate",
    "email": "vivek.1251100373@vit.edu",
    "contact": ""
  },
  {
    "name": "Yash Patil",
    "role": "Technical Head",
    "domain": "Technical Domain",
    "photo": "/images/team/yash-patil.jpg",
    "linkedin": "",
    "github": "https://www.github.com/yaxhstdio",
    "email": "yash.patil242@vit.edu",
    "contact": ""
  },
  {
    "name": "Sumit Rajput",
    "role": "Social Media Head",
    "domain": "Social Media Domain",
    "photo": "/images/team/sumit-rajput.jpeg",
    "linkedin": "https://www.linkedin.com/in/sumit-rajput-997067352?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "github": "",
    "email": "sumit.rajput24@vit.edu",
    "contact": ""
  },
  {
    "name": "Chaitanya Pilane",
    "role": "Design Head",
    "domain": "Design Domain",
    "photo": "/images/team/chaitanya-pilane-new.jpg",
    "linkedin": "https://www.linkedin.com/in/chaitanya-pilane-04322228a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "github": "",
    "email": "chaitanyapilane827@gmail.com",
    "contact": ""
  },
  {
    "name": "Onkar Ekatpure",
    "role": "Project Head",
    "domain": "Project Domain",
    "photo": "/images/team/onkar-ekatpure.jpeg",
    "linkedin": "https://www.linkedin.com/in/onkar-ekatpure-649341341?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "github": "https://github.com/onkarekatpure-cpu",
    "email": "onkarekatpure98081@gmail.com",
    "contact": ""
  }
];

export const teams: TeamGroup[] = [
  {
    "name": "Technical Team",
    "members": [
      {
        "name": "Anvay Ghare",
        "role": "Joint Head",
        "domain": "Technical Domain",
        "photo": "/images/team/anvay-ghare.png",
        "linkedin": "https://www.linkedin.com/in/anvay-ghare-154794364?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "https://github.com/AnvayGhare22",
        "email": "anvay.1251100406@vit.edu",
        "contact": ""
      },
      {
        "name": "Aarush Gajanan Jewalikar",
        "role": "Member",
        "domain": "Technical Domain",
        "photo": null,
        "linkedin": "https://www.linkedin.com/in/aarush-jewalikar-a1180b385?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "https://github.com/aarushcode-ster",
        "email": "aarush.1251100505@vit.edu",
        "contact": "8.459427742E9"
      },
      {
        "name": "Dhruv Agarwal",
        "role": "Member",
        "domain": "Technical Domain",
        "photo": "/images/team/dhruv-agarwal-new.jpeg",
        "linkedin": "https://www.linkedin.com/in/dhruv-agarwal-entc?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        "github": "https://github.com/DhruvsProjects",
        "email": "dhruv.agarwal2807@gmail.com",
        "contact": ""
      },
      {
        "name": "Manasi sanjay Ambekar",
        "role": "Member",
        "domain": "Technical Domain",
        "photo": null,
        "linkedin": "https://www.linkedin.com/in/manasi-ambekar-7276a1222",
        "github": "https://github.com/ambekarsmanasi-lab",
        "email": "manasi.1251140004@vit.edu",
        "contact": "8.522958138E9"
      },
      {
        "name": "Pranit Dhanade",
        "role": "Member",
        "domain": "Technical Domain",
        "photo": "/images/team/pranit-dhanade.jpg",
        "linkedin": "https://www.linkedin.com/in/pranit-dhanade-951478201?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "https://github.com/pranitdhanade-sys",
        "email": "pranit.dhanade@gmail.com",
        "contact": ""
      },
      {
        "name": "Yash Babrekar",
        "role": "Member",
        "domain": "Technical Domain",
        "photo": null,
        "linkedin": "https://www.linkedin.com/in/yash-babrekar07",
        "github": "https://github.com/yashbabrekar07",
        "email": "yash.1251050303@vit.edu",
        "contact": "8.983664417E9"
      }
    ]
  },
  {
    "name": "Project Team",
    "members": [
      {
        "name": "Parth Sadanand Debadwar",
        "role": "Joint Head",
        "domain": "Project Domain",
        "photo": null,
        "linkedin": "https://www.linkedin.com/in/parth-debadwar-005205377?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "https://github.com/psd180207",
        "email": "parth.1251140047@vit.edu",
        "contact": ""
      },
      {
        "name": "Yadnesh Purushottam Gunjalpatil",
        "role": "Joint Head",
        "domain": "Project Domain",
        "photo": "/images/team/yadnesh-gunjal-patil-new.jpg",
        "linkedin": "https://www.linkedin.com/in/yadnesh-gunjalpatil-826981332?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "https://github.com/gunjalpatilyadnesh-bit",
        "email": "gunjalpatil.yadnesh@gmail.com",
        "contact": ""
      },
      {
        "name": "Adarsh Bansode",
        "role": "Member",
        "domain": "Project Domain",
        "photo": null,
        "linkedin": "",
        "github": "",
        "email": "adarshbansode04@gmail.com",
        "contact": ""
      },
      {
        "name": "Aditya Milind Mamarde",
        "role": "Member",
        "domain": "Project Domain",
        "photo": "/images/team/aditya-mamarde-new.png",
        "linkedin": "https://www.linkedin.com/in/aditya-mamarde-a992b938a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "https://github.com/adityamamarde-sudo",
        "email": "aditya.1251140087@vit.edu",
        "contact": ""
      },
      {
        "name": "Aditya Sakharam Shinde",
        "role": "Member",
        "domain": "Project Domain",
        "photo": null,
        "linkedin": "https://www.linkedin.com/in/aditya-shinde-478048375",
        "github": "",
        "email": "aditya.1251140211@vit.edu",
        "contact": "7.058595405E9"
      },
      {
        "name": "Anant Bardia",
        "role": "Member",
        "domain": "Project Domain",
        "photo": "/images/team/anant-bardia.jpg",
        "linkedin": "https://www.linkedin.com/in/anant-bardia",
        "github": "",
        "email": "anant.1251100403@vit.edu",
        "contact": ""
      },
      {
        "name": "Aryan Anand Gham",
        "role": "Member",
        "domain": "Project Domain",
        "photo": "/images/team/aryan-gham.jpg",
        "linkedin": "https://www.linkedin.com/in/aryan-gham-0a910a388/",
        "github": "https://github.com/Pyavexor",
        "email": "aryan.1251140212@vit.edu",
        "contact": ""
      },
      {
        "name": "Atharva Jaiswal",
        "role": "Member",
        "domain": "Project Domain",
        "photo": "/images/team/atharva-jaiswal.jpg",
        "linkedin": "https://www.linkedin.com/in/atharva-jaiswal-817b7a395?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "",
        "email": "atharvaj.2606@gmail.com",
        "contact": ""
      },
      {
        "name": "Ayush Abhijit Patil",
        "role": "Member",
        "domain": "Project Domain",
        "photo": null,
        "linkedin": "https://www.linkedin.com/in/ayush-patil-3257103a5?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "https://github.com/ayushpatilsan-glitch",
        "email": "ayushpatilsan@gmail.com",
        "contact": "9.373360298E9"
      },
      {
        "name": "Ayush Ajay Joshi",
        "role": "Member",
        "domain": "Project Domain",
        "photo": null,
        "linkedin": "https://www.linkedin.com/in/ayush-joshi-984745314?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "",
        "email": "ayush.1262100151@vit.edu",
        "contact": "8.767275311E9"
      },
      {
        "name": "Ayush Shete",
        "role": "Member",
        "domain": "Project Domain",
        "photo": "/images/team/ayush-shete-new.png",
        "linkedin": "https://www.linkedin.com/in/ayushshete",
        "github": "",
        "email": "ayushete7925@gmail.com",
        "contact": ""
      },
      {
        "name": "Bhakti Anantkumar Nemane",
        "role": "Member",
        "domain": "Project Domain",
        "photo": "/images/team/bhakti-nemane-new.png",
        "linkedin": "https://www.linkedin.com/in/bhakti-nemane-866988333?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "",
        "email": "bhakti.nemane24@vit.edu",
        "contact": ""
      },
      {
        "name": "Gautam Ashish Agrawal",
        "role": "Member",
        "domain": "Project Domain",
        "photo": null,
        "linkedin": "https://www.linkedin.com/in/gautam-agrawal-a7b9b6385?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "",
        "email": "gautam.1251140096@vit.edu",
        "contact": "9.35696762E9"
      },
      {
        "name": "Harshvardhan Manoj Jadhav",
        "role": "Member",
        "domain": "Project Domain",
        "photo": null,
        "linkedin": "https://www.linkedin.com/in/harshvardhan-jadhav-36b73838a",
        "github": "",
        "email": "harshvardhan.1251140076@vit.edu",
        "contact": ""
      },
      {
        "name": "Ishika Sumesh Pujari",
        "role": "Member",
        "domain": "Project Domain",
        "photo": "/images/team/ishika-pujari-new.jpg",
        "linkedin": "https://www.linkedin.com/in/ishikapujari",
        "github": "https://github.com/ishikapujari",
        "email": "ishika.pujari24@vit.edu",
        "contact": ""
      },
      {
        "name": "Kajal Ajay Sharma",
        "role": "Member",
        "domain": "Project Domain",
        "photo": "/images/team/kajal-sharma.png",
        "linkedin": "https://www.linkedin.com/in/kajal-sharma-82a449381?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "github": "",
        "email": "sharmakajal0713@gmail.com",
        "contact": ""
      },
      {
        "name": "Nayan Sanjay Wani",
        "role": "Member",
        "domain": "Project Domain",
        "photo": null,
        "linkedin": "https://www.linkedin.com/in/nayan-wani-162024300?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "",
        "email": "nayan.1251100133@vit.edu",
        "contact": ""
      },
      {
        "name": "Parth Gurav",
        "role": "Member",
        "domain": "Project Domain",
        "photo": "/images/team/parth-gurav.jpg",
        "linkedin": "https://www.linkedin.com/in/parth-gurav-249a96246?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "",
        "email": "parthgurav313@gmail.com",
        "contact": ""
      },
      {
        "name": "Piyush Dnyaneshwar Suryawanshi",
        "role": "Member",
        "domain": "Project Domain",
        "photo": "/images/team/piyush-suryawanshi.jpeg",
        "linkedin": "https://www.linkedin.com/in/piyush-suryawanshi-8a4519382?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "",
        "email": "piyush.1251100529@vit.edu",
        "contact": ""
      }
    ]
  },
  {
    "name": "Social Media Team",
    "members": [
      {
        "name": "Praful Sunil Thorat",
        "role": "Joint Head",
        "domain": "Social Media Domain",
        "photo": null,
        "linkedin": "https://www.linkedin.com/in/praful-thorat?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "",
        "email": "prafulthorat1212@gmail.com",
        "contact": ""
      },
      {
        "name": "Ayushi Rajkumar Jef",
        "role": "Member",
        "domain": "Social Media Domain",
        "photo": null,
        "linkedin": "https://www.linkedin.com/in/ayushi-jef-127833385?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "",
        "email": "ayushi.1251140258@vit.edu",
        "contact": ""
      },
      {
        "name": "Piyush Balaji Dahatonde",
        "role": "Member",
        "domain": "Social Media Domain",
        "photo": "/images/team/piyush-dahatonde-new.png",
        "linkedin": "https://www.linkedin.com/in/piyush-dahatonde-6b79b8385?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "",
        "email": "piyush.1251140071@vit.edu",
        "contact": ""
      },
      {
        "name": "Prem devkate",
        "role": "Member",
        "domain": "Social Media Domain",
        "photo": null,
        "linkedin": "https://www.linkedin.com/in/prem-devkate-399679426?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "",
        "email": "prem.1251140245@vit.edu",
        "contact": ""
      },
      {
        "name": "Soyam Dilip Vaidya",
        "role": "Member",
        "domain": "Social Media Domain",
        "photo": null,
        "linkedin": "",
        "github": "",
        "email": "soyam.1251100071@vit.edu",
        "contact": ""
      },
      {
        "name": "Utkarsh Danane",
        "role": "Member",
        "domain": "Social Media Domain",
        "photo": null,
        "linkedin": "",
        "github": "",
        "email": "utkarshdanane@gmail.com",
        "contact": ""
      }
    ]
  },
  {
    "name": "Finance Team",
    "members": [
      {
        "name": "Arya Joshi",
        "role": "Joint Head",
        "domain": "Finance Domain",
        "photo": null,
        "linkedin": "https://www.linkedin.com/in/arya-joshi-1730252a1?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "https://\"aryajoshi218-ux\"  https://github.com/aryajoshi218-ux#:~:text=%C2%A0Repository%20items-,aryajoshi218%2Dux,-Set%20status",
        "email": "arya.1251140060@vit.edu",
        "contact": ""
      },
      {
        "name": "Easshan Parab",
        "role": "Member",
        "domain": "Finance Domain",
        "photo": null,
        "linkedin": "https://www.linkedin.com/in/easshan-parab-b6610042a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "https://N/A",
        "email": "easshan.1251070362@vit.edu",
        "contact": "9.833295137E9"
      },
      {
        "name": "Kartik kishor patil",
        "role": "Member",
        "domain": "Finance Domain",
        "photo": null,
        "linkedin": "",
        "github": "",
        "email": "kartik.patil24@vit.edu",
        "contact": ""
      },
      {
        "name": "Nachiket Ashish Dolhare",
        "role": "Member",
        "domain": "Finance Domain",
        "photo": null,
        "linkedin": "https://www.linkedin.com/in/nachiket-dolhare-384b1635b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "https://github.com/nachiketdolhare028-create",
        "email": "nachiket.1251140039@vit.edu",
        "contact": "7.822901506E9"
      },
      {
        "name": "Pranav balbhim jagtap",
        "role": "Member",
        "domain": "Finance Domain",
        "photo": null,
        "linkedin": "https://www.linkedin.com/in/pranav-jagtap-600815385?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "",
        "email": "pranav.1251100478@vit.edu",
        "contact": "7.498813343E9"
      },
      {
        "name": "Prithvirajsingh Chouhan",
        "role": "Member",
        "domain": "Finance Domain",
        "photo": null,
        "linkedin": "",
        "github": "",
        "email": "prithvirajsingh.1251140024@vit.edu",
        "contact": ""
      },
      {
        "name": "Saurabh Shivdarshan Pawar",
        "role": "Member",
        "domain": "Finance Domain",
        "photo": null,
        "linkedin": "https://www.linkedin.com/in/saurabh-pawar-438a17345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "github": "",
        "email": "saurabh.pawar24@vit.edu",
        "contact": ""
      },
      {
        "name": "Shivam Sanjay Deshmukh",
        "role": "Member",
        "domain": "Finance Domain",
        "photo": null,
        "linkedin": "https://www.linkedin.com/in/shivam-deshmukh-806629384?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "https://github.com/shivdeshmukh837-web",
        "email": "shivam.1251140235@vit.edu",
        "contact": "9.307929159E9"
      },
      {
        "name": "Vedant Vaibhav Pisal",
        "role": "Member",
        "domain": "Finance Domain",
        "photo": null,
        "linkedin": "https://www.linkedin.com/in/vedant-pisal-176627339/",
        "github": "https://github.com/vedant6262?tab=repositories",
        "email": "vedant.pisal24@vit.edu",
        "contact": ""
      }
    ]
  },
  {
    "name": "Documentation Team",
    "members": [
      {
        "name": "Suyash Satish Jadhav",
        "role": "Joint Head",
        "domain": "Documentation Domain",
        "photo": "/images/team/suyash-jadhav.jpg",
        "linkedin": "https://www.linkedin.com/in/suyash-jadhav",
        "github": "",
        "email": "suyashjadhav9977@gmail.com",
        "contact": ""
      },
      {
        "name": "Chaitanya Kulkarni",
        "role": "Member",
        "domain": "Documentation Domain",
        "photo": null,
        "linkedin": "https://www.linkedin.com/in/chaitanya-kulkarni-a95a2b385?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "https://github.com/ckulkarni360-bit",
        "email": "ckulkarni360@gmail.com",
        "contact": "9.699802149E9"
      },
      {
        "name": "Gauri Hodlurkar",
        "role": "Member",
        "domain": "Documentation Domain",
        "photo": null,
        "linkedin": "https://www.linkedin.com/in/gauri-hodlurkar-6aa1a6387?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "",
        "email": "gauri.1251140225@vit.edu",
        "contact": "9.209477339E9"
      },
      {
        "name": "Lata Mahesh parab",
        "role": "Member",
        "domain": "Documentation Domain",
        "photo": null,
        "linkedin": "",
        "github": "",
        "email": "lata.1251100026@vit.edu",
        "contact": ""
      },
      {
        "name": "Omkar Sharad Zadbuke",
        "role": "Member",
        "domain": "Documentation Domain",
        "photo": "/images/team/omkar-zadbuke.jpg",
        "linkedin": "https://www.linkedin.com/in/omkar-zadbuke-700a47385?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "",
        "email": "omkar.1251140249@vit.edu",
        "contact": "7.219782545E9"
      },
      {
        "name": "Rohan Sanjay Deshmukh",
        "role": "Member",
        "domain": "Documentation Domain",
        "photo": null,
        "linkedin": "https://www.linkedin.com/in/rohan-deshmukh-bb7b51306?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "",
        "email": "rohan.1251150083@vit.edu",
        "contact": "9.359578889E9"
      }
    ]
  },
  {
    "name": "Publicity Team",
    "members": [
      {
        "name": "Harshvardhan Sanjay Tile",
        "role": "Joint Head",
        "domain": "Publicity Domain",
        "photo": null,
        "linkedin": "https://www.linkedin.com/in/harshvardhan-tile-7198a6393?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "",
        "email": "harshvardhan.1251140226@vit.edu",
        "contact": ""
      },
      {
        "name": "Rajwardhan Yewale",
        "role": "Member",
        "domain": "Publicity Domain",
        "photo": null,
        "linkedin": "https://www.linkedin.com/in/rajwardhan-yewale-78242739b/",
        "github": "https://github.com/rajwardhan1251140052-sudo",
        "email": "rajwardhan.1251140052@vit.edu",
        "contact": ""
      },
      {
        "name": "Yash Santosh Deshmukh",
        "role": "Member",
        "domain": "Publicity Domain",
        "photo": null,
        "linkedin": "https://www.linkedin.com/safety/go/?url=https%3A%2F%2Flnkd%2Ein%2FgnmXZHkG&urlhash=6H-p&mt=f2-DPJB4A0bpH60C9NRBVutjSfaUUCgqlalMBjf2T_JZcCM8QO_jLZwLz6cPv0bDEpzkzOVSvZCaAnrvYyGBw5XZ9ffDiSvRIQTFj9lqv9o50kVc5ws60nBUYHI&isSdui=true",
        "github": "https://github.com/dyash1304-afk",
        "email": "yash.1251140169@vit.edu",
        "contact": "9.359599538E9"
      }
    ]
  },
  {
    "name": "Activity Team",
    "members": [
      {
        "name": "Masira Hirasaheb Eksambe",
        "role": "Joint Head",
        "domain": "Activity Domain",
        "photo": null,
        "linkedin": "https://www.linkedin.com/in/masira-eksambe-2b293b400?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "https://github.com/masira1251100531-byte",
        "email": "masira.1251100531@vit.edu",
        "contact": ""
      },
      {
        "name": "Kapil Savargaonkar",
        "role": "Member",
        "domain": "Activity Domain",
        "photo": "/images/team/kapil-savargaonkar.jpg",
        "linkedin": "https://www.linkedin.com/in/ kapil-savargaonkar-b743a636b",
        "github": "",
        "email": "kapil.1251140010@vit.edu",
        "contact": ""
      },
      {
        "name": "M. Tahmid Shaikh",
        "role": "Member",
        "domain": "Activity Domain",
        "photo": "/images/team/tahmid-shaikh.png",
        "linkedin": "https://www.linkedin.com/in/m-tahmid-shaikh-6407a539a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "https://github.com/Tahmid-Shaikh",
        "email": "shaikhtahmid06@gmail.com",
        "contact": ""
      },
      {
        "name": "Manthan Ganesh Kamble",
        "role": "Member",
        "domain": "Activity Domain",
        "photo": null,
        "linkedin": "https://www.linkedin.com/in/manthan-kamble-92687a38a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "",
        "email": "manthan.1251140285@vit.edu",
        "contact": "9.226484982E9"
      },
      {
        "name": "Samruddhi Hemant Shinde",
        "role": "Member",
        "domain": "Activity Domain",
        "photo": null,
        "linkedin": "",
        "github": "",
        "email": "samruddhi606@gmail.com",
        "contact": ""
      },
      {
        "name": "Supriya rohidas koli",
        "role": "Member",
        "domain": "Activity Domain",
        "photo": null,
        "linkedin": "",
        "github": "https://supriyak717",
        "email": "supriyakoli2607@gmail.com",
        "contact": ""
      }
    ]
  },
  {
    "name": "Design Team",
    "members": [
      {
        "name": "Tanavi Donewar",
        "role": "Joint Head",
        "domain": "Design Domain",
        "photo": "/images/team/tanavi-donewar.png",
        "linkedin": "https://www.linkedin.com/in/tanavi-donewar-903380327?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "",
        "email": "tanavi.donewar24@vit.edu",
        "contact": ""
      },
      {
        "name": "Namrata Vinod Niture",
        "role": "Member",
        "domain": "Design Domain",
        "photo": null,
        "linkedin": "https://www.linkedin.com/in/namrata-niture-b3240b385?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "github": "",
        "email": "namrata.1251140040@vit.edu",
        "contact": ""
      },
      {
        "name": "Shelke Om Sandip",
        "role": "Member",
        "domain": "Design Domain",
        "photo": "/images/team/om-shelke.jpg",
        "linkedin": "https://www.linkedin.com/in/om-shelke-a6861a29b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "https://NA",
        "email": "om.1252100034@vit.edu",
        "contact": "9.699778136E9"
      },
      {
        "name": "Tanvi Yuraj Gaikwad",
        "role": "Member",
        "domain": "Design Domain",
        "photo": null,
        "linkedin": "https://www.linkedin.com/in/tanvi-gaikwad-4418b5392?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "",
        "email": "tanvi.1251150121@vit.edu",
        "contact": ""
      }
    ]
  },
  {
    "name": "Event Execution Team",
    "members": [
      {
        "name": "Channusingh Ranjeet Patil",
        "role": "Joint Head",
        "domain": "Event Execution Domain",
        "photo": null,
        "linkedin": "https://www.linkedin.com/in/channusingh-patil-5813033a0?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "",
        "email": "channusingh.1251080225@vit.edu",
        "contact": ""
      },
      {
        "name": "Easshan Parab",
        "role": "Member",
        "domain": "Event Execution Domain",
        "photo": null,
        "linkedin": "https://www.linkedin.com/in/easshan-parab-b6610042a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "https://N/A",
        "email": "easshan.1251070362@vit.edu",
        "contact": "9.833295137E9"
      },
      {
        "name": "Nachiket Ashish Dolhare",
        "role": "Member",
        "domain": "Event Execution Domain",
        "photo": null,
        "linkedin": "https://www.linkedin.com/in/nachiket-dolhare-384b1635b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "https://github.com/nachiketdolhare028-create",
        "email": "nachiket.1251140039@vit.edu",
        "contact": "7.822901506E9"
      },
      {
        "name": "Yash Babrekar",
        "role": "Member",
        "domain": "Event Execution Domain",
        "photo": null,
        "linkedin": "https://www.linkedin.com/in/yash-babrekar07",
        "github": "https://github.com/yashbabrekar07",
        "email": "yash.1251050303@vit.edu",
        "contact": "8.983664417E9"
      }
    ]
  }
];
