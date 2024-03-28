import ProcessList from 'src/components/molecules/ProcessList';

export default {
  title: 'Components/Molecules/ProcessList',
  component: ProcessList,
};

const demoSteps = [
  { stepNumber: 1, instruction: "Preheat your oven to 175°C." },
  { stepNumber: 2, instruction: "Grease and flour a pan." },
  { stepNumber: 3, instruction: "Mix flour and sugar in a large bowl." },
  { stepNumber: 4, instruction: "Beat in eggs one at a time." },
  { stepNumber: 5, instruction: "Stir in milk and vanilla extract." },
  { stepNumber: 6, instruction: "Pour batter into prepared pan." },
  { stepNumber: 7, instruction: "Bake for 30 minutes." },
  { stepNumber: 8, instruction: "Allow to cool." },
];

export const DefaultProcessList = {
  args: {
    steps: demoSteps,
  },
};
