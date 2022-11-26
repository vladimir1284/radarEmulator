<script lang="ts">
    import { Col, Container, Row } from "sveltestrap";
    import newUniqueId from "locally-unique-id-generator";

    export let color = "red";
    export let name = "Digital Input";
    export let value = false;

    const id = newUniqueId();
</script>

<Row>
    <Col xs="8"><span>{name}</span></Col>
    <Col xs="4">
        <div class="case float-end">
            <input bind:checked={value} type="checkbox" id="switch-{id}" />
            <label for="switch-{id}" class={color}>Toggle</label>
        </div>
    </Col>
</Row>

<style>
    input[type="checkbox"] {
        height: 0;
        width: 0;
        visibility: hidden;
    }

    label {
        cursor: pointer;
        text-indent: -9999px;
        width: 48px;
        height: 24px;
        display: block;
        border-radius: 24px;
        position: relative;
    }

    .red {
        background: #661414;
    }
    input:checked + label.red {
        background: #f00;
        box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px,
            rgba(255, 0, 0, 0.5) 0 2px 12px;
    }
    .green {
        background: #3f5e01;
    }
    input:checked + label.green {
        background: #abff00;
        box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #304701 0 -1px 9px,
            #89ff00 0 2px 12px;
    }
    .blue {
        background: #006;
    }
    input:checked + label.blue {
        background-color: #24e0ff;
        box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #006 0 -1px 9px,
            #3f8cff 0 2px 14px;
    }
    .yellow {
        background: #979710;
    }
    input:checked + label.yellow {
        background-color: #ff0;
        box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px,
            #ff0 0 2px 12px;
    }

    label:after {
        content: "";
        position: absolute;
        top: 1px;
        left: 1px;
        width: 22px;
        height: 22px;
        background: #fff;
        border-radius: 22px;
        transition: 0.3s;
    }

    input:checked + label:after {
        left: calc(100% - 2px);
        transform: translateX(-100%);
    }

    label:active:after {
        width: 30px;
    }

    .case {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 24px;
        width: 48px;
    }
</style>
