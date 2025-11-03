import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discovery & Consultation',
    description: 'We start by understanding your unique needs, challenges, and goals through detailed consultation sessions.',
    duration: '1-2 weeks'
  },
  {
    number: '02',
    title: 'Assessment & Planning',
    description: 'Our team conducts thorough site surveys and technical assessments to design the optimal solution.',
    duration: '2-3 weeks'
  },
  {
    number: '03',
    title: 'Solution Design',
    description: 'We create comprehensive designs including network architecture, equipment specifications, and implementation roadmap.',
    duration: '2-4 weeks'
  },
  {
    number: '04',
    title: 'Approval & Procurement',
    description: 'After your approval, we procure all necessary equipment and schedule the deployment timeline.',
    duration: '3-4 weeks'
  },
  {
    number: '05',
    title: 'Implementation',
    description: 'Our certified technicians deploy the solution with minimal disruption to your operations.',
    duration: '4-8 weeks'
  },
  {
    number: '06',
    title: 'Testing & Training',
    description: 'Comprehensive testing ensures everything works perfectly, followed by staff training sessions.',
    duration: '1-2 weeks'
  },
  {
    number: '07',
    title: 'Go-Live Support',
    description: 'We provide intensive on-site support during the critical go-live phase to ensure smooth transition.',
    duration: '1 week'
  },
  {
    number: '08',
    title: 'Ongoing Maintenance',
    description: 'Continuous monitoring, updates, and 24/7 support to keep your systems performing optimally.',
    duration: 'Ongoing'
  }
];

export default function ProcessTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200">
        <motion.div
          style={{ height: lineHeight }}
          className="w-full bg-[#FAAF1E]"
        />
      </div>

      {/* Steps */}
      <div className="space-y-12">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-20"
          >
            {/* Number Circle */}
            <div className="absolute left-0 w-16 h-16 bg-white border-2 border-[#FAAF1E] rounded-full flex items-center justify-center">
              <span className="text-lg text-[#FAAF1E]">{step.number}</span>
            </div>

            {/* Content */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#FAAF1E] transition-colors">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl text-[#111230]">{step.title}</h3>
                <span className="text-sm text-[#59595B] bg-gray-100 px-3 py-1 rounded-full">
                  {step.duration}
                </span>
              </div>
              <p className="text-[#59595B]">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
