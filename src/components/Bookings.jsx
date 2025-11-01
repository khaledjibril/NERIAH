"use strict";

// Components
import Booking from "./Booking";

const Bookings = () => {
  return (
    <div>
      <Booking
        eventType={"Wedding"}
        eventDate={" 11/15/2025"}
        eventTime={"12:17:27 AM"}
        address={"123 Main St, Lagos, Nigeria"}
      />
    </div>
  );
};

export default Bookings;
