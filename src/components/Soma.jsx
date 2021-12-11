import React from "react";
import { connect } from "react-redux";

import Card from "./Card";

const Soma = (props) => {
  const { min, max } = props;
  return (
    <Card title="Number Sum" blue>
      <div>
        <span>
          <span>Result:</span>
          <strong>{min+max}</strong>
        </span>
      </div>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
};

export default connect(mapStateToProps)(Soma);
