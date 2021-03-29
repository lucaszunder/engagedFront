import React from "react";
import PropTypes from "prop-types";
import { Card, Button, CardBody } from "shards-react";
import { useAuth } from "../../context/UserContext";

const SelectUserComponent = ({ SelectUserComponent }) => {
  const {signIn} = useAuth();
  return (
    <Card large style={{height: '80%'}} className="mb-4 pt-3">
      <CardBody onClick={e => signIn(SelectUserComponent.role)} className="border-bottom text-center">
        <div style={{height: '100%', display: 'flex', flexFlow: 'column', placeContent: 'center'}}className="mb-3 mx-auto">
          <i style={{ fontSize: "250px" }} className="material-icons">
            {SelectUserComponent.avatar}
          </i>
          <h3 className="mb-0">{SelectUserComponent.name}</h3>
        </div>
      </CardBody>
    </Card>
  );
};
SelectUserComponent.propTypes = {
  /**
   * The user details object.
   */
  SelectUserComponent: PropTypes.object
};

SelectUserComponent.defaultProps = {
  SelectUserComponent: {
    name: "Criador",
    avatar: require("./../../images/avatars/0.jpg"),
    role:"none"
  }
};

export default SelectUserComponent;
