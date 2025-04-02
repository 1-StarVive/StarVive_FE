import ImperativeUI from "./imperative-ui-provider";

export default ImperativeUI as Omit<typeof ImperativeUI, "prototype" | "contextType">;
