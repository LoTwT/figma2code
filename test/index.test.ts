import mockJson from "./fixtures/mock.json"
import { transform } from "@/index"

describe("figma2code", () => {
  it("base", () => {
    const result = transform(mockJson as unknown as BaseNode)
    expect(result).toMatchInlineSnapshot(`
      {
        "children": [
          {
            "children": [
              {
                "children": [
                  {
                    "children": [
                      "按钮文字",
                    ],
                    "props": {
                      "style": {
                        "color": "rgb(1, 1, 1)",
                        "fontFamily": "Inter",
                        "fontSize": 20,
                        "fontWeight": 400,
                        "lineHeight": 24.204544067382812,
                        "textAlign": "LEFT",
                      },
                    },
                    "type": "span",
                  },
                ],
                "props": {
                  "style": {
                    "backgroundColor": "rgba(0.34546875953674316, 0.7784563302993774, 0.8374999761581421, 1)",
                    "border": "solid 1px rgb(0, 0, 0)",
                    "height": 49,
                    "width": 122,
                  },
                },
                "type": "div",
              },
            ],
            "props": {
              "style": {
                "backgroundColor": "rgba(0.7250000238418579, 0.3292708396911621, 0.3292708396911621, 1)",
                "border": "none",
                "height": 200,
                "width": 375,
              },
            },
            "type": "div",
          },
        ],
        "props": {
          "style": {
            "backgroundColor": "rgba(1, 1, 1, 1)",
            "border": "none",
            "height": 812,
            "width": 375,
          },
        },
        "type": "div",
      }
    `)
  })
})
