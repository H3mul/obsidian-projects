<script lang="ts">
  import { Icon } from "obsidian-svelte";

  export let icon: string = ""
  export let content: string | number;
  export let display: (content: string | number) => boolean = (content) => !!content
</script>

{#if display(content)}
<div class=task-indicator>
  <Icon name="{icon}" />
  <span>{content}</span>
</div>
{/if}

<style>
  div.task-indicator {
    display: flex;
    gap: 4px;
    align-items: center;
  }
</style>