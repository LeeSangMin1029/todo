import { createContext } from "react";

const EventContext = createContext({
  onClickDelete: (id) => {},
});

export const EventProvider = EventContext.Provider;

export default EventContext;
