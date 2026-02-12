import { motion } from "framer-motion";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  github,
  closeModal,
}) => {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 md:p-10 backdrop-blur-sm bg-black/40"
      onClick={closeModal}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()} 
        // CHANGE 1: Added max-h-[90vh] and overflow-y-auto to allow scrolling on small screens
        // CHANGE 2: Changed max-w-2xl to max-w-xl to make the modal "little smaller" as requested
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto border shadow-2xl rounded-2xl bg-linear-to-l from-midnight to-navy border-white/10 no-scrollbar"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
      >
        {/* CHANGE 3: Made close button fixed/sticky so it's always accessible while scrolling */}
        <button
          onClick={closeModal}
          className="absolute z-110 p-2 rounded-full top-4 right-4 bg-midnight/60 hover:bg-gray-500 backdrop-blur-md"
        >
          <img src="assets/close.svg" className="w-5 h-5" alt="close" />
        </button>

        {/* CHANGE 4: Added aspect-video and object-cover to keep image sizing consistent */}
        <div className="w-full  overflow-hidden rounded-t-2xl">
           <img src={image} alt={title} className="w-full h-full object-cover " />
        </div>

        {/* CHANGE 5: Adjusted padding for mobile (p-6) vs desktop (md:p-8) */}
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <h5 className="text-xl font-bold text-white md:text-2xl">{title}</h5>
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="transition-transform hover:scale-110"
              >
                <img src="assets/github.png" className="size-8" alt="github" />
              </a>
            )}
          </div>

          <p className="mb-4 text-sm leading-relaxed md:text-base text-neutral-400">
            {description}
          </p>

          {/* CHANGE 6: Added a wrapper for sub-descriptions to maintain clean spacing */}
          <div className="space-y-2 mb-6">
            {subDescription.map((subDesc, index) => (
              <p key={index} className="text-xs md:text-sm text-neutral-500 italic border-l border-royal pl-3">
                {subDesc}
              </p>
            ))}
          </div>

          {/* CHANGE 7: Stacked tags and button vertically on very small screens (flex-col) */}
          <div className="flex flex-col gap-6 pt-4 border-t border-white/5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  title={tag.name}
                  className="rounded-md size-8 md:size-9 transition-all"
                />
              ))}
            </div>

            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2 text-sm font-medium text-white transition-all rounded-lg bg-royal hover:bg-lavender group"
            >
              View Project
              <img src="assets/arrow-up.svg" className="transition-transform size-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" alt="arrow" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;