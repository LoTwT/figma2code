import { createElement } from "react"
import { FigmaNodeType } from "@/consts"
import type { TransformedNode } from "@/types"

export const transform = (node: BaseNode): TransformedNode => {
  let transformedNode: TransformedNode = {
    type: "div",
    props: {},
    children: [],
  }

  switch (node.type) {
    case FigmaNodeType.FRAME:
      transformedNode = parseFrame(node)
      break
    case FigmaNodeType.TEXT:
      transformedNode = parseText(node)
      break
    default:
      throw new Error("unsupported node")
  }

  return transformedNode
}

function parseFrame(node: FrameNode): TransformedNode {
  const backgroundColor = (node as any).backgroundColor

  const { strokes, strokeWeight, absoluteBoundingBox } = node
  const stroke = strokes.length > 0 ? strokes[0] : null
  const border =
    stroke && stroke.type === "SOLID" && strokeWeight
      ? `${stroke.type.toLowerCase()} ${strokeWeight as number}px rgb(${
          stroke.color.r
        }, ${stroke.color.g}, ${stroke.color.b})`
      : "none"

  const { width, height } = absoluteBoundingBox || { width: 100, height: 100 }

  return {
    type: "div",
    props: {
      style: {
        backgroundColor: backgroundColor
          ? `rgba(${backgroundColor.r * 255}, ${backgroundColor.g * 255}, ${
              backgroundColor.b * 255
            }, ${backgroundColor.a})`
          : "unset",
        border,
        width,
        height,
      },
    },
    children: node.children.map((c) => {
      const n = transform(c)
      return createElement(n.type, n.props, n.children)
    }),
  }
}

function parseText(node: TextNode): TransformedNode {
  const fontStyle = (node as any).style

  const fills = node.fills as Paint[]
  const fill = fills.length > 0 ? fills[0] : null
  const color =
    fill && fill.type === "SOLID"
      ? `rgb(${fill.color.r * 255}, ${fill.color.g * 255}, ${
          fill.color.b * 255
        })`
      : "pink"

  return {
    type: "span",
    props: {
      style: {
        fontFamily: fontStyle.fontFamily,
        fontSize: fontStyle.fontSize,
        fontWeight: fontStyle.fontWeight,
        lineHeight: fontStyle.lineHeightPx,
        textAlign: fontStyle.textAlignHorizontal,
        color,
      },
    },
    children: [node.characters],
  }
}
