
export const navData = [
  { name: "Home", link: "/" },
  { name: "Properties", link: "/properties", highlight: true },
  { name: "AboutUs", link: "/aboutUs" },
  { name: "Contact", link: "/contact" },
];

// Array of major cities in India for location autocomplete
export const cities = [
  "Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune", "Ahmedabad", 
  "Surat", "Jaipur", "Lucknow", "Kanpur", "Nagpur", "Indore", "Chandigarh", "Patna", 
  "Bhopal", "Vadodara", "Kochi", "Coimbatore", "Mysore", "Visakhapatnam", "Goa", "Chennai"
];

// Array of property types
export const propertyTypes = [
  "Apartment", "House", "Villa", "Commercial", "Studio", "Penthouse", "Plot", "Farmhouse"
];

// Example of price ranges (could be dynamic or customizable based on user needs)
export const priceRanges = [
  { min: 0, max: 1000000, label: "Below ₹10 Lakh" },
  { min: 1000001, max: 5000000, label: "₹10 Lakh - ₹50 Lakh" },
  { min: 5000001, max: 10000000, label: "₹50 Lakh - ₹1 Crore" },
  { min: 10000001, max: 50000000, label: "₹1 Crore - ₹5 Crore" },
  { min: 50000001, max: 100000000, label: "₹5 Crore - ₹10 Crore" },
  { min: 100000001, max: Infinity, label: "Above ₹10 Crore" }
];

// You can also add more predefined filters, for example, number of bedrooms and bathrooms
export const bedroomOptions = [1, 2, 3, 4, 5];
export const bathroomOptions = [1, 2, 3, 4, 5];
export const floorOptions = ["Ground", "First", "Second", "Higher Floors"];

  
  export const featured = [
    {
      cover: "../images/hero/h1.png",
      name: "Family House",
      total: "122 Property",
    },
    {
      cover: "../images/hero/h2.png",
      name: "House & Villa",
      total: "155 Property",
    },
    {
      cover: "../images/hero/h3.png",
      name: "Apartment",
      total: "300 Property",
    },
    {
      cover: "../images/hero/h4.png",
      name: "Office & Studio",
      total: "80 Property",
    },
    {
      cover: "../images/hero/h6.png",
      name: "Villa & Condo",
      total: "80 Property",
    },
  ]
  export const list = [
    {
      id: 1,
      cover: "../images/list/p-1.png",
      name: "Red Carpet Real Estate",
      location: "210 Zirak Road, Canada",
      category: "For Rent",
      price: "$3,700",
      type: "Apartment",
    },
    {
      id: 2,
      cover: "../images/list/p-2.png",
      name: "Fairmount Properties",
      location: "5698 Zirak Road, NewYork",
      category: "For Sale",
      price: "$9,750",
      type: "Condos",
    },
    {
      id: 3,
      cover: "../images/list/p-7.png",
      name: "The Real Estate Corner",
      location: "5624 Mooker Market, USA",
      category: "For Rent",
      price: "$5,860",
      type: "Offices",
    },
    {
      id: 4,
      cover: "../images/list/p-4.png",
      name: "Herringbone Realty",
      location: "5621 Liverpool, London",
      category: "For Sale",
      price: "$7,540",
      type: "Homes & Villas",
    },
    {
      id: 5,
      cover: "../images/list/p-5.png",
      name: "Brick Lane Realty",
      location: "210 Montreal Road, Canada",
      category: "For Rent",
      price: "$4,850",
      type: "Commercial",
    },
    {
      id: 6,
      cover: "../images/list/p-6.png",
      name: "Banyon Tree Realty",
      location: "210 Zirak Road, Canada",
      category: "For Sale",
      price: "$2,742",
      type: "Apartment",
    },
  ]
  export const awards = [
    {
      icon: <i class='fa-solid fa-trophy'></i>,
      num: "32 M	",
      name: "Blue Burmin Award",
    },
    {
      icon: <i class='fa-solid fa-briefcase'></i>,
      num: "43 M",
      name: "Mimo X11 Award",
    },
    {
      icon: <i class='fa-solid fa-lightbulb'></i>,
      num: "51 M",
      name: "Australian UGC Award",
    },
    {
      icon: <i class='fa-solid fa-heart'></i>,
      num: "42 M",
      name: "IITCA Green Award",
    },
  ]
  export const location = [
    {
      id: 1,
      name: "New Orleans, Louisiana",
      Villas: "12 Villas",
      Apartments: "10 Apartments",
      Offices: "07 Offices",
      cover: "./images/location/city-1.png",
    },
    {
      id: 2,
      name: "Jerrsy, United State",
      Villas: "12 Villas",
      Apartments: "10 Apartments",
      Offices: "07 Offices",
      cover: "./images/location/city-2.png",
    },
    {
      id: 3,
      name: "Liverpool, London",
      Villas: "12 Villas",
      Apartments: " 10 Apartments",
      Offices: "07 Offices",
      cover: "./images/location/city-3.png",
    },
    {
      id: 4,
      name: "NewYork, United States",
      Villas: "12 Villas",
      Apartments: " 10 Apartments",
      Offices: "07 Offices",
      cover: "./images/location/city-4.png",
    },
    {
      id: 5,
      name: "Montreal, Canada",
      Villas: "12 Villas",
      Apartments: " 10 Apartments",
      Offices: "07 Offices",
      cover: "./images/location/city-5.png",
    },
    {
      id: 6,
      name: "California, USA",
      Villas: "12 Villas",
      Apartments: " 10 Apartments",
      Offices: "07 Offices",
      cover: "./images/location/city-6.png",
    },
  ]
  export const team = [
    {
      list: "50",
      cover: "../images/customer/team-1.jpg",
      address: "Liverpool, Canada",
      name: "Sargam S. Singh",
      icon: [<i class='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
    },
    {
      list: "70",
      cover: "../images/customer/team-2.jpg",
      address: "Montreal, Canada",
      name: "Harijeet M. Siller",
      icon: [<i class='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
    },
    {
      list: "80",
      cover: "../images/customer/team-3.jpg",
      address: "Denever, USA",
      name: "Anna K. Young",
      icon: [<i class='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
    },
    {
      list: "51",
      cover: "../images/customer/team-4.jpg",
      address: "2272 Briarwood Drive",
      name: "Michael P. Grimaldo",
      icon: [<i class='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
    },
    {
      list: "42",
      cover: "../images/customer/team-5.jpg",
      address: "2272 Briarwood Drive",
      name: "Michael P. Grimaldo",
      icon: [<i class='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
    },
    {
      list: "38",
      cover: "../images/customer/team-5.jpg",
      address: "Montreal, USA",
      name: "Adam K. Jollio",
      icon: [<i class='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
    },
  ]
  export const price = [
    {
      plan: "Basic",
      price: "29",
      ptext: "per user, per month",
      list: [
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "99.5% Uptime Guarantee",
        },
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "120GB CDN Bandwidth",
        },
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "5GB Cloud Storage",
        },
        { change: "color", icon: <i class='fa-solid fa-x'></i>, text: "Personal Help Support" },
        { change: "color", icon: <i class='fa-solid fa-x'></i>, text: "Enterprise SLA" },
      ],
    },
    {
      best: "Best Value",
      plan: "Standard",
      price: "49",
      ptext: "per user, per month",
      list: [
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "99.5% Uptime Guarantee",
        },
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "150GB CDN Bandwidth",
        },
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "10GB Cloud Storage",
        },
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "Personal Help Support",
        },
        {
          change: "color",
          icon: <i class='fa-solid fa-x'></i>,
          text: "Enterprise SLA",
        },
      ],
    },
    {
      plan: "Platinum",
      price: "79",
      ptext: "2 user, per month",
      list: [
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "100% Uptime Guarantee",
        },
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "200GB CDN Bandwidth",
        },
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "20GB Cloud Storage",
        },
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "Personal Help Support",
        },
        {
          icon: <i class='fa-solid fa-check'></i>,
          text: "Enterprise SLA",
        },
      ],
    },
  ]
  export const footer = [
    {
      title: "LAYOUTS",
      text: [{ list: "Home Page" }, { list: "About Page" }, { list: "Service Page" }, { list: "Property Page" }, { list: "Contact Page" }, { list: "Single Blog" }],
    },
    {
      title: "ALL SECTIONS",
      text: [{ list: "Headers" }, { list: "Features" }, { list: "Attractive" }, { list: "Testimonials" }, { list: "Videos" }, { list: "Footers" }],
    },
    {
      title: "COMPANY",
      text: [{ list: "About" }, { list: "Blog" }, { list: "Pricing" }, { list: "Affiliate" }, { list: "Login" }, { list: "Changelog" }],
    },
  ]
  export const steps = [
    {
      title: "Search for Properties",
      description: "Find your dream home by filtering through listings that match your needs."
    },
    {
      title: "Connect with Agents/Owners",
      description: "Directly contact property owners or agents to get more details."
    },
    {
      title: "Schedule a Visit or Virtual Tour",
      description: "Book an in-person visit or explore the property online with a 360° tour."
    },
    {
      title: "Make a Deal & Pay Securely",
      description: "Negotiate and complete your transaction with secure payment options."
    }
  ];
  export const properties = [
    {
      name: "Luxury Apartment, Hyderabad",
      lat: 17.385,
      lng: 78.4867,
      virtualTour: "https://example.com/luxury-apartment-360.jpg",
    },
    {
      name: "Villa in Bangalore",
      lat: 12.9716,
      lng: 77.5946,
      virtualTour: "https://example.com/villa-bangalore-360.jpg",
    },
  ];
  export const whyChooseUsData = [
    {
      title: "Secure Transactions",
      description:
        "We ensure safe deals with verified listings and legal support.",
      icon: "🔒",
    },
    {
      title: "Verified Listings",
      description: "Every property is thoroughly vetted to avoid fraud.",
      icon: "✅",
    },
    {
      title: "Legal Support",
      description: "Get legal assistance for hassle-free transactions.",
      icon: "⚖️",
    },
    {
      title: "Direct Chat & Support",
      description: "Chat with property owners and get real-time assistance.",
      icon: "💬",
    },
  ];
  export const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "Home Buyer",
      review: "Finding my dream home was never this easy! The agents were so helpful.",
      rating: 5,
      image: "/images/testimonials/user1.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Seller",
      review: "I sold my property in just 2 weeks! Highly recommended!",
      rating: 4,
      image: "/images/testimonials/user2.jpg",
    },
    {
      id: 3,
      name: "Michael Lee",
      role: "Real Estate Agent",
      review: "This website transformed my career! I close deals faster now.",
      rating: 5,
      image: "/images/testimonials/user3.jpg",
    },
    {
      id: 4,
      name: "Sophia Green",
      role: "Home Buyer",
      review: "The search filters helped me find exactly what I was looking for!",
      rating: 4.5,
      image: "/images/testimonials/user4.jpg",
    },
    {
      id: 5,
      name: "David Wilson",
      role: "Investor",
      review: "I found great investment opportunities here. Amazing platform!",
      rating: 4,
      image: "/images/testimonials/user5.jpg",
    },
    {
      id: 6,
      name: "Emma Brown",
      role: "Renter",
      review: "The rental listings are accurate, and the support is amazing!",
      rating: 5,
      image: "/images/testimonials/user6.jpg",
    },
  ];
  export const insightsData = [
    { title: "Market Trends 📈", description: "Real estate prices are projected to rise by 5% in 2025." },
    { title: "Investment Hotspots 🔥", description: "Top locations: Bangalore, Hyderabad, and Pune for high ROI." },
    { title: "Rent vs. Buy? 🏠", description: "Buying is 20% more cost-effective if staying for 5+ years." },
    { title: "Smart Home Boom 🤖", description: "80% of new buyers prefer homes with smart tech integration." },
    { title: "Government Policies 🏛️", description: "Tax benefits for first-time home buyers have increased." },
  ];
  export const contactData = {
    description: "Feel free to reach out to us for any queries or support.",
    email: "hello@relume.io",
    phone: "+1 (555) 000-0000",
    address: "123 Sample St, Sydney NSW 2000 AU",
  };
  
    