import type { Nullable } from "@ayingott/sucrose"
import type {
  ArcData,
  BlendMode,
  Color,
  ComponentProperty,
  ComponentPropertyDefinition,
  ConnectorEndpoint,
  ConnectorLineType,
  ConnectorTextBackground,
  EasingType,
  Effect,
  ExportSetting,
  FlowStartingPoint,
  LayoutConstraint,
  LayoutGrid,
  Node,
  Overrides,
  Paint,
  PaintOverride,
  PrototypeDevice,
  Rectangle,
  ShapeType,
  StrokeWeights,
  StyleType,
  Transform,
  TypeStyle,
  Vector,
} from "."

export interface PChidlren {
  /**
   * An array of top level layers on the canvas
   */
  chidlren: Node[]
}

export interface PBackground {
  /**
   * for FRAME
   * [DEPRECATED] Background of the node.
   * This is deprecated, as backgrounds for frames are now in the fills field.
   */
  background: Paint[]
}

export interface PBackgroundColor {
  /**
   * for CANVAS
   * Background color of the canvas.
   *
   * for FRAME
   * [DEPRECATED] Background color of the node.
   * This is deprecated, as frames now support more than a solid color as a background.
   * Please use the fills field instead.
   */
  backgroundColor: Color
}

export interface PPrototypeStartNodeID {
  /**
   * [DEPRECATED] Node ID that corresponds to the start frame for prototypes.
   * This is deprecated with the introduction of multiple flows.
   * Please use the flowStartingPoints field.
   * @deprecated
   */
  prototypeStartNodeID: string
}

export interface PFlowStartingPoints {
  /**
   * A array of flow starting points sorted by its position in the prototype settings panel.
   * @default []
   */
  flowStartingPoints: FlowStartingPoint[]
}

export interface PPrototypeDevice {
  /**
   * The device used to view a prototype
   */
  prototypeDevice: PrototypeDevice
}

export interface PExportSettings {
  /**
   * An array of export settings representing images to export from the canvas
   * @default []
   */
  exportSettings: ExportSetting[]
}

export interface PLocked {
  /**
   * If true, layer is locked and cannot be edited
   * @default false
   */
  locked: boolean
}

export interface PFills {
  /**
   * An array of fill paints applied to the node
   * @default []
   */
  fills: Paint[]
}

export interface PStrokes {
  /**
   * An array of stroke paints applied to the node
   * @default []
   */
  strokes: Paint[]
}

export interface PStrokeWeight {
  /**
   * The weight of strokes on the node
   */
  strokeWeight: number
}

export interface PStrokeAlign {
  /**
   * Position of stroke relative to vector outline, as a string enum
   */
  strokeAlign: StrokeAlign
}

export interface PStrokeDashes {
  /**
   * An array of floating point numbers describing the pattern of dash length and gap lengths that the vector path follows.
   * For example a value of [1, 2] indicates that the path has a dash of length 1 followed by a gap of length 2, repeated.
   * @default []
   */
  strokeDashes: number[]
}

export interface PCornerRadius {
  /**
   * Radius of each corner of the frame if a single radius is set for all corners
   */
  cornerRadius: number
}

export interface PRectangleCornerRadii {
  /**
   * Array of length 4 of the radius of each corner of the frame, starting in the top left and proceeding clockwise
   */
  rectangleCornerRadii: [
    topLeft: number,
    topRight: number,
    bottomRight: number,
    bottomLeft: number,
  ]
}

export interface PCornerSmoothing {
  /**
   * Amount of smoothing applied to the corners of the frame to produce a "squircle" effect
   */
  cornerSmoothing: number
}

export interface PBlendMode {
  /**
   * How this node blends with nodes behind it in the scene (see blend mode section for more details)
   */
  blendMode: BlendMode
}

export interface PPreserveRatio {
  /**
   * Keep height and width constrained to same ratio
   * @default false
   */
  preserveRatio: boolean
}

export interface PConstraints {
  /**
   * Horizontal and vertical layout constraints for node
   */
  constraints: LayoutConstraint
}

export interface PLayoutAlign {
  layoutAlign: LayoutAlign
}

export interface PTransitionNodeID {
  /**
   * Node ID of node to transition to in prototyping
   * @default null
   */
  transitionNodeID: Nullable<string>
}

export interface PTransitionDuration {
  /**
   * The duration of the prototyping transition on this node (in milliseconds)
   * @default null
   */
  transitionDuration: Nullable<number>
}

export interface PTransitionEasing {
  /**
   * The easing curve used in the prototyping transition on this node
   * @default null
   */
  transitionEasing: Nullable<EasingType>
}

export interface POpacity {
  /**
   * Opacity of the node
   * @default 1
   */
  opacity: number
}

export interface PAbsoluteBoundingBox {
  /**
   * Bounding box of the node in absolute space coordinates
   */
  absoluteBoundingBox: Rectangle
}

export interface PAbsoluteRenderBounds {
  /**
   * The bounds of the rendered node in the file in absolute space coordinates
   */
  absoluteRenderBounds: Rectangle
}

export interface PSize {
  /**
   * Width and height of element.
   * This is different from the width and height of the bounding box in that the absolute bounding box represents the element after scaling and rotation.
   * Only present if geometry=paths is passed
   */
  size: Vector
}

export interface PminWidth {
  /**
   * The minWidth of the frame, or null if not set.
   * @default null
   */
  minWidth: Nullable<number>
}

export interface PMaxWidth {
  /**
   * The maxWidth of the frame, or null if not set.
   * @default null
   */
  maxWidth: Nullable<number>
}

export interface PMinHeight {
  /**
   * The minHeight of the frame, or null if not set.
   * @default null
   */
  minHeight: Nullable<number>
}

export interface PMaxHeight {
  /**
   * The maxHeight of the frame, or null if not set.
   * @default null
   */
  maxHeight: Nullable<number>
}

export interface PRelativeTransform {
  /**
   * The top two rows of a matrix that represents the 2D transform of this node relative to its parent.
   * The bottom row of the matrix is implicitly always (0, 0, 1).
   * Use to transform coordinates in geometry.
   * Only present if geometry=paths is passed
   */
  relativeTransform: Transform
}

export interface PClipsContent {
  /**
   * Whether or not this node clip content outside of its bounds
   */
  clipsContent: boolean
}

export interface PLayoutMode {
  /**
   * Whether this layer uses auto-layout to position its children.
   * @default LayoutMode.NONE
   */
  layoutMode: LayoutMode
}

export interface PLayoutWrap {
  /**
   * Whether this auto-layout frame has wrapping enabled.
   * @default LayoutWrap.NO_WRAP
   */
  layoutWrap: LayoutWrap
}

export interface PPrimaryAxisSizingMode {
  /**
   * Whether the primary axis has a fixed length (determined by the user) or an automatic length (determined by the layout engine).
   * This property is only applicable for auto-layout frames.
   * @default PrimaryAxisSizingMode.AUTO
   */
  primaryAxisSizingMode: PrimaryAxisSizingMode
}

export interface PCounterAxisSizingMode {
  /**
   * Whether the counter axis has a fixed length (determined by the user) or an automatic length (determined by the layout engine).
   * This property is only applicable for auto-layout frames.
   * @default CounterAxisSizingMode.AUTO
   */
  counterAxisSizingMode: CounterAxisSizingMode
}

export interface PPrimaryAxisAlignItems {
  /**
   * Determines how the auto-layout frame’s children should be aligned in the primary axis direction.
   * This property is only applicable for auto-layout frames.
   * @default PrimaryAxisAlignItems.MIN
   */
  primaryAxisAlignItems: PrimaryAxisAlignItems
}

export interface PCounterAxisAlignItems {
  /**
   * Determines how the auto-layout frame’s children should be aligned in the counter axis direction.
   * This property is only applicable for auto-layout frames.
   * @default CounterAxisAlignItems.MIN
   */
  counterAxisAlignItems: CounterAxisAlignItems
}

export interface PCounterAxisAlignContent {
  /**
   * Determines how the auto-layout frame’s wrapped tracks should be aligned in the counter axis direction.
   * This property is only applicable for auto-layout frames withl `ayoutWrap: "WRAP"`.
   * @default CounterAxisAlignContent.AUTO
   */
  counterAxisAlignContent: CounterAxisAlignContent
}

export interface PPaddingLeft {
  /**
   * The padding between the left border of the frame and its children.
   * This property is only applicable for auto-layout frames.
   * @default 0
   */
  paddingLeft: number
}

export interface PPaddingRight {
  /**
   * The padding between the right border of the frame and its children.
   * This property is only applicable for auto-layout frames.
   * @default 0
   */
  paddingRight: number
}

export interface PPaddingTop {
  /**
   * The padding between the top border of the frame and its children.
   * This property is only applicable for auto-layout frames.
   * @default 0
   */
  paddingTop: number
}

export interface PPaddingBottom {
  /**
   * The padding between the bottom border of the frame and its children.
   * This property is only applicable for auto-layout frames.
   * @default 0
   */
  paddingBottom: number
}

export interface PHorizontalPadding {
  /**
   * The horizontal padding between the borders of the frame and its children.
   * This property is only applicable for auto-layout frames.
   * Deprecated in favor of setting individual paddings.
   * @default 0
   */
  horizontalPadding: number
}

export interface PVerticalPadding {
  /**
   * The vertical padding between the borders of the frame and its children.
   * This property is only applicable for auto-layout frames.
   * Deprecated in favor of setting individual paddings.
   * @default 0
   */
  verticalPadding: number
}

export interface PItemSpacing {
  /**
   * The distance between children of the frame.
   * Can be negative.
   * This property is only applicable for auto-layout frames.
   * @default 0
   */
  itemSpacing: number
}

export interface PCounterAxisSpacing {
  /**
   * The distance between wrapped tracks of an auto-layout frame.
   * This property is only applicable for auto-layout frames with `layoutWrap: "WRAP"`.
   */
  counterAxisSpacing: number
}

export interface PLayoutPositioning {
  /**
   * Determines whether a layer's size and position should be determined by auto-layout settings or manually adjustable.
   * @default LayoutPositioning.AUTO
   */
  layoutPositioning: LayoutPositioning
}

export interface PItemReverseZIndex {
  /**
   * Determines the canvas stacking order of layers in this frame.
   * When true, the first layer will be draw on top.
   * This property is only applicable for auto-layout frames.
   * @default false
   */
  itemReverseZIndex: boolean
}

export interface PStrokesIncludedInLayout {
  /**
   * Determines whether strokes are included in layout calculations.
   * When true, auto-layout frames behave like css "box-sizing: border-box".
   * This property is only applicable for auto-layout frames.
   * @default false
   */
  strokesIncludedInLayout: boolean
}

export interface PLayoutGrids {
  /**
   * An array of layout grids attached to this node (see layout grids section for more details).
   * `GROUP` nodes do not have this attribute
   * @default []
   */
  layoutGrids: LayoutGrid[]
}

export interface POverflowDirection {
  /**
   * Defines the scrolling behavior of the frame, if there exist contents outside of the frame boundaries.
   * The frame can either scroll vertically, horizontally, or in both directions to the extents of the content contained within it.
   * This behavior can be observed in a prototype.
   * @default OverflowDirection.NONE
   */
  overflowDirection: OverflowDirection
}

export interface PEffects {
  /**
   * An array of effects attached to this node (see effects section for more details)
   * @default []
   */
  effects: Effect[]
}

export interface PIsMask {
  /**
   * Does this node mask sibling nodes in front of it?
   * @default false
   */
  isMask: boolean
}

export interface PIsMaskOutline {
  /**
   * Does this mask ignore fill style (like gradients) and effects?
   * @default false
   */
  isMaskOutline: boolean
}

export interface PStyles {
  /**
   * A mapping of a StyleType to style ID (see Style) of styles present on this node.
   * The style ID can be used to look up more information about the style in the top-level styles field.
   */
  styles: Record<StyleType, string>
}

export interface PSectionContentsHidden {
  /**
   * Whether the contents of the section are visible
   * @default false
   */
  sectionContentsHidden: boolean
}

export interface PDevStatus {
  /**
   * Whether the section is marked Ready for dev.
   * If the section is marked Ready for dev, this property contains an object.
   * "devStatus": {
   *    "type": "READY_FOR_DEV"
   *  }
   * If the section is not ready for development or otherwise unmarked, the property is null.
   * @default null
   */
  devStatus: Nullable<Record<string, any>>
}

export interface PLayoutGrow {
  /**
   * This property is applicable only for direct children of auto-layout frames, ignored otherwise.
   * Determines whether a layer should stretch along the parent’s primary axis.
   * A 0 corresponds to a fixed size and 1 corresponds to stretch
   * @default 0
   */
  layoutGrow: number
}

export interface PFillGeometry {
  /**
   * Only specified if parameter geometry=paths is used.
   * An array of paths representing the object fill
   */
  fillGeometry: Path[]
}

export interface PFillOverrideTable {
  /**
   * Map from ID to PaintOverride for looking up fill overrides.
   * To see which regions are overriden, you must use the `geometry=paths` option.
   * Each path returned may have an `overrideId` which maps to this table.
   */
  fillOverrideTable: Record<number, PaintOverride>
}

export interface PIndividualStrokeWeights {
  /**
   * An object including the top, bottom, left, and right stroke weights.
   * Only returned if individual stroke weights are used.
   */
  individualStrokeWeights: StrokeWeights
}

export interface PStrokeCap {
  /**
   * describing the end caps of vector paths.
   * @default StrokeCap.NONE
   */
  strokeCap: StrokeCap
}

export interface PStrokeJoin {
  /**
   * describing how corners in vector paths are rendered.
   * @default StrokeJoin.MITER
   */
  strokeJoin: StrokeJoin
}

export interface PStrokeMiterAngle {
  /**
   * Only valid if strokeJoin is "MITER".
   * The corner angle, in degrees, below which strokeJoin will be set to "BEVEL" to avoid super sharp corners.
   * By default this is 28.96 degrees.
   * @default 28.96
   */
  strokeMiterAngle: number
}

export interface PStrokeGeometry {
  /**
   * Only specified if parameter geometry=paths is used.
   * An array of paths representing the object stroke
   */
  strokeGeometry: Path[]
}

export interface PBooleanOperation {
  /**
   * indicating the type of boolean operation applied
   */
  booleanOperation: BooleanOperation
}

export interface PArcData {
  /**
   * Start and end angles of the ellipse measured clockwise from the x axis, plus the inner radius for donuts
   */
  arcData: ArcData
}

export interface PCharacters {
  /**
   * Text contained within a text box
   */
  characters: string
}

export interface PStyle {
  /**
   * Style of text including font family and weight (see type style section for more information)
   */
  style: TypeStyle
}

export interface PCharacterStyleOverrides {
  /**
   * Array with same number of elements as characters in text box, each element is a reference to the styleOverrideTable defined below and maps to the corresponding character in the characters field.
   * Elements with value 0 have the default type style
   */
  characterStyleOverrides: number[]
}

/**
 * Map from ID to TypeStyle for looking up style overrides
 */
export interface PStyleOverrideTable {
  styleOverrideTable: Record<number, TypeStyle>
}

/**
 * An array with the same number of elements as lines in the text node, where lines are delimited by newline or paragraph separator characters.
 * Each element in the array corresponds to the list type of a specific line.
 */
export interface PLineTypes {
  lineTypes: LineType[]
}

/**
 * An array with the same number of elements as lines in the text node, where lines are delimited by newline or paragraph separator characters.
 * Each element in the array corresponds to the indentation level of a specific line.
 */
export interface PLineIndentations {
  lineIndentations: number[]
}

/**
 * A mapping of name to ComponentPropertyDefinition for every component property on this component.
 * Each property has a type, defaultValue, and other optional values
 * @default {}
 */
export interface PComponentPropertyDefinitions {
  componentPropertyDefinitions: Record<string, ComponentPropertyDefinition>
}

/**
 * ID of component that this instance came from, refers to components table
 */
export interface PComponentId {
  componentId: string
}

/**
 * If true, this node has been marked as exposed to its containing component or component set
 * @default false
 */
export interface PIsExposedInstance {
  isExposedInstance: boolean
}

/**
 * IDs of instances that have been exposed to this node's level
 * @default []
 */
export interface PExposedInstances {
  exposedInstances: string[]
}

/**
 * A mapping of name to ComponentProperty for all component properties on this instance.
 * Each property has a type, value, and other optional values (see properties type section below)
 */
export interface PComponentProperties {
  componentProperties: Record<string, ComponentProperty>
}

/**
 * An array of all of the fields directly overridden on this instance.
 * Inherited overrides are not included.
 * @default []
 */
export interface POverrides {
  overrides: Overrides[]
}

/**
 * If true, author name is visible.
 * @default false
 */
export interface PAuthorVisible {
  authorVisible: boolean
}

/**
 * Shape-with-text geometric shape type.
 */
export interface PShapeType {
  shapeType: ShapeType
}

/**
 * Connector starting endpoint.
 */
export interface PConnectorStart {
  connectorStart: ConnectorEndpoint
}

/**
 * Connector ending endpoint.
 */
export interface PConnectorEnd {
  connectorEnd: ConnectorEndpoint
}

/**
 * describing the end cap of the start of the connector.
 * @default ConnectorStrokeCap.NONE
 */
export interface PConnectorStartStrokeCap {
  connectorStartStrokeCap: ConnectorStrokeCap
}

/**
 * describing the end cap of the start of the connector.
 * @default ConnectorStrokeCap.NONE
 */
export interface PConnectorEndStrokeCap {
  connectorEndStrokeCap: ConnectorStrokeCap
}

/**
 * Connector line type.
 */
export interface PConnectorLineType {
  connectorLineType: ConnectorLineType
}

export enum ConnectorStrokeCap {
  NONE = "NONE",
  LINE_ARROW = "LINE_ARROW",
  TRIANGLE_ARROW = "TRIANGLE_ARROW",
  DIAMOND_ARROW = "DIAMOND_ARROW",
  CIRCLE_FILLED = "CIRCLE_FILLED",
  TRIANGLE_FILLED = "TRIANGLE_FILLED",
}

/**
 * Connector text background.
 */
export interface PTextBackground {
  textBackground: ConnectorTextBackground
}

export enum LineType {
  /**
   * Text is an ordered list (numbered)
   */
  ORDERED = "ORDERED",
  /**
   * Text is an unordered list (bulleted)
   */
  UNORDERED = "UNORDERED",
  /**
   * Text is plain text and not part of any list
   */
  NONE = "NONE",
}

export enum BooleanOperation {
  UNION = "UNION",
  INTERSECT = "INTERSECT",
  SUBTRACT = "SUBTRACT",
  EXCLUDE = "EXCLUDE",
}

export enum StrokeAlign {
  /**
   * stroke drawn inside the shape boundary
   */
  INSIDE = "INSIDE",
  /**
   * stroke drawn outside the shape boundary
   */
  OUTSIDE = "OUTSIDE",
  /**
   * stroke drawn centered along the shape boundary
   */
  CENTER = "CENTER",
}

export enum StrokeJoin {
  MITER = "MITER",
  BEVEL = "BEVEL",
  ROUND = "ROUND",
}

export enum StrokeCap {
  NONE = "NONE",
  ROUND = "ROUND",
  SQUARE = "SQUARE",
  LINE_ARROW = "LINE_ARROW",
  TRIANGLE_ARROW = "TRIANGLE_ARROW",
}

export type Path = any

export enum LayoutAlign {
  /**
   * Determines if the layer should stretch along the parent’s counter axis.
   */
  INHERIT = "INHERIT",
  // STRETCH = "STRETCH",

  /**
   * In previous versions of auto layout, determined how the layer is aligned inside an auto-layout frame.
   * In horizontal auto-layout frames, "MIN" and "MAX" correspond to "TOP" and "BOTTOM".
   * In vertical auto-layout frames, "MIN" and "MAX" correspond to "LEFT" and "RIGHT".
   */
  MIN = "MIN",
  CENTER = "CENTER",
  MAX = "MAX",
  STRETCH = "STRETCH",
}

export enum LayoutMode {
  NONE = "NONE",
  HORIZONTAL = "HORIZONTAL",
  VERTICAL = "VERTICAL",
}

export enum LayoutWrap {
  NO_WRAP = "NO_WRAP",
  WRAP = "WRAP",
}

export enum PrimaryAxisSizingMode {
  FIXED = "FIXED",
  AUTO = "AUTO",
}

export enum CounterAxisSizingMode {
  FIXED = "FIXED",
  AUTO = "AUTO",
}

export enum PrimaryAxisAlignItems {
  MIN = "MIN",
  CENTER = "CENTER",
  MAX = "MAX",
  SPACE_BETWEEN = "SPACE_BETWEEN",
}

export enum CounterAxisAlignItems {
  MIN = "MIN",
  CENTER = "CENTER",
  MAX = "MAX",
  BASELINE = "BASELINE",
}

export enum CounterAxisAlignContent {
  AUTO = "AUTO",
  SPACE_BETWEEN = "SPACE_BETWEEN",
}

export enum LayoutPositioning {
  AUTO = "AUTO",
  ABSOLUTE = "ABSOLUTE",
}

export enum OverflowDirection {
  NONE = "NONE",
  HORIZONTAL_SCROLLING = "HORIZONTAL_SCROLLING",
  VERTICAL_SCROLLING = "VERTICAL_SCROLLING",
  HORIZONTAL_AND_VERTICAL_SCROLLING = "HORIZONTAL_AND_VERTICAL_SCROLLING",
}
