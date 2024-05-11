globalThis.process ??= {}; globalThis.process.env ??= {};
var draculaSoft = Object.freeze({
  "colors": {
    "activityBar.activeBackground": "#BD93F910",
    "activityBar.activeBorder": "#FF79C680",
    "activityBar.background": "#343746",
    "activityBar.foreground": "#f6f6f4",
    "activityBar.inactiveForeground": "#7b7f8b",
    "activityBarBadge.background": "#f286c4",
    "activityBarBadge.foreground": "#f6f6f4",
    "badge.background": "#44475A",
    "badge.foreground": "#f6f6f4",
    "breadcrumb.activeSelectionForeground": "#f6f6f4",
    "breadcrumb.background": "#282A36",
    "breadcrumb.focusForeground": "#f6f6f4",
    "breadcrumb.foreground": "#7b7f8b",
    "breadcrumbPicker.background": "#191A21",
    "button.background": "#44475A",
    "button.foreground": "#f6f6f4",
    "button.secondaryBackground": "#282A36",
    "button.secondaryForeground": "#f6f6f4",
    "button.secondaryHoverBackground": "#343746",
    "debugToolBar.background": "#262626",
    "diffEditor.insertedTextBackground": "#50FA7B20",
    "diffEditor.removedTextBackground": "#FF555550",
    "dropdown.background": "#343746",
    "dropdown.border": "#191A21",
    "dropdown.foreground": "#f6f6f4",
    "editor.background": "#282A36",
    "editor.findMatchBackground": "#FFB86C80",
    "editor.findMatchHighlightBackground": "#FFFFFF40",
    "editor.findRangeHighlightBackground": "#44475A75",
    "editor.foldBackground": "#21222C80",
    "editor.foreground": "#f6f6f4",
    "editor.hoverHighlightBackground": "#8BE9FD50",
    "editor.lineHighlightBorder": "#44475A",
    "editor.rangeHighlightBackground": "#BD93F915",
    "editor.selectionBackground": "#44475A",
    "editor.selectionHighlightBackground": "#424450",
    "editor.snippetFinalTabstopHighlightBackground": "#282A36",
    "editor.snippetFinalTabstopHighlightBorder": "#62e884",
    "editor.snippetTabstopHighlightBackground": "#282A36",
    "editor.snippetTabstopHighlightBorder": "#7b7f8b",
    "editor.wordHighlightBackground": "#8BE9FD50",
    "editor.wordHighlightStrongBackground": "#50FA7B50",
    "editorBracketHighlight.foreground1": "#f6f6f4",
    "editorBracketHighlight.foreground2": "#f286c4",
    "editorBracketHighlight.foreground3": "#97e1f1",
    "editorBracketHighlight.foreground4": "#62e884",
    "editorBracketHighlight.foreground5": "#bf9eee",
    "editorBracketHighlight.foreground6": "#FFB86C",
    "editorBracketHighlight.unexpectedBracket.foreground": "#ee6666",
    "editorCodeLens.foreground": "#7b7f8b",
    "editorError.foreground": "#ee6666",
    "editorGroup.border": "#bf9eee",
    "editorGroup.dropBackground": "#44475A70",
    "editorGroupHeader.tabsBackground": "#191A21",
    "editorGutter.addedBackground": "#50FA7B80",
    "editorGutter.deletedBackground": "#FF555580",
    "editorGutter.modifiedBackground": "#8BE9FD80",
    "editorHoverWidget.background": "#282A36",
    "editorHoverWidget.border": "#7b7f8b",
    "editorIndentGuide.activeBackground": "#FFFFFF45",
    "editorIndentGuide.background": "#FFFFFF1A",
    "editorLineNumber.foreground": "#7b7f8b",
    "editorLink.activeForeground": "#97e1f1",
    "editorMarkerNavigation.background": "#262626",
    "editorOverviewRuler.addedForeground": "#50FA7B80",
    "editorOverviewRuler.border": "#191A21",
    "editorOverviewRuler.currentContentForeground": "#62e884",
    "editorOverviewRuler.deletedForeground": "#FF555580",
    "editorOverviewRuler.errorForeground": "#FF555580",
    "editorOverviewRuler.incomingContentForeground": "#bf9eee",
    "editorOverviewRuler.infoForeground": "#8BE9FD80",
    "editorOverviewRuler.modifiedForeground": "#8BE9FD80",
    "editorOverviewRuler.selectionHighlightForeground": "#FFB86C",
    "editorOverviewRuler.warningForeground": "#FFB86C80",
    "editorOverviewRuler.wordHighlightForeground": "#97e1f1",
    "editorOverviewRuler.wordHighlightStrongForeground": "#62e884",
    "editorRuler.foreground": "#FFFFFF1A",
    "editorSuggestWidget.background": "#262626",
    "editorSuggestWidget.foreground": "#f6f6f4",
    "editorSuggestWidget.selectedBackground": "#44475A",
    "editorWarning.foreground": "#97e1f1",
    "editorWhitespace.foreground": "#FFFFFF1A",
    "editorWidget.background": "#262626",
    "errorForeground": "#ee6666",
    "extensionButton.prominentBackground": "#50FA7B90",
    "extensionButton.prominentForeground": "#f6f6f4",
    "extensionButton.prominentHoverBackground": "#50FA7B60",
    "focusBorder": "#7b7f8b",
    "foreground": "#f6f6f4",
    "gitDecoration.conflictingResourceForeground": "#FFB86C",
    "gitDecoration.deletedResourceForeground": "#ee6666",
    "gitDecoration.ignoredResourceForeground": "#7b7f8b",
    "gitDecoration.modifiedResourceForeground": "#97e1f1",
    "gitDecoration.untrackedResourceForeground": "#62e884",
    "inlineChat.regionHighlight": "#343746",
    "input.background": "#282A36",
    "input.border": "#191A21",
    "input.foreground": "#f6f6f4",
    "input.placeholderForeground": "#7b7f8b",
    "inputOption.activeBorder": "#bf9eee",
    "inputValidation.errorBorder": "#ee6666",
    "inputValidation.infoBorder": "#f286c4",
    "inputValidation.warningBorder": "#FFB86C",
    "list.activeSelectionBackground": "#44475A",
    "list.activeSelectionForeground": "#f6f6f4",
    "list.dropBackground": "#44475A",
    "list.errorForeground": "#ee6666",
    "list.focusBackground": "#44475A75",
    "list.highlightForeground": "#97e1f1",
    "list.hoverBackground": "#44475A75",
    "list.inactiveSelectionBackground": "#44475A75",
    "list.warningForeground": "#FFB86C",
    "listFilterWidget.background": "#343746",
    "listFilterWidget.noMatchesOutline": "#ee6666",
    "listFilterWidget.outline": "#424450",
    "merge.currentHeaderBackground": "#50FA7B90",
    "merge.incomingHeaderBackground": "#BD93F990",
    "panel.background": "#282A36",
    "panel.border": "#bf9eee",
    "panelTitle.activeBorder": "#f286c4",
    "panelTitle.activeForeground": "#f6f6f4",
    "panelTitle.inactiveForeground": "#7b7f8b",
    "peekView.border": "#44475A",
    "peekViewEditor.background": "#282A36",
    "peekViewEditor.matchHighlightBackground": "#F1FA8C80",
    "peekViewResult.background": "#262626",
    "peekViewResult.fileForeground": "#f6f6f4",
    "peekViewResult.lineForeground": "#f6f6f4",
    "peekViewResult.matchHighlightBackground": "#F1FA8C80",
    "peekViewResult.selectionBackground": "#44475A",
    "peekViewResult.selectionForeground": "#f6f6f4",
    "peekViewTitle.background": "#191A21",
    "peekViewTitleDescription.foreground": "#7b7f8b",
    "peekViewTitleLabel.foreground": "#f6f6f4",
    "pickerGroup.border": "#bf9eee",
    "pickerGroup.foreground": "#97e1f1",
    "progressBar.background": "#f286c4",
    "selection.background": "#bf9eee",
    "settings.checkboxBackground": "#262626",
    "settings.checkboxBorder": "#191A21",
    "settings.checkboxForeground": "#f6f6f4",
    "settings.dropdownBackground": "#262626",
    "settings.dropdownBorder": "#191A21",
    "settings.dropdownForeground": "#f6f6f4",
    "settings.headerForeground": "#f6f6f4",
    "settings.modifiedItemIndicator": "#FFB86C",
    "settings.numberInputBackground": "#262626",
    "settings.numberInputBorder": "#191A21",
    "settings.numberInputForeground": "#f6f6f4",
    "settings.textInputBackground": "#262626",
    "settings.textInputBorder": "#191A21",
    "settings.textInputForeground": "#f6f6f4",
    "sideBar.background": "#262626",
    "sideBarSectionHeader.background": "#282A36",
    "sideBarSectionHeader.border": "#191A21",
    "sideBarTitle.foreground": "#f6f6f4",
    "statusBar.background": "#191A21",
    "statusBar.debuggingBackground": "#ee6666",
    "statusBar.debuggingForeground": "#191A21",
    "statusBar.foreground": "#f6f6f4",
    "statusBar.noFolderBackground": "#191A21",
    "statusBar.noFolderForeground": "#f6f6f4",
    "statusBarItem.prominentBackground": "#ee6666",
    "statusBarItem.prominentHoverBackground": "#FFB86C",
    "statusBarItem.remoteBackground": "#bf9eee",
    "statusBarItem.remoteForeground": "#282A36",
    "tab.activeBackground": "#282A36",
    "tab.activeBorderTop": "#FF79C680",
    "tab.activeForeground": "#f6f6f4",
    "tab.border": "#191A21",
    "tab.inactiveBackground": "#262626",
    "tab.inactiveForeground": "#7b7f8b",
    "terminal.ansiBlack": "#262626",
    "terminal.ansiBlue": "#bf9eee",
    "terminal.ansiBrightBlack": "#7b7f8b",
    "terminal.ansiBrightBlue": "#d6b4f7",
    "terminal.ansiBrightCyan": "#adf6f6",
    "terminal.ansiBrightGreen": "#78f09a",
    "terminal.ansiBrightMagenta": "#f49dda",
    "terminal.ansiBrightRed": "#f07c7c",
    "terminal.ansiBrightWhite": "#ffffff",
    "terminal.ansiBrightYellow": "#f6f6ae",
    "terminal.ansiCyan": "#97e1f1",
    "terminal.ansiGreen": "#62e884",
    "terminal.ansiMagenta": "#f286c4",
    "terminal.ansiRed": "#ee6666",
    "terminal.ansiWhite": "#f6f6f4",
    "terminal.ansiYellow": "#e7ee98",
    "terminal.background": "#282A36",
    "terminal.foreground": "#f6f6f4",
    "titleBar.activeBackground": "#262626",
    "titleBar.activeForeground": "#f6f6f4",
    "titleBar.inactiveBackground": "#191A21",
    "titleBar.inactiveForeground": "#7b7f8b",
    "walkThrough.embeddedEditorBackground": "#262626"
  },
  "displayName": "Dracula Soft",
  "name": "dracula-soft",
  "semanticHighlighting": true,
  "tokenColors": [
    {
      "scope": [
        "emphasis"
      ],
      "settings": {
        "fontStyle": "italic"
      }
    },
    {
      "scope": [
        "strong"
      ],
      "settings": {
        "fontStyle": "bold"
      }
    },
    {
      "scope": [
        "header"
      ],
      "settings": {
        "foreground": "#bf9eee"
      }
    },
    {
      "scope": [
        "meta.diff",
        "meta.diff.header"
      ],
      "settings": {
        "foreground": "#7b7f8b"
      }
    },
    {
      "scope": [
        "markup.inserted"
      ],
      "settings": {
        "foreground": "#62e884"
      }
    },
    {
      "scope": [
        "markup.deleted"
      ],
      "settings": {
        "foreground": "#ee6666"
      }
    },
    {
      "scope": [
        "markup.changed"
      ],
      "settings": {
        "foreground": "#FFB86C"
      }
    },
    {
      "scope": [
        "invalid"
      ],
      "settings": {
        "fontStyle": "underline italic",
        "foreground": "#ee6666"
      }
    },
    {
      "scope": [
        "invalid.deprecated"
      ],
      "settings": {
        "fontStyle": "underline italic",
        "foreground": "#f6f6f4"
      }
    },
    {
      "scope": [
        "entity.name.filename"
      ],
      "settings": {
        "foreground": "#e7ee98"
      }
    },
    {
      "scope": [
        "markup.error"
      ],
      "settings": {
        "foreground": "#ee6666"
      }
    },
    {
      "scope": [
        "markup.underline"
      ],
      "settings": {
        "fontStyle": "underline"
      }
    },
    {
      "scope": [
        "markup.bold"
      ],
      "settings": {
        "fontStyle": "bold",
        "foreground": "#FFB86C"
      }
    },
    {
      "scope": [
        "markup.heading"
      ],
      "settings": {
        "fontStyle": "bold",
        "foreground": "#bf9eee"
      }
    },
    {
      "scope": [
        "markup.italic"
      ],
      "settings": {
        "fontStyle": "italic",
        "foreground": "#e7ee98"
      }
    },
    {
      "scope": [
        "beginning.punctuation.definition.list.markdown",
        "beginning.punctuation.definition.quote.markdown",
        "punctuation.definition.link.restructuredtext"
      ],
      "settings": {
        "foreground": "#97e1f1"
      }
    },
    {
      "scope": [
        "markup.inline.raw",
        "markup.raw.restructuredtext"
      ],
      "settings": {
        "foreground": "#62e884"
      }
    },
    {
      "scope": [
        "markup.underline.link",
        "markup.underline.link.image"
      ],
      "settings": {
        "foreground": "#97e1f1"
      }
    },
    {
      "scope": [
        "meta.link.reference.def.restructuredtext",
        "punctuation.definition.directive.restructuredtext",
        "string.other.link.description",
        "string.other.link.title"
      ],
      "settings": {
        "foreground": "#f286c4"
      }
    },
    {
      "scope": [
        "entity.name.directive.restructuredtext",
        "markup.quote"
      ],
      "settings": {
        "fontStyle": "italic",
        "foreground": "#e7ee98"
      }
    },
    {
      "scope": [
        "meta.separator.markdown"
      ],
      "settings": {
        "foreground": "#7b7f8b"
      }
    },
    {
      "scope": [
        "fenced_code.block.language",
        "markup.raw.inner.restructuredtext",
        "markup.fenced_code.block.markdown punctuation.definition.markdown"
      ],
      "settings": {
        "foreground": "#62e884"
      }
    },
    {
      "scope": [
        "punctuation.definition.constant.restructuredtext"
      ],
      "settings": {
        "foreground": "#bf9eee"
      }
    },
    {
      "scope": [
        "markup.heading.markdown punctuation.definition.string.begin",
        "markup.heading.markdown punctuation.definition.string.end"
      ],
      "settings": {
        "foreground": "#bf9eee"
      }
    },
    {
      "scope": [
        "meta.paragraph.markdown punctuation.definition.string.begin",
        "meta.paragraph.markdown punctuation.definition.string.end"
      ],
      "settings": {
        "foreground": "#f6f6f4"
      }
    },
    {
      "scope": [
        "markup.quote.markdown meta.paragraph.markdown punctuation.definition.string.begin",
        "markup.quote.markdown meta.paragraph.markdown punctuation.definition.string.end"
      ],
      "settings": {
        "foreground": "#e7ee98"
      }
    },
    {
      "scope": [
        "entity.name.type.class",
        "entity.name.class"
      ],
      "settings": {
        "fontStyle": "normal",
        "foreground": "#97e1f1"
      }
    },
    {
      "scope": [
        "keyword.expressions-and-types.swift",
        "keyword.other.this",
        "variable.language",
        "variable.language punctuation.definition.variable.php",
        "variable.other.readwrite.instance.ruby",
        "variable.parameter.function.language.special"
      ],
      "settings": {
        "fontStyle": "italic",
        "foreground": "#bf9eee"
      }
    },
    {
      "scope": [
        "entity.other.inherited-class"
      ],
      "settings": {
        "fontStyle": "italic",
        "foreground": "#97e1f1"
      }
    },
    {
      "scope": [
        "comment",
        "punctuation.definition.comment",
        "unused.comment",
        "wildcard.comment"
      ],
      "settings": {
        "foreground": "#7b7f8b"
      }
    },
    {
      "scope": [
        "comment keyword.codetag.notation",
        "comment.block.documentation keyword",
        "comment.block.documentation storage.type.class"
      ],
      "settings": {
        "foreground": "#f286c4"
      }
    },
    {
      "scope": [
        "comment.block.documentation entity.name.type"
      ],
      "settings": {
        "fontStyle": "italic",
        "foreground": "#97e1f1"
      }
    },
    {
      "scope": [
        "comment.block.documentation entity.name.type punctuation.definition.bracket"
      ],
      "settings": {
        "foreground": "#97e1f1"
      }
    },
    {
      "scope": [
        "comment.block.documentation variable"
      ],
      "settings": {
        "fontStyle": "italic",
        "foreground": "#FFB86C"
      }
    },
    {
      "scope": [
        "constant",
        "variable.other.constant"
      ],
      "settings": {
        "foreground": "#bf9eee"
      }
    },
    {
      "scope": [
        "constant.character.escape",
        "constant.character.string.escape",
        "constant.regexp"
      ],
      "settings": {
        "foreground": "#f286c4"
      }
    },
    {
      "scope": [
        "entity.name.tag"
      ],
      "settings": {
        "foreground": "#f286c4"
      }
    },
    {
      "scope": [
        "entity.other.attribute-name.parent-selector"
      ],
      "settings": {
        "foreground": "#f286c4"
      }
    },
    {
      "scope": [
        "entity.other.attribute-name"
      ],
      "settings": {
        "fontStyle": "italic",
        "foreground": "#62e884"
      }
    },
    {
      "scope": [
        "entity.name.function",
        "meta.function-call.object",
        "meta.function-call.php",
        "meta.function-call.static",
        "meta.method-call.java meta.method",
        "meta.method.groovy",
        "support.function.any-method.lua",
        "keyword.operator.function.infix"
      ],
      "settings": {
        "foreground": "#62e884"
      }
    },
    {
      "scope": [
        "entity.name.variable.parameter",
        "meta.at-rule.function variable",
        "meta.at-rule.mixin variable",
        "meta.function.arguments variable.other.php",
        "meta.selectionset.graphql meta.arguments.graphql variable.arguments.graphql",
        "variable.parameter"
      ],
      "settings": {
        "fontStyle": "italic",
        "foreground": "#FFB86C"
      }
    },
    {
      "scope": [
        "meta.decorator variable.other.readwrite",
        "meta.decorator variable.other.property"
      ],
      "settings": {
        "fontStyle": "italic",
        "foreground": "#62e884"
      }
    },
    {
      "scope": [
        "meta.decorator variable.other.object"
      ],
      "settings": {
        "foreground": "#62e884"
      }
    },
    {
      "scope": [
        "keyword",
        "punctuation.definition.keyword"
      ],
      "settings": {
        "foreground": "#f286c4"
      }
    },
    {
      "scope": [
        "keyword.control.new",
        "keyword.operator.new"
      ],
      "settings": {
        "fontStyle": "bold"
      }
    },
    {
      "scope": [
        "meta.selector"
      ],
      "settings": {
        "foreground": "#f286c4"
      }
    },
    {
      "scope": [
        "support"
      ],
      "settings": {
        "fontStyle": "italic",
        "foreground": "#97e1f1"
      }
    },
    {
      "scope": [
        "support.function.magic",
        "support.variable",
        "variable.other.predefined"
      ],
      "settings": {
        "fontStyle": "regular",
        "foreground": "#bf9eee"
      }
    },
    {
      "scope": [
        "support.function",
        "support.type.property-name"
      ],
      "settings": {
        "fontStyle": "regular"
      }
    },
    {
      "scope": [
        "constant.other.symbol.hashkey punctuation.definition.constant.ruby",
        "entity.other.attribute-name.placeholder punctuation",
        "entity.other.attribute-name.pseudo-class punctuation",
        "entity.other.attribute-name.pseudo-element punctuation",
        "meta.group.double.toml",
        "meta.group.toml",
        "meta.object-binding-pattern-variable punctuation.destructuring",
        "punctuation.colon.graphql",
        "punctuation.definition.block.scalar.folded.yaml",
        "punctuation.definition.block.scalar.literal.yaml",
        "punctuation.definition.block.sequence.item.yaml",
        "punctuation.definition.entity.other.inherited-class",
        "punctuation.function.swift",
        "punctuation.separator.dictionary.key-value",
        "punctuation.separator.hash",
        "punctuation.separator.inheritance",
        "punctuation.separator.key-value",
        "punctuation.separator.key-value.mapping.yaml",
        "punctuation.separator.namespace",
        "punctuation.separator.pointer-access",
        "punctuation.separator.slice",
        "string.unquoted.heredoc punctuation.definition.string",
        "support.other.chomping-indicator.yaml",
        "punctuation.separator.annotation"
      ],
      "settings": {
        "foreground": "#f286c4"
      }
    },
    {
      "scope": [
        "keyword.operator.other.powershell",
        "keyword.other.statement-separator.powershell",
        "meta.brace.round",
        "meta.function-call punctuation",
        "punctuation.definition.arguments.begin",
        "punctuation.definition.arguments.end",
        "punctuation.definition.entity.begin",
        "punctuation.definition.entity.end",
        "punctuation.definition.tag.cs",
        "punctuation.definition.type.begin",
        "punctuation.definition.type.end",
        "punctuation.section.scope.begin",
        "punctuation.section.scope.end",
        "punctuation.terminator.expression.php",
        "storage.type.generic.java",
        "string.template meta.brace",
        "string.template punctuation.accessor"
      ],
      "settings": {
        "foreground": "#f6f6f4"
      }
    },
    {
      "scope": [
        "meta.string-contents.quoted.double punctuation.definition.variable",
        "punctuation.definition.interpolation.begin",
        "punctuation.definition.interpolation.end",
        "punctuation.definition.template-expression.begin",
        "punctuation.definition.template-expression.end",
        "punctuation.section.embedded.begin",
        "punctuation.section.embedded.coffee",
        "punctuation.section.embedded.end",
        "punctuation.section.embedded.end source.php",
        "punctuation.section.embedded.end source.ruby",
        "punctuation.definition.variable.makefile"
      ],
      "settings": {
        "foreground": "#f286c4"
      }
    },
    {
      "scope": [
        "entity.name.function.target.makefile",
        "entity.name.section.toml",
        "entity.name.tag.yaml",
        "variable.other.key.toml"
      ],
      "settings": {
        "foreground": "#97e1f1"
      }
    },
    {
      "scope": [
        "constant.other.date",
        "constant.other.timestamp"
      ],
      "settings": {
        "foreground": "#FFB86C"
      }
    },
    {
      "scope": [
        "variable.other.alias.yaml"
      ],
      "settings": {
        "fontStyle": "italic underline",
        "foreground": "#62e884"
      }
    },
    {
      "scope": [
        "storage",
        "meta.implementation storage.type.objc",
        "meta.interface-or-protocol storage.type.objc",
        "source.groovy storage.type.def"
      ],
      "settings": {
        "fontStyle": "regular",
        "foreground": "#f286c4"
      }
    },
    {
      "scope": [
        "entity.name.type",
        "keyword.primitive-datatypes.swift",
        "keyword.type.cs",
        "meta.protocol-list.objc",
        "meta.return-type.objc",
        "source.go storage.type",
        "source.groovy storage.type",
        "source.java storage.type",
        "source.powershell entity.other.attribute-name",
        "storage.class.std.rust",
        "storage.type.attribute.swift",
        "storage.type.c",
        "storage.type.core.rust",
        "storage.type.cs",
        "storage.type.groovy",
        "storage.type.objc",
        "storage.type.php",
        "storage.type.haskell",
        "storage.type.ocaml"
      ],
      "settings": {
        "fontStyle": "italic",
        "foreground": "#97e1f1"
      }
    },
    {
      "scope": [
        "entity.name.type.type-parameter",
        "meta.indexer.mappedtype.declaration entity.name.type",
        "meta.type.parameters entity.name.type"
      ],
      "settings": {
        "foreground": "#FFB86C"
      }
    },
    {
      "scope": [
        "storage.modifier"
      ],
      "settings": {
        "foreground": "#f286c4"
      }
    },
    {
      "scope": [
        "string.regexp",
        "constant.other.character-class.set.regexp",
        "constant.character.escape.backslash.regexp"
      ],
      "settings": {
        "foreground": "#e7ee98"
      }
    },
    {
      "scope": [
        "punctuation.definition.group.capture.regexp"
      ],
      "settings": {
        "foreground": "#f286c4"
      }
    },
    {
      "scope": [
        "string.regexp punctuation.definition.string.begin",
        "string.regexp punctuation.definition.string.end"
      ],
      "settings": {
        "foreground": "#ee6666"
      }
    },
    {
      "scope": [
        "punctuation.definition.character-class.regexp"
      ],
      "settings": {
        "foreground": "#97e1f1"
      }
    },
    {
      "scope": [
        "punctuation.definition.group.regexp"
      ],
      "settings": {
        "foreground": "#FFB86C"
      }
    },
    {
      "scope": [
        "punctuation.definition.group.assertion.regexp",
        "keyword.operator.negation.regexp"
      ],
      "settings": {
        "foreground": "#ee6666"
      }
    },
    {
      "scope": [
        "meta.assertion.look-ahead.regexp"
      ],
      "settings": {
        "foreground": "#62e884"
      }
    },
    {
      "scope": [
        "string"
      ],
      "settings": {
        "foreground": "#e7ee98"
      }
    },
    {
      "scope": [
        "punctuation.definition.string.begin",
        "punctuation.definition.string.end"
      ],
      "settings": {
        "foreground": "#dee492"
      }
    },
    {
      "scope": [
        "punctuation.support.type.property-name.begin",
        "punctuation.support.type.property-name.end"
      ],
      "settings": {
        "foreground": "#97e2f2"
      }
    },
    {
      "scope": [
        "string.quoted.docstring.multi",
        "string.quoted.docstring.multi.python punctuation.definition.string.begin",
        "string.quoted.docstring.multi.python punctuation.definition.string.end",
        "string.quoted.docstring.multi.python constant.character.escape"
      ],
      "settings": {
        "foreground": "#7b7f8b"
      }
    },
    {
      "scope": [
        "variable",
        "constant.other.key.perl",
        "support.variable.property",
        "variable.other.constant.js",
        "variable.other.constant.ts",
        "variable.other.constant.tsx"
      ],
      "settings": {
        "foreground": "#f6f6f4"
      }
    },
    {
      "scope": [
        "meta.import variable.other.readwrite",
        "meta.variable.assignment.destructured.object.coffee variable"
      ],
      "settings": {
        "fontStyle": "italic",
        "foreground": "#FFB86C"
      }
    },
    {
      "scope": [
        "meta.import variable.other.readwrite.alias",
        "meta.export variable.other.readwrite.alias",
        "meta.variable.assignment.destructured.object.coffee variable variable"
      ],
      "settings": {
        "fontStyle": "normal",
        "foreground": "#f6f6f4"
      }
    },
    {
      "scope": [
        "meta.selectionset.graphql variable"
      ],
      "settings": {
        "foreground": "#e7ee98"
      }
    },
    {
      "scope": [
        "meta.selectionset.graphql meta.arguments variable"
      ],
      "settings": {
        "foreground": "#f6f6f4"
      }
    },
    {
      "scope": [
        "entity.name.fragment.graphql",
        "variable.fragment.graphql"
      ],
      "settings": {
        "foreground": "#97e1f1"
      }
    },
    {
      "scope": [
        "constant.other.symbol.hashkey.ruby",
        "keyword.operator.dereference.java",
        "keyword.operator.navigation.groovy",
        "meta.scope.for-loop.shell punctuation.definition.string.begin",
        "meta.scope.for-loop.shell punctuation.definition.string.end",
        "meta.scope.for-loop.shell string",
        "storage.modifier.import",
        "punctuation.section.embedded.begin.tsx",
        "punctuation.section.embedded.end.tsx",
        "punctuation.section.embedded.begin.jsx",
        "punctuation.section.embedded.end.jsx",
        "punctuation.separator.list.comma.css",
        "constant.language.empty-list.haskell"
      ],
      "settings": {
        "foreground": "#f6f6f4"
      }
    },
    {
      "scope": [
        "source.shell variable.other"
      ],
      "settings": {
        "foreground": "#bf9eee"
      }
    },
    {
      "scope": [
        "support.constant"
      ],
      "settings": {
        "fontStyle": "normal",
        "foreground": "#bf9eee"
      }
    },
    {
      "scope": [
        "meta.scope.prerequisites.makefile"
      ],
      "settings": {
        "foreground": "#e7ee98"
      }
    },
    {
      "scope": [
        "meta.attribute-selector.scss"
      ],
      "settings": {
        "foreground": "#e7ee98"
      }
    },
    {
      "scope": [
        "punctuation.definition.attribute-selector.end.bracket.square.scss",
        "punctuation.definition.attribute-selector.begin.bracket.square.scss"
      ],
      "settings": {
        "foreground": "#f6f6f4"
      }
    },
    {
      "scope": [
        "meta.preprocessor.haskell"
      ],
      "settings": {
        "foreground": "#7b7f8b"
      }
    },
    {
      "scope": [
        "log.error"
      ],
      "settings": {
        "fontStyle": "bold",
        "foreground": "#ee6666"
      }
    },
    {
      "scope": [
        "log.warning"
      ],
      "settings": {
        "fontStyle": "bold",
        "foreground": "#e7ee98"
      }
    }
  ],
  "type": "dark"
});

export { draculaSoft as default };
