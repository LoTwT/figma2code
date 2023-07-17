import mockJson from "./fixtures/mock.json"
import { transform } from "@/index"

describe("figma2code", () => {
  it("base", () => {
    const result = transform(mockJson as unknown as BaseNode)
    expect(result).toMatchInlineSnapshot(`
      {
        "children": [
          <div
            style={
              {
                "backgroundColor": "rgba(184.87500607967377, 83.96406412124634, 83.96406412124634, 1)",
                "border": "none",
                "height": 200,
                "width": 375,
              }
            }
          >
            <div
              style={
                {
                  "backgroundColor": "rgba(88.0945336818695, 198.50636422634125, 213.56249392032623, 1)",
                  "border": "solid 1px rgb(0, 0, 0)",
                  "height": 49,
                  "width": 122,
                }
              }
            >
              <span
                style={
                  {
                    "color": "rgb(255, 255, 255)",
                    "fontFamily": "Inter",
                    "fontSize": 20,
                    "fontWeight": 400,
                    "lineHeight": 24.204544067382812,
                    "textAlign": "LEFT",
                  }
                }
              >
                按钮文字
              </span>
            </div>
          </div>,
        ],
        "props": {
          "style": {
            "backgroundColor": "rgba(255, 255, 255, 1)",
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
