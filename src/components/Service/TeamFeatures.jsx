import { motion } from "framer-motion";
import {
  Smile,
  Users,
  BarChart2,
  MessageCircle,
  CheckSquare,
  RefreshCw,
} from "lucide-react";

const features = [
  {
    icon: <Smile className="h-8 w-8 text-blue-500" />,
    title: "Manage Teams",
    desc: "Easily create, assign, and manage teams across departments - keeping everyone aligned and accountable.",
  },
  {
    icon: <Users className="h-8 w-8 text-blue-500" />,
    title: "Team Activity",
    desc: "Get real-time updates on team performance, tasks, and timelines - all from a single dashboard.",
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-blue-500" />,
    title: "Manage Projects",
    desc: "Organize tasks, set priorities, and track project milestones to ensure nothing falls through the cracks.",
  },
  {
    icon: <MessageCircle className="h-8 w-8 text-blue-500" />,
    title: "Real-Time Communication",
    desc: "Chat, share files, and collaborate instantly with built-in messaging for seamless teamwork.",
  },
  {
    icon: <CheckSquare className="h-8 w-8 text-blue-500" />,
    title: "Team Statistics",
    desc: "Analyze performance metrics and gain insights into productivity, workload, and team health.",
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-blue-500" />,
    title: "Unlimited Sharing",
    desc: "Securely share documents, feedback, and updates without limits - anytime, anywhere.",
  },
];


const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5, ease: "easeOut" },
  },
});

const TeamFeatures = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn(index * 0.1)}
            className="flex flex-col items-center"
          >
            {feature.icon}
            <h4 className="mt-4 text-sm font-semibold tracking-wide text-gray-900 uppercase">
              {feature.title}
            </h4>
            <p className="mt-2 text-sm text-gray-500 max-w-xs mx-auto leading-relaxed">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamFeatures;
