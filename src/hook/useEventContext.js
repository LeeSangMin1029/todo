import { createContext } from "react";

const EventContext = createContext({
  onClickDelete: (e) => {},
});

export const EventProvider = EventContext.Provider;

export default EventContext;
