import Section1 from "/public/section1.svg"
import Section2 from "/public/loan.svg"
import Section3 from "/public/section3.svg"
import Section4 from "/public/section4.svg"
import detailsImg from "/public/deal.png"
import merchantLogo from "/public/storeimg.png"
import dealsImg from "/public/dealsimg.png"
import faq from "/public/FAQ.png"
import chat from "/public/chat.svg"
import call from "/public/call.png"
import sms from "/public/sms.png"
import gift from "/public/gift.png"
import airtime from "/public/airtime.png"
import credit from "/public/credit.png"
import voucher from "/public/voucher.png"
import refer from "/public/refer.png"
import msg from "/public/msg.svg"


export const NavLinks = [
  { href: '/merchants', key: 'For Merchants', text: 'For Merchants' },
  { href: '/deals', key: 'Deals', text: 'Deals' },
  { href: '/how-it-works', key: 'How it works', text: 'How it works' },
  { href: '/contact', key: 'Contact', text: 'Contact' },
];


export const footerLinks = [
  {
    title: 'COMPANY',
    links: [
      'Deals',
      'For Merchant',
      'For Buyer',
      'How it works',
      'Contact Us',
    ],
  },
  {
    title: 'Help',
    links: [
      'Contact Us',
      'Terms of Use',
      'Privacy Policy',
    ],
  },
  {
    title: 'ADDRESS',
    links: [
      'Olugbosi Street, Off Bishop Oluwole Street Victoria Island Lagos',

    ],
  },
]
//   export const nav = {
//     logo: Logo,
//     loginText: "Log in",
//     signupText: "Get Started",
//     navItems: [
//       { name: "For Merchant", href: "/" },
//       { name: "Deals", href: "/" },
//       { name: "How It Works", href: "/" },
//       { name: "Contact", href: "/" },

//     ],
//   }


//   export const hero = {
//     title: "Earn more while you shop on Plenti",
//     subtext: "Get rewarded every time you shop, Plenti Africa is designed to bring you incredible deals, amazing rewards, and a seamless shopping experience.",
//     Image: Group,
//         btnText: "Join for free"
//   }

export const section1 = {
  label: "Discover  deals at your favorite store",
  title: "Explore your preferred shopping categories, buy giftcards and get instant cashback & points.",
  subtext: "We've partnered with trusted merchants to bring you a wide range of quality products, services and reward all at your fingertips.",
  btnText: "Join for free",
  Image: Section1
}

export const section2 = {
  label: "Shop now pay later",
  title: "Get access to quick loans and shop at your convenience with plenti credit.",
  subtext: "Experience the flexibility of Plenti Credit. Shop now and pay later with our convenient Plenti Credit feature. No more waiting – enjoy your purchases while managing your budget. ",
  btnText: "Join for free",
  Image: Section2
}

export const section3 = {
  label: "Earn everytime you refer a buddy",
  title: "Earn referral bonus everytime you refer your friends to Plenti Africa.",
  subtext: "Use your unique referral link to invite them to join. The more friends you refer, the more you earn, your earnings can be withdrawn or used to shop at your favorite store.",
  btnText: "Join for free",
  Image: Section3
}

export const section4 = {
  label: "Buy gift cards from your favorites store",
  title: "Pay bills, buy gift cards & vouchers from your favorite stores ",
  subtext: "Every time you buy a gift card, you're not just getting the value of the card you also enjoy the double advantage of cashbacks and loyalty points with every purchase. ",
  btnText: "Join for free",
  Image: Section4
}

export const faqSection = {
  text: "Frequently asked question about Plenti Africa",
  title: "What is Plenti Africa ?",
  subtext: "Enjoy discounts on high-quality products from trusted brands. You deserve the best, and we're here to make it more affordable.",
  Image: faq
}

export const aboutUs = {
  text: "Plenti Africa has transformed my shopping routine. The deals are unbeatable, and I've been able to save a substantial amount on every purchase. Plus, the loyalty points add an extra layer of value. Highly recommended! - Sarah W."
}


export const bannerSection = {
  title: "Elevate your shopping experience with the Plenti Africa app",
  text: "Your gateway to unbeatable deals, rewards, and convenience right at your fingertips",
  image: Section1
}

export const dealSection = {
  title: "Discover unbeatable deals and offers from your favorites store.",
  text: "Enjoy discounts on high-quality products from trusted brands. You deserve the best, and we're here to make it more affordable.",
  image: gift
}

export const FaqLinks = [
  { name: "Deals on Plenti Africa ", href: "/" },
  { name: "How to become a Plenti Merchant", href: "/" },
  { name: "General Questions", href: "/" },
  { name: "Referral Program", href: "/" },
  { name: "Security and Privacy", href: "/" },
  { name: "Legal and Compliance", href: "/" },
]

//   export const dealsHeroSection = {
//     title: "Discover unbeatable deals and offers from your favorites store.",
//     text: "Enjoy discounts on high-quality products from trusted brands. You deserve the best, and we're here to make it more affordable.",
//     image: Img
//   }


//   export const dealCategories = ["All categories", "Restaurants & bars", "Health & beauty", "Fashion", "Shoes"]

export const dealsDetails = {
  label: "Earn ₦1,000 Cashback",
  timeLabel: "Deal ends in 4 days",
  merchantLogo: merchantLogo,
  merchantName: "Coldstone creamery ice creams",
  merchantEmail: "coldstonecreamy_ng",
  text: "Buy 2 cups of ice cream for ₦3000 and earn up to ₦1000 cashback and other free goodies ",
  subtext: "Cold Stone Creamery presents a world of exquisite ice cream creations that will tantalize your taste buds and melt your heart.",
  btnText: "Claim this offer",
  Image: detailsImg,
}

export const productsData = [
  {
    id: 1,
    name: 'cloth',
    category: "Fashion",
    label: "Earn 300 airtime",
    timeLabel: "Deal ends in 4 days",
    text: "Buy Off-shoulder Sleeve Sweater Dress ",
    amount: 5000,
    link: "View details",
    Image: dealsImg
  },
  {
    id: 2,
    name: 'shoe',
    category: "Health & Beauty",
    label: "Earn 300 airtime",
    timeLabel: "Deal ends in 4 days",
    text: "Buy Off-shoulder Sleeve Sweater Dress ",
    amount: 5000,
    link: "View details",
    Image: dealsImg
  },
  {
    id: 3,
    category: "Restaurants & bars",
    name: 'vodka',
    label: "Earn 300 airtime",
    timeLabel: "Deal ends in 4 days",
    text: "Buy Off-shoulder Sleeve Sweater Dress ",
    amount: 5000,
    link: "View details",
    Image: dealsImg
  },
  {
    id: 3,
    category: "Fashion",
    name: 'cream',
    label: "Earn 300 airtime",
    timeLabel: "Deal ends in 4 days",
    text: "Buy Off-shoulder Sleeve Sweater Dress ",
    amount: 5000,
    link: "View details",
    Image: dealsImg
  }
]

//   export const merchantCard = {
//     merchantLogo: img,
//     thumbNail: img,
//     title: "The palms shopping mall",
//     text: "They offer discounts and slash prices on all products from all deals and discounts....",
//     link: "View offer available"
// }
//   export const comment = [{
//     comments: "Plenti Africa has transformed my shopping routine. The deals are unbeatable, and I've been able to save a substantial amount on every purchase. Plus, the loyalty points add an extra layer of value. Highly recommended! - Sarah W."
//   }]

//   export const accountandregistration = {
//     items: [
//       { name: "Deals on Plenti Africa ", href: "/" },
//       { name: "How to become a Plenti Merchant", href: "/" },
//       { name: "General Questions", href: "/" },
//       { name: "Referral Program", href: "/" },
//       { name: "Security and Privacy", href: "/" },
//       { name: "Legal and Compliance", href: "/" },
//     ],
//     faq: [
//       {
//         title: 'What is Plenti Africa ?',
//         text: "Plenti Africa is a marketplace and reward platform that offers great deals, exclusive rewards, and a range of services from your favorite stores. We're dedicated to making your shopping experience enjoyable and rewarding."
//       },
//     ]
//   }
export const contact = {
  title: "We're here to help! Contact us for any inquiries or assistance.",
  subtext: "Got a question, need more information, or require assistance? We're just a click or call away. Our dedicated support team is ready to assist you and ensure your experience with us is smooth and satisfying.",
  items: [
    {
      id: 1,
      icon: chat,
      caption: 'Chat with Us',
      text: "Look for the chat bubble icon at the bottom right corner of your screen. Simply click on it to initiate a chat session with us. Alternatively you can a dedicated support ticket system here"
    },
    {
      id: 2,
      icon: call,
      caption: 'Give us a call',
      text: "Give us a call or send us a WhatsApp message. We're just a phone call away, ready to provide you with the support you need (+234-234-567-90). "
    },
    {
      id: 3,
      icon: sms,
      caption: 'Chat with Us',
      text: "Have a question or need assistance? We're just an email away. Drop us a message, and our dedicated support team will get back to you promptly help.plenti.africa@gmail.com"
    },
  ]
};

export const moreWays = {
  title: "We're here to help! Contact us for any inquiries or assistance.",
  subtext: "Got a question, need more information, or require assistance? We're just a click or call away. Our dedicated support team is ready to assist you and ensure your experience with us is smooth and satisfying.",
  items: [
    {
      id: 1,
      icon: airtime,
      "backgroundColor": "bg-section2Label",
      caption: 'Buy Airtime & Data',
      text: "Everytime you pay your bills using plenti you earn plenti points that can convert to cash"
    },
    {
      id: 2,
      icon: voucher,
      "backgroundColor": 'bg-secondary',
      caption: 'Buy Gift cards & Vouchers',
      text: "Everytime you pay your bills using plenti you earn plenti points that can convert to cash"
    },
    {
      id: 3,
      icon: refer,
      "backgroundColor": "bg-black-100",
      caption: 'Refer your buddies',
      text: "Everytime you pay your bills using plenti you earn plenti points that can convert to cash"
    },
    {
      id: 4,
      icon: credit,
      "backgroundColor": "bg-customBlue",
      caption: 'Take plenti credit',
      text: "Everytime you pay your bills using plenti you earn plenti points that can convert to cash"
    },
  ]
};

export const howItWorks = [
  {
    title: "Sign up and get rewarded every time you shop.",
    text: "If you're new here, sign up for a Plenti Africa account. If you're an existing user, simply log in to access your account to start earning when you shop at your favorites store.",
    Image: dealsImg
  },
  {
    title: "Pick Your Favorites stores so you can see their offers first.",
    text: "🔍 Dive into our treasure trove of deals, gift cards, and exclusive rewards. Browse through an array of categories, from fashion to electronics, and discover discounts and cashbacks that'll make your wallet smile.",
    Image: dealsImg
  },
  {
    title: "Explore our offers, select a deal that suits your needs.",
    text: "Found a deal or offer that caught your eye? Click on it to view the details. If you're interested, proceed to make payment to claim your reward.",
    Image: dealsImg
  },
  {
    title: "Choose your preferred option to claim your rewards.",
    text: "Select how you want to receive your order. You can either: Pickup at a nearby store where your reward is available. Request a delivery wait for your order to be delivered right to your doorstep. Easy-peasy right ?",
    Image: dealsImg
  },
]

export const merchantItems = {
  heroSection : {
    title:"The ultimate marketplace and reward platform designed to elevate your business to new heights",
    text:"With Plenti Africa, you're in control of reaching more customers, offering enticing promotions, and delivering exceptional experiences.",
    heading1: "Effortless Order History",
    subText1:"Simplify your order management process. Our intuitive platform allows you to keep track of your order history, manage deliveries & pickups, and enhance the shopping experience for your customers.",
    heading2: "The ultimate marketplace and reward platform designed to elevate your business to new heights",
    subText2: "With Plenti Africa, you're in control of reaching more customers, offering enticing promotions, and delivering exceptional experiences.",
  },
  testimony: {
    title: "Sisyphus",
    text: "At TechHub Electronics, we were searching for ways to connect with tech enthusiasts who share our passion. Plenti Africa's platform not only allowed us to showcase our latest gadgets but also empowered us to create promotions that resonated with our customers. The result? A loyal customer base that eagerly anticipates our new releases and special deals. - David Chen, CEO of TechHub Electronics",
    name:"Candice Wu",
    designation: "Store Manager, Sisyphus"
  },
  items: [
    {
      id: 1,
      icon: msg,
      title: 'Reach an Expansive Audience',
      text: "Why juggle multiple profiles when you can manage all your businesses seamlessly in one place? Plenti Africa's intuitive interface allows you to oversee different ventures OR effortlessly, streamlining your operations and saving you valuable time."
    },
    {
      id: 2,
      icon: msg,
      title: 'Streamlined Business Management',
      text: "Why juggle multiple profiles when you can manage all your businesses seamlessly in one place? Plenti Africa's intuitive interface allows you to oversee different ventures OR effortlessly, streamlining your operations and saving you valuable time."
    },
    {
      id: 3,
      icon: msg,
      title: 'Comprehensive Analytics:',
      text: "Why juggle multiple profiles when you can manage all your businesses seamlessly in one place? Plenti Africa's intuitive interface allows you to oversee different ventures OR effortlessly, streamlining your operations and saving you valuable time."
    },
  ]
}