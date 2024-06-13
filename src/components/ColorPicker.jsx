import { HexColorPicker } from "react-colorful";
import { useSnapshot } from "valtio";
import state, { saveCustomization } from '../store';

function ColorPicker({userId}) {
  const snap = useSnapshot(state);

  const handleChange = (color) => {
    state.items[snap.current] = color;
    state.color = color;
    saveCustomization(userId); // Save changes on color change
  };


  return (
    <div
      className="absolute left-full ml-3"
    >
      <HexColorPicker
        className="picker"
        color={snap.items[snap.current]}
        onChange={handleChange}
      />
      <h1>{snap.current}</h1>
    </div>
  );
}

export default ColorPicker;
