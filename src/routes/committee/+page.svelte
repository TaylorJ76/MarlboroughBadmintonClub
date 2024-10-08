<script lang="ts">
  import { type CommitteeMember, CommitteeRole } from './CommitteeMember';
  import CommitteeListItem from './CommitteeListItem.svelte';

  const committeeMembers: CommitteeMember[] = [
    {
      name: 'Jodie Gray',
      role: CommitteeRole.Chair
    },
    {
      name: 'Nick Darlow',
      role: CommitteeRole.Secretary
    },
    {
      name: 'Es Collins',
      role: CommitteeRole.Treasurer
    },
    {
      name: 'Simon Mills',
      role: CommitteeRole.MatchSecretary
    },
    {
      name: 'Dilushi Jayasingha (DJ)',
      role: CommitteeRole.WelfareOfficer
    },
    {
      name: 'Hung Tran',
      role: CommitteeRole.SocialSecretary
    },
    {
      name: 'Phil Hassell'
    },
    {
      name: 'Ruta Seske'
    },
    {
      name: 'Tim Zollman'
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
