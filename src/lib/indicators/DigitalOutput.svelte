<script lang="ts">
    import { Col, Container, Row } from "sveltestrap";

    export let color = "red";
    export let name = "Digital Input";
    export let value = "on";
</script>

<Row>
    <Col xs="10"><span>{name}</span></Col>
    <Col xs="2"><div class="led-{color} {color}-{value}" /></Col>
</Row>

<style>
    .led-red {
        margin: 0 auto;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: #661414;
    }
    .red-on {
        background-color: #f00;
        box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
            rgba(255, 0, 0, 0.5) 0 2px 12px;
    }
    .led-yellow {
        margin: 0 auto;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: #979710;
    }
    .yellow-on {
        background-color: #ff0;
        box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px,
            #ff0 0 2px 12px;
    }
    .led-green {
        margin: 0 auto;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: #3f5e01;
    }
    .green-on {
        background-color: #abff00;
        box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #304701 0 -1px 9px,
            #89ff00 0 2px 12px;
    }
    .led-blue {
        margin: 0 auto;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: rgb(2, 2, 161);
    }
    .blue-on {
        background-color: #24e0ff;
        box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #006 0 -1px 9px,
            #3f8cff 0 2px 14px;
    }
</style>
