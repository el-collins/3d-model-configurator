import { useEffect, useState } from "react";
import CanvasModel from "./canvas";
import { auth } from "./firebaseConfig";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
import { fetchCustomization } from "./store";
import { onAuthStateChanged } from "firebase/auth";
import { div, log } from "three/examples/jsm/nodes/Nodes.js";
import { CustomButton } from "./components";

export default function App() {
  const [user, setUser] = useState(null);
  console.log();

  // onAuthStateChanged(auth, (currentUser) => {
  //   if (currentUser) {
  //     setUser(currentUser);
  //     fetchCustomization(currentUser.uid);
  //     // console.log(currentUser.uid);
  //   } else {
  //     setUser(null);
  //   }
  // });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        fetchCustomization(currentUser.uid);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <main className="app transition-all ease-in">
      <div className="p-6 flex justify-between">
        <img
          src="./threejs.png"
          alt="logo"
          className="w-8 h-8 object-contain"
        />

        {user && (
          // logout button
          <div>
            <CustomButton
              type="filled"
              title="Log out"
              handleClick={async () => {
                await auth.signOut();
                setUser(null);
              }}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
{/* 
            <img
              src={user.photoURL}
              alt={user.displayName}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="text-sm font-bold">{user.displayName}</div> */}
          </div>
        )}
      </div>

      <Home user={user} />
      <CanvasModel />
      <Customizer userId={user?.uid} />
    </main>
  );
}
