<script>
    let { step } = $props();
</script>
<div class="step" data-step={step}>
    <!--<p>STEP {step}</p>-->
    <img src="https://picsum.photos/id/{step}/800/600" alt="Step {step}" />
</div>
<style lang="stylus">
.step
    opacity 0
    transition all 1s ease-in-out
    z-index 0
    overflow-y hidden
    width 100%
    img
        width 100%
        height auto
</style>