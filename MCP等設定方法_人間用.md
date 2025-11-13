○FigmaMCP for Claude Code  
*https://zenn.dev/devtatsu/articles/figma-claude-code-mcp

このサイト見て設定してって言えばできる。


○github MCPは下記サイトで、Docker使わないで繋げてと言えばやってくれます。
https://zenn.dev/gmomedia/articles/github-mcp-setup-guide

Docker入れないで、トークンの設定たけです。

・Context7 for Claude Code
次のGitHubリポジトリのREADMEを必ず開いて内容を読んでください：
https://github.com/upstash/context7#readme

特に「Installation」「Install in Claude Code」セクションを正として扱ってください。

前提条件：

私は macOS を使っています。

VS Code 上で「Claude Code」拡張を使っています。

Context7 を 公式READMEの手順通り にセットアップしたいです。

Context7 の APIキーは自分で用意します（CONTEXT7_API_KEY 環境変数に入れる形でもOKです）。

やってほしいこと：

上記READMEを読んだうえで、Claude Code 用の推奨手順 を整理してください。

「Remote Server Connection」と「Local Server Connection」の違いも簡単に説明し、どちらを推奨するかを理由つきで示してください。

私の環境（macOS + VS Code + Claude Code）向けに、READMEの記述を元に 実際にターミナルで実行すべきコマンド を具体的に書いてください。

例：

Remote接続用：
claude mcp add --transport http context7 https://mcp.context7.com/mcp --header "CONTEXT7_API_KEY: <ここに私のAPIキー>"

Local接続用：
claude mcp add context7 -- npx -y @upstash/context7-mcp --api-key <ここに私のAPIキー>

上の例をベースに、READMEの内容に合わせて最終版を整理してください。

<ここに私のAPIキー> など、私が差し替えるべき部分はわかりやすくプレースホルダで示してください。

Context7 MCP が正しく登録されたかを確認するコマンドや手順も README を元に教えてください。

例：claude mcp list や VS Code の「Manage MCP Servers」の開き方など。

もし .mcp.json やその他の設定ファイルを使う方法が README に書かれていれば、Claude Code 用に必要な部分だけ 抜き出して、最小構成のサンプルも提示してください（ただし優先は claude mcp add コマンド方式です）。

README に書かれていない推測・独自解釈は入れず、必ずREADMEを根拠に 説明してください。READMEにない部分は「公式には書かれていない」と明記してください。

最後に、私が実際に行うべき手順を：

「ターミナルでやること」

「VS Code / Claude Code 側で確認すること」
の2つに分けて、番号付きの手順としてまとめてください。

