import React, { ReactNode, useState } from 'react';
import Tab from './Tab';

type TabsProps = {
  tabData: { label: string, icon?: JSX.Element }[];
  children: ReactNode
};

const Tabs: React.FC<TabsProps> = ({ tabData, children }) => {
  const [activeTab, setActiveTab] = useState(tabData[0]?.label || '');

  return (
    <div>
      <div 
        className={`flex ${tabData.length > 3 ? 'overflow-x-auto' : 'justify-around'} space-x-4 mb-4`}
        style={tabData.length > 3 ? { scrollbarWidth: 'none' } : {}}
      >
        {tabData.map(({ label, icon }) => (
          <Tab
            key={label}
            label={label}
            icon={icon}
            isActive={activeTab === label}
            onClick={() => setActiveTab(label)}
          />
        ))}
      </div>

      {React.Children.map(children, (child, index) => {
        if (activeTab === tabData[index]?.label) return child;
        return null;
      })}
    </div>
  );
};

export default Tabs;
