/**
 * Seed script: writes 15 verified Indian universities to Firestore.
 * Run once: `node backend/scripts/seedUniversities.js`
 */

const db = require("../config/firebase");

const universities = [
  {
    id: "iit_madras",
    name: "IIT Madras",
    state: "Tamil Nadu",
    city: "Chennai",
    fees_category: "5-15L",
    programs: ["Computer Science", "Mechanical", "AI/ML", "Electrical"],
    ranking: 1,
    type: "Government",
    tags: ["Engineering", "Research", "Tier-1"],
    reason_template:
      "India's top-ranked IIT — strong placements in core CS and research opportunities under faculty across AI/ML.",
  },
  {
    id: "iit_bombay",
    name: "IIT Bombay",
    state: "Maharashtra",
    city: "Mumbai",
    fees_category: "5-15L",
    programs: ["Computer Science", "Mechanical", "Electrical", "AI/ML"],
    ranking: 2,
    type: "Government",
    tags: ["Engineering", "Research", "Tier-1"],
    reason_template:
      "Top IIT for CS placements and entrepreneurship — strong startup ecosystem on campus.",
  },
  {
    id: "iit_delhi",
    name: "IIT Delhi",
    state: "Delhi",
    city: "New Delhi",
    fees_category: "5-15L",
    programs: ["Computer Science", "Mechanical", "Electrical", "AI/ML"],
    ranking: 3,
    type: "Government",
    tags: ["Engineering", "Research", "Tier-1"],
    reason_template:
      "Tier-1 IIT with consistently strong CS placements and active research labs.",
  },
  {
    id: "bits_pilani",
    name: "BITS Pilani",
    state: "Rajasthan",
    city: "Pilani",
    fees_category: "15-30L",
    programs: ["Computer Science", "Electrical", "Chemical", "AI/ML"],
    ranking: 4,
    type: "Private",
    tags: ["Engineering", "Tier-1", "Industry-Focused"],
    reason_template:
      "Top private engineering school with the Practice School program — two industry internships built into the curriculum.",
  },
  {
    id: "nit_trichy",
    name: "NIT Trichy",
    state: "Tamil Nadu",
    city: "Tiruchirappalli",
    fees_category: "<5L",
    programs: ["Computer Science", "Mechanical", "Electrical", "Civil"],
    ranking: 5,
    type: "Government",
    tags: ["Engineering", "Tier-1", "Affordable"],
    reason_template:
      "Top NIT with strong CS placements and very low fees — exceptional value for the academic quality.",
  },
  {
    id: "vit_vellore",
    name: "VIT Vellore",
    state: "Tamil Nadu",
    city: "Vellore",
    fees_category: "5-15L",
    programs: ["Computer Science", "Electrical", "Biotech", "AI/ML"],
    ranking: 12,
    type: "Private",
    tags: ["Engineering", "Tier-2", "Strong-Placements"],
    reason_template:
      "High placement count by volume and a flexible credit-based curriculum — good fit if you want choice in electives.",
  },
  {
    id: "srm_chennai",
    name: "SRM Chennai",
    state: "Tamil Nadu",
    city: "Chennai",
    fees_category: "5-15L",
    programs: ["Computer Science", "Mechanical", "Electrical", "AI/ML"],
    ranking: 20,
    type: "Private",
    tags: ["Engineering", "Tier-2"],
    reason_template:
      "Large private university near Chennai with broad program options and active industry partnerships.",
  },
  {
    id: "iiit_hyderabad",
    name: "IIIT Hyderabad",
    state: "Telangana",
    city: "Hyderabad",
    fees_category: "5-15L",
    programs: ["Computer Science", "AI/ML", "Electrical"],
    ranking: 6,
    type: "Government",
    tags: ["Engineering", "Research", "Tier-1", "CS-Focused"],
    reason_template:
      "Research-heavy CS school — top choice if you want exposure to publishing papers and grad-school prep.",
  },
  {
    id: "manipal_mit",
    name: "Manipal Institute of Technology",
    state: "Karnataka",
    city: "Manipal",
    fees_category: "15-30L",
    programs: ["Computer Science", "Mechanical", "Biotech", "AI/ML"],
    ranking: 25,
    type: "Private",
    tags: ["Engineering", "Tier-2", "International-Exposure"],
    reason_template:
      "Strong international exchange programs and an established alumni network across global tech.",
  },
  {
    id: "psg_coimbatore",
    name: "PSG Tech Coimbatore",
    state: "Tamil Nadu",
    city: "Coimbatore",
    fees_category: "<5L",
    programs: ["Mechanical", "Electrical", "Computer Science", "Civil"],
    ranking: 30,
    type: "Government-Aided",
    tags: ["Engineering", "Tier-2", "Affordable"],
    reason_template:
      "Highly affordable with consistent industry placements in core engineering — strong in mechanical and electrical.",
  },
  {
    id: "anna_ceg",
    name: "Anna University CEG",
    state: "Tamil Nadu",
    city: "Chennai",
    fees_category: "<5L",
    programs: ["Computer Science", "Mechanical", "Electrical", "Civil"],
    ranking: 18,
    type: "Government",
    tags: ["Engineering", "Tier-1", "Affordable"],
    reason_template:
      "Government engineering school in Chennai — very low fees with a strong CS placements record.",
  },
  {
    id: "dtu_delhi",
    name: "Delhi Technological University",
    state: "Delhi",
    city: "New Delhi",
    fees_category: "<5L",
    programs: ["Computer Science", "Mechanical", "Electrical", "AI/ML"],
    ranking: 15,
    type: "Government",
    tags: ["Engineering", "Tier-1", "Affordable"],
    reason_template:
      "Strong CS placements, low fees, and tight industry ties in Delhi NCR.",
  },
  {
    id: "amity_noida",
    name: "Amity University Noida",
    state: "Uttar Pradesh",
    city: "Noida",
    fees_category: "15-30L",
    programs: ["Computer Science", "Business", "Law", "AI/ML"],
    ranking: 45,
    type: "Private",
    tags: ["Multi-Discipline", "Tier-2"],
    reason_template:
      "Multi-discipline campus — good fit if you want flexibility between business, law, and tech tracks.",
  },
  {
    id: "christ_bangalore",
    name: "Christ University Bangalore",
    state: "Karnataka",
    city: "Bangalore",
    fees_category: "5-15L",
    programs: ["Computer Science", "Commerce", "Arts", "Business"],
    ranking: 35,
    type: "Private",
    tags: ["Multi-Discipline", "Tier-2", "Liberal-Arts"],
    reason_template:
      "Strong commerce and liberal arts programs in Bangalore — good blend of academics and city exposure.",
  },
  {
    id: "symbiosis_pune",
    name: "Symbiosis Pune",
    state: "Maharashtra",
    city: "Pune",
    fees_category: "15-30L",
    programs: ["Business", "Computer Science", "Law", "Media"],
    ranking: 22,
    type: "Private",
    tags: ["Business", "Tier-1", "Multi-Discipline"],
    reason_template:
      "Top private school for business and management — strong recruiter relationships across consulting and finance.",
  },
];

async function seed() {
  console.log(`Seeding ${universities.length} universities to Firestore...`);

  const batch = db.batch();
  for (const uni of universities) {
    const { id, ...data } = uni;
    const ref = db.collection("universities").doc(id);
    batch.set(ref, data);
  }

  await batch.commit();
  console.log("✅ Seed complete.");
  process.exit(0);
}

seed().catch((err) => {
  console.error("❌ Seed failed:", err);
  process.exit(1);
});
