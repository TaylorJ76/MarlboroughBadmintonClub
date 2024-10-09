<script lang="ts">
  import type { MenuItem } from '../types';
  import { base } from '$app/paths';
  export let menuItems: MenuItem[] = [];
</script>

<nav>
  <ul>
    {#each menuItems as item}
      <li>
        <a class="flex items-center p-2" href={base + item.route}>
          <span>{item.name}</span>
        </a>
      </li>
    {/each}
  </ul>
</nav>
