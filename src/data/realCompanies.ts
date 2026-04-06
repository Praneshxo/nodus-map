export interface Company {
  id: string;
  name: string;
  lat: number;
  lng: number;
  description: string;
  category: string[];
  logoUrl: string;
  headquarters: string;
  teamSize?: string;
  city?: string;
  state?: string;
  website?: string;
  linkedin?: string;
}

export const realCompanies: Company[] = [
  {
    "id": "62fbb8e4",
    "name": "Facile Services",
    "lat": 30.111017,
    "lng": 78.2825,
    "city": "Rishikesh",
    "state": "Uttarakhand",
    "description": "Located at Services, Someshwar Nagar, Rishikesh - 249201, UT, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/facile_services.webp",
    "headquarters": "Rishikesh, Uttarakhand",
    "teamSize": "50-200",
    "website": "https://www.facileservices.com/",
    "linkedin": "https://www.linkedin.com/company/facile-services-pvt-ltd/"
  },
  {
    "id": "2f8e03a5",
    "name": "Uneecops Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/uneecops_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/uneecops-business-solutions",
    "website": "https://www.uneecops.com/"
  },
  {
    "id": "779977a6",
    "name": "Rapidflow Inc",
    "lat": 22.31028,
    "lng": 73.16672,
    "city": "Vadodara",
    "state": "Gujarat",
    "description": "Located at Webmyne INC, Vadodara, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/rapidflow_inc.webp",
    "headquarters": "Vadodara, Gujarat",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/rapidflow-apps-inc-",
    "website": "https://www.rapidflowapps.com/"
  },
  {
    "id": "aae56b51",
    "name": "MetaOption LLC",
    "lat": 20.349079,
    "lng": 85.807721,
    "city": "Bhubaneswar Municipal Corporation",
    "state": "Odisha",
    "description": "Located at AuroIN LLC, TCS Footpath, Bhubaneswar Municipal Corporation - 751024, OR, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/metaoption_llc.webp",
    "headquarters": "Bhubaneswar Municipal Corporation, Odisha",
    "teamSize": "50-200",
    "linkedin": "https://www.linkedin.com/company/metaoption",
    "website": "https://www.metaoption.com/"
  },
  {
    "id": "44c95833",
    "name": "Helios Solutions",
    "lat": 12.98049,
    "lng": 77.60469,
    "city": "Bangalore",
    "state": "Karnataka",
    "description": "Located at Mobipro Solutions, Bangalore, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/helios_solutions.webp",
    "headquarters": "Bangalore, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/helios-solutions",
    "website": "https://www.heliostechsolutions.in/"
  },
  {
    "id": "1e02bc1a",
    "name": "Amiga Informatics",
    "lat": 17.495292,
    "lng": 78.392941,
    "city": "Hyderabad",
    "state": "Andhra Pradesh",
    "description": "Located at JNTU GEO INFORMATICS, KPHB Colony, Hyderabad - 500085, AP, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/amiga_informatics.webp",
    "headquarters": "Hyderabad, Andhra Pradesh",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/amigainformatics",
    "website": "https://amigainformatics.com/"
  },
  {
    "id": "60cac784",
    "name": "FirstConnect Solutions",
    "lat": 12.98049,
    "lng": 77.60469,
    "city": "Bangalore",
    "state": "Karnataka",
    "description": "Located at Mobipro Solutions, Bangalore, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/firstconnect_solutions.webp",
    "headquarters": "Bangalore, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/firstconnectsolutions",
    "website": "https://firstconnectdigital.com/"
  },
  {
    "id": "506ee9df",
    "name": "TVS Next",
    "lat": 9.4081435,
    "lng": 76.558639,
    "city": "Idinjillam",
    "state": "Kerala",
    "description": "Located at TVS, MC Road, Muthoor, Idinjillam - 689107, KL, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/tvs_next.webp",
    "headquarters": "Idinjillam, Kerala",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/tvsnext",
    "website": "https://tvsnext.com/"
  },
  {
    "id": "1af8a654",
    "name": "Aumni Techworks",
    "lat": 18.5464844,
    "lng": 73.9064129,
    "city": "Kalyani Nagar",
    "state": "Maharashtra",
    "description": "Located at Aumni Techworks, 201, East Avenue, Kalyani Nagar, Kalyani Nagar - 411014, MH, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/aumni_techworks.webp",
    "headquarters": "Kalyani Nagar, Maharashtra",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/aumni-techworks",
    "website": "https://www.aumnitechworks.com/"
  },
  {
    "id": "d3610414",
    "name": "Gathi Analytics",
    "lat": 27.576034,
    "lng": 78.29953,
    "city": "Gathi",
    "state": "Uttar Pradesh",
    "description": "Located at Gathi, Hathras, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/gathi_analytics.webp",
    "headquarters": "Gathi, Uttar Pradesh",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/gathi-analytics",
    "website": "http://gathi.beep.digital/"
  },
  {
    "id": "0e37367f",
    "name": "KOKO Networks",
    "lat": 23.480684,
    "lng": 84.973253,
    "city": "Koko",
    "state": "Jharkhand",
    "description": "Located at Koko, Ranchi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/koko_networks.webp",
    "headquarters": "Koko, Jharkhand",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/koko-networks",
    "website": "https://kokonetworks.com/"
  },
  {
    "id": "32088d3c",
    "name": "iMark Infotech",
    "lat": 26.82399,
    "lng": 75.54525,
    "city": "Vatika Infotech City",
    "state": "Rajasthan",
    "description": "Located at Vatika Infotech City, Jaipur, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/imark_infotech.webp",
    "headquarters": "Vatika Infotech City, Rajasthan",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/imark-infotech",
    "website": "https://www.imarkinfotech.com/"
  },
  {
    "id": "345e73df",
    "name": "Solix Technologies,",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/solix_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/solix-technologies",
    "website": "https://www.solix.com/"
  },
  {
    "id": "11efd892",
    "name": "Neovatic Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/neovatic_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/neovatic-technologies",
    "website": "https://neovatic.com/"
  },
  {
    "id": "e7369bff",
    "name": "Symphony RetailAI",
    "lat": 18.5476685,
    "lng": 73.790415,
    "city": "Pune",
    "state": "Maharashtra",
    "description": "Located at Symphony Club, Baner-Pashan Link Road, Pashan, Pune - 411001, MH, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/symphony_retailai.webp",
    "headquarters": "Pune, Maharashtra",
    "teamSize": "50-200",
    "linkedin": "https://www.linkedin.com/company/symphonyai",
    "website": "https://www.symphonyai.com/retail-cpg/"
  },
  {
    "id": "8d7d462b",
    "name": "Covalense Global",
    "lat": 27.501023,
    "lng": 82.794713,
    "city": "Barhani Bazar",
    "state": "Uttar Pradesh",
    "description": "Located at Global, Barhani Bazar, Siddharth Nagar, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/covalense_global.webp",
    "headquarters": "Barhani Bazar, Uttar Pradesh",
    "teamSize": "50-200",
    "linkedin": "https://nz.linkedin.com/company/covalenseglobal",
    "website": "https://www.covalenseglobal.com/"
  },
  {
    "id": "ce5292ca",
    "name": "W3villa Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/w3villa_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/w3villa-technologies",
    "website": "https://www.w3villa.com/"
  },
  {
    "id": "34f77f8e",
    "name": "Perfios Software Solutions",
    "lat": 12.9864281,
    "lng": 77.5952553,
    "city": "Bengaluru",
    "state": "Karnataka",
    "description": "Located at Planvisage Software Solutions, 35/1, 2nd Floor, Cunningham Hallmark, Cunningham Road, Vasanth Nagar, Bengaluru - 560001, KA, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/perfios_software_solutions.webp",
    "headquarters": "Bengaluru, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/perfios",
    "website": "https://perfios.ai/"
  },
  {
    "id": "56988200",
    "name": "Detect Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/detect_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/detect-technologies",
    "website": "https://detecttechnologies.com/"
  },
  {
    "id": "440f6555",
    "name": "Ideassion Technology Solutions",
    "lat": 12.913535,
    "lng": 80.219052,
    "city": "Chennai",
    "state": "Tamil Nadu",
    "description": "Located at Cognizant Technology Solutions, Elcot SEZ, Ward 197, Chennai - 600119, TN, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/ideassion_technology_solutions.webp",
    "headquarters": "Chennai, Tamil Nadu",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/ideassion",
    "website": "https://ideassion.com/"
  },
  {
    "id": "a393fa99",
    "name": "RNF Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/rnf_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://www.linkedin.com/company/rnf-technologies",
    "website": "https://rnftechnologies.com/"
  },
  {
    "id": "3fdd5c60",
    "name": "Capermint Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/capermint_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/caperminttech",
    "website": "https://www.capermint.com/"
  },
  {
    "id": "6f9d1f55",
    "name": "AVASO Technology Solutions",
    "lat": 12.913535,
    "lng": 80.219052,
    "city": "Chennai",
    "state": "Tamil Nadu",
    "description": "Located at Cognizant Technology Solutions, Elcot SEZ, Ward 197, Chennai - 600119, TN, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/avaso_technology_solutions.webp",
    "headquarters": "Chennai, Tamil Nadu",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/avaso-technology-solutions",
    "website": "https://www.avasotech.com/"
  },
  {
    "id": "4efd100c",
    "name": "ASK Automotive",
    "lat": 9.176528,
    "lng": 76.5273292,
    "city": "Kayamkulam",
    "state": "Kerala",
    "description": "Located at ASK Supermarket, 416, Randamkutty - Oachira road, Kuttitheruvu, Kayamkulam - 690537, KL, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/ask_automotive.webp",
    "headquarters": "Kayamkulam, Kerala",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/ask-automotive-limited",
    "website": "https://askbrake.com/"
  },
  {
    "id": "2fadbd0a",
    "name": "Zumen Inc",
    "lat": 22.31028,
    "lng": 73.16672,
    "city": "Vadodara",
    "state": "Gujarat",
    "description": "Located at Webmyne INC, Vadodara, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/zumen_inc.webp",
    "headquarters": "Vadodara, Gujarat",
    "teamSize": "50-200",
    "linkedin": "https://www.linkedin.com/company/zumen",
    "website": "https://zumen.com/"
  },
  {
    "id": "6151e29b",
    "name": "JNET Technologies",
    "lat": 10.698969,
    "lng": 76.091892,
    "city": "Jp Jnet Tech. Rd Jun",
    "state": "Kerala",
    "description": "Located at Jp Jnet Tech. Rd Jun, Thrissur, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/jnet_technologies.webp",
    "headquarters": "Jp Jnet Tech. Rd Jun, Kerala",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/jnettechnologies",
    "website": "https://www.jnettechnologies.com/"
  },
  {
    "id": "415cca28",
    "name": "NVISH Solutions",
    "lat": 12.98049,
    "lng": 77.60469,
    "city": "Bangalore",
    "state": "Karnataka",
    "description": "Located at Mobipro Solutions, Bangalore, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/nvish_solutions.webp",
    "headquarters": "Bangalore, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/nvishsolutions",
    "website": "https://www.nvish.com/"
  },
  {
    "id": "04f7c00a",
    "name": "Atlas",
    "lat": 19.2456051,
    "lng": 72.9835064,
    "city": "Thane",
    "state": "Maharashtra",
    "description": "Located at Atlas, Brahmand Road, Brahmand Nagar, Thane - 400607, MH, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/atlas.webp",
    "headquarters": "Thane, Maharashtra",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/atlasindia",
    "website": "https://atlasindia.co/"
  },
  {
    "id": "56aa8052",
    "name": "Fresh Gravity",
    "lat": 17.376738,
    "lng": 78.559273,
    "city": "Hyderabad",
    "state": "Telangana",
    "description": "Located at Reliance Fresh, Nagole-Bandlaguda Main Road, Nagole, Hyderabad - 500060, TG, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/fresh_gravity.webp",
    "headquarters": "Hyderabad, Telangana",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/freshgravity",
    "website": "https://www.freshgravity.com/"
  },
  {
    "id": "3bc98b7f",
    "name": "Centre for Computational Technologies",
    "lat": 13.012893,
    "lng": 80.233221,
    "city": "Chennai",
    "state": "Tamil Nadu",
    "description": "Located at Center for Excellence, center for excellent block, Ward 171, Chennai - 600025, TN, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/centre_for_computational_technologies.webp",
    "headquarters": "Chennai, Tamil Nadu",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/centre-for-compuational-technologies-cctech",
    "website": "https://www.cctech.co.in/"
  },
  {
    "id": "45e52375",
    "name": "Moonfrog Labs",
    "lat": 12.9702558,
    "lng": 77.6281889,
    "city": "Bengaluru",
    "state": "Karnataka",
    "description": "Located at Moonfrog Labs, 16/3, 4th Floor, Cambridge Road, Indiranagar, Bengaluru - 560008, KA, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/moonfrog_labs.webp",
    "headquarters": "Bengaluru, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/moonfrog-labs",
    "website": "https://moonfroglabs.com/"
  },
  {
    "id": "b4af2989",
    "name": "NextGen Digital Solutions",
    "lat": 26.902074,
    "lng": 75.835389,
    "city": "Jaipur",
    "state": "Rajasthan",
    "description": "Located at RasuKoo Digital Solutions, D-20/21, Mandir Marg, Adarsh Nagar, Jaipur - 302004, RJ, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/nextgen_digital_solutions.webp",
    "headquarters": "Jaipur, Rajasthan",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/ndsonline",
    "website": "https://www.ndsglobal.com/"
  },
  {
    "id": "66966238",
    "name": "Aspiring Minds",
    "lat": 9.960863,
    "lng": 76.295293,
    "city": "Ernakulam",
    "state": "Kerala",
    "description": "Located at Mysterious Minds, Ernakulam - 682036, KL, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/aspiring_minds.webp",
    "headquarters": "Ernakulam, Kerala",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/aspiring-minds",
    "website": "https://www.shl.com/about/news-and-events/aspiring-minds-is-now-shl/"
  },
  {
    "id": "18e9513a",
    "name": "Infosenseglobal Inc",
    "lat": 22.31028,
    "lng": 73.16672,
    "city": "Vadodara",
    "state": "Gujarat",
    "description": "Located at Webmyne INC, Vadodara, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/infosenseglobal_inc.webp",
    "headquarters": "Vadodara, Gujarat",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/infosense-globalsolution",
    "website": "https://infosenseglobal.com/"
  },
  {
    "id": "2e408bdd",
    "name": "Appcino Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/appcino_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "website": "https://aprika.com/partners/appcino-technologies-pvt-ltd/"
  },
  {
    "id": "8d2da401",
    "name": "DEV IT SERV",
    "lat": 24.07564,
    "lng": 73.69304,
    "city": "Rakhabh Dev",
    "state": "Rajasthan",
    "description": "Located at Rakhabh Dev, Udaipur, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/dev_it_serv.webp",
    "headquarters": "Rakhabh Dev, Rajasthan",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/ditserv",
    "website": "https://ditserv.com/"
  },
  {
    "id": "5fd4f1ab",
    "name": "Acute Informatics",
    "lat": 17.495292,
    "lng": 78.392941,
    "city": "Hyderabad",
    "state": "Andhra Pradesh",
    "description": "Located at JNTU GEO INFORMATICS, KPHB Colony, Hyderabad - 500085, AP, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/acute_informatics.webp",
    "headquarters": "Hyderabad, Andhra Pradesh",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/bankai-informarmatics-pvt-ltd",
    "website": "https://www.acuteinformatics.co.in/"
  },
  {
    "id": "02776554",
    "name": "Hitachi Solutions India",
    "lat": 13.271902,
    "lng": 77.578007,
    "city": "Obadenahalli",
    "state": "Karnataka",
    "description": "Located at Hitachi Astemo, Obadenahalli - 562162, KA, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/hitachi_solutions_india.webp",
    "headquarters": "Obadenahalli, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/hitachi-solutions-india-pvt-ltd",
    "website": "https://www.hitachi-solutions.com/"
  },
  {
    "id": "a20323cc",
    "name": "Sterling Software",
    "lat": 12.9854153,
    "lng": 80.2463893,
    "city": "Chennai",
    "state": "Tamil Nadu",
    "description": "Located at Sterling Software Pvt Ltd, Taramani Road, Zone 13 Adyar, Chennai - 600113, TN, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/sterling_software.webp",
    "headquarters": "Chennai, Tamil Nadu",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/sterling-software-private-limited",
    "website": "https://sterlingsoftware.global/"
  },
  {
    "id": "d5dfef1f",
    "name": "Digital Convergence Technologies",
    "lat": 13.051839,
    "lng": 80.2342458,
    "city": "Chennai",
    "state": "Tamil Nadu",
    "description": "Located at Swastiks Digital Technologies Private Limited, 35A, kannaiah Street, Zone 9 Teynampet, Chennai - 600017, TN, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/digital_convergence_technologies.webp",
    "headquarters": "Chennai, Tamil Nadu",
    "teamSize": "50-200",
    "linkedin": "https://www.linkedin.com/company/digital-convergence-technologies-inc./",
    "website": "https://www.dctinc.com/"
  },
  {
    "id": "7724c8be",
    "name": "Truecaller",
    "lat": 12.9512723,
    "lng": 77.6411882,
    "city": "Bengaluru",
    "state": "Karnataka",
    "description": "Located at Truecaller, Inner Ring Road, Yamalur, Bengaluru - 560071, KA, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/truecaller.webp",
    "headquarters": "Bengaluru, Karnataka",
    "teamSize": "50-200",
    "website": "https://www.truecaller.com/"
  },
  {
    "id": "4e4410ab",
    "name": "Skoruz Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/skoruz_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/skoruz",
    "website": "https://www.skoruz.com/"
  },
  {
    "id": "a13d7dd4",
    "name": "NTrust Infotech",
    "lat": 26.82399,
    "lng": 75.54525,
    "city": "Vatika Infotech City",
    "state": "Rajasthan",
    "description": "Located at Vatika Infotech City, Jaipur, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/ntrust_infotech.webp",
    "headquarters": "Vatika Infotech City, Rajasthan",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/ntrust-infotech",
    "website": "https://ntrustinfotech.com/"
  },
  {
    "id": "6b2443c5",
    "name": "Open Destinations",
    "lat": 26.04447,
    "lng": 89.476074,
    "city": "Open Daribash",
    "state": "West Bengal",
    "description": "Located at Open Daribash, Koch Bihar, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/open_destinations.webp",
    "headquarters": "Open Daribash, West Bengal",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/opendest",
    "website": "https://www.opendestinations.com/reservations-software-travel-tech/"
  },
  {
    "id": "d159886c",
    "name": "realworld one",
    "lat": 19.0023567,
    "lng": 72.8264064,
    "city": "Mumbai",
    "state": "Maharashtra",
    "description": "Located at World One, Shankar Rao Naram Path (Gowalia Chawl Lane), Lower Parel, Mumbai - 400013, MH, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/realworld_one.webp",
    "headquarters": "Mumbai, Maharashtra",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/realworld-one",
    "website": "https://realworld-one.com/"
  },
  {
    "id": "8795b7ce",
    "name": "Mutual Mobile",
    "lat": 22.7518145,
    "lng": 75.9277228,
    "city": "Indore",
    "state": "Madhya Pradesh",
    "description": "Located at Mutual Fund Software, 45, Service Road, Indore City, Indore - 452010, MP, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/mutual_mobile.webp",
    "headquarters": "Indore, Madhya Pradesh",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/mutualmobile",
    "website": "https://www.mutualmobile.com/"
  },
  {
    "id": "2a574526",
    "name": "Blancco Technology Group",
    "lat": 26.514284,
    "lng": 80.230351,
    "city": "Kanpur",
    "state": "Uttar Pradesh",
    "description": "Located at Rural Technology Action Group, Kanpur - 208016, UP, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/blancco_technology_group.webp",
    "headquarters": "Kanpur, Uttar Pradesh",
    "teamSize": "50-200",
    "linkedin": "https://www.linkedin.com/company/blancco-ltd-",
    "website": "https://blancco.com/"
  },
  {
    "id": "5f44e8fa",
    "name": "Brainvire Infotech",
    "lat": 26.82399,
    "lng": 75.54525,
    "city": "Vatika Infotech City",
    "state": "Rajasthan",
    "description": "Located at Vatika Infotech City, Jaipur, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/brainvire_infotech.webp",
    "headquarters": "Vatika Infotech City, Rajasthan",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/brainvire-infotech-inc",
    "website": "https://www.brainvire.com/"
  },
  {
    "id": "03a54cac",
    "name": "Apps Business IT Solutions",
    "lat": 9.9643022,
    "lng": 76.3025316,
    "city": "Kochi",
    "state": "Kerala",
    "description": "Located at Mfluid, George Varghese Lane, Kadavanthra, Kochi - 682020, KL, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/apps_business_it_solutions.webp",
    "headquarters": "Kochi, Kerala",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/abits-pvt-ltd",
    "website": "https://a-bits.com/"
  },
  {
    "id": "ebd9b633",
    "name": "Ushur",
    "lat": 12.9118491,
    "lng": 77.6420106,
    "city": "Bengaluru",
    "state": "Karnataka",
    "description": "Located at Ushur, 17/D, 18th Cross Road, HSR Layout, Bengaluru - 560102, KA, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/ushur.webp",
    "headquarters": "Bengaluru, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/ushur-me",
    "website": "https://ushur.ai/"
  },
  {
    "id": "7f274884",
    "name": "Amrut Software",
    "lat": 19.0669359,
    "lng": 72.9044168,
    "city": "Mumbai",
    "state": "Maharashtra",
    "description": "Located at Amrut Stores, Shop No 2&3, PCAG Building, Road No. 4, Chheda Nagar, Mumbai - 400089, MH, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/amrut_software.webp",
    "headquarters": "Mumbai, Maharashtra",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/amruts-software",
    "website": "https://www.amrutsoftware.com/"
  },
  {
    "id": "81460307",
    "name": "iSolve Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/isolve_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/isolvetechnology",
    "website": "https://isolve.in/"
  },
  {
    "id": "d4641770",
    "name": "M Squared Software and Services",
    "lat": 8.5608697,
    "lng": 76.8770123,
    "city": "Thiruvananthapuram",
    "state": "Kerala",
    "description": "Located at M-Squared Software and Services, Kazhakkoottam, Thiruvananthapuram - 695001, KL, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/m_squared_software_and_services.webp",
    "headquarters": "Thiruvananthapuram, Kerala",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/m-squared-software-and-services-pvt-ltd",
    "website": "https://m2india.com/"
  },
  {
    "id": "fda7d435",
    "name": "Anunta Tech",
    "lat": 12.9226966,
    "lng": 80.1279616,
    "city": "Tambaram",
    "state": "Tamil Nadu",
    "description": "Located at TECH ZONE, 1, Velachery Main Road, East Tambaram, Tambaram - 600059, TN, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/anunta_tech.webp",
    "headquarters": "Tambaram, Tamil Nadu",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/anuntatech",
    "website": "https://www.anunta.com/"
  },
  {
    "id": "ebabf780",
    "name": "IT America Inc",
    "lat": 26.8710268,
    "lng": 80.9456475,
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "description": "Located at IT College, Faizabad Road, Hasan Ganj, Lucknow - 226006, UP, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/it_america_inc.webp",
    "headquarters": "Lucknow, Uttar Pradesh",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/it-america-inc",
    "website": "https://www.itamerica.com/"
  },
  {
    "id": "307a0b57",
    "name": "Netrovert Software,",
    "lat": 25.34526,
    "lng": 72.6269381,
    "city": "Jalore",
    "state": "Rajasthan",
    "description": "Located at Software Technology, Shop No.17-19, NH325, Jalore - 343001, RJ, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "",
    "headquarters": "Jalore, Rajasthan",
    "teamSize": "50-200",
    "website": "https://www.siliconindia.com/vendor/netrovert-software-augmented-intelligence-for-enterprise-integration--cid-3506.html"
  },
  {
    "id": "e0f2d24e",
    "name": "Sierra Atlantic",
    "lat": 18.5350442,
    "lng": 73.829859,
    "city": "Pune",
    "state": "Maharashtra",
    "description": "Located at Sierra Wireless India, ICC Trade Tower, Senapati Bapat Marg, Model Colony, Pune - 411001, MH, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/sierra_atlantic.webp",
    "headquarters": "Pune, Maharashtra",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/sierra-atlantic",
    "website": "https://www.hitachi.com/New/cnews/110104.pdf"
  },
  {
    "id": "2cbb3876",
    "name": "Ampcus Inc",
    "lat": 22.31028,
    "lng": 73.16672,
    "city": "Vadodara",
    "state": "Gujarat",
    "description": "Located at Webmyne INC, Vadodara, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/ampcus_inc.webp",
    "headquarters": "Vadodara, Gujarat",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/ampcus-tech-pvt-ltd",
    "website": "https://www.ampcuscyber.com/"
  },
  {
    "id": "0ac3e8f8",
    "name": "Paramatrix Technologies.",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/paramatrix_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/paramatrix-limited",
    "website": "https://www.paramatrix.com/"
  },
  {
    "id": "efce7615",
    "name": "Votary Softech Solutions",
    "lat": 9.9733401,
    "lng": 76.2874871,
    "city": "Ernakulam",
    "state": "Kerala",
    "description": "Located at Spectrum Softech Solutions, Mahakavi G Road, Ernakulam South, Ernakulam - 682035, KL, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/votary_softech_solutions.webp",
    "headquarters": "Ernakulam, Kerala",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/votarytech",
    "website": "https://www.votarytech.com/"
  },
  {
    "id": "35164777",
    "name": "Tata Technologies, Pune",
    "lat": 18.5841633,
    "lng": 73.7327746,
    "city": "Unknown City",
    "state": "Maharashtra",
    "description": "Located at TATA Technologies, Hinjawadi Phase 1, Mulshi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/tata_technologies_pune.webp",
    "headquarters": "India",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/tata-technologies-limited-pune",
    "website": "http://www.tatatechnologies.com/"
  },
  {
    "id": "1e803205",
    "name": "QSS Technosoft",
    "lat": 28.580376,
    "lng": 77.319249,
    "city": "Noida",
    "state": "Uttar Pradesh",
    "description": "Located at Ansumiti Technosoft Pvt Ltd, E-20, Sector-3, Noida - 201301, UP, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/qss_technosoft.webp",
    "headquarters": "Noida, Uttar Pradesh",
    "teamSize": "50-200",
    "linkedin": "https://www.linkedin.com/company/qss-technosoft",
    "website": "https://www.qsstechnosoft.com/"
  },
  {
    "id": "0f9b9339",
    "name": "EGlogics Softech",
    "lat": 26.7225253,
    "lng": 88.4280329,
    "city": "Siliguri",
    "state": "West Bengal",
    "description": "Located at Softech Water Treatment, Sevoke Road, Siliguri - 734001, WB, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/eglogics_softech.webp",
    "headquarters": "Siliguri, West Bengal",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/eglogics-softech",
    "website": "https://www.eglogics.com/"
  },
  {
    "id": "54934ef2",
    "name": "Trinamix Inc",
    "lat": 22.31028,
    "lng": 73.16672,
    "city": "Vadodara",
    "state": "Gujarat",
    "description": "Located at Webmyne INC, Vadodara, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/trinamix_inc.webp",
    "headquarters": "Vadodara, Gujarat",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/trinamix",
    "website": "https://www.trinamix.com/"
  },
  {
    "id": "de41617f",
    "name": "LabVantage Solutions",
    "lat": 12.98049,
    "lng": 77.60469,
    "city": "Bangalore",
    "state": "Karnataka",
    "description": "Located at Mobipro Solutions, Bangalore, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/labvantage_solutions.webp",
    "headquarters": "Bangalore, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://www.linkedin.com/company/labvantage",
    "website": "https://www.labvantage.com/"
  },
  {
    "id": "4465058d",
    "name": "Visteon Technical And Services Centre",
    "lat": 20.4621281,
    "lng": 75.0078142,
    "city": "Chalisgaon",
    "state": "Maharashtra",
    "description": "Located at Sachin Systems and Services, NH753J, Chalisgaon - 424101, MH, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/visteon_technical_and_services_centre.webp",
    "headquarters": "Chalisgaon, Maharashtra",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/visteon-technical-and-services-centre-private-limited",
    "website": "https://www.visteon.com/"
  },
  {
    "id": "f02e6b92",
    "name": "Xansa plc",
    "lat": 22.519971,
    "lng": 88.370176,
    "city": "Kolkata",
    "state": "West Bengal",
    "description": "Located at Ekdalia Place, Ward 68, Kolkata - 700019, WB, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/xansa_plc.webp",
    "headquarters": "Kolkata, West Bengal",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/xansa",
    "website": "https://www.projectstoday.com/News/Xansa-Plc-plans-to-set-up-three-development-centres#:~:text=Share%20this%20on%20:,the%20company's%20global%20employee%20strength."
  },
  {
    "id": "5abe4067",
    "name": "vTech Solution",
    "lat": 25.624946,
    "lng": 85.05557,
    "city": "Dinapore",
    "state": "Bihar",
    "description": "Located at Print Solution, 2, Gola Road, Danapur, Dinapore - 801503, BR, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/vtech_solution.webp",
    "headquarters": "Dinapore, Bihar",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/vtech-india",
    "website": "https://www.vtechsoln.in/"
  },
  {
    "id": "42a7abe5",
    "name": "OmnePresent Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/omnepresent_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/omnipresent-robot-tech",
    "website": "https://www.tofler.in/omnepresent-technologies-private-limited/company/U72200PN2015PTC153742#:~:text=Omnepresent%20Technologies%20Private%20Limited%2C%20is,India%2C%20411045%2C%20%2D%20411045."
  },
  {
    "id": "070762c2",
    "name": "Lauren Information Technologies",
    "lat": 31.5333033,
    "lng": 75.9157511,
    "city": "Hoshiarpur",
    "state": "Punjab",
    "description": "Located at VaaSS Information Technologies Private Limited, 1-2, arya nagar, Mall Road, Aslamabad, Hoshiarpur - 146001, PB, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/lauren_information_technologies.webp",
    "headquarters": "Hoshiarpur, Punjab",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/lauren-information-technologies",
    "website": "https://www.laurengroup.ai/"
  },
  {
    "id": "d688124a",
    "name": "ANM",
    "lat": 28.8112688,
    "lng": 72.941494,
    "city": "1 ANM",
    "state": "Rajasthan",
    "description": "Located at 1 ANM, Rawla Mandi Tehsil, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/anm.webp",
    "headquarters": "1 ANM, Rajasthan",
    "teamSize": "50-200",
    "website": "https://www.shiksha.com/nursing/anm-auxiliary-nurse-midwife-chp"
  },
  {
    "id": "516ad952",
    "name": "Sixth Energy Technologies",
    "lat": 11.754812,
    "lng": 76.027251,
    "city": "Porunnanore",
    "state": "Kerala",
    "description": "Located at Sixth Mile, Porunnanore, Wayanad, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/sixth_energy_technologies.webp",
    "headquarters": "Porunnanore, Kerala",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/6thenergy-technologies",
    "website": "https://6thenergy.com/"
  },
  {
    "id": "02926d15",
    "name": "Mygo Consulting",
    "lat": 28.4935315,
    "lng": 77.088317,
    "city": "Gurgaon",
    "state": "Haryana",
    "description": "Located at Boston Consulting Group, DLF Tower 10th Road, Sector 25A, Gurgaon - 122010, HR, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/mygo_consulting.webp",
    "headquarters": "Gurgaon, Haryana",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/mygo-consulting-india-pvt-ltd",
    "website": "https://mygoconsulting.com/en-us/"
  },
  {
    "id": "222d2170",
    "name": "Stellapps Technologies",
    "lat": 12.915981,
    "lng": 77.651606,
    "city": "Bangalore",
    "state": "Karnataka",
    "description": "Located at Foradian Technologies, 2569/665, 27th Main Rd, 1st Sector, HSR Layout, HSR Layout, Bangalore - 560102, KA, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/stellapps_technologies.webp",
    "headquarters": "Bangalore, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/stellapps-technologies-private-limited",
    "website": "https://www.stellapps.com/"
  },
  {
    "id": "62a0a3bc",
    "name": "RLabs Enterprise Services",
    "lat": 9.5143299,
    "lng": 76.6332365,
    "city": "Karukachal",
    "state": "Kerala",
    "description": "Located at H & S Enterprise ( Tools For Rent And Services ), Kottayam-Puthuppally Road, Karukachal - 686539, KL, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/rlabs_enterprise_services.webp",
    "headquarters": "Karukachal, Kerala",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/rlabsglobal",
    "website": "https://cleartax.in/f/company/rlabs-enterprise-services-limited/U72200TG2013PLC086168/"
  },
  {
    "id": "cefa7f7b",
    "name": "Xeno",
    "lat": 17.4463818,
    "lng": 78.3897488,
    "city": "Hyderabad",
    "state": "Telangana",
    "description": "Located at XENO SUMMIT, Madhapur Flyover Link, HITEC City, Hyderabad - 500081, TG, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/xeno.webp",
    "headquarters": "Hyderabad, Telangana",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/xenohq",
    "website": "https://www.getxeno.com/"
  },
  {
    "id": "066a789a",
    "name": "Zerone Consulting",
    "lat": 28.4935315,
    "lng": 77.088317,
    "city": "Gurgaon",
    "state": "Haryana",
    "description": "Located at Boston Consulting Group, DLF Tower 10th Road, Sector 25A, Gurgaon - 122010, HR, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/zerone_consulting.webp",
    "headquarters": "Gurgaon, Haryana",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/zerone-consulting",
    "website": "https://www.zerone-consulting.com/"
  },
  {
    "id": "40bb066a",
    "name": "HealthFore Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/healthfore_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/healthfore-technologies",
    "website": "https://www.screener.in/company/533525/"
  },
  {
    "id": "6debc847",
    "name": "Religare Technova",
    "lat": 13.09392,
    "lng": 77.582717,
    "city": "Bangalore",
    "state": "Karnataka",
    "description": "Located at Religare, Yelahanka Satellite Town, Bangalore - 560064, KA, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/religare_technova.webp",
    "headquarters": "Bangalore, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/religare-technova-ltd",
    "website": "https://www.religare.com/"
  },
  {
    "id": "167639c9",
    "name": "BDS Services",
    "lat": 13.065684,
    "lng": 77.643321,
    "city": "Bangalore",
    "state": "Karnataka",
    "description": "Located at BDS Nagara, Horamavu, Bangalore, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/bds_services.webp",
    "headquarters": "Bangalore, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/bdsservices",
    "website": "https://bdsserv.com/"
  },
  {
    "id": "0e7694a4",
    "name": "Acropetal Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/acropetal_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/acropetal-technologies-limited",
    "website": "https://www.screener.in/company/ACROPETAL/"
  },
  {
    "id": "bd9eba2b",
    "name": "TAAL Tech",
    "lat": 26.221449,
    "lng": 88.06852,
    "city": "Taal Basti",
    "state": "Bihar",
    "description": "Located at Taal Basti, Kishanganj, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/taal_tech.webp",
    "headquarters": "Taal Basti, Bihar",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/taaltech",
    "website": "https://www.taaltech.com/"
  },
  {
    "id": "0af07051",
    "name": "Keysight Network Visibility Test & Security",
    "lat": 13.6342977,
    "lng": 79.424758,
    "city": "Tirupati",
    "state": "Andhra Pradesh",
    "description": "Located at Asalatha Test Tube Baby & Multispecialty Hospital, Main Road, Tirupati - 517501, AP, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/keysight_network_visibility_test_security.webp",
    "headquarters": "Tirupati, Andhra Pradesh",
    "teamSize": "50-200",
    "linkedin": "https://www.linkedin.com/company/keysight-visibility-network-test-security#:~:text=About%20us,responsive%20networks%20rely%20on%20Keysight.",
    "website": "https://www.keysight.com/in/en/learn/hubs/network-visibility.html"
  },
  {
    "id": "30bd01a5",
    "name": "Savvysoft Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/savvysoft_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/vivaitindia",
    "website": "https://savvy-it.com/"
  },
  {
    "id": "0b3a08da",
    "name": "Consummate Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/consummate_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://www.linkedin.com/company/consummate-technologies-private-limited",
    "website": "https://consummatetechnologies.us/"
  },
  {
    "id": "1192fa90",
    "name": "Intech Systems",
    "lat": 22.304211,
    "lng": 73.165385,
    "city": "Vadodara",
    "state": "Gujarat",
    "description": "Located at Omikron Systems, 205 & 206, SAKAR Complex, Old Padra Road, Vadodara - 390007, GJ, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/intech_systems.webp",
    "headquarters": "Vadodara, Gujarat",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/intech-systems",
    "website": "https://intech-systems.com/"
  },
  {
    "id": "ff513c8e",
    "name": "Porteck Corporation",
    "lat": 17.43727,
    "lng": 78.38536,
    "city": "Hyderabad",
    "state": "Andhra Pradesh",
    "description": "Located at United Technologies Corporation, Serilingampally, Hyderabad, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/porteck_corporation.webp",
    "headquarters": "Hyderabad, Andhra Pradesh",
    "teamSize": "50-200",
    "linkedin": "https://www.linkedin.com/company/porteck-corporation",
    "website": "http://www.porteck.com/"
  },
  {
    "id": "79eb3014",
    "name": "Pocket FM",
    "lat": 28.684971,
    "lng": 77.312533,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at Pocket F, G.T.B. Enclave, Delhi - 110095, DL, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/pocket_fm.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "website": "https://pocketfm.com/"
  },
  {
    "id": "c00c2d63",
    "name": "Narvar",
    "lat": 25.185798,
    "lng": 82.201308,
    "city": "Narvar Uparhar",
    "state": "Uttar Pradesh",
    "description": "Located at Narvar Uparhar, Allahabad, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/narvar.webp",
    "headquarters": "Narvar Uparhar, Uttar Pradesh",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/narvar",
    "website": "https://corp.narvar.com/"
  },
  {
    "id": "dfb2436f",
    "name": "Tricon Infotech",
    "lat": 12.9303897,
    "lng": 77.6150393,
    "city": "Bengaluru",
    "state": "Karnataka",
    "description": "Located at Tricon InfoTech Pvt. Ltd., 143,114, Hosur Road, Kormangala West, Bengaluru - 560034, KA, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/tricon_infotech.webp",
    "headquarters": "Bengaluru, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/triconinfotech",
    "website": "https://www.triconinfotech.com/"
  },
  {
    "id": "66f9c966",
    "name": "Quest Innovative Solutions",
    "lat": 8.5188634,
    "lng": 76.9585656,
    "city": "Thiruvananthapuram",
    "state": "Kerala",
    "description": "Located at Virtus Innovative Solutions Private Limited, Belhaven Road, Kowdiar, Thiruvananthapuram - 695001, KL, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/quest_innovative_solutions.webp",
    "headquarters": "Thiruvananthapuram, Kerala",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/quest-innovative-solutions",
    "website": "https://www.qis.co.in/"
  },
  {
    "id": "0811f922",
    "name": "Lorhan IT",
    "lat": 25.3796,
    "lng": 82.95733,
    "city": "Lorh\u0101n",
    "state": "Uttar Pradesh",
    "description": "Located at Lorh\u0101n, Varanasi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/lorhan_it.webp",
    "headquarters": "Lorh\u0101n, Uttar Pradesh",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/lorhan-it",
    "website": "https://www.lorhanit.com/"
  },
  {
    "id": "f6bf624d",
    "name": "Soliton Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/soliton_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/solitontechnologies",
    "website": "https://www.solitontech.com/"
  },
  {
    "id": "eea31d8d",
    "name": "ApMoSys Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/apmosys_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/apmosys-the-consulting-services-company",
    "website": "https://apmosys.com/"
  },
  {
    "id": "a3da68a1",
    "name": "Nexgen IOT Solutions",
    "lat": 9.9779597,
    "lng": 76.3231421,
    "city": "Ernakulam",
    "state": "Kerala",
    "description": "Located at Nexgen online solutions, Ponnuruni-Chalikkavattom Road, Ponnurunni, Ernakulam - 680019, KL, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/nexgen_iot_solutions.webp",
    "headquarters": "Ernakulam, Kerala",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/nexgen-techsolutions",
    "website": "https://nexgentechsolutions.com/"
  },
  {
    "id": "a8f9eefc",
    "name": "WeP Peripherals",
    "lat": 28.5487863,
    "lng": 77.252083,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at Rashi Peripherals, 605, Nehru People Market Road, Kalkaji Tehsil, Delhi - 110019, DL, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/wep_peripherals.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/wep-peripherals-private-ltd",
    "website": "https://www.wepindia.com/"
  },
  {
    "id": "0be7add4",
    "name": "Microexcel Inc",
    "lat": 22.31028,
    "lng": 73.16672,
    "city": "Vadodara",
    "state": "Gujarat",
    "description": "Located at Webmyne INC, Vadodara, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/microexcel_inc.webp",
    "headquarters": "Vadodara, Gujarat",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/microexcel",
    "website": "https://www.naukri.com/microexcel-overview-208742"
  },
  {
    "id": "86114e51",
    "name": "iMarque Solutions",
    "lat": 12.98049,
    "lng": 77.60469,
    "city": "Bangalore",
    "state": "Karnataka",
    "description": "Located at Mobipro Solutions, Bangalore, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/imarque_solutions.webp",
    "headquarters": "Bangalore, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/imarque-solutions-pvt.-ltd",
    "website": "https://www.imarque.com/"
  },
  {
    "id": "8280c503",
    "name": "atyati Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/atyati_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/atyati-technologies",
    "website": "https://www.atyati.com/"
  },
  {
    "id": "db1b550e",
    "name": "Kovaion Consulting",
    "lat": 28.4935315,
    "lng": 77.088317,
    "city": "Gurgaon",
    "state": "Haryana",
    "description": "Located at Boston Consulting Group, DLF Tower 10th Road, Sector 25A, Gurgaon - 122010, HR, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/kovaion_consulting.webp",
    "headquarters": "Gurgaon, Haryana",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/kovaion",
    "website": "http://www.kovaion.com/"
  },
  {
    "id": "553caea2",
    "name": "Zelite Solutions",
    "lat": 12.98049,
    "lng": 77.60469,
    "city": "Bangalore",
    "state": "Karnataka",
    "description": "Located at Mobipro Solutions, Bangalore, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/zelite_solutions.webp",
    "headquarters": "Bangalore, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/zelite-solutions-pvt-ltd",
    "website": "https://zelitesolutions.com/"
  },
  {
    "id": "f9f9f76c",
    "name": "Boston Technology Corporation",
    "lat": 30.9036876,
    "lng": 75.7765111,
    "city": "Sunet",
    "state": "Punjab",
    "description": "Located at Boston Bites, Sco123, Ayalli Road, Sunet - 141013, PB, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/boston_technology_corporation.webp",
    "headquarters": "Sunet, Punjab",
    "teamSize": "50-200",
    "linkedin": "https://www.linkedin.com/company/boston-technology-corporation",
    "website": "https://www.boston-technology.com/"
  },
  {
    "id": "308d7100",
    "name": "People10 Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/people10_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/people10",
    "website": "https://people10.com/"
  },
  {
    "id": "b8285288",
    "name": "Cognus Technology",
    "lat": 25.34526,
    "lng": 72.6269381,
    "city": "Jalore",
    "state": "Rajasthan",
    "description": "Located at Software Technology, Shop No.17-19, NH325, Jalore - 343001, RJ, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/cognus_technology.webp",
    "headquarters": "Jalore, Rajasthan",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/cognus-technology-limited",
    "website": "https://www.cognustechnology.com/"
  },
  {
    "id": "ae52f1f0",
    "name": "PC Solutions",
    "lat": 12.964823,
    "lng": 77.5840248,
    "city": "Bengaluru",
    "state": "Karnataka",
    "description": "Located at PCBuildz (Nextgen IT Solutions) - Bangalore's Best Custom PC Shop for Gaming, Editing, 3D Animation & AI Workstation PC Build, No.91, 2nd floor, Shop No, 222-223, Balaji Complex, SP Road, Dharmaraya Swamy Temple Ward, Bengaluru - 560002, KA, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/pc_solutions.webp",
    "headquarters": "Bengaluru, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/pc-solutions-pvt-ltd",
    "website": "https://www.e-pspl.com/"
  },
  {
    "id": "01ce2d16",
    "name": "Evolutyz Corp",
    "lat": 20.29219,
    "lng": 85.82174,
    "city": "Bhubaneswar M Corp",
    "state": "Odisha",
    "description": "Located at Bhubaneswar M Corp, Khordha, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/evolutyz_corp.webp",
    "headquarters": "Bhubaneswar M Corp, Odisha",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/evolutyz-corp",
    "website": "https://www.evolutyz.com/"
  },
  {
    "id": "b7249ed2",
    "name": "Tulip Interfaces",
    "lat": 26.666462,
    "lng": 92.399023,
    "city": "Unknown City",
    "state": "Assam",
    "description": "Located at Tulip Bagen 3, Sonitpur, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/tulip_interfaces.webp",
    "headquarters": "India",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/tulip-technology-solutions#:~:text=About%20us,can%20help%20your%20business%20grow.",
    "website": "https://tulip.co/platform/tulip-ai/"
  },
  {
    "id": "a5875fa5",
    "name": "KARYA Technologies",
    "lat": 12.088643,
    "lng": 76.866446,
    "city": "Karya",
    "state": "Karnataka",
    "description": "Located at Karya, Mysore, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/karya_technologies.webp",
    "headquarters": "Karya, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/karya-technologies",
    "website": "https://www.karyatech.com/"
  },
  {
    "id": "57ae4ffd",
    "name": "QA InfoTech",
    "lat": 19.0848336,
    "lng": 72.9091136,
    "city": "Mumbai",
    "state": "Maharashtra",
    "description": "Located at Sai Infotech, Ghatkopar East, Mumbai, Mumbai Suburban District, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/qa_infotech.webp",
    "headquarters": "Mumbai, Maharashtra",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/qualitestnoida",
    "website": "https://www.qualitestgroup.com/"
  },
  {
    "id": "e65fea7a",
    "name": "QBA Worldwide",
    "lat": 15.487908,
    "lng": 73.907032,
    "city": "Panaji",
    "state": "Goa",
    "description": "Located at Sunshine Worldwide School, Old Goa, Panaji - 403110, GA, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/qba_worldwide.webp",
    "headquarters": "Panaji, Goa",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/qbaworldwide",
    "website": "https://thefinancestory.com/deloitte-pwc-ey-kpmg-rapidly-expanding-their-technology-consulting-practices#:~:text=*%20Deloitte%20India:%20%E2%82%B910%2C000%20crore%20(60%25%20of,%E2%82%B99%2C200%20crore.%20*%20KPMG%20India:%20%E2%82%B95%2C900%E2%80%936%2C200%20crore."
  },
  {
    "id": "a9284d34",
    "name": "iTech India",
    "lat": 10.0213705,
    "lng": 76.3119971,
    "city": "Kochi",
    "state": "Kerala",
    "description": "Located at iTech, 2/1266, Salem - Kochi - Kanyakumari Road, Edapally, Kochi - 682024, KL, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/itech_india.webp",
    "headquarters": "Kochi, Kerala",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/itech-india-private-limited",
    "website": "https://itechindia.co/"
  },
  {
    "id": "bc0e886a",
    "name": "eGain Corporation",
    "lat": 17.43727,
    "lng": 78.38536,
    "city": "Hyderabad",
    "state": "Andhra Pradesh",
    "description": "Located at United Technologies Corporation, Serilingampally, Hyderabad, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/egain_corporation.webp",
    "headquarters": "Hyderabad, Andhra Pradesh",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/egain-corporation",
    "website": "https://www.egain.com/"
  },
  {
    "id": "c4806263",
    "name": "Netrix",
    "lat": 18.5642983,
    "lng": 73.7776435,
    "city": "Pune",
    "state": "Maharashtra",
    "description": "Located at Netrix, Gopal Hari Deshmukh Marg, Baner, Pune - 411001, MH, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "",
    "headquarters": "Pune, Maharashtra",
    "teamSize": "50-200",
    "website": "https://www.netrixindia.com/"
  },
  {
    "id": "e72288b7",
    "name": "Sarvatra Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/sarvatra_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/sarvatra-technologies",
    "website": "https://sarvatra.tech/"
  },
  {
    "id": "79cd86fb",
    "name": "Nichi",
    "lat": 23.0291787,
    "lng": 79.7433472,
    "city": "Nichi",
    "state": "Madhya Pradesh",
    "description": "Located at Nichi, Shahpura Tahsil, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "",
    "headquarters": "Nichi, Madhya Pradesh",
    "teamSize": "50-200"
  },
  {
    "id": "70227902",
    "name": "Ampl",
    "lat": 25.2716621,
    "lng": 87.4592493,
    "city": "Sundarpur",
    "state": "Bihar",
    "description": "Located at Ammapali, NH33, Sundarpur - 813209, BR, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/ampl.webp",
    "headquarters": "Sundarpur, Bihar",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/automotive-manufacturers-private-limited",
    "website": "https://amplindia.co.in/"
  },
  {
    "id": "776992be",
    "name": "Amity Software Systems",
    "lat": 18.498506,
    "lng": 83.528364,
    "city": "Amity",
    "state": "Andhra Pradesh",
    "description": "Located at Amity, Vizianagaram, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/amity_software_systems.webp",
    "headquarters": "Amity, Andhra Pradesh",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/amity-software-limited",
    "website": "https://www.amitysoftware.com/"
  },
  {
    "id": "b3e7fbfe",
    "name": "Asta Crs Inc",
    "lat": 22.665758,
    "lng": 75.885981,
    "city": "Indore",
    "state": "Madhya Pradesh",
    "description": "Located at Cr, Indore - 452020, MP, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/asta_crs_inc.webp",
    "headquarters": "Indore, Madhya Pradesh",
    "teamSize": "50-200",
    "linkedin": "https://www.linkedin.com/company/asta-crs-inc.",
    "website": "https://www.astacrs.com/"
  },
  {
    "id": "1e4cd691",
    "name": "RVU India",
    "lat": 28.193235,
    "lng": 94.154038,
    "city": "Unknown City",
    "state": "Unknown State",
    "description": "Located at Arunachal Pradesh, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/rvu_india.webp",
    "headquarters": "India",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/rv-university",
    "website": "https://rvu.edu.in/"
  },
  {
    "id": "14f56f56",
    "name": "SkyOnn Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/skyonn_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/skyonn-technologies",
    "website": "https://skyonn.com/"
  },
  {
    "id": "b88377f2",
    "name": "Draup",
    "lat": 12.9332887,
    "lng": 77.6148363,
    "city": "Bengaluru",
    "state": "Karnataka",
    "description": "Located at Draup, Jyoti Nivas College Road, Kormangala West, Bengaluru - 560095, KA, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/draup.webp",
    "headquarters": "Bengaluru, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/draupplatform",
    "website": "https://draup.com/"
  },
  {
    "id": "44272cf2",
    "name": "Software",
    "lat": 28.4917497,
    "lng": 77.074302,
    "city": "Gurgaon",
    "state": "Haryana",
    "description": "Located at Nagarro Software Pvt Ltd, 13, Subedar Major Laxmi Chand Road, Sector 18, Gurgaon - 122016, HR, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/software.webp",
    "headquarters": "Gurgaon, Haryana",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/indiasoftware",
    "website": "https://www.softwareindia.online/"
  },
  {
    "id": "b2979f06",
    "name": "Infoplus Technologies UK",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/infoplus_technologies_uk.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/infoplus-technologies-uk-limited",
    "website": "https://www.infoplusltd.co.uk/"
  },
  {
    "id": "8e8426a6",
    "name": "Gaana",
    "lat": 12.9058151,
    "lng": 77.5675439,
    "city": "Bengaluru",
    "state": "Karnataka",
    "description": "Located at Gaana Residency, Chandranagara, Bengaluru - 560111, KA, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/gaana.webp",
    "headquarters": "Bengaluru, Karnataka",
    "teamSize": "50-200",
    "website": "https://gaana.com/"
  },
  {
    "id": "ea39c8c0",
    "name": "Nickelfox Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/nickelfox_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/nickelfoxtech",
    "website": "https://www.nickelfox.com/"
  },
  {
    "id": "6972f8ae",
    "name": "smartSense Consulting Solutions",
    "lat": 22.5696848,
    "lng": 88.4365441,
    "city": "Bidhannagar",
    "state": "West Bengal",
    "description": "Located at Geforce Consulting Solutions Pvt. Ltd., 7th Floor, K-1, Manibhandar Building, Module 7A, Ring Road, Sector V, Bidhannagar - 700091, WB, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/smartsense_consulting_solutions.webp",
    "headquarters": "Bidhannagar, West Bengal",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/smartsense-solutions",
    "website": "https://www.smartsensesolutions.com/"
  },
  {
    "id": "c52ca928",
    "name": "Collabera India",
    "lat": 28.193235,
    "lng": 94.154038,
    "city": "Unknown City",
    "state": "Unknown State",
    "description": "Located at Arunachal Pradesh, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/collabera_india.webp",
    "headquarters": "India",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/collabera-digital",
    "website": "https://www.greatplacetowork.in/great/company/collabera-talent-solutions-private-limited#:~:text=Collabera%20Talent%20Solutions%20Private%20Limited%20is%20a,**AI**%20*%20**Talent%20network**%20*%20**Learning%20solutions**"
  },
  {
    "id": "36486168",
    "name": "NewVision Software",
    "lat": 25.34526,
    "lng": 72.6269381,
    "city": "Jalore",
    "state": "Rajasthan",
    "description": "Located at Software Technology, Shop No.17-19, NH325, Jalore - 343001, RJ, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/newvision_software.webp",
    "headquarters": "Jalore, Rajasthan",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/newvisionhq",
    "website": "https://newvision-software.com/"
  },
  {
    "id": "7a59ec5a",
    "name": "InheritX Solutions",
    "lat": 12.98049,
    "lng": 77.60469,
    "city": "Bangalore",
    "state": "Karnataka",
    "description": "Located at Mobipro Solutions, Bangalore, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/inheritx_solutions.webp",
    "headquarters": "Bangalore, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/inheritx-solutions",
    "website": "https://www.inheritx.com/"
  },
  {
    "id": "54b5f935",
    "name": "SMS",
    "lat": 9.9491688,
    "lng": 76.2993943,
    "city": "Ernakulam",
    "state": "Kerala",
    "description": "Located at SMS Sereniti, Panampilly Nagar, Ernakulam, Kanayannur, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "",
    "headquarters": "Ernakulam, Kerala",
    "teamSize": "50-200"
  },
  {
    "id": "dd75974b",
    "name": "Godrej Infotech",
    "lat": 19.105434,
    "lng": 72.9231706,
    "city": "Mumbai",
    "state": "Maharashtra",
    "description": "Located at Godrej Infotech, Lal Bahadur Shastri Marg, Pirojsha Godrej Nagar, Mumbai - 400079, MH, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/godrej_infotech.webp",
    "headquarters": "Mumbai, Maharashtra",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/godrej-infotech-ltd",
    "website": "https://www.godrejinfotech.com/"
  },
  {
    "id": "e6b3f426",
    "name": "IDrive Software India",
    "lat": 25.34526,
    "lng": 72.6269381,
    "city": "Jalore",
    "state": "Rajasthan",
    "description": "Located at Software Technology, Shop No.17-19, NH325, Jalore - 343001, RJ, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/idrive_software_india.webp",
    "headquarters": "Jalore, Rajasthan",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/idrive-software-india-pvt-ltd",
    "website": "https://www.idrive.com/india/"
  },
  {
    "id": "74c76b2c",
    "name": "StartUP",
    "lat": 12.916116,
    "lng": 77.630588,
    "city": "Bengaluru",
    "state": "Karnataka",
    "description": "Located at GreenBubbles Startup Services Pvt. Ltd., L165, Outer Ring Road, HSR Layout, Bengaluru - 560102, KA, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/startup.webp",
    "headquarters": "Bengaluru, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/startup-india",
    "website": "https://www.startupindia.gov.in/content/sih/en/home-page.html"
  },
  {
    "id": "1798edf2",
    "name": "ProTechmanize Solutions",
    "lat": 12.98049,
    "lng": 77.60469,
    "city": "Bangalore",
    "state": "Karnataka",
    "description": "Located at Mobipro Solutions, Bangalore, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/protechmanize_solutions.webp",
    "headquarters": "Bangalore, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/protechmanize",
    "website": "https://www.protechmanize.com/"
  },
  {
    "id": "9c735b2a",
    "name": "Eastern Enterprise",
    "lat": 18.9702029,
    "lng": 84.3669571,
    "city": "Burakhat",
    "state": "Odisha",
    "description": "Located at Eastern Ghats, Burakhat, Ramagiri, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/eastern_enterprise.webp",
    "headquarters": "Burakhat, Odisha",
    "teamSize": "50-200",
    "linkedin": "https://www.linkedin.com/company/eastern-enterprise",
    "website": "https://easternenterprise.com/"
  },
  {
    "id": "29e5b058",
    "name": "Quess GTS",
    "lat": 9.585111,
    "lng": 76.611541,
    "city": "Govt Gts School Junction",
    "state": "Kerala",
    "description": "Located at Govt Gts School Junction, Kottayam, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/quess_gts.webp",
    "headquarters": "Govt Gts School Junction, Kerala",
    "teamSize": "50-200",
    "linkedin": "https://www.linkedin.com/company/quessgts",
    "website": "https://www.greatplacetowork.in/great/company/quess-corp-ltd#:~:text=Quess%20Corp%20Limited%20is%20India's,and%20AI%2Ddriven%20digital%20platforms."
  },
  {
    "id": "8d2137b5",
    "name": "Benchmark IT Solutions",
    "lat": 12.871548,
    "lng": 77.5957151,
    "city": "Bengaluru",
    "state": "Karnataka",
    "description": "Located at Klassik Benchmark, Yelenahalli, Bengaluru - 560076, KA, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/benchmark_it_solutions.webp",
    "headquarters": "Bengaluru, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/benchmarkitsolutions",
    "website": "https://www.benchmarkit.solutions/"
  },
  {
    "id": "b69faf9d",
    "name": "Pinga Solution",
    "lat": 25.624946,
    "lng": 85.05557,
    "city": "Dinapore",
    "state": "Bihar",
    "description": "Located at Print Solution, 2, Gola Road, Danapur, Dinapore - 801503, BR, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/pinga_solution.webp",
    "headquarters": "Dinapore, Bihar",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/pinga-solution-pvt.-ltd",
    "website": "https://www.pingacrm.com/"
  },
  {
    "id": "487817a0",
    "name": "Embitel Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/embitel_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/embitel-technologies-india",
    "website": "https://www.embitel.com/"
  },
  {
    "id": "2713f516",
    "name": "Tech Connect Services",
    "lat": 10.1127581,
    "lng": 76.2019432,
    "city": "Kuzhupilly",
    "state": "Kerala",
    "description": "Located at 12pt Publishing Tech & Design Services, Cheruvypu jn, Kuzhupilly, Vypin - Pallippuram Road, Pallathamkulangara, Kuzhupilly - 682501, KL, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/tech_connect_services.webp",
    "headquarters": "Kuzhupilly, Kerala",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/tech-connect-services-pvt--ltd-",
    "website": "https://in.indeed.com/cmp/Tech-Connect-Services-Pvt.-Ltd/reviews"
  },
  {
    "id": "d9bda3c5",
    "name": "Federal Soft Systems",
    "lat": 10.3339305,
    "lng": 76.1774681,
    "city": "Irinjalakuda",
    "state": "Kerala",
    "description": "Located at Federal Bank, Potta - Moonupeedika Road, Irinjalakuda - 680122, KL, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/federal_soft_systems.webp",
    "headquarters": "Irinjalakuda, Kerala",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/federal-soft-systems-inc",
    "website": "https://federalsoftsystems.com/"
  },
  {
    "id": "e0c23d55",
    "name": "Vagaro Inc",
    "lat": 22.31028,
    "lng": 73.16672,
    "city": "Vadodara",
    "state": "Gujarat",
    "description": "Located at Webmyne INC, Vadodara, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/vagaro_inc.webp",
    "headquarters": "Vadodara, Gujarat",
    "teamSize": "50-200",
    "linkedin": "https://www.linkedin.com/company/vagaro/jobs#:~:text=Net)%20%7C%20Ahmedabad%20Location-,Technical%20Project%20Manager%20(%20.Net)%20%7C%20Ahmedabad%20Location,Gujarat%2C%20India%204%20hours%20ago",
    "website": "https://www.vagaro.com/pro/about-us"
  },
  {
    "id": "d0f3b76d",
    "name": "eProcurement Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/eprocurement_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/eprocurement-technologies-ltd.",
    "website": "http://www.eptl.in/"
  },
  {
    "id": "8eceb87d",
    "name": "Ellicium Solutions",
    "lat": 12.98049,
    "lng": 77.60469,
    "city": "Bangalore",
    "state": "Karnataka",
    "description": "Located at Mobipro Solutions, Bangalore, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/ellicium_solutions.webp",
    "headquarters": "Bangalore, Karnataka",
    "teamSize": "50-200",
    "website": "https://builtinpune.in/company/ellicium-solutions-inc-emergys-company"
  },
  {
    "id": "d6d0534f",
    "name": "LRS Services",
    "lat": 22.217069,
    "lng": 84.878696,
    "city": "Raurkela",
    "state": "Odisha",
    "description": "Located at LRS-II, Raurkela - 769017, OR, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "",
    "headquarters": "Raurkela, Odisha",
    "teamSize": "50-200"
  },
  {
    "id": "96961cb7",
    "name": "Caelius Consulting",
    "lat": 28.4935315,
    "lng": 77.088317,
    "city": "Gurgaon",
    "state": "Haryana",
    "description": "Located at Boston Consulting Group, DLF Tower 10th Road, Sector 25A, Gurgaon - 122010, HR, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/caelius_consulting.webp",
    "headquarters": "Gurgaon, Haryana",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/caelius-consulting",
    "website": "https://www.caeliusconsulting.com/"
  },
  {
    "id": "b8cf7620",
    "name": "Excelacom Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/excelacom_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/excelacom-technologies",
    "website": "https://www.excelacom.com/"
  },
  {
    "id": "1b515d0a",
    "name": "Softlogic Systems",
    "lat": 22.304211,
    "lng": 73.165385,
    "city": "Vadodara",
    "state": "Gujarat",
    "description": "Located at Omikron Systems, 205 & 206, SAKAR Complex, Old Padra Road, Vadodara - 390007, GJ, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/softlogic_systems.webp",
    "headquarters": "Vadodara, Gujarat",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/softlogic-systems",
    "website": "https://www.softlogicsys.in/"
  },
  {
    "id": "abeb0b55",
    "name": "ABSYZ Inc",
    "lat": 22.31028,
    "lng": 73.16672,
    "city": "Vadodara",
    "state": "Gujarat",
    "description": "Located at Webmyne INC, Vadodara, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/absyz_inc.webp",
    "headquarters": "Vadodara, Gujarat",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/absyz-ltd-",
    "website": "https://www.absyz.com/"
  },
  {
    "id": "67029bd4",
    "name": "UrbanPiper",
    "lat": 12.9701504,
    "lng": 77.7310698,
    "city": "Bengaluru",
    "state": "Karnataka",
    "description": "Located at UrbanPiper, 204, Vydehi Hospital Road, Kundalahalli, Bengaluru - 560066, KA, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/urbanpiper.webp",
    "headquarters": "Bengaluru, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/urbanpiper",
    "website": "https://www.urbanpiper.com/"
  },
  {
    "id": "19542022",
    "name": "SoftSol",
    "lat": 17.4395782,
    "lng": 78.378051,
    "city": "Hyderabad",
    "state": "Telangana",
    "description": "Located at SoftSol, Inorbit Mall Road, Madhapur, Hyderabad - 996544, TG, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/softsol.webp",
    "headquarters": "Hyderabad, Telangana",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/softsol",
    "website": "https://www.softsol.com/"
  },
  {
    "id": "116da26a",
    "name": "BPK Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/bpk_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/bpk-technologies",
    "website": "https://bpktech.zohorecruit.in/jobs/careers"
  },
  {
    "id": "45d58400",
    "name": "AM Research",
    "lat": 9.6165408,
    "lng": 77.1436179,
    "city": "Murickady",
    "state": "Kerala",
    "description": "Located at Kumily Waste Management Study And Research Center, Adimaly - Kumily Highway, Murickady - 685535, KL, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/am_research.webp",
    "headquarters": "Murickady, Kerala",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/am-research",
    "website": "https://www.amresearch.in/"
  },
  {
    "id": "6e0976ed",
    "name": "Inflow Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/inflow_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/inflow-technologies",
    "website": "https://inflowtechnologies.com/"
  },
  {
    "id": "b22b2111",
    "name": "Enhancesys Innovations",
    "lat": 17.4523593,
    "lng": 78.3628041,
    "city": "Hyderabad",
    "state": "Telangana",
    "description": "Located at Euclid Innovations, 650 SLN Terminus, Gachibowli - Miyapur Highway, Ward 106 Serilingampally, Hyderabad - 500084, TG, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/enhancesys_innovations.webp",
    "headquarters": "Hyderabad, Telangana",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/enhancesys-innovations-pvt-ltd-",
    "website": "https://www.enhancesys.com/"
  },
  {
    "id": "c653e220",
    "name": "Smartedge Solutions",
    "lat": 12.98049,
    "lng": 77.60469,
    "city": "Bangalore",
    "state": "Karnataka",
    "description": "Located at Mobipro Solutions, Bangalore, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/smartedge_solutions.webp",
    "headquarters": "Bangalore, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://uk.linkedin.com/company/smartedge-solutions",
    "website": "https://www.smartedges.co/"
  },
  {
    "id": "1775b539",
    "name": "LSA Recruit",
    "lat": 13.147494,
    "lng": 79.83848,
    "city": "Unknown City",
    "state": "Tamil Nadu",
    "description": "Located at Police Recruit School Thiruvallur, - 631203, TN, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/lsa_recruit.webp",
    "headquarters": "India",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/lsarecruit",
    "website": "https://lsarecruit.co.uk/"
  },
  {
    "id": "52625ba9",
    "name": "National Computer Systems",
    "lat": 28.6119151,
    "lng": 77.2196391,
    "city": "New Delhi",
    "state": "Unknown State",
    "description": "Located at National Museum, Janpath, Chanakya Puri Tehsil, New Delhi - 020626, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/national_computer_systems.webp",
    "headquarters": "India",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/ncs-softsolutions-p-ltd",
    "website": "https://www.ncs.co/en-in/"
  },
  {
    "id": "d086ad3b",
    "name": "UniqueHire Consulting LLP",
    "lat": 28.5480737,
    "lng": 77.2533897,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at Simran Consulting LLP, 89, Nehru Place, Kalkaji Tehsil, Delhi - 110019, DL, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/uniquehire_consulting_llp.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/uniquehire#:~:text=Uniquehire%20is%20a%20Technology%20&%20Digital,in%20corporate%2C%20consulting%20and%20beyond.",
    "website": "https://uniquehire.co.in/"
  },
  {
    "id": "1e0faec5",
    "name": "Inventech Info Solutions",
    "lat": 22.5541975,
    "lng": 72.9478591,
    "city": "Anand",
    "state": "Gujarat",
    "description": "Located at Ananya Info Solutions, SF-229, NARAYAN EMPIRE, ANAND VIDYA NAGAR ROAD, Anand - 388001, GJ, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/inventech_info_solutions.webp",
    "headquarters": "Anand, Gujarat",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/inventech-info-solutions",
    "website": "https://inventechinfo.com/"
  },
  {
    "id": "67555865",
    "name": "InfoVision Labs",
    "lat": 13.01012,
    "lng": 77.644967,
    "city": "Bangalore",
    "state": "Karnataka",
    "description": "Located at Saartha Labs Private Labs, 12, 2nd floor, Banaswadi Main Road, Banasavadi, Bangalore - 560043, KA, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/infovision_labs.webp",
    "headquarters": "Bangalore, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/infovision",
    "website": "https://www.infovision.com/"
  },
  {
    "id": "7ba11bee",
    "name": "Numeric Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/numeric_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/numerictech",
    "website": "https://numerictech.com/"
  },
  {
    "id": "df101628",
    "name": "Provar Testing",
    "lat": 13.1889086,
    "lng": 80.3147634,
    "city": "Chennai",
    "state": "Tamil Nadu",
    "description": "Located at Chinnus Blood Testing, Chennai - Ennore Expressway Road, Zone 1 Tiruvottiyur, Chennai - 600057, TN, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/provar_testing.webp",
    "headquarters": "Chennai, Tamil Nadu",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/provar-testing",
    "website": "https://provar.com/"
  },
  {
    "id": "95c85113",
    "name": "Fint Solutions",
    "lat": 12.98049,
    "lng": 77.60469,
    "city": "Bangalore",
    "state": "Karnataka",
    "description": "Located at Mobipro Solutions, Bangalore, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/fint_solutions.webp",
    "headquarters": "Bangalore, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/fint-solutions",
    "website": "https://www.fintinc.com/index.html"
  },
  {
    "id": "fa97f95a",
    "name": "AIS Technolabs",
    "lat": 11.0691734,
    "lng": 76.5175355,
    "city": "Agali",
    "state": "Kerala",
    "description": "Located at Ais Karuvara, Mannarkkad-Aanakkati Road, Anamooly, Agali - 678582, KL, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/ais_technolabs.webp",
    "headquarters": "Agali, Kerala",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/ais-technolabs",
    "website": "https://www.aistechnolabs.com/"
  },
  {
    "id": "aca83273",
    "name": "BenQ India",
    "lat": 28.193235,
    "lng": 94.154038,
    "city": "Unknown City",
    "state": "Unknown State",
    "description": "Located at Arunachal Pradesh, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/benq_india.webp",
    "headquarters": "India",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/benq-india",
    "website": "https://www.benq.com/en-in/index.html"
  },
  {
    "id": "5df60ef3",
    "name": "i2k2 Networks",
    "lat": 12.9256413,
    "lng": 77.6863239,
    "city": "Bengaluru",
    "state": "Karnataka",
    "description": "Located at Applogic Networks, 1A, RMZ Ecoworld Internal Road, Shivanasamudra Ward, Bengaluru - 560103, KA, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/i2k2_networks.webp",
    "headquarters": "Bengaluru, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/i2k2",
    "website": "https://www.i2k2.com/"
  },
  {
    "id": "50d73aa4",
    "name": "Infodart Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/infodart_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/infodart",
    "website": "https://www.infodartglobal.com/"
  },
  {
    "id": "91c7cb93",
    "name": "Cavisson Systems,",
    "lat": 22.304211,
    "lng": 73.165385,
    "city": "Vadodara",
    "state": "Gujarat",
    "description": "Located at Omikron Systems, 205 & 206, SAKAR Complex, Old Padra Road, Vadodara - 390007, GJ, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/cavisson_systems.webp",
    "headquarters": "Vadodara, Gujarat",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/cavisson-systems-inc",
    "website": "https://www.cavisson.com/"
  },
  {
    "id": "c28fb6a5",
    "name": "MultiQoS Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/multiqos_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/multiqos",
    "website": "https://multiqos.com/"
  },
  {
    "id": "85ea80fa",
    "name": "Norwin Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/norwin_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/norwin-technologies",
    "website": "https://norwintechnologies.com/"
  },
  {
    "id": "bb01b730",
    "name": "Nature Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/nature_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/nature-technologies-pvt-ltd",
    "website": "https://natureglobal.com/"
  },
  {
    "id": "b8256813",
    "name": "Hammer",
    "lat": 32.2517762,
    "lng": 76.3292651,
    "city": "Dharamkot",
    "state": "Himachal Pradesh",
    "description": "Located at Golden Hammer Woodcarving, Dharamkot - Haini Road, Dharamkot - 176219, HP, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/hammer.webp",
    "headquarters": "Dharamkot, Himachal Pradesh",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/hammer-india",
    "website": "https://hammeronline.in/"
  },
  {
    "id": "adf1f3e7",
    "name": "Indus Net Technologies",
    "lat": 23.132693,
    "lng": 87.631443,
    "city": "Indus",
    "state": "West Bengal",
    "description": "Located at Indus, Bankura, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/indus_net_technologies.webp",
    "headquarters": "Indus, West Bengal",
    "teamSize": "50-200",
    "linkedin": "https://sg.linkedin.com/company/indus-net-technologies#:~:text=About%20us,Deliver!&text=External%20link%20for%20Indus%20Net%20Technologies%20(INT.)",
    "website": "https://www.indusnet.co.in/docs/portfolio/Corporate-Profile.pdf"
  },
  {
    "id": "04e58570",
    "name": "IAP Company",
    "lat": 13.0157268,
    "lng": 77.5694163,
    "city": "Bengaluru",
    "state": "Karnataka",
    "description": "Located at Instrumentation and Applied Physics, Mirinji Marg, Sadashivanagar, Bengaluru - 560012, KA, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/iap_company.webp",
    "headquarters": "Bengaluru, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/iap-company-ltd.",
    "website": "https://www.marcatusqed.com/service/iap/"
  },
  {
    "id": "6afb2ff2",
    "name": "Trangile Services",
    "lat": 30.111017,
    "lng": 78.2825,
    "city": "Rishikesh",
    "state": "Uttarakhand",
    "description": "Located at Services, Someshwar Nagar, Rishikesh - 249201, UT, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/trangile_services.webp",
    "headquarters": "Rishikesh, Uttarakhand",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/trangile-services",
    "website": "https://trangile.com/"
  },
  {
    "id": "6160a4b7",
    "name": "Saviance Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/saviance_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://www.linkedin.com/company/saviance-technologies-pvt-ltd",
    "website": "https://saviance.com/"
  },
  {
    "id": "f781e57c",
    "name": "nCircle Tech",
    "lat": 12.9226966,
    "lng": 80.1279616,
    "city": "Tambaram",
    "state": "Tamil Nadu",
    "description": "Located at TECH ZONE, 1, Velachery Main Road, East Tambaram, Tambaram - 600059, TN, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/ncircle_tech.webp",
    "headquarters": "Tambaram, Tamil Nadu",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/ncircle-tech",
    "website": "https://ncircletech.com/"
  },
  {
    "id": "06855945",
    "name": "TechnoBind Solutions",
    "lat": 12.98049,
    "lng": 77.60469,
    "city": "Bangalore",
    "state": "Karnataka",
    "description": "Located at Mobipro Solutions, Bangalore, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/technobind_solutions.webp",
    "headquarters": "Bangalore, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/technobind-solutions",
    "website": "https://technobind.com/"
  },
  {
    "id": "259c181e",
    "name": "Qwikcilver Solutions",
    "lat": 12.98049,
    "lng": 77.60469,
    "city": "Bangalore",
    "state": "Karnataka",
    "description": "Located at Mobipro Solutions, Bangalore, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "",
    "headquarters": "Bangalore, Karnataka",
    "teamSize": "50-200",
    "website": "https://www.qwikcilver.com/contact-us/"
  },
  {
    "id": "5ef4931e",
    "name": "Benison Technologies",
    "lat": 12.915981,
    "lng": 77.651606,
    "city": "Bangalore",
    "state": "Karnataka",
    "description": "Located at Foradian Technologies, 2569/665, 27th Main Rd, 1st Sector, HSR Layout, HSR Layout, Bangalore - 560102, KA, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/benison_technologies.webp",
    "headquarters": "Bangalore, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/benison-technologies",
    "website": "https://benisontech.com/"
  },
  {
    "id": "013a1727",
    "name": "Pratiti Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/pratiti_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/pratiti-technologies",
    "website": "https://pratititech.com/"
  },
  {
    "id": "6b2473ec",
    "name": "Technovert",
    "lat": 17.4373379,
    "lng": 78.393206,
    "city": "Hyderabad",
    "state": "Telangana",
    "description": "Located at Technovert, kavuri hills road, Madhapur, Hyderabad - 800081, TG, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/technovert.webp",
    "headquarters": "Hyderabad, Telangana",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/sb-scafform-technovert-pvt-ltd",
    "website": "https://www.topdevelopers.co/profile/technovertsolutions#:~:text=Technovert%20Solutions%20is%20an%20IT%20services%20and,API%20testing%20*%20Mobile%20and%20performance%20testing"
  },
  {
    "id": "d9cfefa8",
    "name": "Aabasoft",
    "lat": 9.9946969,
    "lng": 76.3520125,
    "city": "Ernakulam",
    "state": "Kerala",
    "description": "Located at Aabasoft, Seaport Airport Road, Ernakulam - 682037, KL, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/aabasoft.webp",
    "headquarters": "Ernakulam, Kerala",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/aabasoft",
    "website": "https://www.aabasoft.com/"
  },
  {
    "id": "2875a371",
    "name": "Krish TechnoLabs",
    "lat": 13.0920663,
    "lng": 80.2817503,
    "city": "Chennai",
    "state": "Tamil Nadu",
    "description": "Located at Krish Lites, Govindappa Naicken Street, Zone 5 Royapuram, Chennai - 600079, TN, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/krish_technolabs.webp",
    "headquarters": "Chennai, Tamil Nadu",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/krish-technolabs",
    "website": "https://www.krishtechnolabs.com/"
  },
  {
    "id": "0b5551a4",
    "name": "Dion Global Solutions",
    "lat": 9.9625939,
    "lng": 76.2417663,
    "city": "Kochi",
    "state": "Kerala",
    "description": "Located at Dion homestay, Vadathaza Lane, Fort Kochi, Kochi - 682001, KL, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/dion_global_solutions.webp",
    "headquarters": "Kochi, Kerala",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/dion-global-solutions-ltd",
    "website": "https://www.dionglobal.com/"
  },
  {
    "id": "8afb5cc4",
    "name": "OnGraph Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/ongraph_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/ongraph",
    "website": "https://www.ongraph.com/"
  },
  {
    "id": "39a734ad",
    "name": "mokSa Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/moksa_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/moksatechnologies",
    "website": "https://www.moksatechnologies.com/"
  },
  {
    "id": "a952a259",
    "name": "Maven Wave",
    "lat": 12.9507013,
    "lng": 77.6235404,
    "city": "Bengaluru",
    "state": "Karnataka",
    "description": "Located at Maven Kitchen, Ejipura Main Road, Ambedkarnagar, Bengaluru - 560095, KA, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/maven_wave.webp",
    "headquarters": "Bengaluru, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://www.linkedin.com/company/maven-wave-partners",
    "website": "https://www.greatplacetowork.in/great/company/maven-wave-partners-india-private-limited"
  },
  {
    "id": "843f8e54",
    "name": "Itlize Global",
    "lat": 27.501023,
    "lng": 82.794713,
    "city": "Barhani Bazar",
    "state": "Uttar Pradesh",
    "description": "Located at Global, Barhani Bazar, Siddharth Nagar, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/itlize_global.webp",
    "headquarters": "Barhani Bazar, Uttar Pradesh",
    "teamSize": "50-200",
    "linkedin": "https://www.linkedin.com/company/itlize-global",
    "website": "https://www.itlize.com/"
  },
  {
    "id": "692521b5",
    "name": "Webomaze Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/webomaze_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/webomazetechnologies",
    "website": "https://www.webomaze.com/"
  },
  {
    "id": "6eef75e4",
    "name": "Xicom Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/xicom_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/xicom-technologies-ltd",
    "website": "https://www.xicom.biz/"
  },
  {
    "id": "d2fec91b",
    "name": "Sphinx Worldbiz",
    "lat": 28.3924898,
    "lng": 77.0589534,
    "city": "Gurgaon",
    "state": "Haryana",
    "description": "Located at SphinX, GF-24, Kadarpur Road, Sector 65, Gurgaon - 122008, HR, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/sphinx_worldbiz.webp",
    "headquarters": "Gurgaon, Haryana",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/sphinx-worldbiz-limited",
    "website": "https://www.sphinxworldbiz.com/"
  },
  {
    "id": "82d3a12f",
    "name": "Eze Software",
    "lat": 25.595974,
    "lng": 94.384184,
    "city": "Chizami",
    "state": "Nagaland",
    "description": "Located at ezeri (literal translation eze means sea/lake, ri is river), Chizami - 797107, NL, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/eze_software.webp",
    "headquarters": "Chizami, Nagaland",
    "teamSize": "50-200",
    "linkedin": "https://www.linkedin.com/company/ezesoftware",
    "website": "https://hysea.in/hysea-member/eze-software-india-pvt-ltd/"
  },
  {
    "id": "07b1489a",
    "name": "Teksun Inc",
    "lat": 22.31028,
    "lng": 73.16672,
    "city": "Vadodara",
    "state": "Gujarat",
    "description": "Located at Webmyne INC, Vadodara, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/teksun_inc.webp",
    "headquarters": "Vadodara, Gujarat",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/teksun",
    "website": "https://teksun.com/"
  },
  {
    "id": "3bc464e7",
    "name": "Potomac Technologies",
    "lat": 12.3252959,
    "lng": 76.625107,
    "city": "Mysuru",
    "state": "Karnataka",
    "description": "Located at Potomac Hills, 2906/1, Gokulam Main Road, Jayalakshmipuram, Mysuru - 570001, KA, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/potomac_technologies.webp",
    "headquarters": "Mysuru, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/potomactechnologies",
    "website": "https://cleartax.in/f/company/potomac-technologies-private-limited/U72900MP2016PTC040699/"
  },
  {
    "id": "c1fd7cfe",
    "name": "Panamax Infotech",
    "lat": 26.82399,
    "lng": 75.54525,
    "city": "Vatika Infotech City",
    "state": "Rajasthan",
    "description": "Located at Vatika Infotech City, Jaipur, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/panamax_infotech.webp",
    "headquarters": "Vatika Infotech City, Rajasthan",
    "teamSize": "50-200",
    "linkedin": "https://www.linkedin.com/company/panamaxinc",
    "website": "https://www.ibm.com/partnerplus/directory/company/8061"
  },
  {
    "id": "ed64e103",
    "name": "CoreFlex Solutions",
    "lat": 12.98049,
    "lng": 77.60469,
    "city": "Bangalore",
    "state": "Karnataka",
    "description": "Located at Mobipro Solutions, Bangalore, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/coreflex_solutions.webp",
    "headquarters": "Bangalore, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/coreflexsolutionsinc",
    "website": "https://coreflexsolutions.com/"
  },
  {
    "id": "ad92bd56",
    "name": "Cogencis Information Services",
    "lat": 17.529614,
    "lng": 78.399842,
    "city": "Hyderabad",
    "state": "Andhra Pradesh",
    "description": "Located at Indian National Centre for Ocean Information Services, Gajula Ramaram, Hyderabad - 500117, AP, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/cogencis_information_services.webp",
    "headquarters": "Hyderabad, Andhra Pradesh",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/nsecogencis",
    "website": "https://www.cogencis.com/"
  },
  {
    "id": "b4e54606",
    "name": "Bhavna Corp.",
    "lat": 22.608133,
    "lng": 73.807717,
    "city": "Bhavna Falia",
    "state": "Gujarat",
    "description": "Located at Bhavna Falia, Dahod, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/bhavna_corp.webp",
    "headquarters": "Bhavna Falia, Gujarat",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/bhavna-corp",
    "website": "https://bhavnacorp.com/"
  },
  {
    "id": "f6579050",
    "name": "DigiMantra Labs",
    "lat": 13.01012,
    "lng": 77.644967,
    "city": "Bangalore",
    "state": "Karnataka",
    "description": "Located at Saartha Labs Private Labs, 12, 2nd floor, Banaswadi Main Road, Banasavadi, Bangalore - 560043, KA, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/digimantra_labs.webp",
    "headquarters": "Bangalore, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/digimantra-labs",
    "website": "https://www.topdevelopers.co/profile/digimantra-labs"
  },
  {
    "id": "561c47c9",
    "name": "Paycraft Solutions",
    "lat": 12.98049,
    "lng": 77.60469,
    "city": "Bangalore",
    "state": "Karnataka",
    "description": "Located at Mobipro Solutions, Bangalore, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/paycraft_solutions.webp",
    "headquarters": "Bangalore, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/paycraftsolutions",
    "website": "https://paycraftsol.com/"
  },
  {
    "id": "f10519b9",
    "name": "TechMatrix Consulting",
    "lat": 28.4935315,
    "lng": 77.088317,
    "city": "Gurgaon",
    "state": "Haryana",
    "description": "Located at Boston Consulting Group, DLF Tower 10th Road, Sector 25A, Gurgaon - 122010, HR, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/techmatrix_consulting.webp",
    "headquarters": "Gurgaon, Haryana",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/techmatrix-pte-ltd",
    "website": "https://www.techmatrixconsulting.com/"
  },
  {
    "id": "d4f3fec8",
    "name": "FSL Software Technologies",
    "lat": 13.026214,
    "lng": 77.635813,
    "city": "Bangalore",
    "state": "Karnataka",
    "description": "Located at Ambara Software Technologies, Kacharkanahalli, Bangalore - 560043, KA, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/fsl_software_technologies.webp",
    "headquarters": "Bangalore, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/fsl-software-technologies-ltd",
    "website": "https://www.fsltechnologies.com/"
  },
  {
    "id": "baf72c0b",
    "name": "CoreCard India",
    "lat": 28.193235,
    "lng": 94.154038,
    "city": "Unknown City",
    "state": "Unknown State",
    "description": "Located at Arunachal Pradesh, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/corecard_india.webp",
    "headquarters": "India",
    "teamSize": "50-200",
    "linkedin": "https://www.linkedin.com/company/corecardindia",
    "website": "https://corecardindia.com/"
  },
  {
    "id": "5eb1ffc1",
    "name": "Team Recykal",
    "lat": 17.5151659,
    "lng": 78.4883232,
    "city": "Hyderabad",
    "state": "Telangana",
    "description": "Located at Team HDPC, 202, Panchsheel Enclave Lane no 11, Ward 133 Macha Bolarum, Hyderabad - 500010, TG, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/team_recykal.webp",
    "headquarters": "Hyderabad, Telangana",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/recykaldotcom#:~:text=Recykal%20has%20also%20received%20awards%20including:%20*,Executive%2DTechnology%20*%20Vikram%20Prabakar%2C%20Co%2DFounder%2C%20Product%2C%20Tech",
    "website": "https://www.recykal.com/e-waste-disposal#:~:text=Pan%2DIndia%20Partner%20Network,your%20scale%20and%20security%20needs."
  },
  {
    "id": "842a85f7",
    "name": "Vitech Systems Asia",
    "lat": 18.5461883,
    "lng": 73.8169543,
    "city": "Pune",
    "state": "Maharashtra",
    "description": "Located at Food Systems Asia, Abhimanshree Society Road, Aundh, Pune - 411001, MH, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/vitech_systems_asia.webp",
    "headquarters": "Pune, Maharashtra",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/vitech-systems-group",
    "website": "https://www.vitechinc.com/"
  },
  {
    "id": "667866b5",
    "name": "Sourcebits Digital",
    "lat": 12.936467,
    "lng": 77.6909742,
    "city": "Bengaluru",
    "state": "Karnataka",
    "description": "Located at Sourcebits (Ascendum Digital), 2nd Floor, A Block, Salarpuria Aura, Service Road, Panathur, Bengaluru - 560103, KA, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/sourcebits_digital.webp",
    "headquarters": "Bengaluru, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://www.linkedin.com/company/sourcebits",
    "website": "https://www.voraventures.com/news/ascendum-acquires-sourcebits-a-sequoia-and-idg-backed-digital-innovation-company"
  },
  {
    "id": "5d6eb72f",
    "name": "Fiorano Software",
    "lat": 25.34526,
    "lng": 72.6269381,
    "city": "Jalore",
    "state": "Rajasthan",
    "description": "Located at Software Technology, Shop No.17-19, NH325, Jalore - 343001, RJ, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/fiorano_software.webp",
    "headquarters": "Jalore, Rajasthan",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/fiorano-software",
    "website": "https://www.fiorano.com/"
  },
  {
    "id": "0b4af685",
    "name": "Jekson Vision",
    "lat": 30.0424553,
    "lng": 76.3119938,
    "city": "Cheeka",
    "state": "Haryana",
    "description": "Located at Velvet Vision, Guhla Road, Cheeka - 136035, HR, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/jekson_vision.webp",
    "headquarters": "Cheeka, Haryana",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/jeksonvision",
    "website": "https://jeksonvision.com/"
  },
  {
    "id": "c05394dc",
    "name": "Relevance Lab",
    "lat": 15.4123064,
    "lng": 73.9785167,
    "city": "Ponda",
    "state": "Goa",
    "description": "Located at lab, 123, GEC Slope, Farmagudi, Ponda - 403401, GA, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/relevance_lab.webp",
    "headquarters": "Ponda, Goa",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/relevance-lab#:~:text=As%20we%20expand%20our%20AWS%20partnership%20in,GxP%2Dcompliant%20research%20environments%2C%20and%20trusted%20research%20enclaves.",
    "website": "https://www.relevancelab.com/"
  },
  {
    "id": "a8704d22",
    "name": "Eightfold",
    "lat": 12.936401,
    "lng": 77.6108471,
    "city": "Bengaluru",
    "state": "Karnataka",
    "description": "Located at Eightfold AI, Hosur Road, Lakkasandra, Bengaluru - 560029, KA, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/eightfold.webp",
    "headquarters": "Bengaluru, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://www.linkedin.com/company/eightfoldai",
    "website": "https://eightfold.ai/"
  },
  {
    "id": "bcb332e6",
    "name": "Eximius Design",
    "lat": 18.5633682,
    "lng": 73.7727798,
    "city": "Pune",
    "state": "Maharashtra",
    "description": "Located at Ticket Design, 87/ 20, Rajyog Internal Lane, Baner, Pune - 411045, MH, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/eximius_design.webp",
    "headquarters": "Pune, Maharashtra",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/eximius-design",
    "website": "https://www.wipro.com/newsroom/press-releases/2020/wipro-to-acquire-eximius-design-strengthens-leadership-in-VLSI-and-systems-design-services/"
  },
  {
    "id": "8f0c163c",
    "name": "McKinley Rice",
    "lat": 11.7080901,
    "lng": 75.5350958,
    "city": "Mahe",
    "state": "Puducherry",
    "description": "Located at Morgan McKinley, Boulevard Road, Mahe - 673310, PY, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/mckinley_rice.webp",
    "headquarters": "Mahe, Puducherry",
    "teamSize": "50-200",
    "linkedin": "https://www.linkedin.com/company/redrobofficial",
    "website": "https://mckinleyrice.com/"
  },
  {
    "id": "61ba8269",
    "name": "Entropik Tech",
    "lat": 12.9226966,
    "lng": 80.1279616,
    "city": "Tambaram",
    "state": "Tamil Nadu",
    "description": "Located at TECH ZONE, 1, Velachery Main Road, East Tambaram, Tambaram - 600059, TN, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/entropik_tech.webp",
    "headquarters": "Tambaram, Tamil Nadu",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/entropiktech",
    "website": "https://www.entropik.io/"
  },
  {
    "id": "b26d7c67",
    "name": "High Peak Software",
    "lat": 11.3715844,
    "lng": 76.5178118,
    "city": "Unknown City",
    "state": "Tamil Nadu",
    "description": "Located at Mukurthi Peak, 643212, TN, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/high_peak_software.webp",
    "headquarters": "India",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/highpeaksw",
    "website": "https://highpeaksw.com/"
  },
  {
    "id": "29a7610f",
    "name": "Cartesian Consulting",
    "lat": 28.4935315,
    "lng": 77.088317,
    "city": "Gurgaon",
    "state": "Haryana",
    "description": "Located at Boston Consulting Group, DLF Tower 10th Road, Sector 25A, Gurgaon - 122010, HR, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/cartesian_consulting.webp",
    "headquarters": "Gurgaon, Haryana",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/cartesian-consulting-pvt-ltd",
    "website": "https://cartesianconsulting.com/"
  },
  {
    "id": "ad3d20c2",
    "name": "Dextara Digital",
    "lat": 19.0128029,
    "lng": 72.8277261,
    "city": "Mumbai",
    "state": "Maharashtra",
    "description": "Located at Reliance Digital, Appasaheb Marathe Marg, Prabhadevi, Mumbai - 400025, MH, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/dextara_digital.webp",
    "headquarters": "Mumbai, Maharashtra",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/dextara-digital#:~:text=Dextara%20Datamatics%20is%20a%20Salesforce,Time%20&%20On%2DTime'.",
    "website": "https://www.datamatics.com/press-release-list/datamatics-dives-deep-in-salesforce-capabilities-acquires-dextara-digital"
  },
  {
    "id": "0924ecac",
    "name": "Optimus Information",
    "lat": 18.569197,
    "lng": 73.911308,
    "city": "Pune",
    "state": "Maharashtra",
    "description": "Located at Optimus, West Avenue, Nagar Road, Pune - 411014, MH, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/optimus_information.webp",
    "headquarters": "Pune, Maharashtra",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/optimus-information",
    "website": "https://www.optimusinfo.com/"
  },
  {
    "id": "e8ef57ba",
    "name": "Digital Aptech",
    "lat": 18.5983079,
    "lng": 73.7638819,
    "city": "Pimpri",
    "state": "Maharashtra",
    "description": "Located at Aptech Montana, Sainath colony path, Bhujbal Chowk, Pimpri - 411027, MH, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/digital_aptech.webp",
    "headquarters": "Pimpri, Maharashtra",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/digital-aptech",
    "website": "https://digitalaptech.com/"
  },
  {
    "id": "c4165de4",
    "name": "apna",
    "lat": 22.6923054,
    "lng": 75.8620709,
    "city": "Indore",
    "state": "Madhya Pradesh",
    "description": "Located at Vishnupuri Apna Garden, Indore, Juni Indore Tahsil, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/apna.webp",
    "headquarters": "Indore, Madhya Pradesh",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/apnahq/jobs",
    "website": "https://apna.co/"
  },
  {
    "id": "f5411aa8",
    "name": "Zentek Infosoft",
    "lat": 28.6779107,
    "lng": 77.2638615,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at Zentek Educational  & Welfare Society, T-105, Gali Number 7, Seelampur, Delhi - 110053, DL, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/zentek_infosoft.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://www.linkedin.com/company/zentekinfosoft",
    "website": "https://zentekinfosoft.com/"
  },
  {
    "id": "f50fd3a0",
    "name": "Minosha India",
    "lat": 28.193235,
    "lng": 94.154038,
    "city": "Unknown City",
    "state": "Unknown State",
    "description": "Located at Arunachal Pradesh, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/minosha_india.webp",
    "headquarters": "India",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/minosha-print-soutions-pvt-ltd",
    "website": "https://www.minosha.in/"
  },
  {
    "id": "f916ad2d",
    "name": "Aress Software",
    "lat": 25.34526,
    "lng": 72.6269381,
    "city": "Jalore",
    "state": "Rajasthan",
    "description": "Located at Software Technology, Shop No.17-19, NH325, Jalore - 343001, RJ, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/aress_software.webp",
    "headquarters": "Jalore, Rajasthan",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/aress-software",
    "website": "https://www.aress.com/"
  },
  {
    "id": "87a0045d",
    "name": "IncNut Digital",
    "lat": 19.0128029,
    "lng": 72.8277261,
    "city": "Mumbai",
    "state": "Maharashtra",
    "description": "Located at Reliance Digital, Appasaheb Marathe Marg, Prabhadevi, Mumbai - 400025, MH, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/incnut_digital.webp",
    "headquarters": "Mumbai, Maharashtra",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/stylecraze-beauty-care-pvt-ltd",
    "website": "https://www.incnut.com/"
  },
  {
    "id": "d7c51664",
    "name": "Nuvento Inc",
    "lat": 22.31028,
    "lng": 73.16672,
    "city": "Vadodara",
    "state": "Gujarat",
    "description": "Located at Webmyne INC, Vadodara, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/nuvento_inc.webp",
    "headquarters": "Vadodara, Gujarat",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/nuvento",
    "website": "https://nuvento.com/"
  },
  {
    "id": "73213cfc",
    "name": "WebMobril Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/webmobril_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://www.linkedin.com/company/webmobrilinc",
    "website": "https://www.webmobril.com/"
  },
  {
    "id": "721e6445",
    "name": "Symphony SummitAI",
    "lat": 18.5476685,
    "lng": 73.790415,
    "city": "Pune",
    "state": "Maharashtra",
    "description": "Located at Symphony Club, Baner-Pashan Link Road, Pashan, Pune - 411001, MH, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/symphony_summitai.webp",
    "headquarters": "Pune, Maharashtra",
    "teamSize": "50-200",
    "linkedin": "https://www.linkedin.com/company/symphonyai",
    "website": "https://www.symphonyai.com/"
  },
  {
    "id": "5e7bbe44",
    "name": "TestVagrant Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/testvagrant_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/testvagrant-technologies",
    "website": "https://testvagrant.com/"
  },
  {
    "id": "74bf7977",
    "name": "Acropolis Infotech",
    "lat": 22.514875,
    "lng": 88.393119,
    "city": "Kolkata",
    "state": "West Bengal",
    "description": "Located at Acropolis, 1858, Rajdanga Main Road, Ward 107, Kolkata - 700107, WB, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/acropolis_infotech.webp",
    "headquarters": "Kolkata, West Bengal",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/acropolis-infotech",
    "website": "https://www.acropolisinfotech.com/"
  },
  {
    "id": "0690333b",
    "name": "Plivo",
    "lat": 12.9681838,
    "lng": 77.6509743,
    "city": "Bengaluru",
    "state": "Karnataka",
    "description": "Located at Plivo Communications, 3rd Floor, Jeevan Bhima Nagar 10th Main Road, Jagadish Nagar, Bengaluru - 560075, KA, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/plivo.webp",
    "headquarters": "Bengaluru, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/plivo-inc",
    "website": "https://www.plivo.com/"
  },
  {
    "id": "dcee0495",
    "name": "Vinculum Group",
    "lat": 16.417351,
    "lng": 81.779701,
    "city": "Madhya Group",
    "state": "Andhra Pradesh",
    "description": "Located at Madhya Group, East Godavari, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/vinculum_group.webp",
    "headquarters": "Madhya Group, Andhra Pradesh",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/vinculumgroup",
    "website": "https://www.vinculumgroup.com/"
  },
  {
    "id": "a3ddc2f7",
    "name": "Mindteck India",
    "lat": 28.193235,
    "lng": 94.154038,
    "city": "Unknown City",
    "state": "Unknown State",
    "description": "Located at Arunachal Pradesh, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/mindteck_india.webp",
    "headquarters": "India",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/mindteck",
    "website": "https://www.mindteck.com/"
  },
  {
    "id": "466caed8",
    "name": "Kaizen Technologies",
    "lat": 19.078437,
    "lng": 72.854999,
    "city": "Mumbai",
    "state": "Maharashtra",
    "description": "Located at Kaizen Quro, Kolekalyan, Mumbai - 402308, MH, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/kaizen_technologies.webp",
    "headquarters": "Mumbai, Maharashtra",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/kaizen-technologies",
    "website": "https://www.kaizentek.com/"
  },
  {
    "id": "6d6ba85f",
    "name": "Andor Tech",
    "lat": 25.024151,
    "lng": 72.8669,
    "city": "Andor",
    "state": "Rajasthan",
    "description": "Located at Andor, Sirohi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/andor_tech.webp",
    "headquarters": "Andor, Rajasthan",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/andor-tech",
    "website": "https://www.andortech.com/"
  },
  {
    "id": "37b8c5b6",
    "name": "Servosys Solutions",
    "lat": 12.98049,
    "lng": 77.60469,
    "city": "Bangalore",
    "state": "Karnataka",
    "description": "Located at Mobipro Solutions, Bangalore, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/servosys_solutions.webp",
    "headquarters": "Bangalore, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/servosys-solutions",
    "website": "https://www.servosys.com/"
  },
  {
    "id": "b9beb62c",
    "name": "Zuper",
    "lat": 23.2457454,
    "lng": 77.2603253,
    "city": "Bhopal",
    "state": "Madhya Pradesh",
    "description": "Located at Empire By Zuper, Khetlakheri, Bhopal - 462066, MP, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/zuper.webp",
    "headquarters": "Bhopal, Madhya Pradesh",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/zuperco",
    "website": "https://www.zuper.co/"
  },
  {
    "id": "395eee0d",
    "name": "AFour Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/afour_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/afour-technologies",
    "website": "https://afourtech.com/"
  },
  {
    "id": "31ebb222",
    "name": "Xento Systems",
    "lat": 22.304211,
    "lng": 73.165385,
    "city": "Vadodara",
    "state": "Gujarat",
    "description": "Located at Omikron Systems, 205 & 206, SAKAR Complex, Old Padra Road, Vadodara - 390007, GJ, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/xento_systems.webp",
    "headquarters": "Vadodara, Gujarat",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/xento-systems-pvt--ltd",
    "website": "https://www.entrata.in/life-at-xento/"
  },
  {
    "id": "ddf13943",
    "name": "Arya.ag",
    "lat": 22.6441254,
    "lng": 76.3330059,
    "city": "Arya",
    "state": "Madhya Pradesh",
    "description": "Located at Arya, Bagli Tahsil, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/arya_ag.webp",
    "headquarters": "Arya, Madhya Pradesh",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/aryadotag",
    "website": "https://www.arya.ag/"
  },
  {
    "id": "7c249752",
    "name": "AIEnterprise Inc",
    "lat": 22.31028,
    "lng": 73.16672,
    "city": "Vadodara",
    "state": "Gujarat",
    "description": "Located at Webmyne INC, Vadodara, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/aienterprise_inc.webp",
    "headquarters": "Vadodara, Gujarat",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/aienterprise",
    "website": "https://www.aienterprise.com/"
  },
  {
    "id": "9e6ff39d",
    "name": "Onama Consultants",
    "lat": 28.596896,
    "lng": 77.132851,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at Consultants, Delhi - 110046, DL, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/onama_consultants.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/onama-consultants-pvt-ltd",
    "website": "https://www.onamagroup.com/"
  },
  {
    "id": "e6d7f403",
    "name": "Creative Capsule",
    "lat": 21.0982175,
    "lng": 79.0671092,
    "city": "Nagpur",
    "state": "Maharashtra",
    "description": "Located at Capsule Cafe, 5, Wardha Road, Nagpur - 440025, MH, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/creative_capsule.webp",
    "headquarters": "Nagpur, Maharashtra",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/creativecapsule",
    "website": "https://www.creativecapsule.com/"
  },
  {
    "id": "1e23ba8b",
    "name": "Orbit Techsol",
    "lat": 24.8267851,
    "lng": 92.8013167,
    "city": "Silchar",
    "state": "Assam",
    "description": "Located at Orbit Hotel, Ukil Patty, Tarapur, Silchar - 788001, AS, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/orbit_techsol.webp",
    "headquarters": "Silchar, Assam",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/orbit-techsol-india-pvt",
    "website": "https://www.orbitindia.net/"
  },
  {
    "id": "d708db36",
    "name": "Kriya IT",
    "lat": 12.923654,
    "lng": 77.499698,
    "city": "Bangalore",
    "state": "Karnataka",
    "description": "Located at Kriya kalpa, Hemmigepura, Bangalore - 560059, KA, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/kriya_it.webp",
    "headquarters": "Bangalore, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://qa.linkedin.com/company/kriya-nextwealth-private-limited",
    "website": "https://kriyatec.com/"
  },
  {
    "id": "e3f54ee2",
    "name": "Verifaya Corporation",
    "lat": 17.43727,
    "lng": 78.38536,
    "city": "Hyderabad",
    "state": "Andhra Pradesh",
    "description": "Located at United Technologies Corporation, Serilingampally, Hyderabad, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/verifaya_corporation.webp",
    "headquarters": "Hyderabad, Andhra Pradesh",
    "teamSize": "50-200",
    "linkedin": "https://www.linkedin.com/company/verifaya-corporation#:~:text=Verifaya%20is%20a%20privately%20held%20company%20that,Feet%20Ring%20Road%2C%20Bangalore%2C%20Karnataka%20560085%2C%20IN",
    "website": "https://verifaya.com/"
  },
  {
    "id": "b1bf4ab7",
    "name": "Neova Solutions",
    "lat": 12.98049,
    "lng": 77.60469,
    "city": "Bangalore",
    "state": "Karnataka",
    "description": "Located at Mobipro Solutions, Bangalore, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/neova_solutions.webp",
    "headquarters": "Bangalore, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/neova-solutions",
    "website": "https://www.neovasolutions.com/"
  },
  {
    "id": "d9944b54",
    "name": "Shell Transource",
    "lat": 12.862777,
    "lng": 77.531358,
    "city": "Bangalore",
    "state": "Karnataka",
    "description": "Located at Shell, Kanakapura Road, Hemmigepura, Bangalore - 560062, KA, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/shell_transource.webp",
    "headquarters": "Bangalore, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/shell-transource-ltd.#:~:text=We%20are%20a%20consulting%20and%20system's%20integration,Network%20Solutions%2C%20IT%20Infrastructure%20Solutions%2C%20Network%20Security.",
    "website": "https://www.shell.in/about-us/what-we-do/powering-progress-in-india.html"
  },
  {
    "id": "01431426",
    "name": "IKF Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/ikf_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "website": "https://www.valueresearchonline.com/stocks/42489/ikf-technologies-ltd/#:~:text=and%20telecommunication%20services.-,In%20addition%2C%20it%20is%20involved%20in%20the%20production%20of%20biofuel,is%20based%20in%20Kolkata%2C%20India."
  },
  {
    "id": "e79cd128",
    "name": "Vaisesika Consulting",
    "lat": 28.4935315,
    "lng": 77.088317,
    "city": "Gurgaon",
    "state": "Haryana",
    "description": "Located at Boston Consulting Group, DLF Tower 10th Road, Sector 25A, Gurgaon - 122010, HR, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/vaisesika_consulting.webp",
    "headquarters": "Gurgaon, Haryana",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/vaisesika",
    "website": "https://vaisesikaconsulting.com/"
  },
  {
    "id": "7b85969e",
    "name": "5C Network",
    "lat": 13.0349626,
    "lng": 77.5115963,
    "city": "Bengaluru",
    "state": "Karnataka",
    "description": "Located at ISRO Telemetry, Tracking and Command Network, Nelagadaranahalli, Bengaluru - 560058, KA, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/5c_network.webp",
    "headquarters": "Bengaluru, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/5c-network",
    "website": "https://www.5cnetwork.com/"
  },
  {
    "id": "69a4c261",
    "name": "Baazi Games",
    "lat": 12.948796,
    "lng": 77.620116,
    "city": "Bangalore",
    "state": "Karnataka",
    "description": "Located at National Games, Ejipura, Bangalore, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/baazi_games.webp",
    "headquarters": "Bangalore, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/baazi-games",
    "website": "https://www.baazigames.com/"
  },
  {
    "id": "bb0ec3be",
    "name": "RT Network Solutions",
    "lat": 25.587397,
    "lng": 94.379125,
    "city": "Unknown City",
    "state": "Nagaland",
    "description": "Located at Road to North East Network Office, - 797107, NL, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/rt_network_solutions.webp",
    "headquarters": "India",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/rtns-digital-marketing",
    "website": "https://rtns.in/"
  },
  {
    "id": "bb42cffb",
    "name": "CatalystOne Solutions",
    "lat": 12.98049,
    "lng": 77.60469,
    "city": "Bangalore",
    "state": "Karnataka",
    "description": "Located at Mobipro Solutions, Bangalore, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/catalystone_solutions.webp",
    "headquarters": "Bangalore, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://www.linkedin.com/company/catalystone-solutions-as",
    "website": "https://www.catalystone.com/"
  },
  {
    "id": "adf94f5c",
    "name": "Rigved Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/rigved_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/rigved-technologies-pvt-ltd",
    "website": "https://rigvedtech.com/"
  },
  {
    "id": "734f7868",
    "name": "Flo Group",
    "lat": 18.9135262,
    "lng": 73.1954669,
    "city": "Mohope",
    "state": "Maharashtra",
    "description": "Located at Feliz Flo Fitness Aerial Yoga, Dance, Zumba, NH48, Mohope - 410222, MH, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/flo_group.webp",
    "headquarters": "Mohope, Maharashtra",
    "teamSize": "50-200",
    "website": "https://newsroom.accenture.com/news/2024/accenture-acquires-flo-group-to-expand-supply-chain-logistics-capabilities-in-europe"
  },
  {
    "id": "4cf02a41",
    "name": "Frontier Business systems",
    "lat": 28.374548,
    "lng": 76.957727,
    "city": "Gurugram",
    "state": "Haryana",
    "description": "Located at Frontier, Gurugram - 122004, HR, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/frontier_business_systems.webp",
    "headquarters": "Gurugram, Haryana",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/frontier-business-systems-pvt-ltd",
    "website": "https://frontier.in/"
  },
  {
    "id": "39a93cde",
    "name": "Verisys Corporation",
    "lat": 17.43727,
    "lng": 78.38536,
    "city": "Hyderabad",
    "state": "Andhra Pradesh",
    "description": "Located at United Technologies Corporation, Serilingampally, Hyderabad, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/verisys_corporation.webp",
    "headquarters": "Hyderabad, Andhra Pradesh",
    "teamSize": "50-200",
    "linkedin": "https://www.linkedin.com/company/verisys-corporation",
    "website": "https://verisys.com/blog/expanding-operations-to-india/"
  },
  {
    "id": "e8d1c523",
    "name": "eProductivity Software",
    "lat": 25.34526,
    "lng": 72.6269381,
    "city": "Jalore",
    "state": "Rajasthan",
    "description": "Located at Software Technology, Shop No.17-19, NH325, Jalore - 343001, RJ, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/eproductivity_software.webp",
    "headquarters": "Jalore, Rajasthan",
    "teamSize": "50-200",
    "linkedin": "https://www.linkedin.com/company/eproductivitysoftware",
    "website": "https://epssw.com/"
  },
  {
    "id": "cd26c44d",
    "name": "Toshiba Software",
    "lat": 12.9250087,
    "lng": 77.6315006,
    "city": "Bengaluru",
    "state": "Karnataka",
    "description": "Located at Toshiba Software India Pvt Ltd, 7th C Main Road, Kormangala East, Bengaluru - 560034, KA, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "",
    "headquarters": "Bengaluru, Karnataka",
    "teamSize": "50-200"
  },
  {
    "id": "9a28139f",
    "name": "Mantra Labs",
    "lat": 12.9846898,
    "lng": 77.726976,
    "city": "Bengaluru",
    "state": "Karnataka",
    "description": "Located at Mantra Labs, GSP lab, Hoodi, Bengaluru - 560066, KA, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/mantra_labs.webp",
    "headquarters": "Bengaluru, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/mantra-labs",
    "website": "https://www.mantralabsglobal.com/"
  },
  {
    "id": "44eaf775",
    "name": "Daffodil Software",
    "lat": 25.34526,
    "lng": 72.6269381,
    "city": "Jalore",
    "state": "Rajasthan",
    "description": "Located at Software Technology, Shop No.17-19, NH325, Jalore - 343001, RJ, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/daffodil_software.webp",
    "headquarters": "Jalore, Rajasthan",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/daffodil-software-ltd-",
    "website": "https://www.daffodilsw.com/"
  },
  {
    "id": "bd8f3fa9",
    "name": "Congruent Info",
    "lat": 11.1272103,
    "lng": 77.0392922,
    "city": "Kovilpalayam",
    "state": "Tamil Nadu",
    "description": "Located at Info Institute of Engineering, Karuvalur - Kovilpalayam Road, Kovilpalayam - 641107, TN, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "",
    "headquarters": "Kovilpalayam, Tamil Nadu",
    "teamSize": "50-200"
  },
  {
    "id": "3a3b001c",
    "name": "Paktolus Solutions",
    "lat": 12.98049,
    "lng": 77.60469,
    "city": "Bangalore",
    "state": "Karnataka",
    "description": "Located at Mobipro Solutions, Bangalore, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/paktolus_solutions.webp",
    "headquarters": "Bangalore, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://www.linkedin.com/company/paktolus",
    "website": "https://www.paktolus.com/"
  },
  {
    "id": "7a6c3acb",
    "name": "Chimera Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/chimera_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/chimera-technologies-private-limited",
    "website": "https://www.chimeratechnologies.com/"
  },
  {
    "id": "13e03a74",
    "name": "Flock",
    "lat": 17.6780863,
    "lng": 83.2151699,
    "city": "Old Gajuwaka",
    "state": "Andhra Pradesh",
    "description": "Located at Little Flock Churcg, BC Road, Azeemabad, Old Gajuwaka - 530026, AP, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/flock.webp",
    "headquarters": "Old Gajuwaka, Andhra Pradesh",
    "teamSize": "50-200",
    "website": "https://www.flock.com/"
  },
  {
    "id": "9908072c",
    "name": "KritiKal Solutions",
    "lat": 12.98049,
    "lng": 77.60469,
    "city": "Bangalore",
    "state": "Karnataka",
    "description": "Located at Mobipro Solutions, Bangalore, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/kritikal_solutions.webp",
    "headquarters": "Bangalore, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/kritikal",
    "website": "https://kritikalsolutions.com/"
  },
  {
    "id": "44887cc2",
    "name": "ONE BCG",
    "lat": 19.0023567,
    "lng": 72.8264064,
    "city": "Mumbai",
    "state": "Maharashtra",
    "description": "Located at World One, Shankar Rao Naram Path (Gowalia Chawl Lane), Lower Parel, Mumbai - 400013, MH, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/one_bcg.webp",
    "headquarters": "Mumbai, Maharashtra",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/one-bcg",
    "website": "https://www.onebcg.com/"
  },
  {
    "id": "11d3b521",
    "name": "SpanIdea Systems",
    "lat": 22.304211,
    "lng": 73.165385,
    "city": "Vadodara",
    "state": "Gujarat",
    "description": "Located at Omikron Systems, 205 & 206, SAKAR Complex, Old Padra Road, Vadodara - 390007, GJ, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/spanidea_systems.webp",
    "headquarters": "Vadodara, Gujarat",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/spanidea-systems",
    "website": "https://spanidea.com/"
  },
  {
    "id": "8e01882c",
    "name": "Impact Analytics",
    "lat": 12.913572,
    "lng": 77.609936,
    "city": "Bangalore",
    "state": "Karnataka",
    "description": "Located at Impact Physiotherapy, BTM Layout, Bangalore - 560076, KA, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/impact_analytics.webp",
    "headquarters": "Bangalore, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/impactanalytics",
    "website": "https://www.impactanalytics.ai/"
  },
  {
    "id": "bcb5e2bc",
    "name": "Fidelis Corporate Solutions",
    "lat": 26.889612,
    "lng": 80.960083,
    "city": "Lucknow",
    "state": "Uttar Pradesh",
    "description": "Located at St. Fidelis, Lucknow - 226030, UP, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/fidelis_corporate_solutions.webp",
    "headquarters": "Lucknow, Uttar Pradesh",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/fidelis-technology-services",
    "website": "https://fidelistech.com/"
  },
  {
    "id": "74b587dc",
    "name": "Softcell Technologies Global",
    "lat": 23.1535101,
    "lng": 79.9133595,
    "city": "Jabalpur",
    "state": "Madhya Pradesh",
    "description": "Located at Sysnet Global Technologies, NH45, Jabalpur, Jabalpur - 482003, MP, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/softcell_technologies_global.webp",
    "headquarters": "Jabalpur, Madhya Pradesh",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/softcell-technologies-global",
    "website": "https://www.softcell.com/"
  },
  {
    "id": "bdb84601",
    "name": "Digital Refresh Networks",
    "lat": 28.412447,
    "lng": 77.0496403,
    "city": "Gurgaon",
    "state": "Haryana",
    "description": "Located at Tikona Digital Networks, Sec 49, Sai Dham Road, Sector 49, Gurgaon - 201301, HR, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/digital_refresh_networks.webp",
    "headquarters": "Gurgaon, Haryana",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/digitalf5",
    "website": "https://digitalf5.com/"
  },
  {
    "id": "1938be65",
    "name": "Resilience InfoTech",
    "lat": 26.82399,
    "lng": 75.54525,
    "city": "Vatika Infotech City",
    "state": "Rajasthan",
    "description": "Located at Vatika Infotech City, Jaipur, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/resilience_infotech.webp",
    "headquarters": "Vatika Infotech City, Rajasthan",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/resilience-infotech",
    "website": "https://resilienceit.com/"
  },
  {
    "id": "6d697328",
    "name": "Xangars Solutions",
    "lat": 12.98049,
    "lng": 77.60469,
    "city": "Bangalore",
    "state": "Karnataka",
    "description": "Located at Mobipro Solutions, Bangalore, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/xangars_solutions.webp",
    "headquarters": "Bangalore, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/xangam",
    "website": "https://xangarsinfra.com/"
  },
  {
    "id": "f3f97a17",
    "name": "Q3 Technologies",
    "lat": 12.3634413,
    "lng": 76.5961002,
    "city": "Mysuru",
    "state": "Karnataka",
    "description": "Located at Infosys Technologies Limited, Mysuru - 570001, KA, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/q3_technologies.webp",
    "headquarters": "Mysuru, Karnataka",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/q3-technologies",
    "website": "https://www.q3tech.com/"
  },
  {
    "id": "21c48853",
    "name": "Medline India",
    "lat": 28.193235,
    "lng": 94.154038,
    "city": "Unknown City",
    "state": "Unknown State",
    "description": "Located at Arunachal Pradesh, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/medline_india.webp",
    "headquarters": "India",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/medline-india",
    "website": "https://in.medlineasia.com/"
  },
  {
    "id": "986d8103",
    "name": "EXILANT Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/exilant_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/exilant",
    "website": "https://pitchbook.com/profiles/company/131130-55"
  },
  {
    "id": "d64d3052",
    "name": "Softobiz Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/softobiz_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/softobiz",
    "website": "https://softobiz.com/"
  },
  {
    "id": "0b960ede",
    "name": "CoffeeBeans Consulting",
    "lat": 28.4935315,
    "lng": 77.088317,
    "city": "Gurgaon",
    "state": "Haryana",
    "description": "Located at Boston Consulting Group, DLF Tower 10th Road, Sector 25A, Gurgaon - 122010, HR, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/coffeebeans_consulting.webp",
    "headquarters": "Gurgaon, Haryana",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/coffeebeans-brewinginnovations",
    "website": "https://coffeebeans.io/"
  },
  {
    "id": "00f65352",
    "name": "Goods And Services Tax Network",
    "lat": 28.5504366,
    "lng": 77.1220992,
    "city": "New Delhi",
    "state": "Delhi",
    "description": "Located at Goods and Services Tax Network, Manhattan Drive, Vasant Vihar Tehsil, New Delhi - 110037, DL, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/goods_and_services_tax_network.webp",
    "headquarters": "New Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/gstn-official",
    "website": "https://cleartax.in/s/what-is-gstn#:~:text=The%20Goods%20and%20Services%20Tax%20Network%20(GSTN),the%20GST%20portal%2C%20which%20is%20the%20mother"
  },
  {
    "id": "d92bd80e",
    "name": "JMR Infotech",
    "lat": 26.82399,
    "lng": 75.54525,
    "city": "Vatika Infotech City",
    "state": "Rajasthan",
    "description": "Located at Vatika Infotech City, Jaipur, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/jmr_infotech.webp",
    "headquarters": "Vatika Infotech City, Rajasthan",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/jmr-infotech",
    "website": "https://jmrinfotech.com/"
  },
  {
    "id": "f58ee2fe",
    "name": "Ind Innovation",
    "lat": 13.0145816,
    "lng": 80.2018161,
    "city": "Chennai",
    "state": "Tamil Nadu",
    "description": "Located at Beez Innovation Labs Pvt. Ltd., HQ10 Primus, Office no. 205, 2nd floor, SIDCO Industrial Estate South Phase Road, Zone 13 Adyar, Chennai - 600032, TN, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/ind_innovation.webp",
    "headquarters": "Chennai, Tamil Nadu",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/ind-innovation-private-limited",
    "website": "https://www.indinnovation.com/"
  },
  {
    "id": "3735a023",
    "name": "Skilrock Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/skilrock_technologies.webp",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/skilrock",
    "website": "https://www.skilrock.com/"
  },
  {
    "id": "508874ea",
    "name": "Sugal & Damani",
    "lat": 21.0079209,
    "lng": 75.5703472,
    "city": "Jalgaon",
    "state": "Maharashtra",
    "description": "Located at Damani Maternity and Surgical Hospital,Jalgaon, SH186, Jalgaon - 425001, MH, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/sugal_damani.webp",
    "headquarters": "Jalgaon, Maharashtra",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/sugal-&-damani-enterprises-pvt.-ltd.",
    "website": "https://www.sugaldamani.com/"
  },
  {
    "id": "45caa849",
    "name": "Alpha Net",
    "lat": 28.4710345,
    "lng": 77.5127373,
    "city": "Greater Noida",
    "state": "Uttar Pradesh",
    "description": "Located at Alpha 1, Pari Chowk, Sector 20, Greater Noida - 201310, UP, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "/images/alpha_net.webp",
    "headquarters": "Greater Noida, Uttar Pradesh",
    "teamSize": "50-200",
    "linkedin": "https://in.linkedin.com/company/alpha-net",
    "website": "https://www.anetcorp.com/"
  },
  {
    "id": "3332f250",
    "name": "Easy Eat AI",
    "lat": 26.912871,
    "lng": 79.777133,
    "city": "Kanpura",
    "state": "Uttar Pradesh",
    "description": "Located at Eat Khari, Kanpura, Kannauj, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "",
    "headquarters": "Kanpura, Uttar Pradesh",
    "teamSize": "50-200"
  },
  {
    "id": "4b7d622f",
    "name": "Kairos Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200"
  },
  {
    "id": "e171c484",
    "name": "MSRcosmos LLC",
    "lat": 20.349079,
    "lng": 85.807721,
    "city": "Bhubaneswar Municipal Corporation",
    "state": "Odisha",
    "description": "Located at AuroIN LLC, TCS Footpath, Bhubaneswar Municipal Corporation - 751024, OR, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "",
    "headquarters": "Bhubaneswar Municipal Corporation, Odisha",
    "teamSize": "50-200"
  },
  {
    "id": "400a17cc",
    "name": "Evoke Technologies",
    "lat": 28.65003,
    "lng": 77.23144,
    "city": "Delhi",
    "state": "Delhi",
    "description": "Located at PointerSoft Technologies Pvt Lmt, Jama Masjid, Delhi, South West Delhi, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "",
    "headquarters": "Delhi, Delhi",
    "teamSize": "50-200"
  },
  {
    "id": "30ca20db",
    "name": "CEPTES Software",
    "lat": 25.34526,
    "lng": 72.6269381,
    "city": "Jalore",
    "state": "Rajasthan",
    "description": "Located at Software Technology, Shop No.17-19, NH325, Jalore - 343001, RJ, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "",
    "headquarters": "Jalore, Rajasthan",
    "teamSize": "50-200"
  },
  {
    "id": "04712b83",
    "name": "RPS Consulting",
    "lat": 25.366264,
    "lng": 85.540878,
    "city": "Harnaut",
    "state": "Bihar",
    "description": "Located at R.P.S College, Harnaut - 803110, BR, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "",
    "headquarters": "Harnaut, Bihar",
    "teamSize": "50-200"
  },
  {
    "id": "975637fa",
    "name": "Finesse Global",
    "lat": 27.501023,
    "lng": 82.794713,
    "city": "Barhani Bazar",
    "state": "Uttar Pradesh",
    "description": "Located at Global, Barhani Bazar, Siddharth Nagar, India",
    "category": [
      "Technology",
      "Services"
    ],
    "logoUrl": "",
    "headquarters": "Barhani Bazar, Uttar Pradesh",
    "teamSize": "50-200"
  }
];
