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

  import { Serial } from "./lib/server";

  const name = "RadarEmulator";
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

  let serial = new Serial({
    port: "/dev/ttyUSB0",
    baudrate: 19200,
    inter_byte_timeout: 3,
  });
  console.log(serial);
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
                <DigitalOutput />
              </ListGroupItem>
              <ListGroupItem>
                <DigitalOutput color="green" />
              </ListGroupItem>
              <ListGroupItem>
                <DigitalOutput color="blue" />
              </ListGroupItem>
              <ListGroupItem>
                <DigitalOutput color="yellow" />
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
