import React, { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import SignupForm from "../../Components/form_components/SignupForm";
import { signupAction } from "../../redux/user/userActions";
import { Signup } from "./Signup";

export function Courier() {
  const reducer = (user, action) => {
    switch (action.type) {
      case "array":
        return {
          ...user,
          address: [...user.address, action.payload],
        };
      case "deleteItem":
        return {
          ...user,
          address: user.address.filter(
            (address) => address.address !== action.payload
          ),
        };
      case "object":
        return {
          ...user,
          cAddress: {
            lat: action.payload.lat,
            lng: action.payload.lng,
            address: action.payload.address,
          },
        };
      case "norm":
        return { ...user, ...action.payload };
      default:
        return user;
    }
  };

  const [user, setUser] = useReducer(reducer, {
    name: "",
    email: "",
    password: "",
    address: [],
    cAddress: {
      lat: "",
      lng: "",
      address: "",
    },
    phone: "",
    cPassword: "",
  });

  const dispatch = useDispatch();

  const errorTag = (mess = "Required Field") => (
    <p className="errorTag">{mess}</p>
  );
  const [emptyField, setEmptyField] = useState(false);

  const reqNameError = user.name === "";
  const reqEmailError = user.email === "";
  const reqPasswordError = user.password === "";
  const reqAddressError = user.address.length < 1;
  const reqPhoneError = user.phone === "";
  const reqCPasswordError = user.cPassword === "";
  const passCheck = user.cPassword === user.password;

  const handleSubmit = (e) => {
    console.log(user);
    e.preventDefault();
    if (
      reqNameError ||
      reqEmailError ||
      reqPasswordError ||
      reqAddressError ||
      reqPhoneError ||
      reqCPasswordError
    ) {
      setEmptyField(true);
      return;
    }
    if (!passCheck) {
      return;
    }
    dispatch(signupAction(user));
  };

  const handleChange = ({ name, value }) => {
    setUser({
      type: "norm",
      payload: { [name]: value },
    });
  };

  const onAddressSelect = ({ lat, lng, address }) => {
    setUser({
      type: "object",
      payload: {
        lat,
        lng,
        address,
      },
    });
  };

  const addAddress = (newAddress) => {
    if (newAddress.address === "" || newAddress.address === undefined) return;
    setUser({ payload: newAddress, type: "array" });
    clearCurrent();
  };

  function clearCurrent() {
    setUser({
      type: "object",
      payload: {
        cAddress: {
          lat: "",
          lng: "",
          address: "",
        },
      },
    });
  }
  const deleteAddress = (address) => {
    setUser({ payload: address, type: "deleteItem" });
  };

  return (
    <Signup>
      <SignupForm
        user={user}
        reqNameError={reqNameError}
        emptyField={emptyField}
        reqEmailError={reqEmailError}
        reqPasswordError={reqPasswordError}
        reqAddressError={reqAddressError}
        reqPhoneError={reqPhoneError}
        reqCPasswordError={reqCPasswordError}
        passCheck={passCheck}
        errorTag={errorTag}
        handleChange={handleChange}
        onAddressSelect={onAddressSelect}
        addAddress={addAddress}
        deleteAddress={deleteAddress}
        handleSubmit={handleSubmit}
        clearCurrent={clearCurrent}
      />
    </Signup>
  );
}
