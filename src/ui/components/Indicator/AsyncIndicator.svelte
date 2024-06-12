<script lang="ts">
  import { Indicator } from ".";

  export let icon: string = ""
  export let content: () => Promise<string | number>;
  export let display: (content: string | number) => boolean = (content) => !!content
</script>

{#await content() then content}
<Indicator {content} {icon} {display} />
{/await}
