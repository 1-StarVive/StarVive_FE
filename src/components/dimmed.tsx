import { motion } from "framer-motion";

export type DimmedProps = {
  children?: React.ReactNode;
  onClick?: () => void;
};

function Dimmed({ children, onClick }: DimmedProps) {
  return (
    <motion.div
      className="fixed grid inset-0 place-items-center items-center"
      onClick={onClick}
      initial={{ background: "#00000000" }}
      animate={{ backgroundColor: "#00000015" }}
      exit={{ background: "#00000000" }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}

export default Dimmed;
