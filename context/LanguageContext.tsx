import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'ar' | 'en';

const translations = {
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'خدماتنا',
      portfolio: 'أعمالنا',
      contact: 'اتصل بنا',
      startProject: 'ابدأ مشروعك'
    },
    hero: {
      badge: 'الفخامة في كل تفصيل',
      slogan: 'للتصميم والتنفيذ',
      heading: 'حيث يلتقي الإبداع بالفخامة',
      description: 'نصنع تجارب لا تُنسى في عالم المعارض والدعاية. نحن نحول رؤيتك إلى واقع ملموس بتصاميم تجمع بين الرقي الفني والدقة الهندسية.',
      discover: 'اكتشف خدماتنا',
      start: 'ابدأ مشروعك الآن'
    },
    about: {
      title: 'من نحن',
      description: 'شركة Decoration Art هي الرائدة في مجال تنظيم المعارض والتصميم الداخلي الفاخر. نحن نجمع بين سنوات من الخبرة وشغف لا يتوقف للإبتكار، لنقدم لعملائنا حلولاً تسويقية ودعائية تتجاوز التوقعات.',
      visionTitle: 'رؤيتنا',
      visionDesc: 'أن نكون الخيار الأول للعلامات التجارية التي تبحث عن التميز بالفخامة في عرض هويتها.',
      missionTitle: 'مهمتنا',
      missionDesc: 'تقديم حلول إبداعية مبتكرة تجمع بين الجمالية والوظيفية لتحقيق أهداف عملائنا التسويقية.',
      years: 'سنوات من الإبداع',
      awards: 'جوائز عالمية'
    },
    services: {
      title: 'خدماتنا',
      highlight: 'الاحترافية',
      subtitle: 'نقدم مجموعة متكاملة من الخدمات المصممة خصيصاً لتلبية احتياجات النخبة من العملاء.',
      items: [
        { title: "تصميم وتنفيذ المعارض", desc: "نبتكر أجنحة عرض استثنائية تجذب الأنظار وتعكس هوية علامتك التجارية بأعلى معايير الفخامة." },
        { title: "الدعاية والإعلان", desc: "حملات إعلانية متكاملة ومدروسة تصل إلى جمهورك مستهدف بفعالية وتأثير." },
        { title: "التسويق الرقمي", desc: "استراتيجيات تسويق إلكتروني متطورة لتعزيز تواجدك الرقمي وزيادة مبيعاتك." },
        { title: "تصميم الهوية البصرية", desc: "صياغة هوية بصرية فريدة ومتكاملة تخلد في أذهان عملائك." },
        { title: "تصميم المطبوعات", desc: "تصميمات مطبوعة فاخرة بلمسات فنية تعزز من قيمة علامتك التجارية." },
        { title: "الاستشارات الإبداعية", desc: "نقدم لك خلاصة خبراتنا لتطوير أفكارك وتحويلها إلى مشاريع ناجحة." }
      ]
    },
    portfolio: {
      title: 'أعمالنا',
      highlight: 'المميزة',
      subtitle: 'لقطات من إبداعاتنا في تصميم وتنفيذ أجنحة المعارض العالمية',
      seeMore: 'شاهد المزيد',
      details: 'تفاصيل المشروع',
      items: [
        { title: "جناح FPI Quetiapine", category: "تصميم وتنفيذ متكامل" },
        { title: "جناح إليكسير (Elixir)", category: "تصميم وتنفيذ متكامل" },
        { title: "جناح ACT", category: "تصميم وتنفيذ متكامل" },
        { title: "جناح El Masrya Foundation", category: "تصميم وتنفيذ معارض" },
        { title: "مشروع النخبة المتميز", category: "تصميم داخلي فاخر" },
        { title: "مشروع الشلال الرقمي 3D", category: "تصميم ثلاثي الأبعاد" }
      ]
    },
    whyChooseUs: {
      title: 'لماذا تختار',
      subtitle: 'نحن لا نقدم مجرد خدمات، بل نصنع شراكات نجاح. التزامنا بالجودة والتفرد هو ما يجعل عملاءنا يثقون بنا دائمًا.',
      items: [
        { title: "تصميم عصري فريد", text: "نبتعد عن التقليدية ونقدم تصاميم تجمع بين حداثة العصر وأصالة الفن." },
        { title: "جودة لا تضاهى", text: "نستخدم أفضل الخامات وأحدث التقنيات لضمان مخرجات تليق بمكانتكم." },
        { title: "التزام بالمواعيد", text: "نقدر قيمة وقتكم، لذا نلتزم بتسليم المشاريع وفق الجدول الزمني المحدد بدقة." },
        { title: "فريق محترف", text: "نخبة من المصممين والمهندسين والمسوقين يعملون بشغف لتحقيق أهدافكم." }
      ]
    },
    testimonials: {
      title: "ماذا يقول",
      highlight: "عملاؤنا",
      subtitle: "فخورون بثقة شركاء النجاح الذين شاركناهم رحلة التميز.",
      items: [
        { name: "أحمد المنصور", role: "المدير التنفيذي - شركة التقنية الحديثة", text: "حولوا جناحنا في المعرض إلى تحفة فنية جذبت انتباه الجميع. الاحترافية في التنفيذ كانت مذهلة." },
        { name: "سارة العمري", role: "مديرة التسويق - براند فاشن", text: "فريق مبدع فهم هويتنا التجارية من أول اجتماع وقدم تصاميم فاقت توقعاتنا." },
        { name: "محمد السيد", role: "منظم فعاليات", text: "الدقة في المواعيد والجودة العالية في الخامات المستخدمة هي ما يميز Decoration Art عن غيرهم." }
      ]
    },
    contact: {
      title: 'تواصل',
      highlight: 'معنا',
      subtitle: 'نحن هنا للإجابة على استفساراتك وبدء رحلة النجاح معًا',
      call: 'اتصل بنا',
      email: 'البريد الإلكتروني',
      location: 'موقعنا',
      locationText: 'شبرامنت - المريوطية، الجيزة، مصر',
      form: {
        fullName: 'الاسم الكامل',
        fullNamePh: 'الاسم',
        phone: 'رقم الهاتف',
        email: 'البريد الإلكتروني',
        message: 'رسالتك',
        messagePh: 'كيف يمكننا مساعدتك؟',
        submit: 'إرسال الرسالة',
        sending: 'جاري الإرسال...',
        successTitle: 'تم الإرسال بنجاح!',
        successDesc: 'شكراً لتواصلك معنا، سيقوم فريقنا بالرد عليك في أقرب وقت.',
        sendAnother: 'إرسال رسالة أخرى',
        error: 'عذراً، حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.'
      }
    },
    footer: {
      desc: 'نحن نؤمن بأن التصميم هو لغة الحوار البصري. دعنا نساعدك في التحدث بطلاقة مع جمهورك من خلال تصاميم تنبض بالحياة والفخامة.',
      quickLinks: 'روابط سريعة',
      followUs: 'تابعنا',
      rights: 'Decoration Art. جميع الحقوق محفوظة.',
      privacy: 'سياسة الخصوصية',
      terms: 'الشروط والأحكام'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      portfolio: 'Portfolio',
      contact: 'Contact Us',
      startProject: 'Start Project'
    },
    hero: {
      badge: 'Luxury in Every Detail',
      slogan: 'For Design and Implementation',
      heading: 'Where Creativity Meets Luxury',
      description: 'We create unforgettable experiences in exhibitions and advertising. We turn your vision into reality with designs that combine artistic sophistication and engineering precision.',
      discover: 'Discover Services',
      start: 'Start Project Now'
    },
    about: {
      title: 'About Us',
      description: 'Decoration Art is a leader in exhibition organization and luxury interior design. We combine years of experience with relentless passion for innovation to provide our clients with marketing and advertising solutions that exceed expectations.',
      visionTitle: 'Our Vision',
      visionDesc: 'To be the first choice for brands seeking distinction and luxury in presenting their identity.',
      missionTitle: 'Our Mission',
      missionDesc: 'To provide innovative creative solutions that combine aesthetics and functionality to achieve our clients\' marketing goals.',
      years: 'Years of Creativity',
      awards: 'Global Awards'
    },
    services: {
      title: 'Our Professional',
      highlight: 'Services',
      subtitle: 'We offer a comprehensive range of services designed specifically to meet the needs of elite clients.',
      items: [
        { title: "Exhibition Design", desc: "We create exceptional exhibition stands that attract attention and reflect your brand identity with the highest standards of luxury." },
        { title: "Advertising", desc: "Integrated and studied advertising campaigns that reach your target audience effectively and impactfully." },
        { title: "Digital Marketing", desc: "Advanced digital marketing strategies to enhance your digital presence and increase sales." },
        { title: "Visual Identity", desc: "Crafting a unique and integrated visual identity that remains in your customers' minds." },
        { title: "Print Design", desc: "Luxurious print designs with artistic touches that enhance your brand value." },
        { title: "Creative Consulting", desc: "We offer you the summary of our expertise to develop your ideas and turn them into successful projects." }
      ]
    },
    portfolio: {
      title: 'Our Featured',
      highlight: 'Work',
      subtitle: 'Snapshots of our creativity in designing and implementing international exhibition stands.',
      seeMore: 'See More',
      details: 'Project Details',
      items: [
        { title: "FPI Quetiapine Stand", category: "Full Implementation" },
        { title: "Elixir Stand", category: "Integrated Design" },
        { title: "ACT Stand", category: "Full Execution" },
        { title: "El Masrya Foundation", category: "Integrated Design" },
        { title: "Elite Interior Concept", category: "Luxury Interior Design" },
        { title: "Digital Waterfall 3D Concept", category: "3D Design" }
      ]
    },
    whyChooseUs: {
      title: 'Why Choose',
      subtitle: 'We don\'t just offer services, we build success partnerships. Our commitment to quality and uniqueness is what makes our clients trust us always.',
      items: [
        { title: "Unique Modern Design", text: "We move away from the traditional and offer designs that combine modernism with artistic authenticity." },
        { title: "Unmatched Quality", text: "We use the best materials and latest technologies to ensure outputs befitting your status." },
        { title: "Punctuality", text: "We value your time, so we commit to delivering projects according to the schedule precisely." },
        { title: "Professional Team", text: "Elite designers, engineers, and marketers working with passion to achieve your goals." }
      ]
    },
    testimonials: {
      title: "What Our",
      highlight: "Clients Say",
      subtitle: "Proud of the trust of our success partners with whom we shared the journey of excellence.",
      items: [
        { name: "Ahmed Al-Mansour", role: "CEO - Modern Tech Corp", text: "They transformed our exhibition booth into a masterpiece that grabbed everyone's attention. The execution professionalism was amazing." },
        { name: "Sarah Al-Omari", role: "Marketing Director - Brand Fashion", text: "A creative team that understood our brand identity from the first meeting and delivered designs that exceeded our expectations." },
        { name: "Mohamed El-Sayed", role: "Event Organizer", text: "Punctuality and high quality of materials used are what distinguish Decoration Art from others." }
      ]
    },
    contact: {
      title: 'Contact',
      highlight: 'Us',
      subtitle: 'We are here to answer your inquiries and start the journey of success together',
      call: 'Call Us',
      email: 'Email',
      location: 'Location',
      locationText: 'Shabrament - Marioutia, Giza, Egypt',
      form: {
        fullName: 'Full Name',
        fullNamePh: 'Name',
        phone: 'Phone Number',
        email: 'Email',
        message: 'Your Message',
        messagePh: 'How can we help you?',
        submit: 'Send Message',
        sending: 'Sending...',
        successTitle: 'Sent Successfully!',
        successDesc: 'Thank you for contacting us, our team will reply shortly.',
        sendAnother: 'Send another message',
        error: 'Sorry, an error occurred. Please try again.'
      }
    },
    footer: {
      desc: 'We believe design is visual dialogue. Let us help you speak fluently to your audience with designs that pulse with life and luxury.',
      quickLinks: 'Quick Links',
      followUs: 'Follow Us',
      rights: 'Decoration Art. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions'
    }
  }
};

const LanguageContext = createContext<{
  language: Language;
  toggleLanguage: () => void;
  t: typeof translations.ar;
} | null>(null);

export const LanguageProvider = ({ children }: { children?: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
