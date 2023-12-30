import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { MdClose } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
  isOpen: boolean;
  onClose?: () => void;
  ariaLabel?: string;
  children: ReactNode;
};

export default function Dialog({
  children,
  isOpen,
  onClose,
  ariaLabel = 'dialog',
}: Props) {
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-labelledby={ariaLabel}
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 bg-gray-800/10 flex justify-center items-center"
        >
          <div className="bg-white p-3 shadow-md rounded relative">
            <div className="w-full flex justify-end ">
              <button
                className="hover:text-gray-400  "
                onClick={() => onClose?.()}
              >
                <MdClose className="h-5 w-5" />
              </button>
            </div>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
    'modal'
  );
}
