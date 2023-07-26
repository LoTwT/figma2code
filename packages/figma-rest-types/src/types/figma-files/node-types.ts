import type { Nullable } from "@ayingott/sucrose"
import type {
  BaseNode,
  BlendMode,
  Color,
  EasingType,
  Effect,
  ExportSetting,
  FlowStartingPoint,
  LayoutConstraint,
  LayoutGrid,
  Paint,
  PrototypeDevice,
  Rectangle,
  StyleType,
  Transform,
  Vector,
} from ".."

export type Node = DocumentNode | CanvasNode | FrameNode

/**
 * @see https://www.figma.com/developers/api#document-props
 */
export interface DocumentNode extends BaseNode {
  readonly type: "DOCUMENT"
  /**
   * An array of canvases attached to the document
   */
  children: Node[]
}

/**
 * @see https://www.figma.com/developers/api#canvas-props
 */
export interface CanvasNode extends BaseNode {
  readonly type: "CANVAS"
  /**
   * An array of top level layers on the canvas
   */
  chidlren: Node[]
  /**
   * Background color of the canvas.
   */
  backgroundColor: Color
  /**
   * [DEPRECATED] Node ID that corresponds to the start frame for prototypes.
   * This is deprecated with the introduction of multiple flows.
   * Please use the flowStartingPoints field.
   * @deprecated
   */
  prototypeStartNodeID: string
  /**
   * A array of flow starting points sorted by its position in the prototype settings panel.
   * @default []
   */
  flowStartingPoints: FlowStartingPoint[]
  /**
   * The device used to view a prototype
   */
  prototypeDevice: PrototypeDevice
  /**
   * An array of export settings representing images to export from the canvas
   * @default []
   */
  exportSettings: ExportSetting[]
}

/**
 * @see https://www.figma.com/developers/api#frame-props
 */
export interface FrameNode extends BaseNode {
  readonly type: "FRAME"
  /**
   * If true, layer is locked and cannot be edited
   * @default false
   */
  locked: boolean
  /**
   * [DEPRECATED] Background of the node.
   * This is deprecated, as backgrounds for frames are now in the fills field.
   */
  background: Paint[]
  /**
   * [DEPRECATED] Background color of the node.
   * This is deprecated, as frames now support more than a solid color as a background.
   * Please use the fills field instead.
   */
  backgroundColor: Color
  /**
   * An array of fill paints applied to the node
   * @default []
   */
  fills: Paint[]
  /**
   * An array of stroke paints applied to the node
   * @default []
   */
  strokes: Paint[]
  /**
   * The weight of strokes on the node
   */
  strokeWeight: number
  /**
   * Position of stroke relative to vector outline, as a string enum
   */
  strokeAlign: StrokeAlign
  /**
   * An array of floating point numbers describing the pattern of dash length and gap lengths that the vector path follows.
   * For example a value of [1, 2] indicates that the path has a dash of length 1 followed by a gap of length 2, repeated.
   * @default []
   */
  strokeDashes: number[]
  /**
   * Radius of each corner of the frame if a single radius is set for all corners
   */
  cornerRadius: number
  /**
   * Array of length 4 of the radius of each corner of the frame, starting in the top left and proceeding clockwise
   */
  rectangleCornerRadii: [
    topLeft: number,
    topRight: number,
    bottomRight: number,
    bottomLeft: number,
  ]
  /**
   * Amount of smoothing applied to the corners of the frame to produce a "squircle" effect
   */
  cornerSmoothing: number
  /**
   * An array of export settings representing images to export from the node
   * @default []
   */
  exportSettings: ExportSetting[]
  /**
   * How this node blends with nodes behind it in the scene (see blend mode section for more details)
   */
  blendMode: BlendMode
  /**
   * Keep height and width constrained to same ratio
   * @default false
   */
  preserveRatio: boolean
  /**
   * Horizontal and vertical layout constraints for node
   */
  constraints: LayoutConstraint
  layoutAlign: LayoutAlign
  /**
   * Node ID of node to transition to in prototyping
   * @default null
   */
  transitionNodeID: Nullable<string>
  /**
   * The duration of the prototyping transition on this node (in milliseconds)
   * @default null
   */
  transitionDuration: Nullable<number>
  /**
   * The easing curve used in the prototyping transition on this node
   * @default null
   */
  transitionEasing: Nullable<EasingType>
  /**
   * Opacity of the node
   * @default 1
   */
  opacity: number
  /**
   * Bounding box of the node in absolute space coordinates
   */
  absoluteBoundingBox: Rectangle
  /**
   * The bounds of the rendered node in the file in absolute space coordinates
   */
  absoluteRenderBounds: Rectangle
  /**
   * Width and height of element.
   * This is different from the width and height of the bounding box in that the absolute bounding box represents the element after scaling and rotation.
   * Only present if geometry=paths is passed
   */
  size: Vector
  /**
   * The minWidth of the frame, or null if not set.
   * @default null
   */
  minWidth: Nullable<number>
  /**
   * The maxWidth of the frame, or null if not set.
   * @default null
   */
  maxWidth: Nullable<number>
  /**
   * The minHeight of the frame, or null if not set.
   * @default null
   */
  minHeight: Nullable<number>
  /**
   * The maxHeight of the frame, or null if not set.
   * @default null
   */
  maxHeight: Nullable<number>
  /**
   * The top two rows of a matrix that represents the 2D transform of this node relative to its parent.
   * The bottom row of the matrix is implicitly always (0, 0, 1).
   * Use to transform coordinates in geometry.
   * Only present if geometry=paths is passed
   */
  relativeTransform: Transform
  /**
   * Whether or not this node clip content outside of its bounds
   */
  clipsContent: boolean
  /**
   * Whether this layer uses auto-layout to position its children.
   * @default LayoutMode.NONE
   */
  layoutMode: LayoutMode
  /**
   * Whether this auto-layout frame has wrapping enabled.
   * @default LayoutWrap.NO_WRAP
   */
  layoutWrap: LayoutWrap
  /**
   * Whether the primary axis has a fixed length (determined by the user) or an automatic length (determined by the layout engine).
   * This property is only applicable for auto-layout frames.
   * @default PrimaryAxisSizingMode.AUTO
   */
  primaryAxisSizingMode: PrimaryAxisSizingMode
  /**
   * Whether the counter axis has a fixed length (determined by the user) or an automatic length (determined by the layout engine).
   * This property is only applicable for auto-layout frames.
   * @default CounterAxisSizingMode.AUTO
   */
  counterAxisSizingMode: CounterAxisSizingMode
  /**
   * Determines how the auto-layout frame’s children should be aligned in the primary axis direction.
   * This property is only applicable for auto-layout frames.
   * @default PrimaryAxisAlignItems.MIN
   */
  primaryAxisAlignItems: PrimaryAxisAlignItems
  /**
   * Determines how the auto-layout frame’s children should be aligned in the counter axis direction.
   * This property is only applicable for auto-layout frames.
   * @default CounterAxisAlignItems.MIN
   */
  counterAxisAlignItems: CounterAxisAlignItems
  /**
   * Determines how the auto-layout frame’s wrapped tracks should be aligned in the counter axis direction.
   * This property is only applicable for auto-layout frames withl `ayoutWrap: "WRAP"`.
   * @default CounterAxisAlignContent.AUTO
   */
  counterAxisAlignContent: CounterAxisAlignContent
  /**
   * The padding between the left border of the frame and its children.
   * This property is only applicable for auto-layout frames.
   * @default 0
   */
  paddingLeft: number
  /**
   * The padding between the right border of the frame and its children.
   * This property is only applicable for auto-layout frames.
   * @default 0
   */
  paddingRight: number
  /**
   * The padding between the top border of the frame and its children.
   * This property is only applicable for auto-layout frames.
   * @default 0
   */
  paddingTop: number
  /**
   * The padding between the bottom border of the frame and its children.
   * This property is only applicable for auto-layout frames.
   * @default 0
   */
  paddingBottom: number
  /**
   * The horizontal padding between the borders of the frame and its children.
   * This property is only applicable for auto-layout frames.
   * Deprecated in favor of setting individual paddings.
   * @default 0
   */
  horizontalPadding: number
  /**
   * The vertical padding between the borders of the frame and its children.
   * This property is only applicable for auto-layout frames.
   * Deprecated in favor of setting individual paddings.
   * @default 0
   */
  verticalPadding: number
  /**
   * The distance between children of the frame.
   * Can be negative.
   * This property is only applicable for auto-layout frames.
   * @default 0
   */
  itemSpacing: number
  /**
   * The distance between wrapped tracks of an auto-layout frame.
   * This property is only applicable for auto-layout frames with `layoutWrap: "WRAP"`.
   */
  counterAxisSpacing: number
  /**
   * Determines whether a layer's size and position should be determined by auto-layout settings or manually adjustable.
   * @default LayoutPositioning.AUTO
   */
  layoutPositioning: LayoutPositioning
  /**
   * Determines the canvas stacking order of layers in this frame.
   * When true, the first layer will be draw on top.
   * This property is only applicable for auto-layout frames.
   * @default false
   */
  itemReverseZIndex: boolean
  /**
   * Determines whether strokes are included in layout calculations.
   * When true, auto-layout frames behave like css "box-sizing: border-box".
   * This property is only applicable for auto-layout frames.
   * @default false
   */
  strokesIncludedInLayout: boolean
  /**
   * An array of layout grids attached to this node (see layout grids section for more details).
   * `GROUP` nodes do not have this attribute
   * @default []
   */
  layoutGrids: LayoutGrid[]
  /**
   * Defines the scrolling behavior of the frame, if there exist contents outside of the frame boundaries.
   * The frame can either scroll vertically, horizontally, or in both directions to the extents of the content contained within it.
   * This behavior can be observed in a prototype.
   * @default OverflowDirection.NONE
   */
  overflowDirection: OverflowDirection
  /**
   * An array of effects attached to this node (see effects section for more details)
   * @default []
   */
  effects: Effect[]
  /**
   * Does this node mask sibling nodes in front of it?
   * @default false
   */
  isMask: boolean
  /**
   * Does this mask ignore fill style (like gradients) and effects?
   * @default false
   */
  isMaskOutline: boolean
  /**
   * A mapping of a StyleType to style ID (see Style) of styles present on this node.
   * The style ID can be used to look up more information about the style in the top-level styles field.
   */
  styles: Record<StyleType, string>
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
