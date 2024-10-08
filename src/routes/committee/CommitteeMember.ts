export enum CommitteeRole {
  None, // None is necessary because 0 is a falsey value. Checking the enum exists will return false for value 0.
  Chair,
  Secretary,
  Treasurer,
  MatchSecretary,
  WelfareOfficer,
  SocialSecretary
}

export interface CommitteeMember {
  name: string;
  role?: CommitteeRole;
}
