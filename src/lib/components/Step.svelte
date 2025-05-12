<script>
    let { step } = $props();
</script>
<div class="step" data-step={step}>
    <p>STEP {step}</p>
</div>
<style lang="stylus">
    .step
        opacity 0
        padding 1rem
</style>