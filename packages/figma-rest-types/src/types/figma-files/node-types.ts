import type {
  BaseNode,
  PAbsoluteBoundingBox,
  PAbsoluteRenderBounds,
  PArcData,
  PAuthorVisible,
  PBackground,
  PBackgroundColor,
  PBlendMode,
  PBooleanOperation,
  PCharacterStyleOverrides,
  PCharacters,
  PChidlren,
  PClipsContent,
  PComponentId,
  PComponentProperties,
  PComponentPropertyDefinitions,
  PConnectorEnd,
  PConnectorEndStrokeCap,
  PConnectorLineType,
  PConnectorStart,
  PConnectorStartStrokeCap,
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
  PExposedInstances,
  PFillGeometry,
  PFillOverrideTable,
  PFills,
  PFlowStartingPoints,
  PHorizontalPadding,
  PIndividualStrokeWeights,
  PIsExposedInstance,
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
  PLineIndentations,
  PLineTypes,
  PLocked,
  PMaxHeight,
  PMaxWidth,
  PMinHeight,
  POpacity,
  POverflowDirection,
  POverrides,
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
  PShapeType,
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
  PStyle,
  PStyleOverrideTable,
  PStyles,
  PTextBackground,
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
  | TextNode
  | SliceNode
  | ComponentNode
  | ComponentSetNode
  | InstanceNode
  | StickyNode
  | ShapeWithTextNode
  | ConnectorNode
  | WashiTapeNode

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

/**
 * @see https://www.figma.com/developers/api#text-props
 */
export interface TextNode
  extends Omit<VectorNode, "type" | "fillOverrideTable">,
    PCharacters,
    PStyle,
    PCharacterStyleOverrides,
    PStyleOverrideTable,
    PLineTypes,
    PLineIndentations {
  readonly type: "TEXT"
}

/**
 * @see https://www.figma.com/developers/api#slice-props
 */
export interface SliceNode
  extends BaseNode,
    PExportSettings,
    PAbsoluteBoundingBox,
    PAbsoluteRenderBounds,
    PSize,
    PRelativeTransform {
  readonly type: "SLICE"
}

/**
 * @see https://www.figma.com/developers/api#component-props
 */
export interface ComponentNode
  extends Omit<FrameNode, "type">,
    PComponentPropertyDefinitions {
  readonly type: "COMPONENT"
}

/**
 * @see https://www.figma.com/developers/api#component_set-props
 */
export interface ComponentSetNode extends Omit<ComponentNode, "type"> {
  readonly type: "COMPONENT_SET"
}

/**
 * @see https://www.figma.com/developers/api#instance-props
 */
export interface InstanceNode
  extends Omit<FrameNode, "type">,
    PComponentId,
    PIsExposedInstance,
    PExposedInstances,
    PComponentProperties,
    POverrides {
  readonly type: "INSTANCE"
}

/**
 * FigJam Sticky node.
 * @see https://www.figma.com/developers/api#sticky-props
 */
export interface StickyNode
  extends BaseNode,
    PAbsoluteBoundingBox,
    PAbsoluteRenderBounds,
    PAuthorVisible,
    PBackgroundColor,
    PBlendMode,
    PCharacters,
    PEffects,
    PExportSettings,
    PFills,
    PLocked,
    POpacity,
    PRelativeTransform {
  readonly type: "STICKY"
}

/**
 * FigJam Shape-with-text node.
 * @see https://www.figma.com/developers/api#shape_with_text-props
 */
export interface ShapeWithTextNode
  extends BaseNode,
    PAbsoluteBoundingBox,
    PAbsoluteRenderBounds,
    PBackgroundColor,
    PBlendMode,
    PCharacters,
    PCornerRadius,
    PRectangleCornerRadii,
    PCornerSmoothing,
    PEffects,
    PExportSettings,
    PFills,
    PIsMask,
    PLocked,
    POpacity,
    PShapeType,
    PStrokes,
    PStrokeWeight,
    PStrokeCap,
    PStrokeJoin,
    PStrokeDashes,
    PStrokeAlign,
    PRelativeTransform,
    PStyles {
  readonly type: "SHAPE_WITH_TEXT"
}

/**
 * FigJam Connector node.
 * @see https://www.figma.com/developers/api#connector-props
 */
export interface ConnectorNode
  extends BaseNode,
    PAbsoluteBoundingBox,
    PAbsoluteRenderBounds,
    PBackgroundColor,
    PBlendMode,
    PCharacters,
    PConnectorStart,
    PConnectorEnd,
    PConnectorStartStrokeCap,
    PConnectorEndStrokeCap,
    PConnectorLineType,
    PCornerRadius,
    PRectangleCornerRadii,
    PCornerSmoothing,
    PEffects,
    PExportSettings,
    PFills,
    PIsMask,
    PLocked,
    POpacity,
    PStrokes,
    PStrokeWeight,
    PStrokeCap,
    PStrokeJoin,
    PStrokeDashes,
    PStrokeAlign,
    PTextBackground,
    PRelativeTransform,
    PStyles {
  readonly type: "CONNECTOR"
}

export interface WashiTapeNode extends Omit<VectorNode, "type"> {
  readonly type: "WASHI_TAPE"
}
