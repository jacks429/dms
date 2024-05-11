globalThis.process ??= {}; globalThis.process.env ??= {};
var rosePineDawn = Object.freeze({
  "colors": {
    "activityBar.activeBorder": "#575279",
    "activityBar.background": "#faf4ed",
    "activityBar.dropBorder": "#f2e9e1",
    "activityBar.foreground": "#575279",
    "activityBar.inactiveForeground": "#797593",
    "activityBarBadge.background": "#d7827e",
    "activityBarBadge.foreground": "#faf4ed",
    "badge.background": "#d7827e",
    "badge.foreground": "#faf4ed",
    "banner.background": "#fffaf3",
    "banner.foreground": "#575279",
    "banner.iconForeground": "#797593",
    "breadcrumb.activeSelectionForeground": "#d7827e",
    "breadcrumb.background": "#faf4ed",
    "breadcrumb.focusForeground": "#797593",
    "breadcrumb.foreground": "#9893a5",
    "breadcrumbPicker.background": "#fffaf3",
    "button.background": "#d7827e",
    "button.foreground": "#faf4ed",
    "button.hoverBackground": "#d7827ee6",
    "button.secondaryBackground": "#fffaf3",
    "button.secondaryForeground": "#575279",
    "button.secondaryHoverBackground": "#f2e9e1",
    "charts.blue": "#56949f",
    "charts.foreground": "#575279",
    "charts.green": "#286983",
    "charts.lines": "#797593",
    "charts.orange": "#d7827e",
    "charts.purple": "#907aa9",
    "charts.red": "#b4637a",
    "charts.yellow": "#ea9d34",
    "checkbox.background": "#fffaf3",
    "checkbox.border": "#6e6a8614",
    "checkbox.foreground": "#575279",
    "debugExceptionWidget.background": "#fffaf3",
    "debugExceptionWidget.border": "#6e6a8614",
    "debugIcon.breakpointCurrentStackframeForeground": "#797593",
    "debugIcon.breakpointDisabledForeground": "#797593",
    "debugIcon.breakpointForeground": "#797593",
    "debugIcon.breakpointStackframeForeground": "#797593",
    "debugIcon.breakpointUnverifiedForeground": "#797593",
    "debugIcon.continueForeground": "#797593",
    "debugIcon.disconnectForeground": "#797593",
    "debugIcon.pauseForeground": "#797593",
    "debugIcon.restartForeground": "#797593",
    "debugIcon.startForeground": "#797593",
    "debugIcon.stepBackForeground": "#797593",
    "debugIcon.stepIntoForeground": "#797593",
    "debugIcon.stepOutForeground": "#797593",
    "debugIcon.stepOverForeground": "#797593",
    "debugIcon.stopForeground": "#b4637a",
    "debugToolBar.background": "#fffaf3",
    "debugToolBar.border": "#f2e9e1",
    "descriptionForeground": "#797593",
    "diffEditor.border": "#f2e9e1",
    "diffEditor.diagonalFill": "#6e6a8626",
    "diffEditor.insertedLineBackground": "#56949f26",
    "diffEditor.insertedTextBackground": "#56949f26",
    "diffEditor.removedLineBackground": "#b4637a26",
    "diffEditor.removedTextBackground": "#b4637a26",
    "diffEditorOverview.insertedForeground": "#56949f80",
    "diffEditorOverview.removedForeground": "#b4637a80",
    "dropdown.background": "#fffaf3",
    "dropdown.border": "#6e6a8614",
    "dropdown.foreground": "#575279",
    "dropdown.listBackground": "#fffaf3",
    "editor.background": "#faf4ed",
    "editor.findMatchBackground": "#6e6a8626",
    "editor.findMatchHighlightBackground": "#6e6a8626",
    "editor.findRangeHighlightBackground": "#6e6a8626",
    "editor.findRangeHighlightBorder": "#0000",
    "editor.focusedStackFrameHighlightBackground": "#6e6a8614",
    "editor.foldBackground": "#fffaf3",
    "editor.foreground": "#575279",
    "editor.hoverHighlightBackground": "#0000",
    "editor.inactiveSelectionBackground": "#6e6a860d",
    "editor.inlineValuesBackground": "#0000",
    "editor.inlineValuesForeground": "#797593",
    "editor.lineHighlightBackground": "#6e6a860d",
    "editor.lineHighlightBorder": "#0000",
    "editor.linkedEditingBackground": "#fffaf3",
    "editor.rangeHighlightBackground": "#6e6a860d",
    "editor.selectionBackground": "#6e6a8614",
    "editor.selectionForeground": "#575279",
    "editor.selectionHighlightBackground": "#6e6a8614",
    "editor.selectionHighlightBorder": "#faf4ed",
    "editor.snippetFinalTabstopHighlightBackground": "#6e6a8614",
    "editor.snippetFinalTabstopHighlightBorder": "#fffaf3",
    "editor.snippetTabstopHighlightBackground": "#6e6a8614",
    "editor.snippetTabstopHighlightBorder": "#fffaf3",
    "editor.stackFrameHighlightBackground": "#6e6a8614",
    "editor.symbolHighlightBackground": "#6e6a8614",
    "editor.symbolHighlightBorder": "#0000",
    "editor.wordHighlightBackground": "#6e6a8614",
    "editor.wordHighlightBorder": "#0000",
    "editor.wordHighlightStrongBackground": "#6e6a8614",
    "editor.wordHighlightStrongBorder": "#6e6a8614",
    "editorBracketHighlight.foreground1": "#b4637a80",
    "editorBracketHighlight.foreground2": "#28698380",
    "editorBracketHighlight.foreground3": "#ea9d3480",
    "editorBracketHighlight.foreground4": "#56949f80",
    "editorBracketHighlight.foreground5": "#d7827e80",
    "editorBracketHighlight.foreground6": "#907aa980",
    "editorBracketMatch.background": "#0000",
    "editorBracketMatch.border": "#797593",
    "editorBracketPairGuide.activeBackground1": "#286983",
    "editorBracketPairGuide.activeBackground2": "#d7827e",
    "editorBracketPairGuide.activeBackground3": "#907aa9",
    "editorBracketPairGuide.activeBackground4": "#56949f",
    "editorBracketPairGuide.activeBackground5": "#ea9d34",
    "editorBracketPairGuide.activeBackground6": "#b4637a",
    "editorBracketPairGuide.background1": "#28698380",
    "editorBracketPairGuide.background2": "#d7827e80",
    "editorBracketPairGuide.background3": "#907aa980",
    "editorBracketPairGuide.background4": "#56949f80",
    "editorBracketPairGuide.background5": "#ea9d3480",
    "editorBracketPairGuide.background6": "#b4637a80",
    "editorCodeLens.foreground": "#d7827e",
    "editorCursor.background": "#575279",
    "editorCursor.foreground": "#9893a5",
    "editorError.border": "#0000",
    "editorError.foreground": "#b4637a",
    "editorGhostText.foreground": "#797593",
    "editorGroup.border": "#0000",
    "editorGroup.dropBackground": "#fffaf3",
    "editorGroup.emptyBackground": "#0000",
    "editorGroup.focusedEmptyBorder": "#0000",
    "editorGroupHeader.noTabsBackground": "#0000",
    "editorGroupHeader.tabsBackground": "#0000",
    "editorGroupHeader.tabsBorder": "#0000",
    "editorGutter.addedBackground": "#56949f",
    "editorGutter.background": "#faf4ed",
    "editorGutter.commentRangeForeground": "#797593",
    "editorGutter.deletedBackground": "#b4637a",
    "editorGutter.foldingControlForeground": "#907aa9",
    "editorGutter.modifiedBackground": "#d7827e",
    "editorHint.border": "#0000",
    "editorHint.foreground": "#797593",
    "editorHoverWidget.background": "#fffaf3",
    "editorHoverWidget.border": "#9893a580",
    "editorHoverWidget.foreground": "#797593",
    "editorHoverWidget.highlightForeground": "#575279",
    "editorHoverWidget.statusBarBackground": "#0000",
    "editorIndentGuide.activeBackground": "#9893a5",
    "editorIndentGuide.background": "#6e6a8626",
    "editorInfo.border": "#f2e9e1",
    "editorInfo.foreground": "#56949f",
    "editorInlayHint.background": "#f2e9e1",
    "editorInlayHint.foreground": "#797593",
    "editorInlayHint.parameterBackground": "#f2e9e1",
    "editorInlayHint.parameterForeground": "#907aa9",
    "editorInlayHint.typeBackground": "#f2e9e1",
    "editorInlayHint.typeForeground": "#56949f",
    "editorLightBulb.foreground": "#286983",
    "editorLightBulbAutoFix.foreground": "#d7827e",
    "editorLineNumber.activeForeground": "#575279",
    "editorLineNumber.foreground": "#797593",
    "editorLink.activeForeground": "#d7827e",
    "editorMarkerNavigation.background": "#fffaf3",
    "editorMarkerNavigationError.background": "#fffaf3",
    "editorMarkerNavigationInfo.background": "#fffaf3",
    "editorMarkerNavigationWarning.background": "#fffaf3",
    "editorOverviewRuler.addedForeground": "#56949f80",
    "editorOverviewRuler.background": "#faf4ed",
    "editorOverviewRuler.border": "#6e6a8626",
    "editorOverviewRuler.bracketMatchForeground": "#797593",
    "editorOverviewRuler.commonContentForeground": "#6e6a860d",
    "editorOverviewRuler.currentContentForeground": "#6e6a8614",
    "editorOverviewRuler.deletedForeground": "#b4637a80",
    "editorOverviewRuler.errorForeground": "#b4637a80",
    "editorOverviewRuler.findMatchForeground": "#6e6a8626",
    "editorOverviewRuler.incomingContentForeground": "#907aa980",
    "editorOverviewRuler.infoForeground": "#56949f80",
    "editorOverviewRuler.modifiedForeground": "#d7827e80",
    "editorOverviewRuler.rangeHighlightForeground": "#6e6a8626",
    "editorOverviewRuler.selectionHighlightForeground": "#6e6a8626",
    "editorOverviewRuler.warningForeground": "#ea9d3480",
    "editorOverviewRuler.wordHighlightForeground": "#6e6a8614",
    "editorOverviewRuler.wordHighlightStrongForeground": "#6e6a8626",
    "editorPane.background": "#0000",
    "editorRuler.foreground": "#6e6a8626",
    "editorSuggestWidget.background": "#fffaf3",
    "editorSuggestWidget.border": "#0000",
    "editorSuggestWidget.focusHighlightForeground": "#d7827e",
    "editorSuggestWidget.foreground": "#797593",
    "editorSuggestWidget.highlightForeground": "#d7827e",
    "editorSuggestWidget.selectedBackground": "#6e6a8614",
    "editorSuggestWidget.selectedForeground": "#575279",
    "editorSuggestWidget.selectedIconForeground": "#575279",
    "editorUnnecessaryCode.border": "#0000",
    "editorUnnecessaryCode.opacity": "#57527980",
    "editorWarning.border": "#0000",
    "editorWarning.foreground": "#ea9d34",
    "editorWhitespace.foreground": "#9893a5",
    "editorWidget.background": "#fffaf3",
    "editorWidget.border": "#f2e9e1",
    "editorWidget.foreground": "#797593",
    "editorWidget.resizeBorder": "#9893a5",
    "errorForeground": "#b4637a",
    "extensionBadge.remoteBackground": "#907aa9",
    "extensionBadge.remoteForeground": "#faf4ed",
    "extensionButton.prominentBackground": "#d7827e",
    "extensionButton.prominentForeground": "#faf4ed",
    "extensionButton.prominentHoverBackground": "#d7827ee6",
    "extensionIcon.preReleaseForeground": "#286983",
    "extensionIcon.starForeground": "#d7827e",
    "extensionIcon.verifiedForeground": "#907aa9",
    "focusBorder": "#6e6a8614",
    "foreground": "#575279",
    "gitDecoration.addedResourceForeground": "#56949f",
    "gitDecoration.conflictingResourceForeground": "#b4637a",
    "gitDecoration.deletedResourceForeground": "#797593",
    "gitDecoration.ignoredResourceForeground": "#9893a5",
    "gitDecoration.modifiedResourceForeground": "#d7827e",
    "gitDecoration.renamedResourceForeground": "#286983",
    "gitDecoration.stageDeletedResourceForeground": "#b4637a",
    "gitDecoration.stageModifiedResourceForeground": "#907aa9",
    "gitDecoration.submoduleResourceForeground": "#ea9d34",
    "gitDecoration.untrackedResourceForeground": "#ea9d34",
    "icon.foreground": "#797593",
    "input.background": "#f2e9e180",
    "input.border": "#6e6a8614",
    "input.foreground": "#575279",
    "input.placeholderForeground": "#797593",
    "inputOption.activeBackground": "#d7827e26",
    "inputOption.activeForeground": "#d7827e",
    "inputValidation.errorBackground": "#fffaf3",
    "inputValidation.errorBorder": "#6e6a8626",
    "inputValidation.errorForeground": "#b4637a",
    "inputValidation.infoBackground": "#fffaf3",
    "inputValidation.infoBorder": "#6e6a8626",
    "inputValidation.infoForeground": "#56949f",
    "inputValidation.warningBackground": "#fffaf3",
    "inputValidation.warningBorder": "#6e6a8626",
    "inputValidation.warningForeground": "#56949f80",
    "keybindingLabel.background": "#f2e9e1",
    "keybindingLabel.border": "#6e6a8626",
    "keybindingLabel.bottomBorder": "#6e6a8626",
    "keybindingLabel.foreground": "#907aa9",
    "keybindingTable.headerBackground": "#f2e9e1",
    "keybindingTable.rowsBackground": "#fffaf3",
    "list.activeSelectionBackground": "#6e6a8614",
    "list.activeSelectionForeground": "#575279",
    "list.deemphasizedForeground": "#797593",
    "list.dropBackground": "#fffaf3",
    "list.errorForeground": "#b4637a",
    "list.filterMatchBackground": "#fffaf3",
    "list.filterMatchBorder": "#d7827e",
    "list.focusBackground": "#6e6a8626",
    "list.focusForeground": "#575279",
    "list.focusOutline": "#6e6a8614",
    "list.highlightForeground": "#d7827e",
    "list.hoverBackground": "#6e6a860d",
    "list.hoverForeground": "#575279",
    "list.inactiveFocusBackground": "#6e6a860d",
    "list.inactiveSelectionBackground": "#fffaf3",
    "list.inactiveSelectionForeground": "#575279",
    "list.invalidItemForeground": "#b4637a",
    "list.warningForeground": "#ea9d34",
    "listFilterWidget.background": "#fffaf3",
    "listFilterWidget.noMatchesOutline": "#b4637a",
    "listFilterWidget.outline": "#f2e9e1",
    "menu.background": "#fffaf3",
    "menu.border": "#6e6a860d",
    "menu.foreground": "#575279",
    "menu.selectionBackground": "#6e6a8614",
    "menu.selectionBorder": "#f2e9e1",
    "menu.selectionForeground": "#575279",
    "menu.separatorBackground": "#6e6a8626",
    "menubar.selectionBackground": "#6e6a8614",
    "menubar.selectionBorder": "#6e6a860d",
    "menubar.selectionForeground": "#575279",
    "merge.border": "#f2e9e1",
    "merge.commonContentBackground": "#6e6a8614",
    "merge.commonHeaderBackground": "#6e6a8614",
    "merge.currentContentBackground": "#ea9d3480",
    "merge.currentHeaderBackground": "#ea9d3480",
    "merge.incomingContentBackground": "#56949f80",
    "merge.incomingHeaderBackground": "#56949f80",
    "minimap.background": "#fffaf3",
    "minimap.errorHighlight": "#b4637a80",
    "minimap.findMatchHighlight": "#6e6a8614",
    "minimap.selectionHighlight": "#6e6a8614",
    "minimap.warningHighlight": "#ea9d3480",
    "minimapGutter.addedBackground": "#56949f",
    "minimapGutter.deletedBackground": "#b4637a",
    "minimapGutter.modifiedBackground": "#d7827e",
    "minimapSlider.activeBackground": "#6e6a8626",
    "minimapSlider.background": "#6e6a8614",
    "minimapSlider.hoverBackground": "#6e6a8614",
    "notebook.cellBorderColor": "#56949f80",
    "notebook.cellEditorBackground": "#fffaf3",
    "notebook.cellHoverBackground": "#f2e9e180",
    "notebook.focusedCellBackground": "#6e6a860d",
    "notebook.focusedCellBorder": "#56949f",
    "notebook.outputContainerBackgroundColor": "#6e6a860d",
    "notificationCenter.border": "#6e6a8614",
    "notificationCenterHeader.background": "#fffaf3",
    "notificationCenterHeader.foreground": "#797593",
    "notificationLink.foreground": "#907aa9",
    "notificationToast.border": "#6e6a8614",
    "notifications.background": "#fffaf3",
    "notifications.border": "#6e6a8614",
    "notifications.foreground": "#575279",
    "notificationsErrorIcon.foreground": "#b4637a",
    "notificationsInfoIcon.foreground": "#56949f",
    "notificationsWarningIcon.foreground": "#ea9d34",
    "panel.background": "#fffaf3",
    "panel.border": "#0000",
    "panel.dropBorder": "#f2e9e1",
    "panelInput.border": "#fffaf3",
    "panelSection.dropBackground": "#6e6a8614",
    "panelSectionHeader.background": "#fffaf3",
    "panelSectionHeader.foreground": "#575279",
    "panelTitle.activeBorder": "#6e6a8626",
    "panelTitle.activeForeground": "#575279",
    "panelTitle.inactiveForeground": "#797593",
    "peekView.border": "#f2e9e1",
    "peekViewEditor.background": "#fffaf3",
    "peekViewEditor.matchHighlightBackground": "#6e6a8626",
    "peekViewResult.background": "#fffaf3",
    "peekViewResult.fileForeground": "#797593",
    "peekViewResult.lineForeground": "#797593",
    "peekViewResult.matchHighlightBackground": "#6e6a8626",
    "peekViewResult.selectionBackground": "#6e6a8614",
    "peekViewResult.selectionForeground": "#575279",
    "peekViewTitle.background": "#f2e9e1",
    "peekViewTitleDescription.foreground": "#797593",
    "pickerGroup.border": "#6e6a8626",
    "pickerGroup.foreground": "#907aa9",
    "ports.iconRunningProcessForeground": "#d7827e",
    "problemsErrorIcon.foreground": "#b4637a",
    "problemsInfoIcon.foreground": "#56949f",
    "problemsWarningIcon.foreground": "#ea9d34",
    "progressBar.background": "#d7827e",
    "quickInput.background": "#fffaf3",
    "quickInput.foreground": "#797593",
    "quickInputList.focusBackground": "#6e6a8614",
    "quickInputList.focusForeground": "#575279",
    "quickInputList.focusIconForeground": "#575279",
    "scrollbar.shadow": "#fffaf34d",
    "scrollbarSlider.activeBackground": "#28698380",
    "scrollbarSlider.background": "#6e6a8614",
    "scrollbarSlider.hoverBackground": "#6e6a8626",
    "searchEditor.findMatchBackground": "#6e6a8614",
    "selection.background": "#6e6a8626",
    "settings.focusedRowBackground": "#fffaf3",
    "settings.focusedRowBorder": "#6e6a8614",
    "settings.headerForeground": "#575279",
    "settings.modifiedItemIndicator": "#d7827e",
    "settings.rowHoverBackground": "#fffaf3",
    "sideBar.background": "#faf4ed",
    "sideBar.dropBackground": "#fffaf3",
    "sideBar.foreground": "#797593",
    "sideBarSectionHeader.background": "#0000",
    "sideBarSectionHeader.border": "#6e6a8614",
    "statusBar.background": "#faf4ed",
    "statusBar.debuggingBackground": "#907aa9",
    "statusBar.debuggingForeground": "#faf4ed",
    "statusBar.foreground": "#797593",
    "statusBar.noFolderBackground": "#faf4ed",
    "statusBar.noFolderForeground": "#797593",
    "statusBarItem.activeBackground": "#6e6a8626",
    "statusBarItem.errorBackground": "#faf4ed",
    "statusBarItem.errorForeground": "#b4637a",
    "statusBarItem.hoverBackground": "#6e6a8614",
    "statusBarItem.prominentBackground": "#f2e9e1",
    "statusBarItem.prominentForeground": "#575279",
    "statusBarItem.prominentHoverBackground": "#6e6a8614",
    "statusBarItem.remoteBackground": "#faf4ed",
    "statusBarItem.remoteForeground": "#ea9d34",
    "symbolIcon.arrayForeground": "#797593",
    "symbolIcon.classForeground": "#797593",
    "symbolIcon.colorForeground": "#797593",
    "symbolIcon.constantForeground": "#797593",
    "symbolIcon.constructorForeground": "#797593",
    "symbolIcon.enumeratorForeground": "#797593",
    "symbolIcon.enumeratorMemberForeground": "#797593",
    "symbolIcon.eventForeground": "#797593",
    "symbolIcon.fieldForeground": "#797593",
    "symbolIcon.fileForeground": "#797593",
    "symbolIcon.folderForeground": "#797593",
    "symbolIcon.functionForeground": "#797593",
    "symbolIcon.interfaceForeground": "#797593",
    "symbolIcon.keyForeground": "#797593",
    "symbolIcon.keywordForeground": "#797593",
    "symbolIcon.methodForeground": "#797593",
    "symbolIcon.moduleForeground": "#797593",
    "symbolIcon.namespaceForeground": "#797593",
    "symbolIcon.nullForeground": "#797593",
    "symbolIcon.numberForeground": "#797593",
    "symbolIcon.objectForeground": "#797593",
    "symbolIcon.operatorForeground": "#797593",
    "symbolIcon.packageForeground": "#797593",
    "symbolIcon.propertyForeground": "#797593",
    "symbolIcon.referenceForeground": "#797593",
    "symbolIcon.snippetForeground": "#797593",
    "symbolIcon.stringForeground": "#797593",
    "symbolIcon.structForeground": "#797593",
    "symbolIcon.textForeground": "#797593",
    "symbolIcon.typeParameterForeground": "#797593",
    "symbolIcon.unitForeground": "#797593",
    "symbolIcon.variableForeground": "#797593",
    "tab.activeBackground": "#6e6a860d",
    "tab.activeForeground": "#575279",
    "tab.activeModifiedBorder": "#56949f",
    "tab.border": "#0000",
    "tab.hoverBackground": "#6e6a8614",
    "tab.inactiveBackground": "#0000",
    "tab.inactiveForeground": "#797593",
    "tab.inactiveModifiedBorder": "#56949f80",
    "tab.lastPinnedBorder": "#9893a5",
    "tab.unfocusedActiveBackground": "#0000",
    "tab.unfocusedHoverBackground": "#0000",
    "tab.unfocusedInactiveBackground": "#0000",
    "tab.unfocusedInactiveModifiedBorder": "#56949f80",
    "terminal.ansiBlack": "#f2e9e1",
    "terminal.ansiBlue": "#56949f",
    "terminal.ansiBrightBlack": "#797593",
    "terminal.ansiBrightBlue": "#56949f",
    "terminal.ansiBrightCyan": "#d7827e",
    "terminal.ansiBrightGreen": "#286983",
    "terminal.ansiBrightMagenta": "#907aa9",
    "terminal.ansiBrightRed": "#b4637a",
    "terminal.ansiBrightWhite": "#575279",
    "terminal.ansiBrightYellow": "#ea9d34",
    "terminal.ansiCyan": "#d7827e",
    "terminal.ansiGreen": "#286983",
    "terminal.ansiMagenta": "#907aa9",
    "terminal.ansiRed": "#b4637a",
    "terminal.ansiWhite": "#575279",
    "terminal.ansiYellow": "#ea9d34",
    "terminal.dropBackground": "#6e6a8614",
    "terminal.foreground": "#575279",
    "terminal.selectionBackground": "#6e6a8614",
    "terminal.tab.activeBorder": "#575279",
    "terminalCursor.background": "#575279",
    "terminalCursor.foreground": "#9893a5",
    "textBlockQuote.background": "#fffaf3",
    "textBlockQuote.border": "#6e6a8614",
    "textCodeBlock.background": "#fffaf3",
    "textLink.activeForeground": "#907aa9e6",
    "textLink.foreground": "#907aa9",
    "textPreformat.foreground": "#ea9d34",
    "textSeparator.foreground": "#797593",
    "titleBar.activeBackground": "#faf4ed",
    "titleBar.activeForeground": "#797593",
    "titleBar.inactiveBackground": "#fffaf3",
    "titleBar.inactiveForeground": "#797593",
    "toolbar.activeBackground": "#6e6a8626",
    "toolbar.hoverBackground": "#6e6a8614",
    "tree.indentGuidesStroke": "#797593",
    "walkThrough.embeddedEditorBackground": "#faf4ed",
    "welcomePage.background": "#faf4ed",
    "welcomePage.buttonBackground": "#fffaf3",
    "welcomePage.buttonHoverBackground": "#f2e9e1",
    "widget.shadow": "#fffaf34d",
    "window.activeBorder": "#fffaf3",
    "window.inactiveBorder": "#fffaf3"
  },
  "displayName": "Ros\xE9 Pine Dawn",
  "name": "rose-pine-dawn",
  "tokenColors": [
    {
      "scope": [
        "comment"
      ],
      "settings": {
        "fontStyle": "italic",
        "foreground": "#9893a5"
      }
    },
    {
      "scope": [
        "constant"
      ],
      "settings": {
        "foreground": "#286983"
      }
    },
    {
      "scope": [
        "constant.numeric",
        "constant.language"
      ],
      "settings": {
        "foreground": "#d7827e"
      }
    },
    {
      "scope": [
        "entity.name"
      ],
      "settings": {
        "foreground": "#d7827e"
      }
    },
    {
      "scope": [
        "entity.name.section",
        "entity.name.tag",
        "entity.name.namespace",
        "entity.name.type"
      ],
      "settings": {
        "foreground": "#56949f"
      }
    },
    {
      "scope": [
        "entity.other.attribute-name",
        "entity.other.inherited-class"
      ],
      "settings": {
        "fontStyle": "italic",
        "foreground": "#907aa9"
      }
    },
    {
      "scope": [
        "invalid"
      ],
      "settings": {
        "foreground": "#b4637a"
      }
    },
    {
      "scope": [
        "invalid.deprecated"
      ],
      "settings": {
        "foreground": "#797593"
      }
    },
    {
      "scope": [
        "keyword"
      ],
      "settings": {
        "foreground": "#286983"
      }
    },
    {
      "scope": [
        "markup.inserted.diff"
      ],
      "settings": {
        "foreground": "#56949f"
      }
    },
    {
      "scope": [
        "markup.deleted.diff"
      ],
      "settings": {
        "foreground": "#b4637a"
      }
    },
    {
      "scope": "markup.heading",
      "settings": {
        "fontStyle": "bold"
      }
    },
    {
      "scope": "markup.bold.markdown",
      "settings": {
        "fontStyle": "bold"
      }
    },
    {
      "scope": "markup.italic.markdown",
      "settings": {
        "fontStyle": "italic"
      }
    },
    {
      "scope": [
        "meta.diff.range"
      ],
      "settings": {
        "foreground": "#907aa9"
      }
    },
    {
      "scope": [
        "meta.tag",
        "meta.brace"
      ],
      "settings": {
        "foreground": "#575279"
      }
    },
    {
      "scope": [
        "meta.import",
        "meta.export"
      ],
      "settings": {
        "foreground": "#286983"
      }
    },
    {
      "scope": "meta.directive.vue",
      "settings": {
        "fontStyle": "italic",
        "foreground": "#907aa9"
      }
    },
    {
      "scope": "meta.property-name.css",
      "settings": {
        "foreground": "#56949f"
      }
    },
    {
      "scope": "meta.property-value.css",
      "settings": {
        "foreground": "#ea9d34"
      }
    },
    {
      "scope": "meta.tag.other.html",
      "settings": {
        "foreground": "#797593"
      }
    },
    {
      "scope": [
        "punctuation"
      ],
      "settings": {
        "foreground": "#797593"
      }
    },
    {
      "scope": [
        "punctuation.accessor"
      ],
      "settings": {
        "foreground": "#286983"
      }
    },
    {
      "scope": [
        "punctuation.definition.string"
      ],
      "settings": {
        "foreground": "#ea9d34"
      }
    },
    {
      "scope": [
        "punctuation.definition.tag"
      ],
      "settings": {
        "foreground": "#9893a5"
      }
    },
    {
      "scope": [
        "storage.type",
        "storage.modifier"
      ],
      "settings": {
        "foreground": "#286983"
      }
    },
    {
      "scope": [
        "string"
      ],
      "settings": {
        "foreground": "#ea9d34"
      }
    },
    {
      "scope": [
        "support"
      ],
      "settings": {
        "foreground": "#56949f"
      }
    },
    {
      "scope": [
        "support.constant"
      ],
      "settings": {
        "foreground": "#ea9d34"
      }
    },
    {
      "scope": [
        "support.function"
      ],
      "settings": {
        "fontStyle": "italic",
        "foreground": "#b4637a"
      }
    },
    {
      "scope": [
        "variable"
      ],
      "settings": {
        "fontStyle": "italic",
        "foreground": "#d7827e"
      }
    },
    {
      "scope": [
        "variable.other",
        "variable.language",
        "variable.function",
        "variable.argument"
      ],
      "settings": {
        "foreground": "#575279"
      }
    },
    {
      "scope": [
        "variable.parameter"
      ],
      "settings": {
        "foreground": "#907aa9"
      }
    }
  ],
  "type": "light"
});

export { rosePineDawn as default };
