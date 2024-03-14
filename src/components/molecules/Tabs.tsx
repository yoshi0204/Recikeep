// src/components/molecules/Tabs.tsx
import React, { useState } from 'react';
import PrimaryButton from '../atoms/PrimaryButton';
import Link from '../atoms/Link';

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <div>
      <div className="flex">
        {tabs.map((tab, index) => (
          <PrimaryButton key={index} onClick={() => setActiveTab(tab.label)}>
            {tab.label}
          </PrimaryButton>
        ))}
      </div>
      <div className="tab-content">
        {tabs.map((tab, index) => (
          activeTab === tab.label && (
            <div key={index}>
              {typeof tab.content === 'string' ? <Link to={tab.content}>{tab.content}</Link> : tab.content}
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default Tabs;
