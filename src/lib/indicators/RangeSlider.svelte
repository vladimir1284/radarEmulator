<script lang="ts">
    import { onMount } from "svelte";
    import {
        Col,
        Container,
        Row,
        Input,
        InputGroupText,
        InputGroup,
        Label,
        FormGroup,
    } from "sveltestrap";
    import newUniqueId from "locally-unique-id-generator";
    import "toolcool-range-slider";

    export let value = 0;
    export let min_value = 0;
    export let max_value: number;
    export let name: string;
    export let unit: string;
    export let color = "red";

    const id = newUniqueId();
    const RANGE = max_value - min_value;

    let slider;

    function getValue(evt) {
        value =
            Math.round(((evt.detail.value / 100) * RANGE + min_value) * 100) /
            100;
    }
    function updateFromInput(evt) {
        slider.value = (100 * (evt.srcElement.value - min_value)) / RANGE;
    }

    onMount(() => {
        slider = document.getElementById("slider-" + id);
        slider.value = (100 * (value - min_value)) / RANGE;
    });
</script>

<Container class="mb-1">
    <Row class="text mb-2">
        <FormGroup>
            <Label for="input-{id}">{name}</Label>
            <InputGroup>
                <Input
                    id="input-{id}"
                    bind:value
                    on:change={updateFromInput}
                    min={min_value}
                    max={max_value}
                    type="number"
                    step="0.01"
                />
                <InputGroupText>{unit}</InputGroupText>
            </InputGroup>
        </FormGroup>
    </Row>
    <Row id="row-{id}">
        <tc-range-slider
            on:change={getValue}
            slider-height="6px"
            slider-bg-hover="silver"
            slider-bg-fill={color}
            id="slider-{id}"
            slider-width="100%"
        />
    </Row>
</Container>

<style>
</style>
