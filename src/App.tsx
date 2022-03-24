import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import PermissionsGate from "./PermissionsGate";
import { SCOPES } from "./permission-maps";
import { token } from "./constants";

function App() {
  const test = () => {
    alert("Hi");
  };
  return (
    <PermissionsGate
      RenderError={() => <p>You shall not pass!</p>}
      errorProps={{ disabled: true }}
      scopes={[SCOPES.canEdit, SCOPES.canView]}
    >
      <SubmitData
        testEvent={() => {
          test();
        }}
      />
    </PermissionsGate>
  );
}

const SubmitData = (props: any) => {
  return (
    <button disabled={props.disabled} onClick={props.testEvent}>
      Submit
    </button>
  );
};
const Parent = (props: any) => {
  return <div>Parent</div>;
};
export default App;
