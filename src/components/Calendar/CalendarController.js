import { CalendarContent } from "./CalendarService";
import { FullWidthFrame, ComponentFrame, TitleFrame } from "./CalendarStyles";

export const CalendarFrame = () => {
  return (
    <FullWidthFrame>
      <ComponentFrame>
        <TitleFrame>Reservation</TitleFrame>
        <CalendarContent />
      </ComponentFrame>
    </FullWidthFrame>
  );
};
