/**
 * ZInventoryCount
 * Returns count of ZWorkOrderInventoryCountHeaders entity set.
 *
 * @param {object} contexts
 * @returns {Promise<number>}
 */
export default async function ZInventoryCount(context) {
    let listArray = await context.read("/SAPAssetManager/Services/AssetManager.service", "ZWorkOrderInventoryCountHeaders", [], '');
    return context.count('/SAPAssetManager/Services/AssetManager.service', 'ZWorkOrderInventoryCountHeaders', '');
}