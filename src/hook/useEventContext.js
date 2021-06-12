import { createContext, useContext } from 'react';

const EventContext = createContext({
  onClickDelete: (id) => {},
  onChangeTodo: (id) => {},
});

export const EventProvider = EventContext.Provider;
export const useEventContext = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error('Cannot find EventProvider');
  }
};
export default EventContext;
