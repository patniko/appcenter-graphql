const Queries = `
distribute(owner: String! app: String!): Distribute
`;

const Types = `
type Distribute {
  releases: [Release]
  distribution_groups: [DistributionGroup]
}

`;

export default { Queries, Types };