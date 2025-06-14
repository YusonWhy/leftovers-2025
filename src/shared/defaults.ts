import { Theme, Config, Settings, ModelProvider, Session } from './types'
import { v4 as uuidv4 } from 'uuid'

export function settings(): Settings {
  return {
    aiProvider: ModelProvider.SiliconFlow,

    openaiKey: '',
    apiHost: 'https://api.openai.com',
    dalleStyle: 'vivid',
    imageGenerateNum: 3,
    openaiUseProxy: false,

    azureApikey: '',
    azureDeploymentName: '',
    azureDeploymentNameOptions: [],
    azureDalleDeploymentName: 'dall-e-3',
    azureEndpoint: '',
    azureApiVersion: '2024-05-01-preview',

    chatglm6bUrl: '', // deprecated
    chatglmApiKey: '',
    chatglmModel: '',

    model: 'gpt-4o',
    openaiCustomModelOptions: [],
    temperature: 0.7,
    topP: 1,
    // openaiMaxTokens: 0,
    // openaiMaxContextTokens: 4000,
    openaiMaxContextMessageCount: 20,
    // maxContextSize: "4000",
    // maxTokens: "2048",

    claudeApiKey: '',
    claudeApiHost: 'https://api.anthropic.com/v1',
    claudeModel: 'claude-3-5-sonnet-20241022',

    //chatboxAIModel: 'chatboxai-3.5',

    geminiAPIKey: '',
    geminiAPIHost: 'https://generativelanguage.googleapis.com',
    geminiModel: 'gemini-1.5-pro-latest',

    ollamaHost: 'http://127.0.0.1:11434',
    ollamaModel: '',

    groqAPIKey: '',
    groqModel: 'llama3-70b-8192',

    deepseekAPIKey: '',
    deepseekModel: 'deepseek-chat',

    siliconCloudKey: '',
    siliconCloudModel: 'deepseek-ai/DeepSeek-V3',

    lmStudioHost: 'http://127.0.0.1:1234/v1',
    lmStudioModel: '',

    perplexityApiKey: '',
    perplexityModel: 'llama-3.1-sonar-large-128k-online',

    xAIKey: '',
    xAIModel: 'grok-beta',

    customProviders: [],

    showWordCount: false,
    showTokenCount: false,
    showTokenUsed: true,
    showModelName: true,
    showMessageTimestamp: false,
    showFirstTokenLatency: false,
    userAvatarKey: '',
    defaultAssistantAvatarKey: '',
    theme: Theme.System,
    language: 'en',
    fontSize: 12,
    spellCheck: true,

    defaultPrompt: getDefaultPrompt(),

    allowReportingAndTracking: false,  // 允许发送错误报告信息

    enableMarkdownRendering: true,
    enableLaTeXRendering: true,
    enableMermaidRendering: true,
    injectDefaultMetadata: true,
    autoPreviewArtifacts: false,
    autoCollapseCodeBlock: true,
    pasteLongTextAsAFile: true,

    autoGenerateTitle: true, // 自动生成标题

    autoLaunch: false, // 自启动
    autoUpdate: false, // 自动更新
    betaUpdate: false, // 自动更新

    shortcuts: {
      quickToggle: 'Alt+`', // 快速切换窗口显隐的快捷键
      inputBoxFocus: 'mod+i', // 聚焦输入框的快捷键
      inputBoxWebBrowsingMode: 'mod+e', // 切换输入框的 web 浏览模式的快捷键
      newChat: 'mod+n', // 新建聊天的快捷键
      newPictureChat: 'mod+shift+n', // 新建图片会话的快捷键
      sessionListNavNext: 'mod+tab', // 切换到下一个会话的快捷键
      sessionListNavPrev: 'mod+shift+tab', // 切换到上一个会话的快捷键
      sessionListNavTargetIndex: 'mod', // 会话导航的快捷键
      messageListRefreshContext: 'mod+r', // 刷新上下文的快捷键
      dialogOpenSearch: 'mod+k', // 打开搜索对话框的快捷键
      inpubBoxSendMessage: 'Enter', // 发送消息的快捷键
      inpubBoxSendMessageWithoutResponse: 'Ctrl+Enter', // 发送但不生成回复的快捷键
      optionNavUp: 'up', // 选项导航的快捷键
      optionNavDown: 'down', // 选项导航的快捷键
      optionSelect: 'enter', // 选项导航的快捷键
    },
    extension: {
      webSearch: {
        provider: 'baidu',
        tavilyApiKey: '',
      },
    },
  }
}

export function newConfigs(): Config {
  return { uuid: uuidv4() }
}

export function getDefaultPrompt() {
  return '你是个非常聪明的助手。'
}

