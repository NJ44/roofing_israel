import React from "react";
import { motion } from "framer-motion";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}) => {
  const [isHoveringDropdown, setIsHoveringDropdown] = React.useState(false);

  return (
    <div 
      onMouseEnter={() => setActive(item)} 
      onMouseLeave={() => {
        // Only close if not hovering over the dropdown
        if (!isHoveringDropdown) {
          setActive(null);
        }
      }}
      className="relative"
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:text-primary font-medium text-sm transition-colors duration-200"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div 
              className="absolute top-[calc(100%_+_1.5rem)] left-1/2 transform -translate-x-1/2"
              onMouseEnter={() => {
                setIsHoveringDropdown(true);
                setActive(item);
              }}
              onMouseLeave={() => {
                setIsHoveringDropdown(false);
                setActive(null);
              }}
            >
              {/* Invisible buffer zone to prevent dropdown from closing */}
              <div className="h-8 w-full absolute -top-8 left-0"></div>
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl pt-6"
              >
                <motion.div
                  layout
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
  className,
}) => {
  return (
    <nav
      onMouseLeave={() => {
        // Close dropdown when mouse leaves the entire nav area
        setActive(null);
      }}
      className={`relative rounded-lg border border-transparent dark:bg-white dark:border-gray-300 bg-white shadow-2xl flex justify-between items-center space-x-3 px-7 py-2 max-w-4xl mx-auto ${className || ''}`}
      style={{ transform: 'scale(1.1)' }}
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
  onClick,
}) => {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <a 
      href={href} 
      onClick={handleClick} 
      className="flex space-x-2 p-3 rounded-lg transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-900 hover:scale-[1.02] group"
    >
      <img
        src={src}
        width={100}
        height={60}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl object-cover w-20 h-12 transition-transform duration-200 group-hover:scale-105"
      />
      <div>
        <h4 className="text-sm font-bold mb-0.5 text-black dark:text-white transition-colors duration-200 group-hover:text-primary">
          {title}
        </h4>
        <p className="text-neutral-700 text-xs max-w-[8rem] dark:text-neutral-300 transition-colors duration-200 group-hover:text-neutral-900 dark:group-hover:text-neutral-100">
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({ children, href, onClick, ...rest }) => {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white px-3 py-2 rounded-lg transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-900 hover:translate-x-1"
      {...rest}
    >
      {children}
    </a>
  );
};

