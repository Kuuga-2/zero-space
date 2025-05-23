export default [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "blocksPerEpoch_",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "deployDelay_",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [],
      name: "InvalidSubmission",
      type: "error",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "price",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "paid",
          type: "uint256",
        },
      ],
      name: "NotEnoughFee",
      type: "error",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "index",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "bytes32",
          name: "startMerkleRoot",
          type: "bytes32",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "submissionIndex",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "flowLength",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "bytes32",
          name: "context",
          type: "bytes32",
        },
      ],
      name: "NewEpoch",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "Paused",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "previousAdminRole",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "newAdminRole",
          type: "bytes32",
        },
      ],
      name: "RoleAdminChanged",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address",
        },
      ],
      name: "RoleGranted",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address",
        },
      ],
      name: "RoleRevoked",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address",
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "identity",
          type: "bytes32",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "submissionIndex",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "startPos",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "length",
          type: "uint256",
        },
        {
          components: [
            {
              internalType: "uint256",
              name: "length",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "tags",
              type: "bytes",
            },
            {
              components: [
                {
                  internalType: "bytes32",
                  name: "root",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "height",
                  type: "uint256",
                },
              ],
              internalType: "struct SubmissionNode[]",
              name: "nodes",
              type: "tuple[]",
            },
          ],
          indexed: false,
          internalType: "struct Submission",
          name: "submission",
          type: "tuple",
        },
      ],
      name: "Submit",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "Unpaused",
      type: "event",
    },
    {
      inputs: [],
      name: "DEFAULT_ADMIN_ROLE",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "PAUSER_ROLE",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "length",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "tags",
              type: "bytes",
            },
            {
              components: [
                {
                  internalType: "bytes32",
                  name: "root",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "height",
                  type: "uint256",
                },
              ],
              internalType: "struct SubmissionNode[]",
              name: "nodes",
              type: "tuple[]",
            },
          ],
          internalType: "struct Submission[]",
          name: "submissions",
          type: "tuple[]",
        },
      ],
      name: "batchSubmit",
      outputs: [
        {
          internalType: "uint256[]",
          name: "indexes",
          type: "uint256[]",
        },
        {
          internalType: "bytes32[]",
          name: "digests",
          type: "bytes32[]",
        },
        {
          internalType: "uint256[]",
          name: "startIndexes",
          type: "uint256[]",
        },
        {
          internalType: "uint256[]",
          name: "lengths",
          type: "uint256[]",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "blocksPerEpoch",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "epoch",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "epochStartPosition",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "firstBlock",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getContext",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "epoch",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "mineStart",
              type: "uint256",
            },
            {
              internalType: "bytes32",
              name: "flowRoot",
              type: "bytes32",
            },
            {
              internalType: "uint256",
              name: "flowLength",
              type: "uint256",
            },
            {
              internalType: "bytes32",
              name: "blockDigest",
              type: "bytes32",
            },
            {
              internalType: "bytes32",
              name: "digest",
              type: "bytes32",
            },
          ],
          internalType: "struct MineContext",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "digest",
          type: "bytes32",
        },
      ],
      name: "getEpochRange",
      outputs: [
        {
          components: [
            {
              internalType: "uint128",
              name: "start",
              type: "uint128",
            },
            {
              internalType: "uint128",
              name: "end",
              type: "uint128",
            },
          ],
          internalType: "struct EpochRange",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
      ],
      name: "getRoleAdmin",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "uint256",
          name: "index",
          type: "uint256",
        },
      ],
      name: "getRoleMember",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
      ],
      name: "getRoleMemberCount",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "grantRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "hasRole",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "market_",
          type: "address",
        },
      ],
      name: "initialize",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "initialized",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "makeContext",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "cnt",
          type: "uint256",
        },
      ],
      name: "makeContextFixedTimes",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "makeContextWithResult",
      outputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "epoch",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "mineStart",
              type: "uint256",
            },
            {
              internalType: "bytes32",
              name: "flowRoot",
              type: "bytes32",
            },
            {
              internalType: "uint256",
              name: "flowLength",
              type: "uint256",
            },
            {
              internalType: "bytes32",
              name: "blockDigest",
              type: "bytes32",
            },
            {
              internalType: "bytes32",
              name: "digest",
              type: "bytes32",
            },
          ],
          internalType: "struct MineContext",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "market",
      outputs: [
        {
          internalType: "address payable",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "numSubmissions",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "pause",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "paused",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint128",
          name: "targetPosition",
          type: "uint128",
        },
      ],
      name: "queryContextAtPosition",
      outputs: [
        {
          components: [
            {
              internalType: "uint128",
              name: "start",
              type: "uint128",
            },
            {
              internalType: "uint128",
              name: "end",
              type: "uint128",
            },
            {
              internalType: "bytes32",
              name: "digest",
              type: "bytes32",
            },
          ],
          internalType: "struct EpochRangeWithContextDigest",
          name: "range",
          type: "tuple",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "renounceRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "revokeRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "rootHistory",
      outputs: [
        {
          internalType: "contract IDigestHistory",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "submissionIndex",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: "uint256",
              name: "length",
              type: "uint256",
            },
            {
              internalType: "bytes",
              name: "tags",
              type: "bytes",
            },
            {
              components: [
                {
                  internalType: "bytes32",
                  name: "root",
                  type: "bytes32",
                },
                {
                  internalType: "uint256",
                  name: "height",
                  type: "uint256",
                },
              ],
              internalType: "struct SubmissionNode[]",
              name: "nodes",
              type: "tuple[]",
            },
          ],
          internalType: "struct Submission",
          name: "submission",
          type: "tuple",
        },
      ],
      name: "submit",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes4",
          name: "interfaceId",
          type: "bytes4",
        },
      ],
      name: "supportsInterface",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "tree",
      outputs: [
        {
          internalType: "uint256",
          name: "currentLength",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "unstagedHeight",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "unpause",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ] as const;