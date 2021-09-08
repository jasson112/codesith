import { Input, Output, all, interpolate } from "@pulumi/pulumi";
import { listStorageAccountKeys } from "@pulumi/azure-native/storage";

export function getConnectionString(
  resourceGroupName: Input<string>,
  accountName: Input<string>
): Output<string> {
  // Retrieve the primary storage account key.
  const storageAccountKeys = all([resourceGroupName, accountName]).apply(
    ([resourceGroupName, accountName]) =>
      listStorageAccountKeys({ resourceGroupName, accountName })
  );
  const primaryStorageKey = storageAccountKeys.keys[0].value;

  // Build the connection string to the storage account.
  return interpolate`DefaultEndpointsProtocol=https;AccountName=${accountName};AccountKey=${primaryStorageKey}`;
}
