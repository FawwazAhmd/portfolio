🌍 *[English](README.md) ∙ [简体中文](README.zh.md)*


# Corey Chiu 个人网站模板

这是由 [Corey Chiu](https://coreychiu.com) 创建的个人网站模板。


## 特点
- 使用 TailwindCSS、MagicUI 和 Shadcn/UI 设计的精美界面
- 响应式布局
- 明亮/黑暗模式
- GitHub 贡献日历/GitHub 贡献蛇图
- 技术图标云
- 推文网格
- 访客计数器
- 博客部分
- 支持 MDX 和 Markdown
- RSS 订阅
- 网站分析（Google Analytics、OpenPanel Analytics、Plausible Analytics 等）
- SEO 友好


## 技术栈

- [Next.js 16](https://nextjs.org/) + [React 19](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Shadcn/UI](https://ui.shadcn.com/)
- [MagicUI](https://magicui.design/)
- [Phosphor Icons](https://phosphoricons.com/)


## 演示

https://coreychiu.com


## 配置

- `.env.local` - 环境变量
- `src/config/siteConfig.ts` - 网站配置
- `src/config/infoConfig.ts` - 个人信息配置
- `src/config/*.ts` - 各部分的配置
- `src/content/blog/**.mdx` - 博客
- `public/github-contribution-snake/*.svg` - GitHub 贡献蛇 SVG 文件（由 GitHub Action 生成并每天更新）

## 运行

```bash
pnpm install
pnpm dev
```



## 部署

### 一键部署

使用 [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=vercel-examples) 部署示例：

[![使用 Vercel 部署](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/iamcorey/coreychiu-portfolio-template&project-name=coreychiu-portfolio-template&repository-name=coreychiu-portfolio-template)

### 克隆并部署

使用 [pnpm](https://pnpm.io/installation) 执行 [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) 来引导示例：

```bash
pnpm create next-app --example https://github.com/iamcorey/coreychiu-portfolio-template coreychiu-portfolio-template
```

然后，在开发模式下运行 Next.js：

```bash
pnpm dev
```

使用 [Vercel](https://vercel.com/templates) 将其部署到云端（[文档](https://nextjs.org/docs/app/building-your-application/deploying)）。 