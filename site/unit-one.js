/* Unit 1 daily lessons. Proposed dates; teacher may adjust pacing. Original teaching content. */
const UNIT_ONE_DAYS = [
  {
    "id": "unit1-day1",
    "unit": "unit1",
    "day": 1,
    "suggestedDate": "2026-09-03",
    "phase": "compose",
    "title": "Day 1: Coordinates and your first sketch",
    "concept": "Coordinates and your first sketch",
    "outcome": "Place and identify marks using x/y coordinates on a 400 × 400 canvas.",
    "deliverable": "A saved sketch, paper coordinate map, and one explained change.",
    "prerequisites": "No Processing experience required.",
    "duration": "75 minutes · proposed pacing",
    "prediction": {
      "prompt": "On a 400 × 400 canvas, where will circle(300, 100, 60) appear?",
      "reveal": "Its center is 300 pixels right and 100 pixels down from the upper-left origin. Its diameter is 60, so it lies in the upper-right quarter."
    },
    "misconception": "“A larger y value moves a shape upward.”",
    "model": "size(400, 400);\nbackground(240);\nstroke(30);\nstrokeWeight(6);\npoint(80, 100);\nline(80, 100, 300, 100);\nfill(70, 140, 220);\ncircle(300, 100, 60);",
    "missions": [
      [
        "Map",
        "Draw a 400 × 400 grid on paper and label the origin and center.",
        "Place (300, 100) and explain both numbers."
      ],
      [
        "Build",
        "Create and save a Java-mode sketch. Add a point, line, and circle.",
        "Your drawing matches your paper map."
      ],
      [
        "Change",
        "Predict the effect of changing only one coordinate. Run and compare.",
        "Save the changed version and explain the result."
      ]
    ],
    "checks": [
      "Change the circle center to (100, 300). Explain which direction each coordinate moved it.",
      "Close and reopen the saved .pde from its matching folder."
    ],
    "support": "coordinates",
    "download": "FirstMark",
    "java": "Statements run in order; function arguments and drawing state determine the visible result.",
    "reflection": "How do you know which argument moves the circle down?",
    "extension": "Arrange five marks to suggest an object without adding new drawing commands.",
    "deck": [
      {
        "label": "Launch",
        "title": "A picture made from instructions",
        "minutes": 5,
        "bullets": [
          "Today: give marks an address.",
          "Make a saved sketch you can explain.",
          "Draw your first prediction on paper."
        ]
      },
      {
        "label": "Predict",
        "title": "Where will the circle appear?",
        "minutes": 5,
        "text": "Sketch the canvas and mark the center. What does 60 control?",
        "code": "size(400, 400);\ncircle(300, 100, 60);"
      },
      {
        "label": "Reason it through",
        "title": "Right 300, down 100",
        "minutes": 5,
        "text": "The circle is centered at (300, 100). The last argument is its diameter, not its radius.",
        "visual": "coordinates"
      },
      {
        "label": "Mini-lesson · setup",
        "title": "Run one complete sketch",
        "minutes": 8,
        "bullets": [
          "Open Processing and choose Java mode.",
          "File → New. Type size(400, 400); then background(240);",
          "Run. Save as FirstComposition; keep the folder and .pde name together.",
          "A static sketch needs no setup() or draw() wrapper today."
        ]
      },
      {
        "label": "Mini-lesson · geometry",
        "title": "A point, a line, a circle",
        "minutes": 7,
        "text": "The line needs two endpoints. Each point needs x and y.",
        "code": "stroke(30);\nstrokeWeight(6);\npoint(80, 100);\nline(80, 100, 300, 100);\nfill(70, 140, 220);\ncircle(300, 100, 60);"
      },
      {
        "label": "Guided practice",
        "title": "Move one coordinate",
        "minutes": 10,
        "bullets": [
          "Predict circle(100, 300, 60) on paper.",
          "Change only the two coordinates. Run and compare.",
          "If your picture differs, point to the first argument you would inspect."
        ],
        "link": [
          "coordinates",
          "Open the coordinate model"
        ]
      },
      {
        "label": "Studio",
        "title": "Make a tiny visual message",
        "minutes": 20,
        "bullets": [
          "Use points, lines, and circles to suggest something recognizable.",
          "Keep the canvas 400 × 400. Save early.",
          "Label three coordinates on paper before typing them.",
          "Already fluent? Work within five marks and explain each placement."
        ]
      },
      {
        "label": "Peer test",
        "title": "Read the code before seeing the image",
        "minutes": 8,
        "bullets": [
          "Partner A chooses one drawing line. Partner B predicts its location.",
          "Run and compare. Switch roles.",
          "Ask about one mismatch; let the author make the change."
        ]
      },
      {
        "label": "Share",
        "title": "Name the instruction that mattered",
        "minutes": 2,
        "text": "Show one visible change and identify the exact number that caused it."
      },
      {
        "label": "Exit",
        "title": "Save a restart point",
        "minutes": 5,
        "bullets": [
          "Save and reopen your sketch.",
          "In the workbook: predict a new y value and record its actual effect.",
          "Leave a next step you can use next class."
        ]
      }
    ]
  },
  {
    "id": "unit1-day2",
    "unit": "unit1",
    "day": 2,
    "suggestedDate": "2026-09-08",
    "phase": "compose",
    "title": "Day 2: Shape geometry and drawing order",
    "concept": "Shape geometry and drawing order",
    "outcome": "Decompose a reference into primitives and explain which mark covers an overlap.",
    "deliverable": "A paper decomposition and a layered study using five shape types.",
    "prerequisites": "A saved 400 × 400 static sketch.",
    "duration": "75 minutes · proposed pacing",
    "prediction": {
      "prompt": "A filled rectangle is drawn, then an opaque ellipse overlaps it. Which one covers the overlap?",
      "reveal": "The ellipse is drawn later, so its opaque fill covers the rectangle wherever they overlap. Swapping the drawing groups swaps the overlap."
    },
    "misconception": "“The first shape in the file stays in front.”",
    "model": "size(400, 400);\nbackground(240);\nfill(80, 140, 220);\nrect(80, 80, 180, 140);\nfill(240, 160, 70);\nellipse(220, 180, 140, 100);",
    "missions": [
      [
        "Decompose",
        "Choose a simple design and sketch its primitive shapes.",
        "Identify five different shape types you could use."
      ],
      [
        "Layer",
        "Draw a background layer, middle layer, and foreground.",
        "Trace a visible overlap to statement order."
      ],
      [
        "Compare",
        "Reverse two fill-and-shape groups.",
        "Record what changed and what stayed fixed."
      ]
    ],
    "checks": [
      "Explain the default anchor of rect() and ellipse().",
      "Swap two complete color-and-shape groups and predict the overlap."
    ],
    "support": "coordinates",
    "download": "LayerStudy",
    "java": "Statements run in order; function arguments and drawing state determine the visible result.",
    "reflection": "Which overlapping shapes depend on drawing order, and how can you prove it?",
    "extension": "Try rectMode(CENTER) in a separate experiment; explain why existing coordinates need reconsideration.",
    "deck": [
      {
        "label": "Launch",
        "title": "Build a picture from simpler shapes",
        "minutes": 5,
        "bullets": [
          "Retrieve: point to (100, 300) on a paper canvas.",
          "Today: shapes have different anchors, and statements have an order.",
          "Make a layered study before starting the larger project."
        ]
      },
      {
        "label": "Predict",
        "title": "Which shape covers the overlap?",
        "minutes": 5,
        "code": "fill(80, 140, 220);\nrect(80, 80, 180, 140);\nfill(240, 160, 70);\nellipse(220, 180, 140, 100);"
      },
      {
        "label": "Reason it through",
        "title": "The later opaque fill covers earlier marks",
        "minutes": 5,
        "text": "Processing draws in statement order. Move each fill with its shape when testing order.",
        "visual": "layers"
      },
      {
        "label": "Mini-lesson · anchors",
        "title": "Corner and center are different anchors",
        "minutes": 8,
        "code": "rect(80, 80, 180, 140);\nellipse(220, 180, 140, 100);",
        "bullets": [
          "Default rect: x/y is the upper-left corner; then width/height.",
          "Default ellipse: x/y is the center; then width/height.",
          "Do not treat every x/y pair as the upper-left corner."
        ],
        "visual": "anchors"
      },
      {
        "label": "Mini-lesson · shape vocabulary",
        "title": "Choose the primitive that fits",
        "minutes": 7,
        "text": "These are five different shape types. A triangle takes three coordinate pairs.",
        "code": "point(30, 30);\nline(30, 50, 130, 50);\nrect(30, 80, 100, 50);\nellipse(220, 100, 90, 50);\ntriangle(160, 220, 220, 140, 280, 220);"
      },
      {
        "label": "Guided practice",
        "title": "Draw, swap, compare",
        "minutes": 10,
        "bullets": [
          "Run the prediction excerpt inside a complete static sketch.",
          "Sketch the result of swapping its two groups.",
          "Move the groups, run, and explain the overlap.",
          "Keep coordinates fixed so order is the only change."
        ]
      },
      {
        "label": "Studio",
        "title": "Decompose a reference",
        "minutes": 20,
        "bullets": [
          "Use your own image or a reference your teacher approves.",
          "Draw its large shapes on paper; number the back-to-front order.",
          "Build a study with five shape types. Repetition can wait.",
          "Keep the reference and source credit with the project notes."
        ]
      },
      {
        "label": "Peer test",
        "title": "Trace one visible decision",
        "minutes": 8,
        "bullets": [
          "Point to a shape in the output; your partner finds its code.",
          "Ask: corner or center? Which earlier mark does it cover?",
          "Find one mismatch between paper plan and output."
        ]
      },
      {
        "label": "Share",
        "title": "Explain a layer",
        "minutes": 2,
        "text": "Show an overlap and read the two instructions that establish its order."
      },
      {
        "label": "Exit",
        "title": "Record the mechanism",
        "minutes": 5,
        "bullets": [
          "Save the sketch and one screenshot.",
          "Explain rect() versus ellipse() anchors without running.",
          "Write a restart note naming the next shape or layer."
        ]
      }
    ]
  },
  {
    "id": "unit1-day3",
    "unit": "unit1",
    "day": 3,
    "suggestedDate": "2026-09-10",
    "phase": "compose",
    "title": "Day 3: Color, outlines, and transparency",
    "concept": "Color, outlines, and transparency",
    "outcome": "Control grayscale, RGB, HSB, and alpha while tracking drawing state.",
    "deliverable": "A small color study with labeled modes and one transparency comparison.",
    "prerequisites": "Shape arguments and drawing order.",
    "duration": "75 minutes · proposed pacing",
    "prediction": {
      "prompt": "After fill(255, 0, 0), two shapes are drawn without another fill(). What fills the second shape?",
      "reveal": "It is red too, under the default RGB 0–255 mode. fill() changes drawing state; it does not apply only to the next shape."
    },
    "misconception": "“fill() is used up after one shape.”",
    "model": "size(400, 400);\nbackground(240);\ncolorMode(RGB, 255);\nfill(255, 0, 0);\nrect(40, 80, 120, 120);\nellipse(230, 140, 100, 100);",
    "missions": [
      [
        "Compare",
        "Make grayscale and RGB swatches and label their values.",
        "Explain which channel you changed."
      ],
      [
        "Switch mode",
        "Add an HSB swatch with explicit ranges; restore RGB afterward.",
        "Explain why the same numbers can mean different colors."
      ],
      [
        "Layer",
        "Compare an opaque shape and an alpha-filled shape over the same background.",
        "Record what remains visible underneath."
      ]
    ],
    "checks": [
      "Remove one fill() call and predict the inherited color.",
      "Restore RGB, 255 before using RGB alpha examples."
    ],
    "support": "coordinates",
    "download": "FirstMark",
    "java": "Statements run in order; function arguments and drawing state determine the visible result.",
    "reflection": "Why does a fill value make sense only when you know the current color mode?",
    "extension": "Compare two backgrounds under the same transparent fill. Explain why the displayed color changes.",
    "deck": [
      {
        "label": "Launch",
        "title": "Color is part of the drawing state",
        "minutes": 5,
        "bullets": [
          "Retrieve: explain which of two overlapping shapes is in front.",
          "Today: fill, stroke, mode, and alpha.",
          "Keep a small study separate from your project."
        ]
      },
      {
        "label": "Predict",
        "title": "What color is the second shape?",
        "minutes": 5,
        "code": "colorMode(RGB, 255);\nfill(255, 0, 0);\nrect(40, 80, 120, 120);\nellipse(230, 140, 100, 100);"
      },
      {
        "label": "Reason it through",
        "title": "Both shapes inherit the red fill",
        "minutes": 5,
        "text": "fill() persists until another fill() or noFill() changes it. stroke() and strokeWeight() also affect later drawing."
      },
      {
        "label": "Mini-lesson · color",
        "title": "Grayscale and RGB",
        "minutes": 8,
        "text": "In this mode, each channel ranges from 0 to 255.",
        "code": "colorMode(RGB, 255);\nfill(90); // grayscale\nrect(30, 40, 80, 80);\nfill(220, 70, 40); // red, green, blue\nrect(140, 40, 80, 80);\nfill(30, 120, 220);\nrect(250, 40, 80, 80);"
      },
      {
        "label": "Mini-lesson · mode",
        "title": "HSB needs an explicit scale",
        "minutes": 7,
        "text": "Hue selects a color around the wheel. Saturation controls vividness; brightness controls lightness toward black. Alpha uses the fourth maximum.",
        "code": "colorMode(HSB, 360, 100, 100, 100);\nfill(200, 80, 90);\nrect(30, 170, 100, 100);\ncolorMode(RGB, 255); // restore RGB"
      },
      {
        "label": "Guided practice",
        "title": "See through a foreground shape",
        "minutes": 10,
        "text": "Predict what changes with alpha 0, 127, and 255. Compare each result over the same background.",
        "code": "colorMode(RGB, 255);\nfill(30, 120, 220);\nrect(80, 80, 140, 140);\nstroke(30);\nstrokeWeight(4);\nfill(255, 0, 0, 127);\nellipse(220, 180, 160, 160);"
      },
      {
        "label": "Studio",
        "title": "Make a labeled color study",
        "minutes": 20,
        "bullets": [
          "Include one grayscale, two RGB colors, and one HSB color.",
          "Use fill, stroke, and at least two outline weights.",
          "Add one overlapping shape with alpha transparency.",
          "Restore colorMode(RGB, 255) after the HSB experiment."
        ]
      },
      {
        "label": "Peer test",
        "title": "Follow the active state",
        "minutes": 8,
        "bullets": [
          "Choose a shape and find the most recent colorMode, fill, and stroke above it.",
          "Predict the effect of removing one fill call.",
          "Run the change, explain it, then restore your version."
        ]
      },
      {
        "label": "Share",
        "title": "Explain transparency",
        "minutes": 2,
        "text": "Show the same shape at two alpha values. Name both the active range and the background it blends with."
      },
      {
        "label": "Exit",
        "title": "Keep evidence of one color decision",
        "minutes": 5,
        "bullets": [
          "Save the study and an annotated screenshot.",
          "Explain why fill(200, 80, 90) is ambiguous without its mode.",
          "Choose a palette direction for your project."
        ]
      }
    ]
  },
  {
    "id": "unit1-day4",
    "unit": "unit1",
    "day": 4,
    "suggestedDate": "2026-09-14",
    "phase": "compose",
    "title": "Day 4: Plan and begin a 2D remake",
    "concept": "Plan and begin a 2D remake",
    "outcome": "Translate an approved reference into a coordinate plan and an initial coded composition.",
    "deliverable": "A reference credit, paper plan, and working large-shape draft.",
    "prerequisites": "Coordinates, primitive shapes, drawing state, RGB/HSB/alpha.",
    "duration": "75 minutes · proposed pacing",
    "prediction": {
      "prompt": "If the reference has a curve your current shapes cannot reproduce exactly, what is a useful first step?",
      "reveal": "Approximate its large silhouette with known shapes, compare the result, and refine deliberately. Preserve the visual intention before adding details."
    },
    "misconception": "“A remake must begin with tiny details or be pixel-perfect.”",
    "model": "// Static sketch scaffold\nsize(400, 400);\nbackground(240);\n// 1. Large background forms\n// 2. Middle shapes\n// 3. Foreground and details",
    "missions": [
      [
        "Plan",
        "Choose an approved reference and state what you intend to remake and why.",
        "Keep the image and credit with your project."
      ],
      [
        "Map",
        "Draw a paper plan with coordinates and layer order.",
        "Label where each required shape and color technique will appear."
      ],
      [
        "Build",
        "Code the largest forms first and save a working draft.",
        "Your draft establishes the composition before detail."
      ]
    ],
    "checks": [
      "Can you identify five shape types and at least ten total shapes in the plan?",
      "Does the plan include grayscale, two RGB colors, HSB, stroke weight, and transparency?"
    ],
    "support": "coordinates",
    "download": "FirstMark",
    "java": "Statements run in order; function arguments and drawing state determine the visible result.",
    "reflection": "Which choice preserves the reference’s visual intention, and what did you simplify?",
    "extension": "Explain a deliberate transformation of the reference rather than simply adding detail.",
    "deck": [
      {
        "label": "Launch",
        "title": "The 2D remake project",
        "minutes": 5,
        "bullets": [
          "Use shapes and color to remake an existing image or design.",
          "Choose a reference your teacher approves and keep its source credit.",
          "Today: paper plan and first coded draft."
        ]
      },
      {
        "label": "Predict",
        "title": "What should you build first?",
        "minutes": 5,
        "text": "Your reference has a complicated curve, a simple background, and many small details. Choose your first three coding steps and explain the order."
      },
      {
        "label": "Reason it through",
        "title": "Establish the large forms",
        "minutes": 5,
        "bullets": [
          "Draw the canvas and large silhouette first.",
          "Approximate with shapes you understand.",
          "Compare composition before investing in detail."
        ]
      },
      {
        "label": "Project brief",
        "title": "The design constraints",
        "minutes": 8,
        "text": "Working requirements from the archived Unit 1 brief; follow any changes your teacher announces.",
        "bullets": [
          "400 × 400 canvas with a chosen background.",
          "At least five shape types and ten shapes total.",
          "One grayscale, two RGB colors, and one HSB color.",
          "Use fill, stroke, strokeWeight, and one alpha-filled shape."
        ]
      },
      {
        "label": "Planning lesson",
        "title": "Give the paper plan useful labels",
        "minutes": 7,
        "bullets": [
          "Mark origin, anchor coordinates, widths, and heights.",
          "Number shapes from back to front.",
          "Note color values and active color modes.",
          "Name the focal point and one intended simplification."
        ]
      },
      {
        "label": "Guided planning",
        "title": "Explain your first three shapes",
        "minutes": 10,
        "bullets": [
          "Partner: identify the reference’s biggest forms.",
          "Author: point to the planned code for each form.",
          "Check that anchors and layer order make sense.",
          "Resolve one uncertain coordinate before starting."
        ]
      },
      {
        "label": "Studio",
        "title": "Build a working draft",
        "minutes": 20,
        "bullets": [
          "Save a new project folder before coding.",
          "Code background, large forms, then selected details.",
          "Run after small groups of changes.",
          "Keep a dated draft; do not overwrite your only working version."
        ]
      },
      {
        "label": "Conference",
        "title": "Compare reference, plan, and output",
        "minutes": 8,
        "bullets": [
          "Show all three side by side.",
          "Identify one intentional change and one mismatch.",
          "Choose the next revision that matters most to the composition."
        ]
      },
      {
        "label": "Share",
        "title": "Name the next revision",
        "minutes": 2,
        "text": "Point to the region you will revise next and say which coordinates, dimensions, or colors you will change."
      },
      {
        "label": "Exit",
        "title": "Leave a usable restart note",
        "minutes": 5,
        "bullets": [
          "Save the reference credit and paper-plan image.",
          "Save your working .pde and screenshot.",
          "Write your next concrete code change and one open question."
        ]
      }
    ]
  },
  {
    "id": "unit1-day5",
    "unit": "unit1",
    "day": 5,
    "suggestedDate": "2026-09-16",
    "phase": "compose",
    "title": "Day 5: Revise, debug, and test the design",
    "concept": "Revise, debug, and test the design",
    "outcome": "Use a predicted change and peer evidence to revise a working composition.",
    "deliverable": "A revised design plus one documented before/after improvement.",
    "prerequisites": "A working draft and paper plan.",
    "duration": "75 minutes · proposed pacing",
    "prediction": {
      "prompt": "You change a fill and three coordinates together, and the result improves. Can you tell which change caused the improvement?",
      "reveal": "Not reliably. Keep a baseline, change one decision at a time, and compare. You can then connect a specific code change to its visible effect."
    },
    "misconception": "“Changing many things at once makes debugging faster.”",
    "model": "// Baseline\nfill(60, 120, 220);\nrect(70, 90, 180, 120);\n// Test in a separate copy:\n// change only 70 to 100, then compare.",
    "missions": [
      [
        "Audit",
        "Locate code evidence for the adopted project requirements.",
        "Distinguish a shape type from a repeated instance."
      ],
      [
        "Revise",
        "Save a baseline, predict one change, run it, and compare.",
        "Keep screenshots and matching source versions."
      ],
      [
        "Test",
        "Ask a peer to explain and open the draft.",
        "Record one observation and your response."
      ]
    ],
    "checks": [
      "Check the actual drawing calls for five types and ten total shapes.",
      "Inspect colorMode transitions and the alpha range at the transparent shape.",
      "Reopen the project from a copied folder and run it."
    ],
    "support": "packaging",
    "download": "FirstMark",
    "java": "Statements run in order; function arguments and drawing state determine the visible result.",
    "reflection": "What observation led you to a revision, and how did the next run support it?",
    "extension": "Create a second composition using the same geometry but a different palette; explain the changed emphasis.",
    "deck": [
      {
        "label": "Launch",
        "title": "Revision with evidence",
        "minutes": 5,
        "bullets": [
          "Open your draft and read your restart note.",
          "Today: complete the design, test it, and explain one improvement.",
          "Keep a baseline before editing."
        ]
      },
      {
        "label": "Predict",
        "title": "Which change caused the result?",
        "minutes": 5,
        "text": "You changed a fill and three coordinates at once. The picture improved. What experiment would help you explain why?"
      },
      {
        "label": "Reason it through",
        "title": "Compare one decision at a time",
        "minutes": 5,
        "bullets": [
          "Return to a saved baseline.",
          "Predict the effect of one edit and run it.",
          "Keep or reject the edit using the visible result."
        ]
      },
      {
        "label": "Debugging lesson",
        "title": "Find the first mismatch",
        "minutes": 8,
        "bullets": [
          "Syntax error: read the first reported error and check the nearby semicolon or parentheses.",
          "Wrong position: check the shape anchor and argument order.",
          "Wrong color: trace the most recent colorMode and fill.",
          "Missing shape: check clipping and later opaque layers."
        ]
      },
      {
        "label": "Evidence lesson",
        "title": "Count what the code actually draws",
        "minutes": 7,
        "bullets": [
          "Five rectangles are five instances of one shape type.",
          "A commented-out call draws nothing.",
          "A hidden mark may count in code but fail the design intention.",
          "Point to the relevant calls; explain the result instead of relying on a checkbox."
        ]
      },
      {
        "label": "Guided revision",
        "title": "Make one comparison",
        "minutes": 10,
        "bullets": [
          "Write: I predict changing ___ will cause ___.",
          "Save baseline A. Create revision B.",
          "Compare screenshots at the same scale.",
          "Write: I observed ___. I will keep/reject this because ___."
        ]
      },
      {
        "label": "Studio",
        "title": "Complete and refine",
        "minutes": 20,
        "bullets": [
          "Fix the most important mismatch first.",
          "Audit the adopted geometry and color requirements.",
          "Group code by visual layer and add useful comments.",
          "Reserve a working copy before trying an optional extension."
        ]
      },
      {
        "label": "Peer test",
        "title": "Try the saved project",
        "minutes": 8,
        "bullets": [
          "Copy the project folder to a fresh location and open its .pde.",
          "Peer: run it and ask about one visible choice.",
          "Author: observe; note confusing instructions or missing evidence."
        ],
        "link": [
          "packaging",
          "Open the packaging guide"
        ]
      },
      {
        "label": "Share",
        "title": "Show one supported improvement",
        "minutes": 2,
        "text": "Show baseline and revision. Identify the code change and the observation that justified keeping it."
      },
      {
        "label": "Exit",
        "title": "Prepare for the presentation",
        "minutes": 5,
        "bullets": [
          "Save the final candidate and matching screenshot.",
          "Write a short explanation of one geometry or color mechanism.",
          "List any unfinished work honestly."
        ]
      }
    ]
  },
  {
    "id": "unit1-day6",
    "unit": "unit1",
    "day": 6,
    "suggestedDate": "2026-09-18",
    "phase": "compose",
    "title": "Day 6: Present, package, and reflect",
    "concept": "Present, package, and reflect",
    "outcome": "Present a design decision, demonstrate its code, and package matching evidence.",
    "deliverable": "A runnable source folder, required images, and a short Google Sites project story.",
    "prerequisites": "A final candidate and before/after evidence.",
    "duration": "75 minutes · proposed pacing",
    "prediction": {
      "prompt": "A project screenshot looks correct, but the linked .pde is an older draft. What will another person be able to verify?",
      "reveal": "They cannot reliably reproduce the pictured result. A useful package matches the source version, output image, and launch instructions."
    },
    "misconception": "“A screenshot alone makes a programming project reproducible.”",
    "model": "// Project folder\n// FirstComposition/\n//   FirstComposition.pde\n// Keep the screenshot and README with\n// the dated submission package.",
    "missions": [
      [
        "Package",
        "Freeze the source version and capture its output, paper plan, and reference.",
        "A fresh-folder run reproduces the screenshot."
      ],
      [
        "Present",
        "Explain intent, one mechanism, and one tested revision.",
        "Point to specific code and evidence."
      ],
      [
        "Reflect",
        "Write a short project story and submit through the teacher’s assignment.",
        "Your portfolio links to the matching runnable package."
      ]
    ],
    "checks": [
      "A peer can follow the launch instructions and reproduce the final image.",
      "Your presentation names an actual code change and its visible effect.",
      "Your package includes source, output screenshot, paper-plan image, and credited reference."
    ],
    "support": "packaging",
    "download": "FirstMark",
    "java": "Statements run in order; function arguments and drawing state determine the visible result.",
    "reflection": "What can you now explain independently, and what will you practice next?",
    "extension": "Write a small prediction question about your own code for a classmate to trace.",
    "deck": [
      {
        "label": "Launch",
        "title": "Make the work understandable to someone else",
        "minutes": 5,
        "bullets": [
          "Today: package, present, and reflect.",
          "Show your thinking as well as the finished image.",
          "Keep claims tied to code and visible evidence."
        ]
      },
      {
        "label": "Predict",
        "title": "Can the reviewer reproduce this image?",
        "minutes": 5,
        "text": "Your screenshot shows the final design, but the source link opens last week’s draft. What is missing from the evidence?"
      },
      {
        "label": "Reason it through",
        "title": "The evidence must describe the same version",
        "minutes": 5,
        "bullets": [
          "Freeze a dated source folder.",
          "Run that folder and capture its output.",
          "Link the matching image, source, and launch instructions."
        ]
      },
      {
        "label": "Packaging lesson",
        "title": "Prepare the four required artifacts",
        "minutes": 8,
        "text": "Add brief launch instructions naming Processing Java mode and the version you tested.",
        "bullets": [
          "The .pde in its matching sketch folder.",
          "Screenshot of the final output.",
          "Image of the paper design.",
          "Original reference image with source credit."
        ]
      },
      {
        "label": "Presentation lesson",
        "title": "Explain one mechanism",
        "minutes": 7,
        "bullets": [
          "Intent: what did you remake, and why?",
          "Mechanism: point to coordinates, drawing order, or color state.",
          "Revision: show one before/after comparison.",
          "Next: name an uncertainty or useful extension."
        ]
      },
      {
        "label": "Guided rehearsal",
        "title": "Rehearse with a partner",
        "minutes": 10,
        "bullets": [
          "Speak for two minutes with your source and output ready.",
          "Partner asks one “what would happen if…” question.",
          "Answer with a prediction, then test if useful.",
          "Revise an explanation that was unclear."
        ]
      },
      {
        "label": "Studio · presentations",
        "title": "Show, explain, and ask",
        "minutes": 20,
        "bullets": [
          "Use the teacher’s presentation order or small-group rotation.",
          "Author: show the reference, result, code mechanism, and revision.",
          "Audience: ask one specific question grounded in the work.",
          "Allow everyone time; continue in the flexible slot if needed."
        ]
      },
      {
        "label": "Portfolio",
        "title": "Write a short project story",
        "minutes": 8,
        "bullets": [
          "Describe intent, mechanism, revision, help, and how to run it.",
          "Include selected evidence and the matching source link.",
          "Use Google Sites for the portfolio and Classroom for submission."
        ],
        "link": [
          "story",
          "Open the project story drafter"
        ]
      },
      {
        "label": "Share",
        "title": "Credit the help you used",
        "minutes": 2,
        "text": "Name adapted references and consequential help, including AI assistance. Be ready to explain every part you submit."
      },
      {
        "label": "Exit",
        "title": "Save, submit, and back up",
        "minutes": 5,
        "bullets": [
          "Submit through your teacher’s assignment; confirm the required files.",
          "Download your notebook JSON backup to your course Drive folder.",
          "Name one skill you can demonstrate independently and one next step."
        ]
      }
    ]
  }
];
LESSONS.push(...UNIT_ONE_DAYS);
