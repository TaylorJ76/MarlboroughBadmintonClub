<script lang="ts">
  import { type CommitteeMember, CommitteeRole } from './CommitteeMember';
  import { UserRound } from 'lucide-svelte';
  import { base } from '$app/paths';

  export let member: CommitteeMember;

  const portraitPath = `${base}/portraits/${member.portrait}`;

  function roleToString(role: CommitteeRole) {
    switch (role) {
      case CommitteeRole.Chair:
        return 'Chair';
      case CommitteeRole.Secretary:
        return 'Secretary';
      case CommitteeRole.Treasurer:
        return 'Treasurer';
      case CommitteeRole.MatchSecretary:
        return 'Match Secretary';
      case CommitteeRole.WelfareOfficer:
        return 'Welfare Officer';
      case CommitteeRole.SocialSecretary:
        return 'Social Secretary';
      default:
        return 'Unknown';
    }
  }
</script>

<div class="flex space-x-4 items-center">
  {#if member.portrait}
    <img class="h-32 w-32 rounded-full" src={portraitPath} alt={member.name} />
  {:else}
    <div class="flex h-32 w-32 rounded-full items-center justify-center bg-gray-200 dark:bg-gray-700">
      <UserRound class="h-24 w-24 rounded-full" />
    </div>
  {/if}

  <div>
    <p>{member.name}</p>
    {#if member.role}
      <p>{roleToString(member.role)}</p>
    {/if}
  </div>
</div>
