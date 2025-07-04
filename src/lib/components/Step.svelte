<script>
    let { step,content,tag } = $props();
</script>
<div class="step" data-step={step}>
    {#if tag === 'h2'}
        <h2>{content}</h2>
    {:else}
        <p>{content}</p>
    {/if}
</div>
<style lang="stylus">
.step
    h2,p 
        background #fff
        border-radius 5px
        width fit-content
        margin auto
        padding 1rem
</style>