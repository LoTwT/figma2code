import type {
  BaseNode,
  PAbsoluteBoundingBox,
  PAbsoluteRenderBounds,
  PBackground,
  PBackgroundColor,
  PBlendMode,
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

export type GroupNode = Omit<FrameNode, "type"> & {
  readonly type: "GROUP"
}

export interface SectionNode
  extends BaseNode,
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

export interface VectorNode
  extends BaseNode,
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
