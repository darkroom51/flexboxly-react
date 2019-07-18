import React from "react";
import { withRouter } from "react-router-dom";
import StyledIconButton from "../common/StyledIconButton";
import Icon from "../../assets/icons/back.svg";

const BackButton = ({ history }) => {
  return <StyledIconButton onClick={() => history.goBack()}>
    <img src={Icon} alt="Back to list" />
  </StyledIconButton>;
};

export default withRouter(BackButton);
