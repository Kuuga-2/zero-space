"use client";

import { FileUpload } from "@workspace/ui/components/upload";
import { Tabs, TabsList, TabsTrigger } from "@workspace/ui/components/tabs";
import { Button } from "@workspace/ui/components/button";
import { useState } from "react";

interface FileInfo {
  rootHash: string;
  fileSize: number;
  gasFee: number;
  storageNodeFee: number;
}

const formatFileSize = (bytes: number) => {
  const MB = 1024 * 1024;
  if (bytes >= MB) {
    return `${(bytes / MB).toFixed(2)} MB`;
  }
  return `${(bytes / 1024).toFixed(2)} KB`;
};

export default function UploadPage() {
  const [selectedNetwork, setSelectedNetwork] = useState<"standard" | "turbo">("standard");
  const [fileInfo, setFileInfo] = useState<FileInfo | null>(null);

  const handleFileChange = (files: File[]) => {
    if (files?.[0]) {
      // Mock data - in real application, these values would come from your backend
      setFileInfo({
        rootHash: "0x" + Math.random().toString(16).slice(2, 10),
        fileSize: files[0].size,
        gasFee: 0.001,
        storageNodeFee: 0.002,
      });
    }
  };

  const handleUpload = () => {
    // Implement your upload logic here
    console.log("Uploading file with network:", selectedNetwork);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl bg-gray-200 dark:bg-neutral-900 rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Upload File</h1>
      
      <Tabs defaultValue="standard" className="mb-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger 
            value="standard"
            onClick={() => setSelectedNetwork("standard")}
          >
            Standard Network
          </TabsTrigger>
          <TabsTrigger 
            value="turbo"
            onClick={() => setSelectedNetwork("turbo")}
          >
            Turbo Network
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <FileUpload onChange={handleFileChange} />

      {fileInfo && (
        <div className="mt-6 space-y-4 bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-sm">
          <div className="space-y-6">
            <div className="flex flex-row justify-between">
              <p className="text-sm text-neutral-500">Root Hash</p>
              <p className="font-mono">{fileInfo.rootHash}</p>
            </div>
            <div className="flex flex-row justify-between">
              <p className="text-sm text-neutral-500">File Size</p>
              <p>{formatFileSize(fileInfo.fileSize)}</p>
            </div>
            <div className="flex flex-row justify-between">
              <p className="text-sm text-neutral-500">Gas Fee</p>
              <p>{fileInfo.gasFee} A0GI</p>
            </div>
            <div className="flex flex-row justify-between">
              <p className="text-sm text-neutral-500">Storage Node Fee</p>
              <p>{fileInfo.storageNodeFee} A0GI</p>
            </div>
          </div>
          
          <div className="pt-4">
            <Button 
              onClick={handleUpload}
              className="w-full"
            >
              Upload to {selectedNetwork} Network
            </Button>
          </div>
        </div>
      )}
    </div>
  );
} 