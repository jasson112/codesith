import {
  Blob,
  BlobContainer,
  StorageAccount,
  listStorageAccountServiceSAS,
  HttpProtocol,
  SignedResource,
  Permissions,
} from "@pulumi/azure-native/storage";

import { ResourceGroup } from "@pulumi/azure-native/resources";

import { Output, all, interpolate } from "@pulumi/pulumi";

export function signedBlobReadUrl(
  blob: Blob,
  container: BlobContainer,
  account: StorageAccount,
  resourceGroup: ResourceGroup
): Output<string> {
  const blobSAS = all<string>([
    blob.name,
    container.name,
    account.name,
    resourceGroup.name,
  ]).apply((args) =>
    listStorageAccountServiceSAS({
      accountName: args[2],
      protocols: HttpProtocol.Https,
      sharedAccessExpiryTime: "2030-01-01",
      sharedAccessStartTime: "2021-01-01",
      resourceGroupName: args[3],
      resource: SignedResource.C,
      permissions: Permissions.R,
      canonicalizedResource: "/blob/" + args[2] + "/" + args[1],
      contentType: "application/json",
      cacheControl: "max-age=5",
      contentDisposition: "inline",
      contentEncoding: "deflate",
    })
  );

  return interpolate`https://${account.name}.blob.core.windows.net/${container.name}/${blob.name}?${blobSAS.serviceSasToken}`;
}
