<script>
    import { Step } from '$lib';
</script>
<div class="scroll__text">
    <Step step='1' content='This is step 1 heading' tag='h2' />
    <Step step='2' content='This is step 2 with a paragraph tag. It is more detailed than a heading.' tag='p'  />
    <Step step='3' content='This is step 3 with a paragraph tag. It is more detailed than a heading.' tag='p'  />
    <Step step='4' content='This is step 4 heading' tag='h2'  />
</div>
<style lang="stylus">
.scroll__text
    position relative
    padding 0 1rem
    margin auto
    text-align center
    z-index 1
</style>