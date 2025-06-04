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
    transition all 1s ease-in-out

.step
    p
        font-size 2rem
        font-weight 700
        color #a4a4a4
</style>