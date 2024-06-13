import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";

import state, { fetchCustomization, resetColors } from "../store";
import { EditorTabs } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";
import { ColorPicker, CustomButton, Tab } from "../components";

const Customizer = ({ userId }) => {
  const snap = useSnapshot(state);
  const [activeEditorTab, setActiveEditorTab] = useState(EditorTabs[0].name);
  const [isColorPickerVisible, setIsColorPickerVisible] = useState(false);

  useEffect(() => {
    fetchCustomization(userId); // Fetch customization on load
  }, [userId]);



  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation("left")}
          >
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    tab={tab}
                    handleClick={() => {
                      if (activeEditorTab === tab.name) {
                        setIsColorPickerVisible(!isColorPickerVisible);
                      } else {
                        setActiveEditorTab(tab.name);
                        setIsColorPickerVisible(true);
                      }
                    }}
                  />
                ))}

                {isColorPickerVisible && <ColorPicker userId={userId} />}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute z-10 top-5 right-5"
            {...fadeAnimation}
          >
            {/* A button that will restore back on the colors to default */}
            <CustomButton
              type="outline"
              title="Default Colour"
              handleClick={() => resetColors(userId)}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm mr-3"
            />
            <CustomButton
              type="filled"
              title="Go Back"
              handleClick={() => (state.intro = true)}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;
