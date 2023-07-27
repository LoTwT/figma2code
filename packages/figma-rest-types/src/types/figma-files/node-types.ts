import type {
  BaseNode,
  PAbsoluteBoundingBox,
  PAbsoluteRenderBounds,
  PArcData,
  PBackground,
  PBackgroundColor,
  PBlendMode,
  PBooleanOperation,
  PCharacters,
  PChidlren,
  PClipsContent,
  PConstraints,
  PCornerRadius,
  PCornerSmoothing,
  PCounterAxisAlignContent,
  PCounterAxisAlignItems,
  PCounterAxisSizingMode,
  PCounterAxisSpacing,
  PDevStatus,
  PEffects,
  PExportSettings,
  PFillGeometry,
  PFillOverrideTable,
  PFills,
  PFlowStartingPoints,
  PHorizontalPadding,
  PIndividualStrokeWeights,
  PIsMask,
  PIsMaskOutline,
  PItemReverseZIndex,
  PItemSpacing,
  PLayoutAlign,
  PLayoutGrids,
  PLayoutGrow,
  PLayoutMode,
  PLayoutPositioning,
  PLayoutWrap,
  PLocked,
  PMaxHeight,
  PMaxWidth,
  PMinHeight,
  POpacity,
  POverflowDirection,
  PPaddingBottom,
  PPaddingLeft,
  PPaddingRight,
  PPaddingTop,
  PPreserveRatio,
  PPrimaryAxisAlignItems,
  PPrimaryAxisSizingMode,
  PPrototypeDevice,
  PPrototypeStartNodeID,
  PRectangleCornerRadii,
  PRelativeTransform,
  PSectionContentsHidden,
  PSize,
  PStrokeAlign,
  PStrokeCap,
  PStrokeDashes,
  PStrokeGeometry,
  PStrokeJoin,
  PStrokeMiterAngle,
  PStrokeWeight,
  PStrokes,
  PStrokesIncludedInLayout,
  PStyles,
  PTransitionDuration,
  PTransitionEasing,
  PTransitionNodeID,
  PVerticalPadding,
  PminWidth,
} from ".."

export type Node =
  | DocumentNode
  | CanvasNode
  | FrameNode
  | GroupNode
  | SectionNode
  | VectorNode
  | BooleanOperationNode
  | StarNode
  | LineNode
  | EllipseNode
  | RegularPolygonNode
  | TableNode
  | TabelCellNode

/**
 * @see https://www.figma.com/developers/api#document-props
 */
export interface DocumentNode extends BaseNode, PChidlren {
  readonly type: "DOCUMENT"
}

/**
 * @see https://www.figma.com/developers/api#canvas-props
 */
export interface CanvasNode
  extends BaseNode,
    PChidlren,
    PBackgroundColor,
    PPrototypeStartNodeID,
    PFlowStartingPoints,
    PPrototypeDevice,
    PExportSettings {
  readonly type: "CANVAS"
}

/**
 * @see https://www.figma.com/developers/api#frame-props
 */
export interface FrameNode
  extends BaseNode,
    PChidlren,
    PLocked,
    PBackground,
    PBackgroundColor,
    PFills,
    PStrokes,
    PStrokeWeight,
    PStrokeAlign,
    PStrokeDashes,
    PCornerRadius,
    PRectangleCornerRadii,
    PCornerSmoothing,
    PExportSettings,
    PBlendMode,
    PPreserveRatio,
    PConstraints,
    PLayoutAlign,
    PTransitionNodeID,
    PTransitionDuration,
    PTransitionEasing,
    POpacity,
    PAbsoluteBoundingBox,
    PAbsoluteRenderBounds,
    PSize,
    PminWidth,
    PMaxWidth,
    PMinHeight,
    PMaxHeight,
    PRelativeTransform,
    PClipsContent,
    PLayoutMode,
    PLayoutWrap,
    PPrimaryAxisSizingMode,
    PCounterAxisSizingMode,
    PPrimaryAxisAlignItems,
    PCounterAxisAlignItems,
    PCounterAxisAlignContent,
    PPaddingLeft,
    PPaddingRight,
    PPaddingTop,
    PPaddingBottom,
    PHorizontalPadding,
    PVerticalPadding,
    PItemSpacing,
    PCounterAxisSpacing,
    PLayoutPositioning,
    PItemReverseZIndex,
    PStrokesIncludedInLayout,
    PLayoutGrids,
    POverflowDirection,
    PEffects,
    PIsMask,
    PIsMaskOutline,
    PStyles {
  readonly type: "FRAME"
}

/**
 * @see https://www.figma.com/developers/api#group-props
 */
export type GroupNode = Omit<FrameNode, "type"> & {
  readonly type: "GROUP"
}

/**
 * @see https://www.figma.com/developers/api#section-props
 */
export interface SectionNode
  extends BaseNode,
    PChidlren,
    PSectionContentsHidden,
    PDevStatus,
    PFills,
    PStrokes,
    PStrokeWeight,
    PStrokeAlign,
    PAbsoluteBoundingBox,
    PAbsoluteRenderBounds {
  readonly type: "SECTION"
}

/**
 * @see https://www.figma.com/developers/api#vector-props
 */
export interface VectorNode
  extends BaseNode,
    PChidlren,
    PLocked,
    PExportSettings,
    PBlendMode,
    PPreserveRatio,
    PLayoutAlign,
    PLayoutGrow,
    PConstraints,
    PTransitionNodeID,
    PTransitionDuration,
    PTransitionEasing,
    POpacity,
    PAbsoluteBoundingBox,
    PAbsoluteRenderBounds,
    PEffects,
    PSize,
    PRelativeTransform,
    PIsMask,
    PFills,
    PFillGeometry,
    PFillOverrideTable,
    PStrokes,
    PStrokeWeight,
    PIndividualStrokeWeights,
    PStrokeCap,
    PStrokeJoin,
    PStrokeDashes,
    PStrokeMiterAngle,
    PStrokeGeometry,
    PStrokeAlign,
    PStyles {
  readonly type: "VECTOR"
}

/**
 * @see https://www.figma.com/developers/api#boolean_operation-props
 */
export interface BooleanOperationNode
  extends Omit<VectorNode, "type">,
    PBooleanOperation {
  readonly type: "BOOLEAN_OPERATION"
}

/**
 * @see https://www.figma.com/developers/api#star-props
 */
export interface StarNode extends Omit<VectorNode, "type"> {
  readonly type: "STAR"
}

/**
 * @see https://www.figma.com/developers/api#line-props
 */
export interface LineNode extends Omit<VectorNode, "type"> {
  readonly type: "LINE"
}

/**
 * @see https://www.figma.com/developers/api#ellipse-props
 */
export interface EllipseNode extends Omit<VectorNode, "type">, PArcData {
  readonly type: "ELLIPSE"
}

/**
 * @see https://www.figma.com/developers/api#regular_polygon-props
 */
export interface RegularPolygonNode extends Omit<VectorNode, "type"> {
  readonly type: "REGULAR_POLYGON"
}

/**
 * @see https://www.figma.com/developers/api#rectangle-props
 */
export interface RectangleNode
  extends Omit<VectorNode, "type">,
    PCornerRadius,
    PRectangleCornerRadii,
    PCornerSmoothing {
  readonly type: "RECTANGLE"
}

/**
 * FigJam Table node.
 * @see https://www.figma.com/developers/api#table-props
 */
export interface TableNode
  extends BaseNode,
    PAbsoluteBoundingBox,
    PAbsoluteRenderBounds,
    PBlendMode,
    PChidlren,
    PConstraints,
    PEffects,
    PExportSettings,
    PRelativeTransform,
    PSize,
    PStrokes,
    PStrokeAlign {
  readonly type: "TABLE"
}

/**
 * FigJam Table cell node.
 * @see https://www.figma.com/developers/api#table_cell-props
 */
export interface TabelCellNode
  extends BaseNode,
    PAbsoluteBoundingBox,
    PAbsoluteRenderBounds,
    PCharacters,
    PFills,
    PRelativeTransform,
    PSize {
  readonly type: "TABLE_CELL"
}
