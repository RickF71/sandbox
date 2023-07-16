import { useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function TriggerExample() {
    const [showTooltip, setShowTooltip] = useState(false);
    const tooltipRef = useRef(null);
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      This is a perfect tooltip<br /> for a perfect button.
    </Tooltip>
  );

  const handleTriggerTooltipOn = () => {
    setShowTooltip(true);
    if (tooltipRef.current) {
      tooltipRef.current.show();
    }
  };

  const handleTriggerTooltipOff = () => {
    setShowTooltip(false);
    if (tooltipRef.current) {
      tooltipRef.current.hide();
    }
  };

  return (
    <Container>
    <Row>
        <Col>
            <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
                trigger={"manual"}
                show={showTooltip}
                ref={tooltipRef}
            >
            <Button variant="success">Hover me to see</Button>
            </OverlayTrigger>
        </Col>
        <Col>
            <Button onClick={handleTriggerTooltipOn}>Tooltip On</Button>
        </Col>
        <Col>
            <Button onClick={handleTriggerTooltipOff}>Trigger Off</Button>
        </Col>
    </Row>
    </Container>
  );
}

export default TriggerExample;