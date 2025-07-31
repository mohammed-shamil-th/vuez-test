export const tickets = [
  { 
    id: 1,
    title: "Standard 3-Day Visitor Pass",
    bgImg: 'url("./cards/cardbg.png")',
    headerBg: "linear-gradient(90deg, #5B2A7C 0%, #431B5A 100%)",
    price: 43,
    discountPrice: 32.5,
    mainCategory: [
      { id: 1, name: "Exhibition" },
      { id: 2, name: "Networking" },
      { id: 3, name: "Innovation" },
      { id: 4, name: "Business Growth" },
      { id: 5, name: "Technology" },
      { id: 6, name: "Entrepreneurship" },
      { id: 7, name: "Global Trade" },
      { id: 8, name: "Startups" }
    ],
    subCategory: [
      { id: 1, name: "General Admission" },
      { id: 2, name: "Floor Access" },
      { id: 3, name: "Networking Zone" },
      { id: 4, name: "Keynotes" },
      { id: 5, name: "Panel Discussions" },
      { id: 6, name: "Exhibitor Booths" },
      { id: 7, name: "Product Demos" },
      { id: 8, name: "Workshops Access" },
      { id: 9, name: "Tech Pavilion" }
    ],
    workshops: [
      { id: 1, name: "Startup Basics" },
      { id: 2, name: "Digital Marketing 101" },
      { id: 3, name: "SME Growth Strategies" },
      { id: 4, name: "E-Commerce Essentials" },
      { id: 5, name: "Pitching to Investors" },
      { id: 6, name: "Networking Skills" },
      { id: 7, name: "Market Research Tactics" },
      { id: 8, name: "Innovation in Retail" }
    ],
    chips: [
      { id: 1, label: "General Exhibition Access", active: true },
      { id: 2, label: "Networking Zone Entry", active: true },
      { id: 3, label: "Expo Floor Access", active: true }
    ]
  },
  {
    id: 2,
    title: "Premium Visitor Ticket",
    bgImg: 'url("./cards/concert.jpg")',
    headerBg: "linear-gradient(90deg, #CD670A 0%, #CA3722 100%)",
    price: 75,
    discountPrice: 60,
    mainCategory: [
      { id: 1, name: "Premium Access" },
      { id: 2, name: "Investor Lounge" },
      { id: 3, name: "Masterclasses" },
      { id: 4, name: "Networking Events" },
      { id: 5, name: "Industry Insights" },
      { id: 6, name: "Tech Innovation" },
      { id: 7, name: "Business Development" },
      { id: 8, name: "Global Markets" }
    ],
    subCategory: [
      { id: 1, name: "Investor Meetings" },
      { id: 2, name: "Premium Networking" },
      { id: 3, name: "Industry Panels" },
      { id: 4, name: "Exclusive Keynotes" },
      { id: 5, name: "Tech Showcases" },
      { id: 6, name: "Startup Lounges" },
      { id: 7, name: "Business Workshops" },
      { id: 8, name: "International Trade Talks" },
      { id: 9, name: "VIP Receptions" },
      { id: 10, name: "Future Trends" }
    ],
    workshops: [
      { id: 1, name: "Investor Pitch Decks" },
      { id: 2, name: "Scaling Your Startup" },
      { id: 3, name: "Advanced Digital Marketing" },
      { id: 4, name: "Leadership in Tech" },
      { id: 5, name: "Finance for Entrepreneurs" },
      { id: 6, name: "Negotiation Skills" },
      { id: 7, name: "Sustainable Business Models" },
      { id: 8, name: "Future of AI" },
      { id: 9, name: "Building Global Teams" }
    ],
    chips: [
      { id: 1, label: "Access to ConneXions & Investor Lounge", active: true },
      { id: 2, label: "Networking Events", active: true },
      { id: 3, label: "Full Conference Tracks", active: true },
      { id: 4, label: "Exclusive Masterclasses", active: true },
      { id: 5, label: "3-Day Exhibition Entry", active: true },
      { id: 6, label: "Dubai Internet City Lounge", active: true }
    ]
  },
  {
    id: 3,
    title: "Business Access Pass",
    bgImg: 'url("./cards/concert.jpg")',
    badge: "EXCLUSIVE",
    headerBg: "linear-gradient(90deg, #173903 0%, #081D01 100%)",
    price: 95,
    discountPrice: 80,
    mainCategory: [
      { id: 1, name: "Business Networking" },
      { id: 2, name: "VIP Lounges" },
      { id: 3, name: "Keynote Tracks" },
      { id: 4, name: "Masterclasses" },
      { id: 5, name: "Startup Ecosystem" },
      { id: 6, name: "Investor Relations" },
      { id: 7, name: "Market Expansion" },
      { id: 8, name: "Leadership Growth" }
    ],
    subCategory: [
      { id: 1, name: "Investor & CEO Meetups" },
      { id: 2, name: "VIP Networking" },
      { id: 3, name: "Business Keynotes" },
      { id: 4, name: "Exclusive Receptions" },
      { id: 5, name: "Innovation Showcases" },
      { id: 6, name: "Panel Debates" },
      { id: 7, name: "Executive Roundtables" },
      { id: 8, name: "Hands-On Training" },
      { id: 9, name: "Market Trends Sessions" }
    ],
    workshops: [
      { id: 1, name: "Corporate Growth Strategies" },
      { id: 2, name: "International Trade Compliance" },
      { id: 3, name: "Mergers & Acquisitions" },
      { id: 4, name: "Public Speaking for Leaders" },
      { id: 5, name: "Blockchain in Business" },
      { id: 6, name: "Cybersecurity Essentials" },
      { id: 7, name: "Cultural Business Etiquette" },
      { id: 8, name: "Data-Driven Decisions" }
    ],
    chips: [
      { id: 1, label: "VIP Investor Lounge", active: true },
      { id: 2, label: "Networking Receptions", active: true },
      { id: 3, label: "All Keynote Tracks", active: true },
      { id: 4, label: "Hands-on Masterclasses", active: true },
      { id: 5, label: "3-Day Full Show Access", active: false },
      { id: 6, label: "Dubai Internet City Lounge", active: false }
    ]
  },
  {
    id: 4,
    title: "Business Access Ticket",
    bgImg: 'url("./cards/concert.jpg")',
    badge: "BEST SELLER",
    headerBg: "linear-gradient(90deg, #B5040A 0%, #631308 100%)",
    price: 90,
    discountPrice: 72.5,
    mainCategory: [
      { id: 1, name: "Premium Business" },
      { id: 2, name: "Networking" },
      { id: 3, name: "Industry Tracks" },
      { id: 4, name: "Leadership Events" },
      { id: 5, name: "Innovation" },
      { id: 6, name: "Trade Expansion" },
      { id: 7, name: "VIP Services" },
      { id: 8, name: "Startups & Investors" }
    ],
    subCategory: [
      { id: 1, name: "Investor Lounge" },
      { id: 2, name: "Premium Networking Receptions" },
      { id: 3, name: "Panel Talks" },
      { id: 4, name: "Leadership Keynotes" },
      { id: 5, name: "Startup Investment Sessions" },
      { id: 6, name: "Global Market Insights" },
      { id: 7, name: "Hands-on Advanced Classes" },
      { id: 8, name: "Future Industry Trends" },
      { id: 9, name: "VIP Meeting Rooms" }
    ],
    workshops: [
      { id: 1, name: "Building Scalable Businesses" },
      { id: 2, name: "Negotiation Mastery" },
      { id: 3, name: "AI for Business Leaders" },
      { id: 4, name: "Cross-Border Trade" },
      { id: 5, name: "Financial Modeling" },
      { id: 6, name: "Tech Adoption Strategies" },
      { id: 7, name: "Marketing Automation" },
      { id: 8, name: "Leadership Excellence" }
    ],
    chips: [
      { id: 1, label: "Investor & Startup Lounge", active: true },
      { id: 2, label: "Premium Networking Events", active: true },
      { id: 3, label: "All Industry Tracks", active: true },
      { id: 4, label: "Advanced Masterclasses", active: true },
      { id: 5, label: "3-Day Event Access", active: true },
      { id: 6, label: "VIP Lounge Facilities", active: true }
    ]
  },
  {
    id: 5,
    title: "Green Zone Sustainability Ticket",
    bgImg: 'url("./cards/concert.jpg")',
    headerBg: "linear-gradient(90deg, #53BE2C 0%, #27870C 100%)",
    price: 60,
    discountPrice: 45,
    mainCategory: [
      { id: 1, name: "Sustainability" },
      { id: 2, name: "Green Innovation" },
      { id: 3, name: "Eco Networking" },
      { id: 4, name: "Climate Solutions" },
      { id: 5, name: "Renewable Energy" },
      { id: 6, name: "Waste Management" },
      { id: 7, name: "Green Tech" },
      { id: 8, name: "Future of Sustainability" }
    ],
    subCategory: [
      { id: 1, name: "Eco-Friendly Products" },
      { id: 2, name: "Sustainability Panels" },
      { id: 3, name: "Green Masterclasses" },
      { id: 4, name: "Renewable Energy Talks" },
      { id: 5, name: "Climate Innovation Showcases" },
      { id: 6, name: "Waste Reduction Solutions" },
      { id: 7, name: "Environmental Networking" },
      { id: 8, name: "Green Policy Discussions" },
      { id: 9, name: "Global Sustainability Trends" }
    ],
    workshops: [
      { id: 1, name: "Renewable Energy Basics" },
      { id: 2, name: "Circular Economy Practices" },
      { id: 3, name: "Eco Startup Pitches" },
      { id: 4, name: "Sustainable Marketing" },
      { id: 5, name: "Carbon Footprint Reduction" },
      { id: 6, name: "Water Conservation Tech" },
      { id: 7, name: "Green Construction Innovations" },
      { id: 8, name: "Smart Agriculture" }
    ],
    chips: [
      { id: 1, label: "Eco Innovation Lounge", active: true },
      { id: 2, label: "Networking Events", active: true },
      { id: 3, label: "Sustainability Conference Tracks", active: true },
      { id: 4, label: "Exclusive Green Masterclasses", active: true },
      { id: 5, label: "3-Day Green Zone Access", active: true },
      { id: 6, label: "Dubai Sustainability Hub", active: true }
    ]
  },
  {
    id: 6,
    title: "Tech Future Innovator Pass",
    bgImg: 'url("./cards/concert.jpg")',
    headerBg: "linear-gradient(90deg, #004D98 0%, #01277C 100%)",
    price: 85,
    discountPrice: 65.5,
    mainCategory: [
      { id: 1, name: "Technology" },
      { id: 2, name: "Innovation" },
      { id: 3, name: "AI & Robotics" },
      { id: 4, name: "Future Trends" },
      { id: 5, name: "Startup Ecosystem" },
      { id: 6, name: "Tech Networking" },
      { id: 7, name: "Product Development" },
      { id: 8, name: "Digital Transformation" }
    ],
    subCategory: [
      { id: 1, name: "AI Keynotes" },
      { id: 2, name: "Robotics Demonstrations" },
      { id: 3, name: "Future of Cloud" },
      { id: 4, name: "Big Data Insights" },
      { id: 5, name: "Cybersecurity Panels" },
      { id: 6, name: "Tech Startup Pitches" },
      { id: 7, name: "Metaverse Talks" },
      { id: 8, name: "Blockchain Solutions" },
      { id: 9, name: "IoT Innovations" },
      { id: 10, name: "VR/AR Experiences" }
    ],
    workshops: [
      { id: 1, name: "AI for Beginners" },
      { id: 2, name: "Building Robotics" },
      { id: 3, name: "Cloud Computing Essentials" },
      { id: 4, name: "Intro to Blockchain" },
      { id: 5, name: "Data Science for All" },
      { id: 6, name: "Cybersecurity for Startups" },
      { id: 7, name: "Metaverse Development" },
      { id: 8, name: "IoT Applications" },
      { id: 9, name: "VR/AR Prototyping" }
    ],
    chips: [
      { id: 1, label: "Innovators & Startup Hub", active: true },
      { id: 2, label: "Tech Networking Nights", active: true },
      { id: 3, label: "Future Tech Tracks", active: true },
      { id: 4, label: "AI & Robotics Masterclasses", active: true },
      { id: 5, label: "3-Day Tech Fair Access", active: false },
      { id: 6, label: "Dubai Innovation Hub Lounge", active: false }
    ]
  }
];
