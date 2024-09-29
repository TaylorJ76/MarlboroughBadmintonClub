import type { ComponentType } from 'svelte';

export interface MenuItem {
  name: string;
  route: string;
  icon: ComponentType;
}
