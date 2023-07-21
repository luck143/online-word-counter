import React from "react";
// import PropTypes from "prop-types";

export default function Alert(props) {
  const capitaize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitaize(props.alert.type)}</strong> :{" "}
          {capitaize(props.alert.msg)}
        </div>
      )}
    </div>
  );
}

// Alert.prototype = {
//   heading: PropTypes.string.isRequired,
//   about: PropTypes.string.isRequired,
// };
// Alert.defaultProps = {
//   msg: "Welcome to our Website!",
//   type: "info",
// };
