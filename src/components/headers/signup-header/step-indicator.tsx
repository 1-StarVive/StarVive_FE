import { cn } from "@/lib/utils";

type StepIndicatorProps<T> = {
  steps: T[];
  currentStep: T;
};
function StepIndicator<T extends React.ReactNode>({ steps, currentStep }: StepIndicatorProps<T>) {
  return (
    <Wrap>
      <Hr />
      {steps.map((step, i) => (
        <Step key={i} isNow={step === currentStep}>
          {step}
        </Step>
      ))}
    </Wrap>
  );
}

export default StepIndicator;

function Wrap({ children }: React.PropsWithChildren) {
  return <div className="relative flex gap-2">{children}</div>;
}

function Hr() {
  return <div className="absolute top-1/2 z-10 h-[1px] w-full -translate-y-1/2 bg-gray-300" />;
}

function Step({ children, isNow }: React.PropsWithChildren<{ isNow: boolean }>) {
  return (
    <div
      className={cn(
        "z-10 flex min-h-4.5 min-w-4.5 items-center justify-center rounded-full border border-gray-300 bg-white text-xs leading-none text-gray-300",
        { "border-black bg-black text-white": isNow },
      )}
    >
      <span>{children}</span>
    </div>
  );
}
