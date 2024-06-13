import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import { CustomButton } from "../components";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import Register from "../components/Register";
import Login from "../components/Login";


const Home = ({ user }) => {
  const snap = useSnapshot(state);
  const [loading, setLoading] = useState(true);
  const [authMode, setAuthMode] = useState("login"); // 'login' or 'register'

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className={`head-text`}>
                LET'S <br className="xl:block hidden" /> DO IT.
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
                Create your unique and exclusive shirt with our brand-new 3D
                customization tool. <strong>Unleash your imagination</strong>{" "}
                and define your own style.
              </p>

              {!user ? (
                <>
                  {authMode === "login" ? <Login /> : <Register />}
                  <p>
                    {authMode === "login" ? (
                      <span>
                        Don't have an account?{" "}
                        <button
                          className="underline w-fit px-4 py-2.5 font-bold text-sm rounded-md"
                          onClick={() => setAuthMode("register")}
                        >
                          Register
                        </button>
                      </span>
                    ) : (
                      <span>
                        Already have an account?{" "}
                        <button
                          className="underline w-fit px-4 py-2.5 font-bold text-sm rounded-md"
                          onClick={() => setAuthMode("login")}
                        >
                          Login
                        </button>
                      </span>
                    )}
                  </p>
                </>
              ) : (
                <CustomButton
                  type="filled"
                  title="Customize It"
                  handleClick={() => (state.intro = false)}
                  customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                />
              )}
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
