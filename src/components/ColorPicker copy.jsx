import { HexColorPicker } from "react-colorful";
import { useSnapshot } from "valtio";
import state from "../store";

function ColorPicker() {
  const snap = useSnapshot(state);
  return (
    <div
      className="absolute left-full ml-3"
    >
      <HexColorPicker
        className="picker"
        color={snap.items[snap.current]}
        onChange={(color) => {
          state.items[snap.current] = color;
          state.color = color;
        }}
      />
      <h1>{snap.current}</h1>
    </div>
  );
}

export default ColorPicker;
