import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { CustomButton } from "../components";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    // Password validation
    if (password.length < 6) {
      setError("Password should be at least 6 characters");
      return;
    }

    // email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Registration successful!');

      alert("Registration successful!");
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setError("User already exists, login instead");
      } else {
        setError("Registration failed");
      }
    }
  };

  return (
    <div className="auth-form">
      {error && <p className="text-red-500">{error}</p>}

      <h2 className="font-bold my-2">Register</h2>

      <div className="flex gap-x-2 items-center">
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#EFBD48]"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#EFBD48]"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <CustomButton
          title="Register"
          handleClick={handleRegister}
          type="filled"
        />
      </div>
    </div>
  );
};

export default Register;
