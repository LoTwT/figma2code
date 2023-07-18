import type { VariableAlias } from "./property-types"

/**
 * global properties
 * The following are properties that exist on every node.
 * These give us some basic information about identifying and viewing the node.
 * @see https://www.figma.com/developers/api#global-properties
 */
export interface BaseNode {
  /**
   * A string uniquely identifying this node within the document.
   */
  id: string
  /**
   * The name given to the node by the user in the tool.
   */
  name: string
  /**
   * Whether or not the node is visible on the canvas.
   * @default true
   */
  visible: boolean
  /**
   * The type of the node, refer to table below for details.
   */
  type: string
  /**
   * The rotation of the node, if not 0.
   */
  rotation: number
  /**
   * Data written by plugins that is visible only to the plugin that wrote it. Requires the `pluginData` to include the ID of the plugin.
   */
  pluginData: any
  /**
   * Data written by plugins that is visible to all plugins. Requires the `pluginData` parameter to include the string "shared".
   */
  sharedPluginData: any
  /**
   * A mapping of a layer's property to component property name of component properties attached to this node. The component property name can be used to look up more information on the corresponding component's or component set's componentPropertyDefinitions.
   */
  componentPropertyReferences: Record<string, string>
  /**
   * A mapping of field to the variables applied to this field. Most fields will only map to a single VariableAlias However, for fills, strokes, size, and component properties, it is possible to have multiple variables bound to the field.
   * @see https://www.figma.com/developers/api#variablealias-type
   */
  boundVariables: Record<string, VariableAlias | VariableAlias[]>
}
