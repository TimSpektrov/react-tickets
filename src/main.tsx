import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.tsx";
import { TicketProvider } from "./hooks/useTickets.tsx";

createRoot(document.getElementById("root")!).render(
  <TicketProvider>
    <App />
  </TicketProvider>,
);
