<script lang="ts">
    export let checked = false;
    export let disabled = false;
</script>

<label flex items-center class={ disabled ? 'cursor-not-allowed' : 'cursor-pointer'}>
    <div mr-1 flex item-center>
        <input type="checkbox" display-none bind:checked="{checked}" disabled="{disabled}" >
        <div i-ri-checkbox-blank-line icon-btn class={ checked ? 'text-#eb3324' : '' } />
        <div i-ri-checkbox-fill absolute icon-btn class={ !checked ? 'scale-0' : 'text-#eb3324' } transition-all />
    </div>
    <slot />
</label>