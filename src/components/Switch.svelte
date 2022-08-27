<script lang="ts">
    export let checked = false;
    export let disabled = false;
</script>

<label flex items-center class={ disabled ? 'cursor-not-allowed' : 'cursor-pointer'}>
    <div mr-1 flex item-center>
        <input type="checkbox" display-none bind:checked="{checked}" disabled="{disabled}" >
        <div 
            rounded-full transition-all flex items-center
            class="w-2rem h-1.2rem {checked ? 'bg-#eb3324 shadow' : 'bg-zinc/30'}" 
        >
            <div w-1rem h-1rem bg-white rounded-full transition-all class="{checked ? 'ml-0.9rem shadow' : 'ml-0.1rem'}" />
        </div>
    </div>
    <slot />
</label>