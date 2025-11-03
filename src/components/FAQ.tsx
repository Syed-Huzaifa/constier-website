import { motion } from 'motion/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const faqs = [
  {
    question: 'What industries do you specialize in?',
    answer: 'We specialize in hospitality, healthcare, aviation, and corporate sectors. Our expertise includes hotels, resorts, hospitals, airports, and office complexes.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. Small deployments can take 2-4 weeks, while large-scale infrastructure projects may take 3-6 months. We provide detailed timelines during consultation.'
  },
  {
    question: 'Do you provide ongoing support after deployment?',
    answer: 'Yes! We offer 24/7 technical support, regular maintenance, system updates, and performance monitoring. Our support packages are customized to your needs.'
  },
  {
    question: 'Can you work with our existing infrastructure?',
    answer: 'Absolutely. We conduct thorough assessments of existing systems and design solutions that integrate seamlessly while maximizing your current investments.'
  },
  {
    question: 'What is your typical project process?',
    answer: 'Our process includes: 1) Consultation & Assessment, 2) Design & Planning, 3) Deployment & Integration, 4) Testing & Training, 5) Go-Live Support, and 6) Ongoing Maintenance.'
  },
  {
    question: 'Do you offer training for our staff?',
    answer: 'Yes, comprehensive training is included with every deployment. We ensure your team is confident in operating and maintaining the new systems.'
  },
  {
    question: 'What makes Constier different from other IT providers?',
    answer: 'Our deep hospitality expertise, proven track record, 24/7 support, and commitment to using enterprise-grade solutions set us apart. We focus on long-term partnerships, not just projects.'
  },
  {
    question: 'How do you ensure system security?',
    answer: 'We implement multi-layered security including firewalls, encryption, access controls, regular security audits, and compliance with industry standards.'
  }
];

export default function FAQ() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-white border border-gray-200 rounded-2xl px-6 hover:border-[#FAAF1E] transition-colors"
          >
            <AccordionTrigger className="text-left text-[#111230] hover:text-[#FAAF1E] hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-[#59595B]">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  );
}
