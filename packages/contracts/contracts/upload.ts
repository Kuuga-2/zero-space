import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// standardStorage
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const standardStorageAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'blocksPerEpoch_', internalType: 'uint256', type: 'uint256' },
      { name: 'deployDelay_', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'InvalidSubmission' },
  {
    type: 'error',
    inputs: [
      { name: 'price', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'paid', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'NotEnoughFee',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'index',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'startMerkleRoot',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'submissionIndex',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'flowLength',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'context',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
    ],
    name: 'NewEpoch',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Paused',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'identity',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'submissionIndex',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'startPos',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'length',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'submission',
        internalType: 'struct Submission',
        type: 'tuple',
        components: [
          { name: 'length', internalType: 'uint256', type: 'uint256' },
          { name: 'tags', internalType: 'bytes', type: 'bytes' },
          {
            name: 'nodes',
            internalType: 'struct SubmissionNode[]',
            type: 'tuple[]',
            components: [
              { name: 'root', internalType: 'bytes32', type: 'bytes32' },
              { name: 'height', internalType: 'uint256', type: 'uint256' },
            ],
          },
        ],
        indexed: false,
      },
    ],
    name: 'Submit',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Unpaused',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'PAUSER_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'submissions',
        internalType: 'struct Submission[]',
        type: 'tuple[]',
        components: [
          { name: 'length', internalType: 'uint256', type: 'uint256' },
          { name: 'tags', internalType: 'bytes', type: 'bytes' },
          {
            name: 'nodes',
            internalType: 'struct SubmissionNode[]',
            type: 'tuple[]',
            components: [
              { name: 'root', internalType: 'bytes32', type: 'bytes32' },
              { name: 'height', internalType: 'uint256', type: 'uint256' },
            ],
          },
        ],
      },
    ],
    name: 'batchSubmit',
    outputs: [
      { name: 'indexes', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'digests', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'startIndexes', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'lengths', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'blocksPerEpoch',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'epoch',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'epochStartPosition',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'firstBlock',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getContext',
    outputs: [
      {
        name: '',
        internalType: 'struct MineContext',
        type: 'tuple',
        components: [
          { name: 'epoch', internalType: 'uint256', type: 'uint256' },
          { name: 'mineStart', internalType: 'uint256', type: 'uint256' },
          { name: 'flowRoot', internalType: 'bytes32', type: 'bytes32' },
          { name: 'flowLength', internalType: 'uint256', type: 'uint256' },
          { name: 'blockDigest', internalType: 'bytes32', type: 'bytes32' },
          { name: 'digest', internalType: 'bytes32', type: 'bytes32' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'digest', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getEpochRange',
    outputs: [
      {
        name: '',
        internalType: 'struct EpochRange',
        type: 'tuple',
        components: [
          { name: 'start', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getRoleMember',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleMemberCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'market_', internalType: 'address', type: 'address' }],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'initialized',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'makeContext',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'cnt', internalType: 'uint256', type: 'uint256' }],
    name: 'makeContextFixedTimes',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'makeContextWithResult',
    outputs: [
      {
        name: '',
        internalType: 'struct MineContext',
        type: 'tuple',
        components: [
          { name: 'epoch', internalType: 'uint256', type: 'uint256' },
          { name: 'mineStart', internalType: 'uint256', type: 'uint256' },
          { name: 'flowRoot', internalType: 'bytes32', type: 'bytes32' },
          { name: 'flowLength', internalType: 'uint256', type: 'uint256' },
          { name: 'blockDigest', internalType: 'bytes32', type: 'bytes32' },
          { name: 'digest', internalType: 'bytes32', type: 'bytes32' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'market',
    outputs: [{ name: '', internalType: 'address payable', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'numSubmissions',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targetPosition', internalType: 'uint128', type: 'uint128' },
    ],
    name: 'queryContextAtPosition',
    outputs: [
      {
        name: 'range',
        internalType: 'struct EpochRangeWithContextDigest',
        type: 'tuple',
        components: [
          { name: 'start', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'digest', internalType: 'bytes32', type: 'bytes32' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'rootHistory',
    outputs: [
      { name: '', internalType: 'contract IDigestHistory', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'submissionIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'submission',
        internalType: 'struct Submission',
        type: 'tuple',
        components: [
          { name: 'length', internalType: 'uint256', type: 'uint256' },
          { name: 'tags', internalType: 'bytes', type: 'bytes' },
          {
            name: 'nodes',
            internalType: 'struct SubmissionNode[]',
            type: 'tuple[]',
            components: [
              { name: 'root', internalType: 'bytes32', type: 'bytes32' },
              { name: 'height', internalType: 'uint256', type: 'uint256' },
            ],
          },
        ],
      },
    ],
    name: 'submit',
    outputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tree',
    outputs: [
      { name: 'currentLength', internalType: 'uint256', type: 'uint256' },
      { name: 'unstagedHeight', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const standardStorageAddress = {
  16600: '0x0460aA47b41a66694c0a73f667a1b795A5ED3556',
} as const

/**
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const standardStorageConfig = {
  address: standardStorageAddress,
  abi: standardStorageAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// turboStorage
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const turboStorageAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'blocksPerEpoch_', internalType: 'uint256', type: 'uint256' },
      { name: 'deployDelay_', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'InvalidSubmission' },
  {
    type: 'error',
    inputs: [
      { name: 'price', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'paid', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'NotEnoughFee',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'index',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'startMerkleRoot',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'submissionIndex',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'flowLength',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'context',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
    ],
    name: 'NewEpoch',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Paused',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'previousAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'newAdminRole',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'RoleAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32', indexed: true },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RoleRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'identity',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'submissionIndex',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'startPos',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'length',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'submission',
        internalType: 'struct Submission',
        type: 'tuple',
        components: [
          { name: 'length', internalType: 'uint256', type: 'uint256' },
          { name: 'tags', internalType: 'bytes', type: 'bytes' },
          {
            name: 'nodes',
            internalType: 'struct SubmissionNode[]',
            type: 'tuple[]',
            components: [
              { name: 'root', internalType: 'bytes32', type: 'bytes32' },
              { name: 'height', internalType: 'uint256', type: 'uint256' },
            ],
          },
        ],
        indexed: false,
      },
    ],
    name: 'Submit',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Unpaused',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DEFAULT_ADMIN_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'PAUSER_ROLE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'submissions',
        internalType: 'struct Submission[]',
        type: 'tuple[]',
        components: [
          { name: 'length', internalType: 'uint256', type: 'uint256' },
          { name: 'tags', internalType: 'bytes', type: 'bytes' },
          {
            name: 'nodes',
            internalType: 'struct SubmissionNode[]',
            type: 'tuple[]',
            components: [
              { name: 'root', internalType: 'bytes32', type: 'bytes32' },
              { name: 'height', internalType: 'uint256', type: 'uint256' },
            ],
          },
        ],
      },
    ],
    name: 'batchSubmit',
    outputs: [
      { name: 'indexes', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'digests', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'startIndexes', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'lengths', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'blocksPerEpoch',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'epoch',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'epochStartPosition',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'firstBlock',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getContext',
    outputs: [
      {
        name: '',
        internalType: 'struct MineContext',
        type: 'tuple',
        components: [
          { name: 'epoch', internalType: 'uint256', type: 'uint256' },
          { name: 'mineStart', internalType: 'uint256', type: 'uint256' },
          { name: 'flowRoot', internalType: 'bytes32', type: 'bytes32' },
          { name: 'flowLength', internalType: 'uint256', type: 'uint256' },
          { name: 'blockDigest', internalType: 'bytes32', type: 'bytes32' },
          { name: 'digest', internalType: 'bytes32', type: 'bytes32' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'digest', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getEpochRange',
    outputs: [
      {
        name: '',
        internalType: 'struct EpochRange',
        type: 'tuple',
        components: [
          { name: 'start', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleAdmin',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getRoleMember',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'role', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getRoleMemberCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'grantRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'hasRole',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'market_', internalType: 'address', type: 'address' }],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'initialized',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'makeContext',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'cnt', internalType: 'uint256', type: 'uint256' }],
    name: 'makeContextFixedTimes',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'makeContextWithResult',
    outputs: [
      {
        name: '',
        internalType: 'struct MineContext',
        type: 'tuple',
        components: [
          { name: 'epoch', internalType: 'uint256', type: 'uint256' },
          { name: 'mineStart', internalType: 'uint256', type: 'uint256' },
          { name: 'flowRoot', internalType: 'bytes32', type: 'bytes32' },
          { name: 'flowLength', internalType: 'uint256', type: 'uint256' },
          { name: 'blockDigest', internalType: 'bytes32', type: 'bytes32' },
          { name: 'digest', internalType: 'bytes32', type: 'bytes32' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'market',
    outputs: [{ name: '', internalType: 'address payable', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'numSubmissions',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'targetPosition', internalType: 'uint128', type: 'uint128' },
    ],
    name: 'queryContextAtPosition',
    outputs: [
      {
        name: 'range',
        internalType: 'struct EpochRangeWithContextDigest',
        type: 'tuple',
        components: [
          { name: 'start', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'digest', internalType: 'bytes32', type: 'bytes32' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'renounceRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'role', internalType: 'bytes32', type: 'bytes32' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'revokeRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'rootHistory',
    outputs: [
      { name: '', internalType: 'contract IDigestHistory', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'submissionIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'submission',
        internalType: 'struct Submission',
        type: 'tuple',
        components: [
          { name: 'length', internalType: 'uint256', type: 'uint256' },
          { name: 'tags', internalType: 'bytes', type: 'bytes' },
          {
            name: 'nodes',
            internalType: 'struct SubmissionNode[]',
            type: 'tuple[]',
            components: [
              { name: 'root', internalType: 'bytes32', type: 'bytes32' },
              { name: 'height', internalType: 'uint256', type: 'uint256' },
            ],
          },
        ],
      },
    ],
    name: 'submit',
    outputs: [
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tree',
    outputs: [
      { name: 'currentLength', internalType: 'uint256', type: 'uint256' },
      { name: 'unstagedHeight', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const turboStorageAddress = {
  16600: '0xbD2C3F0E65eDF5582141C35969d66e34629cC768',
} as const

/**
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const turboStorageConfig = {
  address: turboStorageAddress,
  abi: turboStorageAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link standardStorageAbi}__
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useReadStandardStorage = /*#__PURE__*/ createUseReadContract({
  abi: standardStorageAbi,
  address: standardStorageAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useReadStandardStorageDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"PAUSER_ROLE"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useReadStandardStoragePauserRole =
  /*#__PURE__*/ createUseReadContract({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    functionName: 'PAUSER_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"blocksPerEpoch"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useReadStandardStorageBlocksPerEpoch =
  /*#__PURE__*/ createUseReadContract({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    functionName: 'blocksPerEpoch',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"epoch"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useReadStandardStorageEpoch = /*#__PURE__*/ createUseReadContract({
  abi: standardStorageAbi,
  address: standardStorageAddress,
  functionName: 'epoch',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"epochStartPosition"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useReadStandardStorageEpochStartPosition =
  /*#__PURE__*/ createUseReadContract({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    functionName: 'epochStartPosition',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"firstBlock"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useReadStandardStorageFirstBlock =
  /*#__PURE__*/ createUseReadContract({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    functionName: 'firstBlock',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"getContext"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useReadStandardStorageGetContext =
  /*#__PURE__*/ createUseReadContract({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    functionName: 'getContext',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"getEpochRange"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useReadStandardStorageGetEpochRange =
  /*#__PURE__*/ createUseReadContract({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    functionName: 'getEpochRange',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"getRoleAdmin"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useReadStandardStorageGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"getRoleMember"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useReadStandardStorageGetRoleMember =
  /*#__PURE__*/ createUseReadContract({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    functionName: 'getRoleMember',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"getRoleMemberCount"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useReadStandardStorageGetRoleMemberCount =
  /*#__PURE__*/ createUseReadContract({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    functionName: 'getRoleMemberCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"hasRole"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useReadStandardStorageHasRole =
  /*#__PURE__*/ createUseReadContract({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    functionName: 'hasRole',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"initialized"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useReadStandardStorageInitialized =
  /*#__PURE__*/ createUseReadContract({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    functionName: 'initialized',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"market"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useReadStandardStorageMarket = /*#__PURE__*/ createUseReadContract(
  {
    abi: standardStorageAbi,
    address: standardStorageAddress,
    functionName: 'market',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"numSubmissions"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useReadStandardStorageNumSubmissions =
  /*#__PURE__*/ createUseReadContract({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    functionName: 'numSubmissions',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"paused"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useReadStandardStoragePaused = /*#__PURE__*/ createUseReadContract(
  {
    abi: standardStorageAbi,
    address: standardStorageAddress,
    functionName: 'paused',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"rootHistory"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useReadStandardStorageRootHistory =
  /*#__PURE__*/ createUseReadContract({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    functionName: 'rootHistory',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"submissionIndex"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useReadStandardStorageSubmissionIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    functionName: 'submissionIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"supportsInterface"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useReadStandardStorageSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"tree"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useReadStandardStorageTree = /*#__PURE__*/ createUseReadContract({
  abi: standardStorageAbi,
  address: standardStorageAddress,
  functionName: 'tree',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link standardStorageAbi}__
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useWriteStandardStorage = /*#__PURE__*/ createUseWriteContract({
  abi: standardStorageAbi,
  address: standardStorageAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"batchSubmit"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useWriteStandardStorageBatchSubmit =
  /*#__PURE__*/ createUseWriteContract({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    functionName: 'batchSubmit',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"grantRole"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useWriteStandardStorageGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useWriteStandardStorageInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"makeContext"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useWriteStandardStorageMakeContext =
  /*#__PURE__*/ createUseWriteContract({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    functionName: 'makeContext',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"makeContextFixedTimes"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useWriteStandardStorageMakeContextFixedTimes =
  /*#__PURE__*/ createUseWriteContract({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    functionName: 'makeContextFixedTimes',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"makeContextWithResult"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useWriteStandardStorageMakeContextWithResult =
  /*#__PURE__*/ createUseWriteContract({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    functionName: 'makeContextWithResult',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"pause"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useWriteStandardStoragePause =
  /*#__PURE__*/ createUseWriteContract({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    functionName: 'pause',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"queryContextAtPosition"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useWriteStandardStorageQueryContextAtPosition =
  /*#__PURE__*/ createUseWriteContract({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    functionName: 'queryContextAtPosition',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"renounceRole"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useWriteStandardStorageRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"revokeRole"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useWriteStandardStorageRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"submit"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useWriteStandardStorageSubmit =
  /*#__PURE__*/ createUseWriteContract({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    functionName: 'submit',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"unpause"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useWriteStandardStorageUnpause =
  /*#__PURE__*/ createUseWriteContract({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    functionName: 'unpause',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link standardStorageAbi}__
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useSimulateStandardStorage =
  /*#__PURE__*/ createUseSimulateContract({
    abi: standardStorageAbi,
    address: standardStorageAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"batchSubmit"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useSimulateStandardStorageBatchSubmit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    functionName: 'batchSubmit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"grantRole"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useSimulateStandardStorageGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useSimulateStandardStorageInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"makeContext"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useSimulateStandardStorageMakeContext =
  /*#__PURE__*/ createUseSimulateContract({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    functionName: 'makeContext',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"makeContextFixedTimes"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useSimulateStandardStorageMakeContextFixedTimes =
  /*#__PURE__*/ createUseSimulateContract({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    functionName: 'makeContextFixedTimes',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"makeContextWithResult"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useSimulateStandardStorageMakeContextWithResult =
  /*#__PURE__*/ createUseSimulateContract({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    functionName: 'makeContextWithResult',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"pause"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useSimulateStandardStoragePause =
  /*#__PURE__*/ createUseSimulateContract({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    functionName: 'pause',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"queryContextAtPosition"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useSimulateStandardStorageQueryContextAtPosition =
  /*#__PURE__*/ createUseSimulateContract({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    functionName: 'queryContextAtPosition',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"renounceRole"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useSimulateStandardStorageRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"revokeRole"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useSimulateStandardStorageRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"submit"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useSimulateStandardStorageSubmit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    functionName: 'submit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link standardStorageAbi}__ and `functionName` set to `"unpause"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useSimulateStandardStorageUnpause =
  /*#__PURE__*/ createUseSimulateContract({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    functionName: 'unpause',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link standardStorageAbi}__
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useWatchStandardStorageEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: standardStorageAbi,
    address: standardStorageAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link standardStorageAbi}__ and `eventName` set to `"NewEpoch"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useWatchStandardStorageNewEpochEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    eventName: 'NewEpoch',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link standardStorageAbi}__ and `eventName` set to `"Paused"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useWatchStandardStoragePausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    eventName: 'Paused',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link standardStorageAbi}__ and `eventName` set to `"RoleAdminChanged"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useWatchStandardStorageRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link standardStorageAbi}__ and `eventName` set to `"RoleGranted"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useWatchStandardStorageRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link standardStorageAbi}__ and `eventName` set to `"RoleRevoked"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useWatchStandardStorageRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link standardStorageAbi}__ and `eventName` set to `"Submit"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useWatchStandardStorageSubmitEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    eventName: 'Submit',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link standardStorageAbi}__ and `eventName` set to `"Unpaused"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0x0460aA47b41a66694c0a73f667a1b795A5ED3556)
 */
export const useWatchStandardStorageUnpausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: standardStorageAbi,
    address: standardStorageAddress,
    eventName: 'Unpaused',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link turboStorageAbi}__
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useReadTurboStorage = /*#__PURE__*/ createUseReadContract({
  abi: turboStorageAbi,
  address: turboStorageAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"DEFAULT_ADMIN_ROLE"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useReadTurboStorageDefaultAdminRole =
  /*#__PURE__*/ createUseReadContract({
    abi: turboStorageAbi,
    address: turboStorageAddress,
    functionName: 'DEFAULT_ADMIN_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"PAUSER_ROLE"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useReadTurboStoragePauserRole =
  /*#__PURE__*/ createUseReadContract({
    abi: turboStorageAbi,
    address: turboStorageAddress,
    functionName: 'PAUSER_ROLE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"blocksPerEpoch"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useReadTurboStorageBlocksPerEpoch =
  /*#__PURE__*/ createUseReadContract({
    abi: turboStorageAbi,
    address: turboStorageAddress,
    functionName: 'blocksPerEpoch',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"epoch"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useReadTurboStorageEpoch = /*#__PURE__*/ createUseReadContract({
  abi: turboStorageAbi,
  address: turboStorageAddress,
  functionName: 'epoch',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"epochStartPosition"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useReadTurboStorageEpochStartPosition =
  /*#__PURE__*/ createUseReadContract({
    abi: turboStorageAbi,
    address: turboStorageAddress,
    functionName: 'epochStartPosition',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"firstBlock"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useReadTurboStorageFirstBlock =
  /*#__PURE__*/ createUseReadContract({
    abi: turboStorageAbi,
    address: turboStorageAddress,
    functionName: 'firstBlock',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"getContext"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useReadTurboStorageGetContext =
  /*#__PURE__*/ createUseReadContract({
    abi: turboStorageAbi,
    address: turboStorageAddress,
    functionName: 'getContext',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"getEpochRange"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useReadTurboStorageGetEpochRange =
  /*#__PURE__*/ createUseReadContract({
    abi: turboStorageAbi,
    address: turboStorageAddress,
    functionName: 'getEpochRange',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"getRoleAdmin"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useReadTurboStorageGetRoleAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: turboStorageAbi,
    address: turboStorageAddress,
    functionName: 'getRoleAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"getRoleMember"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useReadTurboStorageGetRoleMember =
  /*#__PURE__*/ createUseReadContract({
    abi: turboStorageAbi,
    address: turboStorageAddress,
    functionName: 'getRoleMember',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"getRoleMemberCount"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useReadTurboStorageGetRoleMemberCount =
  /*#__PURE__*/ createUseReadContract({
    abi: turboStorageAbi,
    address: turboStorageAddress,
    functionName: 'getRoleMemberCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"hasRole"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useReadTurboStorageHasRole = /*#__PURE__*/ createUseReadContract({
  abi: turboStorageAbi,
  address: turboStorageAddress,
  functionName: 'hasRole',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"initialized"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useReadTurboStorageInitialized =
  /*#__PURE__*/ createUseReadContract({
    abi: turboStorageAbi,
    address: turboStorageAddress,
    functionName: 'initialized',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"market"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useReadTurboStorageMarket = /*#__PURE__*/ createUseReadContract({
  abi: turboStorageAbi,
  address: turboStorageAddress,
  functionName: 'market',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"numSubmissions"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useReadTurboStorageNumSubmissions =
  /*#__PURE__*/ createUseReadContract({
    abi: turboStorageAbi,
    address: turboStorageAddress,
    functionName: 'numSubmissions',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"paused"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useReadTurboStoragePaused = /*#__PURE__*/ createUseReadContract({
  abi: turboStorageAbi,
  address: turboStorageAddress,
  functionName: 'paused',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"rootHistory"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useReadTurboStorageRootHistory =
  /*#__PURE__*/ createUseReadContract({
    abi: turboStorageAbi,
    address: turboStorageAddress,
    functionName: 'rootHistory',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"submissionIndex"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useReadTurboStorageSubmissionIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: turboStorageAbi,
    address: turboStorageAddress,
    functionName: 'submissionIndex',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"supportsInterface"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useReadTurboStorageSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: turboStorageAbi,
    address: turboStorageAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"tree"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useReadTurboStorageTree = /*#__PURE__*/ createUseReadContract({
  abi: turboStorageAbi,
  address: turboStorageAddress,
  functionName: 'tree',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link turboStorageAbi}__
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useWriteTurboStorage = /*#__PURE__*/ createUseWriteContract({
  abi: turboStorageAbi,
  address: turboStorageAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"batchSubmit"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useWriteTurboStorageBatchSubmit =
  /*#__PURE__*/ createUseWriteContract({
    abi: turboStorageAbi,
    address: turboStorageAddress,
    functionName: 'batchSubmit',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"grantRole"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useWriteTurboStorageGrantRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: turboStorageAbi,
    address: turboStorageAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useWriteTurboStorageInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: turboStorageAbi,
    address: turboStorageAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"makeContext"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useWriteTurboStorageMakeContext =
  /*#__PURE__*/ createUseWriteContract({
    abi: turboStorageAbi,
    address: turboStorageAddress,
    functionName: 'makeContext',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"makeContextFixedTimes"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useWriteTurboStorageMakeContextFixedTimes =
  /*#__PURE__*/ createUseWriteContract({
    abi: turboStorageAbi,
    address: turboStorageAddress,
    functionName: 'makeContextFixedTimes',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"makeContextWithResult"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useWriteTurboStorageMakeContextWithResult =
  /*#__PURE__*/ createUseWriteContract({
    abi: turboStorageAbi,
    address: turboStorageAddress,
    functionName: 'makeContextWithResult',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"pause"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useWriteTurboStoragePause = /*#__PURE__*/ createUseWriteContract({
  abi: turboStorageAbi,
  address: turboStorageAddress,
  functionName: 'pause',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"queryContextAtPosition"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useWriteTurboStorageQueryContextAtPosition =
  /*#__PURE__*/ createUseWriteContract({
    abi: turboStorageAbi,
    address: turboStorageAddress,
    functionName: 'queryContextAtPosition',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"renounceRole"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useWriteTurboStorageRenounceRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: turboStorageAbi,
    address: turboStorageAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"revokeRole"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useWriteTurboStorageRevokeRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: turboStorageAbi,
    address: turboStorageAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"submit"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useWriteTurboStorageSubmit = /*#__PURE__*/ createUseWriteContract({
  abi: turboStorageAbi,
  address: turboStorageAddress,
  functionName: 'submit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"unpause"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useWriteTurboStorageUnpause = /*#__PURE__*/ createUseWriteContract(
  {
    abi: turboStorageAbi,
    address: turboStorageAddress,
    functionName: 'unpause',
  },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link turboStorageAbi}__
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useSimulateTurboStorage = /*#__PURE__*/ createUseSimulateContract({
  abi: turboStorageAbi,
  address: turboStorageAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"batchSubmit"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useSimulateTurboStorageBatchSubmit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: turboStorageAbi,
    address: turboStorageAddress,
    functionName: 'batchSubmit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"grantRole"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useSimulateTurboStorageGrantRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: turboStorageAbi,
    address: turboStorageAddress,
    functionName: 'grantRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useSimulateTurboStorageInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: turboStorageAbi,
    address: turboStorageAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"makeContext"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useSimulateTurboStorageMakeContext =
  /*#__PURE__*/ createUseSimulateContract({
    abi: turboStorageAbi,
    address: turboStorageAddress,
    functionName: 'makeContext',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"makeContextFixedTimes"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useSimulateTurboStorageMakeContextFixedTimes =
  /*#__PURE__*/ createUseSimulateContract({
    abi: turboStorageAbi,
    address: turboStorageAddress,
    functionName: 'makeContextFixedTimes',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"makeContextWithResult"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useSimulateTurboStorageMakeContextWithResult =
  /*#__PURE__*/ createUseSimulateContract({
    abi: turboStorageAbi,
    address: turboStorageAddress,
    functionName: 'makeContextWithResult',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"pause"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useSimulateTurboStoragePause =
  /*#__PURE__*/ createUseSimulateContract({
    abi: turboStorageAbi,
    address: turboStorageAddress,
    functionName: 'pause',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"queryContextAtPosition"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useSimulateTurboStorageQueryContextAtPosition =
  /*#__PURE__*/ createUseSimulateContract({
    abi: turboStorageAbi,
    address: turboStorageAddress,
    functionName: 'queryContextAtPosition',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"renounceRole"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useSimulateTurboStorageRenounceRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: turboStorageAbi,
    address: turboStorageAddress,
    functionName: 'renounceRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"revokeRole"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useSimulateTurboStorageRevokeRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: turboStorageAbi,
    address: turboStorageAddress,
    functionName: 'revokeRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"submit"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useSimulateTurboStorageSubmit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: turboStorageAbi,
    address: turboStorageAddress,
    functionName: 'submit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link turboStorageAbi}__ and `functionName` set to `"unpause"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useSimulateTurboStorageUnpause =
  /*#__PURE__*/ createUseSimulateContract({
    abi: turboStorageAbi,
    address: turboStorageAddress,
    functionName: 'unpause',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link turboStorageAbi}__
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useWatchTurboStorageEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: turboStorageAbi,
    address: turboStorageAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link turboStorageAbi}__ and `eventName` set to `"NewEpoch"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useWatchTurboStorageNewEpochEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: turboStorageAbi,
    address: turboStorageAddress,
    eventName: 'NewEpoch',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link turboStorageAbi}__ and `eventName` set to `"Paused"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useWatchTurboStoragePausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: turboStorageAbi,
    address: turboStorageAddress,
    eventName: 'Paused',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link turboStorageAbi}__ and `eventName` set to `"RoleAdminChanged"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useWatchTurboStorageRoleAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: turboStorageAbi,
    address: turboStorageAddress,
    eventName: 'RoleAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link turboStorageAbi}__ and `eventName` set to `"RoleGranted"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useWatchTurboStorageRoleGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: turboStorageAbi,
    address: turboStorageAddress,
    eventName: 'RoleGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link turboStorageAbi}__ and `eventName` set to `"RoleRevoked"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useWatchTurboStorageRoleRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: turboStorageAbi,
    address: turboStorageAddress,
    eventName: 'RoleRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link turboStorageAbi}__ and `eventName` set to `"Submit"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useWatchTurboStorageSubmitEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: turboStorageAbi,
    address: turboStorageAddress,
    eventName: 'Submit',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link turboStorageAbi}__ and `eventName` set to `"Unpaused"`
 *
 * [__View Contract on 0 G Newton Testnet 0 G Block Chain Explorer__](https://chainscan-newton.0g.ai/address/0xbD2C3F0E65eDF5582141C35969d66e34629cC768)
 */
export const useWatchTurboStorageUnpausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: turboStorageAbi,
    address: turboStorageAddress,
    eventName: 'Unpaused',
  })
