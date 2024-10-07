<script lang="ts">
  import { type CommitteeMember, CommitteeRole } from './CommitteeMember';
  import CommitteeListItem from './CommitteeListItem.svelte';

  const committeeMembers: CommitteeMember[] = [
    {
      role: CommitteeRole.Secretary,
      preferredName: 'Nick',
      firstName: 'Nick',
      lastName: 'Darlow'
    }
  ];
</script>

<div class="space-y-4">
  <h1>Committee</h1>

  <p>
    The committee ensures the smooth operation and management of the club. It is responsible for the administration, organisation, finances and policies of the
    club.
  </p>

  <h2>Committee members</h2>

  {#each committeeMembers as member}
    <CommitteeListItem {member} />
  {/each}
</div>
