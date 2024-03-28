import { useState } from 'react';

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].label);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex space-x-2 mt-2 bg-gray-800 p-1 rounded-xl">
        {tabs.map((tab: Tab, index: number) => (
          <button
            key={index}
            onClick={() => setActiveTab(tab.label)}
            className={`text-3xl font-medium px-4 py-2 rounded
              ${activeTab === tab.label
                ? 'text-yellow-400'
                : 'text-black hover:text-yellow-400'
              } transition-colors duration-300`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content mt-4 w-full">
        {tabs.map((tab: Tab, index: number) => (
          activeTab === tab.label && (
            <div key={index} className="p-4 text-white">
              {tab.content}
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default Tabs;

