'use client'

import * as React from 'react'
import { useAppKitAccount } from "@reown/appkit/react"
import { useQuery } from "@tanstack/react-query"
import { Card, CardContent, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Button } from "@workspace/ui/components/button"
import { Skeleton } from "@workspace/ui/components/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"
import { ChevronLeft, ChevronRight, FileIcon, Download } from "lucide-react"
import { formatDistanceToNow } from "date-fns"
import { formatEther } from "viem"

type NetworkType = 'standard' | 'turbo'

interface Transaction {
    txSeq: number
    from: string
    method: string
    rootHash: string
    dataSize: number
    storageFee: string
    status: number
    blockNumber: number
    txHash: string
    timestamp: number
    segments: number
    uploadedSegments: number
}

interface TransactionResponse {
    code: number
    message: string
    data: {
        total: number
        list: Transaction[]
    }
}

export default function FilesPage() {
    const { address } = useAppKitAccount()
    const [network, setNetwork] = React.useState<NetworkType>('standard')
    const [page, setPage] = React.useState(1)
    const limit = 5

    const { data, isLoading, isError, refetch } = useQuery<TransactionResponse>({
        queryKey: ['transactions', address, network, page],
        queryFn: async () => {
            if (!address) throw new Error('No address found')
            const skip = (page - 1) * limit
            const response = await fetch(
                `https://storagescan-newton.0g.ai/api/accounts/${address}/txs?network=${network}&skip=${skip}&limit=${limit}&sort=desc`
            )
            if (!response.ok) throw new Error('Network response was not ok')
            const result = await response.json()
            return result
        },
        enabled: !!address,
        retry: 2,
        staleTime: 300000, 
    })

    const totalPages = Math.ceil((data?.data?.total || 0) / limit)

    return (
        <div className="container mx-auto py-6">
            <Tabs defaultValue={network} onValueChange={(value) => setNetwork(value as NetworkType)}>
                <div className="flex items-center justify-between">
                    <TabsList>
                        <TabsTrigger value="standard">Standard Network</TabsTrigger>
                        <TabsTrigger value="turbo">Turbo Network</TabsTrigger>
                    </TabsList>
                </div>

                <TabsContent value="standard" className="mt-6">
                    <FilesList
                        isLoading={isLoading}
                        isError={isError}
                        data={data?.data?.list}
                        onRetry={refetch}
                    />
                </TabsContent>
                <TabsContent value="turbo" className="mt-6">
                    <FilesList
                        isLoading={isLoading}
                        isError={isError}
                        data={data?.data?.list}
                        onRetry={refetch}
                    />
                </TabsContent>
            </Tabs>

            {totalPages > 0 && (
                <div className="mt-8 flex items-center justify-center gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        disabled={page === 1}
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <span className="text-sm">
                        Page {page} of {totalPages}
                    </span>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                        disabled={page === totalPages}
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            )}
        </div>
    )
}

function FilesList({
    isLoading,
    isError,
    data,
    onRetry,
}: {
    isLoading: boolean
    isError: boolean
    data?: Transaction[]
    onRetry: () => void
}) {
    const handleDownload = async (rootHash: string) => {
        const url = `https://indexer-storage-testnet-turbo.0g.ai/file?root=${rootHash}`
        try {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error('Download failed')
            }
            const blob = await response.blob()
            const downloadUrl = window.URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.href = downloadUrl
            a.download = `${rootHash.slice(0, 8)}`
            document.body.appendChild(a)
            a.click()
            window.URL.revokeObjectURL(downloadUrl)
            document.body.removeChild(a)
        } catch (error) {
            console.error('Download failed:', error)
            // You might want to add a toast notification here
        }
    }

    if (isLoading) {
        return (
            <div className="space-y-4">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Card key={i}>
                        <CardHeader>
                            <CardTitle>
                                <Skeleton className="h-6 w-48" />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 gap-4">
                                <Skeleton className="h-4 w-24" />
                                <Skeleton className="h-4 w-32" />
                                <Skeleton className="h-4 w-28" />
                                <Skeleton className="h-4 w-20" />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        )
    }

    if (isError) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>Error</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Failed to load files.</p>
                    <Button onClick={onRetry} className="mt-4">
                        Retry
                    </Button>
                </CardContent>
            </Card>
        )
    }

    if (!data?.length) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>No files found</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">You haven't uploaded any files yet.</p>
                </CardContent>
            </Card>
        )
    }

    return (
        <div className="space-y-4">
            {data.map((tx) => (
                <Card key={tx.txHash}>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <FileIcon className="h-5 w-5 flex-shrink-0" />
                            <span className="font-mono text-sm break-all">{tx.rootHash}</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <span className="text-muted-foreground">Size:</span>
                                <span>{(tx.dataSize / 1024).toFixed(2)} KB</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-muted-foreground">Fee:</span>
                                <span>{Number(formatEther(BigInt(tx.storageFee))).toFixed(8)} A0GI</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-muted-foreground">Status:</span>
                                <span>{tx.status === 0 ? 'Success' : 'Failed'}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-muted-foreground">Uploaded:</span>
                                <span>{formatDistanceToNow(tx.timestamp * 1000)} ago</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-muted-foreground">Segments:</span>
                                <span>{tx.uploadedSegments} / {tx.segments}</span>
                            </div>
                            <div className="flex items-center justify-end">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handleDownload(tx.rootHash)}
                                    className="flex items-center gap-2"
                                >
                                    <Download className="h-4 w-4" />
                                    Download
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
} 