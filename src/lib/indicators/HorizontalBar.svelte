<script lang="ts">
    import { onMount } from "svelte";
    import { Col, Container, Row } from "sveltestrap";
    import newUniqueId from "locally-unique-id-generator";

    export let value = 0;
    export let min_value = 0;
    export let max_value: number;
    export let min_ok: number = undefined;
    export let max_ok: number = undefined;
    export let name: string;
    export let unit: string;
    export let color = "red";

    const id = newUniqueId();

    $: {
        try {
            updateValue(value);
        } finally {
        }
    }

    let ctx: CanvasRenderingContext2D;
    let yc: number;
    let h: number;
    let w: number;
    let r: number;

    const RANGE = max_value - min_value;

    function init() {
        let canvas = document.getElementById(id) as HTMLCanvasElement;
        w = document.getElementById("row-" + id).offsetWidth;
        if (canvas.getContext) {
            canvas.width = w;
            h = canvas.height;

            yc = 0.25 * canvas.height;
            r = 0.125 * canvas.height;

            ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
            clean();
        }
        updateValue(value);
    }

    function clean() {
        ctx.fillStyle = "lightgray";
        ctx.beginPath();
        ctx.fillRect(r, r, w - 2 * r, 2 * r);
        ctx.arc(r + 1, 2 * r, r, Math.PI / 2, -Math.PI / 2, false);
        ctx.arc(w - r - 1, 2 * r, r, Math.PI / 2, -Math.PI / 2, true);
        ctx.fill();
    }

    function updateValue(value: number) {
        if (ctx != undefined) {
            if (value >= min_value && value <= max_value) {
                clean();
                // Trace bar
                ctx.fillStyle = color;
                const x = (w * (value - min_value)) / RANGE;
                ctx.beginPath();
                if (x < r) {
                    const angle = Math.PI - Math.acos((r - x) / r);
                    ctx.arc(r + 1, 2 * r, r, angle, -angle, false);
                } else {
                    ctx.arc(r + 1, 2 * r, r, Math.PI / 2, -Math.PI / 2, false);
                    ctx.fillRect(r, r, x - r, 2 * r);
                }
                ctx.fill();
            } else {
            }
        }
    }

    // Do the job once the DOM was generated
    onMount(init);
</script>

<Container>
    <Row class="text">
        <Col xs="6">{name}</Col>
        <Col xs="6">
            <div class="float-end">
                <strong class="h4">{value.toFixed(2)}</strong>
                <span class="text-muted">{unit}</span>
            </div>
        </Col>
    </Row>
    <Row id="row-{id}">
        <canvas {id} height="24px" class="bar" />
    </Row>
</Container>

<style>
    .bar {
        padding: 0;
        height: 24px;
    }
</style>
