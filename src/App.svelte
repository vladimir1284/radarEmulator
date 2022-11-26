<script lang="ts">
  import {
    Container,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardSubtitle,
    CardText,
    CardTitle,
    Row,
    Col,
    ListGroup,
    ListGroupItem,
  } from "sveltestrap";

  import DigitalOutput from "./lib/indicators/DigitalOutput.svelte";
  import DigitalInput from "./lib/indicators/DigitalInput.svelte";
  import HorizontalBar from "./lib/indicators/HorizontalBar.svelte";
  import RangeSlider from "./lib/indicators/RangeSlider.svelte";

  import { Serial } from "./lib/server";

  const name = "RadarEmulator";

  let red_val = false;
  let green_val = false;
  let blue_val = false;
  let yellow_val = false;

  let red_bar = 10;
  let green_bar = 12;
  let blue_bar = 3;
  let yellow_bar = 14;

  // // Point Eel web socket to the instance
  // export const eel = window.eel;
  // eel.set_host("ws://localhost:8080");

  // // Expose the `sayHelloJS` function to Python as `say_hello_js`
  // function sayHelloJS(x: any) {
  //   console.log("Hello from " + x);
  // }

  // function test() {
  //   eel.test();
  // }
  // // WARN: must use window.eel to keep parse-able eel.expose{...}
  // window.eel.expose(sayHelloJS, "say_hello_js");

  // // Test anonymous function when minimized. See https://github.com/samuelhwilliams/Eel/issues/363
  // function show_log() {
  //   console.log("test");
  // }
  // window.eel.expose(show_log, "show_log");

  // // Test calling sayHelloJS, then call the corresponding Python function
  // sayHelloJS("Javascript World!");
  // //eel.say_hello_py("Javascript World!");

  // let serial = new Serial({
  //   port: "/dev/ttyUSB0",
  //   baudrate: 19200,
  //   inter_byte_timeout: 3,
  // });
  // console.log(serial);
</script>

<main>
  <Container>
    <Row>
      <Col xs="12" md="6">
        <Card class="mb-3">
          <CardHeader>
            <CardTitle>Digital Outputs</CardTitle>
          </CardHeader>
          <CardBody>
            <ListGroup>
              <ListGroupItem>
                <DigitalOutput name="Default led red" bind:value={red_val} />
              </ListGroupItem>
              <ListGroupItem>
                <DigitalOutput bind:value={green_val} color="green" />
              </ListGroupItem>
              <ListGroupItem>
                <DigitalOutput bind:value={blue_val} color="blue" />
              </ListGroupItem>
              <ListGroupItem>
                <DigitalOutput bind:value={yellow_val} color="yellow" />
              </ListGroupItem>
            </ListGroup>
          </CardBody>
        </Card>
      </Col>
      <Col xs="12" md="6">
        <Card class="mb-3">
          <CardHeader>
            <CardTitle>Digital Inputs</CardTitle>
          </CardHeader>
          <CardBody>
            <ListGroup>
              <ListGroupItem>
                <DigitalInput bind:value={red_val} />
              </ListGroupItem>
              <ListGroupItem>
                <DigitalInput bind:value={green_val} color="green" />
              </ListGroupItem>
              <ListGroupItem>
                <DigitalInput bind:value={blue_val} color="blue" />
              </ListGroupItem>
              <ListGroupItem>
                <DigitalInput bind:value={yellow_val} color="yellow" />
              </ListGroupItem>
            </ListGroup>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col xs="12" md="6">
        <Card class="mb-3">
          <CardHeader>
            <CardTitle>Analog Outputs</CardTitle>
          </CardHeader>
          <CardBody>
            <ListGroup>
              <ListGroupItem>
                <HorizontalBar
                  name="Red analog"
                  unit="V"
                  bind:value={red_bar}
                  max_value={15}
                />
              </ListGroupItem>
              <ListGroupItem>
                <HorizontalBar
                  name="Green analog"
                  unit="V"
                  bind:value={green_bar}
                  color="green"
                  max_value={15}
                />
              </ListGroupItem>
              <ListGroupItem>
                <HorizontalBar
                  name="Blue analog"
                  unit="V"
                  bind:value={blue_bar}
                  color="blue"
                  max_value={200}
                />
              </ListGroupItem>
              <ListGroupItem>
                <HorizontalBar
                  name="Yellow analog"
                  unit="V"
                  bind:value={yellow_bar}
                  color="yellow"
                  max_value={15}
                />
              </ListGroupItem>
            </ListGroup>
          </CardBody>
        </Card>
      </Col>
      <Col xs="12" md="6">
        <Card class="mb-3">
          <CardHeader>
            <CardTitle>Analog Inputs</CardTitle>
          </CardHeader>
          <CardBody>
            <ListGroup>
              <ListGroupItem>
                <RangeSlider
                  name="Red analog"
                  unit="V"
                  bind:value={red_bar}
                  max_value={15}
                />
              </ListGroupItem>
              <ListGroupItem>
                <RangeSlider
                  name="Green analog"
                  unit="V"
                  bind:value={green_bar}
                  color="green"
                  max_value={15}
                />
              </ListGroupItem>
              <ListGroupItem>
                <RangeSlider
                  name="Blue analog"
                  unit="V"
                  bind:value={blue_bar}
                  color="blue"
                  max_value={200}
                />
              </ListGroupItem>
              <ListGroupItem>
                <RangeSlider
                  name="Yellow analog"
                  unit="V"
                  bind:value={yellow_bar}
                  color="yellow"
                  max_value={15}
                />
              </ListGroupItem>
            </ListGroup>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
</main>

<style>
  main {
    text-align: left;
    margin-top: 10%;
    padding: 1px 16px;
    height: 100%;
    width: 89%;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
