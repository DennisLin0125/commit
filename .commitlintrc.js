// .commitlintrc.js
/** @type {import('cz-git').UserConfig} */
module.exports = {
  rules: {
    'body-leading-blank': [2,'always'],
    "footer-leading-blank": [1,'always'],
    "header-max-length": [2,'always',108],
    "scope-empty": [2,'never'],
    "type-empty": [2,"never"],
    "subject-case": [0],
    "type-enum": [2,'always',[
      'feat',
      'fix',
      'docs',
      'style',
      'refactor',
      'perf',
      'test',
      'build',
      'ci',
      'chore',
      'revert',
    ]]
  },
  prompt: {
    messages: {
      type: "選擇您要提交的變更類型:",
      scope: "表示此變更的範圍（可選）:",
      customScope: "表示此更改的範圍:",
      subject: "寫一個關於變更的title:\n",
      body: '提供更改的內容詳細說明（可選）。 使用“|” 換行:\n',
      breaking: '列出所有重大變更（可選）。 使用“|” 換行:\n',
      footerPrefixesSelect: "選擇此變更的changeList的ISSUES類型（可選）:",
      customFooterPrefix: "輸入自訂義前綴:",
      footer: "列舉關聯的 issue. ex: #31, #34:\n",
      confirmCommit: "是否提交commit?"
    },
    types: [
      { value: "feat", name: "feat:     ✨  新增功能", emoji: ":sparkles:" },
      { value: "fix", name: "fix:      🐛  修復bug", emoji: ":bug:" },
      { value: "docs", name: "docs:     📝  文檔變更(README等)", emoji: ":memo:" },
      { value: "style", name: "style:    💄  代碼格式 (不影響功能,例如空格等格式修正)", emoji: ":lipstick:" },
      { value: "refactor", name: "refactor: ♻️  程式重構(不包誇 bug 修復)", emoji: ":recycle:" },
      { value: "perf", name: "perf:     ⚡️  優化程式(提升性能,體驗,算法等)", emoji: ":zap:" },
      { value: "test", name: "test:     ✅  添加疏漏測試或已有測試改動", emoji: ":white_check_mark:" },
      { value: "build", name: "build:    📦️  影響建置系統或外部相依性的更改", emoji: ":package:" },
      { value: "ci", name: "ci:       🎡  CI  設定檔和腳本的更改", emoji: ":ferris_wheel:" },
      { value: "chore", name: "chore:    🔨  改變建構流程,部屬流程創建", emoji: ":hammer:" },
      { value: "revert", name: "revert:   ⏪️  回到上一個commit", emoji: ":rewind:" }
    ],
    useEmoji: true,
    emojiAlign: "center",
    themeColorCode: "",
    scopes: [],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: "bottom",
    customScopesAlias: "custom",
    emptyScopesAlias: "empty",
    upperCaseSubject: false,
    allowBreakingChanges: ['feat', 'fix'],
    breaklineNumber: 100,
    breaklineChar: "|",
    skipQuestions: [],
    issuePrefixes: [{ value: "closed", name: "closed:   ISSUES has been processed" }],
    customIssuePrefixAlign: "top",
    emptyIssuePrefixAlias: "skip",
    customIssuePrefixAlias: "custom",
    allowCustomIssuePrefix: true,
    allowEmptyIssuePrefix: true,
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: "",
    defaultIssues: "",
    defaultScope: "",
    defaultSubject: ""
  }
};