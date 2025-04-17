"use client";

import HamburgerIcon from "@/components/icons/hamburger-icon";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function Navigation() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="fixed top-0 left-0 h-dvh w-fit bg-red-500"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ul className="mt-10 p-4">
              <li>
                <Link href="/admin/featured-section">추천섹션</Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      <button className="fixed top-0 left-0 z-10 cursor-pointer p-2" onClick={toggleOpen}>
        <HamburgerIcon className="size-5" />
      </button>
    </>
  );
}

export default Navigation;
