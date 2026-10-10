import type { BlogArticle, BlogCategory } from "@/types/blog";

export const blogCategories: BlogCategory[] = ["Quran", "Islamic Knowledge", "Family", "Youth", "Spirituality"];

// Editorial reflections based on the institutional information supplied by Al Zikra.
export const articles: BlogArticle[] = [
  {
    id: "lifelong-connection-quran", title: "A lifelong connection with the Quran", category: "Quran", popular: true,
    description: "Quran learning grows through reading, understanding, practice and character—not a single milestone.",
    image: { src: "/assets/page-imagery/blog-connection.webp", alt: "Illustrative family Quran learning scene" },
    body: [
      "A child's first lessons with the Quran can become the beginning of a lifelong relationship. Reading a page correctly matters, but so does returning to it with care, curiosity and respect. Progress is built through many ordinary days of patient effort.",
      "At Al Zikra, the learning journey connects Quran reading, memorisation, revision and Tajweed with Islamic manners. These parts support one another. A student who learns to listen carefully, accept correction and revise consistently is developing habits that reach beyond the classroom.",
      "Families have a part in that journey. A calm space for practice, encouragement after a difficult lesson and interest in what the child learned can make daily study more sustainable. Because Al Zikra is non-residential, home and centre can remain closely connected.",
      "The aim is larger than completing a course. We hope students continue to turn to the Quran for guidance, carry its words with respect and reflect its values in the way they live."
    ],
  },
  {
    id: "hifz-beginning", title: "Why completing Hifz is a beginning", category: "Quran", popular: true,
    description: "Memorisation is a remarkable milestone; revision, understanding and conduct carry it forward.",
    image: { src: "/assets/page-imagery/blog-hifz.webp", alt: "Illustrative Hifz learner with teacher" },
    body: [
      "Completing Hifz takes sustained effort from a student, teachers and family. It deserves to be valued. Yet a memorised text needs continued care. Regular revision helps a student retain what was learned and recite with confidence over time.",
      "Al Zikra's two-year Hifz pathway combines memorisation with revision, Tajweed and Makharij. Teachers supervise progress and help students correct mistakes. The routine gives learners a clear structure while recognising that students do not all move at the same pace.",
      "After Hifz, Al Zikra offers Tarjuma-e-Quran so students can begin engaging with the meaning of what they have memorised. This next step encourages reflection and creates room for a deeper connection with the Quran's message.",
      "The goal is to nurture young people whose learning can be seen in their manners, responsibility and respect for others. Hifz is an achievement, and it is also a foundation for continuing study and growth."
    ],
  },
  {
    id: "revision-daily-habit", title: "The quiet strength of daily revision", category: "Youth",
    description: "Small, consistent revision habits support confident recitation and lasting memorisation.",
    image: { src: "/assets/page-imagery/blog-revision.webp", alt: "Illustrative student revising Quran" },
    body: [
      "Revision can feel less exciting than learning a new passage, but it is one of the most valuable parts of Quran study. Returning to familiar verses gives students a chance to notice errors, strengthen recall and recite with greater steadiness.",
      "A manageable routine is easier to maintain than occasional long sessions. The amount a student revises should fit the plan set with their teacher. Consistency, honest feedback and patience are more helpful than rushing through pages just to reach a target.",
      "At the centre, teacher supervision and regular correction support that work. At home, parents can encourage the agreed routine and celebrate effort without making every session feel like a test. Students benefit when school and family reinforce the same habits.",
      "Revision also teaches a wider lesson: meaningful progress often comes from faithful attention to what we already know. A steady return to the Quran can remain valuable long after formal classes end."
    ],
  },
  {
    id: "tajweed-listening", title: "Tajweed begins with careful listening", category: "Quran",
    description: "Accurate pronunciation develops through listening, correction and patient practice.",
    image: { src: "/assets/page-imagery/blog-tajweed.webp", alt: "Illustrative Tajweed lesson" },
    body: [
      "Tajweed helps a learner recite the Quran carefully. Correct sounds and Makharij—the articulation points of letters—are learned through close attention, repeated practice and guidance from a teacher. Fluency grows more securely when accuracy is given time.",
      "A beginner may need to slow down, listen again and try a sound several times. Correction is a normal part of the process, not a sign of failure. A supportive learning environment helps students hear the difference and become comfortable asking questions.",
      "In Al Zikra's Nazira and Hifz pathways, Tajweed is connected to reading and recitation rather than treated as an isolated label. Students work towards clearer, more confident reading as their foundation strengthens.",
      "Families can help by making room for regular practice and by following the teacher's guidance. The aim is not speed or performance; it is a respectful and accurate approach to the words being recited."
    ],
  },
  {
    id: "nazira-foundation", title: "Nazira: a foundation for confident reading", category: "Islamic Knowledge",
    description: "A clear reading foundation supports pronunciation, fluency and future learning.",
    image: { src: "/assets/page-imagery/blog-nazira-male.webp", alt: "Illustrative boy reading Quran in a Nazira lesson" },
    body: [
      "Before a learner can read confidently, individual sounds and words need attention. Nazira provides space to practise Quran reading with guidance, so that accuracy and fluency develop together rather than through guesswork.",
      "Al Zikra's Nazira-e-Quran programme focuses on pronunciation, Tajweed and Makharij. Reading and writing development, Islamic manners and character formation form part of the wider learning experience. Students who show aptitude for Hifz can build on this foundation later.",
      "The supplied Nazira schedule is 3:00 PM to 5:00 PM. It is a non-residential pathway designed to sit alongside regular academic education. Parents remain involved through communication and Parent–Teacher Meetings.",
      "A strong foundation is valuable in its own right. Learning to read the Quran with care can give a child confidence for continued recitation, whether or not they later choose a memorisation pathway."
    ],
  },
  {
    id: "parents-partners", title: "Parents as partners in Quran learning", category: "Family", popular: true,
    description: "The connection between home and teacher can help children build steady learning habits.",
    image: { src: "/assets/page-imagery/blog-parents-male.webp", alt: "Illustrative father and grandfather supporting a boy’s Quran learning" },
    body: [
      "A child's learning is shaped by what happens both inside and outside the classroom. Teachers provide instruction, correction and a structured routine. Families can help make those lessons part of everyday life through encouragement and a supportive home environment.",
      "At Al Zikra, students return home after classes. This non-residential approach keeps parents close to their child's daily progress. Regular conversations with teachers and Parent–Teacher Meetings can help everyone understand strengths, difficulties and the next useful step.",
      "Support does not mean placing pressure on a child to move faster than they are ready. It can mean helping them keep a revision routine, arrive punctually, practise good manners and feel able to speak honestly when a lesson is difficult.",
      "A steady partnership makes learning more personal. When a child sees that family and teachers value both Quran study and character, the journey becomes something they can carry beyond the centre."
    ],
  },
  {
    id: "adab-character", title: "What character adds to Quran education", category: "Spirituality",
    description: "Respect, honesty and responsibility give learning a visible place in daily life.",
    image: { src: "/assets/page-imagery/blog-character.webp", alt: "Illustrative student greeting a teacher respectfully" },
    body: [
      "Quran education is more than learning to recite. The way a student speaks, treats family members, responds to teachers and fulfils responsibilities is part of the educational journey too. Knowledge is strengthened when it influences conduct.",
      "Al Zikra's approach places Adab and Akhlaq alongside reading, memorisation and Islamic studies. Students are encouraged to practise respect, honesty, punctuality, cleanliness and care for others. These habits develop through repeated examples and patient reminders.",
      "Character does not appear all at once. Children need room to improve, to make mistakes and to try again. A disciplined environment can remain nurturing when correction is clear, fair and joined with encouragement.",
      "The hope is that students carry the Quran not only in memory but also in their choices. That is why families and teachers work together to make good manners part of ordinary daily practice."
    ],
  },
  {
    id: "understanding-after-hifz", title: "From memorising words to exploring meaning", category: "Islamic Knowledge",
    description: "Tarjuma-e-Quran offers a next step after Hifz for engaging with the Quran's message.",
    image: { src: "/assets/page-imagery/blog-meaning.webp", alt: "Illustrative discussion of Quran meaning" },
    body: [
      "Memorisation develops a close familiarity with the words of the Quran. Understanding those words invites a different kind of attention: asking what a passage means and how its guidance relates to everyday life.",
      "Al Zikra offers Tarjuma-e-Quran after completion of Hifz. This helps students move from preserving the text in memory towards exploring its meaning. The two stages support each other rather than compete with each other.",
      "A student does not need to have every answer immediately. Good learning makes room for questions, careful explanation and the humility to keep studying. Guidance from qualified teachers helps students approach meaning responsibly.",
      "When students connect what they memorise with what they understand, their relationship with the Quran can continue to deepen. The aim is lifelong learning shaped by reflection, practice and character."
    ],
  },
  {
    id: "arabic-scholarship", title: "Why Arabic matters in Islamic scholarship", category: "Islamic Knowledge",
    description: "Language practice and independent reading support deeper, more confident study.",
    image: { src: "/assets/page-imagery/blog-arabic-male.webp", alt: "Illustrative male Arabic study group" },
    body: [
      "Arabic is an important part of studying classical Islamic texts. Developing the ability to read, write, speak and discuss ideas in Arabic can help students engage more directly with the material they study.",
      "Al Zikra's eight-year Islamic Studies / Aalim-e-Deen course includes Arabic dialogue and debate practice alongside Quran, Hadith, Fiqh and other Islamic sciences. Library reading, independent study, computer skills and academic discussion add to that learning environment.",
      "Language ability develops through use. A student benefits from reading regularly, practising conversation, listening to correction and returning to unfamiliar words. These habits also build confidence to explain ideas with care.",
      "The course aims to prepare students for responsible service through knowledge and character. Teaching, further study and other pathways may follow, but the foundation begins with disciplined learning and a willingness to keep growing."
    ],
  },
  {
    id: "quran-family-life", title: "Quran learning and family life together", category: "Family",
    description: "A non-residential routine lets structured study and family support develop side by side.",
    image: { src: "/assets/page-imagery/blog-family-life-male.webp", alt: "Illustrative boy being welcomed home by his father after class" },
    body: [
      "A structured school day can give students time for focused study while leaving room for family life. Al Zikra follows a non-residential model: students attend the centre and return home each day.",
      "For the Hifz and Islamic Studies pathways, the supplied full-day teaching time is 7:00 AM to 5:00 PM. Nazira follows a different, part-time schedule of 3:00 PM to 5:00 PM. Each pathway has its own entry requirements and learning aims.",
      "The home environment remains significant. Parents can support punctuality, daily revision and good manners, while teachers guide learning and offer feedback. Keeping communication open helps the routine serve the individual student rather than become only a timetable.",
      "The relationship between centre and home is a partnership. Together, they can help young learners build knowledge, discipline and a lasting attachment to the Quran."
    ],
  },
];
