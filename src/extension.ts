import * as vscode from 'vscode'

export function activate(context: vscode.ExtensionContext) {
  vscode.window.showInformationMessage('Example extension activate!')

  const commands = [
    vscode.commands.registerCommand('example-extension.showInformationMessage', () => {
      vscode.window.showInformationMessage('Hello World from example-extension!')
    }),

    vscode.commands.registerCommand('example-extension.openFolder', () => {
      vscode.window
        .showOpenDialog({
          canSelectFiles: false,
          canSelectFolders: true,
          canSelectMany: false
        })
        .then(folderUri => {
          if (folderUri && folderUri[0]) {
            vscode.commands.executeCommand('vscode.openFolder', folderUri[0])
          }
        })
    }),

    vscode.commands.registerCommand('example-extension.showInformationMessage', () => {
      vscode.window.showInformationMessage('Hello World from example-extension!')
    }),
  ]

  commands.forEach(command => context.subscriptions.push(command))
}

export function deactivate() {
  vscode.window.showInformationMessage('Example extension deactivate.')
}
