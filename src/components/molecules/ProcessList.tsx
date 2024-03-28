interface Step {
  stepNumber: number;
  instruction: string;
}

interface ProcessListProps {
  steps: Step[];
}

const ProcessList: React.FC<ProcessListProps> = ({ steps }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow">
      <ol className="list-decimal pl-4 space-y-2">
        {steps.map((step, index) => (
          <li key={index} className="flex items-start space-x-2">
            <span className="text-yellow-400">{step.stepNumber}.</span>
            <p className="flex-1 text-white">{step.instruction}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ProcessList;
