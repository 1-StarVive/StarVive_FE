import Modal from "./modal-provider";

export default Modal as Omit<typeof Modal, "prototype" | "contextType">;
