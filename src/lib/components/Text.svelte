<script>
    import { Step } from '$lib';
</script>
<!-- <div class="spacer" style="height: 100vh;"></div> -->
<div class="scroll__text">
    <Step step='1' content='This is step 1 heading' tag='h2' />
    <Step step='2' content='This is step 2 with a paragraph tag. It is more detailed than a heading.' tag='p'  />
    <Step step='3' content='This is step 3 with a paragraph tag. It is more detailed than a heading.' tag='p'  />
    <Step step='4' content='This is step 4 heading' tag='h2'  />
    <Step step='5' content='This is step 5 with a paragraph tag. It is more detailed than a heading.' tag='p'  />
    <Step step='6' content='This is step 6 with a paragraph tag. It is more detailed than a heading.' tag='p'  />
    <Step step='7' content='This is step 7 with a paragraph tag. It is more detailed than a heading.' tag='p'  />
</div>
<style lang="stylus">
    .scroll__text
        position relative
        padding 0 1rem
        max-width none
        z-index 1
</style>