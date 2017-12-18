import React from "react" // eslint-disable-line no-unused-vars
import PropTypes from "prop-types"
import { renderRoutes } from "react-router-config"
import TransitionGroup from "react-transition-group/TransitionGroup"
import AnimatedSwitch from "./AnimatedSwitch"
import Header from "../Header"

const LayoutStandard = ({ route, location }) => (
  <div>
    <Header />
    <TransitionGroup>
      <AnimatedSwitch key={location.key} location={location}>
        {renderRoutes(route.routes)}
      </AnimatedSwitch>
    </TransitionGroup>
  </div>
)

LayoutStandard.propTypes = {
  route: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  location: PropTypes.object, // eslint-disable-line react/forbid-prop-types
}
LayoutStandard.defaultProps = {
  route: [],
  location: [],
}

export default LayoutStandard
