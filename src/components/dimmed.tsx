import { motion } from "framer-motion";

export type DimmedProps = {
  children?: React.ReactNode;
  onClick?: () => void;
};

function Dimmed({ children, onClick }: DimmedProps) {
  return (
    <motion.div
      className="fixed inset-0 top-0 left-0 z-50 grid place-items-center"
      onClick={onClick}
      initial={{ backgroundColor: "#00000000" }}
      animate={{ backgroundColor: "#00000015" }}
      exit={{ backgroundColor: "#00000000" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export default Dimmed;
