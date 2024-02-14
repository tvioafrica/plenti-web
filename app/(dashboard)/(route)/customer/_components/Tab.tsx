import React from 'react';

type TabProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
  icon?: JSX.Element;
};

const Tab: React.FC<TabProps> = ({ label, isActive, onClick, icon }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 relative flex items-center space-x-1 transition-colors duration-300 ease-in-out ${isActive ? 'text-black' : 'text-[#424040]'}`}
    >
      {icon && <span className="icon">{icon}</span>}

      <span className="text-xs sm:text-base whitespace-nowrap">{label}</span>
      {isActive && (
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-[0.15rem] bg-gray-500 rounded transition-width duration-300 ease-in-out"></span>
      )}
    </button>
  );
};

export default Tab;
