import { motion } from "framer-motion";
import { scaleAnimation } from "../../utils/motionVariants";
import { Interest } from "../../utils/types";

type InterestsGridProp = {
  isDarkMode: boolean;
  interests: Interest[];
  setDescription: (description: string) => void;
};

function InterestsGrid({
  isDarkMode,
  interests,
  setDescription,
}: InterestsGridProp) {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-5">
      {interests.map((interest: Interest, index: number) => (
        <motion.div
          variants={scaleAnimation([null, 1.2, 1.1], 0.1)}
          initial="hidden"
          whileHover="show"
          key={`interest-${index}`}
          className={`${
            isDarkMode ? "bg-black" : "bg-grey-200"
          } cursor-pointer flex flex-col items-center justify-center rounded-xl p-5`}
          onClick={() => setDescription(interest.description)}
        >
          <interest.icon className="h-8 w-8 mb-3" />
          <p className="text-base uppercase">{interest.title}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default InterestsGrid;
