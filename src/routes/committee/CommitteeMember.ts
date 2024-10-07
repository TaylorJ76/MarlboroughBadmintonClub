export enum CommitteeRole {
  Chair,
  Secretary
}

export interface CommitteeMember {
  role: CommitteeRole;
  preferredName: string;
  firstName: string;
  lastName: string;
  photo?: string;
}
