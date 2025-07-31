export const tickets = [
  { 
    id: 1,
    title: "Standard 3-Day Visitor Pass",
    bgImg: 'url("./cards/cardbg.png")',
    headerBg: "linear-gradient(90deg, #5B2A7C 0%, #431B5A 100%)",
    price: 43,
    discountPrice: 32.5,
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
