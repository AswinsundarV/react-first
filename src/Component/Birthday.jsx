import React, { useState } from "react";
import "./birthday.css"

const Birthday = () => {
  const [wish, setwish] = useState([
    {
      id: 1,

      name: "Bertie Yates",

      age: 29,

      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
    },

    {
      id: 2,

      name: "Hester Hogan",

      age: 32,

      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
    },

    {
      id: 3,

      name: "Larry Little",

      age: 36,

      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    },

    {
      id: 4,

      name: "Sean Walsh",

      age: 34,

      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    },

    {
      id: 5,

      name: "Lola Gardner",

      age: 29,

      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    },
  ]);
  const handleclear=()=>{
    setwish([ ])
  }
  return (
    <div className="first">
      <h1>{wish.length}happy birthday</h1>
      {wish.map((wish) => (
        <section>
          <img src={wish.image} width="100px" height="100px" className="photo" />
          <div className="a">
                 <h1>{wish.name}</h1>
                  <p>{wish.age}years ago</p>
          </div>
        </section>
      ))}
      <button onClick={handleclear}>clear</button>
    </div>
  );
};
export default Birthday;
