import { zeroG } from 'viem/chains';
import { createOpenAI } from "@ai-sdk/openai";
import { ethers } from "ethers";
//@ts-expect-error unknown @0glabs/0g-serving-broker 's type
import { createZGComputeNetworkBroker } from "@0glabs/0g-serving-broker";
import { formatEther } from 'viem';

const provider = new ethers.JsonRpcProvider(zeroG.rpcUrls.default.http[0]);

const privateKey = process.env.WALLET_PRIVATE_KEY || '';
const wallet = new ethers.Wallet(privateKey, provider);

export const broker = await createZGComputeNetworkBroker(wallet);

try {
    const accountDetails = await broker.ledger.getLedger();
    console.log("🚀 ~ accountDetails:", accountDetails)

    if (Number(formatEther(accountDetails.ledgerInfo[0])) < 0.1) {
        throw new Error('Insufficient balance');
    }
} catch (error) {
    // await broker.ledger.addLedger(0.05);
    // await broker.ledger.depositFund(Number(process.env.ZERO_G_DEPOSIT_AMOUNT));
    const accountDetails = await broker.ledger.getLedger();
    console.log("🚀 ~ accountDetails depositFund:", accountDetails)
}

export const zeroGServices = await broker.inference.listService();
console.log("🚀 ~ 0g services:", zeroGServices)
const defaultProviderAddress = zeroGServices[0][0];
const defaultModel = zeroGServices[0][6];

// Get service metadata
// const {endpoint,model} = await broker.inference.getServiceMetadata(providerAddress);

// Get authentication headers
export async function getHeaders({ provider = defaultProviderAddress, queryText = 'zero space' }: { provider?: string, queryText?: string }) {
    const headers = await broker.inference.getRequestHeaders(defaultProviderAddress, queryText);
    console.log("🚀 ~ headers:", headers)
    return headers;
}

export const zeroGLLM = createOpenAI({
    headers: await getHeaders({}),
});
