import type { Nullable } from "@ayingott/sucrose"

/**
 * An RGBA color
 * @see https://www.figma.com/developers/api#color-type
 */
export interface Color {
  /**
   * Red channel value, between 0 and 1
   */
  r: number
  /**
   * Green channel value, between 0 and 1
   */
  g: number
  /**
   * Blue channel value, between 0 and 1
   */
  b: number
  /**
   * Alpha channel value, between 0 and 1
   */
  a: number
}

/**
 * Format and size to export an asset at
 * @see https://www.figma.com/developers/api#exportsetting-type
 */
export interface ExportSetting {
  /**
   * File suffix to append to all filenames
   */
  suffix: string
  /**
   * Image type, string enum that supports values JPG, PNG, and SVG
   */
  format: ExportSettingFormat
  /**
   * Constraint that determines sizing of exported asset
   */
  constraint: Constraint
}

export enum ExportSettingFormat {
  JPG = "JPG",
  PNG = "PNG",
  SVG = "SVG",
}

/**
 * Sizing constraint for exports
 * @see https://www.figma.com/developers/api#constraint-type
 */
export interface Constraint {
  /**
   * Type of constraint to apply; string enum with potential values below
      SCALE: Scale by value
      WIDTH: Scale proportionally and set width to value
      HEIGHT: Scale proportionally and set height to value
   */
  type: ConstraintType
  /**
   * See type property for effect of this field
   */
  value: number
}

export enum ConstraintType {
  SCALE = "SCALE",
  WIDTH = "WIDTH",
  HEIGHT = "HEIGHT",
}

/**
 * A rectangle that expresses a bounding box in absolute coordinates
 * @see https://www.figma.com/developers/api#rectangle-type
 */
export interface Rectangle {
  /**
   * X coordinate of top left corner of the rectangle
   */
  x: number
  /**
   * Y coordinate of top left corner of the rectangle
   */
  y: number
  /**
   * Width of the rectangle
   */
  width: number
  /**
   * Height of the rectangle
   */
  height: number
}

/**
 * Information about the arc properties of an ellipse.
 * 0° is the x axis and increasing angles rotate clockwise
 * @see https://www.figma.com/developers/api#arcdata-type
 */
export interface ArcData {
  /**
   * Start of the sweep in radians
   */
  startingAngle: number
  /**
   * End of the sweep in radians
   */
  endingAngle: number
  /**
   * Inner radius value between 0 and 1
   */
  innerRadius: number
}

/**
 * Enum describing how layer blends with layers below
 * @see https://www.figma.com/developers/api#blendmode-type
 */
export enum BlendMode {
  // normal blends
  PASS_THROUGH = "PASS_THROUGH", // (only applicable to objects with children)
  NORMAL = "NORMAL",

  // darken
  DARKEN = "DARKEN",
  MULTIPLY = "MULTIPLY",
  LINEAR_BURN = "LINEAR_BURN",
  COLOR_BURN = "COLOR_BURN",

  // lighten
  LIGHTEN = "LIGHTEN",
  SCREEN = "SCREEN",
  LINEAR_DODGE = "LINEAR_DODGE",
  COLOR_DODGE = "COLOR_DODGE",

  // contrast
  OVERLAY = "OVERLAY",
  SOFT_LIGHT = "SOFT_LIGHT",
  HARD_LIGHT = "HARD_LIGHT",

  // inversion
  DIFFERENCE = "DIFFERENCE",
  EXCLUSION = "EXCLUSION",

  // component
  HUE = "HUE",
  SATURATION = "SATURATION",
  COLOR = "COLOR",
  LUMINOSITY = "LUMINOSITY",
}

/**
 * Enum describing animation easing curves
 * @see https://www.figma.com/developers/api#easingtype-type
 */
export enum EasingType {
  /**
   * Ease in with an animation curve similar to CSS ease-in.
   */
  EASE_IN = "EASE_IN",
  /**
   * Ease out with an animation curve similar to CSS ease-out.
   */
  EASE_OUT = "EASE_OUT",
  /**
   * Ease in and then out with an animation curve similar to CSS ease-in-out.
   */
  EASE_IN_AND_OUT = "EASE_IN_AND_OUT",
  /**
   * No easing, similar to CSS linear.
   */
  LINEAR = "LINEAR",
  /**
   * Gentle spring animation similar to react-spring.
   */
  GENTLE_SPRING = "GENTLE_SPRING",
}

/**
 * A flow starting point used when launching a prototype to enter Presentation view.
 * @see https://www.figma.com/developers/api#flowstartingpoint-type
 */
export interface FlowStartingPoint {
  /**
   * Unique identifier specifying the frame
   */
  nodeId: string
  /**
   * Name of flow
   */
  name: string
}

/**
 * Layout constraint relative to containing Frame
 * @see https://www.figma.com/developers/api#layoutconstraint-type
 */
export interface LayoutConstraint {
  vertical: LayoutConstraintVertical
  horizontal: LayoutConstraintHorizontal
}

export enum LayoutConstraintVertical {
  /**
   * Node is laid out relative to top of the containing frame
   */
  TOP = "TOP",
  /**
   * Node is laid out relative to bottom of the containing frame
   */
  BOTTOM = "BOTTOM",
  /**
   * Node is vertically centered relative to containing frame
   */
  CENTER = "CENTER",
  /**
   * Both top and bottom of node are constrained relative to containing frame (node stretches with frame)
   */
  TOP_BOTTOM = "TOP_BOTTOM",
  /**
   * Node scales vertically with containing frame
   */
  SCALE = "SCALE",
}

export enum LayoutConstraintHorizontal {
  /**
   * Node is laid out relative to left of the containing frame
   */
  LEFT = "LEFT",
  /**
   * Node is laid out relative to right of the containing frame
   */
  RIGHT = "RIGHT",
  /**
   * Node is horizontally centered relative to containing frame
   */
  CENTER = "CENTER",
  /**
   * Both left and right of node are constrained relative to containing frame (node stretches with frame)
   */
  LEFT_RIGHT = "LEFT_RIGHT",
  /**
   * Node scales horizontally with containing frame
   */
  SCALE = "SCALE",
}

/**
 * Guides to align and place objects within a frame
 * @see https://www.figma.com/developers/api#layoutgrid-type
 */
export interface LayoutGrid {
  /**
   * Orientation of the grid as a string enum
   */
  pattern: LayoutGridPattern
  /**
   * Width of column grid or height of row grid or square grid spacing
   */
  sectionSize: number
  /**
   * Is the grid currently visible?
   */
  visible: boolean
  /**
   * Color of the grid
   */
  color: Color

  /**
   * The following properties are only meaningful for directional grids (COLUMNS or ROWS)
   */
  /**
   * Positioning of grid as a string enum
   */
  alignment: LayoutGridAlignment
  /**
   * Spacing in between columns and rows
   */
  gutterSize: number
  /**
   * Spacing before the first column or row
   */
  offset: number
  /**
   * Number of columns or rows
   */
  count: number
}

export enum LayoutGridPattern {
  /**
   * Vertical grid
   */
  COLUMNS = "COLUMNS",
  /**
   * Horizontal grid
   */
  ROWS = "ROWS",
  /**
   * Square grid
   */
  GRID = "GRID",
}

export enum LayoutGridAlignment {
  /**
   * Grid starts at the left or top of the frame
   */
  MIN = "MIN",
  /**
   * Grid is stretched to fit the frame
   */
  STRETCH = "STRETCH",
  /**
   * Grid is center aligned
   */
  CENTER = "CENTER",
}

/**
 * A visual effect such as a shadow or blur
 * @see https://www.figma.com/developers/api#effect-type
 */
export interface Effect {
  /**
   * Type of effect as a string enum
   */
  type: EffectType
  /**
   * Is the effect active?
   */
  visible: boolean
  /**
   * Radius of the blur effect (applies to shadows as well)
   */
  radius: number

  /**
   * The following properties are for shadows only:
   */
  /**
   * The color of the shadow
   */
  color: Color
  /**
   * How far the shadow is projected in the x and y directions
   */
  blendMode: BlendMode
  /**
   * How far the shadow is projected in the x and y directions
   */
  offset: Vector
  /**
   * How far the shadow spreads
   * @default 0
   */
  spread: number
  /**
   * Whether to show the shadow behind translucent or transparent pixels (applies only to drop shadows)
   */
  showShadowBehindNode: boolean
}

export enum EffectType {
  INNER_SHADOW = "INNER_SHADOW",
  DROP_SHADOW = "DROP_SHADOW",
  LAYER_BLUR = "LAYER_BLUR",
  BACKGROUND_BLUR = "BACKGROUND_BLUR",
}

/**
 * A link to either a URL or another frame (node) in the document
 * @see https://www.figma.com/developers/api#hyperlink-type
 */
export interface Hyperlink {
  /**
   * Type of hyperlink
   */
  type: HyperlinkType
  /**
   * URL being linked to, if URL type
   */
  url: string
  /**
   * ID of the node being linked to, if NODE type
   */
  nodeID: string
}

export enum HyperlinkType {
  URL = "URL",
  NODE = "NODE",
}

/**
 * A 2d vector
 * @see https://www.figma.com/developers/api#vector-type
 */
export interface Vector {
  /**
   * X coordinate of the vector
   */
  x: number
  /**
   * Y coordinate of the vector
   */
  y: number
}

/**
 * Represents a link to documentation for a component.
 * @see https://www.figma.com/developers/api#documentationlink-type
 */
export interface DocumentationLink {
  /**
   * Should be a valid URI (e.g. https://www.figma.com).
   */
  uri: string
}

/**
 * A solid color, gradient, or image texture that can be applied as fills or strokes
 * @see https://www.figma.com/developers/api#paint-type
 */
export interface Paint {
  /**
   * Type of paint as a string enum
   */
  type: PaintType
  /**
   * Is the paint enabled?
   * @default true
   */
  visible: boolean
  /**
   * Overall opacity of paint (colors within the paint can also have opacity values which would blend with this)
   * @default 1
   */
  opacity: number

  /**
   * For solid paints:
   */
  /**
   * Solid color of the paint
   */
  color: Color

  /**
   * For gradient paints:
   */
  /**
   * How this node blends with nodes behind it in the scene (see blend mode section for more details)
   */
  blendMode: BlendMode
  /**
   * This field contains three vectors, each of which are a position in normalized object space (normalized object space is if the top left corner of the bounding box of the object is (0, 0) and the bottom right is (1,1)).
   * The first position corresponds to the start of the gradient (value 0 for the purposes of calculating gradient stops), the second position is the end of the gradient (value 1), and the third handle position determines the width of the gradient.
   */
  gradientHandlePositions: Vector[]
  /**
   * Positions of key points along the gradient axis with the colors anchored there.
   * Colors along the gradient are interpolated smoothly between neighboring gradient stops.
   */
  gradientStops: ColorStop[]

  /**
   * For image paints:
   */
  /**
   * Image scaling mode
   */
  scaleMode: ScaleMode
  /**
   * Affine transform applied to the image, only present if scaleMode is STRETCH
   */
  imageTransform: Transform
  /**
   * Amount image is scaled by in tiling, only present if scaleMode is TILE
   */
  scalingFactor: number
  /**
   * Image rotation, in degrees.
   */
  rotation: number
  /**
   * A reference to an image embedded in this node.
   * To download the image using this reference, use the `GET file images` endpoint to retrieve the mapping from image references to image URLs
   * @see https://www.figma.com/developers/api#get-images-endpoint
   */
  imageRef: string
  /**
   * Defines what image filters have been applied to this paint, if any.
   * If this property is not defined, no filters have been applied.
   * @default {}
   */
  filters: ImageFilters
  /**
   * A reference to the GIF embedded in this node, if the image is a GIF.
   * To download the image using this reference, use the `GET file images` endpoint to retrieve the mapping from image references to image URLs
   * @see https://www.figma.com/developers/api#get-images-endpoint
   */
  gifRef: string
  /**
   * A mapping of field to the VariableAlias of the bound variable.
   */
  boundVariables: Record<string, VariableAlias | VariableAlias[]>
}

export enum PaintType {
  SOLID = "SOLID",
  GRADIENT_LINEAR = "GRADIENT_LINEAR",
  GRADIENT_RADIAL = "GRADIENT_RADIAL",
  GRADIENT_ANGULAR = "GRADIENT_ANGULAR",
  GRADIENT_DIAMOND = "GRADIENT_DIAMOND",
  IMAGE = "IMAGE",
  EMOJI = "EMOJI",
  VIDEO = "VIDEO",
}

export enum ScaleMode {
  FILL = "FILL",
  FIT = "FIT",
  TILE = "TILE",
  STRETCH = "STRETCH",
}

/**
 * A 2x3 affine transformation matrix
 * A 2D affine transformation matrix that can be used to calculate the affine transforms applied to a layer, including scaling, rotation, shearing, and translation.
 * The form of the matrix is given as an array of 2 arrays of 3 numbers each. E.g. the identity matrix would be [[1, 0, 0], [0, 1, 0]].
 * @see https://www.figma.com/developers/api#transform-type
 */
export type Transform = [[number, number, number], [number, number, number]]

/**
 * Defines the image filters applied to an image paint.
 * All values are from -1 to 1.
 * @see https://www.figma.com/developers/api#imagefilters-type
 */
export interface ImageFilters {
  /**
   * @default 0
   */
  exposure: number
  /**
   * @default 0
   */
  contrast: number
  /**
   * @default 0
   */
  saturation: number
  /**
   * @default 0
   */
  temperature: number
  /**
   * @default 0
   */
  tint: number
  /**
   * @default 0
   */
  highlights: number
  /**
   * @default 0
   */
  shadows: number
}

/**
 * A position color pair representing a gradient stop
 * @see https://www.figma.com/developers/api#colorstop-type
 */
export interface ColorStop {
  /**
   * Value between 0 and 1 representing position along gradient axis
   */
  position: number
  /**
   * Color attached to corresponding position
   */
  color: Color
}

/**
 * A width and a height
 * @see https://www.figma.com/developers/api#size-type
 */
export interface Size {
  /**
   * the width of a size
   */
  width: number
  /**
   * the height of a size
   */
  height: number
}

/**
 * A relative offset within a frame
 * @see https://www.figma.com/developers/api#frameoffset-type
 */
export interface FrameOffset {
  /**
   * Unique id specifying the frame.
   */
  node_id: string
  /**
   * 2d vector offset within the frame.
   */
  node_offset: Vector
}

/**
 * Paint metadata to override default paints
 * @see https://www.figma.com/developers/api#paintoverride-type
 */
export interface PaintOverride {
  /**
   * Paints applied to characters
   */
  fills: Paint[]
  /**
   * ID of style node, if any, that this inherits fill data from
   */
  inheritFillStyleId: string
}

/**
 * Metadata for character formatting
 * @see https://www.figma.com/developers/api#typestyle-type
 */
export interface TypeStyle {
  /**
   * Font family of text (standard name)
   */
  fontFamily: string
  /**
   * PostScript font name
   */
  fontPostScriptName: string
  /**
   * Space between paragraphs in px, 0 if not present
   * @default 0
   */
  paragraphSpacing: number
  /**
   * Paragraph indentation in px, 0 if not present
   * @default 0
   */
  paragraphIndent: number
  /**
   * Space between list items in px, 0 if not present
   * @default 0
   */
  listSpacing: number
  /**
   * Whether or not text is italicized
   */
  italic: boolean
  /**
   * Numeric font weight
   */
  fontWeight: number
  /**
   * Font size in px
   */
  fontSize: number
  /**
   * Text casing applied to the node, default is the original casing
   * @default ORIGINAL
   */
  textCase: TextCase
  /**
   * Text decoration applied to the node, default is none
   * @default NONE
   */
  textDecoration: TextDecoration
  /**
   * Dimensions along which text will auto resize, default is that the text does not auto-resize.
   * TRUNCATE means that the text will be shortened and trailing text will be replaced with "…" if the text contents is larger than the bounds.
   * TRUNCATE as a return value is deprecated and will be removed in a future version.
   * Read fromtextTruncation instead.
   * @default NONE
   */
  textAutoResize: TextAutoResize
  /**
   * Whether this text node will truncate with an ellipsis when the text contents is larger than the text node.
   * @default DISABLED
   */
  textTruncation: TextTruncation
  /**
   * When textTruncation: "ENDING" is set, maxLinesdetermines how many lines a text node can grow to before it truncates.
   * @default null
   */
  maxLines: Nullable<number>
  /**
   * Horizontal text alignment as string enum
   */
  textAlignHorizontal: TextAlignHorizontal
  /**
   * Vertical text alignment as string enum
   */
  textAlignVertical: TextAlignVertical
  /**
   * Space between characters in px
   */
  letterSpacing: number
  /**
   * Paints applied to characters
   */
  fills: Paint[]
  /**
   * Link to a URL or frame
   */
  hyperlink: Hyperlink
  /**
   * A map of OpenType feature flags to 1 or 0, 1 if it is enabled and 0 if it is disabled.
   * Note that some flags aren't reflected here.
   * For example, SMCP (small caps) is still represented by the textCase field.
   * @default {}
   */
  opentypeFlags: Record<string, number>
  /**
   * Line height in px
   */
  lineHeightPx: number
  /**
   * Line height as a percentage of normal line height.
   * This is deprecated; in a future version of the API only lineHeightPx and lineHeightPercentFontSize will be returned.
   * @default 100
   */
  lineHeightPercent: number
  /**
   * Line height as a percentage of the font size.
   * Only returned when lineHeightPercent is not 100.
   */
  lineHeightPercentFontSize: number
  /**
   * The unit of the line height value specified by the user.
   */
  lineHeightUnit: LineHeightUnit
}

export enum TextCase {
  ORIGINAL = "ORIGINAL",
  UPPER = "UPPER",
  LOWER = "LOWER",
  TITLE = "TITLE",
  SMALL_CAPS = "SMALL_CAPS",
  SMALL_CAPS_FORCED = "SMALL_CAPS_FORCED",
}

export enum TextDecoration {
  NONE = "NONE",
  STRIKETHROUGH = "STRIKETHROUGH",
  UNDERLINE = "UNDERLINE",
}

export enum TextAutoResize {
  NONE = "NONE",
  HEIGHT = "HEIGHT",
  WIDTH_AND_HEIGHT = "WIDTH_AND_HEIGHT",
  TRUNCATE = "TRUNCATE",
}

export enum TextTruncation {
  DISABLED = "DISABLED",
  ENDING = "ENDING",
}

export enum TextAlignHorizontal {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  CENTER = "CENTER",
  JUSTIFIED = "JUSTIFIED",
}

export enum TextAlignVertical {
  TOP = "TOP",
  CENTER = "CENTER",
  BOTTOM = "BOTTOM",
}

export enum LineHeightUnit {
  PIXELS = "PIXELS",
  FONT_SIZE_PERCENT = "FONT_SIZE_%",
  INTRINSIC_PERCENT = "INTRINSIC_%",
}

/**
 * A description of a main component.
 * Helps you identify which component instances are attached to
 * @see https://www.figma.com/developers/api#component-type
 */
export interface Component {
  /**
   * The key of the component
   */
  key: string
  /**
   * The name of the component
   */
  name: string
  /**
   * The description of the component as entered in the editor
   */
  description: string
  /**
   * The ID of the component set if the component belongs to one
   */
  componentSetId?: string
  /**
   * The documentation links for this component.
   */
  documentationLinks: DocumentationLink[]
  /**
   * Whether this component is a remote component that doesn't live in this file
   */
  remote: boolean
}

/**
 * A description of a component set, which is a node containing a set of variants of a component
 * @see https://www.figma.com/developers/api#componentset-type
 */
export interface ComponentSet {
  /**
   * The key of the component set
   */
  key: string
  /**
   * The name of the component set
   */
  name: string
  /**
   * The description of the component set as entered in the editor
   */
  description: string
  /**
   * The documentation links for this component set.
   */
  documentationLinks: DocumentationLink[]
  /**
   * Whether this component set is a remote component set that doesn't live in this file
   */
  remote: boolean
}

/**
 * A set of properties that can be applied to nodes and published.
 * Styles for a property can be created in the corresponding property's panel while editing a file.
 * @see https://www.figma.com/developers/api#style-type
 */
export interface Style {
  /**
   * The key of the style
   */
  key: string
  /**
   * The name of the style
   */
  name: string
  /**
   * The description of the style
   */
  description: string
  /**
   * Whether this style is a remote style that doesn't live in this file
   */
  remote: boolean
  /**
   * The type of style as string enum
   */
  styleType: StyleType
}

export enum StyleType {
  FILL = "FILL",
  TEXT = "TEXT",
  EFFECT = "EFFECT",
  GRID = "GRID",
}

/**
 * Geometric shape type
 * @see https://www.figma.com/developers/api#shapetype-type
 */
export interface ShapeType {
  SQUARE: string
  ELLIPSE: string
  ROUNDED_RECTANGLE: string
  DIAMOND: string
  TRIANGLE_DOWN: string
  PARALLELOGRAM_RIGHT: string
  PARALLELOGRAM_LEFT: string
}

/**
 * Stores canvas location for a connector start/end point.
 * @see https://www.figma.com/developers/api#connectorendpoint-type
 */
export type ConnectorEndpoint =
  | ConnectorEndpointPosition
  | ConnectorEndpointMagnet

/**
 * ConnectorEndpoint with endpointNodeId and position only:
 */
export interface ConnectorEndpointPosition {
  /**
   * Node ID this endpoint attaches to.
   */
  endpointNodeId: string
  /**
   * Canvas location as x & y coordinate.
   */
  position: Vector
}

/**
 * ConnectorEndpoint with endpointNodeId and magnet only:
 */
export interface ConnectorEndpointMagnet {
  /**
   * Node ID this endpoint attaches to.
   */
  endpointNodeId: string
  /**
   * The magnet type is a string enum
   */
  magnet: ConnectorMagnet
}

export enum ConnectorMagnet {
  AUTO = "AUTO",
  TOP = "TOP",
  BOTTOM = "BOTTOM",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

/**
 * Connector line type
 * @see https://www.figma.com/developers/api#connectorlinetype-type
 */
export interface ConnectorLineType {
  ELBOWED: string
  STRAIGHT: string
}

/**
 * Connector text background.
 * @see https://www.figma.com/developers/api#connectortextbackground-type
 */
export interface ConnectorTextBackground {
  /**
   * Radius of each corner of the rectangle if a single radius is set for all corners
   */
  cornerRadius: CornerRadius
  /**
   * An array of fill paints applied to the node
   */
  fills: Paint[]
}

export type CornerRadius = any

/**
 * Component property definition
 * @see https://www.figma.com/developers/api#componentpropertydefinition-type
 */
export interface ComponentPropertyDefinition {
  /**
   * Type of this component property
   */
  type: ComponentPropertyType
  /**
   * Initial value of this property for instances
   */
  defaultValue: string | boolean
  /**
   * All possible values for this property. Only exists on VARIANT properties
   */
  variantOptions?: string[]
  /**
   * List of user-defined preferred values for this property.
   * Only exists on INSTANCE_SWAP properties
   */
  preferredValues?: InstanceSwapPreferredValue[]
}

/**
 * Component property type
 * @see https://www.figma.com/developers/api#componentpropertytype-type
 */
export interface ComponentPropertyType {
  BOOLEAN: string
  INSTANCE_SWAP: string
  TEXT: string
  VARIANT: string
}

/**
 * Instance swap preferred value
 * @see https://www.figma.com/developers/api#instanceswappreferredvalue-type
 */
export interface InstanceSwapPreferredValue {
  /**
   * Type of node for this preferred value
   */
  type: "COMPONENT" | "COMPONENT_SET"
  /**
   * Key of this component or component set
   */
  key: string
}

/**
 * Component property
 * @see https://www.figma.com/developers/api#componentproperty-type
 */
export interface ComponentProperty {
  /**
   * Type of this component property
   */
  type: ComponentPropertyType
  /**
   * Value of this property set on this instance
   */
  value: boolean | string
  /**
   * List of user-defined preferred values for this property.
   * Only exists on INSTANCE_SWAP properties
   */
  preferredValues?: InstanceSwapPreferredValue[]
  /**
   * A mapping of field to the VariableAlias of the bound variable.
   */
  boundVariables: Record<string, VariableAlias | VariableAlias[]>
}

/**
 * The device used to view a prototype
 * @see https://www.figma.com/developers/api#prototypedevice-type
 */
export interface PrototypeDevice {
  type: "NONE" | "PRESET" | "CUSTOM" | "PRESENTATION"
  size: Size
  presetIdentifier: string
  rotation: "NONE" | "CCW_90"
}

/**
 * Individual stroke weights
 * @see https://www.figma.com/developers/api#strokeweights-type
 */
export interface StrokeWeights {
  /**
   * The top stroke weight
   */
  top: number
  /**
   * The left stroke weight
   */
  left: number
  /**
   * The bottom stroke weight
   */
  bottom: number
  /**
   * The right stroke weight
   */
  right: number
}

/**
 * Fields directly overridden on an instance.
 * Inherited overrides are not included.
 * @see https://www.figma.com/developers/api#overrides-type
 */
export interface Overrides {
  /**
   * A unique ID for a node
   */
  id: string
  /**
   * An array of properties
   */
  overriddenFields: string[]
}

/**
 * Contains a variable alias.
 * @see https://www.figma.com/developers/api#variablealias-type
 */
export interface VariableAlias {
  /**
   * Value is always VARIABLE_ALIAS.
   */
  type: string
  /**
   * The id of the variable that the current variable is aliased to.
   * This variable can be a local or remote variable, and both can be retrieved via the GET /v1/files/:file_key/variables/local endpoint.
   */
  id: string
}
