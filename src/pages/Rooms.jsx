import { useEffect, useState } from "react";
import axios from "axios";

function Rooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    getRooms();
  }, []);

  const getRooms = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/rooms");
      setRooms(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const bookRoom = (roomNo) => {
    alert(`Room ${roomNo} booked successfully`);
  };

  return (
    <div>
      <h2>Available Rooms ({rooms.length})</h2>

      {rooms.length === 0 ? (
        <p>No rooms are available right now.</p>
      ) : (
        rooms.map((room) => (
          <div
            key={room._id}
            style={{
              border: "1px solid black",
              padding: "10px",
              margin: "10px",
            }}
          >
            <h3>Room No: {room.roomNo}</h3>
            <p>Price: ₹{room.price}</p>
            <p>Type: {room.type}</p>
            <button onClick={() => bookRoom(room.roomNo)}>
              Book Now
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Rooms;